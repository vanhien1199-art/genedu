import React from 'react';
import { Facebook, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Cột 1: Logo & Slogan */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-2xl font-extrabold text-white tracking-tight">GenEdu<span className="text-blue-500">.vn</span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
            Hệ sinh thái giáo dục ứng dụng trí tuệ nhân tạo, giúp giáo viên Việt Nam soạn bài giảng sáng tạo, tiết kiệm thời gian và nâng cao chất lượng dạy học.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com/nung.hien" className="text-slate-400 hover:text-white transition" title="Facebook"><Facebook size={20} /></a>
            <a href="https://zalo.me/84914329178" className="text-slate-400 hover:text-white transition" title="Zalo"><MessageCircle size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition" title="Email"><Mail size={20} /></a>
          </div>
                  </div>

        {/* Cột 2: Sản phẩm */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Sản Phẩm</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://edutoolgame.pages.dev" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition flex items-center gap-2">Game Creator AI <ExternalLink size={12}/></a></li>
            <li><a href="https://edutool.pages.dev/" className="hover:text-blue-400 transition">Ngân Hàng Đề Thi</a></li>
            <li><a href="https://testtool-dl2.pages.dev/" className="hover:text-blue-400 transition">Công Cụ tạo ma trận và đề kiểm tra 7991</a></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ (ĐÃ SỬA: Facebook & Zalo QR) */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Hỗ Trợ Trực Tuyến</h3>
          <div className="flex flex-col gap-4">
            
            {/* Nút Chat Facebook */}
            <a 
              href="https://facebook.com/nung.hien" // <-- Thay link Fanpage của bạn vào đây
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2 rounded-lg transition w-fit"
            >
              <Facebook size={20} />
              <span className="font-medium text-sm">Chat Facebook</span>
            </a>

            {/* Khu vực Zalo QR */}
            <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wide">Quét mã Zalo</span>
                <div className="bg-white p-2 rounded-lg w-fit shadow-lg shadow-blue-900/20">
                    {/* Mã QR được tạo tự động. Thay 'https://zalo.me/' vào param data */}
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://zalo.me/84914329178" 
                        alt="Zalo QR Code" 
                        className="w-24 h-24"
                    />
                </div>
                <a 
                  href="https://zalo.me/84914329178" // <-- Thay link Zalo cá nhân/OA của bạn vào đây
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
                >
                   <MessageCircle size={16}/> Kết nối Zalo
                </a>
            </div>

          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} GenEdu AI. All rights reserved. Developed by vanhien1199-Art.</p>
      </div>
    </footer>
  );
};

export default Footer;




