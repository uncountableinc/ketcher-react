import { ArrowAddTool } from './arrow.types';
import Editor from '../../Editor';
export declare class MultitailArrowAddTool implements ArrowAddTool {
    private editor;
    static MIN_HEIGHT: number;
    static MIN_WIDTH: number;
    constructor(editor: Editor);
    private get render();
    private get reStruct();
    mousedown(): void;
    mousemove(): void;
    mouseup(event: MouseEvent): void;
    private getArrowWithMinimalSizeEnd;
}
