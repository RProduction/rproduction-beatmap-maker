import React, {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface Props {
  open: boolean;
  onClose: () => void;
  onApply: (name: string) => void;
}

function NewProjectModal(props: Props) {
  const {open, onClose, onApply} = props;
  const [name, setName] = useState<string>("");

  return (
    <Dialog 
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Create New Project
      </DialogTitle>
      <DialogContent>
        <TextField value={name} onChange={(ev) => setName(ev.currentTarget.value)}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button 
          onClick={() => {
            onApply(name);
            onClose();
          }}
        >
          Create
        </Button>
      </DialogActions>

    </Dialog>
  )
}

export default NewProjectModal