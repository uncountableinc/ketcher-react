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
export declare function initKeydownListener(element: any): (dispatch: any, getState: any) => void;
export declare function removeKeydownListener(element: any): () => void;
export declare function initClipboard(dispatch: any): {
    formats: any[];
    focused(): boolean;
    onLegacyCut(): {} | null;
    onCut(): Promise<{} | null | undefined>;
    onCopy(): Promise<{} | null | undefined>;
    onPaste(data: any, isSmarts: boolean): Promise<void | undefined>;
    onLegacyPaste(data: any, isSmarts: boolean): void;
};
