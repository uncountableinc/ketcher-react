/**
 * Returns schema default values. Depends on passed arguments:
 * pass schema only -> returns default context
 * pass schema & context -> returns default fieldName
 * pass schema & context & fieldName -> returns default fieldValue
 * @param context? { string }
 * @param fieldName? { string }
 * @returns { string }
 */
export function getSdataDefault(schema: {} | undefined, context: any, fieldName: any): string;
export namespace sdataCustomSchema {
    const key: string;
    const title: string;
    const type: string;
    namespace properties {
        export namespace type_1 {
            const _enum: string[];
            export { _enum as enum };
        }
        export { type_1 as type };
        export namespace context {
            const title_1: string;
            export { title_1 as title };
            const _enum_1: string[];
            export { _enum_1 as enum };
            const _default: string;
            export { _default as default };
        }
        export namespace fieldName {
            const title_2: string;
            export { title_2 as title };
            const type_2: string;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
            export const minLength: number;
            export const invalidMessage: string;
        }
        export namespace fieldValue {
            const title_3: string;
            export { title_3 as title };
            const type_3: string;
            export { type_3 as type };
            const _default_2: string;
            export { _default_2 as default };
            const minLength_1: number;
            export { minLength_1 as minLength };
            const invalidMessage_1: string;
            export { invalidMessage_1 as invalidMessage };
        }
        export namespace radiobuttons {
            const _enum_2: string[];
            export { _enum_2 as enum };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    const required: string[];
}
export const sdataSchema: {};
