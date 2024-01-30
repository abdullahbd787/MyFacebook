import React, { ReactNode, useState } from "react";
import Home from "./Home";
import { MdHomeFilled } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import Message from "./Message";
import Help from "./Help";
import News from "./News";

interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
  icon?: ReactNode;
}

interface CustomTabsProps {
  tabs: Tab[];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || null);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div style={{}}>
        {tabs.map((tab) =>
          tab.id === activeTab ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
      <div className="flex bg-white w-full bottom-0 right-0 left-0 absolute justify-between rounded-b-xl shadow-xl">
        {tabs.map((tab) => (
          <div
            className=" cursor-pointer w-full items-center justify-center flex flex-col"
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              padding: "10px",
              cursor: "pointer",
              color: tab.id === activeTab ? "#0057FF" : "",
            }}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const App: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      label: "Home",
      icon: <MdHomeFilled className="text-2xl" />,
      content: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      id: 2,
      label: "Message",
      icon: <MdMessage className="text-2xl" />,
      content: (
        <div>
          <Message />
        </div>
      ),
    },
    {
      id: 3,
      label: "Help",
      icon: <IoIosHelpCircleOutline className="text-2xl" />,
      content: (
        <div>
          <Help />
        </div>
      ),
    },
    {
      id: 4,
      label: "News",
      icon: <HiSpeakerphone className="text-2xl" />,
      content: (
        <div>
          <News />
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* <h1>Custom Tabs Example</h1> */}
      <CustomTabs tabs={tabs} />
    </div>
  );
};

export default App;
