import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex flex-col items-center bg-light-1 min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}
