export function selectTmpl(tmpl: any): {
    type: string;
    data: {
        selected: any;
    };
};
export function changeGroup(group: any): {
    type: string;
    data: {
        group: any;
        selected: null;
    };
};
export function changeFilter(filter: any): {
    type: string;
    data: {
        filter: any;
        selected: null;
    };
};
export function changeTab(tab: any): {
    type: string;
    data: {
        tab: any;
    };
};
export function initAttach(name: any, attach: any): {
    type: string;
    data: {
        name: any;
        atomid: any;
        bondid: any;
    };
};
export function setAttachPoints(attach: any): {
    type: string;
    data: {
        atomid: any;
        bondid: any;
    };
};
export function setTmplName(name: any): {
    type: string;
    data: {
        name: any;
    };
};
export function editTmpl(tmpl: any): (dispatch: any, getState: any) => void;
export function deleteUserTmpl(tmpl: any): {
    type: string;
    data: {
        tmpl: any;
    };
};
export function deleteTmpl(tmpl: any): (dispatch: any, getState: any) => void;
export function saveUserTmpl(struct: any): (dispatch: any, getState: any) => void;
export { initTmplLib };
export namespace initTmplsState {
    const lib: never[];
    const selected: null;
    const filter: string;
    const group: null;
    const attach: {};
    const mode: string;
    const tab: number;
}
export default templatesReducer;
import initTmplLib from "./init-lib";
declare function templatesReducer(state: {
    lib: never[];
    selected: null;
    filter: string;
    group: null;
    attach: {};
    mode: string;
    tab: number;
} | undefined, action: any): any;
