import { useState } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState(null);

  return (
    <>
      <TrackForm setTracks={setTracks}/>
      <TrackList tracks={tracks} setTracks={setTracks} />
    </>
  );
};

export default App;
