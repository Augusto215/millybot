"use client";

import Image from "next/image";
import { useState } from "react";

const TELEGRAM_URL = "https://t.me/millyfariabot";

// TODO: update with real prices when provided
const PLANS = [
  { id: "monthly", label: "1 MONTH", price: "—", note: "Normal price —/month" },
  { id: "quarterly", label: "3 MONTHS", badge: "15% OFF", price: "—", note: "Total —" },
];

const STATS = [
  { value: "308", label: "Posts" },
  { value: "418", label: "Photos" },
  { value: "37", label: "Videos" },
  { value: "1.14M", label: "Likes" },
];

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#00aff0]">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
      <path d="M17 11V7A5 5 0 007 7v4H5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1v-9a1 1 0 00-1-1h-2zm-5 5.73V18a1 1 0 11-2 0v-1.27a1.5 1.5 0 112 0zM9 11V7a3 3 0 116 0v4H9z" />
    </svg>
  );
}

function LockedThumb() {
  return (
    <div className="relative aspect-square overflow-hidden bg-neutral-200">
      <Image
        src="/milly.jpg"
        alt=""
        fill
        className="object-cover blur-2xl brightness-[0.45] scale-110"
        sizes="(max-width: 768px) 33vw, 200px"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white/90">
        <LockIcon />
      </div>
    </div>
  );
}

function PlanButton({
  label,
  price,
  badge,
}: {
  label: string;
  price: string;
  badge?: string;
}) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#00aff0] hover:bg-[#0099d4] active:scale-[0.98] transition-all text-white font-bold text-sm shadow-lg shadow-[#00aff0]/20 select-none"
    >
      <span className="flex items-center gap-2">
        {label}
        {badge && (
          <span className="text-[10px] font-extrabold bg-white/20 px-1.5 py-0.5 rounded-md tracking-wide">
            {badge}
          </span>
        )}
      </span>
      <span>{price}</span>
    </a>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"posts" | "media">("posts");

  return (
    <div className="flex min-h-screen max-w-[1280px] mx-auto">

      {/* ── Left sidebar ── */}
      <nav className="w-[72px] shrink-0 sticky top-0 h-screen bg-white border-r border-neutral-100 flex flex-col items-center py-6 gap-6">
        {[
          {
            label: "Home",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
          },
          {
            label: "More",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
                <circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" />
              </svg>
            ),
          },
        ].map((item) => (
          <button key={item.label} className="flex flex-col items-center gap-1 group">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-700 transition-all">
              {item.icon}
            </span>
            <span className="text-[10px] text-neutral-400 group-hover:text-neutral-600 transition-colors leading-tight">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* ── Main feed ── */}
      <main className="flex-1 min-w-0 bg-white border-r border-neutral-100">

        {/* Banner */}
        <div className="relative w-full h-52 bg-gradient-to-br from-pink-100 to-rose-100 overflow-hidden">
          <Image
            src="/milly.jpg"
            alt="Banner"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 900px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>

        {/* Profile header */}
        <div className="px-5 pb-5 border-b border-neutral-100">
          <div className="-mt-12 mb-3">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full border-[3px] border-white overflow-hidden shadow-xl">
                <Image
                  src="/milly.jpg"
                  alt="Milly Faria"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-lg font-bold text-neutral-900">
            Milly Faria
            <VerifiedIcon />
          </div>
          <div className="flex items-center gap-2 mt-0.5 text-sm">
            <span className="text-neutral-400">@millyfaria</span>
            <span className="text-emerald-500 font-semibold text-xs">• Available now</span>
          </div>

          <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
            here you&apos;ll see my most <strong>SPICY</strong> side 🌶️<br />
            come find out why I&apos;m{" "}
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#00aff0] hover:underline font-semibold">
              #1 here
            </a>{" "}
            👅✨
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {STATS.map((s) => (
              <span key={s.label} className="text-sm text-neutral-500">
                <strong className="text-neutral-900 font-semibold">{s.value}</strong> {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Subscription block ── */}
        <div className="px-5 py-5 border-b border-neutral-100 space-y-4">
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-neutral-400">
            Subscription
          </p>
          <p className="text-[15px] font-bold text-neutral-900 leading-snug">
            Limited offer: 50% off the first 30 days!
          </p>

          <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-neutral-100 shadow-sm">
              <Image src="/milly.jpg" alt="" width={36} height={36} className="object-cover" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              MY BIGGEST SALE EVER!!! only for the next 100 subscribers{" "}
              <span className="font-semibold">(9/100 remaining)</span> 🚨🚨 #1 here for a reason 😏
            </p>
          </div>

          <div className="space-y-2">
            {PLANS.map((plan) => (
              <div key={plan.id} className="space-y-1">
                <PlanButton label={plan.label} price={plan.price} badge={plan.badge} />
                <p className="text-xs text-neutral-400 pl-1">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-b border-neutral-100">
          {(["posts", "media"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3.5 text-[11px] font-bold tracking-[0.1em] uppercase transition-all ${
                activeTab === tab
                  ? "text-neutral-900 border-b-2 border-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {tab === "posts" ? "308 Posts" : "455 Media"}
            </button>
          ))}
        </div>

        {/* ── Locked grid ── */}
        <div className="grid grid-cols-3 gap-px bg-neutral-100">
          {Array.from({ length: 6 }).map((_, i) => (
            <LockedThumb key={i} />
          ))}
        </div>

        {/* Counter bar */}
        <div className="flex items-center gap-4 px-5 py-3 border-t border-neutral-100 text-xs text-neutral-400">
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            308
          </span>
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            418
          </span>
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
              <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            37
          </span>
          <span className="ml-auto flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </span>
        </div>
      </main>

      {/* ── Right sidebar ── */}
      <aside className="w-[300px] shrink-0 hidden lg:block bg-[#f5f5f5]">
        <div className="sticky top-5 p-5 flex flex-col gap-5">
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 space-y-4">
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-neutral-400">
            Subscription
          </p>
          <p className="text-sm font-bold text-neutral-900">
            Limited offer: 50% off the first 30 days!
          </p>

          <div className="flex gap-2.5 items-start">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-neutral-100">
              <Image src="/milly.jpg" alt="" width={32} height={32} className="object-cover" />
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              MY BIGGEST SALE EVER!!! only for the next 100 subscribers (9/100 remaining) 🚨🚨 #1 here for a reason 😏
            </p>
          </div>

          <div className="space-y-2">
            {PLANS.map((plan) => (
              <a
                key={plan.id}
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#00aff0] hover:bg-[#0099d4] active:scale-[0.98] transition-all text-white font-bold text-xs shadow-md shadow-[#00aff0]/20 select-none"
              >
                <span className="flex items-center gap-2">
                  {plan.label}
                  {plan.badge && (
                    <span className="text-[9px] font-extrabold bg-white/20 px-1.5 py-0.5 rounded-md">
                      {plan.badge}
                    </span>
                  )}
                </span>
                <span>{plan.price}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-400">
          {["Privacy", "Cookie Policy", "Terms of Service"].map((t) => (
            <a key={t} href="#" className="hover:text-neutral-600 hover:underline transition-colors">
              {t}
            </a>
          ))}
        </div>
        </div>
      </aside>

      {/* ── Logged-in avatar (fixed bottom-right) ── */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group cursor-pointer">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl font-medium">
          Logged in as Milly
        </span>
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-2xl ring-2 ring-[#00aff0]/40 hover:ring-[#00aff0]/80 transition-all">
            <Image
              src="/milly.jpg"
              alt="Logged in as Milly"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
        </div>
      </div>

    </div>
  );
}
