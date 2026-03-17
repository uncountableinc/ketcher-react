/// <reference types="react" />
import { type FloatingToolsCallProps, type FloatingToolsProps } from './FloatingTools';
declare const FloatingToolContainer: import("react-redux").ConnectedComponent<import("react").FC<FloatingToolsProps & FloatingToolsCallProps>, {
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export { FloatingToolContainer };
