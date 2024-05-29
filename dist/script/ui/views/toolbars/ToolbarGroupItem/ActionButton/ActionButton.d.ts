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
import { UiAction, UiActionAction } from '../../../../action';
import { IconName } from 'components';
interface ActionButtonProps {
    name: IconName;
    action?: UiAction;
    status?: {
        disabled?: boolean;
        hidden?: boolean;
    };
    selected?: boolean;
    disableableButtons: string[];
    indigoVerification: boolean;
    className?: string;
    dataTestId?: string;
}
interface ActionButtonCallProps {
    onAction: (action: UiActionAction) => void;
}
declare type Props = ActionButtonProps & ActionButtonCallProps;
declare const ActionButton: (props: Props) => import("react/jsx-runtime").JSX.Element | null;
export type { ActionButtonProps, ActionButtonCallProps };
export { ActionButton };
