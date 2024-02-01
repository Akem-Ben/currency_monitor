import { useEffect, useState } from "react";
import { Dropdowns } from "../Dropdown/Dropdown";
import { InrDropdown } from "../InrDropDown/InrDropdown";
import { GrSend } from "react-icons/gr";
import pic from '../../assets/header/HODLINFO.png'
import { getData } from "../../axiosSettings/axiosFunctions/getData";

export const Header = () => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<any>("BTC");

  const handleCurrencySelect = (currency: any) => {
    setSelectedCurrency(currency);
    // Do any additional processing if needed
  };

  const handleClick = () => {
    setIsDropdownClicked(true);
  };
  const handleBlur = () => {
    setIsDropdownClicked(false);
  };

  const fetcInfo = async()=>{
    try{
        const data = await getData()
        console.log(selectedCurrency)
        // const dropDownMenu = data.data.database_data.map((info:any)=>info.platform_base_unit.toUpperCase())
        // return setDropDownData(dropDownMenu)
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    fetcInfo()
},[])


  return (
    <div className="flex flex-col justify-center items-center text-[#818389]">
      <section className="w-[100%] flex items-center justify-center">
        <div className="flex w-[100%] justify-between">
            <div className="w-[17%] h-[25%] mt-[1%]"><img src={pic} alt="logo" className="w-[100%] h-[100%]" /></div>
        <div className="flex justify-between ml-[10%] p-[1%] w-[25%]">
          <InrDropdown />
          <Dropdowns onCurrencySelect={handleCurrencySelect} />
          <button
            onClick={handleClick}
            onBlur={handleBlur}
            className={`w-[35%] font-Oswald h-[100%] rounded-[10px] text-white flex justify-center items-center pb-[3%] pt-[3%] bg-[#2E3241] ${
              isDropdownClicked
                ? "border border-gray-700 border-2 bg-gray-500"
                : ""
            }`}
          >
            BUY {selectedCurrency}
          </button>
        </div>
        <div className=" flex items-center justify-around bg-red-500 w-[25%]">
            <p>counter</p>
            <button className="font-Oswald bg-[#6CCACB] justify-center items-center p-[2%] gap-[5%] w-[50%] text-white flex h-[55%] rounded-[10px]"><p className=" mt-[5px]"><GrSend /></p> <p>Connect Telegram</p></button>
            <p>switch</p>
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
                <h1 className="text-[80px] text-white">₹40,90,90</h1>
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
