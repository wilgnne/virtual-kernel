import Scheduler from "../index"

/**
 * Algoritmo de alternância circular
 * @param scheduler Referência do escalonador
 */
const roundRobin = (scheduler: Scheduler) => {
  const readyProcesses = scheduler.processList.filter(process => (
    process.state >= 0 || process === scheduler.currentProcess
  ))

  const nextProcessIndex = (readyProcesses.indexOf(scheduler.currentProcess) + 1) % readyProcesses.length
  const nextProcess = readyProcesses[nextProcessIndex]

  scheduler.contextSwith(nextProcess === scheduler.currentProcess ? undefined : nextProcess)
}

export default roundRobin
