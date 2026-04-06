"use client";

import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative group bg-white">
      <div className="absolute -top-36 -left-36 w-96 h-96 rounded-full bg-emerald-100 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -right-36 w-96 h-96 rounded-full bg-sky-100 opacity-30 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-white/0 transition-opacity opacity-0 group-focus-within:opacity-80 group-focus-within:backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600"><path d="M12 2v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.9 4.9l2.8 2.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.3 16.3l2.8 2.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-800">PhongTro123</h2>
          <p className="text-sm text-zinc-500 mt-1">Cần xác thực để truy cập hệ thống</p>
        </div>

        <form className="mt-4 space-y-5">
          <div>
            <label className="block text-xs text-zinc-600 mb-2">Tên đăng nhập</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="tendangnhap"
                className="w-full rounded-full border border-zinc-200 pl-11 pr-4 py-3 text-sm text-zinc-700 bg-white placeholder:text-zinc-300 outline-none focus:border-indigo-300 focus:shadow-md transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs text-zinc-600">Mật khẩu</label>
              <a href="#" className="text-xs text-emerald-600">Quên mật khẩu?</a>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Lock className="h-4 w-4" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-full border border-zinc-200 pl-11 pr-4 py-3 text-sm text-zinc-700 bg-white placeholder:text-zinc-300 outline-none focus:border-indigo-300 focus:shadow-md transition"
              />
            </div>
          </div>

          <button className="w-full mt-1 bg-zinc-900 text-white rounded-full py-3 font-semibold hover:brightness-95 transition">Đăng nhập</button>

          <div className="text-center mt-2">
            <span className="text-sm text-zinc-500">Bạn chưa có tài khoản? </span>
            <a href="/register" className="text-sm text-emerald-600 font-medium hover:underline">Tạo tài khoản</a>
          </div>
        </form>
      </div>
    </div>
  );
}
