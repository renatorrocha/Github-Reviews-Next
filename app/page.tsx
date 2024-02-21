import Button from "@/components/button";
import { GithubIcon } from "lucide-react";

export default function Login() {
  return (
    <main className="px-4 h-screen items-center flex flex-col pt-12">
      <div className="space-y-8">
        <h1 className="text-[42px] leading-none text-center text-text-dark">
          Desbloqueie o poder da{" "}
          <span className="font-medium">Análise do GitHub</span>
        </h1>
        <p className="text-center text-text-medium">
          Eleve o desenvolvimento de software com análises automáticas do
          GitHub, revelando métricas e KPIs inestimáveis para aprimorar a
          entrega e a qualidade do software.
        </p>
      </div>
      <Button text="teste" Icon={GithubIcon} />
    </main>
  );
}
