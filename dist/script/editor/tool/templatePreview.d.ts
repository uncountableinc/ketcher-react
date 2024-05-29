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
import Editor from '../Editor';
declare class TemplatePreview {
    private readonly editor;
    private readonly template;
    private readonly mode;
    private floatingPreviewAction;
    private connectedPreviewAction;
    private connectedPreviewTimeout;
    private lastPreviewId;
    private floatingPreview;
    private position;
    private previousPosition;
    constructor(editor: Editor, template: any, mode: any);
    private get struct();
    private get restruct();
    private get isModeFunctionalGroup();
    hidePreview(): void;
    private getPreviewTarget;
    movePreview(event: PointerEvent): void;
    private moveFloatingPreview;
    private showFloatingPreview;
    private hideFloatingPreview;
    hideConnectedPreview(): void;
    private showConnectedPreview;
}
export default TemplatePreview;
