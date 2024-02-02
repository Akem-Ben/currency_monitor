import { useEffect, useState } from "react";
import { Dropdowns } from "../Dropdown/Dropdown";
import { InrDropdown } from "../InrDropDown/InrDropdown";
import { GrSend } from "react-icons/gr";
import pic from '../../assets/header/HODLINFO.png'
import { getData, getSingleData } from "../../axiosSettings/axiosFunctions/getData";
import Counter from "../CountDown/Countdown";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

export const Header = ({onLandingSelect, isLightMode, toggleLightMode }:any) => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<any>("BTC");
  const [currencyAmount, setCurrencyAmount] = useState("")
  const [toggle, setToggle] = useState(false)
  const [isLightingMode, setIsLightingMode] = useState(false);


  const handleCurrencySelect = (currency: any) => {
    onLandingSelect(currency)
    setSelectedCurrency(currency);
  };

  const handleClick = () => {
    setIsDropdownClicked(true);
  };
  const handleBlur = () => {
    setIsDropdownClicked(false);
  };

  const fetcInfo = async()=>{
    try{
        const data = await getSingleData(selectedCurrency.toLowerCase())
        return setCurrencyAmount(data.data.data.platform_last_traded)
    }catch(error){
        console.log(error)
    }
}

const handleToggle = ()=>{
  setToggle(!toggle)
  toggleLightMode()
  setIsLightingMode(!isLightingMode)
}

useEffect(()=>{
    fetcInfo()
},[selectedCurrency])


  return (
    <div className={`flex flex-col justify-center items-center text-[#818389] ${isLightMode ? 'light-mode' : ''}`}>
      <section className="w-[100%] flex items-center justify-center">
        <div className="flex w-[100%] justify-between">
            <div className="w-[17%] h-[25%] mt-[1%]"><img src={pic} alt="logo" className="w-[100%] h-[100%]" /></div>
        <div className="flex h-[30%] justify-between ml-[10%] p-[1%] w-[25%]">
          <InrDropdown />
          <Dropdowns onCurrencySelect={handleCurrencySelect} onLandingSelect={onLandingSelect} />
          <button
            onClick={handleClick}
            onBlur={handleBlur}
            className={`w-[35%] font-Oswald h-[100%] rounded-[10px] bg-[#2E3241] text-white flex justify-center items-center pb-[3%] pt-[3%] ${
              isDropdownClicked
                ? "border border-gray-700 border-2 bg-gray-500"
                : ""
            }`}
          >
            BUY {selectedCurrency}
          </button>
        </div>
        <div className="w-[30%] flex items-center justify-between">
            <div className="w-[30%] flex justify-center"><Counter duration={60} /></div>
            <div className="w-[50%] h-[55%]">
            <button className="font-Oswald bg-[#6CCACB] justify-center items-center p-[2%] gap-[5%] w-[100%] text-white flex h-[100%] rounded-[10px]"><p className=" mt-[5px]"><GrSend /></p> <p>Connect Telegram</p></button>
            </div>
            <div className="h-[100%] flex ml-[1%] w-[30%] transition duration-1000 ease-in-out">
            <button className={`h-[100%] flex justify-center items-center w-[100%]`} onClick={handleToggle}>
              {toggle ? (<BsToggleOff className="w-[50%] h-[100%]"/>): (<BsToggleOn className="w-[50%] h-[100%]" />)}
            </button>
            </div>
        </div>
        </div>
      </section>
      <section className="w-[100%] flex flex-col justify-center items-center">
        <div className="font-Oswald text-[28px]">Best Price to Trade</div>
        <div className="w-[100%] flex items-center justify-around">
            <div className="flex font-Oswald flex-col justify-center items-center">
                <h1 className="text-[40px] text-[#5DC7C2]">0.1%</h1>
                <p className="text-[20px]">5 Mins</p>
            </div>
            <div className="flex font-Oswald flex-col justify-center items-center">
            <h1 className="text-[40px] text-[#5DC7C2]">0.96%</h1>
                <p className="text-[20px]">1 Hour</p>
            </div>
            <div className="flex font-Oswald flex-col justify-center items-center">
                <h1 className="text-[80px]" style={{color: `${isLightingMode ? "white" : "#191D28"}`}}>₹ {currencyAmount}</h1>
                <p className="text-[16px]">Average {selectedCurrency}/INR net price including commission</p>
            </div>
            <div className="flex font-Oswald flex-col justify-center items-center">
            <h1 className="text-[40px] text-[#5DC7C2]">2.73%</h1>
                <p className="text-[20px]">1 Day</p>
            </div>
            <div className="flex font-Oswald flex-col justify-center items-center">
            <h1 className="text-[40px] text-[#5DC7C2]">7.51%</h1>
                <p className="text-[20px]">7 Days</p>
            </div>
            </div>
      </section>
    </div>
  );
};
