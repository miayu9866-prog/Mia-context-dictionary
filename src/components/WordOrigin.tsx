import CollapsibleCard from "./CollapsibleCard";

interface WordOriginProps {
  data: { text: string; chinese: string; available: boolean };
}

export default function WordOrigin({ data }: WordOriginProps) {
  if (!data.available) return null;

  return (
    <CollapsibleCard title="Word Origin 词源">
      <div className="space-y-3">
        <p className="text-sm text-[#555] leading-relaxed">{data.text}</p>
        <p className="text-sm text-[#888] leading-relaxed">{data.chinese}</p>
      </div>
    </CollapsibleCard>
  );
}