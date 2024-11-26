import "./style.css"

import wordImg1 from "../../../assets/images/wordDetail/word_detail1.svg";
import wordImg2 from "../../../assets/images/wordDetail/word_detail2.svg";
import wordImg3 from "../../../assets/images/wordDetail/word_detail3.svg";
import wordImg4 from "../../../assets/images/wordDetail/word_detail4.svg";
import wordImg5 from "../../../assets/images/wordDetail/word_detail5.svg";
import wordImg6 from "../../../assets/images/wordDetail/word_detail6.svg";
import wordImg7 from "../../../assets/images/wordDetail/word_detail7.svg";
import wordImg8 from "../../../assets/images/wordDetail/word_detail8.svg";
import wordImg9 from "../../../assets/images/wordDetail/word_detail9.svg";
import wordImg10 from "../../../assets/images/wordDetail/word_detail10.svg";

import content1 from "../../../assets/images/wordDetail/content1.svg"
import content2 from "../../../assets/images/wordDetail/content2.svg"
import content3 from "../../../assets/images/wordDetail/content3.svg"
import content4 from "../../../assets/images/wordDetail/content4.svg"
import content5 from "../../../assets/images/wordDetail/content5.svg"
import content7 from "../../../assets/images/wordDetail/content7.svg"
import content8 from "../../../assets/images/wordDetail/content8.svg"
import content9 from "../../../assets/images/wordDetail/content9.svg"


const GuideData = {
    1: {
        image: wordImg1,
        content: {
            heading: "ETF란 무엇일까?",
            paragraphs: [
                { text: "ETF는 Exchange Traded Fund의 약자로 코스피200과 같은 지수를 추종하는 주식시장에 상장된 펀드를 말합니다.", className: "small-text" },
                { text: "펀드이지만 주식시장에 상장했으니 ‘상장지수펀드’로 불려요. 주식과 같은 특징도 갖고 있어 펀드와 주식의 장점을 모두 갖고 있다고 할 수 있습니다.", className: "small-text" },
                { text: "" },
                { text: "소액으로 분산투자가 가능하며, 주식투자와 동일하게 환금성이 좋습니다. 보수 또한 일반 펀드 대비 저렴하며, 증권거래세 면제 등으로 거래 비용이 낮아 장기 투자시 수익성 제고에 도움이 됩니다.", className: "small-text" },
                { text: "" },
                { text: "여기에, 운용 자산을 매일매일 확인할 수 있어 투명성 측면에서도 장점이 있습니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "ETF의 장점", className: "large-text"},
                { text: "" },
                { image: content1, height: "500px" }
            ]
        }
    },
    2: {
        image: wordImg2,
        content: {
            heading: "ETF는 어떻게 투자할까?",
            paragraphs: [
                { text: "ETF는 주식처럼 증권사 앱이나 컴퓨터 프로그램으로 투자할 수 있습니다.", className: "small-text"},
                { text: "" },
                { text: "ETF는 거래소가 열리는 날과 시간에 주식처럼 거래를 할 수 있습니다.", className: "small-text" },
                { text: "한국 거래소에 상장된 ETF는 한국 시간 기준, 오전 9시부터 오후 3시 30분 사이에 거래 가능합니다.", className: "small-text" },
                { text: "" },
                { text: "미국 거래소에 상장된 ETF는 서머 타임 적용 기준으로 한국 시간 오후 10시 30분 ~ 오전 5시,", className: "small-text" },
                { text: "서머 타임 해제 기준으로 한국 시간 오후 11시 30분 ~ 오전 6시 사이에 거래 가능합니다.", className: "small-text" },
                { text: "" },
                { text: "" },
                { text: "ETF 투자 매매 방법", className: "large-text"},
                { text: "" },
                { image: content2, height: "800px" }
            ]
        }
    },
    3: {
        image: wordImg3,
        content: {
            heading: "ETF의 순자산 가치, NAV",
            paragraphs: [
                { text: "ETF의 순자산가치(NAV)는 ETF의 자산에서 부채 및 관련 비용을 공제하여 산출한 ETF의 이론적 가치이며, 주당 NAV는 순자산 가치를 총 발행주식수로 나누어 계산합니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "NAV와 iNAV", className: "large-text"},
                { text: "" },
                { image: content3, height: "300px" },
                { text: "" },
                { text: "매일 거래소 장이 끝나고 주식들의 종가가 결정되면 ETF도 보유하고 있는 자산의 가치와 수량 변화 등을 정리합니다. ETF를 이루고 있는 자산에서 ETF의 부채(자산운용사에 지급하는 운용보수)를 제외하면 순자산총액이 나오게 되고, 이 순자산총액을 ETF 발행 증권 수로 나누면 순자산가치(NAV, Net Asset Value)가 나옵니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "괴리율", className: "large-text"},
                { text: "" },
                { text: "ETF의 가격은 NAV, iNAV와 항상 동일한 가격을 형성하는 것은 아니에요. 때로는 NAV, iNAV보다 높을 수도 있고 때로는 그 반대일 수 있습니다.", className: "small-text"},
                { text: "이때 시장가격이 NAV보다 높으면 가격이 높게 거래가 된다 하고, 시장가격이 NAV보다 낮으면 가격이 낮게 거래가 된다고 하는데 이 때 시장가격과 NAV의 차이를 괴리도 라고 하고 그 차이 비율을 괴리율이라고 합니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "추적오차(Tracking Error)", className: "large-text"},
                { text: "" },
                { text: "추적오차는 ETF가 추종하는 기초지수와 NAV(순자산 가치)의 차이로, ETF의 NAV가 기초지수를 잘 따라가고 있는 지를 보여주는 지표입니다.", className: "small-text"},
                { text: "추적오차가 발생하는 이유는 복제 방법(완전 복제, 부분 복제)와 운용 보수 등의 제 비용 수준, 기초자산에서 발생하는 배당금 및 이자 등이 있습니다.", className: "small-text"},
            ]
        }
    },
    4: {
        image: wordImg4,
        content: {
            heading: "유동성 공급자, LP",
            paragraphs: [
                { text: "LP는 Liquidity Provider의 약자로, 금융시장에 유동성을 공급하는 역할을 의미합니다.", className: "small-text"},
                { text: "" },
                { text: "ETF 순자산은 추종하는 지수에 맞게 설계되어 있지만 시장에서 거래되기 때문에 거래하는 사람이 없거나 비정상적 가격 제시로 ETF의 가격을 올리려는 현상과 같이 여러가지 문제가 생길 수 있습니다.", className: "small-text"},
                { text: "" },
                { text: "이러한 문제를 해결하기 위해 우리나라는 ETF를 도입하면서 투자자가 원활하게 ETF를 사고 팔 수 있도록 일정수준의 유동성을 공급하는 LP제도를 도입했습니다.", className: "small-text"},
                { text: "LP는 ETF투자자들이 ETF를 정상적인 가격 (실시간의 ETF순자산가치, iNAV)대에서 거래를 할 수 있게 중간에서 ETF를 사고 팔되, ETF의 순자산 가치에 가깝게 호가를 불러 가격괴리를 방지하는 중간자 역할을 한다고 볼 수 있습니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { image: content4, height: "300px" },
            ]
        }
    },
    5: {
        image: wordImg5,
        content: {
            heading: "ETF의 세금",
            paragraphs: [
                { text: "투자 시 발생하는 수익에 대해 납부해야 하는 세금으로 크게 매매차익과 분배금에 대한 세금으로 나누어져요. ETF의 종류와 투자 방식에 따라 과세 방식이 달라집니다.", className: "small-text"},
                { text: "" },   
                { text: "" },
                { text: "매매차익에 대한 세금", className: "large-text"},
                { text: "" },
                { text: "매매차익에 대한 세금은 국내주식으로 구성된 ETF의 경우 비과세이며, 국내주식형이 아닌 그외 ETF의 경우 매매차익에 대해 배당소득으로 과세가 됩니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { image: content5, height: "300px" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "분배금에 대한 세금", className: "large-text"},
                { text: "" },
                { text: "ETF 분배금은 주식의 배당금과 같습니다. ETF에 편입되어 있는 주식에서 발생한 배당금은 ETF에 입금이 되고, 이렇게 쌓인 고정적 수익을 ETF 투자자에게 분배하는 것을 분배금이라고 합니다.", className: "small-text"},
                { text: "" },
                { text: "이때는 매매차익에 대한 과세방법과 마찬가지로 ETF로부터 받는 분배금과 ETF보유기간 동안의 분배금관련 과표기준가격 증분 중에서 작은 금액에 대해서 배당소득세를 내야 합니다. 다만, 보유기간 동안 매매차익에 대해 비과세되는 국내 주식형 ETF는 분배시점의 투자자에게 분배금 전액에 대한 배당소득세가 부과되는 반면, 나머지 ETF는 투자자가 보유했던 기간을 고려하여 분배금에 대한 배당소득세를 부과되는 차이점이 있습니다.", className: "small-text"},
            ]
        }
    },
    6: {
        image: wordImg6,
        content: {
            heading: "ETF도 상장폐지가 될까?",
            paragraphs: [
                { text: "ETF도 주식과 마찬가지로 '상장폐지'될 가능성이 있습니다.", className: "small-text"},
                { text: "ETF는 일반 주식처럼 거래소에 상장되어 거래하기 때문에 폐지하게 된다면 ETF도 해지하게 되며, 더 이상 투자가 불가능합니다.", className: "small-text"},
                { text: "" },
                { text: "ETF의 상장폐지는 해당 ETF가 투자하고 있는 기초 자산의 거래와는 무관하기 때문에 ETF의 순자산가치 (NAV)에는 영향을 미치지 않습니다.", className: "small-text"},
                { text: "" },
                { text: "ETF 상장폐지가 확정되면, 운용사와 거래소는 ETF의 상장폐지 사유와 예정일을 홈페이지 또는 공시를 통해 안내합니다.", className: "small-text"},
                { text: "투자자들은 상장폐지 전까지 ETF를 거래소에서 자유롭게 매도할 수 있어요. 상장폐지일까지 매도하지 않은 투자자들은 ETF 운용사가 잔여 기초자산을 처분하여 현금으로 정산해줍니다.", className: "small-text"},
            ]
        }
    },
    7: {
        image: wordImg7,
        content: {
            heading: "H(Hedge) 란?",
            paragraphs: [
                { text: "H는 환율을 차단하다는 의미로 환율 변동 위험(환율 리스크)을 줄이기 위한 조치를 취한 ETF를 의미합니다. 이 ETF는 투자 국가의 통화와 기준 통화(보통 투자자의 모국 통화) 간의 환율 변동 영향을 최소화합니다.", className: "small-text"},
                { text: "" },
                { text: "국내 ETF에는 H나 UH가 붙지 않고 해외 ETF에만 사용합니다. 국내 ETF는 원화로 거래가 진행되어서 환율을 신경쓸 필요가 없지만, 해외 ETF는 원화를 달러로 환전해서 달러로 매수를 해야하기 때문에 환율 차이가 발생합니다. H가 붙은 ETF는 환율 변동의 영향을 받지 않고 투자할 수 있는 상품입니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "UH(UnHedge) 란?", className: "large-text"},
                { text: "UH는 H와는 반대로 환율 변동에 노출되어 있어 환율 변동이 수익률에 영향을 미칩니다. 투자 대상의 가치 변동 외에도 환율이 상승할 경우 수익률이 따라서 상승하고, 환율이 하락할 경우 수익률도 따라서 하락할 수 있습니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "둘 중 어느 상품에 투자할까?", className: "large-text"},
                { text: "" },
                { image: content7, height: "500px" },
            ]
        }
    },
    8: {
        image: wordImg8,
        content: {
            heading: "현물 ETF란 무엇일까?",
            paragraphs: [
                { text: "현물 ETF는 실제 자산을 직접 보유하고, 그 자산의 가치에 따라 가격이 변동하는 상장지수펀드(ETF)입니다. ETF가 추적하는 기초자산(예: 주식, 금, 원유 등)을 직접 소유하고 있어 기초자산의 가격 움직임을 그대로 반영합니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "현물 ETF와 선물 ETF", className: "large-text"},
                { text: "" },
                { text: "선물 거래는 현재의 시점에서 매매가격과 수량을 약속만 해두고 거래 시점에 도달했을 때는 해당 물건(기초자산)의 시장가격과 상관없이 약속한 가격으로 거래합니다. 쉽게 말해 미래에 정해진 가격으로 매수 또는 매도하겠다고 약속하는 거래인데요, 예를 들어 내년 1월 금(물건)을 얼마에 구매하겠다고 약속하고 계약서를 받는 거래입니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { image: content8, height: "300px" },
                { text: "" },
                { text: "" },
                { text: "현물 거래는 거래 시점에 시장의 가치에 따라 즉시 거래가 되지만, 선물 거래는 즉시 거래가 이루어지지 않고 미래의 특정 시점에 거래하기 때문에 이익을 볼 수도 있고 손해를 볼 수도 있습니다.", className: "small-text"},
                { text: "" },
                { text: "현물거래는 거래 즉시 물건을 얻게 되므로 물건을 보관하는데 비용이 들게 되지만, 선물거래는 물건을 즉시 얻는 것이 아니므로 보관하는데 비용이 들지 않습니다. 특히, 금과 같이 보관비용이 드는 원자재에 투자를 하게 될 경우에 선물로 거래하는 것이 비교적 용이합니다.", className: "small-text"},
            ]
        }
    },
    9: {
        image: wordImg9,
        content: {
            heading: "합성 ETF란 무엇일까?",
            paragraphs: [
                { text: "합성 ETF는 주식처럼 거래되는 펀드로, 특정 지수의 수익률을 따라가는 것이 목표입니다.", className: "small-text"},
                { text: "ETF는 그 방법에 따라 실물복제(Physical Replication)와 합성복제(Synthetic Replication)로 나뉘는데, 여기서 합성복제 방식을 사용하는 ETF를 합성 ETF라고 합니다.", className: "small-text"},
                { text: "" },
                { image: content9, height: "200px" },
                { text: "" },
                { text: "" },
                { text: "합성 ETF의 장점", className: "large-text"},
                { text: "" },
                { text: "거래상대방이 기초지수의 수익률을 그대로 제공하므로 실제 지수를 따라가는 정확도가 높아 추적오차 위험이 감소한다는 장점이 있습니다. 또한 해외자산, 원자재 등 실물 복제가 어려운 자산도 합성 ETF 방식으로 쉽게 접근 가능하므로 투자 가능성이 확대됩니다.", className: "small-text"}
            ]
        }
    },
    10: {
        image: wordImg10,
        content: {
            heading: "ETF 가격은 어떻게 지수와 똑같이 형성이 되는 것일까?",
            paragraphs: [
                { text: "레버리지 ETF는 기초지수의 일일 수익률을 2배 또는 그 이상으로 추적하도록 설계된 상장지수펀드(ETF)입니다. 투자자들은 레버리지 ETF를 통해 기초지수의 상승 또는 하락에 대해 더 큰 수익과 손실을 얻을 수 있습니다.", className: "small-text"},
                { text: "인버스 ETF는 기초지수의 움직임과 반대로 수익률을 내도록 설계된 상장지수펀드(ETF)입니다. 기초지수가 하락하면 인버스 ETF는 수익을 내고, 기초지수가 상승하면 손실을 보게 되는 구조입니다.", className: "small-text"},
                { text: "" },
                { text: "" },
                { text: "매일 조정되는 레버리지 구조", className: "large-text"},
                { text: "" },
                { text: "레버리지 ETF는 하루 단위로 2배 수익률을 유지하기 위해 매일 투자 비중을 조정합니다. 예를 들어, 기초지수가 하루 동안 1% 상승하면 레버리지 ETF는 2% 상승합니다. 하지만 ETF 가격이 오른 만큼 투자 비중을 다시 200%로 맞추기 위해 추가 매수가 필요합니다. 반대로, 기초지수가 하락하면 줄어든 자산에 맞춰 투자 비중을 낮추는 매도가 이루어져야 합니다.", className: "small-text"}
            ]
        }
    }
};

export default GuideData;
