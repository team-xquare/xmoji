// @flow
import fs from 'fs'

import { type CommitMode } from '../commands/commit'
import chalk from 'chalk'
import { COMMIT_MESSAGE_SOURCE } from '../commands/commit/withHook/index';

const COMMIT_FILE_PATH_INDEX = 3
const COMMIT_ISSUE_LINE_INDEX = 0
const COMMIT_DOMAIN_LINE_INDEX = 2
const COMMIT_TITLE_LINE_INDEX = 4
const COMMIT_MESSAGE_LINE_INDEX = 6

const getDefaultCommitContent = (
  mode: CommitMode
): { issueNumber: ?string, domain: ?string, title: ?string, message: ?string } => {
  /*
    Since the hook is called with `gitmoji --hook $1`
    According to https://git-scm.com/docs/githooks#_prepare_commit_msg,
    the commit file path will be stored in the 4th argument of the command
  */
  const commitFilePath: string = process.argv[COMMIT_FILE_PATH_INDEX]

  if (mode === 'client' || !fs.existsSync(commitFilePath)) {
    return {
      issueNumber: null,
      domain: null,
      title: null,
      message: null
    }
  }

  const commitFileContent: Array<string> = fs
    .readFileSync(commitFilePath)
    .toString()
    .split('\n')

  return {
    issueNumber: commitFileContent[COMMIT_ISSUE_LINE_INDEX],
    domain: commitFileContent[COMMIT_DOMAIN_LINE_INDEX],
    title: commitFileContent[COMMIT_TITLE_LINE_INDEX],
    message:
      commitFileContent.length > COMMIT_MESSAGE_LINE_INDEX
        ? commitFileContent[COMMIT_MESSAGE_LINE_INDEX]
        : null
  }
}

export default getDefaultCommitContent
