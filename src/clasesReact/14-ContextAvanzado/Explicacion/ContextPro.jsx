import { Home } from './components/Home'
import { ContextProvider } from './ContextProvider/ContextProvider'

export const ContextPro = () => {
  return (    
        <ContextProvider>
            <Home />
        </ContextProvider>
  )
}
