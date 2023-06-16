declare var _default: import("react-redux").ConnectedComponent<typeof Form, import("react-redux").Omit<any, "onUpdate">>;
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
    componentDidUpdate(prevProps: any): void;
    updateState(newState: any): void;
    field(name: any, onChange: any): {
        dataError: any;
        value: any;
        onChange: (val: any) => void;
    };
    render(): JSX.Element;
}
export function Field(props: any): JSX.Element;
export function SelectOneOf(props: any): JSX.Element;
import { Component } from "react";
