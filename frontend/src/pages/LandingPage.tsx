import { useEffect, useState } from "react";
import { getData, getSingleData } from "../axiosSettings/axiosFunctions/getData";
import { Header } from "../components/HeaderComponent/Header";
import bitbns from '../assets/landing/bitbns.png'
import coin from '../assets/landing/coindcx.png'
import colo from '../assets/landing/colodax.png'
import wazir from '../assets/landing/wazirx.png'
import zeb from '../assets/landing/zebpay.png'
import { Footer } from "../components/Footer/Footer";


export const LandingPage = () => {
    const [getCurrency, setGetCurrency] = useState<any>(null)
    const [selectedCurrency, setSelectedCurrency] = useState<any>("BTC");
    const [filters, setFilters] = useState<any>("btc")
    const [isLightMode, setIsLightMode] = useState(true);

    const handleCurrencySelect = (currency: any) => {
        setSelectedCurrency(currency);
        setFilters(currency.toLowerCase())
    };

    const toggleLightMode = () => {
        setIsLightMode(!isLightMode);
      };

    const fetchCurrency = async()=>{
        try{
            const data = await getSingleData(filters)
            return setGetCurrency(data.data.data)
        }catch(error){
            console.log(error)
        }
    }
    const tableHeads = [
        {img: wazir, data: "WazirX"},
        {img: bitbns, data: "Bitbns"},
        {img: colo, data: "Colodax"},
        {img: zeb, data: "Zebpay"},
        {img: coin, data: "CoinDCX"}
    ]


    useEffect(()=>{
        fetchCurrency()
    },[filters])

    return (
        <div className={`flex min-h-screen flex-col justify-center items-center`} style={{background: `${isLightMode ? "#191D28" : "white"}`}}>
        <div className="p-[2%]">
            <header className="w-[100%] mb-[20px]">
        <Header onLandingSelect={handleCurrencySelect} isLightMode={isLightMode} toggleLightMode={toggleLightMode} />
        </header>
       <section className="flex justify-center items-center w-[100%]">
       <table className="w-[100%] flex flex-col justify-between items-center h-[100%]">
        <thead className="w-[100%]">
          <tr className="w-[100%] text-[#818389] font-Oswald flex p-[1%] justify-between items-center" style={{fontSize: `${isLightMode ? "24px" : "16px"}`}}>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy/Sell Price</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
          </thead>
          <tbody className="w-[100%]">
            {tableHeads.map((heads, index)=>(
            <tr key={index} className="flex font-Oswald font-Oswald text-[24px] justify-between mb-[1%] p-[1%] rounded-[10px] items-center w-[100%]" style={{backgroundColor: `${isLightMode ? "#2E3241" : "#F2F3F4"}`, color: `${isLightMode ? "white" : "#191D28"}`, fontSize: `${isLightMode ? "24px" : "16px"}`}}>
                                <td>{index + 1}</td>
                                <td className="flex w-[8%] justify-between">{<img src={heads.img} className="rounded-[50%]" width="25%" alt="coin logo"/>} {heads?.data}</td>
                                <td>₹ {getCurrency?.platform_last_traded}</td>
                                <td>₹ {getCurrency?.platform_buy_price} / ₹ {getCurrency?.platform_sell_price}</td>
                                <td className="w-[10%] flex justify-center">{getCurrency?.platform_volume}</td>
                                <td>{getCurrency?.platform_base_unit}</td>
                            </tr>
            ))}
          </tbody>
        </table>
       </section>
       </div>
       <section className="font-Oswald text-[12px] mb-[60px] text-[#818389] w-[100%]">
        <div className="w-[100%] mb-[1%] bg-[#818389] h-[1px]"></div>
        <div className="px-[1%] flex justify-between">
            <div className="flex justify-between w-[11%]">
                <p>Copyright © 2019</p>
                <p>HodlInfo.com</p>
            </div>
            <div>
                <p>Support</p>
            </div>
        </div>
       </section>
       <Footer />
        </div>
    );
  };