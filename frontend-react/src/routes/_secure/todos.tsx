import { createFileRoute } from "@tanstack/react-router";

import TodosPage from "@/pages/TodosPage";

export const Route = createFileRoute("/_secure/todos")({
  component: TodosPage,
});
