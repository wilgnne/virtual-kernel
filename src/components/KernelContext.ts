import { createContext } from 'react'
import { ClockCallback, IProcess, SchedulerConfig } from '../services/kernel'

type ContextType = {
  registerCallback: (callback: ClockCallback) => void
  updateKernel: (config?: SchedulerConfig, procecess?: IProcess[]) => void
}

export default createContext<ContextType>({
  registerCallback: () => undefined,
  updateKernel: (config?: SchedulerConfig, procecess?: IProcess[]) => undefined
})
