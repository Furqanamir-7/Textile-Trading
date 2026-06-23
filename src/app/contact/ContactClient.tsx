"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface FormData {
  name: string;
  company: string;
  country: string;
  productInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  country?: string;
  productInterest?: string;
  message?: string;
}

export default function ContactClient() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    country: "",
    productInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.productInterest) e.productInterest = "Please select a product";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="grid min-h-screen md:grid-cols-[40%_60%]">
      <div className="bg-dark px-8 py-32 text-white md:px-12">
        <SectionLabel label="Contact" light />
        <h1 className="font-display text-4xl font-bold">PremiumYarn Co.</h1>
        <div className="mt-12 space-y-6 text-white/70">
          <p>123 Industrial Estate, Ferozepur Road</p>
          <p>Lahore, Pakistan 54000</p>
          <p>+92 42 123 4567</p>
          <p>info@premiumyarn.com</p>
          <p className="pt-4 text-sm">Mon – Fri: 9:00 AM – 6:00 PM PKT</p>
        </div>
      </div>

      <div className="bg-bg px-8 py-32 md:px-12">
        {submitted ? (
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-3xl font-bold text-heading">Thank you!</h2>
            <p className="mt-4 text-muted">We&apos;ll respond within 24 hours.</p>
          </div>
        ) : (
          <div className="mx-auto max-w-lg">
            <SectionLabel label="Send Inquiry" />
            <h2 className="font-display text-3xl font-bold text-heading">Get in touch</h2>

            <div className="mt-8 space-y-6">
              {(
                [
                  { key: "name", label: "Name", type: "text" },
                  { key: "company", label: "Company", type: "text" },
                  { key: "country", label: "Country", type: "text" },
                ] as const
              ).map((field) => (
                <div key={field.key}>
                  <label htmlFor={field.key} className="text-sm font-medium text-heading">
                    {field.label}
                  </label>
                  <input
                    id={field.key}
                    type={field.type}
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-heading outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <AnimatePresence>
                    {errors[field.key] && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors[field.key]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div>
                <label htmlFor="productInterest" className="text-sm font-medium text-heading">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  value={form.productInterest}
                  onChange={(e) => update("productInterest", e.target.value)}
                  className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-heading outline-none focus:border-primary"
                >
                  <option value="">Select a product</option>
                  <option value="Yarn">Yarn</option>
                  <option value="Fabrics">Fabrics</option>
                  <option value="Home Textile">Home Textile</option>
                  <option value="Garments">Garments</option>
                </select>
                <AnimatePresence>
                  {errors.productInterest && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.productInterest}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-heading">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-heading outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <MagneticButton onClick={handleSubmit} className={loading ? "opacity-70" : ""}>
                {loading ? "Sending..." : "Submit Inquiry"}
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
