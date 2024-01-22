
// eslint-disable-next-line react/prop-types
const Button = ({btnStyle, btnTitle}) => {
  return (
    <div>
        <button className={btnStyle} >{btnTitle}</button>
    </div>
  )
}

export default Button