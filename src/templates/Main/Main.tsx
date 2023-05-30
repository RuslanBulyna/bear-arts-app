import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  // @ts-ignore
  return (
    <>
      <Header
        linksList={[
          {
            name: "Auctions",
            url: "#",
          },
          {
            name: "Collections",
            url: "#",
            isBeta: true,
          },
          {
            name: "Artists",
            url: "#",
            isBeta: true,
          },
          {
            name: "About",
            url: "#",
            hasModal: true,
            modal: {
              text: "We are delighted to offer creators a unique opportunity to showcase and monetize their digital masterpieces.",
            },
          },
        ]}
      />
      {props.children}
      <Footer />
    </>
  );
};

export { Main };
