"use client";

import { useMemo, useState } from "react";

type TabKey = "suggested" | "new" | "video";

export default function Home() {
  const listings = [
    {
      id: 1,
      tag: "suggested" as TabKey,
      title: "KÝ TÚC XÁ QUẬN 5 - BAO ĐIỆN NƯỚC, ĐỂ XE - GẦN ĐH SÀI GÒN 100M",
      price: "1.3 triệu/tháng",
      area: "20 m2",
      location: "Quận 5, Hồ Chí Minh",
      meta: "Homestay Hoang Phuc đã có các chi nhánh Quận 4, 5, 7, 8, 10 Kytucxa.com.vn – Chi nhánh Quận 5",
      author: "Hoang Phuc",
      time: "Hôm nay",
      phone: "0931313570",
      images: 4,
    },
    {
      id: 2,
      tag: "new" as TabKey,
      title:
        "NHÀ TRỌ CAO CẤP MỚI 100% NGAY THOẠI NGỌC HẦU - LŨY BÁN BÍCH - NGUYỄN SƠN",
      price: "3.4 triệu/tháng",
      area: "30 m2",
      location: "Tân Phú, Hồ Chí Minh",
      meta: "Cho thuê phòng trọ mới xây cao cấp ngay Thoại Ngọc Hầu - Lũy Bán Bích - Nguyễn Sơn",
      author: "Lê Hoàng Thiện",
      time: "Hôm nay",
      phone: "0904679891",
      images: 7,
    },
    {
      id: 3,
      tag: "video" as TabKey,
      title:
        "CHÍNH CHỦ CẦN CHO THUÊ PHÒNG TRỌ RỘNG RÃI, 15M2, THOÁNG MÁT, SẠCH SẼ",
      price: "3.5 triệu/tháng",
      area: "15 m2",
      location: "Quận 3, Hồ Chí Minh",
      meta: "Chính chủ cần cho thuê phòng trọ rộng rãi, 15m2, thoáng mát, sạch sẽ",
      author: "Nguyen Huu...",
      time: "Hôm nay",
      phone: "0834567059",
      images: 8,
    },
    {
      id: 4,
      tag: "suggested" as TabKey,
      title: "CHO THUÊ PHÒNG TRỌ CAO CẤP, SẠCH SẼ, THƠM, AN TOÀN",
      price: "3.7 triệu/tháng",
      area: "14 m2",
      location: "Quận 10, Hồ Chí Minh",
      meta: "Nhà sạch sẽ, thoáng mát, an toàn và văn minh. Nằm ngay khu vực trung tâm",
      author: "Vũ Thị Hoa",
      time: "Hôm nay",
      phone: "0983422460",
      images: 3,
    },
  ];

  const latest = [
    {
      id: 1,
      title: "Chính chủ cho thuê, căn hộ full nội thất trong khu dân cư",
      price: "4 triệu/tháng",
      time: "1 phút trước",
    },
    {
      id: 2,
      title: "Tìm nam ở ghép Kp Gò Vấp Dương Quảng Hàm",
      price: "2.5 triệu/tháng",
      time: "8 phút trước",
    },
    {
      id: 3,
      title: "87 YÊN XÁ, PHÙ HỢP Ở NHÓM BẠN, NGAY HỒ ẢN...",
      price: "3.5 triệu/tháng",
      time: "19 phút trước",
    },
    {
      id: 4,
      title: "Cho thuê phòng trọ tại Yên Xá, 3.2 triệu, 22 m2, nội thất đầy...",
      price: "3.2 triệu/tháng",
      time: "33 phút trước",
    },
    {
      id: 5,
      title: "NHÀ NGUYÊN CĂN 60M2 2 PN Ở ĐÔNG, NUÔI DC CHÓ...",
      price: "6 triệu/tháng",
      time: "36 phút trước",
    },
  ];

  const tabs: Array<{ key: TabKey; label: string }> = [
    { key: "suggested", label: "Đề xuất" },
    { key: "new", label: "Mới đăng" },
    { key: "video", label: "Có video" },
  ];

  const districtCards = [
    { id: 1, label: "Quận 1" },
    { id: 2, label: "Quận 2" },
    { id: 3, label: "Quận 3" },
    { id: 4, label: "Quận 4" },
    { id: 5, label: "Quận 5" },
    { id: 6, label: "Quận 6" },
    { id: 7, label: "Quận 7" },
    { id: 8, label: "Quận 8" },
    { id: 9, label: "Quận 9" },
    { id: 10, label: "Quận 10" },
    { id: 11, label: "Quận 11" },
    { id: 12, label: "Quận 12" },
  ];

  const schools = [
    "Trường Đại học Kinh tế Quốc dân",
    "Trường Đại học Bách Khoa TP. HCM",
    "Trường Đại học Xây dựng",
    "Học viện Ngân hàng TP. HCM",
    "Đại học Kiến trúc",
  ];

  const [activeTab, setActiveTab] = useState<TabKey>("suggested");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredListings = useMemo(
    () => listings.filter((item) => item.tag === activeTab),
    [activeTab, listings],
  );

  return (
    <div className="bg-[#fff7ef]">
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="mt-6 rounded-2xl bg-white border border-zinc-200 p-5 shadow-sm mb-10">
          {/* TOP FILTER */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {/* Nút mở filter */}
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-900 hover:bg-zinc-50 transition"
            >
              <span className="text-base">≡</span>
              <span className="font-medium">Bộ lọc</span>
            </button>

            {/* Tabs */}
            <div className="flex gap-2">
              <button className="rounded-full bg-zinc-900 text-white px-4 py-2 font-medium">
                Cho thuê
              </button>
              <button className="rounded-full bg-zinc-900 text-white px-4 py-2 font-medium">
                Phòng trọ
              </button>
            </div>

            {/* Filter chips */}
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-900">
              Giá thuê
            </button>
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-900">
              Diện tích
            </button>
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-900">
              Nội thất
            </button>
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-900">
              Đăng bởi
            </button>

            {/* Reset */}
            <button className="ml-auto text-sm text-red-500 hover:underline">
              Xóa tất cả
            </button>
          </div>

          {/* DIVIDER */}
          <div className="my-4 h-px bg-zinc-200" />

          {/* KHU VỰC */}
          <div>
            <p className="text-sm font-medium text-zinc-700 mb-2">
              <span className="inline-block h-2 w-2 rounded-full bg-pink-500 mr-2" />
              Khu vực
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "TP Hồ Chí Minh",
                "Bình Dương",
                "Bà Rịa - Vũng Tàu",
                "Hà Nội",
                "Đà Nẵng",
                "Gần tôi",
              ].map((item, index) => (
                <button
                  key={index}
                  className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-900"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* FILTER ĐANG ÁP DỤNG */}
          <div className="mt-4 flex flex-wrap gap-2">
            {/* ví dụ active */}
            <span className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-full text-sm text-zinc-900">
              Giá: 2tr - 5tr
              <button className="text-zinc-700 hover:text-zinc-900">✕</button>
            </span>

            <span className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-full text-sm text-zinc-900">
              TP.HCM
              <button className="text-zinc-700 hover:text-zinc-900">✕</button>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-zinc-700">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                aria-selected={isActive}
                className={
                  isActive
                    ? "text-orange-600 border-b-2 border-orange-500 pb-2"
                    : "hover:text-orange-600 pb-2"
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <button
              aria-label="Close filter"
              onClick={() => setIsFilterOpen(false)}
              className="absolute inset-0 bg-black/30"
            />
            <div className="relative z-10 w-full max-w-2xl max-h-[80vh] overflow-auto rounded-2xl bg-white shadow-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Bộ lọc</h3>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  className="h-8 w-8 rounded-full text-black"
                >
                  ✕
                </button>
              </div>

              <div className="px-6 py-5 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    Danh mục cho thuê
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {[
                      "Phòng trọ",
                      "Nhà riêng",
                      "Ở ghép",
                      "Mặt bằng",
                      "Căn hộ chung cư",
                      "Căn hộ mini",
                      "Căn hộ dịch vụ",
                    ].map((item, index) => (
                      <button
                        key={item}
                        className={
                          index === 0
                            ? "rounded-2xl border border-orange-500 text-orange-600 px-4 py-2"
                            : "rounded-2xl border border-zinc-200 text-zinc-900 px-4 py-2"
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    Lọc theo khu vực
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <select className="rounded-xl border border-orange-400 px-3 py-2 text-sm text-zinc-900">
                      <option>Hồ Chí Minh</option>
                    </select>
                    <select className="rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-900">
                      <option>Tất cả</option>
                    </select>
                    <select className="rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-900">
                      <option>Tất cả</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    Khoảng giá
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {[
                      "Tất cả",
                      "Dưới 1 triệu",
                      "1 - 2 triệu",
                      "2 - 3 triệu",
                      "3 - 5 triệu",
                      "5 - 7 triệu",
                      "7 - 10 triệu",
                      "10 - 15 triệu",
                      "Trên 15 triệu",
                    ].map((item, index) => (
                      <button
                        key={item}
                        className={
                          index === 0
                            ? "rounded-2xl border border-orange-500 text-orange-600 px-4 py-2"
                            : "rounded-2xl border border-zinc-200 text-zinc-900 px-4 py-2"
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    Khoảng diện tích
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {[
                      "Tất cả",
                      "Dưới 20m2",
                      "Từ 20m2 - 30m2",
                      "Từ 30m2 - 50m2",
                      "Từ 50m2 - 70m2",
                      "Từ 70m2 - 90m2",
                      "Trên 90m2",
                    ].map((item, index) => (
                      <button
                        key={item}
                        className={
                          index === 0
                            ? "rounded-2xl border border-orange-500 text-orange-600 px-4 py-2"
                            : "rounded-2xl border border-zinc-200 text-zinc-900 px-4 py-2"
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-zinc-200">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full rounded-xl bg-orange-500 text-white py-3 font-semibold"
                >
                  Ap dung
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {filteredListings.map((item, idx) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm"
              >
                <div className="grid gap-4 md:grid-cols-[360px_1fr]">
                  <div className="relative">
                    <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-2 h-60">
                      <div className="row-span-2 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300" />
                      <div className="rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300" />
                      <div className="rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300" />
                    </div>
                    <span className="absolute bottom-2 left-2 rounded-md bg-black/60 text-white text-xs px-2 py-1">
                      {item.images}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      <span>★★★★★</span>
                    </div>
                    <h3 className="mt-2 font-semibold text-sm text-rose-500">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-emerald-600 font-semibold">
                        {item.price}
                      </span>
                      <span className="text-zinc-600">• {item.area}</span>
                      <span className="text-zinc-600">• {item.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                      {item.meta}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-zinc-600">
                        <div className="h-9 w-9 rounded-full bg-zinc-200" />
                        <div>
                          <div className="font-medium text-zinc-800">
                            {item.author}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="px-3 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold">
                          {item.phone}
                        </button>
                        <button className="h-9 w-9 rounded-full bg-zinc-100 text-zinc-400">
                          ♥
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <section className="mt-10">
              <div className="flex items-center gap-3">
                <button className="rounded-full bg-teal-500 text-white px-4 py-2 text-sm font-semibold">
                  Hồ Chí Minh
                </button>
                <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600">
                  Hà Nội
                </button>
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-800">
                Phòng trọ cho thuê tại{" "}
                <span className="text-teal-500">Hồ Chí Minh</span>
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                {districtCards.map((card) => (
                  <div
                    key={card.id}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 h-32"
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute left-3 bottom-10 bg-white text-xs font-bold text-slate-800 px-2 py-0.5 rounded-full">
                      99+
                    </span>
                    <span className="absolute left-3 bottom-3 text-white font-semibold">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-white rounded-2xl border border-zinc-200 p-6">
              <h2 className="text-2xl font-extrabold text-slate-800">
                Phòng trọ quanh các trường
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {schools.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-zinc-100 border border-zinc-200" />
                    <p className="text-sm font-semibold text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
                <button className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-2xl font-bold">
                    +
                  </div>
                  <span className="text-sm font-semibold text-teal-600">
                    Xem thêm
                  </span>
                </button>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm">
              <h4 className="font-semibold text-zinc-800">Tin mới đăng</h4>
              <div className="mt-4 space-y-4">
                {latest.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="h-16 w-16 rounded-md bg-zinc-200" />
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 line-clamp-2">
                        {item.title}
                      </p>
                      <div className="mt-1 flex items-center justify-between text-xs">
                        <span className="text-emerald-600 font-semibold">
                          {item.price}
                        </span>
                        <span className="text-zinc-500">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
