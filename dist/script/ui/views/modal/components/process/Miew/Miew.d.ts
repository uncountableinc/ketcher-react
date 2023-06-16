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
import { Struct, StructService } from 'ketcher-core';
declare type MiewDialogProps = {
    miewOpts: any;
    server: StructService;
    struct: Struct;
    onCancel: () => void;
    onOk: (result: any) => void;
    miewTheme: 'dark' | 'light';
};
declare type MiewDialogCallProps = {
    onExportCML: (cmlStruct: string) => void;
};
declare type Props = MiewDialogProps & MiewDialogCallProps;
declare const Miew: import("react-redux").ConnectedComponent<({ miewOpts, server, struct, onExportCML, miewTheme, ...prop }: Props) => JSX.Element, import("react-redux").Omit<MiewDialogProps & MiewDialogCallProps, "miewOpts" | "server" | "struct" | "onExportCML" | "miewTheme">>;
export default Miew;
