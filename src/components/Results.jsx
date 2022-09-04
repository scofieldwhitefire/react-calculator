
const Results = (props) => {
    const current = props.current
  return (
    <div className='text-right'>
        <span className='text-left'>{current.map((x,i) => x)}</span>
    </div>
  )
}

export default Results;