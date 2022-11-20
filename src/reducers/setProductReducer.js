import { SET_PRODUCT } from "../actions/actions";

const initialState = {
  name: "Under Armour Men's Charged Assert 9 Running Shoe",
  imgs: [
    [
      "imgs/product-page-shoes/shoe_1/shoe_1_red_A.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_red_B.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_red_C.png",
    ],
    [
      "imgs/product-page-shoes/shoe_1/shoe_1_black_A.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_black_B.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_black_C.png",
    ],
    [
      "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_A.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_B.png",
      "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_C.png",
    ],
  ],
  colors: ["red", "black", "navy"],
  description:
    "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
  rating: "4.6",
  price: "56.25",
  size: [1, 2, 3, 4, 5, 6, 7, 8],

  reviews: [
    {
      name: "Tezza",
      review:
        "These are highly rated so I thought Id buy them for jogging. Because of foot problems, I usually have to substitute the footbed in the shoe for an orthotic.I tried these on and they look pretty good and feel pretty good. The sole on them is a little harder and more supportive than other shoes, which I like. Unfortunately, I would still need to use an orthotic to jog in these, as the footbed is somewhat flat and not overly arch-supportive. That's not to say they are a bad shoe, quite the opposite, they are really good.So, currently I'm using them as my biking shoe (mountain, road) and they work great for that. Probably a pretty good walking shoe. Not so sure about using them as a true running shoe, depends on your needs for support.",
      rate: "5",
    },
    {
      name: "Allison Boland",
      review:
        "Love these shoes! I bought my husband a pair of these shoes and he loves them and couldn't stop talking about how great they were. Well, I happen to be running to my car and just slipped on his shoes and I have to say, OMG! They felt awesome even though they weren't my size. So, I have to agree with my husband and even tell him he was right for once, lol. So, I bought myself a pair, they fit perfectly, feel great, high quality.",
      rate: "5",
    },
    {
      name: "Jim Leahey",
      review:
        "These shoes are very comfortable, but most importantly they are sturdily built. Typically I start wearing a sneaker out within the first month of use, however, in the weeks that I've owned this and after walking several dozen miles in them there's almost no signs of wear or tear. If you are on a budget, buy these.I wouldn't work out in them as they are high soled and you could get a nasty sprain running in these (also kind of heavy).",
      rate: "5",
    },
    {
      name: "Big Fan",
      review:
        "I find UA clothing rediculously expensive but the shoes are priced right. I have moved to all UA shoes. inexpensive , durible and they look great. I wear them to work, I have 2 different pairs for working out and one for kicking around in.",
      rate: "5",
    },
    {
      name: "	CDM",
      review:
        "Very comfortable and supportive, might run a little small. I ordered without trying them on first, I usually wear 10.5 but occasionally in some brands I go with 11. If I get these again, I'll probably go for 11. My Brooks fit perfect in 10.5, but these seem a little on the snug side.",
      rate: "4",
    },
    {
      name: "Katrina Perry",
      review:
        "I got these for a nice looking pair of shoes on the weekends. I have size 14 4E feet. They are comfortable enough to wear around for a day. Over all I am happy with them. I will say though, my feet are wide and it is hard to find a 4E that is still wide enough and actually fits. I'm a Dunham, Brooks, Hoka 4E person. These brands, my little toe does not rub the outside. Asics, Saucony, New Balance, all of those 4E my little toe is still squished against the side. That is the case with these as well. So, if those brands fit you, these will be just fine. If those brands are slightly snug on you, these will be too. The length is spot on. The only other ding i'd give it is as soft and flexible as the sides are, really nice, the big logo on the side is fairly rigid and you can feel it on the side of your foot. Not rubbing to the point of blisters or anything, but you definitely know there's a big logo on the side of your shoe.",
      rate: "4",
    },
    {
      name: "	Jason schilling",
      review:
        "I've bought this style a few times now. I do alot of walking for work and they have definitely held up! Have had lower back issues but haven't had many issues since I've been wearing these!",
      rate: "5",
    },
    {
      name: "Objective reviewer",
      review:
        "I am training for an Ironman, I use this shoes for easy runs and recovery training and they are very comfortable and stable. Wouldn't do anything longer than 15k on them, will never brake a personal record on them, but they cost at least half the price of all my other running shoes, which make this pair a pretty good option for daily trainers. Helps you balance out the wear of your other, more expensive, running shoes.",
      rate: "5",
    },
  ],
};

const setProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default setProduct;
