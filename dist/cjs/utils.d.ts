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
/**
 * Determines the appropriate HTML element for fullscreen mode based on the current DOM structure.
 *
 * Priority order:
 * 1. Element with [data-ketcher-fullscreen-container] attribute (explicit user customization)
 * 2. Parent of [data-ketcher-editor] element:
 *    - If parent is #root -> return #root (standalone mode)
 *    - If parent is custom container -> return parent (iframe/embedded mode)
 * 3. Fallback to #root or documentElement
 *
 * @returns {HTMLElement} The element to be used for fullscreen mode
 */
export declare const getFullscreenElement: (ketcherId: string) => HTMLElement;
