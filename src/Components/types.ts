export enum Streak {
  None = "None",
  Freeze = "Freeze",
  Warm = "Warm",
  Hot = "Hot",
}

export type Day = {
  streak_type: Streak;
  date: Date;
};
export type CalendarProps = {
  streak_length: number;
  calendar: Day[];
  images: string[];
};
