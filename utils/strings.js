import { blockNamespace } from '../config';


/* String Manipulation */
/* ------------------- */

// capitalize the first letter of a String
export const capitalizeFirst = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);

/* Replace \n with <br /> */
// export const replaceWithBreak = (str = '') => (str = '') ? str.replace(/\n/g,'<br />') : null;
export const replaceNewLineWithBreaks = (str = '') => (str) ? str.replace(new RegExp('\r?\n','g'), '<br />') : null;

/* Replace substring with another */
export const replaceSubstring = (str = '', substr = '', newSubst = '') => str.replace(substr, newSubst);

// remove unnecessary piece of a String
export const sanitizeString = (str, dirt) => str.split(dirt)[1];

/* Removes 'word' out of 'str' */
export const splitWord = (str = '', word = '') => str.split(word)[1];

/* Check is substring exists in string */
export const substrExistsInStr = (substr = '', str = '') => str.indexOf(substr) !== -1;

/* extract the String name of a variable */
export const varToString = (name) => Object.keys(name)[0];

/* Return the className with an added space if it exists */
export const classNameText = (className) => (className) ? ` ${className}` : '';

/* Return the name of the Block */
export const getBlockName = (blockName) => splitWord(blockName, blockNamespace);