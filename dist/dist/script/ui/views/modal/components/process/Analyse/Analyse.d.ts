export default Analyse;
declare const Analyse: import("react-redux").ConnectedComponent<typeof AnalyseDialog, import("react-redux").Omit<any, "values" | "onAnalyse" | "round" | "loading" | "onChangeRound">>;
declare class AnalyseDialog extends Component<any, any, any> {
    static contextType: import("react").Context<import("../../../../../../../contexts").IErrorsContext>;
    constructor(props: any);
    constructor(props: any, context: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
import { Component } from "react";
