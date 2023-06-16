export function exec(action: any): boolean;
export const actions: string[];
export default ClipArea;
declare class ClipArea extends Component<any, any, any> {
    constructor(props: any);
    textAreaRef: import("react").RefObject<any>;
    componentDidMount(): void;
    target: any;
    listeners: {
        mouseup: (event: any) => void;
        mousedown: (event: any) => void;
        copy: (event: any) => void;
        cut: (event: any) => void;
        paste: (event: any) => void;
    } | undefined;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
import { Component } from "react";
