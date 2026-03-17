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
declare const RgroupLogicContainer: import("react-redux").ConnectedComponent<(props: import("./RgroupLogic").RgroupLogicProps & import("../../../modal.types").BaseCallProps) => import("react/jsx-runtime").JSX.Element, {
    className: string;
    frags: Set<number>;
    ifthen: number;
    label: number;
    range: string;
    resth: boolean;
    rgroupLabels: number[];
    name?: string | undefined;
    onCancel: () => void;
    onOk: (result: any) => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default RgroupLogicContainer;
