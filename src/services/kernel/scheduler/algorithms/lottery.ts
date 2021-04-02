import Scheduler from "../index"
import Process from "../process"

/**
 * Retorna um item aleatoriamente a partir de um peso
 * @param items Itens a serem randomizados
 */
function weightFunction (items: Process[]) {
  let cumul: number = items.reduce((prev, curr) => prev + curr.priority, 0)
  let random = Math.floor(Math.random() * cumul)

  for(var i = 0; i < items.length; i++) {
    cumul -= items[i].priority
    if (random >= cumul) {
      return items[i]
    }
  }
}

/**
 * Algoritmo de loteria
 * @param scheduler Referência do escalonador
 */
const lottery = (scheduler: Scheduler) => {
  const readyProcesses = scheduler.processList.filter(process => process.state >= 0)
  const nextProcess = weightFunction(readyProcesses)

  scheduler.contextSwith(nextProcess)
}

export default lottery
