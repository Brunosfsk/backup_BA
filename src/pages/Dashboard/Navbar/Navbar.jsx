import { Menu, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function NavBar({ title }) {
  return (
    <nav className="bg-[#373A40] text-white h-[240px] w-full flex px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between w-full h-12 items-center">

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Homepage</DropdownMenuItem>
              <DropdownMenuItem>Portfolio</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1 text-center">
          <span className="text-xl font-semibold">{title}</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <div className="relative">
              <Bell className="h-6 w-6" />
              {/* <Badge className="absolute top-0 right-0 rounded-sm w-2 h-2" variant="secondary" /> */}
              <div className="absolute -top-1 right-0 rounded-sm w-3 h-3 bg-red-600" variant="secondary" />

            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
}
