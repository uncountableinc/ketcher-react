export * from "./action.types";
export default config;
declare const config: {
    help: {
        shortcut: string[];
        action: () => void | undefined;
        hidden: (options: any) => boolean;
    };
    fullscreen: {
        title: string;
        action: () => void;
        hidden: (options: any) => boolean;
    };
    'functional-groups': {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
            prop: {
                tab: number;
            };
        };
        selected: (editor: any) => boolean;
        disabled: (_: any, __: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'template-lib': {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
            prop: {
                tab: null;
            };
        };
        selected: (editor: any) => boolean;
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    zoom: {
        shortcut: string[];
        selected: (editor: any) => any;
        action: (editor: any) => any;
        hidden: (options: any) => boolean;
    };
    'zoom-out': {
        shortcut: string[];
        title: string;
        disabled: (editor: any) => boolean;
        action: (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'zoom-in': {
        shortcut: string[];
        title: string;
        disabled: (editor: any) => boolean;
        action: (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'zoom-list': {
        hidden: (options: any) => boolean;
    };
    hand: {
        title: string;
        shortcut: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'select-lasso': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
    };
    'select-rectangle': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
        hidden: (options: any) => boolean;
    };
    'select-fragment': {
        title: string;
        shortcut: string;
        action: {
            tool: string;
            opts: string;
        };
        hidden: (options: any) => boolean;
    };
    erase: {
        title: string;
        shortcut: string[];
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    chain: {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'enhanced-stereo': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'charge-plus': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    'charge-minus': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: number;
        };
        hidden: (options: any) => boolean;
    };
    transforms: {
        hidden: (options: any) => boolean;
    };
    'transform-rotate': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'transform-flip-h': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: string;
        };
        disabled: typeof import("./flips").isFlipDisabled;
        hidden: (options: any) => boolean;
    };
    'transform-flip-v': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
            opts: string;
        };
        disabled: typeof import("./flips").isFlipDisabled;
        hidden: (options: any) => boolean;
    };
    sgroup: {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    arrows: {
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-filled-bow': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-dashed-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-failed': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-both-ends-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-equilibrium-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-open-half-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-unbalanced-equilibrium-filled-half-triangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-filled-bow': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-filled-triangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-open-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-arrow-elliptical-arc-arrow-open-half-angle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").RxnArrowMode;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-plus': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-mapping-tools': {
        hidden: (options: any) => boolean;
    };
    'reaction-map': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-unmap': {
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    rgroup: {
        hidden: (options: any) => boolean;
    };
    'rgroup-label': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'rgroup-fragment': {
        shortcut: string[];
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    'rgroup-attpoints': {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    shapes: {
        hidden: (options: any) => boolean;
    };
    'shape-ellipse': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    'shape-rectangle': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    'shape-line': {
        title: string;
        action: {
            tool: string;
            opts: import("ketcher-core").SimpleObjectMode;
        };
        hidden: (options: any) => boolean;
    };
    text: {
        shortcut: string;
        title: string;
        action: {
            tool: string;
        };
        hidden: (options: any) => boolean;
    };
    bonds: {
        hidden: (options: any) => boolean;
    };
    'force-update': {
        shortcut: string;
        action: (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'qs-serialize': {
        shortcut: string;
        action: (editor: any) => void;
    };
    hidden: (options: any) => boolean;
    layout: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    clean: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    arom: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    dearom: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    cip: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    check: {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    analyse: {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    recognize: {
        title: string;
        action: {
            dialog: string;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    miew: {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    clear: {
        shortcut: string;
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        hidden: (options: any) => boolean;
    };
    open: {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    save: {
        shortcut: string;
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'atom-props': {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'bond-props': {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    undo: {
        shortcut: string;
        title: string;
        action: (editor: any) => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    redo: {
        shortcut: string[];
        title: string;
        action: (editor: any) => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    cut: {
        shortcut: string;
        title: string;
        action: (editor: any) => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    copies: {
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    copy: {
        shortcut: string;
        title: string;
        action: (editor: any) => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'copy-image': {
        shortcut: string;
        title: string;
        action: () => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'copy-mol': {
        shortcut: string;
        title: string;
        action: () => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    'copy-ket': {
        shortcut: string;
        title: string;
        action: () => void;
        disabled: (editor: any) => boolean;
        hidden: (options: any) => boolean;
    };
    paste: {
        shortcut: string;
        title: string;
        action: (editor: any) => void;
        selected: ({ actions }: {
            actions: any;
        }) => any;
        hidden: (options: any) => boolean;
    };
    settings: {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    about: {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'reaction-automap': {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
        disabled: (editor: any, server: any, options: any) => boolean;
    };
    'period-table': {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'extended-table': {
        title: string;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'select-all': {
        title: string;
        shortcut: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        hidden: (options: any) => boolean;
    };
    'deselect-all': {
        title: string;
        shortcut: string;
        action: (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'select-descriptors': {
        title: string;
        shortcut: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        hidden: (options: any) => boolean;
    };
    'any-atom': {
        title: string;
        action: {
            tool: string;
            opts: {
                label: string;
                pseudo: string;
                type: string;
            };
        };
        hidden: (options: any) => boolean;
    };
};
