import { useState, useEffect } from "react";

export const useFetch = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending Http request to URL: " + url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
        setFetchedData(null);
        setIsLoading(false);
      });
  }, dependencies); // eslint-disable-line

  return [isLoading, fetchedData];
};
