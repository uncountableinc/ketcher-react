import { Reducer } from 'react';
export interface FloatingToolsState {
    visible: boolean;
    rotateHandlePosition: {
        x: number;
        y: number;
    };
}
export declare type FloatingToolsPayload = Partial<FloatingToolsState>;
export interface FloatingToolsAction {
    type: 'UPDATE_FLOATING_TOOLS';
    payload: Partial<FloatingToolsState>;
}
export declare const updateFloatingTools: (payload: FloatingToolsPayload) => FloatingToolsAction;
declare const floatingToolsReducer: Reducer<FloatingToolsState, FloatingToolsAction>;
export default floatingToolsReducer;
