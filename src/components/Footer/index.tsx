import CustomGoogleForm from '@/components/Forms/CustomGoogleForm';

const Footer = () => {
  return (
    <footer className="mt-20 mt-auto bg-white py-8 text-lg">
      <h2 className="sr-only">Footer</h2>
      <div className="container grid gap-10 px-5 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-bold">Stay Connected</h3>
            <CustomGoogleForm />
        </div>
        <div className="md:text-right">
          <h3 className="mb-2 font-bold">Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="https://venom.network/">Testnet Website</a>
            </li>
            <li>
              <a href="https://venom.network/tasks">Earn NFT Achievements</a>
            </li>
            <li>
              <a href="https://venom.network/faucet">Get Testnet Venom</a>
            </li>
            <li>
              <a href="https://medium.com/@Venom_network_/mastering-the-venom-testnet-a-comprehensive-guide-to-interacting-with-dapps-nfts-and-defi-7aa90abcce93">
                Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 flex justify-between">
        <span>Privacy Policy</span>
        <span>© 2023 Bear Studio NFT.</span>
        <span>Cookies</span>
      </div>
    </footer>
  );
};

export default Footer;
