export function exec(action: any): boolean;
export const CLIP_AREA_BASE_CLASS: "cliparea";
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
        cut: (event: any) => Promise<void>;
        paste: (event: any) => void;
        keydown: (event: any) => Promise<void>;
    } | undefined;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import { Component } from "react";
