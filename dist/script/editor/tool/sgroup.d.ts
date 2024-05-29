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
import { Tool } from './Tool';
declare class SGroupTool implements Tool {
    private readonly editor;
    private readonly lassoHelper;
    isNotActiveTool: boolean | undefined;
    constructor(editor: any);
    checkSelection(): void;
    mousedown(event: any): void;
    mousemove(event: any): void;
    mouseleave(event: any): void;
    mouseup(event: any): void;
    cancel(): void;
    static sgroupDialog(editor: Editor, id: number | null): void;
}
export default SGroupTool;
