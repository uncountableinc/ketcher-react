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
import { Struct, Bond } from 'ketcher-core';
import Editor from '../Editor';
import { Tool } from './Tool';
import TemplatePreview from './templatePreview';
export declare function getBondFlipSign(struct: Struct, bond: Bond): number;
export declare function getAngleFromEvent(event: any, ci: any, restruct: any): any;
declare class TemplateTool implements Tool {
    private readonly editor;
    private readonly mode;
    private readonly template;
    private readonly findItems;
    templatePreview: TemplatePreview | null;
    private dragCtx;
    private targetGroupsIds;
    private readonly isSaltOrSolvent;
    private event;
    constructor(editor: Editor, tmpl: any);
    private get struct();
    private get functionalGroups();
    private get isModeFunctionalGroup();
    private get closestItem();
    private get isNeedToShowRemoveAbbreviationPopup();
    private findKeyOfRelatedGroupId;
    private showRemoveAbbreviationPopup;
    mousedown(event: MouseEvent): Promise<void>;
    mousemove(event: any): boolean;
    mouseup(event?: any): boolean;
    cancel(): void;
    mouseleave(): void;
    mouseLeaveClientArea(): void;
}
export declare function getSign(molecule: any, bond: any, v: any): 0 | 1 | -1;
export default TemplateTool;
