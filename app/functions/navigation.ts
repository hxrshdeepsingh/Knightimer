import { useRouter } from "expo-router";

export const useNavigationHelper = () => {
  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  const replaceWith = (path) => {
    router.replace(path);
  };

  const goBack = () => {
    router.back();
  };

  return { goTo, replaceWith, goBack };
};
