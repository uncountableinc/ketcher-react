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
import { Struct } from 'ketcher-core';
export declare function onAction(action: any): any;
export declare function loadStruct(struct: any): (_dispatch: any, getState: any) => void;
export declare function parseStruct(struct: string | Struct, server: any, options?: any): Promise<Struct>;
export declare function removeStructAction(): {
    type: string;
    action?: Record<string, unknown>;
};
export declare const getSelectionFromStruct: (struct: any) => {};
export declare function load(struct: Struct, options?: any): (dispatch: any, getState: any) => Promise<void>;
export declare function openInfoModal(command: 'Paste' | 'Copy' | 'Cut'): {
    type: 'MODAL_OPEN';
    data: {
        name: 'info-modal';
        prop: {
            message: 'Paste' | 'Copy' | 'Cut';
        };
    };
};
export declare function openInfoModalWithCustomMessage(message: string): {
    type: 'MODAL_OPEN';
    data: {
        name: 'info-modal';
        prop: {
            customText: string;
        };
    };
};
