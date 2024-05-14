import Logo from './Logo';

export default function Header() {
  return (
    <header className='w-full border-b border-gray-100 px-4 md:px-16 py-2'>
      <div className='max-w-7xl w-full mx-auto'>
        <Logo width={137} height={32} />
      </div>
    </header>
  )
}
