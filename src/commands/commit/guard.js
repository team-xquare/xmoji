import chalk from 'chalk'

const errors = {
  issueNumber: chalk.red('Enter a valid number'),
  scope: chalk.red('Enter a valid scope'),
  title: chalk.red('Enter a valid commit title'),
  message: chalk.red('Enter a valid commit message')
}

const issueNumber = (issueNumber: string) => 
  !isNaN(issueNumber) || issueNumber == null ? true : errors.issueNumber

const domain = (domain: string) =>
  domain.includes('`') ? errors.domain : true

const title = (title: string) =>
  !title || title.includes('`') ? errors.title : true

const message = (message: string) =>
  message.includes('`') ? errors.message : true

const scope = (scope: string) => (scope.includes('`') ? errors.scope : true)

export default {
  issueNumber,
  domain,
  message,
  scope,
  title
}
