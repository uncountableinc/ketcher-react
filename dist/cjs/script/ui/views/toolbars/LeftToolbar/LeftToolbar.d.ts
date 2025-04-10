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
import { ToolbarGroupItemCallProps, ToolbarGroupItemProps } from '../ToolbarGroupItem';
interface LeftToolbarProps extends Omit<ToolbarGroupItemProps, 'id' | 'options'> {
    className?: string;
}
declare type LeftToolbarCallProps = ToolbarGroupItemCallProps;
declare type Props = LeftToolbarProps & LeftToolbarCallProps;
declare const LeftToolbar: (props: Props) => import("react/jsx-runtime").JSX.Element;
export type { LeftToolbarProps, LeftToolbarCallProps };
export { LeftToolbar };
