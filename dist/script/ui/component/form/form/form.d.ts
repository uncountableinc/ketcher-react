declare const _default: import("react-redux").ConnectedComponent<typeof Form, import("react-redux").Omit<any, "onUpdate">>;
export default _default;
declare class Form extends Component<any, any, any> {
    constructor(props: any);
    schema: {
        key: any;
        serialize: (inst: any) => {
            instance: any;
            valid: boolean;
            errors: import("jsonschema").ValidationError[];
        };
        deserialize: (inst: any) => any;
    };
    updateState(newState: any): void;
    componentDidUpdate(prevProps: any): void;
    field(name: any, onChange: any): {
        dataError: any;
        value: any;
        onChange: (val: any) => void;
    };
    render(): import("react/jsx-runtime").JSX.Element;
}
export function Field(props: any): import("react/jsx-runtime").JSX.Element;
export function CustomQueryField(props: any): import("react/jsx-runtime").JSX.Element;
export function FieldWithModal(props: any): import("react/jsx-runtime").JSX.Element;
export function SelectOneOf(props: any): import("react/jsx-runtime").JSX.Element;
import { Component } from "react";
