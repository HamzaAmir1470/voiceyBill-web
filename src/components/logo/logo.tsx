import { PROTECTED_ROUTES } from "@/routes/common/routePath";
import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  return (
    <Link
      to={props.url || PROTECTED_ROUTES.OVERVIEW}
      className="flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        className="h-7 w-7 flex-shrink-0"
      >
        <defs>
          <linearGradient id="vb-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22c55e" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="vb-sheen" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.15" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="vb-mc">
            <rect x="36" y="8" width="28" height="44" rx="14" />
          </clipPath>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#vb-bg)" />
        <rect width="100" height="50" rx="22" fill="url(#vb-sheen)" />
        <rect x="36" y="8" width="28" height="44" rx="14" fill="white" />
        <g clipPath="url(#vb-mc)">
          <rect x="40.5" y="28" width="5.5" height="24" rx="2" fill="#16a34a" opacity="0.75" />
          <rect x="47.5" y="16" width="5.5" height="36" rx="2" fill="#15803d" opacity="0.9" />
          <rect x="54.5" y="22" width="5.5" height="30" rx="2" fill="#16a34a" opacity="0.75" />
        </g>
        <path d="M20 52 Q20 76 50 76 Q80 76 80 52" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="76" x2="50" y2="86" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="34" y1="86" x2="66" y2="86" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-semibold text-lg">VoiceyBill</span>
    </Link>
  );
};

export default Logo;
