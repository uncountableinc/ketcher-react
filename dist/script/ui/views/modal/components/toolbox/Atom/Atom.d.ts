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
import { BaseCallProps, BaseProps } from '../../../modal.types';
import { FC } from 'react';
interface AtomProps extends BaseCallProps, BaseProps {
    alias: string;
    charge: string;
    exactChangeFlag: boolean;
    explicitValence: number;
    hCount: number;
    invRet: number;
    isotope: number;
    label: string;
    radical: number;
    ringBondCount: number;
    stereoParity: number;
    substitutionCount: number;
    unsaturatedAtom: boolean;
}
declare type Props = AtomProps & {
    isMultipleAtoms?: boolean;
};
declare const Atom: FC<Props>;
export type { AtomProps };
export default Atom;
