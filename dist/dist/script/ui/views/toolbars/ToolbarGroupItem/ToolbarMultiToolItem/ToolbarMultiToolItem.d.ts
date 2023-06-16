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
import { GroupDescriptor, MultiToolVariant } from './variants/variants.types';
import { ToolbarItem, ToolbarItemVariant } from '../../toolbar.types';
import { UiAction, UiActionAction } from '../../../../action';
interface ToolbarMultiToolItemProps {
    id: ToolbarItemVariant;
    options: ToolbarItem[];
    groups?: GroupDescriptor[];
    variant?: MultiToolVariant;
    status: {
        [key in string]?: UiAction;
    };
    opened: string | null;
    disableableButtons: string[];
    indigoVerification: boolean;
    className?: string;
    vertical?: boolean;
}
interface ToolbarMultiToolItemCallProps {
    onAction: (action: UiActionAction) => void;
    onOpen: (menuName: string, isSelected: boolean) => void;
}
declare type Props = ToolbarMultiToolItemProps & ToolbarMultiToolItemCallProps;
declare const ToolbarMultiToolItem: (props: Props) => JSX.Element | null;
export type { ToolbarMultiToolItemProps, ToolbarMultiToolItemCallProps };
export { ToolbarMultiToolItem };
