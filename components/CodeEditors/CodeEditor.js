import { Sandpack } from '@codesandbox/sandpack-react'
import { githubLight, nightOwl } from '@codesandbox/sandpack-themes'
import { useTheme } from 'next-themes'
import ClientOnly from '../ClientOnly'

function CodeEditor({ files }) {
  const { resolvedTheme } = useTheme()

  const theme = resolvedTheme === 'dark' ? nightOwl : githubLight

  return (
    <ClientOnly>
      <Sandpack template='react' theme={theme} files={files} />
    </ClientOnly>
  )
}

export default CodeEditor
