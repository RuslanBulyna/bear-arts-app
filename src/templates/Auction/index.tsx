import Image from "next/image";
import nft_drake from "public/assets/images/nft_drake.png";
import { useState } from "react";

import Countdown from "@/components/Countdown";

const Auction = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  // @ts-ignore
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean | undefined>(
    true
  );

  const DAYS_IN_MS = 20 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_IN_MS;

  return (
    <div id="auction" className="pt-32 text-slate-800">
      <div className="container px-5">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold">VENOM BEARS</h2>
            <div className="mt-3 flex gap-3">
              <div className="focus:ring-ring bg-secondary hover:bg-secondary/80 text-secondary-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Art
              </div>
              <div className="focus:ring-ring bg-secondary hover:bg-secondary/80 text-secondary-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Collectible
              </div>
              <div className="focus:ring-ring bg-secondary hover:bg-secondary/80 text-secondary-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Mutable
              </div>
            </div>
            <p className="mb-5 mt-10 text-xl">
              Venom Bears is the first collection on the Venom Blockchain. With
              its new Bear Arts platform, artists have enormous opportunities to
              showcase their masterpieces to the world.
            </p>
            <p className="mb-10 text-xl">
              Participation in the Venom Auction testnet grants users a
              whitelist spot in future "Venom Bears" collection.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/bearstudio_NFT"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://discord.gg/XgxDfykqMr"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-discord-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Image
            src={nft_drake}
            alt="polar"
            width="400"
            height="400"
            className="w-full"
          />
          <div className="self-center text-center">
            <div className="grid w-full items-center gap-5">
              <h3 className="text-2xl font-bold">Current Bid: 1 Venom</h3>
              <h6 className="text-1xl">
                Your bid must be greater than the current bid to claim.
              </h6>
              <input
                type="number"
                className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-white p-6 text-lg file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="bid"
              />
              <button
                type="button"
                className="focus-visible:ring-ring ring-offset-background text-primary-foreground inline-flex h-11 w-full items-center justify-center rounded-xl bg-emerald-400 px-8 text-lg font-bold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                BID
              </button>
              <button
                type="button"
                disabled={isClaimDisabled}
                className={`${
                  isClaimDisabled
                    ? "disabled:pointer-events-none disabled:opacity-50"
                    : ""
                } focus-visible:ring-ring ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 w-full items-center justify-center rounded-xl px-8 text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
              >
                CLAIM
              </button>
              <div className="flex justify-between max-[430px]:flex-col max-[430px]:gap-y-5">
                <h2 className="text-lg font-bold">
                  <span>Edition of</span>
                  <span className="ml-3 rounded bg-black p-2 text-white">
                    33333
                  </span>
                </h2>
                <h2 className="text-lg font-bold">
                  <span>Remaining</span>
                  <span className="ml-3 rounded bg-black p-2 text-white">
                    15245
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-20">
          <div className="text-center">
            <Countdown targetDate={dateTimeAfterThreeDays} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
