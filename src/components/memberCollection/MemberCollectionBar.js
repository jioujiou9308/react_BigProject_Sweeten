import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { motion } from "framer-motion"

function MemberCollectionBar() {
  const data = [
    {
      label: "收藏",
      value: "favorit_product",
      // desc: `It really matters and then like it really doesn't matter.
      // What matters is the people who are sparked by it. And the people
      // who are like offended by it, it doesn't matter.`
    },
    {
      label: "評論",
      value: "comment",
      // desc: `Because it's about motivating the doers. Because I'm here
      // to follow my dreams and inspire other people to follow their dreams, too.`
    },
  ];
  return (
    <>
      {/* <div className="flex justify-center py-3 bg-white">
        <h2 className="px-12 md:px-16 h2">收藏</h2>
        <h2 className="px-12 md:px-16 h2">評論</h2>
      </div> */}
      <div className="px-3">
        <Tabs value="favorit_product">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      
      </div>
      
    </>
  );
}

export default MemberCollectionBar;
