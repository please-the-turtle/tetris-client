import spinner from './loading.svg'
import './Loading.scss'

export default function Loading() {
    return (
        <div className='container'>
            <img className='spinner' src={spinner} alt='loading' />
        </div>
    )
} 