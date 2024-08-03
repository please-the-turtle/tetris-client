import "./SquareCard.scss"

export default function SquareCard({ children, header = "" }) {
    return (
        <div className="square-card-container">
            <div className="square-card-content">
                {children}
            </div>
            <div className="square-card-header">
                {header}
            </div>
        </div>
    )
}