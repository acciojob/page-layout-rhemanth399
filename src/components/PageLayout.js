


import React from 'react'

export default function PageLayout({header,footer,children}) {
  return (
    <div>
      {header&&<header>{header}</header>}
      {children}
      {footer&&<footer>{footer}</footer>}
    </div>
  )
}
