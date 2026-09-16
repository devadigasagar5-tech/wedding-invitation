export interface CoupleDetails {
  bride: {
    name: string;
    fullName: string;
    monogram: string;
    parents: string;
    title: string;
  };
  groom: {
    name: string;
    fullName: string;
    monogram: string;
    parents: string;
    title: string;
  };
}

export interface WeddingEvent {
  id: string;
  name: string;
  dateStr: string;
  dayStr: string;
  timeStr: string;
  venueName: string;
  venueArea: string;
  description: string;
  dressCode?: string;
  isoDate: string; // for calendar and countdown
}

export interface CeremonyScheduleItem {
  time: string;
  event: string;
  note?: string;
  icon?: string;
}

export interface VenueInfo {
  name: string;
  tagline: string;
  fullAddress: string;
  city: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  geoCoordinates: {
    lat: number;
    lng: number;
  };
}

export interface RsvpConfig {
  deadline: string;
  whatsappNumber: string;
  callNumber: string;
  defaultMessage: string;
}

export interface WeddingConfig {
  title: string;
  couple: CoupleDetails;
  weddingDate: {
    display: string;
    time: string;
    targetTimestamp: string;
  };
  auspiciousBlessing: {
    ganeshaMantra: string;
    subMantra: string;
    regionalGreeting: string;
    invitationNote: string;
    deityInvocation: string;
  };
  events: WeddingEvent[];
  ceremonyFlow: CeremonyScheduleItem[];
  venue: VenueInfo;
  rsvp: RsvpConfig;
}
