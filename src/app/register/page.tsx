"use client";

import React from "react";
import { User, Mail, Lock } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative group bg-white">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-100 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sky-100 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-white/0 transition-opacity opacity-0 group-focus-within:opacity-80 group-focus-within:backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-2">
          <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600"><circle cx="12" cy="8" r="3" /><path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-2xl font-extrabold text-black tracking-tight">Tạo tài khoản</h2>
          <p className="text-sm text-zinc-400 mt-2">Đăng ký để quản lý tin đăng và thông tin</p>
        </div>

        <form className="mt-6 space-y-5">
          <div>
            <label className="block text-xs text-zinc-500 mb-3">Họ và tên</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <User className="h-4 w-4" />
              </div>
              <input type="text" placeholder="Họ và tên" className="w-full rounded-full border border-zinc-100 pl-11 pr-4 py-3 text-sm text-zinc-500 bg-white placeholder:text-zinc-300 outline-none focus:border-zinc-200 focus:shadow-sm transition" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-500 mb-3">Email</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Mail className="h-4 w-4" />
              </div>
              <input type="email" placeholder="email@domain.com" className="w-full rounded-full border border-zinc-100 pl-11 pr-4 py-3 text-sm text-zinc-500 bg-white placeholder:text-zinc-300 outline-none focus:border-zinc-200 focus:shadow-sm transition" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-500 mb-3">Mật khẩu</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Lock className="h-4 w-4" />
              </div>
              <input type="password" placeholder="••••••••" className="w-full rounded-full border border-zinc-100 pl-11 pr-4 py-3 text-sm text-zinc-500 bg-white placeholder:text-zinc-300 outline-none focus:border-zinc-200 focus:shadow-sm transition" />
            </div>
          </div>

          <button className="w-full mt-2 bg-emerald-600 text-white rounded-full py-3 font-semibold hover:brightness-95 transition">Tạo tài khoản</button>
        </form>
      </div>
    </div>
  );
}
