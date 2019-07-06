/** @module is-git-repo-dirty */

import simpleGit from "simple-git/promise"

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @function
 * @async
 * @param {string} directory Absolute path to a git repository directory
 * @returns {boolean|null} `true` if repository is dirty, `false` if repository is clean, `null` if given directory is not a git repository
 * @example
 * import isGitRepoDirty from "is-git-repo-dirty"
 * const result = await isGitRepoDirty("/my/path")
 * result === false
 */
export default async directory => {
  const gitRepository = simpleGit(directory)
  const isGitRepository = await gitRepository.checkIsRepo()
  if (!isGitRepository) {
    return null
  }
  const gitStatus = await gitRepository.status()
  const isDirty = gitStatus.files?.length > 0
  return isDirty
}