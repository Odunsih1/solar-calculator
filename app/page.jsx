"use client";
import React, { useState } from "react";
import Button from "./components/button";
import Nav from "./components/nav";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";

const page = () => {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    lights: [
      {
        wattageRating: 0,
        numberOfBulbs: 0,
        hoursUsage: 0,
        id: 1,
      },
    ],
    fans: [
      {
        wattageRating: 0,
        numberOfUnits: 0,
        hoursUsage: 0,
        id: 1,
      },
    ],
    ACs: [
      {
        wattageRating: 0,
        numberOfUnits: 0,
        hoursUsage: 0,
        id: 1,
      },
    ],
    refrigerators: [
      {
        wattageRating: 0,
        numberOfUnits: 0,
        hoursUsage: 0,
        id: 1,
      },
    ],
    heaters: [
      {
        wattageRating: 0,
        numberOfUnits: 0,
        hoursUsage: 0,
        id: 1,
      },
    ],
    others: [
      {
        wattageRating: 0,
        numberOfUnits: 0,
        hoursUsage: 0,
        name: "",
        id: 1,
      },
    ],
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

    setEnergyConsumption((prev) => ({
      ...prev,
      fan:
        formData.fanWattageRating *
        formData.numberOfFan *
        formData.fanHoursUsage,
      AC:
        formData.ACWattageRating * formData.numberOfAC * formData.ACHoursUsage,
      refrigerator:
        formData.refrigeratorWattageRating *
        formData.numberOfRefrigerator *
        formData.refrigeratorHoursUsage,
      heater:
        formData.heaterWattageRating *
        formData.numberOfHeater *
        formData.heaterHoursUsage,
      others:
        formData.otherWattageRating *
        formData.numberOfOther *
        formData.otherHoursUsage,
    }));
  };

  const addAnotherLighting = () => {
    setFormData((prev) => ({
      ...prev,
      lights: [
        ...prev.lights,
        {
          wattageRating: 0,
          numberOfBulbs: 0,
          hoursUsage: 0,
          id: prev.lights.length + 1,
        },
      ],
    }));
  };

  const addAnotherAppliance = (type) => {
    setFormData((prev) => ({
      ...prev,
      [type]: [
        ...prev[type],
        {
          wattageRating: 0,
          numberOfUnits: 0,
          hoursUsage: 0,
          id: prev[type].length + 1,
          ...(type === "others" && { name: "" }),
        },
      ],
    }));
  };

  const next = () => {
    // Calculate and store bulb consumption
    const totalBulbConsumption = formData.lights.reduce((acc, light) => {
      return acc + light.wattageRating * light.numberOfBulbs * light.hoursUsage;
    }, 0);

    // Calculate other appliances using reduce like lights
    const fanConsumption = formData.fans.reduce((acc, fan) => {
      return acc + fan.wattageRating * fan.numberOfUnits * fan.hoursUsage;
    }, 0);

    const acConsumption = formData.ACs.reduce((acc, ac) => {
      return acc + ac.wattageRating * ac.numberOfUnits * ac.hoursUsage;
    }, 0);

    const refrigeratorConsumption = formData.refrigerators.reduce(
      (acc, ref) => {
        return acc + ref.wattageRating * ref.numberOfUnits * ref.hoursUsage;
      },
      0
    );

    const heaterConsumption = formData.heaters.reduce((acc, heater) => {
      return (
        acc + heater.wattageRating * heater.numberOfUnits * heater.hoursUsage
      );
    }, 0);

    const otherConsumption = formData.others.reduce((acc, other) => {
      return acc + other.wattageRating * other.numberOfUnits * other.hoursUsage;
    }, 0);

    // Store all values in localStorage
    const storageItems = {
      "EC bulb": totalBulbConsumption,
      "EC fan": fanConsumption,
      "EC AC": acConsumption,
      "EC refrigerator": refrigeratorConsumption,
      "EC heater": heaterConsumption,
      "EC other": otherConsumption,
    };

    Object.entries(storageItems).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(parseInt(value)));
    });

    setEnergyConsumption((prev) => ({
      ...prev,
      bulb: totalBulbConsumption,
      fan: fanConsumption,
      AC: acConsumption,
      refrigerator: refrigeratorConsumption,
      heater: heaterConsumption,
      others: otherConsumption,
    }));

    setSection(2);
  };
  const energyConsumptions = () => {
    let retrivedEnergy =
      JSON.parse(localStorage.getItem("EC bulb")) +
      JSON.parse(localStorage.getItem("EC AC")) +
      JSON.parse(localStorage.getItem("EC fan")) +
      JSON.parse(localStorage.getItem("EC heater")) +
      JSON.parse(localStorage.getItem("EC other")) +
      JSON.parse(localStorage.getItem("EC refrigerator"));
    console.log((retrivedEnergy * 1.33) / 0.9 / 12);
    let eld = Math.floor((retrivedEnergy * 1.33) / 0.9 / 12);
    localStorage.setItem("ELD(Ah)/d", eld);
  };
  energyConsumptions();

  const renderSection = () => {
    switch (section) {
      case 1:
        return (
          <>
            {/* SECTION 1: APPLIANCES & LIGHTING */}
            <SectionOne
              formData={formData}
              addAnotherLighting={addAnotherLighting}
              next={next}
              handleInputChange={handleInputChange}
              setSection={setSection}
              setFormData={setFormData}
              addAnotherAppliance={addAnotherAppliance}
              energyConsumptions={energyConsumptions}
            />
          </>
        );
      case 2:
        return (
          <section>
            <SectionTwo setSection={setSection} />
          </section>
        );
      case 3:
        return (
          <>
            {/* SECTION 3: INSTALLATION LOCATIONS */}
            <section className="flex flex-col justify-center m-auto text-center bg-white sm:w-[75%] w-[95%] max-w-[1000px] mt-5 rounded-2xl p-10 ">
              <form className="text-[20px] m-[20px] text-left">
                <h4>
                  Please indicate the orientation(s) or locations where your
                  solar panels will be installed:
                </h4>
                <label htmlFor="north">
                  <input id="north" type="radio" radio="true" />
                  North
                </label>
                <br />
                <label htmlFor="south">
                  <input id="south" type="radio" radio="true" />
                  South
                </label>
                <br />
                <label htmlFor="east">
                  <input id="east" type="radio" radio="true" />
                  East
                </label>
                <br />
                <label htmlFor="west">
                  <input id="west" type="radio" radio="true" />
                  West
                </label>
              </form>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 text-[#3182CE] "
                  onClick={() => setSection(2)}
                  name={"Back"}
                />
                <Button
                  className="cursor-pointer text-2xl bg-[#3182CE] rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 transition hover:bg-[#000] active:bg-[#55fff6] text-[#fff] "
                  onClick={() => setSection(2)}
                  name={"Next"}
                />
              </div>
            </section>
          </>
        );
    }
  };

  // function watt() {
  //   setFormData({ wattageRating: 2 });
  // }
  return (
    <>
      <Nav />
      <main>{renderSection()}</main>
    </>
  );
};

export default page;
