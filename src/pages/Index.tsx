import { subjectData } from "@/data/subjectData";
import SubjectCard from "@/components/SubjectCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Title Header */}
      <div className="max-w-4xl mx-auto px-8 md:px-12 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-display text-indigo-800 mb-2">
          [김성혁] 추가 탐구 계획
        </h1>
      </div>

      {/* Subject Cards */}
      <div className="divide-y divide-border">
        {subjectData.map((subject) => (
          <SubjectCard key={subject.id} data={subject} />
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-8 md:px-12 py-12 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          보고서 끝 — 총 {subjectData.length}개 과목
        </p>
      </div>
    </div>
  );
};

export default Index;
