"use client";
import useTheme from "../../components/useTheme";
import ThemeToggle from "../../components/ThemeToggle";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen relative">
      {/* 🔹 Move Theme Toggle to the Right */}
      <header className="p-4 flex justify-end">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <main className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between gap-4">
        {children}
      </main>
    </div>
  );
}
