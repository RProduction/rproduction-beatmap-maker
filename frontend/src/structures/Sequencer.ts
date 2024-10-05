// sequencer hold array of note

export interface Sequencer {
  id: string;
  projectId: string;
  name: string;
  noteIds: number[];
}