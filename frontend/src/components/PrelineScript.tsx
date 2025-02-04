'use client'

import { useEffect } from 'react'

export default function PrelineScript() {
  useEffect(() => {
    import('preline/preline').then(() => {
      window.HSStaticMethods.autoInit()
    })
  }, [])

  return null
}
