import { useParams } from "react-router-dom";
import './style.css'
import GuideData from "./guideData"

export default function GuideDetailPage(){
    const { num } = useParams()
    const content = GuideData[num] || null

    return (
        <div>
            <div className="cardDetail"
            style={{ backgroundImage: `url(${content.image})`}}/>
            <div className="etf-detail-title">{content.content.heading}</div>
            <div className="etf-detail-content">
                {content.content.paragraphs.map((paragraph, index) => {
                    if (paragraph.text && paragraph.text.trim() !== "") {
                        return (
                            <p key={index} className={paragraph.className}>
                                {paragraph.text}
                            </p>
                        );
                    } 
                    if (paragraph.text === "") {
                        return <div key={index} className="empty-line" />; 
                    }
                    if (paragraph.image) {
                        return (
                            <div className="image-container" key={index}>
                                <img
                                    src={paragraph.image}
                                    alt={`Paragraph Illustration ${index}`}
                                    style={{ height: paragraph.height }}
                                />
                            </div>
                        );
                    }
                    return null;
                }   
                )}
            </div>
            
        </div>
    )
}