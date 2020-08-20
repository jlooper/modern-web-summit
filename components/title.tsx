import React from 'react'

const Title = (props: TitleProps) => {
  const { title, parentClass } = props
  return (
    <div className={`relative my-3 ${parentClass}`}>
      <p className="uppercase text-xs text-white border-white border-2 bg-typographyLight absolute bottom-1/2 transform translate-y-1/2 px-4 py-1">{title}</p>
    </div>
  )
}
export default Title

type TitleProps = {
  title: string,
  parentClass: string
}
