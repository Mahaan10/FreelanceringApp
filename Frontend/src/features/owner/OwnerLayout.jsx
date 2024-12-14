import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CustomNavlink to="dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
