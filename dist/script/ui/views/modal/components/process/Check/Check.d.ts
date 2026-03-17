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
import { FC } from 'react';
interface MoleculeErrors {
    [key: string]: string;
}
declare type CheckOption = 'valence' | 'radicals' | 'pseudoatoms' | 'stereo' | 'query' | 'overlapping_atoms' | 'overlapping_bonds' | 'rgroups' | 'chiral' | '3d' | 'chiral_flag';
interface CheckState {
    checkOptions: CheckOption[];
}
interface FormState {
    result?: CheckState;
    moleculeErrors: MoleculeErrors;
    errors?: Record<string, unknown>;
    valid?: boolean;
}
interface CheckDialogOwnProps {
    onOk: (result: unknown) => void;
    onCancel: () => void;
}
interface CheckDialogStateProps {
    formState: FormState;
    checkState: CheckState;
}
interface CheckDialogDispatchProps {
    onCheck: (opts: CheckOption[]) => Promise<void>;
    onApply: (res: CheckState) => void;
}
declare type CheckDialogProps = CheckDialogOwnProps & CheckDialogStateProps & CheckDialogDispatchProps;
declare const Check: import("react-redux").ConnectedComponent<FC<CheckDialogProps>, {
    onCancel: () => void;
    onOk: (result: unknown) => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default Check;
