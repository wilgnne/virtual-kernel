import { createContext } from 'react'
import { ClockCallback, IProcess, SchedulerConfig } from '../services/kernel'
import { FSCallback } from '../services/kernel/fs'

type ContextType = {
  registerCallback: (callback: FSCallback) => void
  //updateKernel: (config?: SchedulerConfig, procecess?: IProcess[]) => void
}

export default createContext<ContextType>({
  registerCallback: () => undefined,
  //updateKernel: (config?: SchedulerConfig, procecess?: IProcess[]) => undefined
})
