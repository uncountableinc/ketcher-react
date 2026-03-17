import { RnaPresetWizardAction, WizardAction, WizardNotificationId, WizardNotificationType } from '../../MonomerCreationWizard.types';
import { Dispatch } from 'react';
declare type Props = {
    id: WizardNotificationId;
    type: WizardNotificationType;
    message: string;
    wizardStateDispatch: Dispatch<WizardAction> | Dispatch<RnaPresetWizardAction>;
};
declare const Notification: ({ id, type, message, wizardStateDispatch }: Props) => import("react/jsx-runtime").JSX.Element;
export default Notification;
