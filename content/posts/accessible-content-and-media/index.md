---
title: "Accessible Content and Media: Crafting Inclusivity in Digital Communication"
layout: single
type: post
date: 2023-07-17
permalink: /accessible-content-and-media
photoUrl: "img/jake-hills-movie-theater.jpg"
photoCredit: "Jake Hills"
photoTitle: "Inside a crowded movie theater, showing a film. Monochrome, dramatic lighting."
photoCreditUrl: "https://unsplash.com/@jakehills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
---

# Accessible Content and Media
## Crafting Inclusivity in Digital Communication
### 7 minute read

Welcome back to my continuing series on web accessibility. Today, let's talk about a crucial aspect that often shapes the first impression of any digital platform: Content and Media. Accessibility in this realm isn't just a compliance checkbox; it's a commitment to inclusivity that opens doors for all users, regardless of their abilities.

## Writing Accessible Web Content

Creating content that's accessible to a broad audience means ensuring it's understandable by everyone, regardless of their educational background, age, or cognitive ability.

### Clear and Simple Language
In the pursuit of writing accessible web content, the emphasis on clear and simple language is important. This approach is vital as it makes the content accessible and understandable to a diverse audience, including: 
- Individuals with cognitive impairments like dyslexia
- Non-native English speakers
- Older adults who might process information more slowly
- Those unfamiliar with complex industry jargon. 
For instance, a sentence like "Utilize our services to ameliorate your daily tasks" could be more inclusively phrased as "Use our services to make your daily tasks easier." Such simplification ensures that the content resonates with and is accessible to everyone, removing unnecessary barriers to comprehension.

## Content Structure

As I’ve mentioned in [other](/posts/navigating-accessibility/) posts about accessibility, using [appropriate semantic markup](https://internetingishard.netlify.app/html-and-css/semantic-html/) is just as crucial as the language used. Semantic HTML tags such as **`<article>`**, **`<header>`**, **`<footer>`**, and **`<aside>`** play a significant role in conveying the structure and purpose of content to users, especially those using assistive technologies like screen readers. These tags provide context to the content, enabling assistive devices to interpret and navigate the page more effectively. For instance, a **`<nav>`** tag indicates navigation links, helping screen reader users easily find the menu. 

Similarly, **`<header>`** and **`<footer>`** tags define the top and bottom sections of a page, respectively. By clearly defining these areas, we ensure that users who rely on assistive technology can efficiently navigate and understand the layout and key sections of a website, enhancing the overall accessibility of the content. Use headings and subheadings to organize content logically. Ensure your headings are in a hierarchical order, with **`<h1>`** for main titles, followed by **`<h2>`**, **`<h3>`**, and so on.

Let’s look at a couple of examples that illustrate ways you could feasibly lay out a page. Both technically “work” in the sense that they render in the browser properly, but one is semantically optimized for accessibility:

### Do This: Well-Formatted Semantic HTML
```html
<header>
  <h1>MyWebsite</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Welcome to My Website</h1>
    <p>Here is some introductory text about my site.</p>
  </article>
</main>
<footer>
  <p>Contact us at email@example.com.</p>
</footer>
```

### Not That: Poorly Formatted HTML
```html
<div id="header">
  <div class="logo">MyWebsite</div>
  <div class="navigation">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
  </div>
</div>
<div id="main-content">
  <div class="article-title">Welcome to My Website</div>
  <div class="article-body">Here is some introductory text about my site.</div>
</div>
<div id="footer">
  Contact us at email@example.com.
</div>
```

In the "Not That" example, the content is structured using non-semantic **`<div>`** tags, making it difficult for assistive technologies to understand the layout and purpose of different sections. The "Do This" example, however, uses semantic HTML tags like **`<header>`**, **`<nav>`**, **`<main>`**, **`<article>`**, and **`<footer>`**, providing clear context and meaning, thus making it more accessible.

## Alt Text for Images

Understanding when and how to use alt text is crucial for accessibility. Alt text, or alternative text, is a critical feature for users who rely on screen readers to access digital content. It provides a textual description of images on web pages, allowing those with visual impairments to understand the content conveyed by images.

### Best Practices for Writing Alt Text
* **Descriptive and Concise**: Alt text should accurately and succinctly describe the image's content and function.
* **Context Matters**: Tailor the alt text based on the image's context within the content. Describe what's relevant.
* **Avoid Redundancy**: Don’t start with "image of" or "picture of"; it's already announced as an image by screen readers.
* **No Alt Text for Decorative Images**: For images that are purely decorative and don't contribute additional information to the content, it's best to use an empty alt attribute (**`alt=""`**). This approach will prevent screen readers from focusing on these images. Alternatively, you can use the **`aria-hidden="true"`** attribute to explicitly hide these images from assistive technologies. While **`aria-hidden`** can be helpful, it's not always mandatory; using **`alt=""`** is generally sufficient for decorative images.

### Alt Text in Assistive Technology
* Screen readers read out the alt text, providing a verbal equivalent of the visual information.
* For users with text-based browsers or slow internet connections, alt text can display in place of images.

### Examples of Good Alt Text
* A company logo: **`<img src="logo.png" alt="XYZ Corporation Logo">`**
* A graph in a report: **`<img src="sales-graph.png" alt="Line graph showing an upward trend in sales for 2021">`**
* A photograph in a blog post: **`<img src="mountain-trail.jpg" alt="Hikers walking on a mountain trail with a sunset in the background">`**
* A screenshot of a software UI: **`<img src="add-new-user-interface.png" alt="Screenshot of the Add New User interface, featuring fields for Username, Password, and Email, with a 'Create User' button at the bottom">`**

By following these best practices, you ensure that your web content is inclusive and accessible to all users, particularly those using screen readers.

## Captioning and Transcribing Multimedia

Multimedia content should be accessible to users with hearing impairments or those who prefer text.

### Closed Captions for Videos
Include captions that not only transcribe dialogue but also describe significant sounds. Tools like YouTube's automatic captioning can be a starting point, but always review for accuracy. If you can’t (or don’t want to) use YouTube, there are other captioning platforms available:
* **Automated Transcription Services**: Platforms like [Rev](https://www.rev.com/), [Otter.ai](https://otter.ai/), and [Descript](https://www.descript.com/) offer automated transcription services. These tools generate transcripts and captions for editing.
* **Professional Captioning Services**: Services such as [3Play Media](https://www.3playmedia.com/) and [CaptioningStar](https://www.captioningstar.com/) provide professional captioning, ensuring high-quality, accurate captions.
* **Video Editing Software**: Programs like Adobe Premiere Pro and Final Cut Pro include features for adding and editing captions.
* **DIY Captions**: Manual caption creation can be done using tools like Subtitle Edit or [Aegisub](http://www.aegisub.org/).
* **Captioning Plugins or Extensions**: Some CMS or video platforms offer captioning support, like WordPress plugins for video captioning.

Remember to review and edit captions for accuracy, as automated services may not always be perfect.

### Transcripts for Audio
Let's discuss how transcripts and captions are created and linked to audio and video content. Transcripts for audio content involve creating a text version of all spoken words and significant sounds within the audio. These transcripts are essential for users who are deaf or hard of hearing, and they also benefit those who prefer reading to listening. For videos, captions are synchronized with the audio and include time codes to match the text with the specific timing in the video. Common file formats for captions include:

* **[SRT \(SubRip Text\)](https://en.wikipedia.org/wiki/SubRip)**: This is a simple format that lists the start and end times next to the text. It's widely supported across different platforms.
* [**VTT \(Web Video Text Tracks\)**](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API): Similar to SRT but with more advanced options, like styling and positioning.

Here's a short example of what an SRT file might look like:

```js
1
00:00:01,000 --> 00:00:04,000
Welcome to our weekly webinar on web accessibility.

2
00:00:04,500 --> 00:00:06,000
Today, we'll cover best practices and new trends.
```

Each section starts with a sequence number, followed by the time code indicating the start and end times of the text, and then the caption text itself.

This process can be adapted for localization by translating the text into different languages, allowing for a broader, more inclusive audience reach.

## Accessible Documents

Beyond web content, ensure your downloadable documents are accessible. Creating accessible documents, especially tagged PDFs, is akin to using semantic HTML for web content, as both provide structure and meaning essential for assistive technologies. You’ll also want to ensure document formats are compatible with screen readers and include alternative text for images and charts.

### Tagging in PDFs
* **Elements to Tag**: Similar to semantic HTML, elements like text, images, tables, and lists in PDFs are tagged (e.g., **`<Heading>`**, **`<Paragraph>`**, **`<Table>`**, **`<Alt>`**).
* **Applying Tags**: Use PDF creation tools like [Adobe Acrobat](https://www.adobe.com/acrobat.html) (you’ll need the paid Pro version for this. Acrobat Reader doesn’t offer tagging features), which automatically add tags. Manually edit tags in Acrobat through the Tags panel.

### Checking PDF Accessibility
* **Adobe Acrobat's Accessibility Checker**: [This tool in Acrobat](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html) assesses PDF accessibility, reviewing tags, reading order, and alt text.
* **Alternative Tools**: For non-Acrobat users, online tools like [PDF Accessibility Checker](https://pdfua.foundation/en/pdf-accessibility-checker-pac/) (PAC) provide basic accessibility evaluations.

### Other Document Types
#### Microsoft Office Accessibility
  * **Office Accessibility Checker**: Microsoft Office includes a built-in [Accessibility Checker](https://support.microsoft.com/en-us/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155) available in Word, Excel, Outlook, OneNote, PowerPoint on Windows or Mac, and Visio on Windows. This tool identifies accessibility issues in your document and suggests how to resolve them​​.
  * **Best Practices**: Office provides guidance on creating accessible content, such as using larger font sizes, adding descriptions to media, and using proper headings and structure.
#### Google Docs Accessibility
  * **Building Accessible Content**: Google Docs is well-integrated with assistive technologies, offering features for enhanced accessibility.
  * **Key Features**: Include adding headings for structure, applying alt text to images, properly structuring lists, using appropriate line and paragraph spacing, and adding a table of contents for longer documents​​​​​​​​​​​​.
  * **Accessibility Check Tool**: [Grackle](https://dap.berkeley.edu/learn/techniques/how-do-i-make-my-google-docs-accessible#:~:text=Grackle%20is%20a%20suite%20of,the%20accessibility%20of%20your%20documents) is a Google Add-on suite for checking the accessibility of Google Docs, Slides, and Sheets​​.
#### Apple Pages Accessibility
  * **Creating Tagged Documents**: Apple Pages allows you to [create accessible and tagged documents](https://support.apple.com/en-us/102031#:~:text=Create%20accessible%20and%20tagged%20documents,can%20support%20enhanced%20accessibility%20features) that work well with screen readers and other assistive technologies​​.
  * **Accessibility Features**: Include using larger font sizes, adding descriptions to media like images and movies, using headings for easy navigation, and incorporating a table of contents in longer documents​​​​​​.

Ensuring document accessibility involves both technical tagging and making content comprehensible for all users, much like structuring web content with semantic HTML.

## Testing Content for Accessibility

Testing web content for accessibility is a multi-step process that combines automated tools and real user testing. Don't skip this step; it's important!

### Automated Tools
* Tools like [WAVE \(Web Accessibility Evaluation Tool\)](https://wave.webaim.org/) and [axe Accessibility Checker](https://www.deque.com/axe/) help identify issues in web content.
* These tools can check for things like missing alt text, incorrect semantic markup, and color contrast issues.

### User Testing
* [Involving users](https://www.w3.org/WAI/test-evaluate/involving-users/#:~:text=Just%20as%20with%20any%20evaluation,want%20novice%20assistive%20technology%20users) with disabilities in testing is crucial for understanding the real-world usability of your content.
* **Initial Review**: Begin by [identifying major accessibility barriers](https://www.w3.org/WAI/test-evaluate/involving-users/#:~:text=The%20initial%20review%20identifies%20any,on%20for%20evaluation%20with%20users) before conducting detailed user tests​​.
* **Types of User Evaluations**: Include informal evaluations, like asking someone who uses a screen reader to navigate a data table, and formal usability testing with specific tasks and protocols​​​​.
* **Diversity of Users**: Involve users with different levels of experience with assistive technologies, depending on your target audience. This might include advanced users for specialized applications or novice users for more general websites​​.
* **Consider All Input**: Be cautious about generalizing from the feedback of one individual, as different users with disabilities may have different needs and preferences​​.

### Benefits of User Testing
* Evaluating with users often reveals usability issues that aren't apparent through conformance evaluation alone​​.
* This approach not only identifies accessibility-specific problems but can also uncover general usability issues that affect all users, including those without disabilities​​.

Incorporating a blend of automated testing and user involvement ensures a more comprehensive understanding and resolution of accessibility issues, leading to a universally better user experience.

## Content Is King

Embracing accessible content and media is about creating an environment where information is not just available but is also consumable by everyone. It's a step towards a more empathetic and inclusive digital world. In our next article, we'll navigate the intricacies of mobile web accessibility, ensuring your content is accessible across all devices.