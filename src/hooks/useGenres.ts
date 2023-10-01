import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: {
        id: number;
        slug: string;
        name: string;
        added: number;
    }[];
}

export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => { return apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data)},
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // Setting the intialData Inorder for seamless transitions using the static data we had
    initialData: {count: genres.length, results: genres}
  })
};


