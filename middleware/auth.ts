export default defineNuxtRouteMiddleware(async (to, _from) => {
    const user = useDirectusUser();
    const { fetchUser } = useDirectusAuth()
  
    if (!user.value) {
      return navigateTo("/");
    }

    await fetchUser()
  });