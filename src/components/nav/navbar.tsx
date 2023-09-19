import React, { PropsWithChildren } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import navListMenuItems from "./navlistmenuitems";
import renderItems from "./renderitems";
import MapatronSettingsList from "../mapatron/map_settings/settings_list";


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Projects
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl overscroll-auto overflow-y-scroll rounded-xl lg:block bg-gray-400 border-yellow-400 bg-opacity-50">
          <ul className="grid grid-cols-1 gap-y-2">{renderItems(navListMenuItems)}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems(navListMenuItems)}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Blocks
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          About
        </ListItem>
      </Typography>
    </List>
  );
}


 
export default function BasicNav(props: PropsWithChildren) {
  const [openNav, setOpenNav] = React.useState(false);
  const [openSideNav, setOpenSideNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
      <div className="relative z-10 mx-auto items-center w-full sm:w-1/4">
      <Navbar className=" rounded-none px-4 py-2 bg-black bg-opacity-20">
        <div className="flex items-end justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Home
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          {/* wtf is this div */}
          <div className="hidden gap-2 lg:flex">
          </div>
          <div className="justify-end">
            <IconButton
                  variant="text"
                  color="blue-gray"
                  className="sm:hidden"
                  onClick={() => setOpenSideNav(!openSideNav)}
                  >
                  {openSideNav ? (
                      <XMarkIcon className="h-6 w-6" strokeWidth={4} />
                  ) : (
                      <Square3Stack3DIcon className="h-6 w-6" strokeWidth={2} />
                  )}
                  </IconButton>
            <IconButton
              variant="text"
              color="blue-gray"
              className="sm:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
        <Collapse open={openSideNav}>
          <MapatronSettingsList />
        </Collapse>
      </Navbar>
      </div>
  );
}