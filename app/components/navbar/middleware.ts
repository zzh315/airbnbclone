export { default } from "next-auth/middleware";
// this export prevent access to the matcher paths without active session

export const confif = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};
