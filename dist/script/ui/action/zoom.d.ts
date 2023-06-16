export const zoomList: number[];
declare var _default: {
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
};
export default _default;
