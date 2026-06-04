export const authorInfo = {
  name: "Darin Graves",
  firstName: "Darin",
  email: "ddg2112@yahoo.com",
  phone: "(952) 228-4374",
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
    status: "coming-soon",
    statusText: "Coming Soon",
    themes: ["Sci-Fi", "Dystopian", "Revenge", "Faith"]
  },
  {
    id: 2,
    title: "Serial Killer Explanation",
    description: "Some holes can't be filled. Some evils can't be explained. Mick Enderson walks among us, a man hiding in plain sight, chasing a feeling he can't name and a hunger he can't silence. Whispers of vanished lives shadow his every step, while a sinister presence lingers at the edge of his conscience, urging him deeper into the dark.",
    description2: "As bodies disappear and fear grows, a relentless detective and a conflicted priest find themselves drawn into a chilling cat-and-mouse pursuit, each step revealing uncomfortable truths about the nature of evil, and the thin line that separates salvation from damnation.",
    description3: "A psychological thriller soaked in dread and moral ambiguity, this is not a story about justice. It's a story about what we refuse to see, until it's far too late.",
    coverImage: "/images/serial-killer.jpg",
    status: "published",
    statusText: "Available Now",
    purchaseLinks: [
      { name: "Amazon", url: "https://www.amazon.com/Serial-Killer-Explanation-Darin-Graves-ebook/dp/B0GJM36MM5/ref=tmm_kin_swatch_0" },
      { name: "GoodReads", url: "https://www.goodreads.com/book/show/241841897-serial-killer-explanation" }
    ],
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
  { name: "Contact", href: "#contact" },
]