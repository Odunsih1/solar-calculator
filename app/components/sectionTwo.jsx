import React from "react";
import Button from "./button";

const sectionTwo = ({ setSection }) => {
  return (
    <>
      {/* SECTION 2: DURATION OF AUTONOMY (DOA) */}
      <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
        <h2 className="text-3xl font-semibold">
          SECTION 2: DURATION OF AUTONOMY (DOA)
        </h2>
        <form className="text-[20px] m-[20px] text-left">
          <h4>
            How many day(s) would you like your solar energy to last when fully
            charged, without any sunlight?
          </h4>
          <label htmlFor="day">
            <input id="daysOfAutonomy" type="number" />
            day(s)
          </label>
        </form>
        <div className="flex justify-between">
          <Button
            className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
            onClick={() => renderStep()}
            name={"Cancel"}
          />
          <Button
            className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
            onClick={() => setSection(3)}
            name={"Next"}
          />
        </div>
      </section>
    </>
  );
};

export default sectionTwo;
