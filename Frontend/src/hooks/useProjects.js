import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectServis";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const location = useLocation();
  const queryObject = queryString.parse(location.search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(location.search),
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
