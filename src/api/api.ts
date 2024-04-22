import { ITasks } from "@/types/tasks";

const baseUrl = "https://02da6eb2c7e0706e.mokky.dev";

export const getAllTasks = async (): Promise<ITasks[]> => {
  try {
    const response = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addTask = async (task: ITasks): Promise<ITasks> => {
  try {
    const response = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as ITasks;
  }
};
