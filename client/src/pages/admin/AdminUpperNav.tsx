import type { useCompanySearch } from '@/hooks/CompSearch';
import type { useInternshipsearch } from '@/hooks/InternshipSearch';
import { usejobSearch } from '@/hooks/JobSearch';
import { useNavigate } from 'react-router';

interface AdminUpperNavProps{
  searchType?: "jobs" | "internships" | "companies" | null;
  search?: 
    | ReturnType<typeof usejobSearch>
    | ReturnType<typeof useCompanySearch>
  | ReturnType<typeof useInternshipsearch>
  | null;
}

type SearchResultItem =
  | ReturnType<typeof usejobSearch>["results"][number]
  | ReturnType<typeof useCompanySearch>["results"][number]
  | ReturnType<typeof useInternshipsearch>["results"][number];

const AdminUpperNav = ({ 
    searchType,
    search
 }: AdminUpperNavProps) => {
  const handleChange = search?.handleChange;
  const query = search?.query ?? "";
  const results = search?.results ?? [];
  const setQuery = search?.setQuery;
  const setResults = search?.setResults;
  const navigate = useNavigate();

    const getItemLabel = (item: SearchResultItem): string => {
      if (searchType === "companies" && "name" in item) {
        return item.name;
      }
      if ("title" in item) {
        return item.title;
      }
      return "";
    };

    const getItemKey = (item: SearchResultItem, index: number): string => {
      if ("id" in item) {
        return String(item.id);
      }
      if ("name" in item) {
        return item.name;
      }
      return `result-${index}`;
    };

    const uniqueResults = Array.from(
      new Map(
        results
          .map((item) => ({ item, label: getItemLabel(item) }))
          .filter(({ label }) => label.trim().length > 0)
          .map(({ item, label }) => [label, item] as const)
      ).values()
    );

  return (
    <header className="fixed top-0 left-72 right-0 h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant z-40 px-md flex items-center justify-between">
      <div className="flex-1 max-w-3xl relative">
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-4 text-outline">
          search
        </span>

        <input
          className="w-full h-11 pl-12 pr-4 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-secondary/50 text-body-sm outline-none transition-all"
          placeholder="Search records, users, jobs..."
          type="text"
          onChange={handleChange}
          value={query}
          disabled={!search} 
        />
      </div>

      {search && uniqueResults.length > 0 && (
        <ul className="absolute top-full mt-2 left-0 right-0 z-50 max-h-80 overflow-y-auto rounded-xl border border-outline-variant bg-white shadow-lg">
          {uniqueResults.map((item, index) => {
            const label = getItemLabel(item);
            return (
            <li
              key={getItemKey(item, index)}
              className="cursor-pointer border-b border-slate-100 last:border-b-0"
              onClick={() => {
                setQuery?.(label);
                setResults?.([]);
              }}
            >
              <div className="bg-white text-gray-900 px-4 py-2 hover:bg-gray-100">
                <strong>{label}</strong>
              </div>
            </li>
            );
          })}
        </ul>
      )}
    </div>


  <div className="flex items-center gap-md">
    <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
    </button>
    <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
      <span className="material-symbols-outlined">help</span>
    </button>
    <div className="flex items-center gap-sm pl-sm border-l border-outline-variant">
      <div className="text-right hidden lg:block">
        <p className="font-label-strong text-label-strong text-on-surface">
          Admin User
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="material-symbols-outlined text-on-primary text-[18px]">
          person
        </span>
      </div>
      
    </div>
  </div>
</header>

  )
}

export default AdminUpperNav