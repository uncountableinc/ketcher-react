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
import { Component } from 'react';
interface Schema {
    enumNames: string[];
}
interface ComboBoxProps {
    value: string;
    type?: string;
    schema: Schema;
    onChange: (value: string) => void;
}
interface ComboBoxState {
    suggestsHidden: boolean;
}
declare class ComboBox extends Component<ComboBoxProps, ComboBoxState> {
    constructor(props: ComboBoxProps);
    updateInput(event: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>): void;
    click(): void;
    blur(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ComboBox;
