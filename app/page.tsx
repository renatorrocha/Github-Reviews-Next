import ButtonComponent from "@/components/buttonComponent";

export default function Login() {
  return (
    <main className="login-mobile-background md:login-desktop-background  w-full max-w-screen-2xl flex h-screen mx-auto flex-col items-center bg-bottom bg-no-repeat px-4 md:justify-center md:bg-left-bottom md:px-14 xl:px-36">
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

      <ButtonComponent
        text="Login com Github"
        href="/dashboard"
        isLogin={true}
      />
    </main>
  );
}
