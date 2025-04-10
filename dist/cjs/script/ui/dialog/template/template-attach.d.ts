declare const _default: import("react-redux").ConnectedComponent<typeof Attach, import("react-redux").Omit<import("react").ClassAttributes<Attach> & {
    [x: string]: any;
    onInit: any;
}, string | number>>;
export default _default;
declare class Attach extends Component<any, any, any> {
    constructor({ onInit, ...props }: {
        [x: string]: any;
        onInit: any;
    });
    MODES: {
        SAVE: string;
        EDIT: string;
    };
    mode: string;
    tmpl: {
        struct: any;
        props: {
            atomid: number;
            bondid: number;
        };
    };
    onResult(): {
        name: any;
        attach: {
            atomid: any;
            bondid: any;
        };
    } | null;
    checkIsValidName(name: any): boolean;
    render(): import("react/jsx-runtime").JSX.Element;
}
import { Component } from "react";
