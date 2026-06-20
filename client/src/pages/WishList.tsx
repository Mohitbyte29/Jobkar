import { wishListContext } from "@/context/WishlistContext";
import { useContext } from "react";

export default function WishList() {
    interface Jobs {
        id: number;
        title: string;
        company: string;
        location: string;
        category: string;
    }
    const { wishList, removeFromWishList } = useContext(wishListContext);
    const saved = localStorage.getItem("wishList");
  return (
    <main className="flex-grow max-w-max_width w-full mx-auto px-gutter py-xl grid grid-cols-1 md:grid-cols-12 gap-lg">
      {/* Sidebar: Sorting & Filters */}
      <aside className="md:col-span-3 space-y-md">
        <div className="bg-surface-container-lowest p-md rounded-xl job-card-shadow border border-surface-variant/30">
          <h2 className="font-h3 text-h3 mb-md">Sort By</h2>
          <div className="space-y-xs">
            <label className="flex items-center gap-sm p-sm rounded-lg cursor-pointer bg-secondary-container/10 border border-secondary/20">
              <input
                defaultChecked={true}
                className="text-secondary focus:ring-secondary"
                name="sort"
                type="radio"
              />
              <span className="font-label-strong text-label-strong text-on-secondary-container">
                Recently Saved
              </span>
            </label>
            <label className="flex items-center gap-sm p-sm rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <input
                className="text-secondary focus:ring-secondary"
                name="sort"
                type="radio"
              />
              <span className="font-label-strong text-label-strong text-on-surface-variant">
                Salary: High to Low
              </span>
            </label>
            <label className="flex items-center gap-sm p-sm rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <input
                className="text-secondary focus:ring-secondary"
                name="sort"
                type="radio"
              />
              <span className="font-label-strong text-label-strong text-on-surface-variant">
                Closing Date
              </span>
            </label>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl job-card-shadow border border-surface-variant/30">
          <h2 className="font-h3 text-h3 mb-md">Quick Links</h2>
          <nav className="flex flex-col gap-xs">
            <a
              className="flex items-center gap-sm text-on-surface-variant hover:text-secondary transition-colors p-sm"
              href="#"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-strong text-label-strong">
                My Applications
              </span>
            </a>
            <a
              className="flex items-center gap-sm text-on-surface-variant hover:text-secondary transition-colors p-sm"
              href="#"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="font-label-strong text-label-strong">
                Job Alerts
              </span>
            </a>
          </nav>
        </div>
      </aside>
      {/* Content: Saved Jobs List */}
      <section className="md:col-span-9">
        <div className="flex items-baseline justify-between mb-lg">
          <div className="flex items-baseline gap-sm">
            <h1 className="font-h1 text-h1">Saved Jobs</h1>
            <span className="text-on-surface-variant font-body-md">(12)</span>
          </div>
          <button className="text-secondary font-label-strong text-label-strong flex items-center gap-xs hover:underline">
            <span className="material-symbols-outlined text-[18px]">
              delete_sweep
            </span>
            Clear All
          </button>
        </div>
        <div className="flex flex-col gap-md">
          {/* Job Card 1 */}
          {wishList.map((job: Jobs) => (
            <article className="bg-surface-container-lowest p-md md:p-lg rounded-xl job-card-shadow border border-surface-variant/30 transition-all hover:border-secondary/40 group relative">
              <div className="flex flex-col md:flex-row gap-md items-start">
                <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center flex-shrink-0">
                  <img
                    alt="Company Logo"
                  className="w-10 h-10 object-contain"
                  data-alt="A clean, minimalist logo for a modern technology company called 'Nexus Tech'. The logo features a sleek, abstract geometric 'N' shape in deep black and teal, centered on a light gray square background. The visual style is professional, institutional, and high-tech, reflecting a corporate modern aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCds8fUkSSi0gKLwUPpCE31cKyRWl-8d7SNfhmNQacA6UckBk9NlTx1KUUMR9o6ht35-yzZkBmTOtG4vFPp_EekvrQynREEFQRTvwQnSF4k2r4f2XZiAKmgqIpQtstCiGjaRHN_GKY_lHnQpoWiZ1tqD9GE4_17ZOjetZtxDN6rV8V1do1v42VSGDrFfQpvfPR9CPMGq3p70A__ot6JKGm_tetA2jXMyIdIwcZywnASkMeHq75b_ETMTWUtPLyBfvqIIcBliemR25o"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-sm mb-xs">
                  <h3 className="font-h3 text-h3 text-primary">
                    {job.title}
                  </h3>
                  <span className="bg-secondary/10 text-secondary px-xs py-[2px] rounded font-label-caps text-label-caps uppercase">
                    Accepting Applications
                  </span>
                </div>
                <p className="font-label-strong text-label-strong text-on-surface-variant mb-sm">
                  {job.company} • {job.location}
                </p>
                <div className="flex flex-wrap gap-sm items-center">
                  <div className="flex items-center gap-xs bg-surface-container-low px-sm py-xs rounded-full">
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      payments
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      $140k - $180k
                    </span>
                  </div>
                  <div className="flex items-center gap-xs bg-surface-container-low px-sm py-xs rounded-full">
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      calendar_today
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      Saved 2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col gap-sm w-full md:w-auto mt-md md:mt-0">
                <button className="flex-grow md:flex-none bg-primary text-on-primary font-label-strong text-label-strong px-lg py-sm rounded-lg hover:opacity-90 transition-opacity active:scale-95">
                  Apply Now
                </button>
                <button className="flex items-center justify-center p-sm rounded-lg border border-outline-variant hover:bg-error-container hover:text-on-error-container hover:border-error transition-all group/remove">
                  <span className="material-symbols-outlined text-outline group-hover/remove:text-on-error-container">
                    delete
                  </span>
                  <span className="md:hidden ml-sm font-label-strong text-label-strong">
                    Remove
                  </span>
                </button>
              </div>
            </div>
          </article>
          ))}
          {/* Job Card 2 */}
          
        </div>
      </section>
    </main>
  );
}
