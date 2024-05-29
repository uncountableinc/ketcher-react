import { type ElementLabel, type AtomColor } from 'ketcher-core';
import Editor from './Editor';
export declare class HoverIcon {
    element: any;
    _fill: AtomColor | '';
    _label: ElementLabel | '';
    isShown: boolean;
    /**
     Is required for the case, when mouse moved outside the canvas, then loading of structure
     happens and icon needs to be shown above loader.
     */
    shouldBeShownWhenMouseBack: boolean;
    editor: Editor;
    constructor(editor: Editor);
    set fill(fillColor: AtomColor | '');
    get fill(): AtomColor | '';
    set label(label: ElementLabel | '');
    get label(): ElementLabel | '';
    isOverLoader(event: MouseEvent): boolean;
    onMouseMove(event: MouseEvent): void;
    onMouseLeave(event: MouseEvent): void;
    updatePosition(): void;
    show(): void;
    hide(restShouldBeShownWhenMouseBack?: boolean): void;
    initialize(): {
        element: any;
        fill: AtomColor | '';
        label: ElementLabel | '';
    };
    create(): void;
}
