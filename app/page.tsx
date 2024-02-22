import ButtonComponent from "@/components/buttonComponent";

export default function Login() {
  return (
    <main className="login-mobile-background md:login-desktop-background flex h-screen flex-col items-center bg-bottom bg-no-repeat px-4 md:justify-center md:bg-left-bottom md:px-14 xl:px-36">
      <div className="space-y-14 py-24">
        <h1 className="text-center text-[42px] leading-none text-text-dark md:text-[52px] lg:text-[64px] xl:text-[96px]">
          Desbloqueie o poder da{" "}
          <span className="font-medium lg:inline-block">Análise do GitHub</span>
        </h1>
        <p className="text-center text-text-medium md:text-xl lg:text-2xl">
          Eleve o desenvolvimento de software com análises automáticas do
          GitHub, revelando métricas e KPIs inestimáveis para aprimorar a
          entrega e a qualidade do software.
        </p>
      </div>
      <ButtonComponent text="Login com Github" />
    </main>
  );
}
