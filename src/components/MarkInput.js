function MarkInput(props) {
  function handleChangeMarkInput(e) {
    return props.setMarkInput(e.target.value)
  }

  return (
    <div className="mark-input-div">
      <h2>Write your text in the box</h2>
      <textarea className="input" value={props.markInput} onChange={handleChangeMarkInput} />
    </div>
  )
}

export default MarkInput
