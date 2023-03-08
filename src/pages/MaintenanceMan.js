import React, { useEffect, useState, useRef } from 'react';
import settings from './../assets/settings.svg';
import notification from './../assets/notification.svg';
import { sideState } from '../globalStates/atom';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import target from './../assets/target.svg';
import { useRecoilState } from 'recoil';

const MaintenanceMan = () => {
  const [sideOpened, setSideOpened] = useRecoilState(sideState);
  const [center, setCenter] = useState([41.051789, 29.010509]);
  const [coordsFetched, setCoordsFetched] = useState(false);
  const [selectedBike, setSelectedBike] = useState('6');
  const centerRef = useRef();
  const parentBikesRef = useRef();

  const renderedBikes = [
    {
      id: '0',
      latitude: 41.088686794249774,
      longitude: 28.979958520573042,
    },
    {
      id: '1',
      latitude: 41.09040376781982,
      longitude: 28.979976653784878,
    },
    {
      id: '2',
      latitude: 41.09079424550636,
      longitude: 28.982201439619224,
    },
    {
      id: '3',
      latitude: 41.09040376781982,
      longitude: 28.979976653784878,
    },
    {
      id: '4',
      latitude: 41.09079424550636,
      longitude: 28.982201439619224,
    },
    {
      id: '5',
      latitude: 41.09040376781982,
      longitude: 28.979976653784878,
    },
    {
      id: '6',
      latitude: 41.09079424550636,
      longitude: 28.982201439619224,
    },
  ];
  const bikes = [
    {
      id: '0',
      latitude: 41.088686794249774,
      longitude: 28.979958520573042,
    },
    {
      id: '1',
      latitude: 41.09040376781982,
      longitude: 28.979976653784878,
    },
    {
      id: '2',
      latitude: 41.09079424550636,
      longitude: 28.982201439619224,
    },
  ];

  const handleBikeSelect = (e) => {
    setSelectedBike(e.target.options.id);
    const childs = parentBikesRef.current.children;
    for (let child of childs) {
      if (child.id === e.target.options.id) {
        child.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    }
  };

  const Events = () => {
    const map = useMapEvents({
      dragend() {
        console.log('end');
      },
      zoomend() {
        console.log(map.getBounds());
      },
    });

    centerRef.current.addEventListener('click', () => {
      map.flyTo(center);
    });
  };

  const bikeIcon = new L.Icon({
    iconUrl: require('./../assets/bike.png'),
    iconSize: [36, 36],
  });

  const markerIcon = new L.Icon({
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
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  setInterval(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, 30 * 1000);

  return (
    <div className='flex flex-col lg:flex-row lg:h-screen'>
      <div className='w-full overflow-hidden'>
        <div className='relative flex items-center bg-[#6040d4] h-20 shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] md:h-0'>
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
            className='absolute shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] right-2 -bottom-16 flex justify-center items-center bg-white w-14 h-14 rounded-[50%] border-2 border-gray-600 cursor-pointer z-40'
          >
            <img className='w-10' src={target} alt='center' />
          </div>
        </div>

        {coordsFetched ? (
          <MapContainer
            whenReady={() => {
              setCoordsFetched(true);
            }}
            className='w-full z-30 h-[60vh] lg:h-screen'
            center={center}
            zoomControl={true}
            zoomAnimation={true}
            zoom={16}
            minZoom={10}
            touchZoom={true}
          >
            <TileLayer
              url='http://mts1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {bikes.map((bike, index) => (
              <Marker
                key={index}
                id={bike.id}
                eventHandlers={{ click: (e) => handleBikeSelect(e) }}
                icon={bikeIcon}
                position={[bike.latitude, bike.longitude]}
              />
            ))}
            <Events />
            <Marker zIndexOffset={10} icon={markerIcon} position={center} />
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
            className='absolute flex items-center overflow-x-scroll overflow-y-visible pl-4 gap-4 z-30 h-60 w-[100%] -top-60'
          >
            {renderedBikes.map((bike, index) => (
              <div
                onClick={(e) => {
                  setSelectedBike(e.target.id);
                  e.target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                  });
                }}
                key={index}
                id={bike.id}
                className={`${
                  selectedBike === bike.id
                    ? 'bg-[#8ae2df] border-[#8ae2df] h-60'
                    : 'border-gray-300'
                } min-w-80 h-40 p-2 bg-white border-2 cursor-pointer rounded-2xl shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)]`}
              >
                {bike.id} akdhbfakehfaıylefhjnalıeyfhanelıfhaeılufhlae
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='lg:w-[24rem] w-full h-[100rem] lg:h-screen z-30 shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)]'>
        hello
      </div>
    </div>
  );
};

export default MaintenanceMan;
