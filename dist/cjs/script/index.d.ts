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
import { Root } from 'react-dom/client';
import { ButtonsConfig, KetcherBuilder } from './builders';
import { StructServiceProvider } from 'ketcher-core';
import { CustomButton } from './builders/ketcher/CustomButtons';
interface Config {
    element: HTMLDivElement | null;
    appRoot: Root;
    staticResourcesUrl: string;
    structServiceProvider: StructServiceProvider;
    buttons?: ButtonsConfig;
    customButtons?: Array<CustomButton>;
    errorHandler: (message: string) => void;
    togglerComponent?: JSX.Element;
}
declare function buildKetcherAsync({ element, appRoot, staticResourcesUrl, structServiceProvider, buttons, errorHandler, togglerComponent, customButtons, }: Config): Promise<{
    ketcher: import("ketcher-core").Ketcher | undefined;
    ketcherId: string;
    cleanup: (() => void) | null;
    builder: KetcherBuilder;
    setServer: (structService: import("ketcher-core").StructService) => void;
}>;
export type { Config, ButtonsConfig };
export * from './providers';
export default buildKetcherAsync;
