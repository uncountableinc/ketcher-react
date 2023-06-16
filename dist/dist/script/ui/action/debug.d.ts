export default debugObj;
declare const debugObj: {
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
};
