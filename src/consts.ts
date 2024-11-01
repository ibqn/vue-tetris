import { Block, ShapesObject } from './types'

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20
export const BOARD_SIZE = BOARD_WIDTH * BOARD_HEIGHT

export const shapes: ShapesObject = {
  [Block.I]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.I, Block.I, Block.I],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.I, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.I, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.I, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.I, Block.EMPTY, Block.EMPTY],
      ],
    ],
  },
  [Block.J]: {
    shapes: [
      [
        [Block.J, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.J, Block.J],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.J],
      ],

      [
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.J, Block.J, Block.EMPTY],
      ],
    ],
  },
  [Block.L]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.L],
        [Block.L, Block.L, Block.L],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.L],
      ],

      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.L, Block.L, Block.L],
        [Block.L, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.L, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
      ],
    ],
  },
  [Block.O]: {
    shapes: [
      [
        [Block.O, Block.O],
        [Block.O, Block.O],
      ],
    ],
  },
  [Block.S]: {
    shapes: [
      [
        [Block.EMPTY, Block.S, Block.S],
        [Block.S, Block.S, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.S, Block.EMPTY],
        [Block.EMPTY, Block.S, Block.S],
        [Block.EMPTY, Block.EMPTY, Block.S],
      ],
    ],
  },
  [Block.T]: {
    shapes: [
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
    ],
  },
  [Block.Z]: {
    shapes: [
      [
        [Block.Z, Block.Z, Block.EMPTY],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],

      [
        [Block.EMPTY, Block.EMPTY, Block.Z],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.Z, Block.EMPTY],
      ],
    ],
  },
}
