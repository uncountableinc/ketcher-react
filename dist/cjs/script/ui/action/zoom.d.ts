export const zoomList: number[];
declare const _default: {
    zoom: {
        shortcut: string[];
        enabledInViewOnly: boolean;
        selected: (editor: any) => any;
        action: (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'zoom-out': {
        shortcut: string[];
        title: string;
        enabledInViewOnly: boolean;
        disabled: (editor: any) => boolean;
        action: (event: any) => (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'zoom-in': {
        shortcut: string[];
        title: string;
        enabledInViewOnly: boolean;
        disabled: (editor: any) => boolean;
        action: (event: any) => (editor: any) => void;
        hidden: (options: any) => boolean;
    };
    'zoom-list': {
        enabledInViewOnly: boolean;
        hidden: (options: any) => boolean;
    };
};
export default _default;
