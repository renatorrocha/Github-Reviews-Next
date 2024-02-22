import ActionsComponent from "@/components/actionsComponent";
import AvatarComponent from "@/components/avatarComponent";
import ButtonSignOut from "@/components/buttonSignOut";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function page() {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);

  const response = await fetch(
    `https://api.github.com/users/${session?.user.username}`,
  );

  const data = await response.json();

  return (
    <main className=" mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center ">
      <div className="space-y-12">
        <section className="flex flex-col items-center gap-8">
          <AvatarComponent />

          <section className="flex flex-col items-center gap-6">
            <p className="text-center text-4xl leading-none md:text-5xl">
              Boas vindas,{" "}
              <span className="block font-bold md:inline">
                {session?.user?.name}
              </span>
            </p>
            <p className="text-xl font-light">
              Que tal analisarmos seu GitHub?
            </p>
          </section>
        </section>

        <section className="mx-auto flex w-full flex-col items-center gap-12">
          <section className="flex w-full flex-col gap-4">
            <ActionsComponent
              name="Repositórios"
              total={data.public_repos}
              href={`https://github.com/${session?.user.username}?tab=repositories`}
            />

            <ActionsComponent
              name="Gist"
              total={data.public_gists}
              href={`https://gist.github.com/${session?.user.username}`}
            />

            <ActionsComponent
              name="Seguidores"
              total={data.followers}
              href={`https://github.com/${session?.user.username}?tab=followers`}
            />
          </section>

          <ButtonSignOut />
        </section>
      </div>
    </main>
  );
}
