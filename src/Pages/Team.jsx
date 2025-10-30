import React from 'react'

const Team = () => {
  return (
    <div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 md:mt-[30px] gap-6">
        <div className="max-w-full md:max-w-[500px]">
          <p className="text-[#434242] text-base">
            From residential installations to commercial systems, Korsmart delivers tailored solar services designed to maximize energy efficiency and long-term saving.
          </p>
        </div>

        <div>
          <button className="bg-[#1CD228] px-6 md:px-[30px] text-white py-3 md:py-[15px] rounded whitespace-nowrap">
            <div className="flex items-center gap-3">
              <p>Contact Us</p>
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>





















    </div>
  )
}

export default Team