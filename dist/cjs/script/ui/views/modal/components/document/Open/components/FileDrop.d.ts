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
import { DropzoneOptions } from 'react-dropzone';
import { IconName } from 'components';
declare type FileDropProps = {
    buttonLabel: string;
    textLabel: string;
    iconName: IconName;
    disabled?: boolean;
    disabledText?: string;
} & DropzoneOptions;
declare const FileDrop: ({ buttonLabel, textLabel, iconName, disabled, disabledText, ...rest }: FileDropProps) => import("react/jsx-runtime").JSX.Element;
export { FileDrop };
