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
interface OpenProps {
    server: any;
    errorHandler: (err: string) => void;
    isRecognizeDisabled: boolean;
    isAnalyzingFile: boolean;
    ignoreChiralFlag: boolean;
}
declare type Props = OpenProps & Pick<BaseProps, 'className'> & BaseCallProps & {
    onImageUpload: (file: File) => void;
};
declare const Open: FC<Props>;
export type { OpenProps };
export default Open;
