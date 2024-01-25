import { getUserEmailAndPassword as currentAuth } from "@utils/user.utils";
import { getCookies } from "@libs/cookies";
import { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
export default function useIsAuthentications(): void {
  const navigate = useRouter();
  useLayoutEffect(() => {
    let currentToken = getCookies();
    if (currentToken) {
      navigate.push("/collection");
    } else {
      const { email, password } = currentAuth();
      if (email.trim().length > 0 && password.trim().length > 0) {
        navigate.push("?auth=sign-in");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
