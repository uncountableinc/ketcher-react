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
import { Bond, Struct } from 'ketcher-core';
import { Tool } from './Tool';
declare class BondTool implements Tool {
    private readonly editor;
    private readonly atomProps;
    private readonly bondProps;
    private dragCtx;
    isNotActiveTool: boolean | undefined;
    constructor(editor: any, bondProps: any);
    mousedown(event: any): true | undefined;
    mousemove(event: any): true | undefined;
    mouseup(event: any): boolean;
    restoreBondWhenHoveringOnCanvas(event: any): void;
    getExistingBond(struct: Struct, begin: number, end: number): readonly [number, Bond] | readonly [null, null];
}
export default BondTool;
