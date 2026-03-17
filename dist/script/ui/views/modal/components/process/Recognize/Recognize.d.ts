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
declare type StructStringOrPromise = string | Promise<unknown> | null;
interface RecognizeDialogProps {
    file: File | null;
    structStr: StructStringOrPromise;
    fragment: boolean;
    version: string;
    imagoVersions: string[];
    onOk: (result: unknown) => void;
    onCancel: () => void;
    onRecognize: (file: File | null, version: string) => void;
    isFragment: (v: boolean) => void;
    onImage: (file: File | null) => void;
    onChangeImago: (version: string) => void;
}
declare function RecognizeDialog(prop: Readonly<RecognizeDialogProps>): import("react/jsx-runtime").JSX.Element;
declare const Recognize: import("react-redux").ConnectedComponent<typeof RecognizeDialog, {
    readonly onCancel: () => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default Recognize;
