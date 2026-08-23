export const hyderabadZones = [
  {
    zoneName: "IT Corridor & West Hyderabad",
    tagline: "High-Rise Balconies & Invisible Grills Hub",
    description: "Rapid 30-minute doorstep dispatch for premium high-rise gated communities and tech parks.",
    locations: [
      { name: "Gachibowli", popular: true, pin: "500032", avgArrival: "20 mins" },
      { name: "HITEC City", popular: true, pin: "500081", avgArrival: "20 mins" },
      { name: "Madhapur", popular: true, pin: "500081", avgArrival: "25 mins" },
      { name: "Kondapur", popular: true, pin: "500084", avgArrival: "25 mins" },
      { name: "Financial District", popular: true, pin: "500075", avgArrival: "25 mins" },
      { name: "Nanakramguda", popular: true, pin: "500032", avgArrival: "30 mins" },
      { name: "Kokapet", popular: true, pin: "500075", avgArrival: "30 mins" },
      { name: "Manikonda", popular: false, pin: "500089", avgArrival: "30 mins" },
      { name: "Tellapur", popular: false, pin: "502032", avgArrival: "35 mins" },
      { name: "Jubilee Hills", popular: true, pin: "500033", avgArrival: "30 mins" },
      { name: "Banjara Hills", popular: true, pin: "500034", avgArrival: "30 mins" },
      { name: "Miyapur", popular: false, pin: "500049", avgArrival: "30 mins" },
      { name: "Kukatpally", popular: true, pin: "500072", avgArrival: "30 mins" }
    ]
  },
  {
    zoneName: "Secunderabad & North Hyderabad",
    tagline: "Apartments, Independent Houses & Sports Turfs",
    description: "Same-day inspection and professional rigging across cantonment and residential societies.",
    locations: [
      { name: "Secunderabad", popular: true, pin: "500003", avgArrival: "25 mins" },
      { name: "Marredpally", popular: true, pin: "500026", avgArrival: "25 mins" },
      { name: "Bowenpally", popular: true, pin: "500011", avgArrival: "30 mins" },
      { name: "Alwal", popular: true, pin: "500010", avgArrival: "35 mins" },
      { name: "Sainikpuri", popular: true, pin: "500094", avgArrival: "35 mins" },
      { name: "Kompally", popular: true, pin: "500100", avgArrival: "35 mins" },
      { name: "Begumpet", popular: true, pin: "500016", avgArrival: "25 mins" }
    ]
  },
  {
    zoneName: "East & Central Hyderabad",
    tagline: "Building Ducts, Commercial & Balcony Nets",
    description: "Complete pigeon quarantine, deep shaft cleaning, and high-tension safety nets.",
    locations: [
      { name: "Uppal", popular: true, pin: "500039", avgArrival: "30 mins" },
      { name: "LB Nagar", popular: true, pin: "500074", avgArrival: "30 mins" },
      { name: "Dilsukhnagar", popular: true, pin: "500060", avgArrival: "25 mins" },
      { name: "Tarnaka", popular: true, pin: "500007", avgArrival: "25 mins" },
      { name: "Malakpet", popular: true, pin: "500036", avgArrival: "25 mins" },
      { name: "Kothapet", popular: false, pin: "500035", avgArrival: "30 mins" },
      { name: "Nagole", popular: false, pin: "500068", avgArrival: "35 mins" },
      { name: "Amberpet", popular: false, pin: "500013", avgArrival: "30 mins" },
      { name: "Abids", popular: false, pin: "500001", avgArrival: "25 mins" }
    ]
  }
];

export const allHyderabadLocations = hyderabadZones.flatMap((z) => z.locations.map((l) => l.name));
