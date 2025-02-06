import { useQuery } from "@tanstack/react-query";
import { fetchBerlinData, fetchParisData, fetchBrusselsData } from '../../api';
import Map from "../Map";


export default function App() {

  const { data: berlinData, error: berlinError } = useQuery({
    queryKey: ['berlinData'],
    queryFn: fetchBerlinData
  });


  return (
    <div className="App">
        {/* {berlinError ? berlinError.message : ""}
        "Berlin:" {berlinData ? berlinData[0].name.common : " - "} */}
        <Map />
    </div>
  );
}
