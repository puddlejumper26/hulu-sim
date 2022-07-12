import Thumbnail from "./Thumbnail"

function Results(props) {
    const result = props.results
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            <Thumbnail key={result.id} result={result} />
        </div>
    )

}

export default Results