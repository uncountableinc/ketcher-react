import { FunctionalGroup } from 'ketcher-core';
import Editor from 'src/script/editor';
import { ClosestItem, ContextMenuShowProps, GetIsItemInSelectionArgs } from './contextMenu.types';
import { Selection } from '../../../../editor/Editor';
export declare const getIsItemInSelection: ({ item, selection, selectedSGroupsIds, selectedFunctionalGroups, }: GetIsItemInSelectionArgs) => boolean;
export declare function getMenuPropsForClosestItem(editor: Editor, closestItem: ClosestItem): ContextMenuShowProps | null;
export declare function getMenuPropsForSelection(selection: Selection | null, selectedFunctionalGroups: Map<number, FunctionalGroup>): ContextMenuShowProps | null;
