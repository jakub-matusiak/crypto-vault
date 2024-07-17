import Link from 'next/link';

type PortfoliosItemProps = {
  id: string,
  name: string,
}

export default function PortfoliosItem({ id, name }: PortfoliosItemProps) {
  return (
    <Link href={`/portfolio/${id}`} className='link link-hover'>{name}</Link>
  );
}
