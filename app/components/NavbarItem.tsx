"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link className={`hover:text-amber-600 font-semibold ${genre === param ? 
        'text-amber-600' : 'text-gray-800'
      }`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
