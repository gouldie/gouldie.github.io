import { Sandpack } from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'
import ClientOnly from '../ClientOnly'

function CodeEditor({ files }) {
  return (
    <ClientOnly>
      <div className='my-8 lg:mx-[-32px] shadow-[0_0_16px_6px_rgb(0,0,0,20%)]'>
        <Sandpack template='react' theme={nightOwl} files={files} />
      </div>
    </ClientOnly>
  )
}

export default CodeEditor
