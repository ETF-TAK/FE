import "./style.css"
import listBack from "../../assets/images/list/list.svg"
import searchList from "../../assets/images/list/searchList.svg"
import Tag from "../../components/tag/Tag"
import earth from "../../assets/images/tag/earth_tag.svg"
import us from "../../assets/images/tag/us_tag.svg"
import korea from "../../assets/images/tag/korea_tag.svg"
import all from "../../assets/images/tag/all_tag.svg"
import it from "../../assets/images/tag/it_tag.svg"
import battery from "../../assets/images/tag/battery_tag.svg"
import energy from "../../assets/images/tag/energy_tag.svg"
import hp from "../../assets/images/tag/hp_tag.svg"
import camera from "../../assets/images/tag/camera_tag.svg"
import doller from "../../assets/images/tag/doller_tag.svg"
import cart from "../../assets/images/tag/cart_tag.svg"
import gold from "../../assets/images/tag/gold_tag.svg"
import ship from "../../assets/images/tag/ship_tag.svg"
import esg from "../../assets/images/tag/esg_tag.svg"
import truck from "../../assets/images/tag/truck_tag.svg"
import heart from "../../assets/images/tag/heart_tag.svg"
import reits from "../../assets/images/tag/reits_tag.svg"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ListPage(){
    const nationMap = {
        "전체": "ALL",
        "미국": "US",
        "한국": "KOREA",
    };
    
    const [data, setData] = useState([]);
    const [count, setCount] = useState(200);
    const [activeTag, setActiveTag] = useState("전체");
    const [activeSectorTag, setActiveSectorTag] = useState("전체");
    const [etfData, setEtfData] = useState([
        {
          name: "Kodex 성장주",
          price: 12800,
        },
        {
          name: "Kodex 배당주",
          price: 15000,
        },
        {
          name: "Kodex 가치주",
          price: 14200,
        },
        {
          name: "Kodex 인덱스",
          price: 13500,
        },
        {
          name: "Kodex 코스닥",
          price: 12100
        }
    ])

    useEffect(() => {
        const validNation = nationMap[activeTag] || "전체";
        console.log("현재 validNation 값:", validNation);
        console.log("현재 activeTag 값:", activeTag);
        console.log("현재 activeSectorTag 값:", activeSectorTag);

        axios.get("http://localhost:8080/api/tag/search", {
            params: {
                keyword: "",
                nation: validNation,
                sector: activeSectorTag
            }
        })
        .then(res => {
            console.log("API Response:", res.data);
            const mappedData = res.data.result.map(item => ({
                name: item,
            }));
            setData(mappedData);
        })
        .catch(err => console.log("error"))
    }, [activeTag, activeSectorTag])

    const changeCountryTag = (tagTitle) => {
        if (activeTag === tagTitle) {
            setActiveTag("전체");
            console.log(`Country 태그 ${tagTitle} 취소됨`);
        } else {
            setActiveTag(tagTitle);
            console.log(`클릭된 Country 태그: ${tagTitle}`);
        }
    }

    const changeSectorTag = (tagTitle) => {
        if (activeSectorTag === tagTitle) {
            setActiveSectorTag("전체")
            console.log(`Sector 태그 ${tagTitle} 취소됨`);
        } else {
            setActiveSectorTag(tagTitle)
            console.log(`Sector 태그 ${tagTitle}`);
        }
    }

    const tags_country = [
        { img: earth, title: "전체" },
        { img: us, title: "미국" },
        { img: korea, title: "한국" },
    ];

    const tags_sector = [
        { img: all, title: "전체" },
        { img: it, title: "IT" },
        { img: battery, title: "2차전지" },
        { img: energy, title: "에너지/화학" },
        { img: hp, title: "반도체" },
        { img: camera, title: "엔터테인먼트" },
        { img: doller, title: "금융" },
        { img: cart, title: "소비재" },
        { img: gold, title: "금" },
        { img: ship, title: "조선" },
        { img: esg, title: "ESG" },
        { img: truck, title: "운송" },
        { img: heart, title: "바이오/헬스" },
        { img: reits, title: "리츠" },
    ];

    return (
        <div className="listContainer">
            <div className="listContent1">
                <div className="cardList" style={{ backgroundImage: `url(${listBack})`}} >
                    <div className="tagTitle">ETF 관련 정보를<br />검색해보세요!</div>
                    <input type="text" placeholder="ETF 종목명이나 코드명을 입력해주세요" 
                    className="tagSearch" style={{ backgroundImage: `url(${searchList})`}}/>
                    <div className="tags-container">
                        {tags_country.map(({ img, title }) => (
                            <Tag  
                            kye={title}
                            img={img}
                            title={title}
                            onClick={()=>changeCountryTag(title)}
                            isActive={activeTag === title}
                            />
                        ))}      
                    </div>
                    <div className="sectorTitle">섹터별 ETF</div>
                    <div className="tags-container">
                        {tags_sector.map(({ img, title }) => (
                            <Tag  
                            img={img}
                            title={title}
                            onClick={()=>changeSectorTag(title)}
                            isActive={activeSectorTag === title}
                            />
                        ))}      
                    </div>
                </div>
            </div>
            <div className="listContent2">
                <div>{data.result}</div>
                <div className="searchTitle"><span className="searchCount">{count}</span>건의 검색결과</div>
                <div className="etflist-right">
                    <table>
                        <thead>
                            <tr>
                                <th>종목</th>
                                <th>현재가</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((etf, index) => (
                                <tr key={index}>
                                    <th>{etf.name}</th>
                                    <th>
                                        {etf.price}<span className="price-list"> 원</span>
                                        <span> (</span>
                                        <span className="price-change-value">+20%</span>
                                        <span>)</span>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}