import { SubjectResearch } from "@/data/subjectData";

interface SubjectCardProps {
  data: SubjectResearch;
}

const SubjectCard = ({ data }: SubjectCardProps) => {
  return (
    <div className="subject-card max-w-4xl mx-auto p-8 md:p-12 bg-card text-card-foreground">
      {/* Header */}
      <header className="mb-12 border-b pb-8 border-border">
        <h2 className="text-3xl md:text-4xl font-bold tracking-display mb-2">
          <span className="text-indigo-700">과목:</span> {data.subject}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          주제: {data.topic}
        </p>
      </header>

      {/* Previous Activity */}
      <section className="mb-10 bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">
          이전 활동
        </h3>
        <div className="p-4 bg-white rounded-lg text-slate-700 leading-body border border-slate-100">
          {data.previousActivity}
        </div>
      </section>

      {/* Deepening Link */}
      <section className="mb-10 bg-teal-50 p-6 rounded-xl border border-teal-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-4">
          심화 연계
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-teal-700 mb-1">출발점</h4>
              <p className="text-sm text-muted-foreground leading-body">
                {data.deepeningLink.startingPoint}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-700 mb-1">궁금증 · 아쉬움</h4>
              <p className="text-sm text-muted-foreground leading-body">
                {data.deepeningLink.curiosity}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-700 mb-1">선택 이유 / 의미</h4>
              <p className="text-sm text-muted-foreground leading-body">
                {data.deepeningLink.reason}
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border-l-2 border-teal-400 rounded-r-lg">
            <h4 className="text-sm font-bold text-teal-700 mb-2">실행 설계</h4>
            <p className="text-sm text-muted-foreground leading-body font-mono text-xs">
              {data.deepeningLink.executionDesign}
            </p>
          </div>
        </div>
      </section>

      {/* 1st Plan */}
      <section className="mb-10 bg-indigo-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-6">
          탐구 계획 및 실행
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <span className="block text-[10px] font-bold text-indigo-600 uppercase mb-2">
              준비물
            </span>
            <ul className="text-sm space-y-1 list-disc list-inside text-foreground">
              {data.plan.materials.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block text-[10px] font-bold text-indigo-600 uppercase mb-2">
              절차
            </span>
            <ol className="text-sm space-y-2 text-foreground font-mono tabular-nums">
              {data.plan.procedure.map((p, i) => (
                <li key={i}>
                  {i + 1}. {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-indigo-200">
          <div>
            <span className="block text-[10px] font-bold text-slate-600 uppercase mb-2">
              측정값 및 결과
            </span>
            <p className="text-sm font-mono text-foreground mb-3">{data.plan.measurements}</p>
            <p className="text-sm text-muted-foreground">{data.plan.results}</p>
          </div>
          <div>
            <span className="block text-[10px] font-bold text-rose-600 uppercase mb-2">
              오류 및 개선점
            </span>
            <p className="text-sm text-muted-foreground leading-body">{data.plan.errors}</p>
          </div>
        </div>
      </section>

      {/* Follow-up Books */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.followUpBooks.map((book, i) => (
          <div key={i} className="p-4 border border-amber-200 rounded-lg bg-amber-50">
            <span className="text-[10px] font-bold text-amber-700 uppercase">
              후속 도서 {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="text-sm font-bold mt-1 text-foreground">{book.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{book.reason}</p>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default SubjectCard;
