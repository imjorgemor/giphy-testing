import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category === "trending" ? null : category}</h3>

            {category.length > 1 && loading && <p>loading...</p>}

            <div className="card-grid">
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}