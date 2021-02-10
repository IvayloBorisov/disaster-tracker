import { useState, useEffect } from 'react';
import { MapComponent, Loading } from './components/index';

const App = () => {

  const [ eventData, setEventData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const fetchData = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await fetchData.json();

      setEventData(events.flat());
      setLoading(false);
    }
    getData();

  }, []);

  console.log(eventData)

  return (
    <div>
      { !loading ? <MapComponent eventData={ eventData }/> : <Loading />}
    </div>
  );
}

export default App;
