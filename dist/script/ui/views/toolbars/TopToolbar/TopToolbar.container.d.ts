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
declare const TopToolbarContainer: import("react-redux").ConnectedComponent<({ className, disabledButtons, indigoVerification, hiddenButtons, shortcuts, onClear, onFileOpen, onSave, onUndo, onRedo, onCopy, onCopyMol, onCopyKet, onCopyImage, onCut, onPaste, currentZoom, onZoom, onZoomIn, onZoomOut, onSettingsOpen, onLayout, onClean, onAromatize, onDearomatize, onCalculate, onCheck, onAnalyse, onMiew, onToggleExplicitHydrogens, onFullscreen, onAbout, onHelp, togglerComponent, customButtons, }: import("./TopToolbar").PanelProps) => import("react/jsx-runtime").JSX.Element, import("react-redux").Omit<import("./TopToolbar").PanelProps, "disabledButtons" | "indigoVerification" | "hiddenButtons" | "shortcuts" | "onClear" | "onFileOpen" | "onSave" | "onUndo" | "onRedo" | "onCopy" | "onCopyMol" | "onCopyKet" | "onCopyImage" | "onCut" | "onPaste" | "currentZoom" | "onZoom" | "onZoomIn" | "onZoomOut" | "onSettingsOpen" | "onLayout" | "onClean" | "onAromatize" | "onDearomatize" | "onCalculate" | "onCheck" | "onAnalyse" | "onMiew" | "onToggleExplicitHydrogens" | "onFullscreen" | "onAbout" | "onHelp" | "customButtons">>;
export { TopToolbarContainer };
