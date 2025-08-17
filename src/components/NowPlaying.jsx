const NowPlaying = ({ playList }) => {
  return (
    !!playList.length && (
      <section>
        <h3>Playlist:</h3>
        <ol>
          {playList.map((track) => (
            <li key={track._id}>
              {track.title} ({track.artist})
            </li>
          ))}
        </ol>
      </section>
    )
  );
};

export default NowPlaying;
