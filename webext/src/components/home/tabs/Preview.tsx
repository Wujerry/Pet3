import { useEffect, useRef, useState } from 'react'
import { destroy, run } from './render'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type PreviewType = 'Full' | 'Body' | 'Head' | 'Eye' | 'Leg' | 'Arm'
export type RenderType =
  | 'Body'
  | 'Head'
  | 'LeftEye'
  | 'RightEye'
  | 'LeftLeg'
  | 'RightLeg'
  | 'LeftArm'
  | 'RightArm'
  | 'Full'
export default function Preview({ type }: { type: PreviewType }) {
  const ref = useRef<HTMLDivElement>(null)
  const [side, setSide] = useState('Left')
  const showToggle = ['Eye', 'Leg', 'Arm'].includes(type)
  useEffect(() => {
    const el = ref.current!
    let renderType: RenderType = 'Full'
    if (!showToggle) {
      renderType = type as RenderType
    } else {
      renderType = `${side}${type}` as RenderType
    }
    const instance = run(el.clientWidth, el.clientHeight, el, renderType)
    return () => {
      destroy(instance.render, instance.runner, instance.engine)
    }
  }, [side, showToggle, type])
  return (
    <div>
      {showToggle && (
        <ToggleGroup
          type='single'
          value={side}
          onValueChange={(val) => setSide(val)}
        >
          <ToggleGroupItem value='Left'>Left</ToggleGroupItem>
          <ToggleGroupItem value='Right'>Right</ToggleGroupItem>
        </ToggleGroup>
      )}
      <div id='preview-matter' ref={ref} className='h-[300px]'></div>
    </div>
  )
}
