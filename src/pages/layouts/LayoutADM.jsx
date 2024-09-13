import SidebarComp from '../../components/Sidebar/Sidebar';

const LayoutADM = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <SidebarComp />
        <div className="flex flex-col flex-1 h-full">{children}</div>
      </div>
    </div>
  );
};
export default LayoutADM;
