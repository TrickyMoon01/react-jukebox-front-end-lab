import { getAllTracks,deleteTrack } from "../services/trackService";
import {useEffect} from 'react'

const TrackList = ({tracks, setTracks, setEditableTrack,setPlayList}) => {
  
  useEffect(() => {
    getAllTracks().then(setTracks);
  }, []);

  async function handleDelete(id){
    await deleteTrack(id)
    setTracks(prev=>prev.filter(track=>track._id !==id))
  }

  function handlePlay(track){
    setPlayList(prev=>prev.concat(track))
  }

  return (
    <section>
      <h1>Tracks:</h1>
      {Array.isArray(tracks)?
      !tracks.length?<p>No tracks yet</p>:
      <ol>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} ({track.artist})
            <button onClick={()=>setEditableTrack(track)}>edit</button>
            <button onClick={()=>handleDelete(track._id)}>delete</button>
            <button onClick={()=>handlePlay(track)}>play</button>
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
