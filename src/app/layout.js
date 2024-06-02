export default function RootLayout({ children, facebookPixelId }) {
  return (
    <html lang="en">
      <script id='fb-pixel' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2143908482640282');
          fbq('track', 'PageView');
        `}
      </script>
      <body>{children}</body>
  
      <noscript>
        <img
          height='1'
          width='1'
          
          alt={'facebook pixel no script image'}
          src={`https://www.facebook.com/tr?id=2143908482640282&ev=PageView&noscript=1`}
        />
      </noscript>
    </html>
  );
}
