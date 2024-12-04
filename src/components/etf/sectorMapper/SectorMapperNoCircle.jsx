import BatteryIcon from "../../../assets/images/sectors/noCircle/battery.png";
import ConsumerIcon from "../../../assets/images/sectors/noCircle/consumer.png";
import EnergyIcon from "../../../assets/images/sectors/noCircle/energy.png";
import EntertainmentIcon from "../../../assets/images/sectors/noCircle/entertainment.png";
import EsgIcon from "../../../assets/images/sectors/noCircle/esg.png";
import FinanceIcon from "../../../assets/images/sectors/noCircle/finance.png";
import GoldIcon from "../../../assets/images/sectors/noCircle/gold.png";
import HealthIcon from "../../../assets/images/sectors/noCircle/health.png";
import ItIcon from "../../../assets/images/sectors/noCircle/it.png";
import ReitsIcon from "../../../assets/images/sectors/noCircle/reits.png";
import SemiconductorIcon from "../../../assets/images/sectors/noCircle/semiconductor.png";
import ShipIcon from "../../../assets/images/sectors/noCircle/ship.png";
import Snp500Icon from "../../../assets/images/sectors/noCircle/snp500.png";
import SteelIcon from "../../../assets/images/sectors/noCircle/steel.png";
import TransportIcon from "../../../assets/images/sectors/noCircle/transport.png";
import DefaultIcon from "../../../assets/images/sectors/noCircle/default.png";

const SectorMapperNoCircle = {
  "2차전지": BatteryIcon,
  소비재: ConsumerIcon,
  "에너지/화학": EnergyIcon,
  엔터테인먼트: EntertainmentIcon,
  ESG: EsgIcon,
  금융: FinanceIcon,
  금: GoldIcon,
  "바이오/헬스": HealthIcon,
  IT: ItIcon,
  리츠: ReitsIcon,
  반도체: SemiconductorIcon,
  조선: ShipIcon,
  "S&P 500": Snp500Icon,
  철강: SteelIcon,
  운송: TransportIcon,
  default: DefaultIcon,
};

export default SectorMapperNoCircle;
