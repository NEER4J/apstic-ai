import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'white-dark' | 'full-orange';
  onClick?: () => void;
}

const variantStyles = {
  default: {
    container: "border-2 border-[#FF4A00]",
    text: "bg-[#FF4A00] text-white group-hover:bg-[#FF4A00]/90 ",
    icon: "bg-white text-[#FF4A00]",
  },
  light: {
    container: "border-0",
    text: "bg-white text-[#161513] group-hover:bg-gray-100",
    icon: "bg-[#FF4A00] text-white group-hover:bg-[#ff5e1a]",
  },
  "white-dark": {
    container: "border-0 bg-white group-hover:bg-gray-100",
    text: "bg-white text-[#161513]",
    icon: "bg-[#161513] text-white",
  },
  "full-orange": {
    container: "border-2 border-[#FF4A00]",
    text: "bg-[#FF4A00] text-white hover:bg-[#FF4A00]/90",
    icon: "bg-white text-[#FF4A00]",
  },
};

export function HeroButton({
  className,
  children,
  variant = 'default',
  onClick,
  ...props
}: HeroButtonProps) {
  const styles = variantStyles[variant];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open("https://cal.com/neeraj-sharma/30min", "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group flex items-stretch overflow-hidden font-medium transition-transform active:scale-95",
        styles.container,
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center px-8 py-4 text-sm transition-colors uppercase tracking-wider flex-1",
          styles.text
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          "flex aspect-square items-center justify-center transition-colors w-14",
          styles.icon
        )}
      >
        <Play className="h-4 w-4 fill-current" />
      </div>
    </button>
  );
}

