import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {children}
    </div>
  );
}
