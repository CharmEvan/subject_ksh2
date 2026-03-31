import { useState } from "react";
import { subjectData, SubjectResearch } from "@/data/subjectData";
import SubjectDetail from "@/components/SubjectCard";

// 과목명으로 그룹핑
const grouped: Record<string, SubjectResearch[]> = {};
subjectData.forEach((item) => {
  if (!grouped[item.subject]) grouped[item.subject] = [];
  grouped[item.subject].push(item);
});
const subjects = Object.keys(grouped);

const Index = () => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleSubject = (subject: string) => {
    setActiveSubject(subject);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveSubject(null);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTopic = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const topics = activeSubject ? grouped[activeSubject] : [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <div className="bg-indigo-900 text-white px-6 py-8 md:px-12">
        <p className="text-indigo-300 text-xs tracking-[0.3em] uppercase mb-1">추가 탐구 계획</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">CHARM</h1>
        <p className="text-indigo-300 text-sm mt-2">과목을 선택하면 탐구 주제를 확인할 수 있습니다</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 md:px-8">

        {/* 과목 선택 화면 */}
        {!activeSubject && (
          <>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">과목 선택</p>
            <div className="flex flex-wrap gap-3">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleSubject(subject)}
                  className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-indigo-800 border-2 border-indigo-200 hover:border-indigo-500 hover:shadow transition-all"
                >
                  {subject}
                  <span className="ml-2 text-xs font-normal text-slate-400">
                    탐구 {grouped[subject].length}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* 탐구 목록 화면 */}
        {activeSubject && (
          <div>
            {/* 뒤로가기 */}
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-indigo-600 font-bold mb-6 hover:text-indigo-800 transition-colors"
            >
              ← 과목 목록으로
            </button>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              {activeSubject} — 탐구 주제
            </p>

            <div className="space-y-3">
              {topics.map((item, idx) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

                  {/* 탐구 제목 행 */}
                  <button
                    onClick={() => handleTopic(item.id)}
                    className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 ${
                      expandedId === item.id
                        ? "bg-indigo-700 text-white"
                        : "bg-indigo-100 text-indigo-700"
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-indigo-400 mb-1">탐구 {idx + 1}</p>
                      <p className="font-bold text-slate-800 leading-snug">{item.topic}</p>
                      {expandedId !== item.id && (
                        <p className="text-sm text-slate-500 mt-1 line-clamp-1">{item.previousActivity}</p>
                      )}
                    </div>
                    <span className={`flex-shrink-0 text-slate-400 text-lg transition-transform mt-1 ${expandedId === item.id ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>

                  {/* 세부사항 */}
                  {expandedId === item.id && (
                    <div className="border-t border-slate-100">
                      <SubjectDetail data={item} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-center py-8 text-xs text-slate-400">
        총 {subjectData.length}개 탐구 · {subjects.length}개 과목
      </div>
    </div>
  );
};

export default Index;
