import React from 'react';
import { 
  Rocket, BrainCircuit, CheckCircle, ArrowRight, 
  Users, Zap, Star, ShieldCheck, PlayCircle
} from 'lucide-react';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      {/* HEADER / NAV */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           <span className="text-2xl font-extrabold text-slate-900 tracking-tight cursor-pointer">GenEdu<span className="text-blue-600"></span></span>
           <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-blue-600 transition">Tính Năng</a>
              <a href="#tools" className="hover:text-blue-600 transition">Công Cụ</a>
              <a href="#pricing" className="hover:text-blue-600 transition">Bảng Giá</a>
           </div>
           <button className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition">Đăng Nhập</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Giải pháp AI số 1 cho giáo viên
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] animate-fade-in-up">
            Trợ Lý Giảng Dạy <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thông Minh & Tốc Độ</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Tích hợp toàn bộ công cụ bạn cần: Tạo game tương tác, soạn giáo án, chấm điểm tự động chỉ với 1 cú click chuột.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            {/* LINK SANG CÔNG CỤ TẠO GAME */}
            <a 
              href="https://edutoolgame.pages.dev" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-1"
            >
              <Rocket size={20} />
              Dùng Thử Miễn Phí
            </a>
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition shadow-sm">
              <PlayCircle size={20} />
              Xem Demo
            </button>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
               { num: "10,000+", label: "Giáo viên tin dùng" },
               { num: "50,000+", label: "Bài giảng đã tạo" },
               { num: "30s", label: "Thời gian xử lý" },
               { num: "4.9/5", label: "Đánh giá hài lòng" },
            ].map((stat, idx) => (
               <div key={idx}>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.num}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
               </div>
            ))}
         </div>
      </section>

      {/* TOOLS GRID (Quan trọng nhất) */}
      <section id="tools" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kho Công Cụ Mạnh Mẽ</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Chọn công cụ phù hợp để bắt đầu hành trình sáng tạo của bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool 1: Game Creator (Active) */}
            <div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div className="absolute top-6 right-6">
                 <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Phổ biến nhất</span>
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Game Creator AI</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Biến nội dung sách giáo khoa thành các trò chơi tương tác (Trắc nghiệm, Ô chữ, Hộp bí mật) chỉ trong tích tắc.
              </p>
              <a 
                href="https://edutoolgame.pages.dev" 
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
              >
                Mở Công Cụ <ArrowRight size={18}/>
              </a>
            </div>

            {/* Tool 2: Coming Soon */}
            <div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-75">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Soạn Văn Mẫu AI</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Gợi ý dàn ý, viết đoạn văn mẫu và sửa lỗi ngữ pháp tự động cho môn Ngữ Văn các cấp.
              </p>
              <span className="inline-flex items-center gap-2 text-slate-400 font-bold cursor-not-allowed">
                Sắp ra mắt...
              </span>
            </div>

            {/* Tool 3: Coming Soon */}
            <div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-75">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Trợ Lý Chủ Nhiệm</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Quản lý học sinh, tạo nhận xét học bạ tự động và lập kế hoạch hoạt động trải nghiệm.
              </p>
              <span className="inline-flex items-center gap-2 text-slate-400 font-bold cursor-not-allowed">
                Sắp ra mắt...
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};


export default LandingPage;
