import Document, { Html, Main, NextScript } from 'next/document';

import { Meta } from '@/layouts/Meta/Meta';
import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Meta
          title="Auction Beta | Bear Arts"
          description="Auction BETA | Bear Arts"
        />
        <body className="flex min-h-screen flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
