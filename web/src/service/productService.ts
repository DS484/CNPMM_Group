import axios from "axios";

const API_BASE = "/api/products";

export const fetchNewestProducts = async () => {
  const res = await axios.get(`${API_BASE}/newest`);
  console.log(res.data);
  return res.data.data || [];
};

export const fetchBestSellerProducts = async () => {
  const res = await axios.get(`${API_BASE}/best-seller`);
  return res.data.data || [];
};

export const fetchMostViewedProducts = async () => {
  const res = await axios.get(`${API_BASE}/most-viewed`);
  return res.data.data || [];
};
