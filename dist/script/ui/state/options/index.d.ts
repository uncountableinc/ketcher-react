export function initOptionsState(): {
    app: {
        server: boolean;
        templates: boolean;
        functionalGroups: boolean;
        saltsAndSolvents: boolean;
    };
    analyse: {
        values: null;
        roundWeight: number;
        roundMass: number;
        roundElAnalysis: number;
    };
    check: {
        checkOptions: string[];
    };
    recognize: {
        file: null;
        structStr: null;
        fragment: boolean;
        version: null;
    };
    settings: Record<string, any> & Record<string, string>;
    getServerSettings(): Pick<Record<string, any> & Record<string, string>, string>;
};
export function appUpdate(data: any): (dispatch: any) => void;
export function saveSettings(newSettings: any): {
    type: string;
    data: any;
};
export function changeRound(roundName: any, value: any): {
    type: string;
    data: {
        [x: number]: any;
    };
};
export function setStruct(str: any): {
    type: string;
    data: {
        structStr: any;
    };
};
export function changeVersion(version: any): {
    type: string;
    data: {
        version: any;
    };
};
export function changeImage(file: any): {
    type: string;
    data: {
        file: any;
        structStr: null;
    };
};
export function shouldFragment(isFrag: any): {
    type: string;
    data: {
        fragment: any;
    };
};
export function checkOpts(data: any): {
    type: string;
    data: any;
};
export default optionsReducer;
declare function optionsReducer(state: {} | undefined, action: any): {};
