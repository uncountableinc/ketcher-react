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

import { Schema, Validator } from 'jsonschema';
import {
  StereLabelStyleType,
  StereoColoringType,
  ShowHydrogenLabels,
  ShowHydrogenLabelNames,
  defaultBondThickness,
} from 'ketcher-core';

type ExtendedSchema = Schema & {
  enumNames?: Array<string>;
  default?: any;
};

export enum MeasurementUnits {
  Px = 'px',
  Cm = 'cm',
  Pt = 'pt',
  Inch = 'inch',
}

export enum ImageResolution {
  high = '600',
  low = '72',
}

const editor: {
  resetToSelect: ExtendedSchema;
  rotationStep: ExtendedSchema;
} = {
  resetToSelect: {
    title: 'Reset to Select Tool',
    enum: [true, 'paste', false],
    enumNames: ['on', 'After Paste', 'off'],
    default: 'paste',
  },
  rotationStep: {
    title: 'Rotation Step, º',
    type: 'integer',
    minimum: 1,
    maximum: 90,
    default: 15,
  },
};

const render: {
  showValenceWarnings: ExtendedSchema;
  atomColoring: ExtendedSchema;
  showStereoFlags: ExtendedSchema;
  stereoLabelStyle: ExtendedSchema;
  colorOfAbsoluteCenters: ExtendedSchema;
  colorOfAndCenters: ExtendedSchema;
  colorOfOrCenters: ExtendedSchema;
  colorStereogenicCenters: ExtendedSchema;
  autoFadeOfStereoLabels: ExtendedSchema;
  absFlagLabel: ExtendedSchema;
  andFlagLabel: ExtendedSchema;
  mixedFlagLabel: ExtendedSchema;
  ignoreChiralFlag: ExtendedSchema;
  orFlagLabel: ExtendedSchema;
  font: ExtendedSchema;
  fontsz: ExtendedSchema;
  fontszUnit: ExtendedSchema;
  fontszsub: ExtendedSchema;
  fontszsubUnit: ExtendedSchema;
  carbonExplicitly: ExtendedSchema;
  showCharge: ExtendedSchema;
  showValence: ExtendedSchema;
  showHydrogenLabels: ExtendedSchema;
  aromaticCircle: ExtendedSchema;
  bondSpacing: ExtendedSchema;
  bondThickness: ExtendedSchema;
  bondThicknessUnit: ExtendedSchema;
  stereoBondWidth: ExtendedSchema;
  stereoBondWidthUnit: ExtendedSchema;
  bondLength: ExtendedSchema;
  bondLengthUnit: ExtendedSchema;
  reactionComponentMarginSize: ExtendedSchema;
  reactionComponentMarginSizeUnit: ExtendedSchema;
  hashSpacing: ExtendedSchema;
  hashSpacingUnit: ExtendedSchema;
  imageResolution: ExtendedSchema;
} = {
  showValenceWarnings: {
    title: 'Show valence warnings',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  atomColoring: {
    title: 'Atom coloring',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  showStereoFlags: {
    title: 'Show the Stereo flags',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  stereoLabelStyle: {
    title: 'Label display at\u00A0stereogenic\u00A0centers',
    enum: [
      StereLabelStyleType.IUPAC,
      StereLabelStyleType.Classic,
      StereLabelStyleType.On,
      StereLabelStyleType.Off,
    ],
    enumNames: ['IUPAC style', 'Classic', 'On', 'Off'],
    default: StereLabelStyleType.IUPAC,
  },
  colorOfAbsoluteCenters: {
    title: ' Absolute Center color',
    type: 'string',
    default: '#ff0000',
  },
  colorOfAndCenters: {
    title: 'AND Centers color',
    type: 'string',
    default: '#0000cd',
  },
  colorOfOrCenters: {
    title: 'OR Centers color',
    type: 'string',
    default: '#228b22',
  },
  colorStereogenicCenters: {
    title: 'Color stereogenic centers',
    enum: [
      StereoColoringType.LabelsOnly,
      StereoColoringType.BondsOnly,
      StereoColoringType.LabelsAndBonds,
      StereoColoringType.Off,
    ],
    enumNames: ['Labels Only', 'Bonds Only', 'Labels And Bonds', 'Off'],
    default: StereoColoringType.LabelsOnly,
  },
  autoFadeOfStereoLabels: {
    title: 'Auto fade And/Or center labels',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  absFlagLabel: {
    title: 'Text of Absolute flag',
    type: 'string',
    default: 'ABS',
  },
  andFlagLabel: {
    title: 'Text of AND flag',
    type: 'string',
    default: 'AND Enantiomer',
  },
  mixedFlagLabel: {
    title: 'Text of Mixed flag',
    type: 'string',
    default: 'Mixed',
  },
  ignoreChiralFlag: {
    title: 'Ignore the chiral flag',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  orFlagLabel: {
    title: 'Text of OR flag',
    type: 'string',
    default: 'OR Enantiomer',
  },
  font: {
    title: 'Font',
    type: 'string',
    default: '30px Arial',
  },
  fontsz: {
    title: 'Font size',
    type: 'number',
    default: 13,
    minimum: 0.1,
    maximum: 96,
  },
  fontszUnit: {
    title: 'Font size unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  fontszsub: {
    title: 'Sub font size',
    type: 'number',
    default: 13,
    minimum: 0.1,
    maximum: 96,
  },
  fontszsubUnit: {
    title: 'Sub font size unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  // Atom
  carbonExplicitly: {
    title: 'Display carbon explicitly',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  showCharge: {
    title: 'Display charge',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  showValence: {
    title: 'Display valence',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  showHydrogenLabels: {
    title: 'Show hydrogen labels',
    enum: Object.values(ShowHydrogenLabels),
    enumNames: Object.values(ShowHydrogenLabelNames),
    default: ShowHydrogenLabels.TerminalAndHetero,
  },
  // Bonds
  aromaticCircle: {
    title: 'Aromatic Bonds as circle',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  bondSpacing: {
    title: 'Bond spacing',
    type: 'integer',
    default: 15,
    minimum: 1,
    maximum: 100,
  },
  bondThickness: {
    title: 'Bond thickness',
    type: 'number',
    default: defaultBondThickness,
    minimum: 0.1,
    maximum: 96,
  },
  bondThicknessUnit: {
    title: 'Bond thickness unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  stereoBondWidth: {
    title: 'Stereo (Wedge) bond width',
    type: 'number',
    default: 6,
    minimum: 0.1,
    maximum: 96,
  },
  stereoBondWidthUnit: {
    title: 'Stereo (Wedge) bond width unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  bondLength: {
    title: 'Bond length',
    type: 'number',
    default: 40,
    minimum: 0.1,
    maximum: 1000,
  },
  bondLengthUnit: {
    title: 'Bond length unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  reactionComponentMarginSize: {
    title: 'Reaction component margin size',
    type: 'number',
    default: 20, // half of bond length
    minimum: 0.1,
    maximum: 1000,
  },
  reactionComponentMarginSizeUnit: {
    title: 'Reaction component margin size unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  hashSpacing: {
    title: 'Hash spacing',
    type: 'number',
    default: 1.2,
    minimum: 0.1,
    maximum: 1000,
  },
  hashSpacingUnit: {
    title: 'Hash spacing unit',
    enum: Object.values(MeasurementUnits),
    enumNames: Object.values(MeasurementUnits),
    default: MeasurementUnits.Px,
  },
  imageResolution: {
    title: 'Image resolution',
    enum: Object.values(ImageResolution),
    enumNames: Object.keys(ImageResolution),
    default: ImageResolution.low,
  },
};

const server: {
  'smart-layout': ExtendedSchema;
  'ignore-stereochemistry-errors': ExtendedSchema;
  'mass-skip-error-on-pseudoatoms': ExtendedSchema;
  'gross-formula-add-rsites': ExtendedSchema;
  'gross-formula-add-isotopes': ExtendedSchema;
  'dearomatize-on-load': ExtendedSchema;
  ignoreChiralFlag: ExtendedSchema;
} = {
  'dearomatize-on-load': {
    title: 'dearomatize-on-load',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  'smart-layout': {
    title: 'Smart-layout',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  ignoreChiralFlag: {
    title: 'Ignore the chiral flag',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  'ignore-stereochemistry-errors': {
    title: 'Ignore stereochemistry errors',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  'mass-skip-error-on-pseudoatoms': {
    title: 'Ignore pseudoatoms at mass',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  'gross-formula-add-rsites': {
    title: 'Add Rsites at mass calculation',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
  'gross-formula-add-isotopes': {
    title: 'Add Isotopes at\u00A0mass\u00A0calculation',
    type: 'boolean',
    description: 'slider',
    default: true,
  },
};

export const SERVER_OPTIONS = Object.keys(server);

const debug: {
  showAtomIds: ExtendedSchema;
  showBondIds: ExtendedSchema;
  showHalfBondIds: ExtendedSchema;
  showLoopIds: ExtendedSchema;
} = {
  showAtomIds: {
    title: 'Show atom Ids',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  showBondIds: {
    title: 'Show bonds Ids',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  showHalfBondIds: {
    title: 'Show half bonds Ids',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
  showLoopIds: {
    title: 'Show loop Ids',
    type: 'boolean',
    description: 'slider',
    default: false,
  },
};

const miew: {
  miewMode: ExtendedSchema;
  miewTheme: ExtendedSchema;
  miewAtomLabel: ExtendedSchema;
} = {
  miewMode: {
    title: 'Display mode',
    enum: ['LN', 'BS', 'LC'],
    enumNames: ['Lines', 'Balls and Sticks', 'Licorice'],
    default: 'LN',
  },
  miewTheme: {
    title: 'Background color',
    enum: ['light', 'dark'],
    enumNames: ['Light', 'Dark'],
    default: 'light',
  },
  miewAtomLabel: {
    title: 'Label coloring',
    enum: ['no', 'bright', 'blackAndWhite', 'black'],
    enumNames: ['No', 'Bright', 'Black and White', 'Black'],
    default: 'bright',
  },
};

export const MIEW_OPTIONS = Object.keys(miew);

const optionsSchema: ExtendedSchema = {
  title: 'Settings',
  type: 'object',
  required: [],
  properties: {
    ...editor,
    ...render,
    ...server,
    ...debug,
    ...miew,
  },
};

export default optionsSchema;

export function getDefaultOptions(): Record<string, any> {
  if (!optionsSchema.properties) return {};

  return Object.keys(optionsSchema.properties).reduce((res, prop) => {
    res[prop] = (optionsSchema.properties?.[prop] as ExtendedSchema)?.default;
    return res;
  }, {});
}

export function validation(settings): Record<string, string> | null {
  if (typeof settings !== 'object' || settings === null) return null;

  const validator = new Validator();
  const result = validator.validate(settings, optionsSchema);
  const errorsProps = result.errors.map((el) => el.path[el.path.length - 1]);

  return Object.keys(settings).reduce((res, prop) => {
    if (!optionsSchema.properties) return res;

    if (optionsSchema.properties[prop] && errorsProps.indexOf(prop) === -1)
      res[prop] = settings[prop];

    return res;
  }, {});
}
