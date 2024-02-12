import { NewspaperIcon } from "@heroicons/react/24/outline";

const NewsLetter = () => {
  return (
    <main className="main-page-section">
      <article className="flex justify-between w-full gap-8 items-center bg-light-1 rounded-2xl border border-light-3 px-6 py-8 md:flex-row flex-col">
        <div className="flex gap-y-2 flex-col">
          <div className="text-icon-title">
            <h2>Subscribe to our Newsletter</h2>
            <div className="flex justify-center items-center">
              <NewspaperIcon className="icon-def" />
            </div>
          </div>
          <p className="max-w-[420px] text-gray-2 text-sm">
            Are you interested in being notified about our new post and courses?
            Subscribe to our newsletter to be informed about our new content
          </p>
        </div>
        <form className="flex">
          <input
            placeholder="Write your email..."
            className="px-3 py-2.5 rounded-l-3xl placeholder:text-gray-2 text-gray-1 border border-light-3 bg-light-2 focus:outline-primary w-full"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-primary rounded-r-3xl px-3 py-2.5 text-sm text-light-1 font-semibold hover:bg-primary-hover"
          >
            Subscribe
          </button>
        </form>
      </article>
    </main>
  );
};

export default NewsLetter;
