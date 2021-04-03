import { Page, Swap } from ".."

/**
 * Exelente
 */
function Excellent(memory: Page[], access: number, swap: Swap) {
  const oldMemory = [...memory].sort((a, b) => a?.nextReference - b?.nextReference)
  const indexOfFirst = memory.indexOf(oldMemory[oldMemory.length -1])
  swap(indexOfFirst, access)
}

export default Excellent
