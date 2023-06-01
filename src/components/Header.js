import "./Header.css";

export default function Header() {

    return (
        <div className="Header">
            <video src={require("../assets/cake.mp4")} autoPlay loop muted />
            {/* <img src={require("../assets/logomarka.png")} /> */}
        </div>
    )
}