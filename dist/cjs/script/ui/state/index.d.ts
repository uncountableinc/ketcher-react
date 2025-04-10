export default function _default(options: any, server: any, setEditor: any): import("redux").Store<any, any> & {
    dispatch: any;
};
export function setServer(server: any): {
    type: string;
    server: any;
};
export const SET_SERVER: "SET_SERVER";
import { onAction } from "./shared";
import { load } from "./shared";
export { onAction, load };
