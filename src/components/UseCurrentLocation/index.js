import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
  // store error message, location in state
  const [error, setError] = useState("All systems go.");
  const [location, setLocation] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is sadly not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, [options]);

  return { location: location, error: error };
};

export default useCurrentLocation;
