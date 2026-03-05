export default function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto bg-white shadow-[0_4px_32px_rgba(0,0,0,0.18)] p-8 print:shadow-none max-w-[210mm] min-h-[297mm] print:min-w-[210mm] font-sans ${className} break-after-page`}
    >
      {children}
    </div>
  );
}
