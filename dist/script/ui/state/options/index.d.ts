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
export namespace initOptionsState {
    namespace app {
        const server: boolean;
        const templates: boolean;
        const functionalGroups: boolean;
        const saltsAndSolvents: boolean;
    }
    namespace analyse {
        const values: null;
        const roundWeight: number;
        const roundMass: number;
        const roundElAnalysis: number;
    }
    namespace check {
        const checkOptions: string[];
    }
    namespace recognize {
        const file: null;
        const structStr: null;
        const fragment: boolean;
        const version: null;
    }
    const settings: Record<string, any> & Record<string, string>;
    function getServerSettings(): Pick<Record<string, any> & Record<string, string>, string>;
    function getServerSettings(): Pick<Record<string, any> & Record<string, string>, string>;
}
export default optionsReducer;
declare function optionsReducer(state: {} | undefined, action: any): {};
