export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-pulse">
      {/* Sidebar skeleton */}
      <div className="w-full lg:w-[30%] shrink-0 space-y-5">
        <div className="h-8 w-3/4 bg-[#E8E8E5] rounded-lg" />
        <div className="h-4 w-1/2 bg-[#E8E8E5] rounded-md" />
        <div className="h-16 w-full bg-[#E8E8E5] rounded-2xl" />
      </div>
      {/* Content skeleton */}
      <div className="flex-1 space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#F7F7F5] rounded-2xl p-8">
            <div className="h-5 w-40 bg-[#E8E8E5] rounded-md mb-5" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-[#E8E8E5] rounded" />
              <div className="h-4 w-5/6 bg-[#E8E8E5] rounded" />
              <div className="h-4 w-4/6 bg-[#E8E8E5] rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
