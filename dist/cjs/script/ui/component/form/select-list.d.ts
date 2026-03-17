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
/// <reference types="react" />
interface Schema {
    enum: string[];
    enumNames?: string[];
}
interface SelectListProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onSelect'> {
    schema: Schema;
    value: string;
    onSelect: (opt: string, index: number) => void;
    splitIndexes?: number[];
    selected?: string;
    component?: React.ComponentType<unknown>;
    classes: {
        selected?: string;
        split?: string;
        [key: string]: string | undefined;
    };
}
declare function SelectList({ schema, value, onSelect, splitIndexes, selected, component, classes, ...props }: Readonly<SelectListProps>): import("react/jsx-runtime").JSX.Element;
export default SelectList;
