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
import { FC } from 'react';
import { Render, Struct, SGroup } from 'ketcher-core';
interface InfoPanelProps {
    clientX: number | undefined;
    clientY: number | undefined;
    render: Render;
    groupStruct: Struct;
    sGroup: SGroup;
    className?: string;
}
declare const _default: import("react-redux").ConnectedComponent<FC<InfoPanelProps>, import("react-redux").Omit<InfoPanelProps, "sGroup" | "render" | "clientX" | "clientY" | "groupStruct">>;
export default _default;
