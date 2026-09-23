"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Breadcrumb from "@/components/Breadcrumb";
import { WhatsAppCTA, PhoneCTA } from "@/components/CTAButtons";

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

  return (
    <>
      <section className="bg-[#1b0d12] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: "İletişim" }]} dark />
          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">
              REZERVASYON VE DESTEK
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mt-2 mb-4 leading-tight">
              İletişim
            </h1>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Randevu, fiyat ve müsaitlik bilgisi için bize WhatsApp üzerinden veya telefonla dilediğiniz an ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">BİLGİLER</span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1 mb-4">
                  Bize Kolayca Ulaşın
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Günün her anında WhatsApp veya telefon ile doğrudan iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "İşletme", value: siteConfig.brandName },
                  { label: "Bölge", value: siteConfig.address.full },
                  { label: "Telefon", value: siteConfig.phone, href: siteConfig.phoneTel },
                  {
                    label: "WhatsApp",
                    value: siteConfig.whatsapp,
                    href: `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`,
                    external: true,
                  },
                  { label: "Çalışma Saatleri", value: siteConfig.workingHours.full },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-bold text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <WhatsAppCTA location="contact_page" variant="primary" className="h-14 px-8 text-base">
                  WhatsApp&apos;tan Randevu Al
                </WhatsAppCTA>
                <PhoneCTA location="contact_page" variant="outline-dark" className="h-14 px-6 text-sm">
                  Hemen Ara: {siteConfig.phone}
                </PhoneCTA>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">HIZLI TALEP</span>
              <h3 className="text-2xl font-black text-gray-900 mt-1 mb-6">
                Randevu & Bilgi Formu
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı girin"
                    className="w-full bg-[#fcf8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05xx xxx xx xx"
                    className="w-full bg-[#fcf8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    İlgilendiğiniz Masaj Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#fcf8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary transition-all"
                  >
                    <option value="">Seçiniz</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Tavsiye İstiyorum">Tavsiye İstiyorum</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Tercih Edilen Saat
                  </label>
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="text"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="Örn: Bugün 20:00"
                    className="w-full bg-[#fcf8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Ek Notunuz
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Belirtmek istediğiniz özel bir durum..."
                    className="w-full bg-[#fcf8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  * Formu gönderdiğinizde bilgileriniz otomatik olarak WhatsApp mesajına dönüştürülüp açılacaktır.
                </p>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-sm tracking-wide shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
                >
                  WhatsApp ile Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
