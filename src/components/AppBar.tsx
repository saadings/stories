const Tabs = ({ tab }: { tab: string }) => {
  return (
    <>
      <div className="flex cursor-pointer items-center justify-center p-2 text-xl dark:hover:text-white">
        {tab}
      </div>
    </>
  );
};

const AppBar = () => {
  const tabs = ["Home", "Stories", "About", "Contact"];

  return (
    <div className="flex flex-row items-center justify-center space-x-2 border-b-[1px] border-gray-500 p-5 dark:text-slate-400">
      {tabs?.map((tab) => (
        <Tabs tab={tab} key={tab} />
      ))}
    </div>
  );
};

export default AppBar;
