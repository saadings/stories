import { StoryType } from "../types/redux/storySlice";

const Card = ({ story }: { story: StoryType }) => {
  return (
    <div className="h-fit w-fit hover:scale-105 duration-[400ms] transition ease-in-out">
      <div className="rounded-lg bg-white p-5 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-700 sm:h-[450px] lg:h-[445px]">
        <a href={story.url}>
          <img
            src={story.multimedia[1].url}
            alt={story.multimedia[1].caption}
            width={story.multimedia[1].width}
            height={story.multimedia[1].height}
            className="rounded-lg"
          />
        </a>
        <div className="mt-2 space-y-3">
          <div className="text-xl font-bold dark:text-gray-300">
            {story.title}
          </div>
          <div className="text-sm dark:text-gray-400">{story.abstract}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
