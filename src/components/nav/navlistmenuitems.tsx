import {
    MapIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    PuzzlePieceIcon,
    GiftIcon,
  } from "@heroicons/react/24/outline";

import { Chip } from "@material-tailwind/react";

const navListMenuItems = [
    {
      color: "blue",
      icon: MapIcon,
      title: "Mapatron",
      description: "Interactive map created with tailwind",
    },
    {
      color: "orange",
      icon: ChatBubbleOvalLeftIcon,
      title: "Press",
      description: "News and writings, press releases, and resources",
    },
    {
      color: "green",
      icon: UsersIcon,
      title: (
        <div className="flex items-center gap-1">
          Careers{" "}
          <Chip
            size="sm"
            color="green"
            variant="ghost"
            value="We're hiring!"
            className="capitalize"
          />
        </div>
      ),
      description: "We are always looking for talented people. Join us!",
    },
    {
      color: "blue-gray",
      icon: FolderIcon,
      title: "Legal",
      description: "All the stuff that we dan from legal made us add.",
    },
    {
      color: "purple",
      icon: RocketLaunchIcon,
      title: "Products",
      description: "Checkout our products that helps a startup running.",
    },
    {
      color: "teal",
      icon: FaceSmileIcon,
      title: "Icons",
      description: "Set of beautiful icons that you can use in your project.",
    },
    {
      color: "cyan",
      icon: PuzzlePieceIcon,
      title: "UI Kits",
      description: "High quality UI Kits helps you to 2x faster.",
    },
    {
      color: "pink",
      icon: GiftIcon,
      title: "Open Source",
      description: "List of all our open-source projects, it's all free.",
    },
  ];
  
  export default navListMenuItems