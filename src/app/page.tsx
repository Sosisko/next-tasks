"use client";
import { getAllTasks } from "@/api/api";
import WatchTable from "./WatchTable";
import { useEffect, useState } from "react";
import { ITasks } from "@/types/tasks";
import { Loader, ThemeProvider } from "@gravity-ui/uikit";

export default function Home() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedTasks = await getAllTasks();
      setTasks(fetchedTasks);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  console.log(tasks);
  return (
    <div className="container">
      {isLoading ? (
        <ThemeProvider theme="light">
          <div className="flex justify-center items-center">
            <Loader size="l" />
          </div>
        </ThemeProvider>
      ) : (
        <WatchTable tasks={tasks} />
      )}
      <p className="text-center mt-8">Сейчас заявок: {tasks.length}</p>
    </div>
  );
}
