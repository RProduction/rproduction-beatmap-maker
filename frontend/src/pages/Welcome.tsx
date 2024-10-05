import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import NewProjectModal from '@/components/NewProjectModal';

import {useProject} from '@/data/MainState';

function Welcome() {
  const navigate = useNavigate();
  const {setProject} = useProject();
  const [newModal, setNewModal] = useState(false);

  const newBeatmap = (name: string) => {
    setProject(name);
    navigate("/main")
  }

  const loadBeatmap = () => {
    navigate("/main")
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box display="flex" flexDirection="column" gap={4}>
        <Button variant="contained" onClick={() => setNewModal(true)}>
          New Beatmap
        </Button>
        <Button variant="contained" onClick={loadBeatmap}>
          Load Beatmap
        </Button>
      </Box>

      <NewProjectModal
        open={newModal}
        onApply={newBeatmap}
        onClose={() => setNewModal(false)}
      />
    </Box>
  )
}

export default Welcome