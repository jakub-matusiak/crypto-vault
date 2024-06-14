import Link from 'next/link';
import Image from 'next/image';

type LogoType = {
  width: number,
  height: number,
}

export default function Logo({ width, height }: LogoType) {
  return (
    <Link href='/'>
      <Image src='/logo.svg' width={width} height={height} alt='' />
    </Link>
  );
}
