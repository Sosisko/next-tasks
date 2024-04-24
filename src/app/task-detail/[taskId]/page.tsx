// import { getTask } from "@/api/api";
// import { Button } from "antd";
// import Link from "next/link";

// interface tasksProps {
//   params: {
//     taskId: number;
//   };
// }

// export default async function taskDetail({ params }: tasksProps) {
//   const task = await getTask(params.taskId);

//   return (
//     <div className="container">
//       <h1>Страница заявки {task.id}</h1>
//       <p>{task.secondname}</p>
//       <p>{task.name}</p>
//       <p>{task.surname}</p>
//       <p>{task.company}</p>
//       <p>{task.phone}</p>
//       <Link href="/admin">
//         <Button>Назад</Button>
//       </Link>
//     </div>
//   );
// }

import { getTask } from "@/api/api";
import { ITasks } from "@/types/tasks";
import { Button } from "antd";
import Link from "next/link";

interface tasksProps {
  params: {
    taskId: number;
  };
}

export async function generateStaticParams() {
  const tasks = await fetch("https://02da6eb2c7e0706e.mokky.dev/tasks").then(
    (res) => res.json()
  );

  return tasks.map((task: { id: number }) => ({
    taskId: task.id.toString(),
  }));
}

export async function generateStaticProps({
  params,
}: {
  params: { taskId: string };
}) {
  const task = await getTask(parseInt(params.taskId, 10));

  if (!task) {
    return { notFound: true };
  }

  return {
    props: {
      task,
    },
  };
}

export default function TaskDetail({ task }: any) {
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
