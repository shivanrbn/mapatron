import React from "react";
import {
  Typography,

  MenuItem,
} from "@material-tailwind/react";
import colors from "../colors";


export default function renderItems(navListMenuItems: any){
return navListMenuItems.map(
    ({ icon, title, description, color }: any, key: any) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-1 rounded-lg">
          <div className={`rounded-lg ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
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
        </MenuItem>
      </a>
    )
  );
}
