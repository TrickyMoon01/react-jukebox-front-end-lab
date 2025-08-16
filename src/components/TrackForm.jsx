import { createTrack,updateTrack } from "../services/trackService";
import { useState, useEffect } from "react";

const TrackForm = ({ setTracks, editableTrack, setEditableTrack }) => {
  const [track, setTrack] = useState({ title: "", artist: "" });
  const [showAddTrackForm, setShowAddTrackForm] = useState(false);

  useEffect(() => {
    //this useEffect will watch editableTrack and if it is true
    // then it is time to use our TrackFrom for update
    if (editableTrack) {
      setTrack(editableTrack);
      setShowAddTrackForm(true);
    }
  }, [editableTrack]);

  function handleTrack(e) {
    const { name, value } = e.target;
    setTrack({ ...track, [name]: value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (editableTrack) {
      const updatedTrack = await updateTrack({
        _id: editableTrack._id,
        ...track,
      });
      if (updatedTrack) {
        setTracks((prev) => {
          const trackIndex = prev.findIndex(
            (track) => track._id === editableTrack._id
          );
          prev[trackIndex] = updatedTrack;
          return structuredClone(prev);
        });
        setTrack({ title: "", artist: "" });
        setShowAddTrackForm(false);
        setEditableTrack(null);
      }
    } else {
      const newTrack = await createTrack(track);
      if (newTrack) {
        setTracks((prev) => prev.concat(newTrack));
        setTrack({ title: "", artist: "" });
        setShowAddTrackForm(false);
      }
    }
  }
  return (
    <section>
      {editableTrack ? (
        <h2>Edit Track</h2>
      ) : (
        <button onClick={() => setShowAddTrackForm(true)}>Add New Track</button>
      )}

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
          <button>{editableTrack ? "Update" : "Add"}</button>
        </form>
      )}
    </section>
  );
};

export default TrackForm;
