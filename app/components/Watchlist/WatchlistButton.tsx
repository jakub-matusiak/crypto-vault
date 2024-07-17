'use client';

import Image from 'next/image';

type WatchlistButtonType = {
  width: number,
  height: number,
}

export default function WatchlistButton({ width, height }: WatchlistButtonType) {
  function handleClick() {
    console.log('add to watchlist');
  }

  return (
    <button onClick={handleClick}>
      <Image src='/star-outline.svg' className={`min-w-[16px] min-h-[16px]`} width={width} height={height} alt='' />
      {/* <Image src='/star-filled.svg' className={`min-w-[16px] min-h-[16px]`} width={width} height={height} alt='' /> */}
    </button>
  );
}
