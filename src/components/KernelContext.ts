import { createContext } from 'react'
import { ClockCallback } from '../services/kernel'

type ContextType = {
  registerCallback: (callback: ClockCallback) => void
  updateKernel: ClockCallback
}

export default createContext<ContextType>({
  registerCallback: () => undefined,
  updateKernel: () => undefined
})
