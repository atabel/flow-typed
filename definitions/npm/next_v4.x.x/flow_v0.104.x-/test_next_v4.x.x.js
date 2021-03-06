import React from "react";
import next from "next";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Document, {
  type Context,
  Main,
  Head as DocumentHead,
  NextScript
} from "next/document";
const { createServer } = require("http");
const { parse } = require("url");

// server
// $FlowExpectedError[incompatible-call]
next({ dev: 1 });
// $FlowExpectedError[incompatible-call]
next({ dir: false });
// $FlowExpectedError[incompatible-call]
next({ quiet: "derp" });
// $FlowExpectedError[incompatible-call]
next({ staticMarkup: 42 });

const app = next({ dev: true, dir: ".", quiet: false });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    let q: Object | void;

    if (typeof query === "object") {
      q = query;
    }

    if (pathname === "/") {
      app.render(req, res, "/index", q);
    } else if (pathname === "/foo") {
      app.render(req, res, "/index", q);
    } else if (pathname === "/about") {
      app.render(req, res, "/about", q);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen("3500", err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3500");
  });
});

<Head>
  <meta charSet="utf-8" />
</Head>;

<Link href="/">Index</Link>;

// $FlowExpectedError[incompatible-type]
<Link href={1}>InvalidNumLink</Link>;

// $FlowExpectedError[prop-missing]
Router.onRouteChangeStart = {};

Router.onRouteChangeStart = (url: string) => {};
Router.onRouteChangeStart = null;

Router.onRouteChangeComplete = (url: string) => {};
Router.onRouteChangeComplete = null;

Router.onRouteChangeError = (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`);
  }
};

// $FlowExpectedError[incompatible-call]
Router.push({});

Router.push("/about");
Router.push("/about", "/");
Router.replace("/about");
Router.replace("/about", "/");

const r: string = Router.route;
const p: string = Router.pathname;
const q: { ... } = Router.query;

export default class TestDocument extends Document {
  static async getInitialProps(ctx: Context): Promise<any> {
    const props = await Document.getInitialProps(ctx);
    return { ...props, customValue: "hi there!" };
  }

  render(): React$Node {
    return (
      <html>
        <DocumentHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
