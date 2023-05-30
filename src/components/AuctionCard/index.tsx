import Image, { StaticImageData } from 'next/image';

type AuctionCardProps = {
  collectionName: string;
  image: string | StaticImageData;
  cardName: string;
};

const AuctionCard = (props: AuctionCardProps) => {
  const { collectionName, image, cardName } = props;

  return (
    <div>
      <Image
        src={image}
        alt={cardName}
        width="218"
        height="218"
        className="mb-3 w-full"
      />
      <h3 className="text-xl">{collectionName}</h3>
      <h4>{cardName}</h4>
    </div>
  );
};

export default AuctionCard;
