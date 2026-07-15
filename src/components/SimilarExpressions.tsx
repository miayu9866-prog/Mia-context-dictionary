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
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-5">
      <div className="space-y-1 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">04</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE CONTRAST</h2>
        <p className="text-[11px] text-[#9C9488]">Similar Expressions</p>
      </div>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.vsExpression} className="bg-[#F7F3EA]/30 p-6 border border-[#DDD3C4] space-y-4">
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

            <div className="border-t border-[#DDD3C4]/50 pt-3">
              <span className="text-[11px] text-[#9C9488] uppercase tracking-wider block mb-1">When to Use</span>
              <p className="text-sm text-[#6B6258]">
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
