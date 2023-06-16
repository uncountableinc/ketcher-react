export default Save;
declare const Save: import("react-redux").ConnectedComponent<typeof SaveDialog, import("react-redux").Omit<any, "options" | "server" | "formState" | "struct" | "checkState" | "onCheck" | "moleculeErrors" | "ignoreChiralFlag" | "onTmplSave" | "onResetForm">>;
declare class SaveDialog extends Component<any, any, any> {
    static contextType: import("react").Context<import("../../../../../../../contexts").IErrorsContext>;
    constructor(props: any);
    state: {
        disableControls: boolean;
        imageFormat: string;
        tabIndex: number;
        isLoading: boolean;
    };
    isRxn: any;
    textAreaRef: import("react").RefObject<any>;
    saveSchema: {
        title: string;
        type: string;
        properties: {
            filename: {
                title: string;
                type: string;
                maxLength: number;
                pattern: string;
                invalidMessage: (res: any) => "Filename should contain at least one character" | "Filename is too long" | "A filename cannot contain characters: \\ / : * ? \" < > | and cannot start with '.'";
            };
            format: {
                title: string;
                enum: string[];
                enumNames: any[];
            };
        };
    };
    componentDidMount(): void;
    isImageFormat: (format: any) => boolean;
    isBinaryCdxFormat: (format: any) => boolean;
    showStructWarningMessage: (format: any) => boolean;
    changeType: (type: any) => any;
    changeTab: (index: any) => void;
    getWarnings: (format: any) => any[];
    renderForm: () => JSX.Element;
    renderSaveFile: () => JSX.Element;
    renderWarnings: () => JSX.Element | null;
    getButtons: () => JSX.Element[];
    render(): JSX.Element;
}
import { Component } from "react";
