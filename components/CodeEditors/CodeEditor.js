import { Sandpack } from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'
import ClientOnly from '../ClientOnly'

function CodeEditor({ files }) {
  return (
    <ClientOnly>
      <div className='my-8 lg:mx-[-32px]'>
        <Sandpack template='react' theme={nightOwl} files={files} />
      </div>
    </ClientOnly>
  )
}

export default CodeEditor
