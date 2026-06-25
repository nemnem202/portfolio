import { useEffect, useRef, useState } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import Title from "../atoms/title";
import SocialButton from "../kokonutui/social-buttons";
import Section, { SectionContent } from "../layout/section";
export default function ContacSection() {
  return (
    <Section id="contacts">
      <SectionContent className="flex gap-12">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-end">
            <p className="max-w-2xl">
              Velit cupidatat commodo adipisicing est consequat mollit veniam mollit deserunt ad
              consequat cillum labore dolor. Tempor ullamco in aute deserunt irure proident laboris
              nostrud magna officia. Consectetur cillum aute elit mollit. Et enim eu ad pariatur.
            </p>
            <div className="flex gap-2">
              <SocialButton />
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <Form />
        </div>
      </SectionContent>
      <Title>Contact</Title>
    </Section>
  );
}

("use client");

type FormData = {
  firstname: string;
  email: string;
  subject: string;
  message: string;
};

type Step = "firstname" | "email" | "subject" | "message" | "confirm" | "submitted";

export function Form() {
  const [step, setStep] = useState<Step>("firstname");
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [currentValue, setCurrentValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Garde le focus sur l'input du terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = currentValue.trim();

      if (step === "firstname" && value) {
        setFormData((prev) => ({ ...prev, firstname: value }));
        setCurrentValue("");
        setStep("email");
      } else if (step === "email" && value) {
        setFormData((prev) => ({ ...prev, email: value }));
        setCurrentValue("");
        setStep("subject");
      } else if (step === "subject" && value) {
        setFormData((prev) => ({ ...prev, subject: value }));
        setCurrentValue("");
        setStep("message");
      } else if (step === "message" && value) {
        setFormData((prev) => ({ ...prev, message: value }));
        setCurrentValue("");
        setStep("confirm");
      } else if (step === "confirm") {
        const choice = value.toLowerCase();
        if (choice === "y" || choice === "yes" || choice === "") {
          // Envoyer les données ici (API, etc.)
          console.log("Données soumises :", formData);
          setStep("submitted");
        } else {
          // Reset si l'utilisateur refuse
          setStep("firstname");
          setFormData({ firstname: "", email: "", subject: "", message: "" });
          setCurrentValue("");
        }
      }
    }
  };

  return (
    // sequence={false} évite que Magic UI bloque l'affichage de nos composants dynamiques
    <Terminal sequence={false} className="font-mono text-left shadow-2xl">
      {/* --- En-tête de bienvenue --- */}
      <AnimatedSpan className="text-muted-foreground mb-2">
        # Initialisation du formulaire de contact CLI...
      </AnimatedSpan>

      {/* --- ÉTAPE : Prénom --- */}
      {formData.firstname && (
        <div className="text-emerald-400">✔ Prénom : {formData.firstname}</div>
      )}
      {step === "firstname" && (
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">➜ prénom</span>
          <span className="text-muted-foreground">❯</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-foreground flex-1"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Votre prénom..."
            autoFocus
          />
        </div>
      )}

      {/* --- ÉTAPE : Email --- */}
      {formData.email && <div className="text-emerald-400">✔ Email : {formData.email}</div>}
      {step === "email" && (
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">➜ email</span>
          <span className="text-muted-foreground">❯</span>
          <input
            ref={inputRef}
            type="email"
            className="bg-transparent border-none outline-none text-foreground flex-1"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="votre@email.com"
          />
        </div>
      )}

      {/* --- ÉTAPE : Objet --- */}
      {formData.subject && <div className="text-emerald-400">✔ Objet : {formData.subject}</div>}
      {step === "subject" && (
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">➜ objet</span>
          <span className="text-muted-foreground">❯</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-foreground flex-1"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Sujet de votre message"
          />
        </div>
      )}

      {/* --- ÉTAPE : Message --- */}
      {formData.message && <div className="text-emerald-400">✔ Message : {formData.message}</div>}
      {step === "message" && (
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">➜ message</span>
          <span className="text-muted-foreground">❯</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-foreground flex-1"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Écrivez votre message..."
          />
        </div>
      )}

      {/* --- ÉTAPE : Validation Finale --- */}
      {step === "confirm" && (
        <div className="mt-4 border-t border-border pt-4 grid gap-1">
          <div className="text-amber-400 font-bold">⚠️ Récapitulatif de votre message :</div>
          <div className="pl-4 text-muted-foreground">
            <div>
              <span className="text-foreground font-semibold">Prénom :</span> {formData.firstname}
            </div>
            <div>
              <span className="text-foreground font-semibold">Email :</span> {formData.email}
            </div>
            <div>
              <span className="text-foreground font-semibold">Objet :</span> {formData.subject}
            </div>
            <div>
              <span className="text-foreground font-semibold">Message :</span> {formData.message}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-primary font-bold">Soumettre ce formulaire ? (Y/n)</span>
            <span className="text-muted-foreground">❯</span>
            <input
              ref={inputRef}
              type="text"
              className="bg-transparent border-none outline-none text-foreground w-12 font-bold"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Y"
              maxLength={3}
            />
          </div>
        </div>
      )}

      {/* --- ÉTAPE : Succès --- */}
      {step === "submitted" && (
        <div className="mt-4 p-2 bg-primary/10 border border-primary/30 rounded text-center">
          <AnimatedSpan className="text-primary font-bold">
            🚀 Succès ! Message envoyé avec succès. Merci {formData.firstname} !
          </AnimatedSpan>
        </div>
      )}
    </Terminal>
  );
}
