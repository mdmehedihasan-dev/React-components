
// eslint-disable-next-line react/prop-types
const Title = ({title,titleStyle}) => {
  return (
    <div>
        <p className={titleStyle}>{title}</p>
    </div>
  )
}

export default Title