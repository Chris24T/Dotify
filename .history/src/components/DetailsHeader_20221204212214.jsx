import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistid, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div
      className="w-full bg-gradient-to-l from-transparent
   to-black sm:48 h-28"
    ></div>
    <div className="absolute inset-0 flex items-center">
      <img
        alt="art"
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-cl shadow-black"
        src={
          artistid
            ? artistData?.artists[artistid].attributes?.artwork?.url
                .replace('{w}', '500')
                .replace('{h}', '500')
            : songData?.images?.coverart
        }
      />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl">
          {' '}
          {artistid
            ? artistData?.artists[artistid].attributes.name
            : songData?.title}{' '}
          :{' '}
        </p>
        {!artistid && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
      </div>
      <p className="font-bold sm:text-3xl text-xl"></p>
    </div>
  </div>
);

export default DetailsHeader;
