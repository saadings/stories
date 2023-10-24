const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg bg-black/25 p-16 drop-shadow-2xl">
      {children}
    </div>
  );
};

export default CardContainer;
