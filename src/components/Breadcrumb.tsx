import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const textColor = dark
    ? "text-brand-cream/50 hover:text-brand-cream/80"
    : "text-brand-text-secondary hover:text-brand-text";
  const separatorColor = dark ? "text-brand-cream/30" : "text-brand-text-secondary/40";
  const currentColor = dark ? "text-brand-cream/80" : "text-brand-text";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li>
          <Link href="/" className={`${textColor} transition-colors`}>
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <svg
              className={`w-3 h-3 ${separatorColor}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link href={item.href} className={`${textColor} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={currentColor} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
