import { useRouter } from 'next/router';

import Auction from '@/templates/Auction';
import { Main } from '@/templates/Main/Main';
import UpcomingAuctions from '@/templates/UpcomingAuctions';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      children={
        <>
          <Auction />
          <UpcomingAuctions />
        </>
      }
    />
  );
};

export default Index;
