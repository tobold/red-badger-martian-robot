import { Robot } from './Robot'

describe('robot', () => {
  it('instatiates', () => {
    expect(() => new Robot()).not.toThrow()
  })
})