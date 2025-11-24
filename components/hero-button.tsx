import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function HeroButton({ className, children, ...props }: HeroButtonProps) {
  return (
    <button
      className={cn(
        "group flex items-stretch overflow-hidden font-medium transition-transform active:scale-95 border-2 border-[#FF4A00]",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center px-8 py-4 text-base transition-colors font-mono uppercase tracking-wide",
          "bg-[#FF4A00] text-white group-hover:bg-[#FF4A00]/90"
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          "flex aspect-square items-center justify-center transition-colors w-[58px]",
          "bg-white text-[#FF4A00]"
        )}
      >
        <Play className="h-4 w-4 fill-current" />
      </div>
    </button>
  );
}

