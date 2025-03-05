import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  experiencia: string;
  curriculo: File | null;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  cargo?: string;
  curriculo?: string;
}

const WorkWithUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    experiencia: "",
    curriculo: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido";
      isValid = false;
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
      isValid = false;
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = "Cargo pretendido é obrigatório";
      isValid = false;
    }

    if (!formData.curriculo) {
      newErrors.curriculo = "Currículo é obrigatório";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      curriculo: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      const response = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setSubmitStatus({
        success: true,
        message:
          "Currículo enviado com sucesso! Entraremos em contato em breve.",
      });

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        cargo: "",
        experiencia: "",
        curriculo: null,
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Erro ao enviar currículo. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormField = ({
    label,
    name,
    type = "text",
    value,
    error,
    placeholder,
    onChange,
    accept,
  }: any) => (
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-1">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          accept={accept}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow mt-28 md:mt-32 lg:mt-36">
        <section className="py-8 md:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 pb-2 border-b-2 border-primary inline-block">
              TRABALHE CONOSCO
            </h1>

            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <p className="text-gray-700 mb-6">
                Estamos sempre em busca de profissionais talentosos para se
                juntar à nossa equipe. Se você está interessado em fazer parte
                da FN Agenciamentos Marítimos, preencha o formulário abaixo.
              </p>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    label="Nome Completo *"
                    name="nome"
                    value={formData.nome}
                    error={errors.nome}
                    placeholder="Seu nome completo"
                    onChange={handleChange}
                  />

                  <FormField
                    label="E-mail *"
                    name="email"
                    type="email"
                    value={formData.email}
                    error={errors.email}
                    placeholder="seu.email@exemplo.com"
                    onChange={handleChange}
                  />

                  <FormField
                    label="Telefone *"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    error={errors.telefone}
                    placeholder="(00) 00000-0000"
                    onChange={handleChange}
                  />

                  <FormField
                    label="Cargo Pretendido *"
                    name="cargo"
                    value={formData.cargo}
                    error={errors.cargo}
                    placeholder="Cargo desejado"
                    onChange={handleChange}
                  />
                </div>

                <FormField
                  label="Experiência Profissional"
                  name="experiencia"
                  type="textarea"
                  value={formData.experiencia}
                  placeholder="Descreva brevemente sua experiência profissional"
                  onChange={handleChange}
                />

                <FormField
                  label="Currículo (PDF, DOC ou DOCX) *"
                  name="curriculo"
                  type="file"
                  error={errors.curriculo}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 md:px-6 py-2 md:py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      "Enviar Currículo"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WorkWithUs;
