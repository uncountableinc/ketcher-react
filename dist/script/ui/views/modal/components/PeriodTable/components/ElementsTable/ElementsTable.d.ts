export default ElementsTable;
declare class ElementsTable extends Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    shouldComponentUpdate(nextProps: any): boolean;
    getAtomClassNames: (item: any) => string[];
    render(): JSX.Element;
}
import { Component } from "react";
