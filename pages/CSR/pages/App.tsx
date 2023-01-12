import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import ButtonFetchUsers from "./src/Button/ButtonFetchUsers";
import UsersList from "./src/UserList/UsersList";
import "./App.css";

export const useFetch = (url) => {
  const [users, setUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  <Link href={`./${url}`} />;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch("https://randomuser.me/api/?results=1");

      if (!response.ok) {
        throw new Error(String(response.status));
      }

      const fetchedData = await response.json();
      setUsers(fetchedData);
    } catch (_error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <ButtonFetchUsers onClick={() => setUsers(users + 1)} />
    </div>
  );
};
