import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { userActions } from 'src/entities/User';
import { useAppDispatch } from "src/shared/lib/hooks/reduxHooks";

import { ACCESS_TOKEN } from "src/shared/lib/consts/common";
import localStorageServise from "src/shared/lib/servises/localStorage.servise";

export function useCheckAuth() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorageServise.get(ACCESS_TOKEN) as string;

    if (token) {
      const decoded = jwtDecode(token);
      dispatch(userActions.setUser({ token, email: decoded.sub || '' }));
    }
  }, []);
}
