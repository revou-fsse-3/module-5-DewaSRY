import { useMutation } from "@tanstack/react-query";
import userSingUp from "@fetch/user/user-sign-up";
export default function useUserRegister(cb?: () => void) {
  return useMutation({
    mutationFn: userSingUp,
    onSuccess: () => {
      if (cb) {
        cb();
      }
    },
  });
}
