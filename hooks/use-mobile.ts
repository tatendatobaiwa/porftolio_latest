import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value only if not yet set
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    // Defer initial setup to avoid synchronous setting in effect
    setTimeout(() => {
      setIsMobile(mql.matches)
    }, 0)
    
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
