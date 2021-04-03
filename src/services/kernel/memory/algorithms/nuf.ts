import { Page, Swap } from ".."

/**
 * Não usada frequentemente
 */
function NUF(memory: Page[], access: number, swap: Swap) {
  const oldMemory = [...memory].sort((a, b) => a?.accessAmount - b?.accessAmount)
  const indexOfFirst = memory.indexOf(oldMemory[0])
  swap(indexOfFirst, access)
}

export default NUF
