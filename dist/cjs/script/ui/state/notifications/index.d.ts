export declare const initNotificationsState: {
    snackbarNotificationText: string;
};
export declare function showSnackbarNotification(text: string): {
    type: string;
    data: string;
};
export declare function hideSnackbarNotification(): {
    type: string;
};
export declare function selectSnackbarNotificationText(state: any): any;
declare function notificationsReducer(state: {
    snackbarNotificationText: string;
} | undefined, action: any): {
    snackbarNotificationText: any;
};
export default notificationsReducer;
