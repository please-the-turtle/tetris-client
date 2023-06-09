import CenterContainer from "../../components/CenterContainer"
import detective from "./detective_3d_default.png"
import "./PageNotFound.scss";

export default function PageNotFound() {
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