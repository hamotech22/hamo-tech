export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-10 w-10 rounded-full border border-brand/15" />
        <div className="h-10 w-10 animate-spin rounded-full border-[2px] border-zinc-200 border-t-brand" />
      </div>
    </div>
  );
}
