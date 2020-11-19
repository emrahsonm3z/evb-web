import Head from 'next/head'
import SiteConfig from '../../site.config'

const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />

    {/* facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.desc} />
    <meta property="og:site_name" content="Evb bilişim ve enerji" />
    <meta property="og:url" content={`${props.canonical}`} />
    {props.image ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://evb.vercel.app/assets/logo.png"
      />
    )}

    {/* twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={props.canonical} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}

    {/* pwa */}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}

    <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#fff" />
    <meta name="application-name" content={props.title} />
    <meta name="apple-mobile-web-app-title" content={props.title} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <link
      rel="icon"
      type="image/png"
      href="/icons/favicon-16x16.png"
      sizes="16x16"
    ></link>
    <link
      rel="icon"
      type="image/png"
      href="/icons/favicon-32x32.png"
      sizes="32x32"
    ></link>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    ></link>
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <meta name="msapplication-config" content="/icons/browserconfig.xml"></meta>

    {/* analytic */}
    {SiteConfig.googleAnalytic && (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.googleAnalytic}`}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteConfig.googleAnalytic}');`
          }}
        />
      </>
    )}
  </Head>
)
export default Meta
