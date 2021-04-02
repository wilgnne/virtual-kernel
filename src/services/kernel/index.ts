import Scheduler, { SchedulerAlgorithm, SchedulerConfig } from './scheduler'
import Process, { IProcess } from './scheduler/process'

export type ClockCallback = (kernel: Kernel) => void

/**
 * Abstração do Kernel
 */
class Kernel {
  clk = -1
  scheduler: Scheduler
  private clockCallback: ClockCallback | undefined

  private clockIntervalID: NodeJS.Timeout
  private clockInterval: number

  public get isPaused() : boolean {
    return this.clockIntervalID === undefined
  }

  constructor(schedulerAlgotith: SchedulerAlgorithm, schedulerConfig: SchedulerConfig, clockCallback?: ClockCallback, clockInterval = 1000) {
    this.clk = 0
    this.clockCallback = clockCallback

    this.scheduler = new Scheduler(schedulerAlgotith, schedulerConfig.algorithm, schedulerConfig.quantum)

    this.clockInterval = clockInterval
    this.start()
  }
  /**
   * A função clock é a responsável por sincronizar toda a execução do kernel
   */
  clock = () => {
    this.clk = this.clk + 1
    this.scheduler.clock()
    if (this.clockCallback) this.clockCallback(this)
  }

  /**
   * Inicia a chamada a função clock num intervalo de this.clockInterval
   */
  start = () => {
    this.clockIntervalID = setInterval(this.clock, this.clockInterval)
  }

  /**
   * Pausa as chamadas da função clock
   */
  stop = () => {
    if (this.clockIntervalID) {
      clearInterval(this.clockIntervalID)
      this.clockIntervalID = undefined
    }
    else this.start()
  }
}

export type { IProcess, Process, SchedulerConfig }
export default Kernel
