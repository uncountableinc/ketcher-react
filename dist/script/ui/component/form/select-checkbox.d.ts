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
import React, { ComponentType } from 'react';
interface BooleanSchema {
    type: 'boolean';
    title?: string;
    default?: boolean;
}
interface EnumSchema {
    title?: string;
    enum: unknown[];
    enumNames?: string[];
    default?: unknown;
}
declare type Schema = BooleanSchema | EnumSchema;
interface SelectCheckboxProps {
    schema: Schema;
    type: string;
    value: number | string | boolean;
    onChange: (val: number | string | boolean) => void;
    component?: ComponentType;
    children?: React.ReactNode;
    className?: string;
    placeholder?: string;
    isFocused?: boolean;
    multiple?: boolean;
}
declare function SelectCheckbox({ schema, ...props }: Readonly<SelectCheckboxProps>): import("react/jsx-runtime").JSX.Element;
export default SelectCheckbox;
