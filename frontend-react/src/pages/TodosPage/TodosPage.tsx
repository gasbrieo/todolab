import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import Typography from "@/components/Typography";
import { useSidebarStore } from "@/stores/sidebarStore";

import "./TodosPage.scss";

const TodosPage = () => {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <div className="todos-page">
      <IconButton
        className="dashboard-page__toggle-sidebar"
        data-testid="todos-page_toggle-sidebar"
        onClick={toggle}
      >
        <Icon name="Menu" />
      </IconButton>
      <Typography variant="h6">Todos Page</Typography>
    </div>
  );
};

export default TodosPage;
