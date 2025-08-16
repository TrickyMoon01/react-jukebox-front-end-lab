import { useState } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState(null);
  const [editableTrack, setEditableTrack] = useState(null);

  return (
    <>
      <TrackForm
        setTracks={setTracks}
        editableTrack={editableTrack}
        setEditableTrack={setEditableTrack}
      />
      <TrackList
        tracks={tracks}
        setTracks={setTracks}
        setEditableTrack={setEditableTrack}
      />
    </>
  );
};

export default App;
