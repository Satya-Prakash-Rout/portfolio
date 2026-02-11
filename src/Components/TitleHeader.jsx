const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 m-3">
      {sub && (
        <div className="hero-badge">
          <p>{sub}</p>
        </div>
      )}

      {title ? (
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      ) : null}
    </div>
  );
};

export default TitleHeader;

