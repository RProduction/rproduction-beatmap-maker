// id is note id
// delta is offset throught song duration
// duration is how long the note is
// note will be sorted by delta
// note can't overlap

export interface Note {
  id: string;
  sequencerId: string;
  delta: number;
  duration: number;
}