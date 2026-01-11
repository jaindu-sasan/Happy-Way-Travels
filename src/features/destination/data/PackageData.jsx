export const packagesdata = [
  {
    id: 1,
    name: 'Pinnawala Elephant Discovery – Sri Lanka Wildlife Day Tour',
    position: [7.3009, 80.3847],
    description: 'Visit the famous Pinnawala Elephant Orphanage and witness elephant bathing and feeding on a relaxing day trip from Colombo.',
    image: '/assets/package 1/Pinnawala-Elephant-Encounte.jpg',
    
    type: 'Wildlife',
    duration: '1 Day',
    price: 188,
    includes: ['Transport', 'Guide'],
    itinerary: [
      {
        title: "",
        description: "This day tour from Colombo takes you to the world-renowned Pinnawala Elephant Orphanage, home to rescued and orphaned elephants. Watch these gentle giants bathe in the river and interact freely in a natural environment. Ideal for families, wildlife lovers, and first-time visitors, this tour offers an unforgettable Sri Lankan wildlife experience within a single day..",
        image: "/assets/package 1/pak 1.webp",
        locations: [
          { name: "Colombo (Pickup - Galle Face Area)", lat: 6.9271, lng: 79.8612 },
          { name: "Pinnawala Elephant Orphanage", lat: 7.3009, lng: 80.3847 },
          { name: "Kandawala / Return Transfer Point (approx)", lat: 6.9271, lng: 79.8612 }
        ]
      }
    ],
    stops: [
      { name: "Pinnawala Elephant Orphanage", position: [7.3009, 80.3847] }
    ]
  },

  {
    id: 2,
    name: 'Yala Safari Adventure – Sri Lanka Wildlife Jeep Safari',
    position: [6.3619, 81.5209],
    description: 'Enjoy an exciting wildlife safari at Yala National Park, famous for leopards, elephants, and diverse birdlife.',
    image: '/assets/package 2/Yala Safari Adventure Day Trip.webp',
   
    type: 'Wildlife / Adventure',
    duration: '1 Day',
    price: 380,
    includes: ['Transport', 'Guide'],
    itinerary: [
      {
        title: "",
        description: "Experience the thrill of a Sri Lankan wildlife safari with a day tour to Yala National Park from Colombo. Travel in a 4x4 jeep through rugged landscapes while spotting leopards, elephants, crocodiles, and exotic birds. Yala is Sri Lanka’s most popular national park, making this tour perfect for nature lovers and adventure seekers.",
        image: "/assets/package 2/pak2.webp",
        locations: [
          { name: "Tissamaharama (Base Town)", lat: 6.0533, lng: 81.1167 },
          { name: "Yala National Park Entrance (Yala East/National Park area)", lat: 6.3619, lng: 81.5209 },
          { name: "Kirinda / Return Transfer Point (approx)", lat: 6.1333, lng: 81.1390 }
        ]
      }
    ],
    stops: [
      { name: "Yala National Park", position: [6.3619, 81.5209] }
    ]
  },

  {
    id: 3,
    name: 'Sinharaja Rainforest Explorer – UNESCO Nature Day Tour',
    position: [6.4063, 80.4021],
    description: 'Explore the UNESCO-listed Sinharaja Rainforest and discover Sri Lanka’s rich biodiversity on a guided nature tour.',
    image: '/assets/package 3/Sinharaja Rainforest Explorer.webp',
   
    type: 'Nature / UNESCO',
    duration: '1 Day',
    price: 217,
    includes: ['Transport', 'Guide'],
    itinerary: [
      {
        title: "",
        description: "Journey into the heart of Sri Lanka’s last remaining primary rainforest, the Sinharaja Forest Reserve. This UNESCO World Heritage Site is home to rare plant species, endemic birds, and stunning waterfalls. Ideal for eco-tourists and birdwatchers, this guided day tour offers a deep connection with untouched nature..",
        image: "/assets/package 3/pak3.webp",
        locations: [
          { name: "Galle Fort (Pickup)", lat: 6.0269, lng: 80.2170 },
          { name: "Sinharaja Rainforest Reserve (Main Entrance)", lat: 6.4063, lng: 80.4021 },
          { name: "Martin's Lodge / Return Area (near Deniyaya)", lat: 6.4620, lng: 80.4230 }
        ]
      }
    ],
    stops: [
      { name: "Sinharaja Rainforest", position: [6.4063, 80.4021] }
    ]
  },

  {
    id: 4,
    name: 'Sigiriya & Dambulla Heritage Tour – UNESCO Cultural Day Trip',
    position: [7.9570, 80.7603],
    description: 'Climb Sigiriya Lion Rock and visit the sacred Dambulla Cave Temple on a cultural heritage day tour.',
    image: '/assets/package 4/Sigiriya & Dambulla Heritage Tour.webp',
  
    type: 'Cultural / UNESCO',
    duration: '1 Day',
    price: 252,
    includes: ['Transport', 'Guide'],
    itinerary: [
      {
        title: "",
        description: "Discover Sri Lanka’s ancient heritage with a day tour to Sigiriya Lion Rock Fortress and the Dambulla Golden Cave Temple. Climb to the summit of Sigiriya for breathtaking panoramic views, then explore beautifully preserved cave temples filled with Buddhist murals and statues. This tour combines history, culture, and adventure in one unforgettable journey.",
        image: '/assets/package 4/pak4.webp',
        locations: [
          { name: "Dambulla Golden Temple (Rangiri Dambulla)", lat: 7.8567, lng: 80.6490 },
          { name: "Sigiriya Rock Fortress", lat: 7.9570, lng: 80.7603 },
          { name: "Habarana / Return Transfer Area (approx)", lat: 8.0000, lng: 80.7000 }
        ]
      }
    ],
    stops: [
      { name: "Dambulla Golden Temple", position: [7.8567, 80.6490] },
      { name: "Sigiriya Lion Rock", position: [7.9570, 80.7603] }
    ]
  },

  {
    id: 5,
    name: 'Madu River Safari & Galle Heritage Tour – Southern Coast Day Trip',
    position: [6.2307, 80.0676],
    description: 'Enjoy a scenic southern coast tour featuring a Madu River safari, turtle hatchery, and historic Galle Fort.',
    image: '/assets/package 5/pak5.jpg',
  
    type: 'Cultural / Coastal',
    duration: '1 Day',
    price: 250,
    includes: ['Transport','Guide'],
    itinerary: [
      {
        title: "",
        description: "Travel along Sri Lanka’s stunning southern coastline on this full-day tour from Colombo. Experience a peaceful boat safari through the mangroves of the Madu River, visit a turtle hatchery, and explore the historic Galle Fort, a UNESCO World Heritage Site. Perfect for coastal sightseeing, culture, and relaxation.",
        image: '/assets/package 5/madugaga.jpg',
        locations: [
          { name: "Madu River Boat Launch (Balapitiya)", lat: 6.2830, lng: 80.0667 },
          { name: "Turtle Hatchery (Kosgoda area)", lat: 6.3480, lng: 80.1070 },
          { name: "Galle Fort (UNESCO World Heritage Site)", lat: 6.0269, lng: 80.2170 }
        ]
      }
    ],
    stops: [
      { name: "Madu River Safari", position: [6.2830, 80.0667] },
      { name: "Galle Fort", position: [6.0269, 80.2170] }
    ]
  },

  {
    id: 6,
    name: 'Kandy Cultural & Tea Factory Day Tour - Sri Lanka Heritage Experience',
    position: [7.2906, 80.6337],
    description: 'Visit Sri Lanka’s cultural capital Kandy, including the Temple of the Tooth Relic and Peradeniya Botanical Garden.',
    image: '/assets/package 6/Kandy Cultural & Tea Factory Day Tour.webp',
   
    type: 'Cultural / Nature',
    duration: '1 Day',
    price: 215,
    includes: ['Transport', 'Guide'],
    itinerary: [
      {
        title: "",
        description: "This day tour from Colombo takes you to the historic city of Kandy, home to the sacred Temple of the Tooth Relic. Enjoy a walk through the beautiful Peradeniya Botanical Garden and learn about Sri Lanka’s world-famous tea at a local tea factory. A perfect tour for culture, history, and nature lovers.",
        image: '/assets/package 6/pak6.webp',
        locations: [
          { name: "Temple of the Tooth (Sri Dalada Maligawa)", lat: 7.2936, lng: 80.6414 },
          { name: "Royal Botanical Garden, Peradeniya", lat: 7.2673, lng: 80.5970 },
          { name: "Tea Factory / Tea Plantation Visit (near Kandy)", lat: 7.2900, lng: 80.6100 }
        ]
      }
    ],
    stops: [
      { name: "Kandy Temple of the Tooth", position: [7.2906, 80.6337] },
      { name: "Peradeniya Botanical Garden", position: [7.2673, 80.5970] }
    ]
  },

  {
    id: 7,
    name: 'Sri Lanka Golden Triangle Tour - 6 Days Cultural Heritage Journey',
    position: [7.2906, 80.6337],
    description: 'Explore Sri Lanka’s Golden Triangle in 6 days. Visit Sigiriya, Dambulla, Polonnaruwa & Kandy with guided cultural city tours.',
    image: '/assets/package 7/day 3.webp',
   
    type: 'Cultural / Heritage / Scenic',
    duration: '6 Days / 5 Nights',
    price: 95000,
    airport: { name: "Bandaranaike Intl Airport", lat: 7.1800, lng: 79.8840 },
    includes: [
     
      'Transport',
      'Guide',
      'City Tours'
    ],
    itinerary: [
      {
        title: "Day 1 – Arrival in Sri Lanka & Transfer to Negombo",
        description: "Arrive in Sri Lanka and transfer to Negombo. Relax and recover from your journey with an overnight stay near the beach.",
        image: "/assets/package 7/day 1.webp",
        locations: [
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 },
          { name: "Negombo Lagoon / Beach", lat: 7.2000, lng: 79.8333 }
        ]
      },
      {
        title: "Day 2 – Pinnawala Elephants & Golden Temple at Dambulla",
        description: "Visit Pinnawala Elephant Orphanage to see elephants up close, followed by a visit to the Dambulla Golden Cave Temple. Overnight stay in Sigiriya or Habarana.",
        image: "/assets/package 7/day 2.webp",
        locations: [
          { name: "Negombo (Departure)", lat: 7.2000, lng: 79.8333 },
          { name: "Pinnawala Elephant Orphanage", lat: 7.3009, lng: 80.3847 },
          { name: "Dambulla Golden Temple", lat: 7.8567, lng: 80.6490 }
        ]
      },
      {
        title: "Day 3 – Sigiriya Lion Rock & Polonnaruwa Ancient City",
        description: "Climb the Sigiriya Lion Rock Fortress and explore the ancient city of Polonnaruwa, Sri Lanka’s second ancient capital.",
        image: "/assets/package 7/day 3.webp",
        locations: [
          { name: "Sigiriya Rock Fortress", lat: 7.9570, lng: 80.7603 },
          { name: "Polonnaruwa Ancient City", lat: 8.0089, lng: 81.0000 }
        ]
      },
      {
        title: "Day 4 – Kandy Highlights & Cultural Dance Show",
        description: "Travel to Kandy and visit the sacred Temple of the Tooth Relic. Enjoy a traditional cultural dance show in the evening.",
        image: "/assets/package 7/day 4.webp",
        locations: [
          { name: "Sigiriya (start)", lat: 7.9570, lng: 80.7603 },
          { name: "Kandy Temple of the Tooth", lat: 7.2936, lng: 80.6414 },
          { name: "Kandy Cultural Dance Show (venue)", lat: 7.2910, lng: 80.6360 }
        ]
      },
      {
        title: "Day 5 – Peradeniya Gardens, Tea Factory & Colombo City Tour",
        description: "Visit Peradeniya Botanical Garden, explore a tea factory, and enjoy a Colombo city tour before returning to Negombo.",
        image: "/assets/package 7/day 5.webp",
        locations: [
          { name: "Peradeniya Botanical Garden", lat: 7.2673, lng: 80.5970 },
          { name: "Local Tea Factory (Kandy area)", lat: 7.2900, lng: 80.6100 },
          { name: "Colombo City (arrival)", lat: 6.9271, lng: 79.8612 }
        ]
      },
      {
        title: "Day 6 – Departure from Sri Lanka",
        description: "City tour followed by airport transfer for departure.",
        image: "/assets/package 7/day 6.webp",
        locations: [
          { name: "Colombo City Tour (Galle Face / Gangaramaya)", lat: 6.9271, lng: 79.8612 },
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 }
        ]
      }
    ],
    stops: [
      { name: "Bandaranaike Intl Airport", position: [7.1800, 79.8840] },
      { name: "Negombo", position: [7.2000, 79.8333] },
      { name: "Pinnawala Elephant Orphanage", position: [7.3009, 80.3847] },
      { name: "Dambulla Golden Temple", position: [7.8567, 80.6490] },
      { name: "Sigiriya Lion Rock", position: [7.9570, 80.7603] },
      { name: "Polonnaruwa Ancient City", position: [8.0089, 81.0000] },
      { name: "Kandy Temple of the Tooth", position: [7.2906, 80.6337] },
      { name: "Peradeniya Botanical Garden", position: [7.2673, 80.5970] },
      { name: "Colombo City", position: [6.9271, 79.8612] }
    ]
  },

  {
    id: 8,
    name: '7-Day Sri Lanka Nature & Wildlife Tour',
    position: [6.8651, 81.0460],
    description: 'Discover Sri Lanka in 7 days with hill country views, Ella hikes, wildlife safari, Mirissa beaches and historic Galle Fort.',
    image: '/assets/package 8/scenic-ceylon.webp',
   
    type: 'Nature / Wildlife / Cultural',
    duration: '7 Days / 6 Nights',
    price: 145000,
    airport: { name: "Bandaranaike Intl Airport", lat: 7.1800, lng: 79.8840 },
    includes: [
     
      'Transport',
      'Guide',
      
      'City Tours',
      
    ],
    itinerary: [
      {
        title: "Day 1 – Arrival & Transfer to Negombo",
        description: "Check in to Negombo and relax after your journey.",
        image: "/assets/package 8/day 1.webp",
        locations: [
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 },
          { name: "Negombo Beach / Lagoon", lat: 7.2000, lng: 79.8333 }
        ]
      },
      {
        title: "Day 2 – Pinnawala Elephants & Sacred Temple of the Tooth (Kandy)",
        description: "Visit Pinnawala Elephant Orphanage, explore the Temple of the Tooth Relic, and enjoy a cultural dance show.",
        image: "/assets/package 8/day 2.webp",
        locations: [
          { name: "Pinnawala Elephant Orphanage", lat: 7.3009, lng: 80.3847 },
          { name: "Kandy Temple of the Tooth", lat: 7.2936, lng: 80.6414 }
        ]
      },
      {
        title: "Day 3 – Hill Country: Botanical Gardens, Tea Plantations & Nuwara Eliya",
        description: "A dramatic journey through hill country, waterfalls, tea plantations, and scenic viewpoints.",
        image: "/assets/package 8/day 3.webp",
        locations: [
          { name: "Peradeniya Botanical Garden", lat: 7.2673, lng: 80.5970 },
          { name: "Nuwara Eliya Tea Estates / Factory", lat: 6.9497, lng: 80.7895 },
          { name: "Ella (Little Adam's Peak / viewpoint)", lat: 6.8455, lng: 81.0467 }
        ]
      },
      {
        title: "Day 4 – Ella Adventures: Little Adam’s Peak, Nine Arches & Udawalawe Safari",
        description: "Hike Little Adam’s Peak, visit Nine Arch, then enjoy a safari and travel to Mirissa.",
        image: "/assets/package 8/day 4.webp",
        locations: [
          { name: "Ella - Little Adam's Peak", lat: 6.8455, lng: 81.0467 },
          { name: "Nine Arch Bridge (Demodara)", lat: 6.8754, lng: 81.0390 },
          { name: "Udawalawe National Park (Safari)", lat: 6.4200, lng: 81.5100 }
        ]
      },
      {
        title: "Day 5 – Relax on the Golden Beaches of Mirissa",
        description: "Relax on the pristine beaches of Mirissa — optional whale watching (seasonal).",
        image: "/assets/package 8/day 5.webp",
        locations: [
          { name: "Mirissa Beach (whale watching pier)", lat: 5.9487, lng: 80.4547 }
        ]
      },
      {
        title: "Day 6 – Galle Fort, Madu River Safari & Turtle Conservation",
        description: "Explore Galle Fort, enjoy a river safari, visit turtle conservation centers, and return to Negombo.",
        image: "/assets/package 8/day 6.jpg",
        locations: [
          { name: "Galle Fort", lat: 6.0269, lng: 80.2170 },
          { name: "Madu River Safari (Balapitiya)", lat: 6.2830, lng: 80.0667 },
          { name: "Colombo City (Galle Face / Gangaramaya)", lat: 6.9271, lng: 79.8612 },
          { name: "Negombo (return)", lat: 7.2000, lng: 79.8333 }
        ]
      },
      {
        title: "Day 7 – Colombo Tour & Airport Transfer",
        description: "City exploration and transfer to the airport.",
        image: "/assets/package 8/day 7.webp",
        locations: [
          { name: "Negombo / Airport transfer", lat: 7.1800, lng: 79.8840 }
        ]
      }
    ],
    stops: [
      { name: "Bandaranaike Intl Airport", position: [7.1800, 79.8840] },
      { name: "Negombo", position: [7.2000, 79.8333] },
      { name: "Pinnawala Elephant Orphanage", position: [7.3009, 80.3847] },
      { name: "Kandy Temple of the Tooth", position: [7.2906, 80.6337] },
      { name: "Peradeniya Botanical Garden", position: [7.2673, 80.5970] },
      { name: "Nuwara Eliya Tea Factory", position: [6.9497, 80.7895] },
      { name: "Ella - Little Adam's Peak", position: [6.8455, 81.0467] },
      { name: "Nine Arch Bridge", position: [6.8754, 81.0390] },
      { name: "Udawalawe National Park", position: [6.4200, 81.5100] },
      { name: "Mirissa Beach", position: [5.9487, 80.4547] },
      { name: "Galle Fort", position: [6.0269, 80.2170] }
    ]
  },

  {
    id: 9,
    name: 'Grand Ceylon Heritage & Adventure Expedition – 9 Days',
    position: [7.9570, 80.7603],
    description: 'Experience Sri Lanka in 9 days. Explore UNESCO sites, tea country, Ella, Yala safari, southern beaches and cultural cities.',
    image: '/assets/package 9/grand-ceylon.webp',
    
    type: 'Heritage / Adventure / Wildlife / Cultural',
    duration: '9 Days / 8 Nights',
    price: 185000,
    airport: { name: "Bandaranaike Intl Airport", lat: 7.1800, lng: 79.8840 },
    includes: [
      
      'Transport',
      'Guide',
      
      'City Tours',
   
    ],
    itinerary: [
      {
        title: "Day 1 – Arrival & Overnight Stay in Negombo",
        description: "Relax after arrival and explore the coastal town of Negombo.",
        image: "/assets/package 9/day 1.webp",
        locations: [
          { name: "Negombo Beach / Lagoon", lat: 7.2000, lng: 79.8333 }
        ]
      },
      {
        title: "Day 2 – Pinnawala Elephants & Dambulla Golden Temple",
        description: "Visit the Pinnawala Elephant Orphanage and Dambulla Golden Temple.",
        image: "/assets/package 9/day 2.webp",
        locations: [
          { name: "Pinnawala Elephant Orphanage", lat: 7.3009, lng: 80.3847 },
          { name: "Dambulla Golden Temple", lat: 7.8567, lng: 80.6490 }
        ]
      },
      {
        title: "Day 3 – Sigiriya Lion Rock & Polonnaruwa Heritage City",
        description: "Climb the iconic Sigiriya Rock Fortress and visit Polonnaruwa ancient city.",
        image: "/assets/package 9/day 3.webp",
        locations: [
          { name: "Sigiriya Rock Fortress", lat: 7.9570, lng: 80.7603 },
          { name: "Polonnaruwa Ancient City", lat: 8.0089, lng: 81.0000 }
        ]
      },
      {
        title: "Day 4 – Kandy Highlights & Cultural Dance Show",
        description: "Visit Kandy Temple of the Tooth and witness a cultural show.",
        image: "/assets/package 9/day 4.webp",
        locations: [
          { name: "Kandy Temple of the Tooth", lat: 7.2936, lng: 80.6414 },
          { name: "Kandy Lake / City Center", lat: 7.2905, lng: 80.6410 }
        ]
      },
      {
        title: "Day 5 – Hill Country: Peradeniya, Tea Plantations & Nuwara Eliya to Ella",
        description: "Enjoy stunning hill country, tea estates, waterfalls, and scenic stops.",
        image: "/assets/package 9/day 5.webp",
        locations: [
          { name: "Peradeniya Botanical Garden", lat: 7.2673, lng: 80.5970 },
          { name: "Nuwara Eliya Tea Estates / Factory", lat: 6.9497, lng: 80.7895 },
          { name: "Ella - Little Adam's Peak", lat: 6.8455, lng: 81.0467 }
        ]
      },
      {
        title: "Day 6 – Ella Scenic Wonders & Transfer to Tissamaharama",
        description: "Visit Little Adam’s Peak, Nine Arch Bridge, and travel toward Yala region.",
        image: "/assets/package 9/day 6.webp",
        locations: [
          { name: "Ella - Little Adam's Peak", lat: 6.8455, lng: 81.0467 },
          { name: "Nine Arch Bridge (Demodara)", lat: 6.8754, lng: 81.0390 },
          { name: "Tissamaharama (transfer)", lat: 6.0533, lng: 81.1167 }
        ]
      },
      {
        title: "Day 7 – Yala National Park Safari & Galle Fort Exploration",
        description: "Early morning safari in Yala then travel to southern beaches and Galle.",
        image: "/assets/package 9/day 7.webp",
        locations: [
          { name: "Yala National Park", lat: 6.3619, lng: 81.5209 },
          { name: "Galle Fort", lat: 6.0269, lng: 80.2170 },
          { name: "Unawatuna / Hikkaduwa (coastal area)", lat: 6.0320, lng: 80.1260 }
        ]
      },
      {
        title: "Day 8 – Madu River Safari, Turtle Conservation & Colombo Stay",
        description: "Boat safari, turtle hatchery visit, and Colombo city tour.",
        image: "/assets/package 9/day 8.webp",
        locations: [
          { name: "Madu River Safari (Balapitiya)", lat: 6.2830, lng: 80.0667 },
          { name: "Turtle Hatchery (Kosgoda area)", lat: 6.3480, lng: 80.1070 },
          { name: "Colombo City (Galle Face)", lat: 6.9271, lng: 79.8612 }
        ]
      },
      {
        title: "Day 9 – Colombo City Tour & Departure",
        description: "Final city exploration and airport transfer.",
        image: "/assets/package 9/day 9.webp",
        locations: [
          { name: "Colombo City / Final Tour", lat: 6.9271, lng: 79.8612 },
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 }
        ]
      }
    ],
    stops: [
      { name: "Bandaranaike Intl Airport", position: [7.1800, 79.8840] },
      { name: "Negombo", position: [7.2000, 79.8333] },
      { name: "Pinnawala Elephant Orphanage", position: [7.3009, 80.3847] },
      { name: "Dambulla Golden Temple", position: [7.8567, 80.6490] },
      { name: "Sigiriya Lion Rock", position: [7.9570, 80.7603] },
      { name: "Polonnaruwa Ancient City", position: [8.0089, 81.0000] },
      { name: "Kandy Temple of the Tooth", position: [7.2906, 80.6337] },
      { name: "Peradeniya Botanical Garden", position: [7.2673, 80.5970] },
      { name: "Nuwara Eliya Tea Factory", position: [6.9497, 80.7895] },
      { name: "Ella - Little Adam's Peak", position: [6.8455, 81.0467] },
      { name: "Nine Arch Bridge", position: [6.8754, 81.0390] },
      { name: "Tissamaharama", position: [6.0533, 81.1167] },
      { name: "Yala National Park", position: [6.3619, 81.5209] },
      { name: "Galle Fort", position: [6.0269, 80.2170] },
      { name: "Madu River Safari", position: [6.2830, 80.0667] },
      { name: "Colombo City", position: [6.9271, 79.8612] }
    ]
  },

  {
    id: 10,
    name: '5-Day Sri Lanka Cultural Tour – Kandy, Tea Plantations & Colombo',
    position: [7.2906, 80.6337],
    description: 'Enjoy a 5-day Sri Lanka cultural tour with Kandy, Pinnawala elephants, tea plantations, botanical gardens and Colombo city tour.',
    image: '/assets/package 10/serene-sri-lanka.webp',
 
    type: 'Cultural / Heritage / Scenic',
    duration: '5 Days / 4 Nights',
    price: 85000,
    airport: { name: "Bandaranaike Intl Airport", lat: 7.1800, lng: 79.8840 },
    includes: [
   
      'Transport',
      'Guide',
      
      'City Tours'
    ],
    itinerary: [
      {
        title: "Day 1 – Arrival & Relaxing Stay in Negombo",
        description: "Transfer to Negombo and relax after the flight.",
        image: "/assets/package 10/day1.webp",
        locations: [
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 },
          { name: "Negombo Beach / Lagoon", lat: 7.2000, lng: 79.8333 }
        ]
      },
      {
        title: "Day 2 – Pinnawala Elephants & Sacred Temple of the Tooth (Kandy)",
        description: "Visit Pinnawala and explore Kandy including Temple of the Tooth.",
        image: "/assets/package 10/day2.webp",
        locations: [
          { name: "Pinnawala Elephant Orphanage", lat: 7.3009, lng: 80.3847 },
          { name: "Kandy Temple of the Tooth", lat: 7.2936, lng: 80.6414 }
        ]
      },
      {
        title: "Day 3 – Peradeniya Gardens, Kandy City Tour & Cultural Show",
        description: "Explore botanical gardens, local shopping, and enjoy a cultural dance show.",
        image: "/assets/package 10/day3.webp",
        locations: [
          { name: "Peradeniya Botanical Garden", lat: 7.2673, lng: 80.5970 },
          { name: "Kandy Cultural Show / Venue", lat: 7.2910, lng: 80.6360 }
        ]
      },
      {
        title: "Day 4 – Tea Factory Visit & Colombo City Exploration",
        description: "Visit a tea factory and experience a guided city tour of Colombo.",
        image: "/assets/package 10/day4.webp",
        locations: [
          { name: "Nuwara Eliya / Tea Factory Visit (approx)", lat: 6.9497, lng: 80.7895 },
          { name: "Colombo City (Galle Face / Gangaramaya)", lat: 6.9271, lng: 79.8612 }
        ]
      },
      {
        title: "Day 5 – Transfer to Airport for Departure",
        description: "Transfer to the airport for departure.",
        image: "/assets/package 10/day5.webp",
        locations: [
          { name: "Colombo City / Final Transfer", lat: 6.9271, lng: 79.8612 },
          { name: "Bandaranaike Intl Airport (transfer)", lat: 7.1800, lng: 79.8840 }
        ]
      }
    ],
    stops: [
      { name: "Bandaranaike Intl Airport", position: [7.1800, 79.8840] },
      { name: "Negombo", position: [7.2000, 79.8333] },
      { name: "Pinnawala Elephant Orphanage", position: [7.3009, 80.3847] },
      { name: "Kandy Temple of the Tooth", position: [7.2906, 80.6337] },
      { name: "Peradeniya Botanical Garden", position: [7.2673, 80.5970] },
      { name: "Colombo City", position: [6.9271, 79.8612] }
    ]
  }
];
