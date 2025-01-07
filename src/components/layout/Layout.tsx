import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="pl-64 pt-16 md:pt-[64px]">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  );
}