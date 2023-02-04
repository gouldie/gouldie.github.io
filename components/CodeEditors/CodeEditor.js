import { Sandpack } from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'
import ClientOnly from '../ClientOnly'

function CodeEditor({ files }) {
  return (
    <ClientOnly>
      <Sandpack template='react' theme={nightOwl} files={files} />
    </ClientOnly>
  )
}

export default CodeEditor
