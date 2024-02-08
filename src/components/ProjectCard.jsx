import { useRef } from 'react';
import Input from './Input';
import Button from './Button';

export default function ProjectCard({ project }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const image = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    const enteredImage = image.current.value;
  }

  return (
    <div className="my-card w-full">
      <div className="inner-card">
        <div
          style={{
            background: `url(
                ${project.image}
              )`,
          }}
          className="front-side"
        >
          <p className="title uppercase">{project.title}</p>
          <p>Hover Me</p>
        </div>
        <div className="back-side">
          <div className="px-2 w-4/5">
            <Input
              type="text"
              ref={title}
              label="Title"
              value={project.title}
            />
            <Input
              ref={description}
              label="Description"
              textarea
              value={project.description}
            />
            <Input
              type="date"
              ref={date}
              label="Due Date"
              value={project.date}
            />
            <Input
              type="text"
              ref={image}
              label="Url Image"
              value={project.image}
            />
          </div>
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <Button white>Delete</Button>
            </li>
            <li>
              <Button white>Save</Button>
            </li>
          </menu>
        </div>
      </div>
    </div>
  );
}
