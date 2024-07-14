'use client';

import Image from 'next/image';

type PortfolioButtonType = {
  width: number,
  height: number,
}

export default function PortfolioButton({ width, height }: PortfolioButtonType) {
  function handleClick() {
    console.log('add to portfolio');
  }

  return (
    <button onClick={handleClick}>
      <Image src='/star-outline.svg' className={`min-w-[${width}px] min-h-[${height}px]`} width={width} height={height} alt='' />
      {/* <Image src='/star-filled.svg' className={`min-w-[${width}px] min-h-[${height}px]`} width={width} height={height} alt='' /> */}
    </button>
  );
}
