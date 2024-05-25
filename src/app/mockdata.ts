/* eslint-disable @typescript-eslint/naming-convention,max-len */
export interface UserMockData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}
export const usersData: UserMockData[] = [
  {
    id: '1',
    firstName: 'Mohammed',
    lastName: 'Ahmed',
    email: 'mohammed@kafd.sa',
    phone: '966500000001',
    role: 'Visitor',
  },
  {
    id: '2',
    firstName: 'Fatima',
    lastName: 'Ali',
    email: 'fatima@kafd.sa',
    phone: '966500000002',
    role: 'Visitor',
  },
  {
    id: '3',
    firstName: 'Abdul Rahman',
    lastName: 'Abdullah',
    email: 'abdulrahman@kafd.sa',
    phone: '966500000003',
    role: 'Visitor',
  },
  {
    id: '4',
    firstName: 'Noura',
    lastName: 'Mohammed',
    email: 'noura@kafd.sa',
    phone: '966500000004',
    role: 'Tenant',
  },
  {
    id: '5',
    firstName: 'Ahmed',
    lastName: 'Saeed',
    email: 'ahmed@kafd.sa',
    phone: '966500000005',
    role: 'Tenant',
  },
  {
    id: '6',
    firstName: 'Lama',
    lastName: 'Khalid',
    email: 'lama@kafd.sa',
    phone: '966500000006',
    role: 'Tenant',
  },
  {
    id: '7',
    firstName: 'Yasser',
    lastName: 'Ibrahim',
    email: 'yasser@kafd.sa',
    phone: '966500000007',
    role: 'Tenant',
  },
  {
    id: '8',
    firstName: 'Mona',
    lastName: 'Abdulaziz',
    email: 'mona@kafd.sa',
    phone: '966500000008',
    role: 'Tenant',
  },
  {
    id: '9',
    firstName: 'Abdulaziz',
    lastName: 'Fahad',
    email: 'abdulaziz@kafd.sa',
    phone: '966500000009',
    role: 'Tenant',
  },
  {
    id: '10',
    firstName: 'Aisha',
    lastName: 'Sultan',
    email: 'aisha@kafd.sa',
    phone: '966500000010',
    role: 'Tenant',
  },
];

export interface NotificationMockData {
  title: string;
  conditions: string;
  message: string;
}

export const notificationsData: NotificationMockData[] = [
  {
    title: 'New Service Opening',
    conditions: 'Tenants',
    message: 'A new fitness center is now open! Enjoy exclusive discounts.',
  },
  {
    title: 'Shuttle Bus Options',
    conditions: 'Visitors',
    message: 'Explore our shuttle bus options for convenient transportation.',
  },
  {
    title: 'Maintenance Alert',
    conditions: 'Tenants',
    message: 'Scheduled maintenance activity on May 25th, 09:00 - 12:00.',
  },
  {
    title: 'Community Event',
    conditions: 'Visitors, Tenants',
    message: 'Join us for a movie night at the community center on May 25th.',
  },
];

interface OfferMockData {
  transportMode: string[];
  location: string;
  radius: string;
  offerActive: string;
  offerDetails: string;
}

export const offersData: OfferMockData[] = [
  {
    transportMode: ['car', 'walk'],
    location: 'monopoly',
    radius: '500-800 meters',
    offerActive: 'anytime',
    offerDetails: '10% discount',
  },
  {
    transportMode: ['walk', 'shuttleBus'],
    location: 'goodFood',
    radius: '100-300 meters',
    offerActive: 'weekends, 10:00 - 14:00',
    offerDetails: 'free dessert with meal',
  },
  {
    transportMode: ['taxi'],
    location: 'kuuru',
    radius: '800-1000 meters',
    offerActive: 'anytime',
    offerDetails: '20% off on total bill',
  },
  {
    transportMode: ['shuttleBus'],
    location: 'chalmont',
    radius: '400-600 meters',
    offerActive: 'weekdays, 08:00 - 18:00',
    offerDetails: 'buy one, get one free',
  },
  {
    transportMode: ['cycling', 'walk'],
    location: 'starbucks',
    radius: '200-400 meters',
    offerActive: 'anytime',
    offerDetails: '15% discount on snacks',
  },
  {
    transportMode: ['car'],
    location: 'blackTap',
    radius: '700-1,000 meters',
    offerActive: 'anytime',
    offerDetails: 'free drink with main course',
  },
  {
    transportMode: ['walk'],
    location: 'mrChow',
    radius: '300-500 meters',
    offerActive: 'weekdays, 12:00 - 16:00',
    offerDetails: '25% off on coffee',
  },
  {
    transportMode: ['shuttleBus'],
    location: 'mall',
    radius: '600-800 meters',
    offerActive: 'weekends, 11:00 - 15:00',
    offerDetails: '10% discount on all items',
  },
  {
    transportMode: ['taxi'],
    location: 'benoit',
    radius: '900-1,200 meters',
    offerActive: 'weekdays, 09:00 - 17:00',
    offerDetails: 'free appetizer with entree',
  },
  {
    transportMode: ['car'],
    location: 'dnkin',
    radius: '800-1,000 meters',
    offerActive: 'anytime',
    offerDetails: '2 for 1 pizza deal',
  },
];

interface EventsMockData {
  title: string;
  date_range: string;
  description: string;
  image_url: string;
}

export const EventsData: EventsMockData[] = [
  {
    title: 'KAFD’s Ramadan Nights Event',
    date_range: 'MAR 14/03/2024 - APR 11/04/2024',
    description:
      "Your Ramadan At KAFD Visit us to enjoy unprecedented moments with variety of offerings for people of all ages. Starting with a traditional Futoor canon and a Musahharati informing people about time. Ramadan activities also include a dining area with live Qanoon music. A bazaar, kid's zone ,and a relaxing lounge. Join us to savor delicious food, a great ambiance and build lasting memories during the holy month, whether you're with family, friends or colleagues. Share cherished moments and experience the spirit of the season like never before!",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/social-media-600-x-400.jpg?cx=0.48&cy=0.5&cw=920&ch=680&hash=199DA0A2A091E3DE5D04589A92CD7854',
  },
  {
    title: '6th Dialogue on the Investment Outlook for 2024',
    date_range: 'JAN 31/01/2024',
    description:
      'As we step into 2024, businesses and investors face pressing challenges and an uncertain investment climate. Higher interest rates, persistent inflation, and geopolitical uncertainty are creating challenges that business leaders will need to navigate over the coming year.',
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/6th-dialogue.jpg?cx=0.48&cy=0.63&cw=920&ch=680&hash=BCB92DE140DFDB9076A54E2723F7CFFB',
  },
  {
    title: 'Fouad Abdulwahed Night',
    date_range: 'DEC 31/12/2023 - JAN 01/01/2024',
    description:
      "A special performance by Fouad Abdulwahed along with a brilliant cuisine by Chef Akmal Anuar, and Artist Lulwah Al Homoud's creativity! All of this in one magical night at KAFD!",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/fouad-en.jpg?cx=0&cy=0&cw=920&ch=680&hash=F332ECCF96CA3B0BB577D9B1C2C69D4B',
  },
  {
    title: 'Ayed Night',
    date_range: 'DEC 22/12/2023 - DEC 23/12/2023',
    description: "Singer Ayed's incredible performance captivated everyone at KAFD! Watch the highlights from our Night Under The Stars.",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/ayed-night.jpg?cx=0&cy=0&cw=920&ch=680&hash=B1914762187C950348043E1CD9721E80',
  },
  {
    title: 'KAFD Culinary Experience',
    date_range: 'DEC 12/12/2023',
    description:
      "In the heart of the bustling city, where creativity knows no bounds and gastronomic wonders await. This extraordinary dining experience brings a visionary team of Michelin-star chefs and pioneering local artists to cater for food enthusiasts who seek an experience bridges the gap between two world's culinary excellence and visual artistry.",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/culinary.jpg?cx=0&cy=0&cw=920&ch=680&hash=69D32AEF76AA714F455BA7B377E18D73',
  },
  {
    title: 'KAFD Community Wellness',
    date_range: 'DEC 11/12/2023 - DEC 31/12/2023',
    description:
      "Introducing KAFD's inaugural sustainable and eco-friendly wellness club, we are all about spreading good vibes and making a positive impact on our community.Together, we'll be nurturing your emotional well-being through exciting classes that'll uplift your spirits. And don't worry, we won't forget about those muscles! Get ready to sweat it out in our different fitness classes that will leave you feeling fully energized!So what are you waiting for? Join us as we nurture the emotional and physical well-being of KAFD's community.",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/wellness-class-en.jpg?cx=0.46&cy=0.66&cw=920&ch=680&hash=230D4802F9276697ADFA011A3D7A50CE',
  },
  {
    title: 'Shaping A sustainable Built Environment',
    date_range: 'DEC 08/12/2023 - DEC 09/12/2023',
    description:
      'Celebrating a Decade of Excellence: Celebrate the 10th anniversary of the AIA Middle East Year-End Conference, a milestone event that has shaped the architectural industry in the Middle East.',
    image_url: 'https://www.kafd.sa/-/media/project/kafd/events/events-list/aia-en.jpg?cx=0&cy=0&cw=920&ch=680&hash=DF83E01A3076058DB732408F1A306ACD',
  },
  {
    title: 'KAFD Events Calendar',
    date_range: 'DEC 05/12/2023 - MAR 30/03/2024',
    description:
      'Step into a world of endless excitement at KAFD and elevate your experience, where full packed calendar of incredible events awaits you!From energizing health and wellness activities to captivating musical nights, side-splitting comedy club performances, heart-pumping kart races, mouthwatering food festivals, and enriching art and cultural experiences, we have something for everyone. Get ready to make unforgettable memories and embark on a journey of pure enjoyment!',
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/kafd-events-brochure.jpg?cx=0&cy=0&cw=920&ch=680&hash=346A1D6ABFD3DDFF3124B95674927E35',
  },
  {
    title: 'Noor Riyadh Festival',
    date_range: 'NOV 30/11/2023 - DEC 16/12/2023',
    description:
      'Noor Riyadh, the Largest Light Art Festival in the World, has returned for its third edition, which runs until December 16, 2023. Its accompanying exhibition runs through to March 2, 2024. This citywide spectacle will bathe Riyadh in a glow of large-scale light art, captivating building projections, performances, and beyond. Witness artistry unfold in five hubs across the city.',
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/noor-riyadh-en.jpg?cx=0&cy=0&cw=920&ch=680&hash=9B977392DCCAF6C96D4595AF05D20759',
  },
  {
    title: 'Noor Riyadh Festival',
    date_range: 'NOV 30/11/2023 - DEC 16/12/2023',
    description:
      'Noor Riyadh, the Largest Light Art Festival in the World, has returned for its third edition, which runs until December 16, 2023. Its accompanying exhibition runs through to March 2, 2024. This citywide spectacle will bathe Riyadh in a glow of large-scale light art, captivating building projections, performances, and beyond. Witness artistry unfold in five hubs across the city.',
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/noor-riyadh-en.jpg?cx=0&cy=0&cw=920&ch=680&hash=9B977392DCCAF6C96D4595AF05D20759',
  },
  {
    title: 'KAFD Food Festival',
    date_range: 'NOV 16/11/2023 - NOV 30/11/2023',
    description:
      "Prep your stomach because the KAFD Food Festival powered by Time Out Riyadh is coming. If you're like us and you're always after new spots to dine in the city, this is the event for you. You'll be able to enjoy favorite dishes from popular local and international restaurants in the city's trendiest area. Eat your way across different dishes, cuisines and venues in one scenic location against the backdrop of KAFD's iconic skyline.",
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/kafd-food-festival.jpg?cx=0&cy=0&cw=920&ch=680&hash=4BDF9A4909F4D5785BD5725B268D2CB2',
  },
  {
    title: 'Heal by Atrum',
    date_range: 'OCT 31/10/2023 - NOV 11/11/2023',
    description:
      'Heal is an art exhibition curated and developed by Atrum. Dedicated to exploring social issues through the power of interactive art. Post the pandemic mental health awareness has been on the rise. Atrum aims to shed light on the importance of mental health through art.',
    image_url:
      'https://www.kafd.sa/-/media/project/kafd/events/events-list/atrium-art-web-copy.jpg?cx=0&cy=0&cw=920&ch=680&hash=6035B252C68CEB3B07FA5DE6A6A4FCF2',
  },
];
