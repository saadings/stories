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
            <>
              <div className="flex h-[258px] items-center justify-center space-x-2 text-xl font-bold dark:text-slate-300">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  width="25px"
                  height="25px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon
                      style={{ fill: "#FFA418" }}
                      points="0,477.703 256,477.703 289.391,256 256,34.297 "
                    ></polygon>
                    <polygon
                      style={{ fill: "#FF8A1E" }}
                      points="256,34.297 256,477.703 512,477.703 "
                    ></polygon>
                    <g>
                      <circle
                        style={{ fill: "#324860" }}
                        cx="256"
                        cy="405.359"
                        r="16.696"
                      ></circle>
                      <rect
                        x="239.304"
                        y="177.185"
                        style={{ fill: "#324860" }}
                        width="33.391"
                        height="178.087"
                      ></rect>
                    </g>
                  </g>
                </svg>
                <div>No Image Found for this Story</div>
              </div>
            </>
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
