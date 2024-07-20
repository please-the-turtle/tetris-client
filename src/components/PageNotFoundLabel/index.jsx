import CenterContainer from "../CenterContainer"
import detective from "./detective_3d_default.png"
import "./PageNotFoundLabel.scss";

export default function PageNotFoundLabel() {
    return (
        <CenterContainer>
            <div className="page-not-found-content">
                <img src={detective}
                    alt="🔍 " />
                <h1>
                    Page not found
                </h1>
            </div>
        </CenterContainer>
    )
}