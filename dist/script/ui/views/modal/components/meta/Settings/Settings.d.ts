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
import { BaseCallProps, BaseProps } from '../../../modal.types';
import { StructService } from 'ketcher-core';
interface SettingsProps extends BaseProps {
    initState: any;
    appOpts: {
        version: string;
        buildDate: string;
        buildNumber: string;
        indigoVersion: string;
        imagoVersions: Array<string>;
        server: boolean;
        templates: boolean;
    };
    server: StructService;
}
interface SettingsCallProps extends BaseCallProps {
    onOpenFile: (any: any) => void;
    onReset: () => void;
    onACSStyle: (result: any) => void;
}
declare type Props = SettingsProps & SettingsCallProps;
declare const Settings: import("react-redux").ConnectedComponent<(props: Props) => import("react/jsx-runtime").JSX.Element, any>;
export default Settings;
