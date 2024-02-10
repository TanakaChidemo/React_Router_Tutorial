import { getContacts } from "./contacts";

export default async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
