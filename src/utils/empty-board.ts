import { BOARD_HEIGHT } from '../consts'
import { Block } from '../types'

export const getEmptyBoard = () => Array.from<Block>({ length: BOARD_HEIGHT }).fill(Block.EMPTY)
