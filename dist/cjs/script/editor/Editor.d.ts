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
    ketcherId: string;
    render: Render;
    _selection: Selection | null;
    _tool: Tool | null;
    historyStack: Action[];
    historyPtr: number;
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
        zoomChanged: PipelineSubscription;
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
    constructor(ketcherId: any, clientArea: any, options: any, serverSettings: any, prevEditor?: any);
    isDitrty(): boolean;
    setOrigin(): void;
    tool(name?: any, opts?: any): Tool | null;
    clear(): void;
    renderAndRecoordinateStruct(struct: Struct, needToCenterStruct?: boolean, x?: number, y?: number): Struct;
    /** Apply {@link value}: {@link Struct} if provided to {@link render} and  */
    struct(value?: Struct, needToCenterStruct?: boolean, x?: number, y?: number): Struct;
    structToAddFragment(struct: Struct, x?: number, y?: number): Struct;
    setOptions(opts: string): false | import("ketcher-core").RenderOptions;
    /** Apply options from {@link value} */
    options(value?: any): import("ketcher-core").RenderOptions;
    setServerSettings(serverSettings: any): void;
    private updateToolAfterOptionsChange;
    zoom(value?: any, event?: WheelEvent): number;
    centerStruct(): void;
    centerViewportAccordingToStruct(struct?: Struct): void;
    positionStruct(x: number, y: number): void;
    zoomAccordingContent(struct: Struct): boolean;
    selection(ci?: any): Selection | null;
    hover(ci: {
        id: number;
        map: string;
    } | null, newTool?: any, event?: PointerEvent): void;
    update(action: Action | true, ignoreHistory?: boolean): void;
    historySize(): {
        readonly undo: number;
        readonly redo: number;
    };
    undo(): void;
    redo(): void;
    clearHistory(): void;
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
