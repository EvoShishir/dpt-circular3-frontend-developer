import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./FlightList.css";
import useFormattedFlightData from "../../hooks/useFormattedFlightData";

const FlightList = () => {
  // custom hook is used to get the formatted data
  const flightInfo = useFormattedFlightData();

  return (
    <section className="flex justify-center items-center">
      <div>
        <SearchInput redirect={"#"} />
        <div>
          <div className="tableContainer justify-between border-b-2 border-gray-300 py-2">
            <p className="font-bold">Flight</p>
            <p className="font-bold">Aircraft</p>
            <p className="font-bold">Class</p>
            <p className="font-bold">FareBasis</p>
            <p className="font-bold">Route</p>
            <p className="font-bold">Departure</p>
            <p className="font-bold">Arrival</p>
            <p className="font-bold">Duration</p>
            <p className="font-bold">Price</p>
          </div>

          {/* Mapping the data to get values for the table */}
          {flightInfo.map((flight) => (
            <div
              key={flight.id}
              className="items-center border-b-2 border-gray-300 py-2 tableContainer"
            >
              {/* getting the flight number */}
              <div>
                {flight.routeInfo.map((route, index) => (
                  <div key={index} className="flex-col ">
                    {route.carrierCode} {route.flightNumber}
                  </div>
                ))}
              </div>

              {/* getting aircraft info */}
              <div>
                {flight.routeInfo.map((route, index) => (
                  <div key={index} className="flex-col">
                    {route.aircraft}
                  </div>
                ))}
              </div>

              {/* flight class */}
              <div>
                {flight.flightClass.map((fclass, index) => (
                  <div key={index} className="flex-col">
                    {fclass}
                  </div>
                ))}
              </div>

              {/* fare basis */}
              <div>
                {flight.fareBasis.map((basis, index) => (
                  <div key={index} className="flex-col">
                    {basis}
                  </div>
                ))}
              </div>

              {/* the location between which the journey is happening */}
              <div>
                {flight.routeInfo.map((journey, index) => (
                  <div key={index} className="flex-col">
                    {journey.departure.iataCode} - {journey.arrival.iataCode}
                  </div>
                ))}
              </div>

              {/* departure time */}
              <div>
                {flight.routeInfo.map((journeyTime, index) => (
                  <div key={index} className="flex-col">
                    {journeyTime.departure.at}
                  </div>
                ))}
              </div>

              {/* arrival time */}
              <div>
                {flight.routeInfo.map((journeyTime, index) => (
                  <div key={index} className="flex-col">
                    {journeyTime.arrival.at}
                  </div>
                ))}
              </div>
              <p>{flight.duration}</p>
              <div className="flex-col">
                <p>{flight.flightPrice}</p>
                <button className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md my-1">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightList;
