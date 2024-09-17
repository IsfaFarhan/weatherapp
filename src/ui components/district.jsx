"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
/* import { Pagi } from "../ui components/animpagi"; */
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function Cuaca3({ addDay }) {
  const [weather, setWeather] = useState(null);
  const searchParams = useSearchParams(null);
  const [error, setError] = useState(null);

  const daerah = searchParams.get("location2");

  useEffect(() => {
    if (daerah) {
      // Call your API route
      fetch(`/api/weatherdaerah?location=${daerah}`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => setError(error.message));
    }
  }, [daerah]);
  if (error) return <div>Error: {error}</div>;
  if (!weather) return <div>Loading...</div>;

  const today = weather[addDay];

  //////////
  const Pagi = () => {
    const { RiveComponent } = useRive({
      src: `/pagi/${today.morning_forecast}.riv`,
      stateMachines: "State Machine 1",
      layout: new Layout({
        fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
        alignment: Alignment.Center,
      }),
      autoplay: true,
    });

    return <RiveComponent />;
  };

  const Tengahari = () => {
    const { RiveComponent } = useRive({
      src: `/tengahari/${today.afternoon_forecast}.riv`,
      stateMachines: "State Machine 1",
      layout: new Layout({
        fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
        alignment: Alignment.Center,
      }),
      autoplay: true,
    });

    return <RiveComponent />;
  };

  const Malam = () => {
    const { RiveComponent } = useRive({
      src: `/malam/${today.night_forecast}.riv`,
      stateMachines: "State Machine 1",
      layout: new Layout({
        fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
        alignment: Alignment.Center,
      }),
      autoplay: true,
    });

    return <RiveComponent />;
  };
  /////////

  return (
    <div className="flex-col justify-between items-center p-8 shadow-custom-blue rounded-lg bg-white m-2 w-[970px]">
      <div className="flex-row flex justify-between">
        <h1 className="text-xl">Kawasan {daerah}</h1>
        <p>Tarikh: {today.date}</p>
      </div>
      <div className="p-4 border border-[#2D7FAE] border-opacity-25 rounded-lg">
        <p className="font-medium text-md">Ramalan Cuaca</p>
        <p className="text-sm">
          {today.summary_forecast} berlaku pada waktu {today.summary_when}
        </p>
      </div>
      <div className="mt-2 flex-row flex justify-between flex-wrap">
        <div className="mt-2 border border-[#2D7FAE] border-opacity-25 rounded-lg min-w-[280px]">
          <div className="w-[280px] h-[166px] rounded-t-lg overflow-hidden">
            {<Pagi />}
          </div>
          <div className="p-4">
            <p className=" font-medium text-md">Waktu Pagi</p>
            <p className=" text-sm">{today.morning_forecast}</p>
          </div>
        </div>
        <div className="mt-2 border border-[#2D7FAE] border-opacity-25 rounded-lg min-w-[280px]">
          <div className="w-[280px] h-[166px] rounded-t-lg overflow-hidden">
            {<Tengahari />}
          </div>
          <div className="p-4">
            <p className=" font-medium text-md">Waktu Tengahari</p>
            <p className="pb-8 text-sm">{today.afternoon_forecast}</p>
          </div>
        </div>
        <div className=" mt-2 border border-[#2D7FAE] border-opacity-25 rounded-lg min-w-[280px]">
          <div className="w-[280px] h-[166px] rounded-t-lg overflow-hidden">
            {<Malam />}
          </div>
          <div className="p-4">
            <p className="font-medium text-md">Waktu Malam</p>
            <p className="pb-8 text-sm">{today.night_forecast} </p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 border border-[#2D7FAE] border-opacity-25 rounded-lg h-[130px]">
        <p className="pb-2">Suhu</p>
        <div className="flex-row flex justify-center items-center">
          <div className="h-[20px] w-[20px] bg-[#46BCFF] rounded-xl"></div>
          <div className="bg-gradient-to-l from-[#FFC56E] to-[#51D5FF] h-[10px] w-full rounded-sm"></div>
          <div className="h-[20px] w-[20px] bg-[#FF916E] rounded-xl"></div>
        </div>
        <div className="pb-2 pt-4 flex-row flex justify-between items-cente">
          <p className="text-sm">minima {today.min_temp} darjah salsius</p>
          <p className="text-sm">maxima {today.max_temp} darjah salsius</p>
        </div>
      </div>
    </div>
  );
}

/////// image component //////
