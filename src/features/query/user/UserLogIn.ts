import { useMutation } from "@tanstack/react-query";
import userLogIn from "@fetch/user/user-login";
export default function useUserLogIn(cb?: () => void) {
  return useMutation({
    mutationFn: userLogIn,
    onSuccess: () => {
      if (cb) {
        cb();
      }
    },
  });
}
