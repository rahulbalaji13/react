/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RootLayout.tsx

import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const title =
    process.env.NODE_ENV === 'development'
      ? '[DEV] React Compiler Playground'
      : 'React Compiler Playground';

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content="Interactive playground for React Compiler experimentation" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href="/fonts/Source-Code-Pro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Optimistic_Display_W_Lt.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans h-screen overflow-y-hidden text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}

          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans h-screen overflow-y-hidden">{children}</body>
    </html>
  );
}
