import Logo from './Logo';

const date = new Date;

export default function Footer() {
  return (
    <footer className="footer items-center p-4">
      <aside className="items-center grid-flow-col">
        <Logo width={92} height={22} />
        <p>Copyright &copy; { date.getFullYear() } - All right reserved</p>
      </aside>
    </footer>
  )
}
