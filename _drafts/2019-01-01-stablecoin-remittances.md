---
published: false
---
# What would Facebook's stablecoin for remittances look like?

[Bloomberg reported](https://www.bloomberg.com/news/articles/2018-12-21/facebook-is-said-to-develop-stablecoin-for-whatsapp-transfers) that Facebook is "developing a stablecoin" for the remittances market in India. Fair to assume that this will be a extension to the payments feature on WhatsApp, which enables real-time domestic transfers on top of UPI.

If released, remittances to India would be one of the largest use-cases on top of the blockchain, and I wanted to understand what a potential implementation would be. I'll walk you through my learnings in this post.

At first impression, it was not obvious to me why a large player like Facebook would require a "decentralized" and "trust-less" mechanism to achieve remittances, when they can piggyback the existing system of payments-related institutions (like SWIFT). In fact, the current implementation for domestic payments is built over a network of trusted intermediaries (banks). By understanding a potential immplementation for this feature, and thereby the gains from it, I wanted to understand why Facebook would choose a design choice. For this post, we keep the romantic notions of decentralization on the side, and analyze problems of user experience in the status quo of remittances.

->> maybe add stuff about Facebook's virtual currency, which does not require a "blockchain" - just a transaction database will do.
->> also see messenger payments. (Q: how will blockchain help p2p payments at all? if the final outcome is a fiat currency)

(One reason why by-passing the existing institutions might make sense is to avoid the purview of existing trade sanctions. For example, SWIFT does not work for remittances to Iran. While enabling remittances in such markets is a noble goal, I'm assuming this to be a marginal goal for this exploration.)

## Problems with status quo

The remittances market is large and growing, the transaction costs in the process are a problem. In fact, the UN recognises remittances as an ["untapped engine for sustainable development"](https://www.un.org/development/desa/en/news/population/remittances-engine-for-sustdev.html), and the World Bank website tracks transaction costs (as fees and time delays).

While transaction fees on average hover around 5%, there is large variance in the different "corridors". For example, the USD/EUR corridor has lower transactions costs than the EUR/INR corridor.

This status quo is powered by institutions:

- Groups of globally distributed banks connected via the SWIFT payment network, or,
- Money transfer operators like Western Union with global distributed network of branches and agents

While Facebook could potentially build on top of such institutions - substantially improving accessiblity in the process - it is unlikely that any such implementation will reduce the two transaction cost factors: fees and delays. Let's explore if/how the blockchain will help.

## Solution requirements

Before diving further, it is important to note another assumption here: that any cryptocurrency would only be a medium of exchange in the process, and not a unit of account. For example, a remittance from the US to India will end in traditional fiat currency (INR), and the blockchain will be used internally in the background. Until we have means for users to buy/sell in the meat world through cryptocurrencies, this seems to be a fair assumption.

...

In this post, we will take a look at under the hood, and hypothesize around what the system design will look like. In particular,

- is it built on an existing chain? or will this be off-chain?
- what type of stablecoin could power something like this? also why does this need a stablecoin?
- what would the ux look like?

If this is a fiat-collateralized coin, why use the blockchain at all?

assuming non-collateralized stablecoins are failing, they will have crypto-collateral -> what are the implications of that?

- all risks of crypto-collateral

why go trustless?

## Some features of this system
- the coin is used as a medium of exchange, not as a unit of account


https://www.ft.com/content/631af8cc-47cc-11e8-8c77-ff51caedcde6

