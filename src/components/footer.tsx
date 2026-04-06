"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Video,
  Camera
} from "lucide-react";

export default function Footer() {
  const categories = [
    "Cho thuê phòng trọ",
    "Cho thuê nhà nguyên căn",
    "Cho thuê căn hộ",
    "Cho thuê căn hộ mini",
    "Cho thuê mặt bằng",
    "Tìm người ở ghép"
  ];

  const support = [
    "Trung tâm trợ giúp",
    "Quy định đăng tin",
    "Chính sách bảo mật",
    "Điều khoản sử dụng",
    "Giải quyết khiếu nại",
    "Bảng giá dịch vụ"
  ];

  const about = [
    "Về chúng tôi",
    "Tin tức",
    "Blog",
    "Liên hệ",
    "Cơ hội nghề nghiệp",
    "Cộng tác viên"
  ];

  return (
    <footer className="w-full bg-white text-zinc-800 pt-16 pb-8 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Benefits or Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-zinc-200">
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
              <Zap className="h-6 w-6 text-blue-600 group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Tìm nhanh chóng</h4>
              <p className="text-sm text-zinc-500">Kết nối hàng ngàn tin đăng mỗi ngày</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-orange-600 transition-colors duration-300">
              <ShieldCheck className="h-6 w-6 text-orange-500 group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Tin đăng uy tín</h4>
              <p className="text-sm text-zinc-500">Kiểm duyệt kỹ lưỡng, chính xác 100%</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-green-600 transition-colors duration-300">
              <Globe className="h-6 w-6 text-green-600 group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Tiện ích đa dạng</h4>
              <p className="text-sm text-zinc-500">Trải nghiệm tìm nhà mượt mà nhất</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter">
                PHONGTRO<span className="text-orange-500 text-3xl italic">123</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-8">
              Kênh thông tin phòng trọ số 1 Việt Nam. Website hỗ trợ đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, tìm người ở ghép uy tín, hiệu quả.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-xs">LK02-03, Khu Đô Thị An Hưng, Dương Nội, Hà Đông, Hà Nội</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-sm">0917 686 101</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-sm">hotro@phongtro123.com</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6">Chuyên mục</h4>
            <ul className="space-y-4">
              {categories.map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-800 hover:pl-2 transition-all flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hỗ trợ khách hàng</h4>
            <ul className="space-y-4">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-800 hover:pl-2 transition-all flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Theo dõi chúng tôi</h4>
            <div className="flex gap-4 mb-8">
              {[Globe, Video, Camera].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 bg-zinc-100 rounded-full hover:bg-zinc-900 hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-zinc-500">Đăng ký nhận tin</h4>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Email của bạn"
                className="w-full bg-white border border-zinc-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 Phongtro123.com - Trang tin cho thuê phòng trọ số 1 Việt Nam</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-800">Quy trình giao dịch</a>
            <a href="#" className="hover:text-zinc-800">Bảo mật thông tin</a>
            <a href="#" className="hover:text-zinc-800">Cơ chế giải quyết tranh chấp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
