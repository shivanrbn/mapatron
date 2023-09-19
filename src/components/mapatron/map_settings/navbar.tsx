import React, { PropsWithChildren } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import MapatronSettingsList from "./settings_list";
 
export default function MapatronSettingsMenu(props: PropsWithChildren) {
  const [openLayers, setOpenLayers] = React.useState(false);
 
  return (
      <div>
        <Navbar className="relative invisible sm:visible rounded-none px-4 py-1 w-[20rem] z-10 sm:top-0 md:fixed bg-opacity-20 bg-black">
            <div className="flex text-blue-gray-900 items-center">
                <IconButton
                variant="text"
                color="blue-gray"
                onClick={() => setOpenLayers(!openLayers)}
                >
                {openLayers ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                    <Square3Stack3DIcon className="h-6 w-6" strokeWidth={2} />
                )}
                </IconButton>
                <Typography
                    as="a"
                    variant="small"
                    className="flex-1 w-0 invisible py-1.5 lg:ml-2 sm:w-60 sm:visible"
                >
                    Map settings
                </Typography>
            </div>
            <Collapse open={openLayers}>
                <MapatronSettingsList />
            </Collapse>
        </Navbar>
    </div>
  );
}