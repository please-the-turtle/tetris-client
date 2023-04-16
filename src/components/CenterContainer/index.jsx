import './CenterContainer.scss'

export default function CenterContainer( {children} ) {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}