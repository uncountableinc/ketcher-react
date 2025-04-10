export default function initEditor(dispatch: any, getState: any): {
    onInit: (editor: any) => void;
    onChange: (action: any) => void;
    onSelectionChange: () => void;
    onElementEdit: (selem: any) => Promise<any>;
    onEnhancedStereoEdit: ({ ...init }: {
        [x: string]: any;
    }) => Promise<any>;
    onQuickEdit: (atom: any) => Promise<any>;
    onBondEdit: (bonds: any) => Promise<any>;
    onRgroupEdit: (rgroup: any) => Promise<any>;
    onSgroupEdit: (sgroup: any) => Promise<{
        type: any;
        attrs: any;
    }>;
    onRemoveFG: (result: any) => Promise<any>;
    onMessage: (msg: any) => void;
    onAromatizeStruct: (struct: any) => any;
    onDearomatizeStruct: (struct: any) => any;
    onMouseDown: () => void;
    onConfirm: () => Promise<any>;
    onShowInfo: (payload: any) => void;
    onApiSettings: (payload: any) => any;
    onUpdateFloatingTools: (...args: any[]) => void;
    onZoomIn: import("lodash").DebouncedFunc<() => any>;
    onZoomOut: import("lodash").DebouncedFunc<() => any>;
    onShowMacromoleculesErrorMessage: (payload: any) => any;
};
