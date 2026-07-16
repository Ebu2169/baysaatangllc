import { cookies } from "next/headers";

export const ADMIN_COOKIE = "bt_admin";

/** Returns true when the current request carries a valid admin session cookie. */
export async function isAdminAuthenticated(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return Boolean(token) && token === password;
}
