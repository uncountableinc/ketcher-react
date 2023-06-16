export default PeriodTable;
declare const PeriodTable: import("react-redux").ConnectedComponent<typeof Table, any>;
declare class Table extends Component<any, any, any> {
    constructor(props: any);
    state: {
        type: any;
        value: any;
        current: import("ketcher-core").Element | undefined;
        isInfo: boolean;
    };
    changeType: (type: any) => void;
    headerContent: () => JSX.Element;
    selected: (label: any) => any;
    onAtomSelect: (label: any, activateImmediately?: boolean) => void;
    result: () => {
        label: any;
        pseudo: null;
        type?: undefined;
        values?: undefined;
    } | {
        type: any;
        label: any;
        pseudo: any;
        values?: undefined;
    } | {
        type: any;
        values: any;
        label?: undefined;
        pseudo?: undefined;
    } | null;
    currentEvents: (element: any) => {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    render(): JSX.Element;
}
import { Component } from "react";
