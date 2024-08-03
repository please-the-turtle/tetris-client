import "./Card.scss"

export default function Card({ children, header }) {
    return (
        <div className="card-container">
            <div className="card-header">{header}</div>
            <div className="card-body">{children}</div>
        </div>
    )
}