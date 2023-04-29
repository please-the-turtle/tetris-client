import "./SquareCard.scss"

export default function SquareCard({ children, header = "" }) {
    return (
        <div className="card-container">
            <div className="card-content">
                {children}
            </div>
            <div className="card-header">
                {header}
            </div>
        </div>
    )
}