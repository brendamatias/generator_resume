import logo from "@/assets/logo.svg";
import {
  AccordionContainer,
  Button,
  Checkbox,
  Input,
  Progress,
  RadioGroup,
  Select,
  Textarea,
} from "@/components";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export const Home = () => {
  const { register, watch } = useForm({
    defaultValues: {
      name: "Brenda Matias",
      role: "Software Developer",
      email: "email@email.com",
      phone: "81999999999",
      city: "Recife - PE",
      country: "Brasil",
    },
  });

  const [name, role, email] = watch(["name", "role", "email"]);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="p-20 overflow-auto">
        <img className="mb-10" src={logo} alt="Logo" />

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <Input
              label="Nome"
              placeholder="Informe seu nome"
              {...register("name")}
            />
            <Input
              label="Cargo"
              placeholder="Informe seu cargo"
              {...register("role")}
            />
            <Input
              label="E-mail"
              placeholder="email@email.com"
              {...register("email")}
            />
            <Input
              label="Telefone"
              placeholder="(99) 99999-9999"
              {...register("phone")}
            />
            <Input label="Cidade" {...register("city")} />
            <Input label="País" {...register("country")} />
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
      <div className="bg-[#150B33] p-20 overflow-hidden">
        <div className="bg-white rounded-md p-12 flex gap-10 h-full overflow-auto">
          <div className="flex flex-col gap-10 w-full">
            <h1 className="text-4xl font-bold">
              {name}, {role}
            </h1>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Profile</h2>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Experience</h2>
              <ul className="flex flex-col gap-5">
                {[1, 2, 3].map((item) => (
                  <li className="space-y-4" key={item}>
                    <div className="space-y-1">
                      <span className="text-[#9a9a9a] text-xs block">
                        February 2023 — Present
                      </span>
                      <strong className="font-bold text-sm">
                        Software Developer at Septia
                      </strong>
                    </div>
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-[317px]">
            <div className="space-y-2.5">
              <p className="text-sm">{email}</p>
              <p className="text-sm">Recife - PE</p>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Education</h2>
              <ul className="flex flex-col gap-5">
                {[1, 2].map((item) => (
                  <li className="space-y-1" key={item}>
                    <span className="text-[#9a9a9a] text-xs block">
                      February 2023 — Present
                    </span>
                    <strong className="font-bold text-sm">
                      Computer Engineering, Septia
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Skills</h2>
              <ul className="flex flex-col gap-5">
                {[1, 2].map((item) => (
                  <li className="space-y-1" key={item}>
                    <strong className="font-bold text-sm">Javascript</strong>
                    <Progress value={10} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Languages</h2>
              <ul className="flex flex-col gap-5">
                {[1, 2].map((item) => (
                  <li className="space-y-1" key={item}>
                    <strong className="font-bold text-sm">Portuguese</strong>
                    <Progress value={10} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
