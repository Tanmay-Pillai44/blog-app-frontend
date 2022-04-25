
const BlogData = [
    // Technology
    {
        id: 0,
        author: "Aman Rawat",
        title: "Elon Musk says he has $46.5 billion in financing ready to buy Twitter",
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1034264-untitled-design-46.jpg",
        description: "Last week, Musk announced an offer to buy the social media company for $54.20 per share, or about $43 billion.",
        category: "Technology",
        date: "April 21, 2022",
        readTime: "1 min read",
        // tags:,
        // data:
    },
    {
        id: 1,
        author: "Reema Sharma",
        title: "Sony launches Alpha 7R IV mirrorless camera line-up in India",
        img: "https://english.cdn.zeenews.com/sites/default/files/2019/09/18/819527-sonycamera.jpg",
        description: "The camera supports Professional 4K movie recording functionality including full pixel readout with no pixel binning in Super 35mm mode6, S-Log, HDR workflow support.",
        category: "Technology",
        date: "September 18, 2019",
        readTime: "2 mins read"
    },
    {
        id: 2,
        author: "Reema Sharma",
        title: "Lenovo's new ultra-slim PCs, all-in-one desktop in India",
        img: "https://english.cdn.zeenews.com/sites/default/files/2019/08/01/808000-lenovooffer.jpg",
        description: `While the starting price for the new flagship "Yoga S940" laptop is Rs 1,39,990, the all-in-one desktop is priced at Rs 1,69,990. Aiming at reaching a larger audience, the laptop part of Lenovo's ultra-slim category starts at an entry level price point of Rs 23,990.`,
        category: "Technology",
        date: "August 01, 2019",
        readTime: "2 mins read"
    },
    {
        id: 3,
        author: "Zee Media Bureau",
        title: "Scam Alert! Viral message on social media offering free internet could be a scam",
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/04/21/931243-untitled-design-81.png",
        description: "The message falsely claims that the Government has promised 100 million users free recharge plans for online education.",
        category: "Technology",
        date: "April 21, 2021",
        readTime: "2 mins read"
    },
    {
        id: 4,
        author: "Zee Media Bureau",
        title: "Samsung Galaxy M12 with quad rear cameras launched in India",
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/03/11/922263-samsungm12.jpg",
        description: "The Samsung Galaxy M12 comes in two variants -- the 4 GB RAM + 64 GB storage variant is priced at Rs 10,999, and the 6 GB RAM + 128 GB storage model will set you back by Rs 13,499.",
        category: "Technology",
        date: "March 11, 2021",
        readTime: "2 mins read"
    },
    {
        id: 5,
        author: "Reema Sharma",
        title: "Xiaomi Mi 11 with Snapdragon 888 ship, 120Hz display launched",
        img: "https://english.cdn.zeenews.com/sites/default/files/2020/12/29/907947-xiaomim11.jpg",
        description: "Debuting Qualcomm’s Snapdragon 888 chipset, Mi 11 features 2K AMOLED display.",
        category: "Technology",
        date: "December 29, 2020",
        readTime: "3 mins read"
    },
    {
        id: 6,
        author: "Zee Media Bureau",
        title: `GTA 5 new-gen version releasing on March 15, check India price for PS5, Xbox Series X|S`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/03/10/1021559-gta5.jpg",
        description: "GTA 5 new-gen version features new graphics modes including up to 4K resolution.",
        category: "Technology",
        date: "March 10, 2022",
        readTime: "3 mins read"
    },
    {
        id: 7,
        author: "Reema Sharma",
        title: `Epic vs Apple battle: Xsolla comes out with Web Shop, let game developers to grow their revenue by 40%`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/10/29/983430-computernew-pixabay.jpg",
        description: "Xsolla tools and services allow users to add virtual currencies and items to their accounts, using their preferred local currency.",
        category: "Technology",
        date: "October 29, 2021",
        readTime: "1 min read"
    },
    {
        id: 8,
        author: "IANS",
        title: `Google working on Pinterest-like app called Keen`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2020/06/19/867573-google.jpg",
        description: `Keen which is a web and Android app encourages users to make a "Keen" (like a Pinterest board) about any topic they like.`,
        category: "Technology",
        date: "June 19, 2020",
        readTime: "2 mins read"
    },
    {
        id: 9,
        author: "Zee Media Bureau",
        title: `Reverse Email Lookup - The Ultimate Guide in 2021`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/11/11/986830-2nd-zee-news-image.jpg",
        description: `One of the crucial points about choosing the application is also the privacy factor. Read the privacy guidelines and terms before indulging in the usage of any application.`,
        category: "Technology",
        date: "November 11, 2021",
        readTime: "5 mins read"
    },
    // Bollywood
    {
        id: 10,
        author: "Aditi Sharma",
        title: `Kiara Advani praises Shahid Kapoor in 'Jersey', actor replies 'Tu meri bandi hai' - Read on`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/22/1034374-kiara.jpg",
        description: `Kiara Advani showered praise on her 'Kabir Singh' co-star Shahid Kapoor for his performance in his latest release 'Jersey'.`,
        category: "Bollywood",
        date: "April 22, 2022",
        readTime: "3 mins read"
    },
    {
        id: 11,
        author: "Ankita Bhandari",
        title: `Leaked photos of Katrina Kaif from sets of Vijay Sethupathi starrer 'Merry Christmas' go VIRAL`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1034242-katrina-kaif-anita-shroff-n.jpg",
        description: `Katrina Kaif is sharing the screen space with south superstar Vijay Sethupathi for the first time in her upcoming film 'Merry Christmas'.`,
        category: "Bollywood",
        date: "April 21, 2022",
        readTime: "2 mins read"
    },
    {
        id: 12,
        author: "Ankita Bhandari",
        title: `'KGF: Chapter 2' beats 'Dangal', 'Baahubali 2', becomes fastest film to hit benchmark of Rs 250 crore`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1034222-kgf-2-yash.gif",
        description: `Headlined by Yash and starring a talented ensemble cast including Sanjay Dutt and Raveena Tandon, 'KGF: Chapter 2' released nationwide on April 14.`,
        category: "Bollywood",
        date: "April 21, 2022",
        readTime: "1 min read"
    },
    {
        id: 13,
        author: "Tahira Khan",
        title: `Amitabh Bachchan’s 'Jhund' to debut on OTT on May 6, know where to watch it!`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1034065-jhund-amitabh-bachchan.png",
        description: `Directed by Nagraj Manjule, and produced by Bhushan Kumar, Krishan Kumar, Raaj Hiremath, Gargee Kulkarni, Meenu Aroraa, and Manjule, 'Jhund' will exclusively stream on ZEE5 from May 6.`,
        category: "Bollywood",
        date: "April 21, 2022",
        readTime: "2 mins read"
    },
    {
        id: 14,
        author: "Tahira Khan",
        title: `Alia Bhatt's 'Gangubai Kathiawadi' to premiere on Netflix soon`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/20/1033690-alia-bhatt-gangubai-kathiawadi-1.png",
        description: `Helmed by Sanjay Leela Bhansali, ‘Gangubai Kathiawadi’, will premiere on Netflix on April 26.`,
        category: "Bollywood",
        date: "April 20, 2022",
        readTime: "2 mins read"
    },
    {
        id: 15,
        author: "Aditi Sharma",
        title: `Shah Rukh Khan, Rajkumar Hirani's FIRST film Dunki's announcement will make your heart skip a beat! - Watch`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/19/1033421-srk.jpg",
        description: `Shah Rukh Khan and Rajkumar Hirani's first collaboration together 'Dunki' will also star Taapsee Pannu in a pivotal role.`,
        category: "Bollywood",
        date: "April 19, 2022",
        readTime: "4 mins read"
    },
    {
        id: 16,
        author: "Tahira Khan",
        title: `Tiger Shroff’s ‘Babloo’ sports top designer labels in Sajid Nadiadwala’s 'Heropanti 2'`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/18/1033140-tiger-shroff-heropanti-2.png",
        description: `Tiger Shroff, Nawazuddin Siddiqui starrer 'Heropanti 2' will release in theatres on April 29.`,
        category: "Bollywood",
        date: "April 18, 2022",
        readTime: "2 mins read"
    },
    {
        id: 17,
        author: "Ankita Bhandari",
        title: `Alia Bhatt, Ranbir Kapoor wedding festivities kick off, bride's father Mahesh Bhatt, groom's mother Neetu Singh spotted`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/13/1031437-ranbir-alia-wedding-pti.gif",
        description: `A host of celebrities were spotted outside Ranbir Kapoor's building today as the wedding festivities of 'Raalia' kicked off today.`,
        category: "Bollywood",
        date: "April 13, 2022",
        readTime: "5 mins read"
    },
    // Hollywood
    {
        id: 18,
        author: "Ankita Bhandari",
        title: `Moon Knight episode 4: Shocking plot twist in Oscar Isaac's series explained`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1033931-moon-knight-4.gif",
        description: `The third episode of 'Moon Knight' ended with Konshu being imprisoned in stone thanks to his manipulation of the night sky. Meanwhile, Marc and Steven are left without powers and without access to the Moon Knight suit.`,
        category: "Hollywood",
        date: "April 21, 2022",
        readTime: "3 mins read"
    },
    {
        id: 19,
        author: "Tahira Khan",
        title: `Priyanka Chopra's Hollywood film 'It's All Coming Back to Me' to release in February 2023`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/19/1033369-priyanka-chopra-1.png",
        description: `"It's All Coming Back to Me" was earlier named 'Text For You'.`,
        category: "Hollywood",
        date: "April 19, 2022",
        readTime: "2 mins read"
    },
    {
        id: 20,
        author: "Aditi Sharma",
        title: `Thor: Love and Thunder teaser OUT: God of Thunder embarks on quest for inner peace, watch here!`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/18/1033235-thor.jpg",
        description: `Marvel Studios' 'Thor: Love and Thunder' is set to unleash in theaters on 8th of July in India in English, Hindi, Tamil, Telugu, Kannada and Malayalam.`,
        category: "Hollywood",
        date: "April 18, 2022",
        readTime: "2 mins read"
    },
    {
        id: 21,
        author: "Zee Media Bureau",
        title: `Five reasons to watch Gerald Butler’s ‘Greenland’, film to premier on Lionsgate Play on 15th April`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/13/1031296-gerard-butler-greenland.png",
        description: `Gerald Butler's Greenland, the movie is all set to release in Hindi, Tamil and English exclusively on Lionsgate Play on 15th April, 2022.`,
        category: "Hollywood",
        date: "April 13, 2022",
        readTime: "3 mins read"
    },
    {
        id: 22,
        author: "Aditi Sharma",
        title: `Fantastic Beasts 3: Gay references removed from Chinese version of film`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/12/1031081-fantastic.jpg",
        description: `The Chinese version has chopped six seconds from the film's final cut, including two lines of dialogues that referenced a previous romantic relationship between lead characters.`,
        category: "Hollywood",
        date: "April 12, 2022",
        readTime: "3 mins read"
    },
    {
        id: 23,
        author: "Aditi Sharma",
        title: `Oscars 2022: Will Smith resigns from Academy, disciplinary proceedings against actor will continue`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/04/02/1027811-will-smith-1.jpg",
        description: `When Smith won Best Actor later in the ceremony, he apologised to the Academy and his fellow nominees but didn't mention Chris Rock by name.`,
        category: "Hollywood",
        date: "April 02, 2022",
        readTime: "3 mins read"
    },
    {
        id: 24,
        author: "Ritika Handoo",
        title: `Top Gun: Maverick trailer - Tom Cruise presents a high-octane action ride, Watch`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/03/30/1026836-tom-cruise.jpg",
        description: `Top Gun: Maverick trailer is loaded with scenes of thrill, drama, suspense and action.`,
        category: "Hollywood",
        date: "March 30, 2022",
        readTime: "2 mins read"
    },
    {
        id: 25,
        author: "Ritika Handoo",
        title: `Deleted Joker scene from superhero drama 'Batman: The Caped Crusader' released by director!`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2022/03/25/1025508-the-batman.jpg",
        description: `The scene is available after visiting a website that mimics the word puzzles posed by the Riddler (Paul Dano) in the movie.`,
        category: "Hollywood",
        date: "March 25, 2022",
        readTime: "3 mins read"
    },
    // Travel
    {
        id: 26,
        author: "Zee Media Bureau",
        title: `Jibhi to Varkala: 5 stunning remote working destinations`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/09/06/967953-jhnt.jpg",
        description: `With most companies set to continue work from home for the foreseeable future, remote working is set to pick up and evolve further in the coming months.`,
        category: "Travel",
        date: "September 06, 2021",
        readTime: "5 mins read"
    },
    {
        id: 27,
        author: "Pankaj Nath",
        title: `Your travelling can help boost the economy!`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2021/02/24/919281-travelling.jpg",
        description: `For some, travel is a source of happiness and for some, it’s a break from their otherwise monotonous life. Whatever your reason might be, we should travel as much as possible because of the contribution it does to our overall personality development.`,
        category: "Travel",
        date: "February 24, 2021",
        readTime: "5 mins read"
    },
    {
        id: 28,
        author: "Ritika Handoo",
        title: `Explore Santa Monica: Fun facts you might not know`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2019/10/15/824863-santa-monica.jpg",
        description: `Here’s a list of some of the more eccentric and less recognized information about beautiful, sunny Santa Monica.`,
        category: "Travel",
        date: "October 15, 2019",
        readTime: "5 mins read"
    },
    {
        id: 29,
        author: "Ritika Handoo",
        title: `Planning a family trip to California? Here are 11 Tips for your vacay`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2019/08/19/812521-zoo.jpg",
        description: `Here are 11 tips and family-friendly travel hacks to help you build your family’s trip, with an eye toward keeping the fun quotient high and missed opportunities to a minimum.`,
        category: "Travel",
        date: "October 15, 2019",
        readTime: "10 mins read"
    },
    {
        id: 30,
        author: "IANS",
        title: `Here's why you should consider a beach holiday`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/06/29/700159-beach-pixbay.gif",
        description: `Check out why a beach holiday is the best way to refresh the mind.`,
        category: "Travel",
        date: "June 29, 2018",
        readTime: "2 mins read"
    },
    {
        id: 31,
        author: "Divyanshi Sharma",
        title: `Five things to do in Nainital`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/06/10/693860-nainital.jpg",
        description: `Following are five things that you can do while you're in Nainital.`,
        category: "Travel",
        date: "June 10, 2018",
        readTime: "2 mins read"
    },
    // Food
    {
        id: 32,
        author: "IANS",
        title: `Good food is good food, no matter where you eat it: Celebrity chef Sarah Todd (Foodie Trail-Gurugram)`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/10/17/728607-saraah-todd.jpg",
        description: `Todd, who is well known in India after she was seen competing in MasterChef Australia Season 6, has incorporated Indian flavours in many of her dishes on The Wine Company's menu that perfectly compliments a glass of wine.`,
        category: "Food",
        date: "October 17, 2018",
        readTime: "4 mins read"
    },
    {
        id: 33,
        author: "Zee Media Bureau",
        title: `Navratri special 2018- Delicacies to savour during 9-days of fasting`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/10/11/727052-navratri-food.jpg",
        description: `Given below are gourmet delicacies you can savour while fasting. You can, however, probe further and experiment with the flip-flop of ingredients of your predilection.`,
        category: "Food",
        date: "October 11, 2018",
        readTime: "4 mins read"
    },
    {
        id: 34,
        author: "Zee Media Bureau",
        title: `Different modaks to try this Ganesh Utsav`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/09/12/719629-modak.jpg",
        description: `Out of all the preparations, Modaks top the list of every devotee so make sure you are trying out new options this time.`,
        category: "Food",
        date: "September 12, 2018",
        readTime: "3 mins read"
    },
    {
        id: 35,
        author: "Zee Media Bureau",
        title: `Janmashtami special recipe: This is how you can make coconut burfi at home`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/08/31/716584-nariyal-burfi.jpg",
        description: `The day is also special as several delicacies are prepared at home for celebrating the birth of Thakur Ji.`,
        category: "Food",
        date: "August 31, 2018",
        readTime: "2 mins read"
    },
    {
        id: 36,
        author: "IANS",
        title: `Here's how you can make your evening snack delicious, healthy`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/05/03/683175-dryfruits4.gif",
        description: `Here's how you can make your evening snack delicious, healthy`,
        category: "Food",
        date: "May 03, 2018",
        readTime: "4 mins read"
    },
    {
        id: 37,
        author: "IANS",
        title: `Summer drinks: Cool recipes to beat the heat`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/05/01/682396-summerdsrin.gif",
        description: `Check out some delicious summer drinks recipes to beat the heat.`,
        category: "Food",
        date: "May 01, 2018",
        readTime: "5 mins read"
    },
    {
        id: 38,
        author: "ANI",
        title: `India not among top 20 coffee drinking countries`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2018/02/20/661955-coffee44.jpg",
        description: `In a survey published by the International Coffee Organisation (ICO), Finland took the top spot, consuming about 12kg of coffee per year.`,
        category: "Food",
        date: "February 20, 2018",
        readTime: "1 min read"
    },
    {
        id: 39,
        author: "IANS",
        title: `Here’s how you can make noodles look, taste more interesting`,
        img: "https://english.cdn.zeenews.com/sites/default/files/2017/06/20/603859-noodles-pixabay.jpg",
        description: `Here are a few tips to make your noodles look, taste more interesting.`,
        category: "Food",
        date: "June 20, 2017",
        readTime: "2 mins read"
    },
];

export default BlogData;