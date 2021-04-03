import { Page, Swap } from ".."

/**
 * Primeira a entrar, primeira a sair
 */
function FIFO(memory: Page[], access: number, swap: Swap) {
  const oldMemory = [...memory].sort((a, b) => a?.created - b?.created)
  const indexOfFirst = memory.indexOf(oldMemory[0])
  swap(indexOfFirst, access)
}

export default FIFO
