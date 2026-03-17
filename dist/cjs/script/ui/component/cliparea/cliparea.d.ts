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
import { Component } from 'react';
export declare const CLIP_AREA_BASE_CLASS = "cliparea";
interface ClipboardData {
    'text/plain': string;
    [key: string]: string;
}
interface ClipAreaProps {
    formats: string[];
    focused: () => boolean;
    onCopy: () => Promise<ClipboardData | null | undefined>;
    onCut: () => Promise<ClipboardData | null | undefined>;
    onPaste: (data: ClipboardItem[] | ClipboardData, isSmarts?: boolean) => Promise<void>;
    onLegacyCut: () => ClipboardData | null | undefined;
    onLegacyPaste: (data: ClipboardData, isSmarts?: boolean) => void;
    target?: HTMLElement;
}
declare class ClipArea extends Component<ClipAreaProps> {
    private readonly textAreaRef;
    private target;
    private listeners;
    constructor(props: ClipAreaProps);
    componentDidMount(): void;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare const actions: string[];
export declare function exec(action: string): boolean;
export default ClipArea;
