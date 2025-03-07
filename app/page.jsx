"use client";
import React, { useState } from "react";
import Button from "./components/button";
import Nav from "./components/nav";

const page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    wattageRating: 0,
    numberOfBulbs: 0,
    fanWattageRating: 0,
    numberOfFan: 0,
    fanHoursUsage: 0,
    numberOfAC: 0,
    numberOfRefrigerator: 0,
    numberOfHeater: 0,
    numberOfOther: 0,
    hoursUsage: 0,
    otherName: 0,
    daysOfAutonomy: 0,
  });

  const [energyConsumption, setEnergyConsumption] = useState({
    bulb: 0,
    fan: 0,
    AC: 0,
    refrigerator: 0,
    heater: 0,
    others: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value) || 0;

    if (numValue >= 0) {
      setFormData((prev) => ({ ...prev, [name]: numValue }));
    }

    // Calculate all energy consumption in one update
    setEnergyConsumption((prev) => ({
      ...prev,
      bulb:
        formData.wattageRating * formData.numberOfBulbs * formData.hoursUsage,
      fan:
        formData.fanWattageRating *
        formData.numberOfFan *
        formData.fanHoursUsage,
    }));
  };

  const next = () => {
    localStorage.setItem(
      "EC bulb",
      JSON.stringify(parseInt(energyConsumption.bulb))
    );
    localStorage.setItem(
      "EC fan",
      JSON.stringify(parseInt(energyConsumption.fan))
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Lighting
            </h3>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your bulbs/lamps?</h4>
              <label className="">
                <input
                  name="wattageRating"
                  id="wattageRating"
                  value={formData.wattageRating}
                  onChange={handleInputChange}
                  className="border-b-[2px] border-[#aaa] active:ring-0 "
                  type="number"
                />
                W
              </label>
              <h4>
                How many bulbs/lamps do you plan to power using the above
                rating?
              </h4>
              <label>
                <input
                  name="numberOfBulbs"
                  value={formData.numberOfBulbs}
                  onChange={handleInputChange}
                  id="numberOfBulb"
                  type="number"
                />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input
                  name="hoursUsage"
                  value={formData.hoursUsage}
                  onChange={handleInputChange}
                  id="hoursUsage"
                  type="number"
                />
                hr(s)
              </label>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                  name={"Cancel"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setStep(2)}
                  name={"next"}
                />
              </div>
            </form>
            <Button
              className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
              name={"Add another lighting"}
            />
          </div>
        );
        {
          /* FAN */
        }
      case 2:
        return (
          <div>
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Fan
            </h3>
            <div className="text-[20px] m-[20px] text-left">
              <h3>Fan Availability</h3>
              <h3>Do you have a fan?</h3>
              <label className="m-3" htmlFor="yes">
                <input type="radio" />
                Yes
              </label>
              <label htmlFor="No">
                <input type="radio" />
                No
              </label>
            </div>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your bulbs/lamps?</h4>
              <label>
                <input
                  name="fanWattageRating"
                  value={formData.fanWattageRating}
                  onChange={handleInputChange}
                  id="fanWattageRating"
                  type="number"
                />
                W
              </label>
              <h4>How many fan do you plan to power using the above rating?</h4>
              <label>
                <input
                  name="numberOfFan"
                  value={formData.numberOfFan}
                  onChange={handleInputChange}
                  id="numberOfFan"
                  type="number"
                />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input
                  name="fanHoursUsage"
                  value={formData.fanHoursUsage}
                  onChange={handleInputChange}
                  id="fanHoursUsage"
                  type="number"
                />
                hr(s)
              </label>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                  onClick={() => setStep(1)}
                  name={"Cancel"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setStep(3)}
                  name={"next"}
                />
              </div>
            </form>
          </div>
        );
        {
          /* AC */
        }
      case 3:
        return (
          <div>
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Air Conditioner (AC)
            </h3>
            <div className="text-[20px] m-[20px] text-left">
              <h3>AC Availability</h3>
              <h3>Do you have an AC?</h3>
              <label htmlFor="yes">
                <input type="radio" />
                Yes
              </label>
              <label htmlFor="No">
                <input type="radio" />
                No
              </label>
            </div>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your AC?</h4>
              <label>
                <input id="wattageRating" type="number" />W
              </label>
              <h4>How many AC units do you plan to power?</h4>
              <label>
                <input id="numberOfAC" type="number" />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input id="hoursUsage" type="number" />
                hr(s)
              </label>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                  onClick={() => setStep(2)}
                  name={"Cancel"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setStep(4)}
                  name={"next"}
                />
              </div>
            </form>
          </div>
        );
        {
          /* Refrigerator */
        }
      case 4:
        return (
          <div>
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Refrigerator
            </h3>
            <div className="text-[20px] m-[20px] text-left">
              <h3>Refrigerator Availability</h3>
              <h3>Do you have a Refrigerator?</h3>
              <label htmlFor="yes">
                <input type="radio" />
                Yes
              </label>
              <label htmlFor="No">
                <input type="radio" />
                No
              </label>
            </div>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your Refrigerator?</h4>
              <label>
                <input id="wattageRating" type="number" />W
              </label>
              <h4>How many Refrigerator do you plan to power?</h4>
              <label>
                <input id="numberOfRefrigerator" type="number" />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input id="hoursUsage" type="number" />
                hr(s)
              </label>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                  onClick={() => setStep(3)}
                  name={"Cancel"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setStep(5)}
                  name={"next"}
                />
              </div>
            </form>
          </div>
        );
        {
          /* Heater */
        }
      case 5:
        return (
          <div>
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Heater
            </h3>
            <div className="text-[20px] m-[20px] text-left">
              <h3>Heater Availability</h3>
              <label>Do you have a Heater?</label>
              <label htmlFor="yes">
                <input type="radio" />
                Yes
              </label>
              <label htmlFor="No">
                <input type="radio" />
                No
              </label>
            </div>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your Heater?</h4>
              <label>
                <input id="wattageRating" type="number" />W
              </label>
              <h4>How many Heater do you plan to power?</h4>
              <label>
                <input id="numberOfHeater" type="number" />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input id="hoursUsage" type="number" />
                hr(s)
              </label>
            </form>
            <div className="flex justify-between">
              <Button
                className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                onClick={() => setStep(4)}
                name={"Back"}
              />
              <Button
                className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                onClick={() => setStep(6)}
                name={"next"}
              />
            </div>
          </div>
        );
        {
          /* OTHERS */
        }
      case 6:
        return (
          <div>
            <h2 className="text-[#3182CE] text-3xl font-semibold text-left ">
              Other Appliances
            </h2>
            <p className="text-[20px] m-[20px] text-left">
              For any other appliance not listed above, please provide the
              following details:
            </p>
            <form value={formData} className="text-[20px] m-[20px] text-left">
              <label htmlFor="name">Name:</label>
              <input id="otherName" type="text" />
              <label htmlFor="watt">Wattage Rating:</label>
              <input id="wattageRating" type="number" />
              <label htmlFor="quatity">Quantity:</label>
              <input id="numberOfOther" type="number" />
              <label htmlFor="duration">Usage Duration:</label>
              <input id="hoursUsage" type="number" />
            </form>
          </div>
        );
    }
  };

  // function watt() {
  //   setFormData({ wattageRating: 2 });
  // }
  return (
    <>
      <Nav />
      <main>
        {/* SECTION 1: APPLIANCES & LIGHTING */}
        <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
          <h2 className="text-3xl font-semibold">
            SECTION 1: APPLIANCES & LIGHTING
          </h2>
          {renderStep()}
        </section>
        {/* SECTION 2: DURATION OF AUTONOMY (DOA) */}
        <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
          <h2 className="text-3xl font-semibold">
            SECTION 2: DURATION OF AUTONOMY (DOA)
          </h2>
          <form className="text-[20px] m-[20px] text-left">
            <h4>
              How many day(s) would you like your solar energy to last when
              fully charged, without any sunlight?
            </h4>
            <label htmlFor="day">
              <input id="daysOfAutonomy" type="number" />
              day(s)
            </label>
          </form>
        </section>
        {/* SECTION 3: INSTALLATION LOCATIONS */}
        <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
          <form className="text-[20px] m-[20px] text-left">
            <h4>
              Please indicate the orientation(s) or locations where your solar
              panels will be installed:
            </h4>
            <label htmlFor="north">
              <input id="north" type="radio" />
              North
            </label>
            <br />
            <label htmlFor="south">
              <input id="south" type="radio" />
              South
            </label>
            <br />
            <label htmlFor="east">
              <input id="east" type="radio" />
              East
            </label>
            <br />
            <label htmlFor="west">
              <input id="west" type="radio" />
              West
            </label>
          </form>
        </section>
      </main>
    </>
  );
};

export default page;
