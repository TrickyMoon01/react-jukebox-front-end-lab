import { useState } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from './components/NowPlaying'

const App = () => {
  const [tracks, setTracks] = useState(null);
  const [editableTrack, setEditableTrack] = useState(null);
  const [playList, setPlayList] = useState([]);

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
        setPlayList={setPlayList}
      />
      <NowPlaying playList={playList} />
    </>
  );
};

export default App;
