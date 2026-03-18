import { Tool } from '../Tool';
import { Editor } from '../../Editor';
import { SelectMode } from './select.types';
export * from './select.helpers';
export declare class SelectCommonTool implements Tool {
    constructor(editor: Editor, mode: SelectMode);
}
