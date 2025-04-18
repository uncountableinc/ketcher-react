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
import { IconName } from '../../Icon/types';
import { ReactNode } from 'react';
export interface IIconButtonBaseProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    title?: string;
    className?: string;
    isHidden?: boolean;
    disabled?: boolean;
    isActive?: boolean;
    shortcut?: string;
    testId?: string;
    children: ReactNode;
}
declare type IIconButtonBasePropsWithoutChildren = Omit<IIconButtonBaseProps, 'children'>;
export interface IIconButtonProps extends IIconButtonBasePropsWithoutChildren {
    iconName: IconName;
}
export interface IIconButtonCustomIconProps extends IIconButtonBasePropsWithoutChildren {
    link: string;
}
export interface IStyledButtonProps {
    isActive: boolean;
    testId?: string;
}
export {};
