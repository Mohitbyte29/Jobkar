import type { useCompanySearch } from '@/hooks/CompSearch';
import type { useInternshipsearch } from '@/hooks/InternshipSearch';
import { usejobSearch } from '@/hooks/JobSearch';
import { Search, Bell, HelpCircle, Shield } from 'lucide-react';

interface AdminUpperNavProps {
  searchType?: 'jobs' | 'internships' | 'companies' | null;
  search?:
    | ReturnType<typeof usejobSearch>
    | ReturnType<typeof useCompanySearch>
    | ReturnType<typeof useInternshipsearch>
    | null;
}

type SearchResultItem =
  | ReturnType<typeof usejobSearch>['results'][number]
  | ReturnType<typeof useCompanySearch>['results'][number]
  | ReturnType<typeof useInternshipsearch>['results'][number];

const AdminUpperNav = ({ searchType, search }: AdminUpperNavProps) => {
  const handleChange = search?.handleChange;
  const query = search?.query ?? '';
  const results = search?.results ?? [];
  const setQuery = search?.setQuery;
  const setResults = search?.setResults;

  const getItemLabel = (item: SearchResultItem): string => {
    if (searchType === 'companies' && 'name' in item) {
      return item.name;
    }
    if ('title' in item) {
      return item.title;
    }
    return '';
  };

  const getItemKey = (item: SearchResultItem, index: number): string => {
    if ('id' in item) {
      return String(item.id);
    }
    if ('name' in item) {
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
    <header className="fixed top-0 left-72 right-0 h-20 bg-[#07110D]/90 backdrop-blur-xl border-b border-[#20352B] z-30 px-8 flex items-center justify-between">
      {/* Search Input */}
      <div className="flex-1 max-w-2xl relative">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 absolute left-4 text-[#9AAEA3]" />

          <input
            className="w-full h-11 pl-11 pr-4 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all disabled:opacity-40"
            placeholder={
              search
                ? `Search ${searchType || 'records, entities'}...`
                : 'Global admin search (disabled on this view)...'
            }
            type="text"
            onChange={handleChange}
            value={query}
            disabled={!search}
          />
        </div>

        {/* Autocomplete Dropdown */}
        {search && uniqueResults.length > 0 && (
          <ul className="absolute top-full mt-2 left-0 right-0 z-50 max-h-80 overflow-y-auto rounded-2xl border border-[#20352B] bg-[#111F19] shadow-2xl p-1.5 space-y-1">
            {uniqueResults.map((item, index) => {
              const label = getItemLabel(item);
              return (
                <li
                  key={getItemKey(item, index)}
                  className="cursor-pointer"
                  onClick={() => {
                    setQuery?.(label);
                    setResults?.([]);
                  }}
                >
                  <div className="px-4 py-2.5 rounded-xl hover:bg-[#0D1814] text-[#F1F5F2] hover:text-[#22C55E] text-xs font-bold transition-colors">
                    {label}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button className="relative p-2.5 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19] rounded-xl transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-[#07110D]" />
        </button>

        <button className="p-2.5 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19] rounded-xl transition-colors cursor-pointer">
          <HelpCircle className="w-5 h-5" />
        </button>

        <div className="h-6 w-px bg-[#20352B] mx-1" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-[#F1F5F2] leading-tight">
              Root Administrator
            </p>
            <p className="text-[10px] text-[#22C55E] uppercase tracking-wider font-extrabold">
              admin
            </p>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] font-bold text-xs">
            <Shield className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminUpperNav;