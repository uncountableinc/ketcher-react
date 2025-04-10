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
import { Ketcher, ServiceMode, StructService, StructServiceProvider } from 'ketcher-core';
import { ButtonsConfig } from './ButtonsConfig';
import { initApp } from '../../ui';
import { Root } from 'react-dom/client';
import { CustomButton } from './CustomButtons';
declare class KetcherBuilder {
    private structService;
    private editor;
    private serviceMode;
    private formatterFactory;
    constructor();
    appendApiAsync(structServiceProvider: StructServiceProvider): Promise<void>;
    reinitializeApi(structServiceProvider: StructServiceProvider, setStructServiceToStore: (structService: StructService) => void): StructService;
    appendServiceMode(mode: ServiceMode): void;
    appendUiAsync(element: HTMLDivElement | null, appRoot: Root, staticResourcesUrl: string, errorHandler: (message: string) => void, buttons?: ButtonsConfig, togglerComponent?: JSX.Element, customButtons?: Array<CustomButton>): Promise<{
        setKetcher: (ketcher: Ketcher) => void;
        ketcherId: string;
        cleanup: ReturnType<typeof initApp> | null;
        setServer: (structService: StructService) => void;
    }>;
    build(): Ketcher | undefined;
}
export { KetcherBuilder };
