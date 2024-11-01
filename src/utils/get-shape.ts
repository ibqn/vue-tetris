import { shapes } from '../consts'
import { BlockShape, BlockVariant } from '../types'

export const getShape = (blockVariant: BlockVariant): BlockShape =>
  shapes[blockVariant.block].shapes[blockVariant.shapeIndex]
