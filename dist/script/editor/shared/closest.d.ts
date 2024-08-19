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
import { Vec2, ReStruct } from 'ketcher-core';
import { ClosestItemWithMap } from './closest.types';
declare function findClosestAtom(restruct: ReStruct, pos: Vec2, skip: any, minDist: any): {
    id: never;
    dist: any;
} | null;
declare function findClosestItem(restruct: ReStruct, pos: Vec2, maps: any, skip: any, options: any): ClosestItemWithMap | null;
/**
 * @param restruct { ReStruct }
 * @param selected { object }
 * @param maps { Array<string> }
 * @param options { RenderOption }
 * @return {{
 * 		atoms: Map<number, number>?
 * 		bonds: Map<number, number>?
 *    atomToFunctionalGroup: Map<number, number>?
 * }}
 */
declare function findCloseMerge(restruct: ReStruct, selected: any, maps: string[] | undefined, options: any): {
    atoms: Map<any, any>;
    atomToFunctionalGroup: Map<any, any>;
};
declare const _default: {
    atom: typeof findClosestAtom;
    item: typeof findClosestItem;
    merge: typeof findCloseMerge;
};
export default _default;
