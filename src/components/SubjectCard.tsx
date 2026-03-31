import { SubjectResearch } from "@/data/subjectData";

interface Props {
  data: SubjectResearch;
}

const SubjectDetail = ({ data }: Props) => {
  return (
    <div className="px-6 py-6 space-y-6">

      {/* 이전 활동 */}
      <section className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">이전 활동</h3>
        <p className="text-sm text-slate-700 leading-relaxed">{data.previousActivity}</p>
      </section>

      {/* 심화 연계 */}
      <section className="bg-teal-50 rounded-xl p-5 border border-teal-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">심화 연계</h3>
        <div className="space-y-3">
          {[
            { label: "출발점", value: data.deepeningLink.startingPoint },
            { label: "궁금증 · 아쉬움", value: data.deepeningLink.curiosity },
            { label: "선택 이유", value: data.deepeningLink.reason },
            { label: "연계 확장", value: data.deepeningLink.connectionExpansion },
            { label: "실행 설계", value: data.deepeningLink.executionDesign },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-3">
              <span className="flex-shrink-0 text-xs font-bold text-teal-600 w-20 pt-0.5">{label}</span>
              <p className="text-sm text-slate-700 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 탐구 계획 */}
      <section className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">탐구 계획</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <p className="text-xs font-bold text-indigo-500 uppercase mb-2">준비물</p>
            <ul className="text-sm space-y-1 text-slate-700">
              {data.plan.materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-indigo-500 uppercase mb-2">절차</p>
            <ol className="text-sm space-y-1 text-slate-700">
              {data.plan.procedure.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="flex-shrink-0 text-indigo-400 font-bold">{i + 1}.</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="pt-4 border-t border-indigo-200 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">측정 및 결과</p>
            <p className="text-sm text-slate-700 leading-relaxed">{data.plan.measurements}</p>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">{data.plan.results}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-rose-500 uppercase mb-1">오류 및 개선점</p>
            <p className="text-sm text-slate-700 leading-relaxed">{data.plan.errors}</p>
          </div>
        </div>
      </section>

      {/* 후속 도서 */}
      {data.followUpBooks.length > 0 && (
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">후속 도서</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.followUpBooks.map((book, i) => (
              <div key={i} className="p-4 border border-amber-200 rounded-xl bg-amber-50">
                <p className="text-xs font-bold text-amber-600 uppercase mb-1">도서 {i + 1}</p>
                <p className="text-sm font-bold text-slate-800">{book.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{book.reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SubjectDetail;
