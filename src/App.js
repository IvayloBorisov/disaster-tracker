import { useState, useEffect } from 'react';
import { MapComponent, Loading } from './components/index';

const App = () => {

  const [ eventData, setEventData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {

    const getData = async () => {
      const fetchData = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await fetchData.json();

      setEventData(events.flat());
      setLoading(true);
    }
    getData()
  }, []);

  console.log(eventData)

  return (
    <div>
        { !loading ? <Loading /> :<MapComponent eventData={ eventData }/>}
    </div>
  );
}

export default App;
