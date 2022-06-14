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

export function useFiles() {
  const { user } = useAuth();
  const [files, setFiles] = useState<FileType[]>([]);

  useEffect(() => {
    api.get(`api/files`,{
      headers: {'x-user': user.id}
    })
    .then((res) => {    
      setFiles(res.data);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [user]);
  
  return { files }
}