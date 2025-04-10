
import { cn } from "@/lib/utils";

interface BadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level?: number;
  unlocked?: boolean;
  className?: string;
}

const Badge = ({ name, icon, color, level = 1, unlocked = true, className }: BadgeProps) => {
  return (
    <div className={cn(
      "relative flex flex-col items-center justify-center",
      className
    )}>
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center",
        unlocked ? color : "bg-gray-200",
        unlocked ? "badge-glow" : ""
      )}>
        <div className="text-white">{icon}</div>
      </div>
      <span className={cn(
        "mt-2 text-xs font-medium",
        unlocked ? "text-gray-800" : "text-gray-500"
      )}>
        {name}
      </span>
      {level > 1 && unlocked && (
        <div className="absolute -top-1 -right-1 bg-lavender-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {level}
        </div>
      )}
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Badge;
