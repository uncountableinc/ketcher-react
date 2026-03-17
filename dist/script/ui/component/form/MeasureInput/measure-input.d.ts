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
import { HTMLAttributes } from 'react';
interface Schema {
    title?: string;
    type?: string;
    default?: number | string;
    minimum?: number;
    maximum?: number;
    properties?: Record<string, Schema>;
}
interface MeasureInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    schema: Schema;
    extraSchema?: Schema;
    value: number | string;
    extraValue: string;
    onChange: (value: number) => void;
    onExtraChange: (value: string) => void;
    name?: string;
}
declare const MeasureInput: ({ schema, extraSchema: _extraSchema, value, extraValue, onChange, onExtraChange, name: _name, className, ...rest }: MeasureInputProps) => import("react/jsx-runtime").JSX.Element;
export default MeasureInput;
