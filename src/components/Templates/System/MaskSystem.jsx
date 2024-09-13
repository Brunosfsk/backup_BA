import NavBar from "../../../pages/Dashboard/Navbar/Navbar";
import SidebarComp from "../../Sidebar/Sidebar";


const MaskSystem = () => {
    return (
        <div className="h-dvh flex flex-col justify-between ">
            <div className="flex justify-center items-start">
                <SidebarComp />
                <NavBar title="MaskSystem" />
            </div>
        </div>
    );
};

export default MaskSystem;