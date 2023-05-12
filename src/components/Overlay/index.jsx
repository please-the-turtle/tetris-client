import "./Overlay.scss"

export default function Overlay({ isHidden, children }) {
    return (
        <div className={isHidden ?
            "overlay _hidden" :
            "overlay"}>
            <div>
                { children }
            </div>
        </div>
    )
}