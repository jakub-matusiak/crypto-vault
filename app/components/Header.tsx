import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <div className='navbar'>
        <div className='flex-1'>
          <Logo width={137} height={32} />
        </div>
      </div>
    </header>
  )
}
