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
import 'intersection-observer';
import 'element-closest-polyfill';
import 'regenerator-runtime/runtime';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import './index.less';
import { Config } from './script';
import { Ketcher } from 'ketcher-core';
export interface EditorProps extends Omit<Config, 'element' | 'appRoot'> {
    onInit?: (ketcher: Ketcher) => void;
}
declare function MicromoleculesEditor(props: EditorProps): import("react/jsx-runtime").JSX.Element;
export { MicromoleculesEditor };
