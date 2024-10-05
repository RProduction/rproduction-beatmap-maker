import React from 'react';

import {useProject} from '@/data/MainState';

function Main() {
  const {project} = useProject();

  return (
    <div>
      {project.name}
    </div>
  )
}

export default Main