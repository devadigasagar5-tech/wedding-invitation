import { WeddingConfig } from './types';

export const weddingConfig: WeddingConfig = {
  title: 'Shruti & Rajvardhan Wedding',
  couple: {
    bride: {
      name: 'Shruti',
      fullName: 'Shruti Shettigar',
      monogram: 'S',
      parents: 'Smt. Laxmi & Shri Ramesh Shettigar',
      title: 'Daughter of Smt. Laxmi & Shri Ramesh Shettigar',
    },
    groom: {
      name: 'Rajvardhan',
      fullName: 'Rajvardhan Rao',
      monogram: 'R',
      parents: 'Smt. Pratibha & Shri Chandrashekar Rao',
      title: 'Son of Smt. Pratibha & Shri Chandrashekar Rao',
    },
  },
  weddingDate: {
    display: 'SATURDAY, 14 NOVEMBER 2026',
    time: 'AT 10:30 AM ONWARDS',
    targetTimestamp: '2026-11-14T10:30:00+05:30',
  },
  auspiciousBlessing: {
    ganeshaMantra: '॥ श्री गणेशाय नमः ॥',
    subMantra: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
    regionalGreeting: '॥ शुभ विवाह ॥',
    deityInvocation: 'Lord Sri Mahavishnu, Goddess Mahalakshmi & Lord Ganesha',
    invitationNote:
      'With the eternal blessings of our revered deities, ancestors, and cherished families, we joyfully invite you to grace the sacred wedding union of Shruti & Rajvardhan as they embark upon life’s divine journey together.',
  },
  events: [
    {
      id: 'haldi-mehendi',
      name: 'Haldi & Mehendi Ceremony',
      dayStr: 'Friday',
      dateStr: '13 November 2026',
      timeStr: '04:00 PM Onwards',
      venueName: 'Ananda Vanam Heritage Courtyard',
      venueArea: 'Karad, Maharashtra',
      description:
        'A twilight woven with auspicious turmeric, fragrant henna melodies, and joyful family celebrations.',
      dressCode: 'Traditional Festive / Shades of Turmeric & Amber',
      isoDate: '2026-11-13T16:00:00+05:30',
    },
    {
      id: 'muhurtham',
      name: 'Sacred Muhurtham & Kanyadaan',
      dayStr: 'Saturday',
      dateStr: '14 November 2026',
      timeStr: '10:30 AM Onwards',
      venueName: 'Sri Krishna Kalyana Mantapa',
      venueArea: 'Temple Road, Karad, Maharashtra',
      description:
        'Muhurtham under sacred Vedic chants — the divine moment two souls become one through the seven eternal vows.',
      dressCode: 'South Indian Traditional (Kanjeevaram / Silk Veshti & Kurta)',
      isoDate: '2026-11-14T10:30:00+05:30',
    },
    {
      id: 'reception',
      name: 'Grand Wedding Reception',
      dayStr: 'Saturday',
      dateStr: '14 November 2026',
      timeStr: '07:00 PM Onwards',
      venueName: 'Sri Krishna Kalyana Mantapa Grand Hall',
      venueArea: 'Karad, Maharashtra',
      description:
        'An opulent evening of greetings, celebratory feast, musical blessings, and joyful memories under starlit canopies.',
      dressCode: 'Royal Ethnic / Evening Elegance',
      isoDate: '2026-11-14T19:00:00+05:30',
    },
  ],
  ceremonyFlow: [
    {
      time: '08:30 AM',
      event: 'Agamana & Suprabhatam',
      note: 'Traditional Nadaswaram Welcome & Refreshing South Indian Filter Kaapi',
    },
    {
      time: '09:15 AM',
      event: 'Varapooja & Seemantha Pooja',
      note: 'Welcoming the Groom with ceremonial aarathi & sacred offerings',
    },
    {
      time: '10:30 AM',
      event: 'Subha Muhurtham & Mangalya Dharana',
      note: 'Sacred knot tying & Sapthapadi (The Seven Sacred Vows around the Agni)',
    },
    {
      time: '12:30 PM',
      event: 'Traditional Vazhaillai Sapadu',
      note: 'Grand festive South Indian wedding feast served traditionally on fresh banana leaves',
    },
    {
      time: '07:00 PM',
      event: 'Reception & Ashirvada Ceremony',
      note: 'Felicitations, photography, live melodic music, and royal dinner banquet',
    },
  ],
  venue: {
    name: 'Sri Krishna Kalyana Mantapa',
    tagline: 'Near Sacred Venna-Krishna River Sangam',
    fullAddress: 'Karad - Dhebewadi Road, Near Sangam Ghat, Karad, Satara, Maharashtra 415110',
    city: 'Karad, Maharashtra',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Karad+Maharashtra+wedding+hall&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Kalyana+Mantapa+Karad+Maharashtra',
    geoCoordinates: {
      lat: 17.2894,
      lng: 74.1818,
    },
  },
  rsvp: {
    deadline: '25 October 2026',
    whatsappNumber: '+919876543210',
    callNumber: '+919876543210',
    defaultMessage:
      'Namaste! We are delighted to attend the wedding of Shruti & Rajvardhan on 14th November 2026 in Karad. Hearty congratulations!',
  },
};
