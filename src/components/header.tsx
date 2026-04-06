"use client";

import Link from "next/link";
import {
  MapPin,
  Filter,
  Heart,
  UserPlus,
  LogIn,
  PlusCircle,
  Menu,
} from "lucide-react";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-zinc-600" />
            </button>

            <a href="#" className="flex flex-col leading-none select-none">
              <span className="flex items-end gap-1">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
                  PHONGTRO
                </span>
                <span className="text-3xl font-black italic text-orange-500">
                  123
                </span>
              </span>
              <span className="mt-1 text-[11px] text-zinc-500">
                Kênh thông tin phòng trọ số 1 Việt Nam
              </span>
            </a>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl items-center justify-center px-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MapPin className="h-4 w-4 text-zinc-400" />
              </div>
              <input
                type="search"
                aria-label="Tìm theo khu vực"
                placeholder="Hồ Chí Minh"
                className="w-full h-9 rounded-full bg-zinc-50 pl-10 pr-28 text-sm text-zinc-700 outline-none border border-zinc-200 placeholder-zinc-400 shadow-sm focus:bg-white focus:shadow-md focus:border-orange-300 transition-all"
              />
              <button className="absolute right-1 top-1 h-7 px-3 bg-white border border-zinc-200 rounded-full text-xs flex items-center gap-2 text-zinc-600 hover:shadow-sm">
                <Filter className="h-4 w-4 text-zinc-600" />
                <span className="hidden sm:inline text-zinc-700">Bộ lọc</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors"
              aria-label="Saved"
            >
              <Heart className="h-5 w-5" />
              <span className="text-sm">Tin đã lưu</span>
            </button>

            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/register"
                className="px-3 py-2 text-sm rounded-md hover:bg-zinc-50 text-zinc-700 flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>Đăng ký</span>
              </Link>
              <Link
                href="/login"
                className="px-3 py-2 text-sm rounded-md hover:bg-zinc-50 text-zinc-700 flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Đăng nhập</span>
              </Link>
            </div>

            <a
              href="#"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 transition-all"
            >
              <PlusCircle className="h-4 w-4" />{" "}
              <span className="hidden sm:inline">Đăng tin</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-10 items-center gap-16 text-sm text-zinc-700 font-semibold">
            <a href="#" className="text-orange-600 border-orange-500">
              Hồ Chí Minh
            </a>
            <a href="#" className="hover:text-orange-600">
              Hà Nội
            </a>
            <a href="#" className="hover:text-orange-600">
              Đà Nẵng
            </a>
            <a href="#" className="hover:text-orange-600">
              Bình Dương
            </a>
            <a href="#" className="hover:text-orange-600">
              Bài Đăng
            </a>
            <a href="#" className="hover:text-orange-600">
              Cẩm nang
            </a>
          </nav>
        </div>
      </div>

      <div className="md:hidden border-t border-zinc-100 bg-white p-2">
        <div className="relative flex items-center">
          <MapPin className="absolute left-3 h-4 w-4 text-zinc-400" />
          <input
            type="search"
            placeholder="Hồ Chí Minh"
            className="h-9 w-full rounded-full bg-white pl-9 pr-4 text-xs outline-none border border-zinc-200"
          />
          <button className="absolute right-2 top-1.5 h-7 px-3 bg-orange-500 text-white rounded-full text-sm flex items-center gap-2 hover:bg-orange-600">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
