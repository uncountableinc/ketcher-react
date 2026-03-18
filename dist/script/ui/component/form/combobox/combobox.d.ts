export default ComboBox;
declare class ComboBox extends Component<any, any, any> {
    constructor(props: any);
    state: {
        suggestsHidden: boolean;
    };
    click(): void;
    blur(): void;
    updateInput(event: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import { Component } from "react";
