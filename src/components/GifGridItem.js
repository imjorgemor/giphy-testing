import PropTypes from 'prop-types';

const GifGridItem = ({ url, title}) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}