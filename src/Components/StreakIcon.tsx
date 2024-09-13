const StreakIcon = ({
  type,
  isToday,
  images,
}: {
  type: string;
  isToday: boolean;
  images: string[];
}) => {
  switch (type) {
    case "None":
      return (
        <div
          className={`streak-icon streak-icon-none${
            isToday ? " today-highlight" : ""
          }`}
        />
      );
    case "Freeze":
      return (
        <img
          className='streak-icon streak-icon-freeze'
          alt='low amount of activies completed'
          src={images[1]}
        />
      );
    case "Warm":
      return (
        <img
          className='streak-icon'
          alt='moderate amount of activities completed'
          src={images[2]}
        />
      );
    case "Hot":
      return (
        <img
          className='streak-icon'
          alt='many amount of activies completed'
          src={images[0]}
        />
      );

    default:
      return <div className='streak-icon streak-icon-none' />;
  }
};

export default StreakIcon;
