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
import { ToolbarGroupItemCallProps, ToolbarGroupItemProps } from '../ToolbarGroupItem';
interface RightToolbarProps extends Omit<ToolbarGroupItemProps, 'id' | 'options'> {
    className?: string;
    active?: {
        opts: any;
        tool: string;
    };
    freqAtoms: any[];
}
declare type RightToolbarCallProps = ToolbarGroupItemCallProps;
declare type Props = RightToolbarProps & RightToolbarCallProps;
declare const RightToolbar: (props: Props) => JSX.Element;
export type { RightToolbarProps, RightToolbarCallProps };
export { RightToolbar };
