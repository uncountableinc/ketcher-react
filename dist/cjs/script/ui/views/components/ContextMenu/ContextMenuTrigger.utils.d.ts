import { FunctionalGroup } from 'ketcher-core';
import Editor, { ClosestItemWithMap } from 'src/script/editor';
import { ContextMenuProps, GetIsItemInSelectionArgs } from './contextMenu.types';
import { Selection } from '../../../../editor/Editor';
export declare const getIsItemInSelection: ({ item, selection, selectedSGroupsIds, selectedFunctionalGroups, }: GetIsItemInSelectionArgs) => boolean;
export declare function getMenuPropsForClosestItem(editor: Editor, closestItem: ClosestItemWithMap): ContextMenuProps | null;
export declare function getMenuPropsForSelection(selection: Selection | null, selectedFunctionalGroups: Map<number, FunctionalGroup>): ContextMenuProps | null;
