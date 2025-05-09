/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import {
  AtomList,
  Bond,
  Elements,
  StereoLabel,
  getAtomType,
} from 'ketcher-core';
import { capitalize } from 'lodash/fp';
import {
  sdataSchema,
  getSdataDefault,
  sdataCustomSchema,
} from '../schema/sdata-schema';
import { matchCharge } from '../utils';

const DefaultStereoGroupNumber = 1;

export function fromElement(selem) {
  if (selem.label === 'R#') {
    return {
      type: 'rlabel',
      values: fromRlabel(selem.rglabel),
      ...selem,
    };
  }
  if (selem.label === 'L#') return fromAtomList(selem);

  if (Elements.get(selem.label)) return fromAtom(selem);

  if (!selem.label && 'attachmentPoints' in selem)
    return { ap: fromApoint(selem.attachmentPoints) };

  return selem; // probably generic
}

export function toElement(elem) {
  if (elem.type === 'rlabel') {
    return {
      label: elem.values.length ? 'R#' : 'C',
      rglabel: elem.values.length === 0 ? null : toRlabel(elem.values),
    };
  }
  if (elem.type === 'list' || elem.type === 'not-list') return toAtomList(elem);

  if (!elem.label && 'ap' in elem) {
    return { attachmentPoints: toApoint(elem.ap) };
  }
  if (elem.atomType === 'list') {
    elem.label = 'L#';
    elem.pseudo = null;
    elem.atomList = new AtomList({
      notList: elem.notList,
      ids: elem.atomList?.split(',').map((el) => Elements.get(el).number) || [],
    });
    delete elem.notList;
    delete elem.atomType;
    return toAtom(elem);
  }

  if (elem.atomType === 'pseudo') {
    elem.label = elem.pseudo;
    elem.atomList = null;
    delete elem.notList;
    delete elem.atomType;
    return toAtom(elem);
  }

  if (
    Elements.get(capitalize(elem.label)) ||
    (elem.customQuery && elem.customQuery !== '')
  ) {
    elem.label = capitalize(elem.label);
    elem.pseudo = null;
    elem.atomList = null;
    delete elem.notList;
    delete elem.atomType;
    return toAtom(elem);
  }

  if (
    elem.label === 'A' ||
    elem.label === '*' ||
    elem.label === 'Q' ||
    elem.label === 'X' ||
    elem.label === 'R'
  ) {
    elem.pseudo = elem.label;
    return toAtom(elem);
  }

  return elem;
}

export function fromAtom(satom) {
  const alias = satom.alias || '';
  const atomType = getAtomType(satom);
  return {
    alias,
    atomType,
    atomList:
      satom.atomList?.ids.map((i) => Elements.get(i).label).join(',') || '',
    notList: satom.atomList?.notList || false,
    pseudo: satom.pseudo,
    label: satom.label,
    charge: satom.charge === null ? '' : satom.charge.toString(),
    isotope: satom.isotope === null ? '' : satom.isotope.toString(),
    explicitValence: satom.explicitValence,
    radical: satom.radical,
    invRet: satom.invRet,
    exactChangeFlag: !!satom.exactChangeFlag,
    ringBondCount: satom.ringBondCount,
    substitutionCount: satom.substitutionCount,
    unsaturatedAtom: !!satom.unsaturatedAtom,
    hCount: satom.hCount,
    stereoParity: satom.stereoParity,
    implicitHCount: satom.implicitHCount,
    aromaticity: satom.queryProperties.aromaticity,
    ringMembership: satom.queryProperties.ringMembership,
    ringSize: satom.queryProperties.ringSize,
    connectivity: satom.queryProperties.connectivity,
    chirality: satom.queryProperties.chirality,
    customQuery:
      satom.queryProperties.customQuery === null
        ? ''
        : satom.queryProperties.customQuery.toString(),
  };
}

export function toAtom(atom) {
  // TODO merge this to Atom.attrlist?
  //      see ratomtool
  const {
    aromaticity = null,
    ringMembership = null,
    ringSize = null,
    connectivity = null,
    chirality = null,
    customQuery = '',
    ...restAtom
  } = atom;
  if (customQuery && customQuery !== '') {
    return Object.assign({}, restAtom, {
      label: 'A',
      atomList: null,
      pseudo: null,
      alias: null,
      charge: null,
      isotope: null,
      explicitValence: -1,
      radical: 0,
      ringBondCount: 0,
      hCount: 0,
      substitutionCount: 0,
      unsaturatedAtom: 0,
      implicitHCount: null,
      queryProperties: {
        aromaticity: null,
        implicitHCount: null,
        ringMembership: null,
        ringSize: null,
        connectivity: null,
        chirality: null,
        customQuery,
      },
      invRet: 0,
      exactChangeFlag: 0,
    });
  }
  const pch = matchCharge(restAtom.charge);
  const charge = pch ? parseInt(pch[1] + pch[3] + pch[2]) : restAtom.charge;

  const conv = Object.assign({}, restAtom, {
    isotope: restAtom.isotope ? Number(restAtom.isotope) : null,
    // empty charge value by default treated as zero,
    // no need to pass and display zero values(0, -0) explicitly
    charge: restAtom.charge && charge !== 0 ? Number(charge) : null,
    alias: restAtom.alias || null,
    exactChangeFlag: +(restAtom.exactChangeFlag ?? false),
    unsaturatedAtom: +(restAtom.unsaturatedAtom ?? false),
    queryProperties: {
      aromaticity,
      implicitHCount: restAtom.implicitHCount,
      ringMembership,
      ringSize,
      connectivity,
      chirality,
      customQuery: customQuery === '' ? null : customQuery,
    },
  });

  return conv;
}

function fromAtomList(satom) {
  return {
    type: satom.atomList.notList ? 'not-list' : 'list',
    values: satom.atomList.ids.map((i) => Elements.get(i).label),
  };
}

function toAtomList(atom) {
  return {
    pseudo: null,
    label: 'L#',
    atomList: new AtomList({
      notList: atom.type === 'not-list',
      ids: atom.values.map((el) => Elements.get(el).number),
    }),
  };
}

export function fromStereoLabel(stereoLabel) {
  if (stereoLabel === null) return { type: null };
  const type = stereoLabel.match(/\D+/g)[0];
  const number = +stereoLabel.replace(type, '');

  if (type === StereoLabel.Abs) {
    return {
      type: stereoLabel,
      orNumber: DefaultStereoGroupNumber,
      andNumber: DefaultStereoGroupNumber,
    };
  }

  if (type === StereoLabel.And) {
    return {
      type,
      orNumber: DefaultStereoGroupNumber,
      andNumber: number,
    };
  }

  if (type === StereoLabel.Or) {
    return {
      type,
      orNumber: number,
      andNumber: DefaultStereoGroupNumber,
    };
  }
}

export function toStereoLabel(stereoLabel) {
  switch (stereoLabel.type) {
    case StereoLabel.And:
      return `${StereoLabel.And}${stereoLabel.andNumber || 1}`;

    case StereoLabel.Or:
      return `${StereoLabel.Or}${stereoLabel.orNumber || 1}`;

    default:
      return stereoLabel.type;
  }
}

function fromApoint(sap) {
  return {
    primary: ((sap || 0) & 1) > 0,
    secondary: ((sap || 0) & 2) > 0,
  };
}

function toApoint(ap) {
  return (ap.primary && 1) + (ap.secondary && 2);
}

function fromRlabel(rg) {
  const res = [];
  let rgi;
  let val;
  for (rgi = 0; rgi < 32; rgi++) {
    if (rg & (1 << rgi)) {
      val = rgi + 1;
      res.push(val); // push the string
    }
  }
  return res;
}

function toRlabel(values) {
  let res = 0;
  values.forEach((val) => {
    const rgi = val - 1;
    res |= 1 << rgi;
  });
  return res;
}

export function fromBond(sbond) {
  const type = sbond.type;
  const stereo = sbond.stereo;
  const isCustomQuery = sbond.customQuery !== null;
  return {
    type: isCustomQuery ? '' : fromBondType(type, stereo),
    topology: sbond.topology,
    center: sbond.reactingCenterStatus,
    customQuery: !isCustomQuery ? '' : sbond.customQuery.toString(),
  };
}

export function toBond(bond) {
  const isCustomQuery = bond.customQuery !== '';
  return {
    topology: bond.topology,
    reactingCenterStatus: bond.center,
    customQuery: !isCustomQuery ? null : bond.customQuery,
    ...toBondType(isCustomQuery ? 'any' : bond.type),
  };
}

const bondCaptionMap = {
  single: {
    type: Bond.PATTERN.TYPE.SINGLE,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  up: {
    type: Bond.PATTERN.TYPE.SINGLE,
    stereo: Bond.PATTERN.STEREO.UP,
  },
  down: {
    type: Bond.PATTERN.TYPE.SINGLE,
    stereo: Bond.PATTERN.STEREO.DOWN,
  },
  updown: {
    type: Bond.PATTERN.TYPE.SINGLE,
    stereo: Bond.PATTERN.STEREO.EITHER,
  },
  double: {
    type: Bond.PATTERN.TYPE.DOUBLE,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  crossed: {
    type: Bond.PATTERN.TYPE.DOUBLE,
    stereo: Bond.PATTERN.STEREO.CIS_TRANS,
  },
  triple: {
    type: Bond.PATTERN.TYPE.TRIPLE,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  aromatic: {
    type: Bond.PATTERN.TYPE.AROMATIC,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  singledouble: {
    type: Bond.PATTERN.TYPE.SINGLE_OR_DOUBLE,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  singlearomatic: {
    type: Bond.PATTERN.TYPE.SINGLE_OR_AROMATIC,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  doublearomatic: {
    type: Bond.PATTERN.TYPE.DOUBLE_OR_AROMATIC,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  any: {
    type: Bond.PATTERN.TYPE.ANY,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  hydrogen: {
    type: Bond.PATTERN.TYPE.HYDROGEN,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
  dative: {
    type: Bond.PATTERN.TYPE.DATIVE,
    stereo: Bond.PATTERN.STEREO.NONE,
  },
};

export function toBondType(caption) {
  return Object.assign({}, bondCaptionMap[caption]);
}

function fromBondType(type, stereo) {
  for (const caption in bondCaptionMap) {
    if (
      bondCaptionMap[caption].type === type &&
      bondCaptionMap[caption].stereo === stereo
    )
      return caption;
  }
  return '';
}

export function fromSgroup(ssgroup) {
  const type = ssgroup.type || 'SRU';
  const { context, fieldName, fieldValue, absolute, attached } = ssgroup.attrs;

  if (absolute === false && attached === false)
    ssgroup.attrs.radiobuttons = 'Relative';
  else ssgroup.attrs.radiobuttons = attached ? 'Attached' : 'Absolute';

  if (
    sdataSchema[context][fieldName] &&
    sdataSchema[context][fieldName].properties.fieldValue.items
  )
    ssgroup.attrs.fieldValue = fieldValue.split('\n');

  const sDataInitValue =
    type === 'DAT'
      ? {
          context: context || getSdataDefault(sdataCustomSchema, 'context'),
          fieldName:
            fieldName || getSdataDefault(sdataCustomSchema, 'fieldName'),
          fieldValue:
            fieldValue || getSdataDefault(sdataCustomSchema, 'fieldValue'),
        }
      : type === 'SRU' &&
        ssgroup.attrs.subscript == null &&
        ssgroup.attrs.connectivity == null
      ? {
          subscript: 'n',
          connectivity: 'ht',
        }
      : {};

  return Object.assign({ type }, ssgroup.attrs, sDataInitValue);
}

export function toSgroup(sgroup) {
  const { type, radiobuttons, ...props } = sgroup;
  const attrs = { ...props };

  const absolute = 'absolute';
  const attached = 'attached';

  switch (radiobuttons) {
    case 'Absolute':
      attrs[absolute] = true;
      attrs[attached] = false;
      break;
    case 'Attached':
      attrs[absolute] = false;
      attrs[attached] = true;
      break;
    case 'Relative':
      attrs[absolute] = false;
      attrs[attached] = false;
      break;
    default:
      break;
  }

  if (attrs.fieldName) attrs.fieldName = attrs.fieldName.trim();

  if (attrs.fieldValue) {
    attrs.fieldValue =
      typeof attrs.fieldValue === 'string'
        ? attrs.fieldValue.trim()
        : attrs.fieldValue;
  }

  return {
    type,
    attrs,
  };
}
