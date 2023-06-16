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
interface ArrowScrollProps {
    startInView: boolean;
    endInView: boolean;
    scrollUp: any;
    scrollDown: any;
}
declare const ArrowScroll: ({ startInView, endInView, scrollUp, scrollDown }: ArrowScrollProps) => JSX.Element;
export { ArrowScroll };
