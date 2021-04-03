type Algorith = (memory: Page[], access: number, swap: Swap) => void

export type Page = {
  content: number,
  created: number,

  referenced: boolean,
  modified: boolean,
  lastAcess: number,
  accessAmount: number,
  nextReference: number
}

export type Swap = (index: number, access: number) => void

function pageIsInMemory(memory: Page[], access: number) {
  return memory.find(page => page?.content === access)
}

function pagesSwitch (framesAmount: number, processPages: number, accesses: number[], algorith: Algorith) {
  let swapCount = 0
  let memory = [... new Array(framesAmount).fill(undefined)]


  let clock = 0

  function allocatePage(access: number) {
    const free = memory.findIndex(page => page === undefined)

    if (free === -1) return false

    const nextReference = accesses.slice(clock + 1).findIndex(value => value === access)

    memory[free] = {
      referenced: true,
      modified: false,
      content: access,
      lastAcess: clock,
      accessAmount: 1,
      created: clock,
      nextReference: nextReference === -1 ? Number.POSITIVE_INFINITY : nextReference + clock + 1,
    }
    swapCount += 1

    return true
  }

  function swap(index: number, access: number) {
    const nextReference = accesses.slice(clock + 1).findIndex(value => value === access)

    memory[index] = {
      referenced: true,
      modified: false,
      content: access,
      lastAcess: clock,
      accessAmount: 1,
      created: clock,
      nextReference: nextReference === -1 ? Number.POSITIVE_INFINITY : nextReference + clock + 1,
    }
    swapCount += 1
  }

  for (let index = 0; index < accesses.length; index++) {
    const access = accesses[index];

    const page = pageIsInMemory(memory, access)
    if (page) {
      page.referenced = true
      page.lastAcess = clock
      page.accessAmount += 1
      clock += 1
      continue
    }

    if (allocatePage(access) === false) algorith(memory, access, swap)
    clock += 1
  }

  return swapCount
}

export { pagesSwitch }
