import React, { useEffect, useState, useRef } from 'react';
import settings from './../assets/settings.svg';
import notification from './../assets/notification.svg';
import { sideState } from '../globalStates/atom';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import target from './../assets/target.svg';
import bikeLogo from './../assets/bikeWhite.svg';
import blackBikeLogo from './../assets/bikeBlack.svg';
import redirect from './../assets/redirect.svg';
import charge from './../assets/charge.svg';
import downArrow from './../assets/downArrow.svg';
import { bikes, docks } from '../utils/dummyData';
import { useRecoilState } from 'recoil';

const Operation = () => {
  const [sideOpened, setSideOpened] = useRecoilState(sideState);
  const [center, setCenter] = useState([41.051789, 29.010509]);
  const [coordsFetched, setCoordsFetched] = useState(false);
  const [selectedBike, setSelectedBike] = useState('6');
  const centerRef = useRef();
  const parentBikesRef = useRef();

  const [renderedBikes, setRenderedBikes] = useState(bikes);

  const renderBikes = (latitude1, longitude1, latitude2, longitude2) => {
    const newList = bikes.filter(
      (bike) =>
        latitude1 < bike.latitude &&
        bike.latitude < latitude2 &&
        longitude1 < bike.longitude &&
        bike.longitude < longitude2
    );
    setRenderedBikes(newList);
  };

  const handleBikeSelect = (id) => {
    const { children } = parentBikesRef.current;

    setSelectedBike(id);
    for (let child of children) {
      if (child.id === id) {
        child.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'center',
        });
      }
    }
  };

  const Events = () => {
    const map = useMapEvents({
      dragend() {
        const { _southWest, _northEast } = map.getBounds();
        renderBikes(
          _southWest.lat,
          _southWest.lng,
          _northEast.lat,
          _northEast.lng
        );
        if (!renderedBikes.find((bike) => bike.id === selectedBike)) {
          setSelectedBike('');
        }
      },
      zoomend() {
        const { _southWest, _northEast } = map.getBounds();
        renderBikes(
          _southWest.lat,
          _southWest.lng,
          _northEast.lat,
          _northEast.lng
        );
        if (!renderedBikes.find((bike) => bike.id === selectedBike)) {
          setSelectedBike('');
        }
      },
    });

    centerRef.current.addEventListener('click', () => {
      map.flyTo(center);
    });
  };

  const selectedDefectiveBikeIcon = new L.divIcon({
    className: 'flex justify-center items-center',
    iconSize: [36, 36],
    html: `<div class='w-14 scale-125 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#ff5353]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
  });

  const defectiveBikeIcon = new L.divIcon({
    className: 'flex justify-center items-center',
    iconSize: [36, 36],
    html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#ff5353]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
  });

  const selectedBikeIcon = new L.divIcon({
    className: 'flex justify-center items-center',
    iconSize: [36, 36],
    html: `<div class='w-14 scale-125 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#60b299]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
  });

  const bikeIcon = new L.divIcon({
    className: 'flex justify-center items-center',
    iconSize: [36, 36],
    html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#60b299]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
  });

  const dockIcon = new L.divIcon({
    className: 'flex justify-center items-center',
    iconSize: [36, 36],
    html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#26bfe1]'><img class='overflow-hidden' src=${charge} /></div>`,
  });

  const markerIcon = new L.Icon({
    className: 'pointer-events-none',
    iconUrl: require('./../assets/location.png'),
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  });

  const success = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setCenter([lat, lng]);
    setCoordsFetched(true);
  };

  const error = () => {
    console.log('error');
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(success, error);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row lg:h-screen'>
      <div className='w-full overflow-hidden'>
        <div className='relative flex items-center bg-[#00a19c] h-20 shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] md:h-0'>
          <div className='flex m-4 md:m-8 md:relative items-center ml-auto space-x-1 sm:space-x-6'>
            <img
              className='inline-block h-10 p-2 cursor-pointer accent-white'
              src={settings}
              alt='settings'
            />
            <img
              className='h-10 p-2 cursor-pointer'
              src={notification}
              alt='notification'
            />
            <div
              onClick={() => setSideOpened(!sideOpened)}
              className='p-2 cursor-pointer block md:hidden'
            >
              <svg
                className='overflow-visible'
                width='28'
                height='16'
                viewBox='0 0 28 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  className={` origin-left duration-500 transition-all`}
                  y1='1'
                  x2='28'
                  y2='1'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
                <line
                  className={`duration-300 transition-all`}
                  y1='8'
                  x2='28'
                  y2='8'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
                <line
                  className={`origin-left duration-500 transition-all`}
                  y1='15'
                  x2='28'
                  y2='15'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
              </svg>
            </div>
          </div>
          <div
            ref={centerRef}
            className='absolute shadow-[0_0_20px_0px_rgba(0,0,0,0.5)] right-2 -bottom-16 flex justify-center items-center bg-white w-14 h-14 rounded-[50%] border-2 border-gray-600 cursor-pointer z-40'
          >
            <img className='w-10' src={target} alt='center' />
          </div>
        </div>

        {coordsFetched ? (
          <MapContainer
            whenReady={() => {
              setCoordsFetched(true);
            }}
            className='w-full z-30 h-[66vh] lg:h-screen'
            center={center}
            zoomControl={true}
            zoomAnimation={true}
            zoom={16}
            minZoom={10}
            touchZoom={true}
          >
            <TileLayer
              url='http://mts1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {renderedBikes.map((bike, index) => (
              <Marker
                key={index}
                zIndexOffset={bike.id === selectedBike ? 100 : 0}
                eventHandlers={{ click: () => handleBikeSelect(bike.id) }}
                icon={
                  bike.faultCode
                    ? bike.id === selectedBike
                      ? selectedDefectiveBikeIcon
                      : defectiveBikeIcon
                    : bike.id === selectedBike
                    ? selectedBikeIcon
                    : bikeIcon
                }
                position={[bike.latitude, bike.longitude]}
              />
            ))}
            {docks.map((dock, index) => (
              <Marker
                key={index}
                icon={dockIcon}
                position={[dock.latitude, dock.longitude]}
              />
            ))}
            <Events />
            <Marker zIndexOffset={1000} icon={markerIcon} position={center} />
          </MapContainer>
        ) : (
          <div className='w-full h-[60vh] lg:h-screen flex justify-center items-center '>
            <div className='animate-load aspect-square rounded-[50%] p-10 overflow-hidden shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)]'>
              <img src={require('./../assets/favicon.png')} alt='ByBike' />
            </div>
          </div>
        )}
        <div className='relative h-0'>
          <div
            ref={parentBikesRef}
            className='absolute flex items-end overflow-x-scroll overflow-visible px-4 gap-4 z-30 h-[15rem] pb-3 w-[100%] -top-[15rem]'
          >
            {renderedBikes.map((bike, index) => (
              <div
                onClick={(e) => {
                  setSelectedBike(bike.id);
                  e.target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'center',
                  });
                }}
                key={index}
                id={bike.id}
                className={`${
                  selectedBike === bike.id
                    ? 'border-[#38ab8a] border-4 h-52'
                    : 'border-gray-300 cursor-pointer'
                } h-40 p-2 transition-all bg-white bg-[${bikeLogo}] flex-col flex justify-between duration-300 rounded-2xl shadow-[0_0_20px_0px_rgba(0,0,0,0.5)]`}
              >
                <div className='flex w-64 sm:w-80 px-1 sm:px-2 items-center pointer-events-none justify-between'>
                  <div className='flex items-center gap-1'>
                    <img className='w-10' src={blackBikeLogo} alt='bike' />
                    {bike.charge}%
                  </div>
                  <h2>Bike ID: {bike.id}</h2>
                </div>
                {bike.faultCode ? (
                  <div className='flex justify-center'>
                    <h2 className='text-red-600 pointer-events-none'>
                      Fault Code: {bike.faultCode}
                    </h2>
                  </div>
                ) : (
                  <div></div>
                )}
                {bike.userId ? (
                  <div className='flex text-sm sm:text-base justify-center gap-2 items-center'>
                    <h2>Current User:</h2>
                    <div>{bike.userId}</div>
                    <img
                      className='w-8 cursor-pointer p-1'
                      src={redirect}
                      alt='redirect'
                    />
                  </div>
                ) : (
                  <div className='h-5'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='lg:w-[24rem] flex flex-wrap lg:flex-col gap-4 p-4 w-full lg:h-screen z-30 shadow-[0_40px_10px_0px_rgba(0,0,0,0.5)]'>
        {docks.map((dock, index) => {
          return (
            <div
              key={index}
              className='w-full flex flex-col justify-between cursor-pointer sm:w-[20rem] h-40 p-4 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] rounded-2xl'
            >
              <div className='flex justify-between'>
                <h2 className='font-semibold text-xl'>{dock.name}</h2>
                <h2 className='text-gray-400'>ID: {dock.id}</h2>
              </div>
              {dock.bikes.length === 0 ? (
                <h2>No Bikes on this Dock</h2>
              ) : (
                <h2>{dock.bikes.length} Bike(s) Currently Charging</h2>
              )}
              <div className='flex justify-between items-center'>
                <h2>Show Bikes</h2>
                <img className='w-8' src={downArrow} alt="down" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Operation;