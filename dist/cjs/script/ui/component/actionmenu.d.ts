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
import { Tools, UiActionAction } from '../action';
interface ItemStatus {
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    [key: string]: boolean | string | undefined;
}
interface StatusMap {
    [key: string]: ItemStatus;
}
interface VisibleToolsMap {
    [key: string]: string;
}
interface SharedActionProps {
    status: StatusMap;
    onOpen: (id: string | undefined, isSelected: boolean) => void;
    onAction: (action: UiActionAction) => void;
    opened?: string;
    visibleTools: VisibleToolsMap;
    disableableButtons?: string[];
    indigoVerification?: boolean;
}
interface MenuItemWithComponent {
    id: string;
    component: (props: SharedActionProps) => JSX.Element;
}
interface MenuItemWithMenu {
    id: string;
    menu: Array<string | MenuItemWithMenu | MenuItemWithComponent>;
}
declare type MenuItem = string | MenuItemWithMenu | MenuItemWithComponent;
interface SharedActionProps {
    status: StatusMap;
    onOpen: (id: string | undefined, isSelected: boolean) => void;
    onAction: (action: UiActionAction) => void;
    opened?: string;
    visibleTools: VisibleToolsMap;
    disableableButtons?: string[];
    indigoVerification?: boolean;
}
interface ActionMenuProps extends SharedActionProps {
    name: string;
    menu: MenuItem[];
    className?: string;
    role?: string;
}
export declare function showMenuOrButton(action: Tools, item: MenuItem, status: ItemStatus, props: SharedActionProps): JSX.Element;
declare function ActionMenu({ name, menu, className, role, ...props }: Readonly<ActionMenuProps>): import("react/jsx-runtime").JSX.Element;
export default ActionMenu;
