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
interface SystemControlsProps {
    disabledButtons: string[];
    hiddenButtons: string[];
    className?: string;
    onSettingsOpen: () => void;
    onAboutOpen: () => void;
    onHistoryClick: () => void;
    onFullscreen: (ketcherId: string) => void;
    onHelp: () => void;
}
export declare const SystemControls: ({ disabledButtons, hiddenButtons, onSettingsOpen, onFullscreen, onHelp, onAboutOpen, className, }: SystemControlsProps) => import("react/jsx-runtime").JSX.Element;
export {};
