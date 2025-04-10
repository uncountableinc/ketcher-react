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
import { IMAGE_KEY, MULTITAIL_ARROW_TOOL_NAME } from 'domain/constants';
declare type TopGroup = 'document' | 'edit' | 'zoom' | 'process' | 'meta';
declare type LeftGroup = 'hand' | 'select' | 'bond' | 'charge' | 'transform' | 'sgroup' | 'rgroup' | 'shape' | 'text';
declare type BottomGroup = 'template-common' | 'template-lib';
declare type RightGroup = 'atom' | 'period-table';
declare type ToolbarGroupVariant = TopGroup | LeftGroup | BottomGroup | RightGroup;
declare type TopToolbarItemVariant = 'clear' | 'open' | 'save' | 'undo' | 'redo' | 'cut' | 'copies' | 'copy' | 'copy-image' | 'copy-mol' | 'copy-ket' | 'paste' | 'zoom-in' | 'zoom-out' | 'zoom-list' | 'layout' | 'clean' | 'arom' | 'dearom' | 'cip' | 'check' | 'analyse' | 'recognize' | 'miew' | 'settings' | 'help' | 'about';
declare type LeftToolbarItemVariant = 'hand' | 'select' | 'select-lasso' | 'select-rectangle' | 'select-fragment' | 'erase' | 'bonds' | 'bond-common' | 'bond-single' | 'bond-double' | 'bond-triple' | 'bond-dative' | 'bond-stereo' | 'bond-up' | 'bond-down' | 'bond-updown' | 'bond-crossed' | 'bond-query' | 'bond-special' | 'bond-any' | 'bond-hydrogen' | 'bond-aromatic' | 'bond-singledouble' | 'bond-singlearomatic' | 'bond-doublearomatic' | 'chain' | 'charge-plus' | 'charge-minus' | 'sgroup' | 'reaction-plus' | 'arrows' | 'reaction-arrow-open-angle' | 'reaction-arrow-filled-triangle' | 'reaction-arrow-filled-bow' | 'reaction-arrow-dashed-open-angle' | 'reaction-arrow-failed' | 'reaction-arrow-retrosynthetic' | 'reaction-arrow-both-ends-filled-triangle' | 'reaction-arrow-equilibrium-filled-half-bow' | 'reaction-arrow-equilibrium-filled-triangle' | 'reaction-arrow-equilibrium-open-angle' | 'reaction-arrow-unbalanced-equilibrium-filled-half-bow' | 'reaction-arrow-unbalanced-equilibrium-open-half-angle' | 'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow' | 'reaction-arrow-unbalanced-equilibrium-filled-half-triangle' | 'reaction-arrow-elliptical-arc-arrow-filled-bow' | 'reaction-arrow-elliptical-arc-arrow-filled-triangle' | 'reaction-arrow-elliptical-arc-arrow-open-angle' | 'reaction-arrow-elliptical-arc-arrow-open-half-angle' | typeof MULTITAIL_ARROW_TOOL_NAME | 'reaction-mapping-tools' | 'reaction-automap' | 'reaction-map' | 'reaction-unmap' | 'rgroup' | 'rgroup-label' | 'rgroup-fragment' | 'rgroup-attpoints' | 'shapes' | 'shape-ellipse' | 'shape-rectangle' | 'shape-line' | 'text' | typeof IMAGE_KEY;
declare type BottomToolbarItemVariant = 'template-common' | 'template-lib' | 'enhanced-stereo' | 'fullscreen';
declare type RightToolbarItemVariant = 'atom' | 'freq-atoms' | 'period-table' | 'extended-table' | 'any-atom';
declare type FloatingToolItemVariant = 'transform-flip-h' | 'transform-flip-v' | 'erase';
declare type ToolbarItemVariant = TopToolbarItemVariant | LeftToolbarItemVariant | BottomToolbarItemVariant | RightToolbarItemVariant | FloatingToolItemVariant | 'bonds';
interface ToolbarItem {
    id: ToolbarItemVariant;
    options?: ToolbarItem[];
}
export type { ToolbarGroupVariant };
export type { BottomToolbarItemVariant, LeftToolbarItemVariant, RightToolbarItemVariant, TopToolbarItemVariant, FloatingToolItemVariant, ToolbarItemVariant, };
export type { ToolbarItem };
