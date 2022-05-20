import Head from "next/head";

interface SEOProps {
  description: string;
  title: string;
}

export function SEO({ description, title }: SEOProps) {
  return (
    <Head>
      <title> {title} • Checkout-Reviews.com</title>

      <meta name="title" content={`${title} • Checkout-Reviews.com`} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link rel="icon" href="/media/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/media/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/media/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/media/logo.png" />
    </Head>
  );
}
