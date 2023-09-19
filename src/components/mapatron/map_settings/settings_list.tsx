import React from "react";
import {
  Typography,
  List,
  ListItem
} from "@material-tailwind/react";
import MapatronSettingsListMenu from "./settings_list_menu";
import LayersListMenu from "./settings_layers";

export default function MapatronSettingsList() {
    return (
      <List className="flex-col">
        <ListItem>
          <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
            test
        </Typography>
        </ListItem>
          <MapatronSettingsListMenu  items={LayersListMenu}/>
      </List>
    );
  }