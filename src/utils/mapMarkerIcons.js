import L from 'leaflet';
import bikeLogo from './../assets/bikeWhite.svg';
import charge from './../assets/charge.svg';
import employee from './../assets/employee.svg';

const html = (logo, color, selected) => {
  return `<div class='w-14 ${
    selected ? 'scale-125' : null
  } h-14 -translate-x-[40%] -translate-y-1/2 p-2 transition-all rounded-[50%] overflow-hidden shadow-[0_0px_10px_0px_rgba(0,0,0,0.7)] flex justify-center items-center ${color}'><img class='overflow-hidden' src=${logo} /></div>`;
};

export const selectedDefectiveBikeIcon = new L.divIcon({
  html: html(bikeLogo, 'bg-[#ff5353]', true),
});

export const defectiveBikeIcon = new L.divIcon({
  html: html(bikeLogo, 'bg-[#ff5353]', false),
});

export const selectedBikeIcon = new L.divIcon({
  html: html(bikeLogo, 'bg-[#60b299]', true),
});

export const bikeIcon = new L.divIcon({
  html: html(bikeLogo, 'bg-[#60b299]', false),
});

export const selectedDockIcon = new L.divIcon({
  html: html(charge, 'bg-[#26bfe1]', true),
});

export const dockIcon = new L.divIcon({
  html: html(charge, 'bg-[#26bfe1]', false),
});

export const employeeWorkIcon = new L.divIcon({
  html: html(employee, 'bg-gray-400', false),
});

export const employeeFieldIcon = new L.divIcon({
  html: html(employee, 'bg-red-600', false),
});

export const employeeFreeIcon = new L.divIcon({
  html: html(employee, 'bg-green-500', false),
});

export const employeeBreakIcon = new L.divIcon({
  html: html(employee, 'bg-orange-400', false),
});

export const markerIcon = new L.Icon({
  className: 'pointer-events-none',
  iconUrl: require('./../assets/location.png'),
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});
