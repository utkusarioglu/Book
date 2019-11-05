
/*
 * PARENT TYPES
 */

/**
 * The Content that will be parsed into the book
 * */
export type t_libraryContent = i_genericMap<any> | Array<any> | string | number

/**
 * The data type for the variable that will hold the book content inside the class
 * */
export type i_libraryBook = i_genericMap<any>



/*
 * STAND IN TYPES
 */

/**
 * Stand-in type
 * A set of rules for the resolver class to read for parsing book data
 * */
export type t_resolutionRules = i_genericMap<Array<string | undefined>>



/*
 *  GENERIC TYPES
 */

/**
 * An map that carries only one type of object
 * */
interface i_genericMap<T> {
    [key: string]: T
}