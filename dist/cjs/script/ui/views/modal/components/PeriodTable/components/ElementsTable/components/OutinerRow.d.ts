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
import { Element } from 'ketcher-core';
interface OutinerRowProps {
    row: Element[];
    caption: string;
    onAtomSelect: (label: string) => void;
    onDoubleClick: () => void;
    currentEvents: (element: Element) => Record<string, unknown>;
    atomClassNames: (element: Element) => string[];
    className?: string;
}
declare function OutinerRow({ row, caption, onAtomSelect, onDoubleClick, currentEvents, atomClassNames, className, }: Readonly<OutinerRowProps>): import("react/jsx-runtime").JSX.Element;
export default OutinerRow;
