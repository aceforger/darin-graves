// data.js - Updated with review data
export const authorInfo = {
  name: "Darin Graves",
  firstName: "Darin",
  email: "ddg2112@yahoo.com",
  
  bio: "Darin Graves is a writer and creator whose work is deeply inspired by the legendary Neil Peart. Though he never met his mentor, Peart's lyrics changed his life and shaped his creative vision. His works explore themes of faith, revenge, morality, and the human condition.",
  bio2: "Love story turns tragic. His entire life turns in love, revenge and faith in his life story. The main character's faith in what he believes in is questioned by himself. Like every person wants to go to heaven, but his actions — killing the man who murdered his loved one — take away his key to heaven's gates?",
  inspiration: "Neil Peart was my mentor; I never met him. His lyrics changed my life.",
  roles: ["Screenwriter", "Author", "Creator", "Storyteller"]
}

export const book = [
  {
    id: 1,
    title: "2112",
    subtitle: "Screenplay",
    description: "The book is about a story from 2112. All creations from the novel were written by Darin Graves. The album has the story; my novel has all actions within.",
    tagline: "The album has the story. The novel has all actions within.",
    coverImage: "/images/2112.jpg",
    status: "published",
    statusText: "Available Now",
    purchaseLinks: [
      { name: "Amazon", url: "https://www.amazon.com/2112-Darin-Graves-ebook/dp/B0H2RDWTSD/ref=sr_1_1?crid=15G1YNBEPQ5KA&dib=eyJ2IjoiMSJ9.eHqDZpow3vgfmW4b7RijTw.81orCv97HjYjkMMBL1cn0YWu0mPlYO52RyeDqpYjxCA&dib_tag=se&keywords=2112+darin+graves&qid=1780696250&s=books&sprefix=2112+darin+grave%2Cstripbooks-intl-ship%2C374&sr=1-1" },
      { name: "Gandhi", url: "https://www.gandhi.com.mx/2112-9798256049775/p?srsltid=AfmBOops3UwU0CJByK59MIIofyZLvzFWwHEa-ia_i3JTigbdJoYZB-KX" },
      { name: "Bol.com", url: "https://www.bol.com/nl/nl/p/2112/9300000295633547/" },
      { name: "Saxo", url: "https://www.saxo.com/dk/2112_bog_9798256047863?srsltid=AfmBOopUtxpx_Jh5do34H4LRyrwTyiqoVVjxD8SxDFNJGMZ7Xiw2CJyg" }
    ],
    themes: ["Sci-Fi", "Dystopian", "Revenge", "Faith"]
  },
  {
    id: 2,
    title: "Serial Killer Explanation",
    description: "Some holes can't be filled. Some evils can't be explained. Mick Enderson walks among us, a man hiding in plain sight, chasing a feeling he can't name and a hunger he can't silence. Whispers of vanished lives shadow his every step, while a sinister presence lingers at the edge of his conscience, urging him deeper into the dark.",
    description2: "As bodies disappear and fear grows, a relentless detective and a conflicted priest find themselves drawn into a chilling cat-and-mouse pursuit, each step revealing uncomfortable truths about the nature of evil, and the thin line that separates salvation from damnation.",
    description3: "A psychological thriller soaked in dread and moral ambiguity, this is not a story about justice. It's a story about what we refuse to see, until it's far too late.",
    coverImage: "/images/serial-killer.jpg",
    status: "Coming Soon",
    statusText: "Coming Soon",
    // purchaseLinks: [
    //   { name: "Amazon", url: "https://www.amazon.com/Serial-Killer-Explanation-Darin-Graves-ebook/dp/B0GJM36MM5/ref=tmm_kin_swatch_0" },
    //   { name: "GoodReads", url: "https://www.goodreads.com/book/show/241841897-serial-killer-explanation" }
    // ],
    themes: ["Psychological Thriller", "Crime", "Moral Ambiguity", "Suspense"]
  },
  {
    id: 3,
    title: "Animating Principle",
    description: "My book questions whether or not the main character, Jim, can sin against what he believes in and still pass into heaven's gates. Wealthy yet sad through his entire life, Jim has his whole life stolen from him as he loses his loved one. He asks, 'will revenge somehow make my life better? Will killing another human being who may or may not be guilty show how I am happy exploring the vastness of heaven?'",
    description2: "The book covers a range of topics - dreams, desires, law, and order. What should we do with criminals? Individual changes and culture can influence how a person feels. Pure love is growing with Jim and Aliccia, and because of that, they change. This is the story of their entire lives, how their future and pasts altered.",
    coverImage: "/images/animating-principle.jpg",
    status: "coming-soon",
    statusText: "Coming Soon",
    themes: ["Faith", "Revenge", "Love", "Morality"]
  },
  {
    id: 4,
    title: "Devil's Erudition",
    description: "God and the Devil, ever turning Faith for and against. God created people. St. Lucifer did not like it. God designed, produced, and fashioned human beings the best he saw fit, giving him evolution through DNA. As the millions of years go by only the fit survive. The only Saint who stood against people and God's creation, the Devil plays the puppeteer to push and shove into extreme sins, to make commodities, objects and deeds to exploit for individuals to make their lives better. The Devil takes time to learn more about humans on Earth, his Erudition, to gain an understanding of. Warmongers to serial killers, the Devil, does not like what he sees. For their coming future, sees them die, polluting and corrupting the planet before they would ever travel to distant planets!",
    coverImage: "/images/erudition.jpg",
    status: "coming-soon",
    statusText: "Coming Soon",
    // purchaseLinks: [
    //   { name: "Amazon", url: "https://www.amazon.com/Devils-Erudition-Darin-Graves/dp/195534730X" },
    //   { name: "GoldTouch Press", url: "https://goldtouchpress.com" }
    // ],
    themes: ["Religion & Faith", "Philosophy", "Dark Fiction"],
    bookDetails: {
      publisher: "GoldTouch Press, LLC",
      isbn: "9781955347303",
      pages: 93,
      genre: "Religion & Faith"
    }
  }
]

export const featuredBook = book[0]

export const contactInfo = {
  email: "ddg2112@yahoo.com",
  phone: "(952) 228-4374"
}

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Media", href: "#media", children: [
    { name: "Gallery", href: "#gallery" },
    { name: "Video", href: "#video" }
  ]},
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

export const reviews = [
  {
    id: 1,
    bookTitle: "Devil's Erudition",
    bookId: 4,
    reviewer: "Rae Capri",
    source: "Hollywood Book Reviews",
    rating: 5,
    date: "2024",
    fullReview: `Some people wonder exactly what their true purposes are for being created and living amongst other living organisms on the same planet. If we give off negative phrases or energy, the world will respond in kind or lack thereof. Nature has a great way of snapping us all back into our truer realities, which leaves the open question of how well can we benefit from each other.

In Devil's Erudition, author Darin Graves sets a beautiful scenery from what we can all see if we took time to appreciate just how much the Earth has within its natural beauty and resources. A conversation was had between the Heavenly Father and one of his angels, Lucifer. This conversation could open one's eyes in viewing from the perspective of how ungrateful and undeserving people truly are. This would change the views of many because we're taught and encouraged to be grateful, but there are times when we do not practice gratitude, so we suffer the consequences. The tone of Lucifer's rant could be read as frustration and borderline jealousy, with how he's questioning and demanding a response as it shows his hostile attitude towards God's greatest creation, humankind.

This goes without saying, humans are the uniquely made creations of God's finest work because we are created with his image in mind. Sparking up the unfairness for Lucifer to have been cast out the minute he went against and attempted to become God, while humans drenching in various sins have the opportunity to still go to heaven, demonstrates that. Not only is jealousy used as an element for being the root of humankind's destruction, but Lucifer has also grown fond of becoming studious in learning everything that humans do and are capable of. As you will read through the chapters, there is a common description of a little man in a suit with a bowler hat, who's an onlooker that marvels at the unwrapping scenes before his eyes. Interestingly enough, he prefers to switch between a human or raven, depending on the circumstance; he cannot get enough of keeping a watchful eye on the "piglets," as he refers to humans.

From the first chapter, you are pulled into the premature mind of a serial killer as you learn what his thought processes are like during his encounter with a close friend. This instance has set the tone for the rest of the book because everyone had their unique encounter with the devil himself. Exactly how, one might wonder? By observing humans from the shadows, the willingness to reveal himself at the appropriate time and even provide pointers proves that many have seen him. Leading people to take a step back and regroup, realizing maybe individuals who claimed "the devil made them do it," with some in psychiatric wards, might be telling the truth. In this book with various short stories, the devil has made his presence known, yes, but hasn't directly made humans do anything.

Each chapter allows you to witness a few popular murderers and serial killers with their victims, demonstrating their killing technique, and what was occurring in their mental state. It is interesting to learn about such individuals because many have only read about them in books, while these are actual people who committed such heinous crimes. One particular chapter stands out the most because we are currently experiencing these adjustments in our current world. The elites, if you will, are the most powerful and all-knowing individuals that control the entire world. The special group who rules are designated families that oversee over all others who are part of the mass in their organization. Going back to the conversation Lucifer is having with the Father, it speaks volumes. As humans, we are heavily flawed, but many will continue to believe otherwise.

The topic of space appears a few times in regards to what people are trying to accomplish today, engineering a spacecraft that would ship humans to Mars. A tidbit mentioned about the solar system helped a lot in seeing Lucifer's views because it seems to make sense. We have only been able to inhabit the Earth out of all other areas in the solar system, and there's a reason for it. It is almost as if God created the solar system and galaxies for additional parts to fix up Earth. It is also revealed that humans struggle with "finding their true purpose in life," but are always quick to blame the devil for the evil activities and thoughts they act on. Instead, Lucifer makes it clear that he doesn't necessarily take advantage of the human mind, but that humans want their cake and eat it too.

This was an eye-opener, as I learned how Lucifer views us and that our futures aren't foreseen by anyone, not even God. No one knows what may happen in our future, which should make people reconsider their actions as they go through life. Unfortunately, our prayers for what we hope to accomplish in our future are just prayers that cannot manifest into our reality. I highly recommend this book to everyone as there are lots one can take away from reading this.`,
    excerpt: "A conversation was had between the Heavenly Father and one of his angels, Lucifer. This conversation could open one's eyes in viewing from the perspective of how ungrateful and undeserving people truly are.",
    highlights: [
      "Explores Lucifer's perspective on humanity",
      "Witness infamous serial killers through the devil's eyes",
      "Questions the nature of free will and evil",
      "Philosophical dialogue between God and Lucifer"
    ]
  }
]