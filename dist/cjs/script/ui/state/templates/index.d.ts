/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import initTmplLib from './init-lib';
export { initTmplLib };
export declare function selectTmpl(tmpl: any): {
    type: string;
    data: {
        selected: any;
    };
};
export declare function changeGroup(group: any): {
    type: string;
    data: {
        group: any;
        selected: null;
    };
};
export declare function changeFilter(filter: any): {
    type: string;
    data: {
        filter: any;
        selected: null;
    };
};
export declare function changeTab(tab: any): {
    type: string;
    data: {
        tab: any;
    };
};
export declare function initAttach(name: any, attach: any): {
    type: string;
    data: {
        name: any;
        atomid: any;
        bondid: any;
    };
};
export declare function setAttachPoints(attach: any): {
    type: string;
    data: {
        atomid: any;
        bondid: any;
    };
};
export declare function setTmplName(name: any): {
    type: string;
    data: {
        name: any;
    };
};
export declare function editTmpl(tmpl: any): (dispatch: any, getState: any) => void;
export declare function deleteUserTmpl(tmpl: any): {
    type: string;
    data: {
        tmpl: any;
    };
};
export declare function deleteTmpl(tmpl: any): (dispatch: any, getState: any) => void;
export declare function saveUserTmpl(struct: any): (dispatch: any, getState: any) => void;
export declare const initTmplsState: {
    lib: never[];
    selected: null;
    filter: string;
    group: null;
    attach: {};
    mode: string;
    tab: number;
};
declare function templatesReducer(state: {
    lib: never[];
    selected: null;
    filter: string;
    group: null;
    attach: {};
    mode: string;
    tab: number;
} | undefined, action: any): any;
export default templatesReducer;
