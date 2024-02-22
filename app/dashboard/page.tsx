import ActionsComponent from "@/components/actionsComponent";
import AvatarComponent from "@/components/avatarComponent";
import ButtonComponent from "@/components/buttonComponent";

export default function page() {
  return (
    <main className=" mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center ">
      <div className="space-y-12">
        <section className="flex flex-col items-center gap-8">
          <AvatarComponent
            url="https://github.com/renatorrocha.png"
            fallBack="RR"
          />

          <section className="flex flex-col items-center gap-6">
            <p className="text-center text-4xl leading-none md:text-5xl">
              Boas vindas,{" "}
              <span className="block font-bold md:inline">$Fulano de Tal</span>
            </p>
            <p className="text-xl font-light">
              Que tal analisarmos seu GitHub?
            </p>
          </section>
        </section>

        <section className="mx-auto flex w-full flex-col items-center gap-12">
          <section className="flex w-full flex-col gap-4">
            <ActionsComponent name="Repositórios" total={5} href="/" />

            <ActionsComponent name="Gist" total={5} href="/" />

            <ActionsComponent name="Seguidores" total={5} href="/" />
          </section>

          <ButtonComponent text="Logout" href="/" />
        </section>
      </div>
    </main>
  );
}
