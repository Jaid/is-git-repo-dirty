/** @module is-git-repo-dirty */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @example
 * import isGitRepoDirty from "is-git-repo-dirty"
 * const result = isGitRepoDirty()
 * result === 1549410770
 * @function
 * @returns {number} Seconds since epoch
 */
export default () => Math.floor(Date.now() / 1000)