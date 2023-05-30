import Auction from "@/templates/Auction";
import { Main } from "@/templates/Main/Main";
import UpcomingAuctions from "@/templates/UpcomingAuctions";

const Index = () => {
  return (
    <Main>
      <Auction />
      <UpcomingAuctions />
    </Main>
  );
};

export default Index;
