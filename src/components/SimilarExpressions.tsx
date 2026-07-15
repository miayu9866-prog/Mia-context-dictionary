import BoldText from "./BoldText";

interface SimilarItem {
  expression: string;
  vsExpression: string;
  meaningDifference: string;
  emotionalDifference: string;
  usageDifference: string;
  frequencyDifference: string;
  whenToUse: string;
}

interface SimilarExpressionsProps {
  data: SimilarItem[];
}

function ComparisonValue({ text, exp, vsExp }: { text: string; exp: string; vsExp: string }) {
  const parts = text.split(". ").filter(Boolean);
  return (
    <div className="space-y-1.5">
      {parts.map((part, i) => (
        <p key={i} className="text-sm text-[#444] leading-relaxed">
          <BoldText text={part.trim()} keywords={[exp, vsExp]} />
        </p>
      ))}
    </div>
  );
}

export default function SimilarExpressions({ data }: SimilarExpressionsProps) {
  return (
    <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-5 border border-[#E8E8E5] shadow-sm">
      <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Similar Expressions 相近表达</h2>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.vsExpression} className="bg-white rounded-xl p-6 border border-[#E8E8E5] shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-[#222]">{item.expression}</span>
              <span className="text-[11px] text-[#999] uppercase tracking-wider">VS</span>
              <span className="font-semibold text-[#222]">{item.vsExpression}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ComparisonRow label="Meaning 含义">
                <ComparisonValue text={item.meaningDifference} exp={item.expression} vsExp={item.vsExpression} />
              </ComparisonRow>
              <ComparisonRow label="Emotion 情绪">
                <ComparisonValue text={item.emotionalDifference} exp={item.expression} vsExp={item.vsExpression} />
              </ComparisonRow>
              <ComparisonRow label="Usage 用法">
                <ComparisonValue text={item.usageDifference} exp={item.expression} vsExp={item.vsExpression} />
              </ComparisonRow>
              <ComparisonRow label="Frequency 频率">
                <ComparisonValue text={item.frequencyDifference} exp={item.expression} vsExp={item.vsExpression} />
              </ComparisonRow>
            </div>

            <div className="border-t border-[#E8E8E5] pt-3">
              <span className="text-[11px] text-[#999] uppercase tracking-wider block mb-1">When to use 何时用</span>
              <p className="text-sm text-[#555]">
                <BoldText text={item.whenToUse} keywords={[item.expression, item.vsExpression]} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <span className="text-[11px] text-[#999] uppercase tracking-wider">{label}</span>
      {children}
    </div>
  );
}