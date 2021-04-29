---
title: "Why is everyone reading Sapiens?"
date: 2017-01-15
tags:
  - books
---

With my twitter feed talking about books this December, I was struck by how popular [Sapiens: A Brief History of Humankind](https://www.goodreads.com/book/show/23692271-sapiens) was. These weren't people who exchange book recommendations with each other, so there had to be an external cause to this. And Sapiens is not a recent popular release like Michael Lewis' [The Undoing Project](https://www.goodreads.com/book/show/30334134-the-undoing-project) that I would expect to be universally popular at launch.

So I spent some time trying to figure out what happened. I'm left with some understanding of how book sales - unlike movies - are driven mostly by big names. My initial hypothesis was that the book probably featured in Bill Gates' [yearly book list](https://www.gatesnotes.com/About-Bill-Gates/Best-Books-2016), but that was easy to (in)validate. (Gates did review the book on his blog last year, but it doesn't look like that contributed to the book's success in December.) My best guess to why the book took off is: Obama.

![Google trends for "sapiens harari" from January 1, 2014](/img/sapiens-harari-trends.png)

For my conclusions I used a few data sources: **Google trends**, which represents a general awareness/curiosity about the book, **Goodreads reviews**, which represent the book's popularity in a more relevant audience, and a timeline of relevant events.

![Goodreads reviews for Sapiens from January 1, 2014](/img/sapiens-goodreads.png)

## Relevant events

- 2011: Sapiens launched in Hebrew
- August 2014: Yuval Harari's Coursera mooc on the history of mankind starts
- Mid-2014: English translation of Sapiens released, with normal set of book reviews
- June 2015: Yuval Harari gives a [TED talk](http://www.ted.com/talks/yuval_noah_harari_what_explains_the_rise_of_humans)
- May 17, 2016: Bill Gates [reviews](https://www.gatesnotes.com/Books/Sapiens-A-Brief-History-of-Humankind) Sapiens
- July 18, 2016: I added Sapiens to my to-read bookshelf on Goodreads - turns out a friend had finished reading it on the same day (who might have read Gates?)
- September 4, 2016: Obama recommends Sapiens on CNN
- September 8, 2016: Harari's new book [Homo Deus](https://en.wikipedia.org/wiki/Homo_Deus:_A_Brief_History_of_Tomorrow) is released

The last two events coincide with the peak in the Google trends graph, and it would be safe to say that Obama on CNN would have more weightage than a new book (considering how insignificant book launches seem to be on these scales). The Goodreads reviews peak trails the Google trends peak by a few months, which I believe can be explained by the time it would take for people to getting to read it + the holiday season for relaxed reading.

## Appendix

Book popularity APIs are hard. I thought the [Goodreads API](https://www.goodreads.com/api) doc would give me the popularity data I wanted, but there is no API for that objective. What I ended up doing was scraping reviews from their reviews widget, and [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) made it easy.

```python
def get_raw_dates_from_url(url):
    r = urllib.urlopen(url).read()
    soup = BeautifulSoup(r)
    raw_dates = soup.find_all('span', class_='gr_review_date')
    return raw_dates
```
