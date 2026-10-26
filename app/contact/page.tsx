"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  ShieldAlert,
  Send,
} from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";
import { ContactButtons } from "@/components/ContactButtons";
import { CTASection } from "@/components/CTASection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "Pooja Flowers",
    pickupTime: "Morning (5:30 AM - 9:00 AM)",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validate Name (2 to 60 characters)
    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    } else if (trimmedName.length > 60) {
      newErrors.name = "Name must be under 60 characters.";
    }

    // Validate Phone (Indian 10-digit format starting with 6, 7, 8, 9)
    let cleanPhone = formData.phone.trim().replace(/[\s\-\(\)]/g, "");
    if (cleanPhone.startsWith("+91")) {
      cleanPhone = cleanPhone.slice(3);
    } else if (cleanPhone.startsWith("91") && cleanPhone.length === 12) {
      cleanPhone = cleanPhone.slice(2);
    } else if (cleanPhone.startsWith("0") && cleanPhone.length === 11) {
      cleanPhone = cleanPhone.slice(1);
    }

    const junkNumbers = ["0000000000", "1234567890", "9999999999", "1111111111"];
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    } else if (junkNumbers.includes(cleanPhone)) {
      newErrors.phone = "Please enter a valid personal mobile number.";
    }

    if (formData.message && formData.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const compiledMessage = `Hi Shree Ganesh Flowers,\n\nI would like to place an enquiry:\n- Name: ${trimmedName}\n- Phone: ${cleanPhone}\n- Occasion: ${formData.occasion}\n- Pickup Slot: ${formData.pickupTime}\n${
      formData.message.trim() ? `- Notes: ${formData.message.trim()}\n` : ""
    }\nPlease confirm availability and total amount to pay at pickup.`;

    const whatsappRedirectUrl = getWhatsAppUrl(compiledMessage);
    window.open(whatsappRedirectUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Compact Page Header */}
      <section className="bg-gradient-to-b from-[#F1EBFF] via-[#F1EBFF]/50 to-[#FCFAFF] border-b border-[#E2D5FF] py-12 md:py-16">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-[#746781]">
              <li>
                <Link href="/" className="hover:text-[#291638] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#B99AFF]" />
              </li>
              <li className="font-bold text-[#291638]" aria-current="page">
                Contact & Location
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_8px_#D5FF32]" />
            <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
              PUNE TEMPLE FLORIST
            </span>
          </div>
          <h1 className="text-h1 font-heading text-[#291638] mb-3">
            Contact our shop & visit in Pune
          </h1>
          <p className="text-intro text-[#746781]">
            We are open early from 5:30 AM for morning temple poojas. Message us on WhatsApp or call before you visit.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="site-section bg-[#FCFAFF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: 6 cols — Contact Info Card & Action Buttons */}
            <div className="lg:col-span-6 space-y-8">
              <div className="site-card-info p-6 md:p-8 space-y-6 bg-[#FCFAFF]">
                {/* Live Status Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E2D5FF]">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#291638] block">
                      CURRENT SHOP STATUS
                    </span>
                    <h2 className="font-heading text-xl text-[#291638] mt-0.5">
                      Early Morning Hours
                    </h2>
                  </div>
                  <OpenStatusBadge compact />
                </div>

                {/* Details List */}
                <div className="space-y-5 text-sm md:text-base">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] flex items-center justify-center flex-shrink-0 border border-[#E2D5FF] shadow-xs">
                      <MapPin className="w-5 h-5 text-[#291638]" />
                    </div>
                    <div>
                      <strong className="text-[#291638] block font-bold mb-0.5">
                        Shop Address:
                      </strong>
                      <p className="text-[#746781] leading-relaxed">
                        {siteContent.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] flex items-center justify-center flex-shrink-0 border border-[#E2D5FF] shadow-xs">
                      <Phone className="w-5 h-5 text-[#291638]" />
                    </div>
                    <div>
                      <strong className="text-[#291638] block font-bold mb-0.5">
                        Phone Call:
                      </strong>
                      <a
                        href={`tel:${siteContent.contact.phoneTel}`}
                        className="text-[#291638] hover:text-[#B99AFF] font-semibold transition-colors"
                      >
                        {siteContent.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] flex items-center justify-center flex-shrink-0 border border-[#E2D5FF] shadow-xs">
                      <MessageCircle className="w-5 h-5 text-[#291638]" />
                    </div>
                    <div>
                      <strong className="text-[#291638] block font-bold mb-0.5">
                        WhatsApp Enquiries & Orders:
                      </strong>
                      <p className="text-[#746781] text-sm mb-1 font-medium">
                        {siteContent.contact.whatsappDisplay}
                      </p>
                      <span className="text-xs text-[#F49A24] font-bold">
                        Fastest way to check daily morning stock
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] flex items-center justify-center flex-shrink-0 border border-[#E2D5FF] shadow-xs">
                      <Clock className="w-5 h-5 text-[#291638]" />
                    </div>
                    <div>
                      <strong className="text-[#291638] block font-bold mb-0.5">
                        Operating Hours:
                      </strong>
                      <p className="text-[#291638] font-semibold">
                        {siteContent.contact.openingHoursDisplay} · Daily
                      </p>
                      <p className="text-xs text-[#746781] mt-1">
                        {siteContent.contact.morningNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Pickup Policy Box */}
                <div className="p-4 rounded-[14px] bg-[#F1EBFF] border border-[#E2D5FF] text-xs text-[#746781] space-y-1">
                  <div className="font-bold text-[#291638] flex items-center gap-1.5">
                    <span>Payment Policy:</span>
                  </div>
                  <p>{siteContent.contact.pickupPolicy}</p>
                </div>

                {/* Quick Action Button Group */}
                <div className="pt-2">
                  <ContactButtons />
                </div>
              </div>

              {/* Shopfront Atmosphere Photo */}
              <div className="shadow-md rounded-[20px] overflow-hidden border border-[#E2D5FF]">
                <SmartImage
                  src="/images/contact/shop-front.webp"
                  alt="Atmospheric entrance of Shree Ganesh Flowers stall near the temple in Pune"
                  ratio="4:3"
                  radius="lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: 6 cols — Validated WhatsApp Message Composer */}
            <div className="lg:col-span-6">
              <div className="site-card p-6 md:p-8 bg-[#FCFAFF]">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
                  <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
                    MESSAGE COMPOSER
                  </span>
                </div>
                <h2 className="font-heading text-2xl text-[#291638] mb-2 font-bold">
                  Prepare your order message
                </h2>
                <p className="text-sm text-[#746781] mb-6 leading-relaxed">
                  Fill in your details to create a clear message that opens directly in WhatsApp. You will review and send it yourself.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-bold text-[#291638] mb-1.5"
                    >
                      Your Name <span className="text-[#F49A24]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Joshi"
                      className={`w-full h-[48px] px-4 rounded-[12px] bg-[#FCFAFF] border ${
                        errors.name ? "border-red-500" : "border-[#E2D5FF]"
                      } text-[#291638] text-sm focus:outline-none focus:ring-2 focus:ring-[#B99AFF] focus:border-[#B99AFF]`}
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider font-bold text-[#291638] mb-1.5"
                    >
                      Mobile Phone (India 10-digits) <span className="text-[#F49A24]">*</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 98220 12345"
                      className={`w-full h-[48px] px-4 rounded-[12px] bg-[#FCFAFF] border ${
                        errors.phone ? "border-red-500" : "border-[#E2D5FF]"
                      } text-[#291638] text-sm focus:outline-none focus:ring-2 focus:ring-[#B99AFF] focus:border-[#B99AFF]`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Occasion Selection */}
                  <div>
                    <label
                      htmlFor="contact-occasion"
                      className="block text-xs uppercase tracking-wider font-bold text-[#291638] mb-1.5"
                    >
                      Select Occasion / Flower Type
                    </label>
                    <select
                      id="contact-occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full h-[48px] px-4 rounded-[12px] bg-[#FCFAFF] border border-[#E2D5FF] text-[#291638] text-sm focus:outline-none focus:ring-2 focus:ring-[#B99AFF] focus:border-[#B99AFF]"
                    >
                      <option value="Pooja Flowers">Daily Pooja Flowers (Loose marigolds, durva, hibiscus)</option>
                      <option value="Wedding Garlands">Wedding Garlands (Varmala) — 1 day in advance</option>
                      <option value="Bouquets">Hand-tied Bouquets (Gifting / Celebrations)</option>
                      <option value="Car Decoration">Car Decoration (Weddings & Festivities) — 1 day in advance</option>
                      <option value="Funeral Wreaths">Funeral Wreaths & Condolence Garlands</option>
                      <option value="General Flower Availability">General flower inquiry (What is fresh today?)</option>
                    </select>
                  </div>

                  {/* Pickup Slot Selection */}
                  <div>
                    <label
                      htmlFor="contact-pickup"
                      className="block text-xs uppercase tracking-wider font-bold text-[#291638] mb-1.5"
                    >
                      Preferred Pickup Timing
                    </label>
                    <select
                      id="contact-pickup"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full h-[48px] px-4 rounded-[12px] bg-[#FCFAFF] border border-[#E2D5FF] text-[#291638] text-sm focus:outline-none focus:ring-2 focus:ring-[#B99AFF] focus:border-[#B99AFF]"
                    >
                      <option value="Early Dawn (5:30 AM - 7:00 AM)">Early Dawn (5:30 AM – 7:00 AM) · Pre-darshan</option>
                      <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM – 11:00 AM)</option>
                      <option value="Afternoon (11:00 AM - 4:00 PM)">Afternoon (11:00 AM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM – 9:00 PM)</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wider font-bold text-[#291638] mb-1.5"
                    >
                      Specific Requirements (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. Need 2 varmala sets in red rose petals, pickup tomorrow at 7 AM"
                      className={`w-full p-4 rounded-[12px] bg-[#FCFAFF] border ${
                        errors.message ? "border-red-500" : "border-[#E2D5FF]"
                      } text-[#291638] text-sm focus:outline-none focus:ring-2 focus:ring-[#B99AFF] focus:border-[#B99AFF]`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Action: Unified Primary Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    id="submit-enquiry-btn"
                  >
                    <Send className="w-4 h-4 text-[#D5FF32]" />
                    <span>Open Message in WhatsApp</span>
                  </button>

                  {/* Privacy Notice */}
                  <div className="p-3.5 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] text-[11px] text-[#746781] flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#291638] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#291638]">Privacy notice:</strong> Nothing is stored or transmitted to external servers from this form. Clicking the button simply opens WhatsApp on your phone or computer with this message ready to send.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Store Visit Banner (Pale Lavender Panel) */}
      <section className="bg-[#F1EBFF] py-12 border-t border-[#E2D5FF]">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-eyebrow text-[#291638] block mb-1 font-bold">
              STORE VISITS IN PUNE
            </span>
            <h2 className="font-heading text-2xl text-[#291638]">
              Finding our stall near the temple
            </h2>
            <p className="text-sm text-[#746781] mt-1 max-w-xl">
              We are located directly along the main temple approach road in Pune [ADD EXACT TEMPLE & STREET ADDRESS]. Look for our fresh marigold baskets and garland displays.
            </p>
          </div>
          <a
            href={siteContent.contact.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            <MapPin className="w-4 h-4 text-[#D5FF32]" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </section>

      {/* Closing CTA Band */}
      <CTASection
        heading="Questions about today's fresh flowers?"
        subtext="Give us a call or send a quick WhatsApp message. We are ready at 5:30 AM every morning."
      />
    </div>
  );
}
