'use client'

export default function AutoClose() {
  setTimeout(() => {
    window.close()
  }, 1000)
  return <div></div>
}
