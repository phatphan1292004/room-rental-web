"use client";

import { useMemo, useState } from "react";
import {
  Filter,
  Home,
  Sofa,
  PawPrint,
  Clock,
  Search,
  RotateCcw,
} from "lucide-react";

type RoomType = "any" | "phong_tro" | "can_ho" | "nha_nguyen_can" | "o_ghep";

export default function AdvancedSearchPage() {
  const [roomType, setRoomType] = useState<RoomType>("any");
  const [hasFurnished, setHasFurnished] = useState(false);
  const [allowPets, setAllowPets] = useState(false);
  const [quietHours, setQuietHours] = useState<"any" | "before_23" | "after_23">(
    "any",
  );

  const activeSummary = useMemo(() => {
    const items: string[] = [];
    if (roomType !== "any") items.push("Loại phòng");
    if (hasFurnished) items.push("Có nội thất");
    if (allowPets) items.push("Cho phép thú cưng");
    if (quietHours !== "any") items.push("Giờ giấc");
    return items;
  }, [allowPets, hasFurnished, quietHours, roomType]);

  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-zinc-900">
              Tìm kiếm nâng cao
            </h1>
            <p className="mt-1 text-sm text-zinc-600">
              Lọc chi tiết theo loại phòng, nội thất, thú cưng, giờ giấc.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setRoomType("any");
              setHasFurnished(false);
              setAllowPets(false);
              setQuietHours("any");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-1 rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <Filter className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-900">Bộ lọc</h2>
                <p className="text-sm text-zinc-600">
                  {activeSummary.length ? (
                    <span>
                      Đang áp dụng: {activeSummary.join(" • ")}
                    </span>
                  ) : (
                    <span>Chưa chọn điều kiện</span>
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="block text-xs text-zinc-600 mb-2">
                  Loại phòng
                </label>
                <div className="relative">
                  <Home className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value as RoomType)}
                    className="w-full appearance-none rounded-full border border-zinc-200 bg-white pl-10 pr-10 py-3 text-sm text-zinc-700 outline-none focus:border-orange-300 focus:shadow-sm transition"
                  >
                    <option value="any">Tất cả</option>
                    <option value="phong_tro">Phòng trọ</option>
                    <option value="can_ho">Căn hộ</option>
                    <option value="nha_nguyen_can">Nhà nguyên căn</option>
                    <option value="o_ghep">Ở ghép</option>
                  </select>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                  <Sofa className="h-4 w-4 text-zinc-600" /> Nội thất
                </p>
                <label className="mt-3 flex items-center gap-3 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    checked={hasFurnished}
                    onChange={(e) => setHasFurnished(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300"
                  />
                  Có nội thất
                </label>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                  <PawPrint className="h-4 w-4 text-zinc-600" /> Thú cưng
                </p>
                <label className="mt-3 flex items-center gap-3 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    checked={allowPets}
                    onChange={(e) => setAllowPets(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300"
                  />
                  Cho phép thú cưng
                </label>
              </div>

              <div>
                <label className="block text-xs text-zinc-600 mb-2">
                  Giờ giấc
                </label>
                <div className="relative">
                  <Clock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <select
                    value={quietHours}
                    onChange={(e) =>
                      setQuietHours(e.target.value as "any" | "before_23" | "after_23")
                    }
                    className="w-full appearance-none rounded-full border border-zinc-200 bg-white pl-10 pr-10 py-3 text-sm text-zinc-700 outline-none focus:border-orange-300 focus:shadow-sm transition"
                  >
                    <option value="any">Không yêu cầu</option>
                    <option value="before_23">Về trước 23:00</option>
                    <option value="after_23">Về sau 23:00</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition"
              >
                <Search className="h-4 w-4" />
                Áp dụng lọc
              </button>

              <p className="text-xs text-zinc-500">
                Ghi chú: Đây là UI demo, chưa kết nối dữ liệu.
              </p>
            </div>
          </aside>

          <section className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-base font-bold text-zinc-900">Kết quả</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Danh sách bên dưới là dữ liệu mẫu để hiển thị UI.
              </p>

              <div className="mt-5 space-y-4">
                {[1, 2, 3].map((id) => (
                  <div
                    key={id}
                    className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Phòng trọ gần trường / công ty (mẫu {id})
                        </p>
                        <p className="mt-1 text-sm text-zinc-600">
                          3.2 triệu/tháng • 20 m2 • Có nội thất
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                            Phòng trọ
                          </span>
                          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                            Thú cưng: Có thể
                          </span>
                          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                            Giờ giấc: Linh hoạt
                          </span>
                        </div>
                      </div>
                      <button className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
