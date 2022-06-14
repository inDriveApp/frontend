import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";

type UserType = {
    id: string;
    name: string;
    status: number;
  }

export function useUsers() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    api.get(`api/user`)
    .then((res) => {

        setUsers(res.data);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [user]);
  
  return { users }
}