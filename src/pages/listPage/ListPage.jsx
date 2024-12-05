import "./style.css";
import listBack from "../../assets/images/list/list.svg";
import searchList from "../../assets/images/list/searchList.svg";
import searchIcon from "../../assets/images/icons/search_blue.png";
import Tag from "../../components/tag/Tag";
import earth from "../../assets/images/tag/earth_tag.svg";
import us from "../../assets/images/tag/us_tag.svg";
import korea from "../../assets/images/tag/korea_tag.svg";
import all from "../../assets/images/tag/all_tag.svg";
import it from "../../assets/images/tag/it_tag.svg";
import battery from "../../assets/images/tag/battery_tag.svg";
import energy from "../../assets/images/tag/energy_tag.svg";
import hp from "../../assets/images/tag/hp_tag.svg";
import camera from "../../assets/images/tag/camera_tag.svg";
import doller from "../../assets/images/tag/doller_tag.svg";
import cart from "../../assets/images/tag/cart_tag.svg";
import gold from "../../assets/images/tag/gold_tag.svg";
import ship from "../../assets/images/tag/ship_tag.svg";
import esg from "../../assets/images/tag/esg_tag.svg";
import truck from "../../assets/images/tag/truck_tag.svg";
import heart from "../../assets/images/tag/heart_tag.svg";
import reits from "../../assets/images/tag/reits_tag.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export default function ListPage() {
  const nationMap = {
    전체: "ALL",
    미국: "US",
    한국: "KOREA",
  };
  const baseURL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [activeTag, setActiveTag] = useState("전체");
  const [activeSectorTag, setActiveSectorTag] = useState("전체");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const inputText = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setData([]);
    const validNation = nationMap[activeTag] || "전체";

    axios
      .get(`${baseURL}/api/tag/search`, {
        params: {
          keyword: keyword,
          nation: validNation,
          sector: activeSectorTag,
        },
        signal,
      })
      .then((res) => {
        const resultData = res.data.result;
        const filteredData = resultData.filter((item) => item.price !== 0);
        setCount(filteredData.length);
        const formatter = new Intl.NumberFormat("en-US");

        const mappedData = resultData.map((item) => ({
          name: item.name,
          ticker: item.ticker,
          etfNum: item.etfNum,
          price: formatter.format(item.price),
          profitRate: item.profitRate,
          positive: item.positive,
        }));
        setData(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        // console.log("error");
      });
    return () => {
      controller.abort();
    };
  }, [keyword, activeTag, activeSectorTag]);

  const changeCountryTag = (tagTitle) => {
    if (activeTag === tagTitle) {
      setActiveTag("전체");
    } else {
      setActiveTag(tagTitle);
    }
  };

  const changeSectorTag = (tagTitle) => {
    if (activeSectorTag === tagTitle) {
      setActiveSectorTag("전체");
    } else {
      setActiveSectorTag(tagTitle);
    }
  };

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
      <div className="listContent1" style={{ backgroundImage: `url(${listBack})` }}>
        <div className="cardList">
          <div className="tagTitle">
            ETF 관련 정보를
            <br />
            검색해보세요!
          </div>
          <div className="tagSearch-wrapper">
            <input
              type="text"
              placeholder="ETF 종목명이나 코드명을 입력해주세요"
              onChange={inputText}
              className="tagSearch"
            />
            <img src={searchIcon} alt="검색 돋보기 아이콘" className="tagSearch-img" />
          </div>

          <div className="tags-container">
            {tags_country.map(({ img, title }) => (
              <Tag
                kye={title}
                img={img}
                title={title}
                onClick={() => changeCountryTag(title)}
                isActive={activeTag === title}
              />
            ))}
          </div>
          <div className="sectorTitle">섹터별 ETF</div>
          <div className="tags-container">
            {tags_sector.slice(0, 4).map(({ img, title }) => (
              <Tag
                key={title}
                img={img}
                title={title}
                onClick={() => changeSectorTag(title)}
                isActive={activeSectorTag === title}
              />
            ))}
          </div>
          <div className="tags-container">
            {tags_sector.slice(4, 8).map(({ img, title }) => (
              <Tag
                key={title}
                img={img}
                title={title}
                onClick={() => changeSectorTag(title)}
                isActive={activeSectorTag === title}
              />
            ))}
          </div>
          <div className="tags-container">
            {tags_sector.slice(8, 12).map(({ img, title }) => (
              <Tag
                key={title}
                img={img}
                title={title}
                onClick={() => changeSectorTag(title)}
                isActive={activeSectorTag === title}
              />
            ))}
          </div>
          <div className="tags-container">
            {tags_sector.slice(12, 14).map(({ img, title }) => (
              <Tag
                key={title}
                img={img}
                title={title}
                onClick={() => changeSectorTag(title)}
                isActive={activeSectorTag === title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="listContent2">
        <div className="searchTitle">
          <span className="searchCount">{count}</span>건의 검색결과
        </div>
        <div className="etflist-right">
          {loading ? (
            <div className="loading-spinner">
              <SyncLoader color="#123abc" loading={loading} size={15} />
              <p className="loading-message">잠시만 기다려 주세요! 데이터를 불러오는 중입니다.</p>
            </div>
          ) : data.length > 0 ? (
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
                    <th
                      onClick={() => navigate(`/compare/detail?etfId=${etf.ticker !== null ? etf.ticker : etf.etfNum}`)}
                    >
                      {etf.name}
                    </th>
                    <th>
                      {etf.price}
                      <span className="price-list">원</span>
                      <span> (</span>
                      <span className={`price-change-value ${etf.positive ? "positive" : "negative"}`}>
                        {etf.profitRate}
                      </span>
                      <span>)</span>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-tag-Result">
              <div>검색결과가 없습니다.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
