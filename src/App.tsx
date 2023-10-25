import { useEffect, lazy, Suspense } from "react";
import AppBar from "./components/AppBar";
import CardContainer from "./components/CardContainer";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  fetchStories,
  selectStories,
  selectStoriesError,
  selectStoriesLoading,
} from "./redux/stories/storiesSlice";
import Spinner from "./components/Spinner";
import ErrorContainer from "./components/ErrorContainer";
const Card = lazy(() => import("./components/Card"));

function App() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector(selectStories);
  const storiesError = useAppSelector(selectStoriesError);
  const storiesLoading = useAppSelector(selectStoriesLoading);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen dark:bg-slate-800">
        <AppBar />
        <div className="p-5">
          <CardContainer>
            {storiesLoading ? (
              <Spinner />
            ) : storiesError ? (
              <ErrorContainer errorText={storiesError} />
            ) : (
              <Suspense fallback={<Spinner />}>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                  {stories.length > 0 ? (
                    stories?.map((story, index) => (
                      <Card key={index} story={story} />
                    ))
                  ) : (
                    <ErrorContainer errorText="No stories found" />
                  )}
                </div>
              </Suspense>
            )}
          </CardContainer>
        </div>
      </div>
    </>
  );
}

export default App;
