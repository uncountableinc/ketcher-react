import { Pile, ReStruct } from 'ketcher-core';
import { useCallback, useRef } from 'react';
import { useAppContext } from 'src/hooks';
import Editor from 'src/script/editor';
import SGroupTool from 'src/script/editor/tool/sgroup';
import { BondsContextMenuProps, ItemEventParams } from '../contextMenu.types';

type Params = ItemEventParams<BondsContextMenuProps>;

const useBondSGroupEdit = () => {
  const { getKetcherInstance } = useAppContext();
  const sGroupsRef = useRef(new Pile<number>());

  const handler = useCallback(() => {
    const editor = getKetcherInstance().editor as Editor;
    const sGroups = Array.from(sGroupsRef.current);
    SGroupTool.sgroupDialog(editor, sGroups[0]);
  }, [getKetcherInstance]);

  // In react-contexify, `disabled` is executed before `hidden`
  const disabled = useCallback(
    ({ props }: Params) => {
      const editor = getKetcherInstance().editor as Editor;
      const struct: ReStruct = editor.render.ctab;
      const bondIds = props!.bondIds!;

      if (bondIds.length > 1) {
        return true;
      }

      const bond = struct.bonds.get(bondIds[0])!;
      sGroupsRef.current = bond.b.getAttachedSGroups(struct.molecule);

      return sGroupsRef.current.size > 1;
    },
    [getKetcherInstance],
  );

  const hidden = useCallback(() => {
    const editor = getKetcherInstance().editor as Editor;
    const struct: ReStruct = editor.render.ctab;
    const [sgGroupId] = sGroupsRef.current;
    const sgroup = struct.sgroups.get(sgGroupId)?.item;
    if (sgroup?.isSuperatomWithoutLabel) {
      return true;
    }
    return sGroupsRef.current.size === 0;
  }, [getKetcherInstance]);

  return [handler, disabled, hidden] as const;
};

export default useBondSGroupEdit;
