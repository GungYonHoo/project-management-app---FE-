import Button from './Button';

export default function ProjectList({
  onStartAddProject,
  projects,
  selectedProjectId,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            cssClasses += 'bg-stone-800 text-stone-200';
          } else {
            cssClasses += 'text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

// map() 메소드를 사용할때 명시적으로라도 key값을 선언해줘야 한다.
// -> ListItem 컴포넌트에 명시적인(실제로 자식 컴포넌트와 연결이 되지 않는) key값을 선언해주었다.
