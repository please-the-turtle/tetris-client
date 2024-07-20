import "./Overlay.scss"

export default function Overlay({ isHidden = false, children }) {
    return (
        <div className={isHidden ?
            "overlay hidden" :
            "overlay"}>
            <div>
                { children }
            </div>
        </div>
    )
}