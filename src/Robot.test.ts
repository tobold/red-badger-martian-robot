import { Robot } from './Robot'

describe('Robot', () => {
  it('instatiates', () => {
    expect(() => new Robot()).not.toThrow()
  })
})