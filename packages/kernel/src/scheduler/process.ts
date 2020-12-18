import { throws } from "assert"

export type IProcess = {
  name: string,
  pid: number,
  time: number,
  priority: number,
  uid: number,
  mem: number
}

/**
 * Abstração de um Processo
 */
class Process {
  name: string
  pid: number
  time: number
  timeLeft: number
  priority: number
  uid: number
  mem: number
  state: number

  constructor(process: IProcess) {
    const { name, pid, time, priority, uid, mem } = process

    this.name = name
    this.pid = pid
    this.time = time
    this.timeLeft = 0
    this.priority = priority
    this.uid = uid
    this.mem = mem
    this.state = 0
  }

  /**
   * Reduz o tempo de CPU e tempo total de execução, e troca o estado caso termine
   */
  clock = () => {
    this.timeLeft -= 1
    this.time -= 1


    if (this.time === 0) {
      this.state = -1
    }
  }
}

export default Process
