import PropTypes from 'prop-types'

export const GifItems = ( { title, id, url }) => {
    
    return (
        <div className="card">
            <img src={ url } alt={ title } />    
            <p>{ title }</p>
        </div>)
}

GifItems.propTypes = {
    title: PropTypes.isRequired,
    url: PropTypes.isRequired
}