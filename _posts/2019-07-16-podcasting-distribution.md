---
layout: post
title: "Early learnings in podcast distribution"
date: 2019-07-16 07:00:00 +0000
tags: podcast
---

A few months ago I got together with my old friend Alokik to launch a podcast: [the Startup Green Room](https://startupgreenroom.com) is a place to celebrate functional learnings from operators in the Indian startup ecosystem. We have close to [10 episodes](https://startupgreenroom.com/episodes) now, and I'm keen to share our learnings so far. This post outlines some early learnings on distribution.

Anecdotally, I've seen podcast listening grow fast over the last year: podcast related chatter on Twitter has increased, friends ask me for and share recommendations. At the same time, India-centric content isn't common. We are betting that the podcast tailwinds are strong enough for us to focus on content, and let the growth in podcast listening provide for distribution.

Or to put it differently, we assume that there is a critical and growing mass of podcast listeners in India, who have figured out how to fit podcasts into their lives (generally, one of commute or gym). Many of these listeners work in, or are interested in Indian startups, and we want to create relevant content for them.

My early learnings on distribution seem to suggest this assumption might be more right among iOS than Android users.

## User funnel

Let's start with a simplified user funnel, starting with how most users discover the podcast.

- User discovers the podcast (episode) on a social media post
- User clicks on the link in the post, and lands on our website
- User subscribes to the podcast in their app of choice

If our assumption is valid, podcast listeners would have a healthy conversion from website visitor to subscriber. This conversion rate is critical to validating our assumption.

## Website data

Let's look Google Analytics numbers for the website, bifurcated by OS platform.

![Website visitors, between May 1 and July 14, 2019](/images/podcast-distribution/ga.png)
_Website visitors, between May 1 and July 14, 2019_

A few things to note here:

* **Android is the dominant platform**, which is expected. Among visitors from mobile, proportion of Android is 60%. India is a [90% Android market](http://gs.statcounter.com/os-market-share/mobile/india) in mobile, and in our target segment (which is more affluent) proportion of Android is expected to be lower.
* Macintosh beating iOS is not a surprise, since Macbooks (which are often paid for by companies) are easier to find than iPhones.
* Mobile visitors are about 56%, desktop is 44%.

## Podcast downloads data

Limitations of podcast analytics deserve another blog post. For this analysis, we are going to use our downloads data. Given an IP address and user agent for every download, it is possible to estimate the location and the app used. We use [Transistor](https://transistor.fm/) for hosting the podcast, and these charts are from their analytics page.

![Episode downloads](/images/podcast-distribution/downloads-all.png)
_Episode downloads, till July 14, 2019_

From the distribution of popular players, we can see that:

* 49% downloads come from the browser (mobile and desktop), rest from apps.
* Among browser downloads, 53% are from mobile – which mirrors the website visitors distribution.

Half of our downloads coming from the browser is very surprising to me. I'm personally never in a position to play audio in the browser. When I typically discover podcasts, I open them in an app instead, so that I can listen to them when I listen to my podcasts (commute/gym, which is different from when I'm actively browsing).

Given this bias, I'm tempted to interpret browser downloads as trial runs: users only listen to a few seconds (therefore counting as a download). Sidenote: this is where depth of podcast analytics around *listens vs downloads* would help. Bias aside, I do know of at least 1 user who used a mobile browser to listen to our entire playlist – and therefore, it can be argued that browser playback is a critical feature.

In either case, browser listeners are not regular subscribers. At best, they consumed a free trial, and will not be notified when a new episode comes out. We need to look at app downloads in more detail.

![Episode downloads - apps only](/images/podcast-distribution/downloads-apps.png)
_Episode downloads, apps only, till July 14, 2019_

Among app downloads:

* Apple Podcasts dominate app downloads, at 39%. In fact, **iOS dominates app downloads**, with Breaker (10%) and Overcast (4%) being the other two popular iOS-only apps. I'm leaving out iTunes (8%), which I'm guessing is coming from Windows/Mac users.
* Castbox (10%), Spotify (10%), Pocket Casts (4%) are cross-platform. Google Podcasts (8%) is the only Android only app.
* If we assume cross-platform apps to be Android users, and focus on mobile listeners only, we have 37% downloads from Android, and 63% from iOS.

## Inferences

While mobile website visitors from were tilted towards Android: 60% vs 40% for iOS, app downloads are more on iOS: 63% vs 37% for Android. Clearly, the website visitor to podcast subscriber conversion works different for iOS and Android.

The iOS ecosystem is dominated by the default app, which sets the benchmark for other podcast apps on iOS. From user conversations, I know that podcast listeners on iOS start with the default app, and then graduate to something like Breaker/Overcast for specific features. By extension, it can be said that Breaker/Overcast users are power-users, and Apple Podcasts users are not.

Android is more complicated. Fragmentation is in the very nature of Android, and the podcast apps ecosystem seems to be no different. If I break down the visitors to subscribers conversion into interested and capable users:

* User is interested to convert: I don't have a reason to believe this would be different for iOS and Android
* User knows how to convert: there *is* reason to believe this is different for iOS and Android

If we want to improve conversion rates for Android, we know what to do: help interested Android visitors convert to app subscribers.

## Action items

Helping Android visitors become subscribers means recommending an app that will get the job done. Among the popular players right now, we have Castbox (10%), Spotify (10%), and Google Podcasts (8%). I'm ignoring Pocket Casts (4%) since it's paid. As much as I like Spotify, I cannot recommend it for podcasts because it is missing one critical feature: notifications on new episodes. Castbox seems to be a decent app, but Google Podcasts sounds like a better candidate for a "default".

Google Podcasts has been around for a year now, and it seems worth investigating why it's not doing as well as Castbox/Spotify. From [this analysis](https://www.amplifimedia.com/blogstein/2018/12/5/why-is-google-podcasts-app-failing-so-hard) (emphasis mine):

> Resler: While Google’s Podcasts app is **technically pre-installed on all Android phones** – it’s a “contextual app” that automatically opens when you click on certain links -- **nobody knows that it’s there because there is no homescreen icon**.
>
> Resler: Awareness about the Google Podcasts app’s existence is low. I don’t think Google needs to engage in a big publicity campaign around their Podcasts app. I think they just need to get the icon on the homescreen.

Umm, what? I wish I had an Android phone to try it out, and thankfully someone made a video of [how it works](https://www.youtube.com/watch?v=0dUVeQmCRaA).

It's unclear to me why the app lacks a homescreen icon, but being pre-installed makes it an easy choice for us to recommend to our visitors. If you visit [our homepage](https://startupgreenroom.com) now, it recommends subscribing via Google Podcasts – and would deep-link into the app if you are on Android. To complete the recommendation, we also recommend Apple Podcasts, since Breaker/Overcast users are power-users, and would know what to do anyway.

I'm bullish on the Indian podcasting ecosystem, and eager to share more such learnings around building a podcast in India. If you're in the same boat and have ideas on Android conversion rates, hit me up on [Twitter](https://twitter.com/arjunattam). I'm eager to collaborate with other creators in the space, and learn together.
