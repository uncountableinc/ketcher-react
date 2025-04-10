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
import { Tools, UiActionAction } from '../../../../action';
interface AtomsListProps {
    atoms: string[];
    status: Tools;
    active?: {
        tool?: string;
        opts: {
            label: string;
        };
    };
}
interface AtomsListCallProps {
    onAction: (action: UiActionAction) => void;
}
declare const AtomsList: import("react").ForwardRefExoticComponent<AtomsListProps & AtomsListCallProps & import("react").RefAttributes<HTMLDivElement>>;
export type { AtomsListProps, AtomsListCallProps };
export { AtomsList };
