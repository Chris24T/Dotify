import Songbar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  artistId
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white"></h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => {
          return (
            <Songbar
              key={i}
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedSongs;
