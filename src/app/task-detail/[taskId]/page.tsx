import { getTask } from "@/api/api";
import { Button } from "antd";
import Link from "next/link";

interface tasksProps {
  params: {
    taskId: number;
  };
}

export default async function taskDetail({ params }: tasksProps) {
  const task = await getTask(params.taskId);

  return (
    <div className="container">
      <h1>Страница заявки {task.id}</h1>
      <p>{task.secondname}</p>
      <p>{task.name}</p>
      <p>{task.surname}</p>
      <p>{task.company}</p>
      <p>{task.phone}</p>
      <Link href="/admin">
        <Button>Назад</Button>
      </Link>
    </div>
  );
}
