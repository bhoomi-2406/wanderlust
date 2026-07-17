const sampleListings = [


{
  title: "Luxury Apartment near Times Square",
  description:
    "Stay in the heart of Manhattan in this stylish apartment, just minutes from Times Square, Broadway, and Central Park. Ideal for city explorers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 9500,
  location: "New York City",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Paris Balcony Studio",
  description:
    "Wake up to charming Parisian streets from your private balcony. A cozy studio within walking distance of cafés and iconic landmarks.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
  },
  price: 8900,
  location: "Paris",
  country: "France",
  category: "Iconic Cities",
},
{
  title: "Tokyo Skyline Residence",
  description:
    "Modern apartment with panoramic skyline views, fast Wi-Fi, and easy access to Tokyo's shopping, dining, and nightlife.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=60",
  },
  price: 8200,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic Cities",
},
{
  title: "Dubai Marina Penthouse",
  description:
    "Experience luxury living in a spacious penthouse overlooking Dubai Marina with premium amenities and breathtaking city views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
  },
  price: 15000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Iconic Cities",
},

{
  title: "Swiss Alpine Chalet",
  description:
    "Relax in a cozy wooden chalet surrounded by snow-capped mountains and spectacular alpine scenery. Perfect for nature lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 7800,
  location: "Zermatt",
  country: "Switzerland",
  category: "Mountains",
},
{
  title: "Himalayan View Cabin",
  description:
    "Enjoy breathtaking sunrise views over the Himalayas from this peaceful cabin with modern comforts and warm interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Manali",
  country: "India",
  category: "Mountains",
},
{
  title: "Rocky Mountain Escape",
  description:
    "A luxurious mountain retreat surrounded by hiking trails, fresh air, and stunning Rocky Mountain landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
  },
  price: 7100,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
},
{
  title: "Andes Peak Lodge",
  description:
    "Stay in an elegant mountain lodge offering panoramic views of the Andes with nearby trekking and adventure activities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 6900,
  location: "Cusco",
  country: "Peru",
  category: "Mountains",
},

{
  title: "Royal Castle of Bavaria",
  description:
    "Experience royal living inside a beautifully restored medieval castle surrounded by forests and rolling hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  },
  price: 18500,
  location: "Bavaria",
  country: "Germany",
  category: "Castles",
},
{
  title: "Scottish Highland Castle",
  description:
    "Live like royalty in a magnificent castle featuring historic architecture, luxurious interiors, and scenic Highland views.",
  image: {
    filename: "listingimage",
   image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1200&q=80"
  },
  price: 17200,
  location: "Inverness",
  country: "United Kingdom",
  category: "Castles",
},
{
  title: "Loire Valley Royal Palace",
  description:
    "Stay in a magnificent French castle surrounded by lush gardens, elegant halls, and centuries of royal history.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 16800,
  location: "Loire Valley",
  country: "France",
  category: "Castles",
},
{
  title: "Czech Fairytale Castle",
  description:
    "Experience a magical getaway in this beautifully restored castle featuring antique interiors and breathtaking countryside views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=60",
  },
  price: 15900,
  location: "Prague",
  country: "Czech Republic",
  category: "Castles",
},

{
  title: "Glass Igloo under the Northern Lights",
  description:
    "Sleep beneath the magical Aurora Borealis in a heated glass igloo with panoramic views of the Arctic sky.",
  image: {
    filename: "listingimage",
   image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80"
  },
  price: 14500,
  location: "Lapland",
  country: "Finland",
  category: "Arctic",
},
{
  title: "Snow Lodge in Iceland",
  description:
    "Escape to a cozy snow-covered lodge surrounded by glaciers, frozen waterfalls, and breathtaking winter landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=60",
  },
  price: 11200,
  location: "Reykjavik",
  country: "Iceland",
  category: "Arctic",
},
{
  title: "Polar Bear Expedition Cabin",
  description:
    "A remote Arctic cabin offering unforgettable wildlife experiences, snowy adventures, and peaceful surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
  price: 13800,
  location: "Svalbard",
  country: "Norway",
  category: "Arctic",
},
{
  title: "Frozen Fjord Retreat",
  description:
    "Enjoy a luxurious stay overlooking dramatic frozen fjords with opportunities for skiing, snowmobiling, and stargazing.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=60",
  },
  price: 12600,
  location: "Tromsø",
  country: "Norway",
  category: "Arctic",
},

{
  title: "Lakeside Camping Escape",
  description:
    "Camp beside a crystal-clear lake with scenic hiking trails, kayaking, fishing, and unforgettable campfire evenings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2400,
  location: "Lake Tahoe",
  country: "United States",
  category: "Camping",
},
{
  title: "Forest Tent Adventure",
  description:
    "Reconnect with nature in a fully equipped luxury tent surrounded by towering pine forests and peaceful wildlife.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Yosemite",
  country: "United States",
  category: "Camping",
},
{
  title: "Mountain Camp under the Stars",
  description:
    "Enjoy breathtaking mountain sunsets and star-filled skies from this comfortable campsite with modern facilities.",
  image: {
    filename: "listingimage",
   url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2800,
  location: "Queenstown",
  country: "New Zealand",
  category: "Camping",
},
{
  title: "Desert Glamping Retreat",
  description:
    "Experience luxury camping in spacious safari tents with private decks, desert views, and unforgettable sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Wadi Rum",
  country: "Jordan",
  category: "Camping",
},
{
  title: "Tuscany Vineyard Farmhouse",
  description:
    "Escape to a charming farmhouse surrounded by vineyards and olive groves. Enjoy wine tastings, homemade cuisine, and breathtaking countryside views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 5400,
  location: "Tuscany",
  country: "Italy",
  category: "Farms",
},
{
  title: "Lavender Farm Retreat",
  description:
    "Relax in a peaceful farmhouse surrounded by fragrant lavender fields, rolling hills, and picturesque sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80",
  },
  price: 4600,
  location: "Provence",
  country: "France",
  category: "Farms",
},
{
  title: "Organic Countryside Cottage",
  description:
    "Stay on a working organic farm where you can enjoy fresh produce, friendly animals, and peaceful country living.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Canterbury",
  country: "New Zealand",
  category: "Farms",
},
{
  title: "Sunflower Ranch Escape",
  description:
    "A rustic farmhouse surrounded by sunflower fields with horseback riding, bonfires, and relaxing rural landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Texas",
  country: "United States",
  category: "Farms",
},

{
  title: "Bali Infinity Pool Villa",
  description:
    "Luxury villa featuring a stunning infinity pool overlooking tropical forests. Perfect for couples seeking a relaxing getaway.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 13500,
  location: "Bali",
  country: "Indonesia",
  category: "Amazing Pools",
},
{
  title: "Santorini Cliffside Pool Suite",
  description:
    "Enjoy breathtaking sunsets from your private infinity pool overlooking the sparkling Aegean Sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 15200,
  location: "Santorini",
  country: "Greece",
  category: "Amazing Pools",
},
{
  title: "Luxury Desert Pool Villa",
  description:
    "An elegant villa with a temperature-controlled pool surrounded by golden dunes and luxury outdoor lounges.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 16800,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Amazing Pools",
},
{
  title: "Maldives Overwater Pool Villa",
  description:
    "Experience ultimate luxury in an overwater villa featuring a private pool and direct access to crystal-clear lagoons.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60",
  },
  price: 19800,
  location: "Malé",
  country: "Maldives",
  category: "Amazing Pools",
},

{
  title: "Goa Beach House",
  description:
    "Wake up just steps from the beach in this vibrant coastal home featuring sea views, airy interiors, and tropical surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 6200,
  location: "Goa",
  country: "India",
  category: "Beach",
},
{
  title: "Malibu Oceanfront Villa",
  description:
    "Luxury beachfront villa with floor-to-ceiling windows, private deck, and uninterrupted views of the Pacific Ocean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 14200,
  location: "Malibu",
  country: "United States",
  category: "Beach",
},
{
  title: "Santorini Seaside Villa",
  description:
    "Enjoy breathtaking sunsets over the Aegean Sea from this elegant villa featuring spacious terraces and direct beach access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 12800,
  location: "Santorini",
  country: "Greece",
  category: "Beach",
},
{
  title: "Phuket Tropical Beach Resort",
  description:
    "A luxurious beachfront retreat with palm-lined shores, crystal-clear waters, and world-class hospitality.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
  },
  price: 9600,
  location: "Phuket",
  country: "Thailand",
  category: "Beach",
},

{
  title: "Black Forest Woodland Cabin",
  description:
    "Escape to a cozy wooden cabin tucked deep inside Germany's famous Black Forest, surrounded by hiking trails and wildlife.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 5100,
  location: "Black Forest",
  country: "Germany",
  category: "Forest",
},
{
  title: "Amazon Rainforest Eco Lodge",
  description:
    "Immerse yourself in nature with this eco-friendly lodge offering guided jungle walks and unforgettable wildlife encounters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=60",
  },
  price: 6400,
  location: "Manaus",
  country: "Brazil",
  category: "Forest",
},
{
  title: "Canadian Pine Forest Retreat",
  description:
    "Relax in a modern cabin surrounded by towering pine trees, peaceful lakes, and endless outdoor adventures.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5800,
  location: "British Columbia",
  country: "Canada",
  category: "Forest",
},
{
  title: "Finnish Forest Glass Cabin",
  description:
    "Stay in a unique glass cabin nestled in the forest, offering stunning views of the night sky and surrounding wilderness.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=60",
  },
  price: 8200,
  location: "Rovaniemi",
  country: "Finland",
  category: "Forest",
},

{
  title: "Rome Heritage Apartment",
  description:
    "Stay in a beautifully restored apartment just steps away from the Colosseum and Rome's timeless historic attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60",
  },
  price: 7800,
  location: "Rome",
  country: "Italy",
  category: "Historic",
},
{
  title: "Kyoto Traditional Machiya",
  description:
    "Experience authentic Japanese culture in a restored wooden machiya featuring tatami rooms and peaceful gardens.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60",
  },
  price: 7200,
  location: "Kyoto",
  country: "Japan",
  category: "Historic",
},
{
  title: "Old Prague Heritage Home",
  description:
    "Discover the charm of Prague's Old Town while staying in a beautifully preserved heritage residence with classic European architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=60",
  },
  price: 7600,
  location: "Prague",
  country: "Czech Republic",
  category: "Historic",
},
{
  title: "Colonial Haveli Stay",
  description:
    "Live in a restored haveli showcasing intricate architecture, royal interiors, and the rich cultural heritage of Rajasthan.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
  },
  price: 6800,
  location: "Jaipur",
  country: "India",
  category: "Historic",
},
]
module.exports = { data: sampleListings };