#!/usr/bin/env node
import meow from 'meow'
import updateNotifier from 'update-notifier'

import pkg from '../package.json'
import commands from './commands'
import findGitmojiCommand from './utils/findGitmojiCommand'

updateNotifier({ pkg }).notify({ isGlobal: true })

const cli = meow(
  `
  Usage
    $ xmoji
  Options
    --commit, -c    Interactively commit using the prompts
    --config, -g    Setup gitmoji-cli preferences.
    --list, -l      List all the available gitmojis
    --search, -s    Search gitmojis
    --update, -u    Sync emoji list with the repo
    --version, -v   Print gitmoji-cli installed version
  Examples
    $ xmoji -l
    $ xmoji bug linter -s
`,
  {
    flags: {
      commit: { type: 'boolean', alias: 'c' },
      config: { type: 'boolean', alias: 'g' },
      help: { type: 'boolean', alias: 'h' },
      list: { type: 'boolean', alias: 'l' },
      search: { type: 'boolean', alias: 's' },
      update: { type: 'boolean', alias: 'u' },
      version: { type: 'boolean', alias: 'v' }
    }
  }
)

export const options = {
  commit: () => commands.commit(),
  config: () => commands.config(),
  list: () => commands.list(),
  search: () => cli.input.map((input) => commands.search(input)),
  update: () => commands.update()
}

findGitmojiCommand(cli, options)
