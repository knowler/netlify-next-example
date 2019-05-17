# Next.js on Netlify example
 
This is just a little example project I’m playing around with.
So far it incorporates the following:

* Next.js
* Netlify
  - ’Cause it’s free!
* Styled System (`@styled-system/babel-plugin`) + Emotion
  - The dream team.
* It’s a Progressive Web App!
  - It works offline
  - It’s installable on Android (can do iOS easily too)

## To Try

- [ ] Extract emotion styles to stylesheet.
  - Maybe inline critical?
    * There's really not that much styles to make a difference.
- [ ] Code splitting using dynamic imports or whatever Next has
      (I assume the former).
- [ ] Pull data in from Ghost or another CMS.
  - Setup webhooks to trigger rebuild.

## Some notes

I was concerned by the JS bundle size Next was producing
(~260kB) but I guess making it a PWA and gzip makes that not as
much of a concern.

I am interested to see if styles become an issue as the CSS
grows. Styled System and Emotion is great for sticking to a
design system, but I’m not sure Emotion consolidates common
rules into their own selector. That’s were something like
Tailwind + PurgeCSS might have the advantage.
