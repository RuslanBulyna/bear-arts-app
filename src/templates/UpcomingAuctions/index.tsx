import AuctionCard from '@/components/AuctionCard';
import nft_img_1 from 'public/assets/images/nft_img_1.png';
import nft_img_2 from 'public/assets/images/nft_img_2.png';
import nft_img_3 from 'public/assets/images/nft_img_3.png';
import nft_img_4 from 'public/assets/images/nft_img_4.png';

const UpcomingAuctions = () => {
  return (
    <div id="upcoming-auction" className="py-24">
      <div className="container px-5">
        <div
          data-orientation="horizontal"
          role="none"
          className="my-4 h-[4px] w-full shrink-0 bg-black"
        />
        <h2 className="mb-6 scroll-m-20 pb-2 text-center text-4xl font-bold tracking-tight transition-colors first:mt-0">
          Upcoming Auctions
        </h2>
        <div className="container flex max-w-6xl flex-col justify-between gap-10 lg:flex-row">
          <AuctionCard
            collectionName="Venom Bears"
            image={nft_img_1}
            cardName="Bear Arts"
          />
          <AuctionCard
            collectionName="Venom Bears"
            image={nft_img_2}
            cardName="Bear Arts"
          />
          <AuctionCard
            collectionName="Venom Bears"
            image={nft_img_3}
            cardName="Bear Arts"
          />
          <AuctionCard
            collectionName="Venom Bears"
            image={nft_img_4}
            cardName="Bear Arts"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingAuctions;
