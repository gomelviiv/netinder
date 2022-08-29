import { useEffect, useState } from 'react';

import { IPosition } from '@shared/interface/position.interface';

const usePosition = () => {
  const [position, setPosition] = useState<IPosition>({ latitude: 0, longitude: 0, altitude: 0 });
  const [error, setError] = useState(null);

  const onChange = ({ coords }: { coords: GeolocationCoordinates }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      altitude: 200,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};

export default usePosition;
