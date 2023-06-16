export function checkServer(): (dispatch: any, getState: any) => void;
export function recognize(file: any, version: any): (dispatch: any, getState: any) => void;
export function check(optsTypes: any): (dispatch: any, getState: any) => any;
export function automap(res: any): (dispatch: any, getState: any) => void;
export function analyse(): (dispatch: any, getState: any) => any;
export function serverTransform(method: any, data: any, struct: any): (dispatch: any, getState: any) => void;
export function serverCall(editor: any, server: any, method: any, options: any, struct: any): any;
