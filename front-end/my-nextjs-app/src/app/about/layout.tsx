import Link from 'next/link'
import React from 'react'
 

export default function LayoutAbout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='root'>{children}</body>
      <h1>sss</h1>
      
      <Link href={'/'}>My home page</Link>
    </html>
  )
}
