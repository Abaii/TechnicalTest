import React from "react";
import { CalendarProps } from "./types";
import { Streak } from "./types";
import StreakIcon from "./StreakIcon";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = new Date();

const Calendar = ({ streak_length, calendar, images }: CalendarProps) => {
  const firstCalendarEntry = calendar[0].date;
  const firstDay = firstCalendarEntry.getDay();
  const blankDays = Array(firstDay === 0 ? 6 : firstDay - 1).fill({
    streak_type: Streak.None,
    date: null,
  });

  const calendarWithBlanks = [...blankDays, ...calendar];
  const weeks = [];

  for (let i = 0; i < calendarWithBlanks.length; i += 7) {
    weeks.push(calendarWithBlanks.slice(i, i + 7));
  }

  return (
    <div className='streak-calendar'>
      <div className='streak-header'>
        <img
          className='streak-icon'
          alt='many amount of activies completed'
          src={images[0]}
        />
        <h2 className='streak-title'>{streak_length} day streak!</h2>
      </div>
      <div className='streak-grid'>
        {days.map((day, idx) => (
          <div key={idx} className='streak-day-label'>
            <p>{day}</p>
          </div>
        ))}
        {weeks.map((week, weekIdx) => (
          <React.Fragment key={weekIdx}>
            {week.map(({ streak_type, date }, dayIdx) => (
              <div
                key={dayIdx}
                className={`streak-icon-wrapper${
                  streak_type !== Streak.None ? " streak-highlight" : ""
                }`}>
                <StreakIcon
                  type={streak_type}
                  isToday={date !== null && today.getDate() === date?.getDate()}
                  images={images}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
