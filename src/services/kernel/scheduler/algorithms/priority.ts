import Scheduler from "../index"

/**
 * Algoritmo de prioridade
 * @param scheduler ReferĂȘncia do escalonador
 */
const priority = (scheduler: Scheduler) => {
  const readyProcesses = scheduler.processList.filter(process => process.state >= 0)
  const priorityProcesses = readyProcesses.sort((a, b) => b.priority - a.priority)

  scheduler.contextSwith(priorityProcesses[0])
}

export default priority
