"use client";

import { useMemo, useState } from "react";
import { MapPin, Radius, Building2, Search } from "lucide-react";

export default function MapSearchPage() {
  const [placeQuery, setPlaceQuery] = useState("");
  const [radiusKm, setRadiusKm] = useState(3);

  const radiusLabel = useMemo(() => `${radiusKm} km`, [radiusKm]);

  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-900">
            Xem phòng trên bản đồ
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Tìm theo bán kính từ trường/công ty (UI placeholder, chưa tích hợp bản đồ thật).
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-1 rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-900">
                  Điểm xuất phát
                </h2>
                <p className="text-sm text-zinc-600">
                  Nhập tên trường hoặc công ty.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs text-zinc-600 mb-2">
                Trường / Công ty
              </label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  value={placeQuery}
                  onChange={(e) => setPlaceQuery(e.target.value)}
                  placeholder="Ví dụ: Đại học Bách Khoa"
                  className="w-full rounded-full border border-zinc-200 bg-white pl-10 pr-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-orange-300 focus:shadow-sm transition"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label className="block text-xs text-zinc-600">Bán kính</label>
                <span className="text-xs font-semibold text-zinc-800">
                  {radiusLabel}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <Radius className="h-4 w-4 text-zinc-500" />
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={radiusKm}
                  onChange={(e) => setRadiusKm(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mt-2 flex justify-between text-[11px] text-zinc-500">
                <span>1 km</span>
                <span>10 km</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition"
            >
              <Search className="h-4 w-4" />
              Tìm quanh đây
            </button>
          </aside>

          <section className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-base font-bold text-zinc-900">Bản đồ</h2>
                <span className="text-xs text-zinc-500">
                  {placeQuery ? `Tâm: ${placeQuery}` : "Chưa chọn điểm"} • {radiusLabel}
                </span>
              </div>

              <div className="mt-5 h-[420px] rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Khu vực bản đồ (placeholder)
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">
                    Khi tích hợp thật: dùng Google Maps/Mapbox + geocoding.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold text-zinc-900">Phòng gần đây</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Danh sách mẫu theo bán kính.
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((id) => (
                    <div
                      key={id}
                      className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition"
                    >
                      <p className="text-sm font-semibold text-zinc-900">
                        Phòng trọ gần điểm A (mẫu {id})
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        3.5 triệu/tháng • 18 m2 • Cách ~{Math.max(1, id)} km
                      </p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs text-zinc-500">Quận • TP</span>
                        <button className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
                          Xem
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
