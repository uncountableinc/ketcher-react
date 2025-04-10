export default StructEditor;
declare class StructEditor extends Component<any, any, any> {
    constructor(props: any);
    state: {
        enableCursor: boolean;
        clientX: number;
        clientY: number;
    };
    editorRef: import("react").RefObject<any>;
    logRef: import("react").RefObject<any>;
    handleWheel: (event: any) => void;
    /**
     * @param {WheelEvent} event
     */
    scrollCanvas(event: WheelEvent): void;
    /**
     * @param {WheelEvent} event
     */
    handleHorizontalScroll(event: WheelEvent): void;
    /**
     * For mouse wheel and touchpad
     * @param {WheelEvent} event
     */
    handleScroll(event: WheelEvent): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    UNSAFE_componentWillReceiveProps(props: any): void;
    componentDidMount(): void;
    editor: Editor | undefined;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import { Component } from "react";
import Editor from "../../../../editor";
