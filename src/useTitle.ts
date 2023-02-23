import { useEffect } from 'react'

/**
 * react hook to change the title of the page
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}
