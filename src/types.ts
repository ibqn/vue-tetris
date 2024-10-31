export const Block = {
  EMPTY: 0,
  I: 'I',
  J: 'J',
  L: 'L',
  O: 'O',
  S: 'S',
  T: 'T',
  Z: 'Z',
} as const

export type Block = (typeof Block)[keyof typeof Block]
