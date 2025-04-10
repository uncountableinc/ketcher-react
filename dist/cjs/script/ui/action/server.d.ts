export default config;
declare const config: {
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
        enabledInViewOnly: boolean;
        title: string;
        action: {
            dialog: string;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
    analyse: {
        shortcut: string;
        enabledInViewOnly: boolean;
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
        enabledInViewOnly: boolean;
        action: {
            dialog: string;
        };
        hidden: (options: any) => boolean;
    };
    'explicit-hydrogens': {
        title: string;
        action: {
            thunk: (dispatch: any, getState: any) => void;
        };
        disabled: (editor: any, server: any, options: any) => boolean;
        hidden: (options: any) => boolean;
    };
};
