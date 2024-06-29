'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className='text-sm breadcrumbs mb-1'>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let upperCaseLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              <li>{index + 1 === pathNames.length ? <span className='font-semibold'>{upperCaseLink}</span> : <Link href={href}>{upperCaseLink}</Link>}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
