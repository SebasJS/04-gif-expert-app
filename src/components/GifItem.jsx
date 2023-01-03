import PropTypes from 'prop-types'

const GifItems = ( { title, id, url }) => {
    
    return (
        <div className="card">
            <img src={ url } alt={ title } />    
            <p>{ title }</p>
        </div>)
}

GifItems.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifItems;