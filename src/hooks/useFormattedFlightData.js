import { useEffect, useState } from "react";
import { flightOffer } from "../../data/LHR_CDG_ADT1_TYPE_1.json";

const useFormattedFlightData = () => {
  const [flightInfo, setFlightInfo] = useState([]);

  useEffect(() => {
    const formattedFlightInfo = flightOffer.map((flight, index) => {
      const flightPrice = parseFloat(flight.price).toFixed(2);
      const fareBasis = flight.fareBasis[0];
      const flightClass = flight.class[0];
      const seat = flight.seat[0];
      const routeInfo = flight.itineraries[0].segments;
      const duration = flight.itineraries[0].duration;

      return {
        id: index + 1,
        flightPrice,
        fareBasis,
        flightClass,
        seat,
        routeInfo,
        duration,
      };
    });

    setFlightInfo(formattedFlightInfo);
  }, []);

  return flightInfo;
};

export default useFormattedFlightData;
