export default function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto bg-white shadow-[0_4px_32px_rgba(0,0,0,0.18)] p-8 print:shadow-none font-sans ${className} break-after-page`}
      style={{ width: "210mm", minHeight: "297mm" }}
    >
      {children}
    </div>
  );
}
