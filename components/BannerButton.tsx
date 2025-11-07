import { Any } from "next-sanity";
import { AiOutlineRight } from "react-icons/ai";

interface BannerButtonProps {
    buttonText: Any,
    containerClasses: string,
    buttonClasses: string,
}

const BannerButton: React.FC<BannerButtonProps> = ({buttonText, containerClasses = "", buttonClasses=""}) => {
  return (
    <button type="button" className={`${containerClasses} min-h-[24px]`}>
        <div className={`${buttonClasses} flex gap-1 items-center py-[10px] px-4 cursor-pointer pr-3 pl-5 md:py-[10px] md:pr-6 md:pl-8 border-2  hover:translate-y-[-10px] hover:translate-x-[10px] transition-all duration-300 ease-in-out`}>
            {buttonText} <AiOutlineRight />
        </div>
    </button>
  )
}

export default BannerButton