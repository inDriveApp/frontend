import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";

type FileType = {
    extension: string;
    name: string;
    size: string;
    uploaded: number;
    owner: string;
  }

export function useShared() {
  const { user } = useAuth();
  const [filesShared, setFilesShared] = useState<FileType[]>([]);

  useEffect(() => {
    api.get(`api/files/share`,{
      headers: {'x-user': user.id}
    })
    .then((res) => {

    setFilesShared(res.data);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [user]);
  
  return { filesShared }
}