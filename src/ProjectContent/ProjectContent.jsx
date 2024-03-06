import ContentHeader from './ContentHeader';
import ContentFooter from './ContentFooter';
import { useState } from 'react';

export default function ProjectContent({
  onDelete,
  project,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  return (
    <div className="w-[35rem] mt-16">
      <ContentHeader onDelete={onDelete} project={project} />
      <ContentFooter
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}
