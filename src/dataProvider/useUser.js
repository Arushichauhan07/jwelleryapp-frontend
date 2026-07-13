import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchUserProfile = async () => {
  const response = await axios.get(`${apiUrl}/userdetails`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data.userDetails;
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products/`);

    console.log("response", response);
    console.log("data", response.data);

    return response.data.data;
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

export const useUser = () => {
  return useQuery({
    queryKey: ["userProfile"], // Correct property name
    queryFn: fetchUserProfile,
    enabled: !!localStorage.getItem("token"),
  });
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};