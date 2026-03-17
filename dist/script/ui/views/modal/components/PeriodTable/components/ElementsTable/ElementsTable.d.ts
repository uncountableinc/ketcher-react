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
import { Element } from 'ketcher-core';
interface ElementsTableProps {
    value: string | string[] | null;
    currentEvents: (element: Element) => {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    selected: (label: string) => boolean;
    onAtomSelect: (label: string) => void;
    onDoubleClick: (label?: string) => void;
}
declare class ElementsTable extends Component<ElementsTableProps> {
    shouldComponentUpdate(nextProps: ElementsTableProps): boolean;
    getAtomClassNames: (item: Element) => string[];
    render(): JSX.Element;
}
export default ElementsTable;
