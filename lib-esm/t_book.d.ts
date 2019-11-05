export declare type t_libraryContent = i_genericMap<any> | Array<any> | string | number;
export declare type i_libraryBook = i_genericMap<any>;
export declare type t_resolutionRules = i_genericMap<Array<string | undefined>>;
interface i_genericMap<T> {
    [key: string]: T;
}
export {};
