# On reading code

In my last job, I discovered a super power: fearlessly digging through someone else's code. I cannot understate how core this was to my professional growth as a coder, and a thought leader in the organisation. To give you a taste of what this meant:

1. Reading through the authentication portions of django and django-rest-framework gave me the answers to how we could enable easy onboarding for our users.

2. Reading through react-native libraries showed me how we could wrap our native SDKs for react native, just before the framework was picking up, thereby unlocking an entirely new set of customers.

3. Reading through example Xamarin bindings of native mobile SDKs helped me create Xamarin bindings for our own, and thereby enable us to crack a big enterprise customer.

What I realised in the process was the difference between documentation and real-life code, and the difference between tutorials code versus production code. Open source code on GitHub has untapped potential, and I believe it can change lives, like it did for me.

Reading code is incredibly hard though, as we are reminded frequently with the [monthly](https://news.ycombinator.com/item?id=16471161) [rant](#) on Hacker News. And I concur. Reading any of the above code meant having n-tabs with GitHub search or blob views, and pressing cmd-shift-{} to toggle between them. What I would attempt to do in the process is understand "how this code fits in together", or "what calls what, which calls this other thing...". As Kartik Agaram correctly points out, in [Nobody's just reading your code](http://akkartik.name/post/comprehension), code bases are maps.

> Good books guide their readers through series of questions and their answers, but codebases are inherently non-linear, like a map. You can ask an infinite number of questions of a map. How far is it from A to B? Which is the nearest town to C? But you can’t expect a map to tell you what questions to ask, and it makes no sense to read a map linearly from top to bottom, left to right.

And it's not like people don't read code anywhere; they do it while they write it. Typical IDEs make map traversals easier with two features: goto definition and find usages (or references). Jumping code through these is how developers create mental models to understand code. What would I give to get these features while browsing code on GitHub?

As it turns out, a lot. Today I'm releasing [Rubberduck](https://www.rubberduck.io), a Chrome extension that makes code browsing on GitHub a lot easier, by letting you jump to definition and find references. I'm most excited about how it completely changes the code reviewing experience on the web, by giving IDE-level functionality in the context of a git diff. Rubberduck is available to try as a download from the Chrome Store, and you can also set it up for your private repositories by [reaching out](#).

TODOs:

- need better title?
- share draft with more people: Seb for one
- does it look like this is a personal project?
