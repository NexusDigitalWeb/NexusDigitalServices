import React from "react";

const SendFormButton = ({ value }: { value: string }): React.ReactElement => {
  return (
    <div>
      <button type="submit" className="rounded-[14px] h-[55px] mt-5 xl:h-[75px] flex items-center justify-center bg-[#B9FF66] px-[35px] py-[20px] w-full xl:w-[200px] md:text-[20px] outline-none xl:hover:bg-[#b6f667] transition-all ease-in duration-150">
        {value}
      </button>
    </div>
  );
};

export default SendFormButton;
