---
title: Magnitude
layout: single
type: post
date: 2016-10-16
permalink: /magnitude
photoUrl: /assets/img/impact1.jpg
photoCredit: solarseven
photoTitle: A meteor glowing as it enters the Earth's atmosphere
photoCreditUrl: https://www.shutterstock.com/g/solarseven
photoCreditAlt: solarseven's portfolio on Shutterstock 
tags: ["ux", "usability", "techniques"]
---

# Magnitude

## A Simple Tool to Help Prioritize Usability Issues

### 6 minute read

> When prioritizing usability problems, use a **Magnitude Matrix** to figure out the most important issues to address. Magnitude combines the frequency that an issue was observed with the relative impact that it had on the participant's task completion.

After spending some time revisiting best practices in the realm of usability testing and reviewing the advice of some its more esteemed practitioners, I realized that there is a lot of talk about how to go about setting up such a test, and finding usability problems. But there isn't a whole lot said about what you do with them once you find them.[\*][1]

In particular is the article published in 2000 by the Nielsen Norman Group that extolls [the virtues of the number 5][2] as the golden standard for participants in usability tests.

## All usability problems are not created equal

In his article, Jakob Nielsen goes into some pretty deep explanation of why you only need to perform a usability test with five participants. It's a good study, and makes a strong case for structuring your usability research into small, iterative tests to discover your product's usability issues. He even makes the argument that you need to test with at least 15 users to discover *all* of the usability problems your product might have.

Here's the problem: It makes it sound like all usability problems carry the same weight and are of equal importance. Find 'em all, fix 'em all. Right?

Not exactly.

I would argue that you don't need to discover all of the usability issues with your product and that, even if you do, you probably shouldn't address all of them. Not all at once, anyway.

## Frequency and Impact

What you really want to be doing is evaluating each usability issue you find and asking two questions: How often does it happen? And what effect did it have on the participant's ability to complete their task? 

You need to determine the frequency and the impact of each issue and use this information to prioritize the issues you find. This will go a long way toward helping you figure out what you need to focus on first when addressing usability problems.

## Magnitude

Frequency and impact can be qualitative or quantitative in nature, and just knowing these values can still make for murky meetings with team and stakeholders where you go back and forth over which issues to address in the current cycle.

One handy tool that I've used in these situations to prioritize lists of usability issues is what I call the **Magnitude Matrix**. If you have any background in project management, you'll likely recognize this as a variation of [the Risk Matrix][3] used in that profession. It's a handy method to assign a numerical score to each issue. The higher the number, the bigger a deal the problem is, and the sooner you should go about tackling it.

So, get your spreadsheets ready, 'cause it's about to get all mathy up in here. Are you ready for this crazy arithmetical formula? It goes:

 `Magnitude = Frequency x Impact`

Yep. That's all it is. Easy. Which is why I like it.

## Where do the numbers come from?

So how do you get the values for Frequency and Impact? I recommend using numbers from 1 to 5, with 5 being the most frequent or impactful and 1 being the least.

It can vary from project to project. Aim for values that make sense. Go for something relatively straightforward, understood and agreed upon by all members of the team.

### Frequency

If you're running your tests using the magical five participants, this is easy. For each participant that experienced the issue, bump the number up a notch. Three participants weren't able to use the date-picker? The Frequency is 3. Everybody failed? Frequency = 5. Keep it simple.

If you're running larger (or smaller) numbers of tests you can use percentages to determine Frequency, like so:

<ol><li class="snug"><strong>0-20%</strong></li>
 <li class="snug"><strong>21-40%</strong></li>
<li class="snug"><strong>41-60%</strong></li>
 <li class="snug"><strong>61-80%</strong></li>
<li class="snug"><strong>81-100%</strong></li></ol>

If you're dealing with **qualitative data**, you can use [the results of your affinity analysis][4] to determine frequency.

### Impact

Impact tends to run a little more qualitative and can be hard to quantify. We typically use the following scale to measure the impact of a usability problem:

1. **Negligible** - The issue did not have a meaningful affect on the task outcome.
2. **Minor** - The participant completed the task with minor inconvenience or slow-down in the process
3. **Moderate** - The participant was able to complete the task with difficulty
4. **Significant** - The participant was unable to complete the task
5. **Severe** - The participant was unable to continue with the study

As previously stated, make sure to review these values with all team members at the outset, and make sure you're all in agreement with their meaning as it applies to your product.

## Putting It All Together

As an example, let's say that 4 out of 5 participants struggled with the date-picker tool, and it slowed them down pretty good (the four participants averaged a 3 on the Impact scale). That would give this issue a **magnitude of 12** (Frequency 4 x Impact 3).

Let's say in the same study, users were annoyed that they had to select their birth year from a drop-down. Four participants experienced the problem, but they all still finished the task with only a speed-bump in the process. The team agrees that the Impact in this case was minor; a 2. This particular issue has a **magnitude of 8** (Frequency 4 x Impact 2).

You could visualize these items on a matrix to see where they fall in terms of priority:

<div class="filler-background-light pad-top"><a href="/assets/img/magnitude1.png"><img src="/assets/img/magnitude1.png" class="floatcenter" /></a></div><em class="img-caption">The basic gist is that, the larger the number, the more important the issue is to address.</em>

In this example, when deciding which usability issues make it into the next iteration (assuming it came down to these two), the date-picker would be selected due to its higher magnitude.

One thing you can do with this matrix is to develop zones to help quickly make decisions based upon the magnitude of each problem. For example the team may use the chart below and determine that orange or red issues **must** be addressed (in which case, both of our issues would be addressed in the next iteration):

<div class="filler-background-light pad-top"><a href="/assets/img/magnitude2.png"><img src="/assets/img/magnitude2.png" class="floatcenter" /></a></div><em class="img-caption">Color-coded regions help prioritize issues.</em>

## Other Considerations

Let me stress that this is just one tool to have in your usability toolkit and that it works best when dealing with a large set of usability issues that you have to sift through and prioritize. It also helps to get everyone on the same page and to boil down usability problems to their actual affect on your product. Putting your "pet" usability issues under the magnitude microscope helps you figure out whether they're really as important as you think they are.

Still, there are lots of reasons why you might not want to address a high-magnitude issue — or, conversely, you might want to get to work on a low-magnitude problem. Things like budget and time restrictions might have you putting a higher-magnitude item on the back burner for a bit, while design or programming dependencies (e.g.: You can't fix B without addressing A first) might have you pushing lower-magnitude items up the list. Finally, strategic considerations (competitive forces, for instance) and business rules may have you bending the rules a bit. As with all things, it depends on the situation and you need to stay flexible.

Still, Magnitude is a handy tool to use and in many situations can help you manage what might otherwise be a confusing, tedious process.


### \* Caveat
*As luck would have it, shortly after writing this I discovered that [Nielsen actually covers this very topic in an even **earlier** article][5] (1995). And his solution is remarkably similar to what I put forth here. So, to be clear, I'm not throwing any shade at Jakob. I'm just illustrating how we handle prioritizing usability issues on my team and taking inspiration from my time doing project management. File this one under "[nothing is original][6]."*

[1]:	#caveat "Actually, there is."
[2]:	https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
[3]:	http://network.projectmanagers.net/profiles/blogs/what-is-a-risk-matrix
[4]:	/qualitative-data "Reporting Qualitative Data"
[5]:	https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/
[6]:	http://nofilmschool.com/2012/08/kirby-ferguson-creativity-everything-is-a-remix-ted-talk