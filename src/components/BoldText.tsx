import React from "react";

interface BoldTextProps {
  text: string;
  keywords: string[];
}

export default function BoldText({ text, keywords }: BoldTextProps) {
  if (!keywords.length) return <>{text}</>;

  const escaped = keywords.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const match = keywords.some(
          (k) => k.toLowerCase() === part.toLowerCase()
        );
        return match ? (
          <strong key={i} className="font-semibold text-[#222]">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        );
      })}
    </>
  );
}