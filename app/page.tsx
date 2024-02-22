import ButtonSignIn from "@/components/buttonSignIn";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/dashboard");

  return (
    <main className="login-mobile-background md:login-desktop-background  mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center bg-bottom bg-no-repeat px-4 md:justify-center md:bg-left-bottom md:px-14 xl:px-36">
      <div className="space-y-14 pb-12 pt-24">
        <h1 className="text-center text-3xl leading-none text-text-dark md:text-6xl lg:text-7xl xl:text-8xl">
          Desbloqueie o poder da{" "}
          <span className="font-medium md:inline-block">Análise do GitHub</span>
        </h1>

        <p className="text-center font-light text-text-medium md:text-xl lg:text-2xl">
          Eleve o desenvolvimento de software com análises automáticas do
          GitHub, revelando métricas e KPIs inestimáveis para aprimorar a
          entrega e a qualidade do software.
        </p>
      </div>

      <ButtonSignIn />
    </main>
  );
}
