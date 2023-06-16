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
/// <reference types="react" />
declare type VoidFunction = () => void;
export interface PanelProps {
    className: string;
    disabledButtons: string[];
    indigoVerification: boolean;
    hiddenButtons: string[];
    shortcuts: {
        [key in string]: string;
    };
    onClear: VoidFunction;
    onFileOpen: VoidFunction;
    onSave: VoidFunction;
    onUndo: VoidFunction;
    onRedo: VoidFunction;
    onCopy: VoidFunction;
    onCopyMol: VoidFunction;
    onCopyKet: VoidFunction;
    onCopyImage: VoidFunction;
    onCut: VoidFunction;
    onPaste: VoidFunction;
    currentZoom: number | undefined;
    onZoom: (zoom: number) => void;
    onZoomIn: VoidFunction;
    onZoomOut: VoidFunction;
    onSettingsOpen: VoidFunction;
    onLayout: VoidFunction;
    onClean: VoidFunction;
    onAromatize: VoidFunction;
    onDearomatize: VoidFunction;
    onCalculate: VoidFunction;
    onCheck: VoidFunction;
    onAnalyse: VoidFunction;
    onMiew: VoidFunction;
    onFullscreen: VoidFunction;
    onAbout: VoidFunction;
    onHelp: VoidFunction;
}
export declare const TopToolbar: ({ className, disabledButtons, indigoVerification, hiddenButtons, shortcuts, onClear, onFileOpen, onSave, onUndo, onRedo, onCopy, onCopyMol, onCopyKet, onCopyImage, onCut, onPaste, currentZoom, onZoom, onZoomIn, onZoomOut, onSettingsOpen, onLayout, onClean, onAromatize, onDearomatize, onCalculate, onCheck, onAnalyse, onMiew, onFullscreen, onAbout, onHelp }: PanelProps) => JSX.Element;
export {};
