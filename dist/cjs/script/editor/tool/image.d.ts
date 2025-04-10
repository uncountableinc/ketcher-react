import { Vec2 } from 'ketcher-core';
import { Tool } from './Tool';
import type Editor from '../Editor';
export declare class ImageTool implements Tool {
    private readonly editor;
    static readonly INPUT_ID = "image-upload";
    private element;
    private dragCtx;
    constructor(editor: Editor);
    mousedown(event: MouseEvent): void;
    click(event: MouseEvent): void;
    mousemove(event: PointerEvent): void;
    mouseup(): boolean;
    onFileUpload(clickPosition: Vec2): void;
    private createElement;
    private getElement;
    private resetElementValue;
}
