// src/api.js

const fetchBerlinData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/capital/Berlin');
  return response.json();
};

const fetchParisData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/capital/Paris');
  return response.json();
};

const fetchBrusselsData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/capital/Brussels');
  return response.json();
};

export { fetchBerlinData, fetchParisData, fetchBrusselsData };