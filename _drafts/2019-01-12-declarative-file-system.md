---
published: false
---
# Declarative file systems

One of the most joyful programming experiences that I have had lately has been using React to build user interfaces. Web UIs were the first things I had learnt to build (back in 200x): I used Dreamweaver, wrote some CSS by hand, and when HTML elements had to be hidden and revealed, I picked up jQuery. Back then I thought jQuery was amazing, but now I know I did not know any better.

During my first few months of React I was trying to pin down what made me like the framework. React is a lot of things, and in my opinion, declarative is the defining characteristic. Especially in contrast to jQuery, which I now realise is imperative. Examples ([source](https://tylermcginnis.com/imperative-vs-declarative-programming/)):

```
$("#btn").click(function() {
  $(this).toggleClass("highlight")
  $(this).text() === 'Add Highlight'
    ? $(this).text('Remove Highlight')
    : $(this).text('Add Highlight')
})
```

```
<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
```

In broad strokes, the distinction between imperative (jQuery) and declarative (React) is telling the computer **how to do** versus **what to do**. In telling the computer what needs to be done, the underlying implementation is abstracted out.

Why is declarative better:
- reason 1
- reason 2

This distinction in interface design does not need to restrict to programming APIs. Computing interfaces in general can be imperative or declarative. (Perhaps there are different terms in UX research/design that already emcompass this distinction, and I would be happy to be corrected.) This realization came about through a conversation where I was asked whether the menu bar app for Rubberduck will be declarative or imperative. Honestly, I don't even remember how I answered it, because I was still wrapping my head around the distinction. The more I thought about it though, I felt it helped me navigate through a lot more.

To elaborate this further, let's look at how the file systems works on Windows and iOS. To begin with, let's assume the [Files app](https://en.wikipedia.org/wiki/Files_(Apple)) does not exist. We will come back to that later. To overlay the earlier bit on interface design, I want to discuss how the files management on Windows is imperative, whereas on iOS it is declarative. Compare the two below:

![Open file on MS Word 2010, Windows](https://www.homeandlearn.co.uk/word2007_2010/images/word_2010/file_open.gif)

![Notes app, iOS 7](http://cdn.iphonehacks.com/wp-content/uploads/2013/06/notes-ios-7-app.jpeg)

Microsoft Word on Windows and the Notes app on iOS are obviously very different applications. Here I want to use them as examples to show the differences in managing files. While Windows requires you to open, close, save your work to disk (in a file), iOS makes it more opaque. Your documents (or files) are listed below, and the underlying file system is not even accessible.

This distinction contributes to the simplicity and popularity of iOS.

Having access to the files gives a lot more freedom: you can drag them around, use different applications...

But I would argue it's still the worse way of doing things. Anecdotally, I have never used the Files app. But user behaviour has been heavily influenced by how Windows (+ macOS) works. The file system is the face of the OS, and I have seen people work around the problem. For example, my dad still thinks of "saving" things. He does this by taking screenshots of anything and everything: a plane ticket -> screenshot it.

https://www.youtube.com/watch?v=xES5-qDv-4Q

https://oleb.net/blog/2012/06/steve-jobs-on-the-file-system/

> in every user interface study we’ve ever done […], [we found] it’s pretty easy to learn how to use these things ‘til you hit the file system and then the learning curve goes vertical. So you ask yourself, why is the file system the face of the OS? Wouldn’t it be better if there was a better way to find stuff?

> Now, e-mail, there’s always been a better way to find stuff. You don’t keep your e-mail on your file system, right? The app manages it. And that was the breakthrough, as an example, in iTunes. You don’t keep your music in the file system, that would be crazy. You keep it in this app that knows about music and knows how to find things in lots of different ways. Same with photos: we’ve got an app that knows all about photos. And these apps manage their own file storage. […]

> And eventually, the file system management is just gonna be an app for pros and consumers aren’t gonna need to use it.

It's an interesting space to watch out for, considering how the iOS is maturing to become a proper PC replacement. With the Files ap


