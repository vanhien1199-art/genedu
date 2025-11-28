import React from 'react';
import { Facebook, MessageCircle, Mail, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Cột 1: Logo & Slogan */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-2xl font-extrabold text-white tracking-tight">GenEdu<span className="text-blue-500"></span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
            Hệ sinh thái giáo dục ứng dụng trí tuệ nhân tạo, giúp giáo viên Việt Nam soạn bài giảng sáng tạo, tiết kiệm thời gian và nâng cao chất lượng dạy học.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition"><MessageCircle size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition"><Mail size={20} /></a>
          </div>
        </div>

        {/* Cột 2: Sản phẩm */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Sản Phẩm</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="https://edutoolgame.pages.dev">Game khởi động bài học, luyện tập</a></li>
            <li><a href="#" className="https://edutool.pages.dev">Tạo kho câu hỏi</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Ngân Hàng Đề Thi</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Công Cụ Chấm Điểm</a></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Hỗ Trợ</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Hướng dẫn sử dụng</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Điều khoản dịch vụ</a></li>
            <li className="flex items-start gap-2 mt-4 text-slate-500">
               <MapPin size={16} className="mt-1 flex-shrink-0"/> 
               <span>?</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} GenEdu AI. All rights reserved. Developed by Vanhien1199-Art.</p>
      </div>
    </footer>
  );
};


export default Footer;


