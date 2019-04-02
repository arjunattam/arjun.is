---
published: false
---

# Declarative computing interfaces

One of my recent joyful programming experiences has been using React to build user interfaces. The last time I built web UIs was way back when any complex was off-loaded to jQuery, and Internet Explorer 6 couldn't be just ignored. Web standards have improved a lot since then, but there was something about React that made it joyful, and not merely _not irritating_.

I was trying to pin down what that was: React is a lot of things, and in my opinion, declarative programming is the defining characteristic. Especially when contrasted to jQuery, which I then realised is imperative. Defining them in broad strokes, declarative programming is telling the computer **what to do**, whereas imperative tells **how to do**. Examples ([source](https://tylermcginnis.com/imperative-vs-declarative-programming/)):

jQuery (imperative):

```
$("#btn").click(function() {
  $(this).toggleClass("highlight")
  $(this).text() === 'Add Highlight'
    ? $(this).text('Remove Highlight')
    : $(this).text('Add Highlight')
})
```

React (declarative):

```
<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
```

Syntactical differences aside, declarative code abstracts out implementation steps, whereas imperative code walks through those steps.

I feel the distinction of telling the computer "what to do" versus "how to do" is more generally applicable to computing interfaces, and not restricted to the design of programming APIs. (Perhaps the domain of UX uses different terms to talk about this—and I would happy to be corrected if that is the case.)

While declarative programming is a bit [vague to define](http://wiki.c2.com/?DeclarativeProgramming), the one critical characteristic is the order of execution. Because imperative code is expressed with a sequence of instructions, the ordering is crucial. Changing the sequence would result in a vast difference in outcomes. This implies, that imperative instructions can only be properly understood in the context of the previous instruction.

To elaborate this in the context of other computing interfaces, I want to look at how users interact with files in Windows and iOS. This distinction becomes very real when viewed from the vantage point of inexperienced users, like my parents.

![Open file on MS Word 2010, Windows](https://www.homeandlearn.co.uk/word2007_2010/images/word_2010/file_open.gif)

![Notes app, iOS 7](http://cdn.iphonehacks.com/wp-content/uploads/2013/06/notes-ios-7-app.jpeg)

File management in Windows is more imperative: in the context of a use-case (text editing in this case), the user has to tell the computer various steps: click on open, locate the file, select file, edit text, save the file. The experience on the Notes app is more declarative: the file system is opaque, and the emphasis is on the job to be done: edit text.

Perhaps no one explained it better than Steve Jobs ([watch the video](https://www.youtube.com/watch?v=xES5-qDv-4Q)):

> in every user interface study we’ve ever done […], [we found] it’s pretty easy to learn how to use these things till you hit the file system and then the learning curve goes vertical. So you ask yourself, **why is the file system the face of the OS**? Wouldn’t it be better if there was a better way to find stuff?
>
> Now, e-mail, there’s always been a better way to find stuff. You don’t keep your e-mail on your file system, right? **The app manages it**. And that was the breakthrough, as an example, in iTunes. You don’t keep your music in the file system, that would be crazy. You keep it in this app that knows about music and knows how to find things in lots of different ways.

By hiding the "how" (how your content is stored on persistent storage), the application becomes more usable. The burden of implementation steps is lifted. You don't need to remember the precise steps to open, locate and save your file. On iOS, users don't lose their work because they forgot to save it.

It is not fair to compare MS Word and the Notes app on capabilities, and perhaps it's harder to design declarative interfaces: because these interfaces require designing abstractions.

While it can be argued that declarative interfaces are better, it is also difficult to change existing user behaviour. Consider how my father uses his iPhone: everything that is of consequence is "saved" with a screenshot. A flight ticket sent via email? Saved as a screenshot. Noteworthy web page? Saved as a screenshot. I believe this behaviour is triggered by the need to save everything, and if you forget, your work will be lost forever.

The other advantage of imperative files management is that it makes sharing files between apps easier. For instance, if you want to send your Word output by email, you can lift it off the file system. iOS solves this with the share sheet: apps expose "extensions", which can be accessed through other apps. These extensions carry over state.

Another example of imperative versus declarative is in version control. Using git commands in the terminal is an imperative interface; git workflow UIs convert the same tasks into declarative interfaces.

====
"Programming where problems are described, or conditions on a solution are described, and the computer finds a solution."

==
Is it really required for Windows to show drives `C:` and `D:` and expose disk partitions?

"Abstraction is the elimination of the irrelevant and the amplification of the essential" - https://stackoverflow.com/questions/30824391/is-my-understanding-of-abstraction-correct

Interface is closer to the job to be done,
