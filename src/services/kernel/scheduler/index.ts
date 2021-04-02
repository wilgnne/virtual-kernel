import lottery from "./algorithms/lottery"
import roundRobin from "./algorithms/roundRobin"
import priority from "./algorithms/priority"
import Process, { IProcess } from "./process"

export type SchedulerAlgorithm = (scheduler: Scheduler) => void

export const schedulerAlgorithms: { [id: string]: SchedulerAlgorithm } = {
  "alternanciaCircular": roundRobin,
  "loteria": lottery,
  "prioridade": priority
}

export type SchedulerConfig = {
  algorithm: string,
  quantum: number,
  interval: number,
}

/**
 * Abstração do Escalonador
 */
class Scheduler {
  quantum: number
  currentProcessIndex = -1
  processList: Process[]
  currentProcess: Process

  algorithm: SchedulerAlgorithm
  algorithmName: string

  constructor(algorithm: SchedulerAlgorithm, algorithmName: string, quantum: number) {
    this.quantum = quantum
    this.algorithmName = algorithmName
    this.algorithm = algorithm
    this.currentProcessIndex = -1
    this.processList = []
    this.currentProcess = undefined
  }

  /**
   * O clock é responsável por chamar o processo e o algoritmos de escalonamento
   */
  clock = () => {
    if (this.currentProcess) {
      this.currentProcess.clock()
      if (this.currentProcess.timeLeft > 0 && this.currentProcess.time > 0) return
    }

    if (this.processList.length > 0) {
      this.algorithm(this)
    }
  }

  /**
   * Registra um novo processo
   * @param process Processo a ser registrado
   */
  newProcess = (process: IProcess) => {
    this.processList.push(new Process(process))
  }

  /**
   * Troca de contexto
   * @param nextProcess Próximo processo a assumir a CPU
   */
  contextSwith = (nextProcess: Process) => {
    if (nextProcess) {
      nextProcess.state = 1
      nextProcess.timeLeft = this.quantum
    }

    if (this.currentProcess){
      if (this.currentProcess.time === 0) this.processList.splice(this.currentProcessIndex, 1)
      else this.currentProcess.state = 0
    }

    this.currentProcess = nextProcess
    this.currentProcessIndex = this.processList.indexOf(this.currentProcess)
  }
}

export default Scheduler;
