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
import { Action, Editor as KetcherEditor, FloatingToolsParams, MULTITAIL_ARROW_KEY, Render, Struct } from 'ketcher-core';
import { PipelineSubscription, Subscription } from 'subscription';
import { Highlighter } from './highlighter';
import { ContextMenuInfo } from '../ui/views/components/ContextMenu/contextMenu.types';
import { HoverIcon } from './HoverIcon';
import RotateController from './tool/rotate-controller';
import { Tool } from './tool/Tool';
export interface Selection {
    atoms?: Array<number>;
    bonds?: Array<number>;
    enhancedFlags?: Array<number>;
    rxnPluses?: Array<number>;
    rxnArrows?: Array<number>;
    texts?: Array<number>;
    rgroupAttachmentPoints?: Array<number>;
    [MULTITAIL_ARROW_KEY]?: Array<number>;
}
declare class Editor implements KetcherEditor {
    #private;
    render: Render;
    _selection: Selection | null;
    _tool: Tool | null;
    historyStack: any;
    historyPtr: any;
    errorHandler: ((message: string) => void) | null;
    highlights: Highlighter;
    hoverIcon: HoverIcon;
    lastCursorPosition: {
        x: number;
        y: number;
    };
    contextMenu: ContextMenuInfo;
    rotateController: RotateController;
    event: {
        message: Subscription;
        elementEdit: PipelineSubscription;
        zoomIn: PipelineSubscription;
        zoomOut: PipelineSubscription;
        bondEdit: PipelineSubscription;
        rgroupEdit: PipelineSubscription;
        sgroupEdit: PipelineSubscription;
        sdataEdit: PipelineSubscription;
        quickEdit: PipelineSubscription;
        attachEdit: PipelineSubscription;
        removeFG: PipelineSubscription;
        change: Subscription;
        selectionChange: PipelineSubscription;
        aromatizeStruct: PipelineSubscription;
        dearomatizeStruct: PipelineSubscription;
        enhancedStereoEdit: PipelineSubscription;
        confirm: PipelineSubscription;
        showInfo: PipelineSubscription;
        apiSettings: PipelineSubscription;
        cursor: Subscription;
        updateFloatingTools: Subscription<FloatingToolsParams>;
    };
    serverSettings: {};
    lastEvent: any;
    macromoleculeConvertionError: string | null | undefined;
    constructor(clientArea: any, options: any, serverSettings: any);
    isDitrty(): boolean;
    setOrigin(): void;
    tool(name?: any, opts?: any): Tool | null;
    clear(): void;
    renderAndRecoordinateStruct(struct: Struct, needToCenterStruct?: boolean): Struct;
    struct(value?: Struct, needToCenterStruct?: boolean): Struct;
    structToAddFragment(value: Struct): Struct;
    setOptions(opts: string): false | import("ketcher-core").RenderOptions;
    options(value?: any): import("ketcher-core").RenderOptions;
    setServerSettings(serverSettings: any): void;
    private updateToolAfterOptionsChange;
    zoom(value?: any, event?: WheelEvent): number;
    centerStruct(): void;
    zoomAccordingContent(struct: Struct): void;
    selection(ci?: any): Selection | null;
    hover(ci: {
        id: number;
        map: string;
    } | null, newTool?: any, event?: PointerEvent): void;
    update(action: Action | true, ignoreHistory?: boolean): void;
    historySize(): {
        undo: any;
        redo: number;
    };
    undo(): void;
    redo(): void;
    subscribe(eventName: any, handler: any): {
        handler: any;
    };
    unsubscribe(eventName: any, subscriber: any): void;
    findItem(event: any, maps: Array<string> | null, skip?: any): import(".").ClosestItemWithMap<unknown, string> | null;
    findMerge(srcItems: any, maps: any): {
        atoms: Map<any, any>;
        atomToFunctionalGroup: Map<any, any>;
    };
    explicitSelected(): any;
    structSelected(): Struct;
    alignDescriptors(): void;
    setMacromoleculeConvertionError(errorMessage: string): void;
    clearMacromoleculeConvertionError(): void;
    focusCliparea(): void;
}
export { Editor };
export default Editor;
