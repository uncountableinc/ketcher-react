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
export interface Option {
    value: string;
    label: string;
}
interface Props {
    options: Array<Option>;
    onChange: (value: string) => void;
    className?: string;
    value?: string;
    multiple?: boolean;
    disabled?: boolean;
}
declare const Select: ({ className, value, onChange, multiple, disabled, options }: Props) => JSX.Element;
export default Select;
