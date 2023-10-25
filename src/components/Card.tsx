import { StoryType } from "../types/redux/storySlice";

const Card = ({ story }: { story: StoryType }) => {
  return (
    <a href={story?.url} target="_blank" rel="noopener noreferrer">
      <div className="h-fit w-fit drop-shadow-2xl transition duration-[400ms] ease-in-out hover:scale-105">
        <div className="rounded-lg bg-white p-5 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-700">
          {story?.multimedia?.length > 1 ? (
            <img
              src={story?.multimedia[1].url}
              alt={story?.multimedia[1].caption}
              width={story?.multimedia[1].width}
              height={story?.multimedia[1].height}
              className="rounded-lg shadow-lg"
            />
          ) : (
            <div className="flex justify-center items-center h-[258px] dark:text-slate-300 text-xl font-bold">⚠️ No Image Found for this Story</div>
          )}
          <div className="mt-2 space-y-3">
            <div className="line-clamp-1 text-xl font-bold dark:text-gray-300">
              {story?.title}
            </div>
            <p className="line-clamp-2 text-sm dark:text-gray-400">
              {story?.abstract}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
