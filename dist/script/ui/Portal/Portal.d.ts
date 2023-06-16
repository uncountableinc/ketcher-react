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
import { CSSProperties, Component, ReactNode } from 'react';
interface PortalProps {
    isOpen: boolean;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}
declare type Props = PortalProps;
declare class Portal extends Component<Props> {
    private readonly element;
    private isElementInDom;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<Props>): void;
    private addElementInDOM;
    private removeElementFromDOM;
    private removeClassNames;
    private addClassName;
    private updateStyle;
    render(): any;
}
export { Portal };
