import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Preview from './tabs/Preview'

export default function TabContent() {
  return (
    <Tabs defaultValue='Preview' className='flex w-full flex-col items-center'>
      <TabsList>
        <TabsTrigger value='Preview'>Preview</TabsTrigger>
        <TabsTrigger value='Body'>Body</TabsTrigger>
        <TabsTrigger value='Head'>Head</TabsTrigger>
        <TabsTrigger value='Eye'>Eye</TabsTrigger>
        <TabsTrigger value='Leg'>Leg</TabsTrigger>
        <TabsTrigger value='Arm'>Arm</TabsTrigger>
      </TabsList>
      <TabsContent value='Preview'>
        <Preview type='Full'></Preview>
      </TabsContent>
      <TabsContent value='Body'>
        <Preview type='Body'></Preview>
      </TabsContent>
      <TabsContent value='Head'>
        <Preview type='Head'></Preview>
      </TabsContent>
      <TabsContent value='Eye'>
        <Preview type='Eye'></Preview>
      </TabsContent>
      <TabsContent value='Leg'>
        <Preview type='Leg'></Preview>
      </TabsContent>
      <TabsContent value='Arm'>
        <Preview type='Arm'></Preview>
      </TabsContent>
    </Tabs>
  )
}
