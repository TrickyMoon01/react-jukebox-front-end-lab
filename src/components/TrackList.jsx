import { getAllTracks } from "../services/trackService";
import {useEffect} from 'react'

const TrackList = ({tracks, setTracks, setEditableTrack}) => {
  
  useEffect(() => {
    getAllTracks().then(setTracks);
  }, []);

 

  return (
    <section>
      <h1>Tracks:</h1>
      {Array.isArray(tracks)?
      <ol>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} ({track.artist})
            <button onClick={()=>setEditableTrack(track)}>edit</button>
          </li>
        ))}
      </ol>
      :
      <p>Loading...</p>
    }
    </section>
  );
};

export default TrackList;
