import { DebugLogger } from './debug-logger'

describe('DebugLogger', () => {
  const sut = new DebugLogger('abc')

  it.each([
    'debug',
    'trace',
    'info',
    'warn',
    'error',
    'fatal'
  ])(`should log at error level %s`, errorLevel => {
    sut[errorLevel]('hello world', { meta: 'example' })
  })
})
