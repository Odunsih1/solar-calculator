import React from "react";
import Button from "./button";
import { useState } from "react";

const sectionOne = ({
  formData,
  addAnotherLighting,
  next,
  handleInputChange,
  setSection,
}) => {
  const [step, setStep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          // SECTION 1
          <div className="">
            <h3 className="text-[#3182CE] text-3xl font-semibold text-left">
              Lighting
            </h3>
            {formData.lights.map((light, index) => (
              <form key={light.id} className="text-[20px] m-[20px] text-left">
                <h4>What is the wattage rating of your bulbs/lamps?</h4>
                <label className="">
                  <input
                    name="wattageRating"
                    value={light.wattageRating}
                    onChange={(e) => {
                      const updatedLights = [...formData.lights];
                      updatedLights[index].wattageRating =
                        parseFloat(e.target.value) || 0;
                      setFormData((prev) => ({
                        ...prev,
                        lights: updatedLights,
                      }));
                    }}
                    className="border-b-[2px] border-[#aaa] active:ring-0"
                    type="number"
                  />
                  W
                </label>
                <h4>
                  How many bulbs do you plan to power using the above rating?
                </h4>
                <label>
                  <input
                    name="numberOfBulbs"
                    value={light.numberOfBulbs}
                    onChange={(e) => {
                      const updatedLights = [...formData.lights];
                      updatedLights[index].numberOfBulbs =
                        parseFloat(e.target.value) || 0;
                      setFormData((prev) => ({
                        ...prev,
                        lights: updatedLights,
                      }));
                    }}
                    className="border-b-[2px] border-[#aaa] active:ring-0"
                    type="number"
                  />
                </label>

                <h4>For how many hours do you intend to use them?</h4>
                <label>
                  <input
                    name="hoursUsage"
                    value={light.hoursUsage}
                    onChange={(e) => {
                      const updatedLights = [...formData.lights];
                      updatedLights[index].hoursUsage =
                        parseFloat(e.target.value) || 0;
                      setFormData((prev) => ({
                        ...prev,
                        lights: updatedLights,
                      }));
                    }}
                    className="border-b-[2px] border-[#aaa] active:ring-0"
                    type="number"
                  />
                  hr(s)
                </label>
                <hr className="mt-[20px] border-2 border-[#3182CE]" />
              </form>
            ))}
            <div className="flex justify-between">
              <Button
                className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE]"
                name={"Cancel"}
              />
              <Button
                className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff]"
                onClick={() => {
                  next();
                  setStep(2);
                }}
                name={"Next"}
              />
            </div>
            <Button
              className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE]"
              onClick={addAnotherLighting}
              name={"Add another lighting"}
            />
          </div>
        );
        {
          /* FAN */
        }
      case 2:
        return (
          <div className="ani">
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
                  name={"Back"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setStep(3)}
                  name={"Next"}
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
          <div className="ani">
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
            <form className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your AC?</h4>
              <label>
                <input
                  name="ACWattageRating"
                  value={formData.ACWattageRating}
                  onChange={handleInputChange}
                  type="number"
                />
                W
              </label>
              <h4>How many AC units do you plan to power?</h4>
              <label>
                <input
                  name="numberOfAC"
                  value={formData.numberOfAC}
                  onChange={handleInputChange}
                  type="number"
                />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input
                  name="ACHoursUsage"
                  value={formData.ACHoursUsage}
                  onChange={handleInputChange}
                  type="number"
                />
                hr(s)
              </label>
            </form>
            <div className="flex justify-between">
              <Button
                className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                onClick={() => setStep(2)}
                name={"Back"}
              />
              <Button
                className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                onClick={() => setStep(4)}
                name={"Next"}
              />
            </div>
          </div>
        );
        {
          /* Refrigerator */
        }
      case 4:
        return (
          <div className="ani">
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
            <form className="text-[20px] m-[20px] text-left">
              <h4>What is the wattage rating of your Refrigerator?</h4>
              <label>
                <input
                  name="refrigeratorWattageRating"
                  value={formData.refrigeratorWattageRating}
                  onChange={handleInputChange}
                  type="number"
                />
                W
              </label>
              <h4>How many Refrigerator do you plan to power?</h4>
              <label>
                <input
                  name="numberOfRefrigerator"
                  value={formData.numberOfRefrigerator}
                  onChange={handleInputChange}
                  type="number"
                />
              </label>
              <h4>For how many hours do you intend to use them?</h4>
              <label>
                <input
                  name="refrigeratorHoursUsage"
                  value={formData.refrigeratorHoursUsage}
                  onChange={handleInputChange}
                  type="number"
                />
                hr(s)
              </label>
            </form>
            <div className="flex justify-between">
              <Button
                className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                onClick={() => setStep(3)}
                name={"Back"}
              />
              <Button
                className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                onClick={() => setStep(5)}
                name={"Next"}
              />
            </div>
          </div>
        );
        {
          /* Heater */
        }
      case 5:
        return (
          <div className="">
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
                name={"Next"}
              />
            </div>
          </div>
        );
        {
          /* OTHERS */
        }
      case 6:
        return (
          <div className="">
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
            <div className="flex justify-between">
              <Button
                className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                onClick={() => setStep(5)}
                name={"Back"}
              />
              <Button
                className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                onClick={() => {
                  alert(
                    "This is the end os section 1. Are you sure you want to move to the next section?"
                  );
                  setSection(2);
                }}
                name={"Next"}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
      <h2 className="text-3xl font-semibold">
        SECTION 1: APPLIANCES & LIGHTING
      </h2>
      {renderStep()}
    </section>
  );
};

export default sectionOne;
