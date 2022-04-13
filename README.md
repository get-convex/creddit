# Creddit

This is the _before_ version of a very simple Reddit clone we're going to port
to [Convex](https://convex.dev). Convex enables you to add global state to this
local app in a matter of minutes. We'll also deploy the application on
[Netlify](https://netlify.com) so it can be accessed anywhere in the world.

## Instructions

This project is intended to be used along side the [Global State Management on
Netlify with Convex](https://www.netlify.com/blog/) blog post. Please check that
post if you haven't already.

You can run the development server locally via:

```bash
npm run dev
# or
yarn dev
```

then open [http://localhost:3000](http://localhost:3000) with your browser to
see the result.

## App Structure

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The relevant code for the app is in `pages/index.tsx`.

The app UI uses some basic components from [Material UI](https://mui.com/).

## Next Steps

If you want to jump forward to the finished product check out the [`convex`
branch](https://github.com/get-convex/creddit/tree/convex) of this repository.
Otherwise head on over to [the Convex docs](https://docs.convex.dev) to learn more.
