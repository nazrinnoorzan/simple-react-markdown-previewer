import marked from "marked"

// enable enter button to render new line
marked.setOptions({
  breaks: true
})

function MarkOutput(props) {
  return (
    <div
      className="mark-output-div"
      dangerouslySetInnerHTML={{
        __html: marked(props.markInput)
      }}
    />
  )
}

export default MarkOutput
