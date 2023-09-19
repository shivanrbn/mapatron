import {createElement, useState, Fragment, FC } from "react";
import {
    Typography,
    ListItem,
    Menu,
    MenuProps,
    MenuHandler,
    Collapse,
    Checkbox
  } from "@material-tailwind/react";

import {ChevronDownIcon, MapIcon} from "@heroicons/react/24/outline";
import colors from "@/components/colors";

type MapatronMenuItem = {
color: string;
checkbox:  FC<Parameters<typeof Checkbox>[0]>;
title: string;
description: string;
src: string;
};

type MapatronMenuItemsList = {
    items: MapatronMenuItem[];
};

export default function MapatronSettingsListMenu(props: MapatronMenuItemsList) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
    const renderItems = props.items.map(
      ({ checkbox, title, description, color, src }, key) => (
        <div key={key} className="flex items-center gap-1 rounded-lg">
          <div className={`rounded-lg ${colors[color]}`}>
              {createElement("img", {
                className: "h-10 w-10 rounded-full",
                src: src
              })}
            </div>
            <div className={`rounded-lg ${colors[color]}`}>
              {createElement(checkbox, {
                className: "h-6 w-6 rounded-full",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex"
              >
                {title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </div>
        </div>
      )
    );
   
    return (
      <Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          dismiss={{itemPress: false,  outsidePress: false}}
          placement="bottom"
        >
          <MenuHandler>
              <ListItem
                className="flex items-center gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <MapIcon className="h-[18px] w-[18px]" />
                Layers
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
          </MenuHandler>
        </Menu>
        {/*web menu */}
        <div className="overscroll-auto overflow-y-scroll max-h-80">
          <Collapse open={isMenuOpen}>{renderItems}</Collapse>
        </div>
        {/* Mobile menu */}
        <div className=" overscroll-auto overflow-y-scroll max-h-80 sm:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </Fragment>
    );
  }