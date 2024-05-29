export declare type FileSaverReturnType = Promise<(data: Blob | string, fn: any, type: string | undefined) => void | never>;
export declare type SaverType = Awaited<FileSaverReturnType>;
