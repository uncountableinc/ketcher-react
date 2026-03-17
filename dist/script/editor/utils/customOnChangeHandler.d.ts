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
declare type Position = {
    x: number;
    y: number;
};
declare type ArrowPosition = [Position, Position];
export declare type ChangeEventData = {
    operation: any;
    id?: number;
    label?: string;
    position?: Position | ArrowPosition;
    attribute?: any;
    from?: any;
    to?: any;
    atomId?: any;
    fragId?: any;
    sGroupId?: any;
    type?: any;
    mode?: any;
};
export declare function customOnChangeHandler(action: any, handler: any): any;
export {};
