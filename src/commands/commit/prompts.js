// @flow
import inquirer from 'inquirer'

import configurationVault from '../../utils/configurationVault'
import filterGitmojis from '../../utils/filterGitmojis'
import guard from './guard'

const TITLE_MAX_LENGTH_COUNT: number = 48

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

export type Gitmoji = {
  code: string,
  description: string,
  emoji: string,
  name: string
}

export type Answers = {
  gitmoji: string,
  scope?: string,
  issue?: string,
  domain?: string,
  title: string,
  message: string
}

export default (gitmojis: Array<Gitmoji>): Array<Object> => {
  return [
    {
      name: 'gitmoji',
      message: '이모지를 선택하세요:',
      type: 'autocomplete',
      source: (answersSoFor: any, input: string) => {
        return Promise.resolve(
          filterGitmojis(input, gitmojis).map((gitmoji) => ({
            name: `${gitmoji.emoji}  - ${gitmoji.description}`,
            value: gitmoji[configurationVault.getEmojiFormat()]
          }))
        )
      }
    },
    ...(configurationVault.getScopePrompt()
      ? [
          {
            name: 'scope',
            message: 'Enter the scope of current changes:',
            validate: guard.scope
          }
        ]
      : []),
    {
      name: 'issue',
      message: '이슈 번호를 입력해주세요:',
      validate: guard.issueNumber,
      ...({})
    }, 
    {
      name: 'domain',
      message: '도메인 이름을 입력해주세요:',
      validate: guard.domain,
      ...({})
    },
    {
      name: 'title',
      message: '커밋 제목을 입력해주세요:',
      validate: guard.title,
      transformer: (input: string) => {
        return `[${
          (input).length
        }/${TITLE_MAX_LENGTH_COUNT}]: ${input}`
    },
      ...({})
    },
    {
      name: 'message',
      message: '커밋 메세지를 입력해주세요:',
      validate: guard.message,
      ...({})
    }
  ]
}
