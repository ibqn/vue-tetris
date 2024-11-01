import { shapes } from '../consts'
import { Block, BlockVariant } from '../types'

export const getRandomBlock = (): BlockVariant => {
  const blocks = Object.values(Block).filter((block) => block !== Block.EMPTY)
  const randomBlock = blocks[Math.floor(Math.random() * blocks.length)]
  const randomShapeIndex = Math.floor(Math.random() * shapes[randomBlock].shapes.length)

  return {
    block: randomBlock,
    shapeIndex: randomShapeIndex,
  }
}
