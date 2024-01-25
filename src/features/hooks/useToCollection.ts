// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
export default function useToCollections() {
  const navigate = useRouter();

  return () => navigate.push("/collection");
}
