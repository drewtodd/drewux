---
title: Measure Twice, Cut Once
layout: single
type: post
date: 2016-06-19
permalink: /mobile-layouts
photoUrl: /assets/img/ruler-light.jpg
photoTitle: "Close-up of metal ruler - Photo credit: Janaka Dharmasena"
photoCredit: Janaka Dharmasena
photoCreditUrl: http://www.shutterstock.com/gallery-84550p1.html
photoCreditAlt: "Janaka Dharmasena's portfolio on Shutterstock"
tags: ["ux", "design", "mobile", "techniques"]
---

# Measure Twice, Cut Once

## Creating a reusable layout system for mobile

### 4 &frac12; minute read

So, while slugging it out in the trenches this week, I sort of fell into an existential crisis with regards to the stuff I was putting on the screen for a mobile prototype. Panels, images, buttons, text fields... the sizing and positioning of these things all suddenly seemed so arbitrary. How can you defend a design decision if you can't explain why the thing on the screen looks like it does?

I go through this a lot. The thought-process of *defending a design decision*. Design is relatively subjective on the surface of it; qualitative in nature. A lot of it falls to aesthetics and personal opinions. So how do you *know* that a design decision is any good? Or objectively better than another decision?

This is the stuff that bounces around my noggin at 3 AM, when [the sleeps][1] takes their leave of me.

In this case, the question at hand was: How do you go about making an orderly screen layout (specifically, for a mobile phone in portrait display)? With this dilemma firmly in mind, I took to the Slack to ask my fellow designers if they knew of any best practices, agreed upon norms, or handy rules of thumb I might employ:

<a href="/img/slack-scale-elments.png" target="_blank" alt="View this image, full-size, in a new tab"><img src="/assets/img/slack-scale-elments.png" class="floatcenter" alt="Crazy question for you legit designers out there. When you design elements for screens (say, a mobile screen - iPhone), do you take into account scaling and proportion? Like… do you calculate optimal sizes for items based on screen real estate? Do you work on a grid?"/></a>

I got a lot of good feedback. Everything from "don't worry about it too much," to [grids][2], to references to some really good online [style guides][3]. Most folks had a system down for websites, but hadn't really messed with grids on mobile. It got me thinking some more, so I fired up Sketch and started playing around.

## 16:9

The first thing I observed was that iPhone and Android phones all have screens that are sized to a [16:9 aspect ratio][4] (actually a 9:16 ratio in portrait mode -- for every 9 horizontal pixels, there are 16 vertical pixels), which is a ratio of 1.7778:1. This is *de rigeuer* in the AV industry for high-definition displays. This was handy. So I wondered if I created a 16:9 box and put it on a 9:16 screen, what I'd get. I created a new artboard, sized for an iPhone 6 (375 x 667 pixels) and dropped a 375 x 210 pixel box on it (yep, 375 x 210 is a 16:9 aspect ratio).

It looked to me like that box took up about 1/3 of the screen. This was also handy. [The rule of thirds][5] is a common visual maxim applied in design. This was doable.

Going further I dropped three 16:9 boxes on the screen and found that I had a little space left over. 37 pixels, to be exact. I was sad at first that there wasn't some divine equilibrium that I was about to discover (and at this stage, I should point out that I've never been a math genius); some quasi-[golden ratio][6] perfection that would add up to a magical "Om" in the aggregate.

Those leftover 37 pixels bugged me at first. But then I realized that perfection wasn't what I was after; *practicality* was. And those 37 pixels. If I moved them to the top of the screen, they kind of looked like... a title bar.

I could work with this.

<a href="/img/iphone-layout-screens-1.png" target="_blank" alt="View this image, full-size, in a new tab" class="noline"><img src="/assets/img/iphone-layout-screens-1.png" class="floatcenter"/>
*This kind of gives you a visual idea of what I was playing around with; trying to find some logic for creating sensible layouts.*</a>

## Reusable blocks

So my next trick was to figure out how to create standard sizes (or blocks) for elements on the screen.

The 16:9 panel is 210 pixels tall. Sticking with the rule of thirds, I divided it into three 70 pixel tall panels. Those looked pretty good for standard elements like text boxes and form elements. Dividing them in half, I got 35 pixel tall rows. That looked like a good amount of padding to put between items. Four-row panels, five-row panels... it was as easy as the [vertical][7] [grids][8] I'd used for website layouts.

Just going by what my eye told me, these panel divisions were going to work.

<a href="/img/iphone-layout-screens-2.png" target="_blank" alt="View this image, full-size, in a new tab" class="noline"><img src="/assets/img/iphone-layout-screens-2.png" class="floatcenter"/>
*Using the initial 16:9 panel, I divided into equal segments to create additional sized panels, ultimately ending up with a 35 pixel high row as the foundation*</a>

What I've actually achieved, when all is said and done, is to create a horizontal grid for 9:16 screens that breaks down into 18 rows. All elements on the screen should match the height of 1 or more rows combined.

The layout below shows these blocks in action. Sample screens for a prototype I'm working on (these aren't the real screens, I'm just creating all of the elements in Sketch and making the symbol library for the prototype). As you can see, all of the block elements are sized using the 16:9 concept: Large heroesque panels are built on 6-row 16:9 panels, text input fields are 4 rows high, spacing between elements is 1 row (35 pixels). It's white-spacey, but I like that. It equates to [harmonious design][9]: All of the structural elements on the screen relate to and complement each other.

<a href="/img/lmb-concepts.png" target="_blank" alt="View this image, full-size, in a new tab" class="noline"><img src="/assets/img/lmb-concepts.png" class="floatcenter"/>
*These screens show how the block elements might be used in a real-world scenario*</a>

## More work to do

This is not a magic bullet, and there is still a lot of work to be done (I haven't even addressed vertical spacing, which I pretty much eyeballed), but it's a start. And it gives me something to work with when creating wireframes or prototypes. It also gives me some ammo when discussing *why* certain things look the way they do on the screen. Why I chose to put them where I did. It's a nice, simple framework that maybe I'll continue to play with and develop.

If you've got feedback, I'd love to hear it.

[1]:	https://www.youtube.com/watch?v=MP_yoqpIHNw "Have some culture, while you're here..."
[2]:	https://www.smashingmagazine.com/2007/04/designing-with-grid-based-approach/
[3]:	https://material.google.com/components/cards.html#cards-content "Google's Material Design"
[4]:	https://en.wikipedia.org/wiki/16:9 "16:9 - Wikipedia"
[5]:	http://www.companyfolders.com/blog/rule-of-thirds-graphic-design
[6]:	http://www.hongkiat.com/blog/golden-ratio-in-moden-designs/
[7]:	http://getbootstrap.com/css/#grid "Bootstrap"
[8]:	http://foundation.zurb.com/sites/docs/v/5.5.3/components/grid.html "Foundation"
[9]:	http://www.educ.kent.edu/community/VLO/Design/principles/harmony/index.html