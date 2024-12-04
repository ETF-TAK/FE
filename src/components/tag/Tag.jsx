import "./style.css"

export default function Tag(props) {
    const { img, title, onClick, isActive } = props

    return (
        <div>
            <div className={`tag ${isActive ? "active" : ""}`} onClick={onClick}>
                <img src={img} 
                    alt="icon" />
                <span>{title}</span>
            </div>
        </div>
    )
}