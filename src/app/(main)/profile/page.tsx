"use client";

import { useMemo, useState } from "react";
import { Camera, IdCard, Briefcase, Heart, Save } from "lucide-react";

export default function ProfilePage() {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [cccdFrontFile, setCccdFrontFile] = useState<File | null>(null);
  const [cccdBackFile, setCccdBackFile] = useState<File | null>(null);

  const avatarPreview = useMemo(
    () => (avatarFile ? URL.createObjectURL(avatarFile) : null),
    [avatarFile],
  );

  const cccdFrontPreview = useMemo(
    () => (cccdFrontFile ? URL.createObjectURL(cccdFrontFile) : null),
    [cccdFrontFile],
  );

  const cccdBackPreview = useMemo(
    () => (cccdBackFile ? URL.createObjectURL(cccdBackFile) : null),
    [cccdBackFile],
  );

  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-zinc-900">
              Hồ sơ cá nhân
            </h1>
            <p className="mt-1 text-sm text-zinc-600">
              Cập nhật ảnh đại diện, CCCD, sở thích, nghề nghiệp.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:brightness-95 transition"
          >
            <Save className="h-4 w-4" />
            Lưu thay đổi
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-900">
                  Ảnh đại diện
                </h2>
                <p className="text-sm text-zinc-600">
                  Chọn ảnh để hiển thị trên hồ sơ.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                  {avatarPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={avatarPreview}
                      alt="Avatar preview"
                      className="h-full w-full object-cover"
                      onLoad={() => URL.revokeObjectURL(avatarPreview)}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-zinc-500">
                      Chưa có
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-zinc-600 mb-2">
                    Tải ảnh lên
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setAvatarFile(e.target.files?.[0] ?? null)}
                    className="block w-full text-sm text-zinc-700 file:mr-3 file:rounded-full file:border-0 file:bg-zinc-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:brightness-95"
                  />
                  <p className="mt-2 text-xs text-zinc-500">
                    Gợi ý: ảnh vuông, rõ mặt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <IdCard className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-900">CCCD</h2>
                <p className="text-sm text-zinc-600">
                  Tải ảnh mặt trước/mặt sau và nhập số CCCD.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900">Mặt trước</p>
                <div className="mt-3 h-36 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 overflow-hidden">
                  {cccdFrontPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cccdFrontPreview}
                      alt="CCCD front preview"
                      className="h-full w-full object-cover"
                      onLoad={() => URL.revokeObjectURL(cccdFrontPreview)}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-zinc-500">
                      Chưa tải ảnh
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCccdFrontFile(e.target.files?.[0] ?? null)}
                  className="mt-3 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-full file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-800 hover:file:bg-zinc-200"
                />
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900">Mặt sau</p>
                <div className="mt-3 h-36 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 overflow-hidden">
                  {cccdBackPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cccdBackPreview}
                      alt="CCCD back preview"
                      className="h-full w-full object-cover"
                      onLoad={() => URL.revokeObjectURL(cccdBackPreview)}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-zinc-500">
                      Chưa tải ảnh
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCccdBackFile(e.target.files?.[0] ?? null)}
                  className="mt-3 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-full file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-800 hover:file:bg-zinc-200"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs text-zinc-600 mb-2">Số CCCD</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Ví dụ: 012345678901"
                className="w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-orange-300 focus:shadow-sm transition"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-zinc-900">
                      Sở thích
                    </h2>
                    <p className="text-sm text-zinc-600">
                      Nhập danh sách sở thích (cách nhau bằng dấu phẩy).
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Ví dụ: nuôi mèo, thể thao, yên tĩnh"
                    className="w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-orange-300 focus:shadow-sm transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-zinc-900">
                      Nghề nghiệp
                    </h2>
                    <p className="text-sm text-zinc-600">
                      Thông tin giúp gợi ý phòng phù hợp.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Ví dụ: Sinh viên, Nhân viên văn phòng"
                    className="w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-orange-300 focus:shadow-sm transition"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
