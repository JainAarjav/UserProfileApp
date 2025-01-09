import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Activity {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch all users
export const fetchAllUsers = async () => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
};

// Fetch activities for a specific user
export const fetchUserActivities = async (userId: number)=> {
  const response = await axios.get<Activity[]>(
    `${BASE_URL}/posts?userId=${userId}`
  );
  return response.data;
};
