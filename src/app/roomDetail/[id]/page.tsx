"use client";

import React, { useState } from 'react';
import Header from "@/components/header"; 
import Footer from "@/components/footer"; 
import {
    MapPin, BedDouble, Square, CheckCircle,
    Phone, MessageCircle, Heart, Info,
    Clock, ShieldCheck, ChevronRight,
    PlusCircle, ArrowRight, Image as ImageIcon
} from 'lucide-react';

export default function RoomDetailPage() {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans">
            <Header />

            {/* Breadcrumb - Điều hướng phân cấp */}
            <div className="bg-white border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-zinc-500">
                    <a href="#" className="hover:text-orange-600 transition-colors">Trang chủ</a>
                    <ChevronRight size={14} />
                    <a href="#" className="hover:text-orange-600 transition-colors">Cho thuê phòng trọ</a>
                    <ChevronRight size={14} />
                    <span className="text-zinc-800 font-medium truncate uppercase tracking-tight">LVORY APARTMENT</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* CỘT TRÁI: Nội dung chi tiết */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Gallery Ảnh - Sử dụng Placeholder */}
                        <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-zinc-200 aspect-[16/9] flex items-center justify-center">
                            {/* Hiệu ứng Pulse khi ảnh đang tải */}
                            <div className="absolute inset-0 animate-pulse bg-zinc-200 flex items-center justify-center">
                                <ImageIcon size={48} className="text-zinc-400" />
                            </div>
                            
                            <img
                                src="https://placehold.co/1200x675/e4e4e7/a1a1aa?text=Hinh+Anh+Can+Ho"
                                alt="Phòng trọ cao cấp"
                                className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Lớp phủ Gradient giúp text bên dưới nổi bật hơn */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none" />

                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md z-30 shadow-lg border border-white/20">
                                +8 Hình ảnh
                            </div>
                        </div>

                        {/* Thông tin chính */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                            <div className="flex items-start justify-between gap-4">
                                <h1 className="text-xl sm:text-2xl font-black text-zinc-900 leading-tight">
                                    <span className="text-orange-600">LVORY APARTMENT</span> - Căn hộ Studio cao cấp Nguyễn Văn Giáp, Nam Từ Liêm
                                </h1>
                                <button 
                                    onClick={() => setIsSaved(!isSaved)}
                                    className={`p-3 rounded-full transition-all border ${isSaved ? 'bg-red-50 border-red-100 text-red-500' : 'bg-zinc-50 border-zinc-100 text-zinc-400 hover:text-red-500'}`}
                                >
                                    <Heart size={24} fill={isSaved ? "currentColor" : "none"} />
                                </button>
                            </div>

                            <div className="flex items-center text-zinc-500 mt-4 gap-2">
                                <div className="bg-orange-100 p-1.5 rounded-lg">
                                    <MapPin size={18} className="text-orange-600 shrink-0" />
                                </div>
                                <span className="text-sm sm:text-base">Số 12 ngõ 80, Đường Nguyễn Văn Giáp, Nam Từ Liêm, Hà Nội</span>
                            </div>

                            {/* Grid thông số nhanh */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 py-8 border-y border-zinc-100">
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Mức giá</p>
                                    <p className="text-orange-600 font-black text-xl">4.5 Tr<span className="text-sm font-normal text-zinc-500">/tháng</span></p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Diện tích</p>
                                    <p className="text-zinc-800 font-black text-xl">35 m²</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Phòng ngủ</p>
                                    <div className="flex items-center gap-2 text-zinc-800 font-black text-xl">
                                        <BedDouble size={20} className="text-zinc-400" /> 01
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Hướng cửa</p>
                                    <p className="text-zinc-800 font-black text-xl text-nowrap">Đông Nam</p>
                                </div>
                            </div>

                            {/* Mô tả chi tiết */}
                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-zinc-900 uppercase tracking-tight">
                                    <Info size={20} className="text-orange-500" /> Thông tin mô tả
                                </h3>
                                <div className="text-zinc-600 leading-relaxed space-y-4 whitespace-pre-line text-[15px]">
                                    <p className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></span>
                                        Chính chủ cho thuê căn hộ Studio mới kính koong tại Nguyễn Văn Giáp.
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></span>
                                        Nội thất: Giường, tủ quần áo, sofa, bàn trà, tủ lạnh, máy giặt riêng, bếp từ, hút mùi...
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></span>
                                        Dịch vụ: Thang máy tốc độ cao, camera an ninh 24/7, khóa vân tay hiện đại.
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></span>
                                        Vị trí: Gần Vinhomes Gardenia, thuận tiện di chuyển ra bến xe Mỹ Đình, ĐH Thương Mại.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tiện ích căn hộ */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4 uppercase tracking-tight">Cơ sở vật chất</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 text-zinc-600">
                                {["Máy lạnh", "Tủ lạnh", "Máy giặt riêng", "Thang máy", "Khóa vân tay", "Giờ giấc tự do"].map((amenity) => (
                                    <div key={amenity} className="flex items-center gap-3 group cursor-default">
                                        <div className="bg-green-50 p-1 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <CheckCircle size={18} className="text-green-500 group-hover:text-inherit" />
                                        </div>
                                        <span className="text-sm font-medium">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bản đồ Section */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-zinc-900 uppercase tracking-tight">
                                <MapPin size={20} className="text-orange-500" /> Bản đồ & Vị trí
                            </h3>

                            <div className="w-full h-[350px] rounded-xl overflow-hidden border border-zinc-100 shadow-inner bg-zinc-50 relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.603681423851!2d105.75945395!3d21.0266471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56b46b7a9775!2zTeG7uSDEkMOsbmgsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1714316719902!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Vị trí phòng trọ"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-zinc-700 shadow-md border border-zinc-200">
                                    Khu vực: Mỹ Đình 1, Nam Từ Liêm
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex items-start gap-3">
                                <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-0.5">
                                    <Info size={14} />
                                </div>
                                <p className="text-xs text-blue-700 leading-relaxed font-medium">
                                    Vị trí trên bản đồ mang tính chất minh họa khu vực. Vui lòng liên hệ chủ nhà để biết số ngõ/số nhà chính xác.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CỘT PHẢI: Sidebar liên hệ */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Card người đăng */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-200">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-zinc-100 rounded-full p-1.5 border-4 border-orange-500/20">
                                            {/* --- SỬA AVATAR THÀNH THẺ IMG Ở ĐÂY --- */}
                                            <img 
                                                src="https://placehold.co/150x150/e4e4e7/a1a1aa?text=Avatar"
                                                alt="Avatar Nguyễn Văn A"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                                    </div>
                                    
                                    <h4 className="font-black text-zinc-900 text-xl mt-4">Nguyễn Văn A</h4>
                                    <p className="text-zinc-500 text-sm font-medium">Chủ sở hữu tin đăng</p>

                                    <div className="w-full space-y-3 mt-8">
                                        <a href="tel:0912345678" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-200 active:scale-95">
                                            <Phone size={20} /> 0912 345 ***
                                        </a>
                                        <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95">
                                            <MessageCircle size={20} /> Nhắn Zalo
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-zinc-100 space-y-4 text-sm font-medium text-zinc-600">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck size={20} className="text-green-500" />
                                        <span>Đã xác thực danh tính</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={20} className="text-orange-500" />
                                        <span>Tham gia từ: 2 năm trước</span>
                                    </div>
                                </div>
                            </div>

                            {/* Lưu ý an toàn */}
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-100 p-6 rounded-2xl">
                                <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2 uppercase text-xs tracking-wider">
                                    <ShieldCheck size={18} /> Lưu ý an toàn
                                </h5>
                                <p className="text-orange-700 text-[13px] leading-relaxed">
                                    <strong className="block mb-1 underline">Không chuyển tiền đặt cọc</strong>
                                    trước khi trực tiếp xem nhà và kiểm tra giấy tờ chính chủ. Báo cáo nếu thấy tin đăng có dấu hiệu lừa đảo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* SECTION: PHÒNG TRỌ LÂN CẬN */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">
                            Phòng trọ <span className="text-orange-500 underline decoration-2 underline-offset-4">lân cận</span>
                        </h3>
                        <p className="text-zinc-500 text-sm mt-2">Các căn hộ cùng khu vực Nam Từ Liêm có thể bạn quan tâm</p>
                    </div>
                    <a href="#" className="hidden sm:flex items-center gap-2 text-orange-600 font-bold hover:translate-x-2 transition-transform text-sm">
                        Xem tất cả <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col">
                            {/* Hình ảnh Card - Dùng Placeholder */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                                <div className="absolute inset-0 animate-pulse bg-zinc-200" />
                                <img
                                    src={`https://placehold.co/600x450/e4e4e7/a1a1aa?text=Phong+Tro+${item}`}
                                    className="relative z-10 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Phòng trọ lân cận"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3 z-20 bg-orange-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase shadow-lg">
                                    Tin mới
                                </div>
                                <button className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-md rounded-full text-zinc-400 hover:text-red-500 transition-colors shadow-sm">
                                    <Heart size={16} />
                                </button>
                            </div>

                            {/* Nội dung Card */}
                            <div className="p-5 flex-1 flex flex-col">
                                <h4 className="font-bold text-zinc-800 line-clamp-2 group-hover:text-orange-600 transition-colors h-10 mb-3 leading-tight">
                                    Căn hộ Studio Full nội thất gần Keangnam - Mễ Trì {item}
                                </h4>

                                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-5 pb-5 border-b border-zinc-50">
                                    <span className="flex items-center gap-1.5"><Square size={14} className="text-orange-500" /> 30m²</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-500" /> Nam Từ Liêm</span>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-orange-600 font-black text-xl leading-none">
                                            {4 + item / 2} triệu
                                        </span>
                                        <span className="text-[10px] text-zinc-400 mt-1 uppercase tracking-tighter font-bold">VNĐ / THÁNG</span>
                                    </div>
                                    <button className="p-2.5 bg-zinc-50 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                                        <PlusCircle size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <Footer />
        </div>
    );
}