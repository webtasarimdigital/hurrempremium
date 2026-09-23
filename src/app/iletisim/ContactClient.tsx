"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    preferredTime: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Hürrem Premium.\nAdım: ${formData.name}\nTelefon: ${formData.phone}\nHizmet: ${formData.service || "Belirtilmedi"}\nTercih edilen saat: ${formData.preferredTime || "Belirtilmedi"}\nNot: ${formData.note || "Yok"}`;

    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "contact_form_submit" });
    }

    window.open(
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <>
      <section className="bg-brand-dark pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "İletişim" }]} dark />
          <div className="mt-8 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-cream-light font-light mb-5">
              İletişim
            </h1>
            <p className="text-brand-cream/60 leading-relaxed text-lg">
              Randevu, fiyat ve müsaitlik bilgisi için bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Bilgiler</span>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  { label: "İşletme Adı", value: siteConfig.brandName },
                  { label: "Adres", value: siteConfig.address.full },
                  { label: "Telefon", value: siteConfig.phone, href: siteConfig.phoneTel },
                  { label: "WhatsApp", value: siteConfig.whatsapp, href: whatsappHref, external: true },
                  { label: "E-posta", value: siteConfig.email, href: siteConfig.emailHref },
                  { label: "Çalışma Saatleri", value: siteConfig.workingHours.full },
                  { label: "Hizmet Bölgesi", value: siteConfig.address.serviceArea },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 py-4 border-b border-brand-text/8">
                    <span className="text-xs text-brand-gold uppercase tracking-wider w-36 flex-shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-brand-text-secondary hover:text-brand-text transition-colors text-sm break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-brand-text-secondary text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-medium px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ event: "whatsapp_click", location: "contact_page" });
                    }
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp&apos;tan Randevu Al
                </a>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-brand-gold/40 text-brand-gold font-medium px-7 py-4 text-sm hover:bg-brand-gold/10 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Randevu Formu</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                    Adınız <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Adınızı girin"
                    className="w-full bg-white border border-brand-text/15 px-4 py-3 text-brand-text placeholder-brand-text-secondary/50 focus:outline-none focus:border-brand-gold transition-colors"
                    style={{ fontSize: "16px" }}
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).dataLayer) {
                        (window as any).dataLayer.push({ event: "contact_form_start" });
                      }
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">Telefon</label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={formData.phone} onChange={handleChange}
                    placeholder="05xx xxx xx xx"
                    className="w-full bg-white border border-brand-text/15 px-4 py-3 text-brand-text placeholder-brand-text-secondary/50 focus:outline-none focus:border-brand-gold transition-colors"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-text mb-2">İlgilendiğiniz Hizmet</label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className="w-full bg-white border border-brand-text/15 px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    <option value="">Masaj türü seçin</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Bilmiyorum / Danışmak istiyorum">Bilmiyorum / Danışmak istiyorum</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-text mb-2">Tercih Edilen Saat</label>
                  <input
                    id="preferredTime" name="preferredTime" type="text"
                    value={formData.preferredTime} onChange={handleChange}
                    placeholder="Örn: Bu akşam 20:00"
                    className="w-full bg-white border border-brand-text/15 px-4 py-3 text-brand-text placeholder-brand-text-secondary/50 focus:outline-none focus:border-brand-gold transition-colors"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-brand-text mb-2">Not</label>
                  <textarea
                    id="note" name="note" rows={4}
                    value={formData.note} onChange={handleChange}
                    placeholder="Eklemek istediğiniz notlar..."
                    className="w-full bg-white border border-brand-text/15 px-4 py-3 text-brand-text placeholder-brand-text-secondary/50 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  Formu göndererek WhatsApp&apos;a yönlendirileceksiniz. Form bilgileriniz otomatik olarak mesaj haline getirilir.
                </p>

                <button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-dark font-medium py-4 text-sm tracking-wide hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp&apos;tan Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
