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
import { FC } from 'react';
import { Struct } from 'ketcher-core';
export interface Template {
    struct: Struct;
    props: {
        atomid: number;
        bondid: number;
        group: string;
        prerender?: string;
        abbreviation: string;
        name: string;
    };
}
interface TemplateTableProps {
    templates: Array<Template>;
    selected: Template | null;
    onSelect: (tmpl: Template) => void;
    onDelete?: (tmpl: Template) => void;
    onAttach?: (tmpl: Template) => void;
    titleRows?: 1 | 2;
    renderOptions?: any;
}
declare const TemplateTable: FC<TemplateTableProps>;
export default TemplateTable;
