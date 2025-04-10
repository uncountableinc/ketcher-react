/// <reference types="react" />
import { type FloatingToolsCallProps, type FloatingToolsProps } from './FloatingTools';
declare const FloatingToolContainer: import("react-redux").ConnectedComponent<import("react").FC<FloatingToolsProps & FloatingToolsCallProps>, import("react-redux").Omit<FloatingToolsProps & FloatingToolsCallProps, "visible" | "rotateHandlePosition" | "status" | "indigoVerification" | "onAction">>;
export { FloatingToolContainer };
