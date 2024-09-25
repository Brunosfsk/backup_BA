import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarComp from '../../components/Sidebar/Sidebar';

const LayoutADM = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div className="flex justify-center items-start">
        <SidebarComp />
        <ScrollArea className="flex flex-col flex-1 h-dvh">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
};
export default LayoutADM;
