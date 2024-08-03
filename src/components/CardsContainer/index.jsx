import "./CardsContainer.scss"

export default function CardsContainer({children}) {
    return (
        <div className="cards-container">
            {children}
        </div>
    )
}