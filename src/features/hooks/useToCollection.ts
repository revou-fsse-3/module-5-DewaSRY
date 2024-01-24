import { useNavigate } from "react-router-dom";

export default function useToCollections() {
  const navigate = useNavigate();
  return () => navigate("/collection");
}
