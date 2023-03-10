import L from 'leaflet';
import bikeLogo from './../assets/bikeWhite.svg';
import charge from './../assets/charge.svg';


export const selectedDefectiveBikeIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 scale-125 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#ff5353]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
});

export const defectiveBikeIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#ff5353]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
});

export const selectedBikeIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 scale-125 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#60b299]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
});

export const bikeIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#60b299]'><img class='overflow-hidden' src=${bikeLogo} /></div>`,
});

export const dockIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#26bfe1]'><img class='overflow-hidden' src=${charge} /></div>`,
});

export const selectedDockIcon = new L.divIcon({
  className: 'flex justify-center items-center',
  iconSize: [36, 36],
  html: `<div class='w-14 scale-125 h-14 p-2 transition-all rounded-[50%] overflow-hidden border-gray-400 border shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] flex justify-center items-center bg-[#26bfe1]'><img class='overflow-hidden' src=${charge} /></div>`,
});

export const markerIcon = new L.Icon({
  className: 'pointer-events-none',
  iconUrl: require('./../assets/location.png'),
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});