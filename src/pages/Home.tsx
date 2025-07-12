import logo from "@/assets/logo.svg";
import {
  AccordionContainer,
  Button,
  Checkbox,
  Input,
  RadioGroup,
  Select,
  Textarea,
} from "@/components";
import { Plus } from "lucide-react";

export const Home = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="p-20 overflow-auto">
        <img className="mb-10" src={logo} alt="Logo" />

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <Input label="Nome" placeholder="Informe seu nome" />
            <Input label="Cargo" placeholder="Informe seu cargo" />
            <Input label="E-mail" placeholder="email@email.com" />
            <Input label="Telefone" placeholder="(99) 99999-9999" />
            <Input label="Cidade" />
            <Input label="País" />
          </div>
          <Textarea label="Descrição" />

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-4 items-center">
              <span className="text-sm text-[#28293D] font-semibold">
                Experiência
              </span>
              <Button variant="ghost">
                <Plus /> Adicionar experiência
              </Button>
            </div>

            <AccordionContainer
              items={[
                {
                  value: "item-1",
                  title: "Software Developer, Septia",
                  subtitle: "Fev 2023 - Atualmente",
                  content: (
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <Input label="Cargo" placeholder="Informe o cargo" />
                        <Input
                          label="Empresa"
                          placeholder="Informe a empresa"
                        />
                      </div>
                      <Checkbox label="Trabalho nesse cargo atualmente" />
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <Input label="Início" placeholder="Mês" />
                        <Input placeholder="Ano" />
                        <Input label="Término" placeholder="Mês" />
                        <Input placeholder="Ano" />
                      </div>
                      <Textarea label="Descrição" />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-4 items-center">
              <span className="text-sm text-[#28293D] font-semibold">
                Formação acadêmica
              </span>
              <Button variant="ghost">
                <Plus /> Adicionar curso
              </Button>
            </div>

            <AccordionContainer
              items={[
                {
                  value: "item-1",
                  title: "Computer Engineering, Septia",
                  subtitle: "Fev 2023 - Jan 2025",
                  content: (
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <Input
                          label="Instituição de ensino"
                          placeholder="Informe a instituição"
                        />
                        <Input label="Curso" placeholder="Informe o curso" />
                        <Input label="Data de início" placeholder="Mês" />
                        <Input placeholder="Ano" />
                        <Input
                          label="Data de término (ou prevista)"
                          placeholder="Mês"
                        />
                        <Input placeholder="Ano" />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-4 items-center">
              <span className="text-sm text-[#28293D] font-semibold">
                Skills
              </span>
              <Button variant="ghost">
                <Plus /> Adicionar curso
              </Button>
            </div>

            <AccordionContainer
              items={[
                {
                  value: "item-1",
                  title: "Javascript",
                  subtitle: "Intermediário",
                  content: (
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <Input label="Skill" />
                      </div>

                      <RadioGroup
                        options={[
                          { label: "Expert", value: "Expert" },
                          { label: "Intermediário", value: "Intermediário" },
                          { label: "Básico", value: "Básico" },
                        ]}
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-4 items-center">
              <span className="text-sm text-[#28293D] font-semibold">
                Linguagens
              </span>
              <Button variant="ghost">
                <Plus /> Adicionar curso
              </Button>
            </div>

            <AccordionContainer
              items={[
                {
                  value: "item-1",
                  title: "Português",
                  subtitle: "A2",
                  content: (
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <Input label="Idioma" placeholder="Informe o idioma" />
                        <Select
                          label="Nível"
                          options={[{ label: "light", value: "light" }]}
                        />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </form>
      </div>
      <div className="bg-[#150B33] p-20">
        <div className="bg-white rounded-md">
          <h1 className="text-4xl">Ana Júlia, Software Developer</h1>
        </div>
      </div>
    </div>
  );
};
