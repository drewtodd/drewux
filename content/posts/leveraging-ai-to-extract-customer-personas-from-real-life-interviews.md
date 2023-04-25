---
title: "Leveraging AI to Extract Customer Personas from Real-Life Interviews"
layout: single
type: post
date: 2023-04-25
photoUrl: /assets/img/toy-robot-painting.png
photoCredit: Midjourney
photoTitle: A robot drawing a sketch in a sketchbook
photoCreditUrl: "https://www.midjourney.com/home"
tags: ["ux", "ai"]
---

# Leveraging AI to Extract Customer Personas from Real-Life Interviews
## An Experiment with ChatGPT-4
### 10 minute read

> Let's explore the use of ChatGPT-4 to analyze and extract customer personas from real-life interview data. By using AI, researchers can save significant time by avoiding manual analysis of lengthy audio recordings. The quality is pretty good, but you need to pay attention to the overall accuracy of the output.

## Introduction
Discovering and understanding customer personas is a common activity for businesses to create user-centered strategies and cater to the needs of their audience. In this article, I’ll explore an innovative approach to extracting personas using [OpenAI’s ChatGPT](https://chat.openai.com), based on real-life interview data. The experiment aimed to evaluate the effectiveness of feeding raw data directly into the AI and observing the quality and relevance of the generated personas.


## Methodology
### Creating the Interview Guide and Script
Using a ficticious online sticker vendor call StickerMe.com as the basis for our research. We had ChatGPT-4 develop an interview guide and script to ensure consistency and gather relevant information from the candidates. The script contained open-ended questions focusing on the participants' preferences, experiences, and motivations related to sticker usage.

### Conducting the Interviews
We interviewed 10 diverse candidates, following the interview script to maintain consistency.  Each candidate was actually a photo-persona created and acted out by an actor. I did this because I wanted to have a good idea of what personas *I* would have come up with based on the interviews:

- **A mom** who buys stickers for her “sticker obsessed” daughter, who collects them in a sticker book and trades them with her friends
- **Business consultant** who has stickers made to give away to promote her business
- Family-owned **restaurant owner** who has stickers made to give to customers as promotional items
- **Gen-Z male** who likes to create custom stickers to put on his motorcycle, his laptop… all kinds of things. He thinks stickers are “cool. Like tattoos for your stuff.”
- **Middle-aged woman** who buys custom stickers to include on gifts and cards for a personal touch
- **Art student** who uses custom stickers as a way to share her art
- Die-hard **Liverpool Football Club fan** who buys team stickers for his car and his sports equipment
- **Baseball coach** who buys custom team stickers to give to her kids in recognition of a great game
- **A kid** who is responsible for merch for his alt-punk band who purchases stickers to sell at concerts
- **A dad** who uses stickers as awards for his son and daughter when they do their chores. He likes to let them design the stickers for extra motivation

In some cases, the actor took liberties with the promo-personas (the family-owned restaurant owner became a wedding planner, for instance), but this was okay, because the resulting interview content was still plausible. 

The interviews were conducted in person or through Microsoft Teams video calls and lasted approximately 10-15 minutes each.

### Transcribing the Audio
The audio from the interviews was transcribed to text to facilitate the analysis by ChatGPT. Some interviews were run in Microsoft Teams and transcribed using its auto-transcribe feature. Others were transcribed using Microsoft Word’s built-in transcription tool. I was curious to see if the two very different output formats would throw off the AI.

#### Microsoft Teams Transcription Format
```
Interviewer
The interview should take approximately 15 minutes, will be recording the session to ensure accuracy, but we won't be sharing the recording with anyone outside of the team.
0:0:23.820 --> 0:0:25.470
Interviewer
Do you have any questions before we get started?
0:0:26.710 --> 0:0:26.930
Dean Liou
No.
0:0:28.640 --> 0:0:32.210
Interviewer
Alright, so a couple of questions before we get into the the meat of it.
```

#### Microsoft Word Raw Audio Transcription Format
```
Molly, what is your occupation? 

Well, I'm. I'm in college right now, but I guess I can consider myself like a a freelance artist too. 

OK. Are you a parent? Why do you purchase stickers? 

I like to. It's it's a, it's. I like to work in mixed media. Art and stickers is one that I making custom stickers and and putting my art on stickers is a good way to express myself. 

So how do you use them? You've already answered a little bit on. 

That well, yeah. So I'll. I'll take designs that I've come up with or paintings or sketches and I'll create custom. With those and then I'll put them and either give them to my friends or, you know, stick them on. Things I probably shouldn't be sticking them on, but I put them on there anyway. 
```


### Feeding the Data into ChatGPT
We explained the background and situation to ChatGPT-4 and provided the text transcripts of the 10 interviews. The AI was tasked with analyzing the data and extracting relevant customer personas based on the input. Here’s the prompt I used:

#### Prompt
```
Act as a UX research expert with vast experience. I’d like for you to create personas for an online sticker vendor — StickerMe.com. 

First some background information:

StickerMe.com offers a wide range of custom stickers for purchase through their e-commerce platform. However, the business has been experiencing difficulties lately and suspects that its outdated website may be the root cause. Creating personas will allow us to focus our efforts on the user, and better understand their needs and preferences.

We interviewed 10 candidates and transcribed those interviews. I’ll give them all to you shortly and then you can create the personas.

For more reference, here is the interview script:

—
[Here, I pasted the interview script]
—
 
Please do not generate any personas until all 10 transcripts have been uploaded.
```

## Results
{{< figure src="/assets/img/chatgpt-output.jpg" class="floatcenter" alt="A screenshot of ChatGPT" >}}

Going into this, I expected a "real" UX researcher probably would have created a handful of personas based around "parent", "business owner", and "collector". ChatGPT generated four distinct customer personas from the interview data and, a you can see, that's pretty much what we got:

### The Creative Parent
* Age: 30-45
* Occupation: Various (e.g., web developer, teacher, stay-at-home parent)
* Primary use for stickers: Engaging with their children through creative projects, rewards, and chore systems
* Preferences: Customization, repositionable stickers, affordable prices, ease of use

### The Small Business Owner
* Age: 25-50
* Occupation: Entrepreneur or small business owner
* Primary use for stickers: Promoting their business through branded stickers, packaging, and promotional materials
* Preferences: High-quality stickers, customization options, bulk ordering discounts, quick turnaround and shipping

### The Hobbyist Collector
* Age: 18-35
* Occupation: Various
* Primary use for stickers: Personal use, collecting, and decorating personal items (e.g., laptops, water bottles, notebooks)
* Preferences: Unique designs, licensed characters/themes, quality materials, easy navigation and discovery on the website
 
### The Event Planner
* Age: 25-60
* Occupation: Event planner, administrative professional, or DIY party host
* Primary use for stickers: Enhancing event decor, invitations, or party favors
* Preferences: Customization options, variety of sizes and materials, quick shipping, and an easy-to-use website

These personas were generated without providing a specific template, allowing the AI to identify patterns and categorize the data based on the interview responses. The results were surprisingly accurate, reflecting the preferences and motivations of the candidates in a comprehensive manner.

## Discussion
The experiment showed promising results, as ChatGPT was able to process raw data and generate relevant customer personas. This approach could potentially save time and resources for businesses seeking to understand their target audience better.

### The Big Benefit: It’s a Time-Saver
One of the most significant benefits of using AI for data analysis, particularly when working with user interviews, is the substantial time savings. Analyzing hours of audio can be an incredibly time-consuming task, often requiring extensive manual effort to transcribe, review, and extract insights from the recordings. By leveraging AI like ChatGPT, researchers and analysts can save valuable time and focus on other essential aspects of their work.

Another advantage of this method is that it allows the interviewer to concentrate more on the interview itself, rather than getting bogged down in taking detailed notes during the conversation. This can lead to a more natural, engaging, and insightful interview process, as the interviewer can actively listen, probe deeper into responses, and follow up on interesting points without the distraction of note-taking.

Furthermore, AI can help identify patterns and trends across multiple interviews quickly and efficiently, providing a more comprehensive and well-rounded understanding of the data. This can lead to more accurate and actionable insights, ultimately improving the overall quality of the research and its outcomes.

In conclusion, the use of AI for data analysis in the context of user interviews offers considerable time-saving benefits, allowing interviewers to focus on the conversation and enhancing the quality of the insights gathered. While it’s essential to be cautious with prompts and verify the accuracy of AI-generated information, the advantages of this method are undeniable and can greatly improve the research process.

### Overall Quality of the Output: Not Bad!
I’d equate the results with that of a what you’d get from a junior-to-mid-level UX researcher. The AI was able to analyze, synthesize, and extract valuable insights from the interview data, providing a useful starting point for understanding user personas and preferences.

All of this while taking into account one huge caveat:

### The Downside: Sometimes, It Just Makes Stuff Up
Artificial intelligence tools like ChatGPT are designed to provide answers to questions — it *really* wants to give you a thorough answer — but it may not always give you the output you’re looking for if you’re not careful with your prompts. This can lead to AI systems extrapolating and interjecting made-up — but seemingly plausible — results into their analysis.

For instance, when asking ChatGPT to summarize the interviews after it had already done the analysis, it fabricated believable results:

#### Prompt
```
Go back and summarize each of the ten user interviews I uploaded.
```

#### Output
```
> Interview with Participant 6:
> The interviewer asked Participant 6 about their experiences as a hobbyist collector of stickers. They discussed their passion for collecting rare and unique stickers, attending events and conventions, and interacting with fellow collectors to exchange and appreciate stickers.
```

Note that there was no mention of rare stickers, events, or conventions in the interview text.

This example demonstrates the potential pitfalls of using AI for data analysis without being specific and careful with the prompts given. Users need to be mindful of the questions they ask and how they ask them to avoid generating inaccurate information.

To ensure the accuracy and reliability of the information provided by AI, it’s essential to review the output and, if necessary, refine the prompts to obtain the desired results. This can help prevent AI-generated misinformation and ensure that the data analysis remains useful and relevant for decision-making and problem-solving purposes.

## The Wrap-up
This experiment demonstrates the potential of using AI, like ChatGPT, in extracting valuable customer insights from real-life interview data. By feeding raw data into the AI, businesses can quickly and effectively analyze customer preferences and motivations to create accurate personas. This approach can help businesses streamline their user-centered design efforts, tailor their products or services, and ultimately enhance customer satisfaction.

All the materials used in this experiment can be reviewed on [GitHub](https://github.com/drewtodd/chatgpt-personas).
