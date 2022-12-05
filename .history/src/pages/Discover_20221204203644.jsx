import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDebugValue } from 'react';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  //   const data = [
  //     { title: 'Test', subtitle: '_test_' },
  //     { title: 'mySong', subtitle: 'goo' },
  //     { title: 'sing', subtitle: 'laugh' },
  //   ];
  //  const isFetching = false;
  const genreTitle = 'Pop';

  if (isFetching) return <Loader title="Loading Songs..." />;
  // if (error) return <Error />;
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black rounded-lg outline-none text-gray-300 sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            ></SongCard>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
