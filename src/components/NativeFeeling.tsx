import BoldText from "./BoldText";

interface NativeFeelingProps {
  data: {
    intro: string;
    details: string[];
    keyInsight: string;
  };
  expression: string;
}

export default function NativeFeeling({ data, expression }: NativeFeelingProps) {
  return (
    <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-5 border border-[#E8E8E5] shadow-sm">
      <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">How natives feel it</h2>

      <p className="text-lg text-[#222] leading-relaxed font-[450] italic">
        &ldquo;<BoldText text={data.intro} keywords={[expression]} />&rdquo;
      </p>

      <div className="space-y-3">
        {data.details.map((detail, i) => (
          <p key={i} className="text-sm text-[#444] leading-relaxed">
            <BoldText text={detail} keywords={[expression]} />
          </p>
        ))}
      </div>

      <div className="border-l-2 border-emerald-300 pl-4 py-1 bg-white/60 rounded-r-lg">
        <p className="text-sm text-[#555] leading-relaxed">
          <BoldText text={data.keyInsight} keywords={[expression]} />
        </p>
      </div>
    </div>
  );
}