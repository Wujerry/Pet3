import BindXBtn from './BindXBtn'

export default function Header() {
  return (
    <header className='flex justify-end p-2'>
      <BindXBtn username={undefined}></BindXBtn>
    </header>
  )
}
