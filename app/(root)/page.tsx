import { Button } from "@base-ui/react";

import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1>Welcome to the world of Next.js</h1>
      {/* <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form> */}
    </div>
  );
};

export default Home;
