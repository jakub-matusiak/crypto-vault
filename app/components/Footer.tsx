import Logo from './Logo';

const date = new Date;

export default function Footer() {
  return (
    <footer className='w-full border-t border-gray-100 px-4 md:px-16 py-4'>
      <div className='flex justify-between items-center max-w-7xl w-full mx-auto'>
        <Logo width={92} height={22} />
        <p className='text-xs'>Copyright &copy; { date.getFullYear() }</p>
      </div>
    </footer>
  )
}
