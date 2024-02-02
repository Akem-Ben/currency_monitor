import { useEffect, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { getData } from "../../axiosSettings/axiosFunctions/getData";


export const Dropdowns = ({ onCurrencySelect, onLandingSelect }: any)=>{
    const [dropDownData, setDropDownData] = useState([])
    const [selectCurrency, setSelectCurrency] = useState<any>(null)
    const [isDropdownClicked, setIsDropdownClicked] = useState(false)

    const fetchData = async()=>{
        try{
            const data = await getData()
            const dropDownMenu = data.data.database_data.map((info:any)=>info.platform_base_unit.toUpperCase())
            return setDropDownData(dropDownMenu)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleCurrencySelect = (e: DropdownChangeEvent) => {
        const selectedCurrency = e.value
        setSelectCurrency(selectedCurrency)
        onCurrencySelect(selectedCurrency)
        onLandingSelect(selectedCurrency)
    }

    const customOptionTemplate = (option: any) => {
        // Customize the option label as needed with Tailwind CSS classes
        return (
          <div className="p-2 font-Oswald w-[150px] pl-[10%] hover:bg-gray-200 bg-white">
            <span className="font-Oswald text-[#191D28]">{option}</span>
          </div>
        );
      };

      const handleClick = (e: React.MouseEvent):void=>{
        setIsDropdownClicked(true);
      }
      const handleBlur = ()=>{
        setIsDropdownClicked(false);
        }


    return(
        <div className={`w-[30%] font-Oswald h-[100%] rounded-[10px] text-white flex justify-center items-center pb-[3%] pt-[3%] bg-[#2E3241] ${isDropdownClicked ? 'border border-gray-700 border-2 bg-gray-500' : ''}`}>
        <Dropdown
            className="font-Oswald text-white self-stretch"
            value={selectCurrency}
            options={dropDownData}
            defaultValue={"BTC"}
            onChange={handleCurrencySelect}
            itemTemplate={customOptionTemplate}
            placeholder="BTC"
            onClick={handleClick}
            onBlur={handleBlur}
            />
        </div>
    )
}