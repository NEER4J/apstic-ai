import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface BookCallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function BookCallButton({ className, ...props }: BookCallButtonProps) {
  return (
    <button
      className={cn(
        "group flex items-stretch overflow-hidden font-medium transition-transform active:scale-95 border-2 border-[#161513] dark:border-white",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center px-6 py-2 text-sm transition-colors",
          "bg-[#161513] text-white group-hover:bg-[#161513]/90", // Light mode
          "dark:bg-white dark:text-[#161513] dark:group-hover:bg-gray-200" // Dark mode
        )}
      >
        Book A Call
      </span>
      <div
        className={cn(
          "flex aspect-square items-center justify-center transition-colors w-10 h-10",
          "bg-white text-[#FF4A00]", // Light mode
          "dark:bg-[#161513] dark:text-[#FF4A00]" // Dark mode
        )}
      >
        <Play className="h-4 w-4 fill-current" />
      </div>
    </button>
  );
}
