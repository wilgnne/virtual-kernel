import { Page, Swap } from ".."

/**
 * Menos Recentemente Usada
 */
function MRU(memory: Page[], access: number, swap: Swap) {
  const oldMemory = [...memory].sort((a, b) => a?.lastAcess - b?.lastAcess)
  const indexOfFirst = memory.indexOf(oldMemory[0])
  swap(indexOfFirst, access)
}

export default MRU
