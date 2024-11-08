import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="font-fenix">Welcome desu</h1>
      <h1 className="font-league"> Welcome desu</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
        className="px-10 pt-[100px]"
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
}
