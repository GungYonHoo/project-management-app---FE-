export default function ContentHeader({ onDelete, project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-4">
          {project.title}
        </h1>
        <button
          onClick={onDelete}
          className="text-stone-600 hover:text-stone-950"
        >
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-4">{formattedDate}</p>
      <p className="flex flex-col gap-1 my-4">{project.description}</p>
    </header>
  );
}
