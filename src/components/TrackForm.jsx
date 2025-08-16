import { createTrack } from "../services/trackService";
import { useState } from "react";
const TrackForm = ({ setTracks }) => {
  const [track, setTrack] = useState({ title: "", artist: "" });
  const [showAddTrackForm, setShowAddTrackForm] = useState(false);

  function handleTrack(e) {
    const { name, value } = e.target;
    setTrack({ ...track, [name]: value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    const newTrack = await createTrack(track);
    if (newTrack) {
      setTracks((prev) => prev.concat(newTrack));
      setTrack({ title: "", artist: "" });
      setShowAddTrackForm(false);
    }
  }
  return (
    <section>
      <button onClick={() => setShowAddTrackForm(true)}>Add New Track</button>

      {showAddTrackForm && (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              required
              id="title"
              name="title"
              value={track.title}
              onChange={handleTrack}
            />
          </div>
          <div>
            <label htmlFor="artist">Artist</label>
            <input
              required
              id="artist"
              name="artist"
              value={track.artist}
              onChange={handleTrack}
            />
          </div>
          <button>Add</button>
        </form>
      )}
    </section>
  );
};


export default TrackForm