import { Editor } from '../../Editor';
declare const isMacroMolecule: (editor: Editor, id: number) => boolean;
declare const isMergingToMacroMolecule: (editor: Editor, dragCtx: any) => boolean;
declare const isBondingWithMacroMolecule: (editor: Editor, event: MouseEvent) => boolean | null | undefined;
export { isBondingWithMacroMolecule, isMacroMolecule, isMergingToMacroMolecule, };
