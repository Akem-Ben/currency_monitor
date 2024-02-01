import { useEffect, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
// import { getData } from "../../axiosSettings/axiosFunctions/getData";


export const InrDropdown = ()=>{
    const [dropDownData, setDropDownData] = useState<any>(["INR"])
    const [selectCurrency, setSelectCurrency] = useState<any>(null)
    const [isDropdownClicked, setIsDropdownClicked] = useState(false)

    const customOptionTemplate = (option: any) => {
        // Customize the option label as needed with Tailwind CSS classes
        return (
          <div className="p-2 w-[200px] rounded-[10px] pl-[10%] hover:bg-gray-200 bg-white">
            <span className="text-[#191D28] font-s">{option}</span>
          </div>
        );
      };

      const handleClick = ()=>{
        setIsDropdownClicked(true);
        }
        const handleBlur = ()=>{
          setIsDropdownClicked(false);
          }

    return(
        <div className={`w-[30%] h-[100%] rounded-[10px] text-white flex justify-center items-center pb-[3%] pt-[3%] bg-[#2E3241] ${isDropdownClicked ? 'border border-gray-700 border-2 bg-gray-500' : ''}`}>
            <Dropdown
            className="text-white self-stretch"
            value="INR"
            options={dropDownData}
            defaultValue="INR"
            itemTemplate={customOptionTemplate}
            placeholder="INR"
            onClick={handleClick}
            onBlur={handleBlur}
            />
        </div>
    )
}