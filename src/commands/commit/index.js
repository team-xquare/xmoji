// @flow
import inquirer from 'inquirer'

import getEmojis from '../../utils/getEmojis'
import prompts from './prompts'
import withClient from './withClient'

const commit = () => {
  return promptAndCommit()
}

const promptAndCommit = () =>
  getEmojis()
    .then((gitmojis) => prompts(gitmojis))
    .then((questions) => {
      inquirer.prompt(questions).then((answers) => {
        return withClient(answers)
      })
    })

export default commit
