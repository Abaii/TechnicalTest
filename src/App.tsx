import Calendar from "./Components/Calendar";
import "./App.css";
import { CalendarProps, Streak } from "./Components/types";
const mockData: CalendarProps = {
  streak_length: 2,
  calendar: [
    {
      date: new Date("2024-09-01T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-02T12:23:01.507Z"),
      streak_type: Streak.Warm,
    },
    {
      date: new Date("2024-09-03T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-04T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-05T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-06T12:23:01.507Z"),
      streak_type: Streak.Freeze,
    },
    {
      date: new Date("2024-09-07T12:23:01.507Z"),
      streak_type: Streak.Warm,
    },
    {
      date: new Date("2024-09-08T12:23:01.507Z"),
      streak_type: Streak.Warm,
    },
    {
      date: new Date("2024-09-09T12:23:01.507Z"),
      streak_type: Streak.Warm,
    },
    {
      date: new Date("2024-09-10T12:23:01.507Z"),
      streak_type: Streak.Warm,
    },
    {
      date: new Date("2024-09-11T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-12T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-13T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-18T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-17T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },

    {
      date: new Date("2024-09-19T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-20T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-21T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-22T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-23T12:23:01.507Z"),
      streak_type: Streak.Freeze,
    },
    {
      date: new Date("2024-09-24T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-25T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-26T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-27T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-28T12:23:01.507Z"),
      streak_type: Streak.Hot,
    },
    {
      date: new Date("2024-09-29T12:23:01.507Z"),
      streak_type: Streak.None,
    },
    {
      date: new Date("2024-09-30T12:23:01.507Z"),
      streak_type: Streak.Freeze,
    },
  ],
  images: [
    "https://gizmo.imgix.net/build/_assets/Basic-NTQBDKA6.svg?q=100",
    "https://www.svgrepo.com/show/455018/freeze.svg",
    "https://www.svgrepo.com/show/302608/flame.svg",
  ],
};
function App() {
  return (
    <div className='App'>
      <Calendar
        streak_length={mockData.streak_length}
        calendar={mockData.calendar}
        images={mockData.images}
      />
    </div>
  );
}

export default App;
