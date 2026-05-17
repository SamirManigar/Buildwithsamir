import { useState } from "react";
import { z } from "zod";
import { Mail, Github, ExternalLink, Send, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Stack";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (10+ chars)")
    .max(2000, "Message is too long"),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const flat: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!flat[k]) flat[k] = issue.message;
      }
      setErrors(flat);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert(parsed.data);
      if (error) throw error;
      setDone(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setServerError("Couldn't send your message. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let's build something"
            subtitle={`Based in ${PROFILE.location}. Available for high-impact AI / Full Stack roles, agency collaborations, and product builds.`}
          />
        </Reveal>

        <div className="mt-8 grid gap-8 sm:mt-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-2xl p-6 sm:p-8"
              noValidate
            >
              {done ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand/20 ring-1 ring-white/10">
                    <CheckCircle2 className="h-7 w-7 text-[var(--brand-blue)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Message sent</h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out — I'll get back to you within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDone(false)}
                    className="mt-2 text-sm text-[var(--brand-blue)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      id="name"
                      value={form.name}
                      onChange={onChange("name")}
                      error={errors.name}
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength={100}
                    />
                    <Field
                      label="Email"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                      error={errors.email}
                      placeholder="you@company.com"
                      autoComplete="email"
                      maxLength={255}
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={onChange("message")}
                      placeholder="Tell me about the project, role, or idea…"
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[var(--brand-blue)]/60 focus:bg-white/[0.07]"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {serverError && (
                    <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-blue)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </Reveal>

          {/* Direct links */}
          <Reveal delay={150}>
            <div className="space-y-3">
              <ContactLink
                href={`mailto:${PROFILE.email}`}
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={PROFILE.email}
              />
              <ContactLink
                href={PROFILE.github}
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
                value="github.com/SamirManigar"
                external
              />
              <ContactLink
                href={PROFILE.agency}
                icon={<ExternalLink className="h-5 w-5" />}
                label="Agency"
                value="aurionstack.dev"
                external
              />

              <div className="glass mt-6 rounded-2xl p-5 text-sm leading-relaxed text-muted-foreground">
                Prefer a quicker channel? Drop me a line by email and I'll usually
                respond within a day.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[var(--brand-blue)]/60 focus:bg-white/[0.07]"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand/20 text-foreground ring-1 ring-white/10">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
