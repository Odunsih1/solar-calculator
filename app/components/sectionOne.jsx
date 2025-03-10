import React from "react";
import Button from "./button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";

const sectionOne = ({
  formData,
  addAnotherLighting,
  next,
  handleInputChange,
  setSection,
  setFormData,
  addAnotherAppliance,
}) => {
  const [step, setStep] = useState(1);

  // Add animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };

  const renderStep = () => {
    return (
      <AnimatePresence mode="wait" key={step}>
        <motion.div
          key={step}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          {(() => {
            switch (step) {
              case 1:
                return (
                  <div className="">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#3182CE] text-3xl font-semibold text-left">
                        Lighting
                      </h3>
                      <Button
                        className="cursor-pointer text-2xl rounded-full p-2 text-[#3182CE] hover:bg-[#3182CE] hover:text-white transition-colors"
                        onClick={addAnotherLighting}
                        icon={<AiOutlinePlusCircle size={24} />}
                        ariaLabel="Add another lighting"
                      />
                    </div>
                    {formData.lights.map((light, index) => (
                      <form
                        key={light.id}
                        className="text-[20px] m-[20px] text-left"
                      >
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
                          How many bulbs do you plan to power using the above
                          rating?
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
                        onClick={() => setStep(2)}
                        name={"Next"}
                      />
                    </div>
                  </div>
                );
              case 2:
                return (
                  <ApplianceSection
                    title="Fan"
                    formData={formData}
                    setFormData={setFormData}
                    onAddAnother={() => addAnotherAppliance("fans")}
                  />
                );
              case 3:
                return (
                  <ApplianceSection
                    title="Air Conditioning"
                    formData={formData}
                    setFormData={setFormData}
                    onAddAnother={() => addAnotherAppliance("ACs")}
                  />
                );
              case 4:
                return (
                  <ApplianceSection
                    title="Refrigerator"
                    formData={formData}
                    setFormData={setFormData}
                    onAddAnother={() => addAnotherAppliance("refrigerators")}
                  />
                );
              case 5:
                return (
                  <ApplianceSection
                    title="Heater"
                    formData={formData}
                    setFormData={setFormData}
                    onAddAnother={() => addAnotherAppliance("heaters")}
                  />
                );
              case 6:
                return (
                  <ApplianceSection
                    title="Other Appliances"
                    formData={formData}
                    setFormData={setFormData}
                    onAddAnother={() => addAnotherAppliance("others")}
                  />
                );
              default:
                return null;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 overflow-hidden">
      <h2 className="text-3xl font-semibold">
        SECTION 1: APPLIANCES & LIGHTING
      </h2>
      {renderStep()}
      {step !== 1 && (
        <div className="flex justify-between mt-4">
          <Button
            className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE]"
            onClick={() => setStep(step - 1)}
            name={"Back"}
          />
          <Button
            className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff]"
            onClick={() => (step === 6 ? next() : setStep(step + 1))}
            name={step === 6 ? "Finish" : "Next"}
          />
        </div>
      )}
    </section>
  );
};

// Template for each appliance section
const ApplianceSection = ({ title, formData, setFormData, onAddAnother }) => {
  // Create a mapping for the array names
  const arrayNameMap = {
    Fan: "fans",
    "Air Conditioning": "ACs",
    Refrigerator: "refrigerators",
    Heater: "heaters",
    "Other Appliances": "others",
  };

  const arrayName = arrayNameMap[title] || title.toLowerCase() + "s";

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h3 className="text-[#3182CE] text-3xl font-semibold text-left">
          {title}
        </h3>
        <Button
          className="cursor-pointer text-2xl rounded-full p-2 text-[#3182CE] hover:bg-[#3182CE] hover:text-white transition-colors"
          onClick={onAddAnother}
          icon={<AiOutlinePlusCircle size={24} />}
          ariaLabel={`Add another ${title}`}
        />
      </div>
      {formData[arrayName]?.map((item, index) => (
        <form key={item.id} className="text-[20px] m-[20px] text-left">
          <h4>What is the wattage rating?</h4>
          <label>
            <input
              name="wattageRating"
              value={item.wattageRating}
              onChange={(e) => {
                const updatedItems = [...formData[arrayName]];
                updatedItems[index].wattageRating =
                  parseFloat(e.target.value) || 0;
                setFormData((prev) => ({
                  ...prev,
                  [arrayName]: updatedItems,
                }));
              }}
              type="number"
              min="0"
            />
            W
          </label>

          <h4>How many units do you plan to power?</h4>
          <label>
            <input
              name="numberOfUnits"
              value={item.numberOfUnits}
              onChange={(e) => {
                const updatedItems = [...formData[arrayName]];
                updatedItems[index].numberOfUnits =
                  parseFloat(e.target.value) || 0;
                setFormData((prev) => ({
                  ...prev,
                  [arrayName]: updatedItems,
                }));
              }}
              type="number"
              min="0"
            />
          </label>

          <h4>Hours of usage per day?</h4>
          <label>
            <input
              name="hoursUsage"
              value={item.hoursUsage}
              onChange={(e) => {
                const updatedItems = [...formData[arrayName]];
                updatedItems[index].hoursUsage =
                  parseFloat(e.target.value) || 0;
                setFormData((prev) => ({
                  ...prev,
                  [arrayName]: updatedItems,
                }));
              }}
              type="number"
              min="0"
            />
            hr(s)
          </label>
          <hr className="mt-[20px] border-2 border-[#3182CE]" />
        </form>
      ))}
    </div>
  );
};

export default sectionOne;
