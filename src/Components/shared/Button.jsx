import React from 'react'

function Button({children,version,type,isDisable}) {
  return (
   <button type={type} className={`btn btn-${version}`} disabled={isDisable}>
       {children}
   </button>
  )
}
Button.defaultProps={
    version:'primary',
    type:'button',
    isDisable: false,
}
export default Button