import { Link, useNavigate } from "react-router-dom";
import mobilebar from "../../assets/1stimage/mobilebar.png";

interface Product {
  name: string;
  type: string;
  id: string;
  // Add other properties as needed
}
interface TmtCardProps {
  searchResult: Product; // Update type to SearchResult
}

const TmtCard = (props: TmtCardProps) => {
  // const { name, price } = searchResult; // Destructure name and price
  // console.log(props.searchResult);
  const navigate = useNavigate();
  const name=props.searchResult?.name
  return (
    // <div onClick={() =>navigate(`/product/${props.searchResult.id}` , {state:{ name:name}})} >
      <div>
      <div className="w-[600px] hover:bg-[#F1F1F1] items-center    flex flex-row ">
        {/* <div className="w-[64px] h-[64px] border border-slate-100 flex items-center pl-[8px]">
          <img src={mobilebar} alt="pic" className="w-[50px] h-[50px] " />
        </div> */}

        <div className="flex h-[32px]   items-center flex-col gap-[6px] pl-[18px]">
          <span className="font-inter px-[8px] font-normal text-xs leading-5">
            {props.searchResult?.name}
          </span>
          {/* <span className="font-[400] text-[14px] leading-[20px]"> */}
          {/* {props.searchResult?.mrpPrice} */}
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default TmtCard;
