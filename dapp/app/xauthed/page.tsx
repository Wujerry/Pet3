import AutoClose from './AutoClose'

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div>
          <AutoClose></AutoClose>
        </div>
      </body>
    </html>
  )
}
