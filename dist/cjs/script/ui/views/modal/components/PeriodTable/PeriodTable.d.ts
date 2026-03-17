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
declare type AtomType = 'atom' | 'gen' | 'list' | 'not-list';
interface AtomResult {
    label: string;
    pseudo: string | null;
}
interface GenResult {
    type: 'gen';
    label: string;
    pseudo: string;
}
interface ListResult {
    type: 'list' | 'not-list';
    values: string[];
}
declare type PeriodTableResult = AtomResult | GenResult | ListResult | null;
declare const PeriodTable: import("react-redux").ConnectedComponent<any, {
    type?: AtomType | undefined;
    values?: string[] | undefined;
    label?: string | undefined;
    pseudo?: string | undefined;
    isNestedModal?: boolean | undefined;
    onOk: (result: PeriodTableResult) => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default PeriodTable;
