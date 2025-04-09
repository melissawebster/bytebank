import { useEffect, useState } from "react"

export function useBreakpoint() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const isMobile = width < 768 // < md
  const isTablet = width >= 768 && width < 1024 // md ≤ width < lg
  const isDesktop = width >= 1024 // ≥ lg

  return { isMobile, isTablet, isDesktop }
}
