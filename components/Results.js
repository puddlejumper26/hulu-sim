import Thumbnail from "./Thumbnail"

function Results(props) {
    const result = props.results
    return (
        <div>
            <Thumbnail key={result.id} result={result} />
        </div>
    )

}

export default Results