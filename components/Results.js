import Thumbnail from "./Thumbnail"

function Results(props) {
    const result = props.results
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
            <Thumbnail key={result.id} result={result} />
        </div>
    )

}

export default Results