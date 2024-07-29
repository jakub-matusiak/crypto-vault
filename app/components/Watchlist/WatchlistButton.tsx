'use client';

import Image from 'next/image';

import { useState } from 'react';

type WatchlistButtonType = {
  width: number,
  height: number,
}

export default function WatchlistButton({ width, height }: WatchlistButtonType) {
  const [active, setActive] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<boolean>(false);

  function handleClick() {
    setActive(!active);
    setTooltip(true);

    setTimeout(() => setTooltip(false), 3000);
  }

  return (
    <div className={tooltip ? 'tooltip tooltip-right tooltip-open' : ''} data-tip={active ? 'Added to Watchlist!' : 'Removed from Watchlist!'}>
      <button onClick={handleClick}>
        {active ? (
          <Image src='/star-filled.svg' className={`min-w-[16px] min-h-[16px]`} width={width} height={height} alt='' />
        ) : (
          <Image src='/star-outline.svg' className={`min-w-[16px] min-h-[16px]`} width={width} height={height} alt='' />
        )}
      </button>
    </div>
  );
}
