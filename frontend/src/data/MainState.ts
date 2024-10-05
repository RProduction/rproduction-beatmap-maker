import {atom, atomFamily, useRecoilState} from 'recoil';
import {Song} from "@/structures/Song";
import {Note} from "@/structures/Note";
import {Sequencer} from "@/structures/Sequencer";
import {Project} from "@/structures/Project";
import {v4} from 'uuid';

export const projectAtom = atom<Project>({
  key: "projectAtom",
  default: {
    id: v4(),
    name: "Project",
    sequencerIds: [],
    bpm: 120
  }
})

export const sequencerAtom = atomFamily<Sequencer, string>({
  key: "sequencerAtom",
  default: {
    id: "",
    projectId: "",
    name: "",
    noteIds: []
  }
})

export const noteAtom = atomFamily<Note, string>({
  key: "noteAtom",
  default: {
    id: "",
    sequencerId: "",
    delta: 0,
    duration: 0
  }
})

export const songAtom = atomFamily<Song, string>({
  key: "songAtom",
  default: {
    id: "",
    projectId: "",
    name: "",
    path: "", 
    duration: 0
  }
})

export function useProject() {
  const [project, _setProject] = useRecoilState(projectAtom);

  const setProject = (name: string) => {
    _setProject({
      name,
      bpm: 120,
      id: v4(),
      sequencerIds: []
    })
  }

  return {
    project,
    setProject
  }
}