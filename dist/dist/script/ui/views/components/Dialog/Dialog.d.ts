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
import { FC, PropsWithChildren, ReactElement } from 'react';
interface DialogParamsCallProps {
    onCancel: () => void;
    onOk: (result: any) => void;
}
export interface DialogParams extends DialogParamsCallProps {
    className?: string;
}
interface DialogProps {
    title?: string;
    params: DialogParams;
    buttons?: Array<string | ReactElement>;
    className?: string;
    needMargin?: boolean;
    withDivider?: boolean;
    headerContent?: ReactElement;
    footerContent?: ReactElement;
    buttonsNameMap?: {
        [key in string]: string;
    };
    focusable?: boolean;
}
interface DialogCallProps {
    result?: () => any;
    valid?: () => boolean;
}
declare type Props = DialogProps & DialogCallProps;
declare const Dialog: FC<PropsWithChildren & Props>;
export default Dialog;
