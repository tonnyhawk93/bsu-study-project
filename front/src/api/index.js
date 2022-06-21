import { BASE_URL } from './constants';

export const fetchDiagnosis = async () => {
  const res = await fetch(`${BASE_URL}/diagnosis`);
  const data = await res.json();

  return data;
};

export const fetchRecommendation = async () => {
  const res = await fetch(`${BASE_URL}/recommendation`);
  const data = await res.json();

  return data;
};