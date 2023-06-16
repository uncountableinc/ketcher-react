declare var _default: {
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
};
export default _default;
