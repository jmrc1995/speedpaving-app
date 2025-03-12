"use client";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center gap-2 p-3 rounded-lg 
        glass transition-all duration-500 transform hover:scale-110 
        border border-foreground/40 backdrop-blur-lg
        hover:shadow-lg hover:backdrop-brightness-110 
        dark:text-foreground text-foreground"
    >
      {/* Moon for Dark Mode */}
      <span
        className={`absolute transition-all transform duration-400 ${
          theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        🌙
      </span>
      
      {/* Sun for Light Mode */}
      <span
        className={`absolute transition-all transform duration-400 ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        ☀️
      </span>
    </button>
  );
}
