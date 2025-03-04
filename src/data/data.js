const categories = [
  "Lower Primary",
  "Lower Primary Girls",
  "Upper Primary",
  "Upper Primary Girls",
  "High School",
  "High School Girls",
  "Higher Secondary",
  "High Secondary Girls",
  "Junior",
  "Senior",
  "campus Boys",
  "Campus Girls",
  "General",
];

// "Junior Girls": [

// ],

const teams = [
  "Kondotty",
  "Areekode",
  "Pulikkal",
  "Edakkara",
  "Nilambur",
  "Kolathur",
  "Manjeri East",
  "Manjeri West",
  "Edavannappara",
  "Perinthalmanna",
  "Malappuram",
  "Wandoor",
];

const itemsByCategory = {
  "Lower Primary": [
    "Elocution",
    "Madhu Song",
    "Quiz",
    "Kadha Kadhanam",
    "Pencil Drawing",
    "Water Colouring",
    "Bhashakeli",
    "Malayalam Reading",
    "Arabi-Malayalam Reading",
    "Book Test",
  ],
  "Lower Primary Girls": [
    "Pencil Drawing",
    "Water Colouring",
    "Malayalam Handwriting",
  ],
  "Upper Primary": [
    "Elocution",
    "Mappilappattu",
    "Kadha Kadhanam",
    "Ganithakeli",
    "Quiz",
    "Pencil Drawing",
    "Water Colouring",
    "Story Writing",
    "English Reading",
    "Book Test",
    "Spelling Bee",
  ],
  "Upper Primary Girls": [
    "Pencil Drawing",
    "Water Colouring",
    "Book Test",
    "Story Writing",
  ],
  "High School": [
    "Elocution Malayalam",
    "Elocution English",
    "Mappilappattu",
    "Madhu Song",
    "Arabic Poem Recitation",
    "Malayalam Poem Recitation",
    "Urdu Poem Recitation",
    "Quiz",
    "Story Writing",
    "Poem Making",
    "Pencil Drawing",
    "Water Colouring",
    "Book Test",
    "Essay Writing Malayalam",
    "News Reading",
    "Caption Writing",
    "Language Game",
  ],
  "High School Girls": [
    "Embroidery",
    "Book Test",
    "Pencil Drawing",
    "Water Colouring",
    "Story Writing",
    "Poem Making",
  ],
  "Higher Secondary": [
    "Elocution",
    "Mappilappattu",
    "Bhakthi Ganam",
    "Urdu Poem Recitation",
    "Story Writing",
    "Poem Making",
    "Essay Malayalam",
    "Essay English",
    "Quiz",
    "Pencil Drawing",
    "Water Colouring",
    "Book Test",
    "News Writing",
    "Caption Writing",
    "Calligraphy Arabic",
  ],
  "High Secondary Girls": [
    "Calligraphy Arabic",
    "Book Test",
    "Story Writing",
    "Poem Making",
  ],

  Junior: [
    "Mappilappattu",
    "Elocution Malayalam",
    "Elocution Arabic",
    "Elocution English",
    "Reading Arabic",
    "Poem Making",
    "Story Writing",
    "Book Test",
    "Essay Malayalam",
    "Essay Arabic",
    "Mudravakya Rachana",
    "Madhu gana Rachana",
    "Quiz",
    "Translation Arabic",
    "Calligraphy Arabic",
    "Feature Writing",
    "Social Text",
    "Sahitya Samvadam",
    "Hadees Musabaqa",
  ],

  Senior: [
    "Mappilappattu",
    "Hamd Urdu",
    "Poem Recitation English",
    "Elocution Malayalam",
    "Elocution English",
    "Elocution Urdu",
    "Mushaara Alfiya",
    "Poem Making",
    "Poem Making English",
    "Story Writing",
    "Book Test",
    "Essay Malayalam",
    "Essay English",
    "Essay Urdu",
    "Translation English",
    "Madhu Gana Rachana",
    "Mudravakya Rachana",
    "Quiz",
    "Feature Writing",
    "Social Text",
    "Poster Designing",
    "E-poster",
    "Survey Tool",
    "Digital Illustration",
    "Magazine Layout",
  ],

  "campus Boys": [
    "Mappilappattu",
    "Madhu Song",
    "Elocution Malayalam",
    "Elocution English",
    "Essay Malayalam",
    "Essay English",
    "Story Writing Malayalam",
    "Poem Making Malayalam",
    "Poem Making English",
    "Pencil Drawing",
    "Water Colouring",
    "Quiz",
    "Book Test",
    "Translation English",
    "E-poster",
    "Vlog",
    "Top Comment",
    "Debate",
    "Campus Magazine",
    "DPR Presentation",
    "Caption the flag",
    "Language Pro",
    "Online Quiz",
  ],
  "Campus Girls": [
    "Essay Malayalam",
    "Essay English",
    "Story Writing Malayalam",
    "Story Writing English",
    "Poem Making Malayalam",
    "Poem Making English",
    "Pencil Drawing",
    "Water Colouring",
    "Calligraphy Arabic",
    "Book Test",
    "Quiz",
  ],

  General: [
    "Spot Magazine",
    "Duff",
    "Arabana",
    "Group Song (A)",
    "Group Song (B)",
    "Arabana",
    "Nasheeda",
    "Sufi Geetham",
    "Risala quiz",
    "Viplava Gana Rachana",
    "project",
    "Social Story",
    "Collage",
    "Qawwali",
    "Moulid Recitation",
    "Qaseeda Recitation",
    "Viplava Ganam",
    "Chumarezhuth",
    "Malappattu",
  ],
};

export { categories, itemsByCategory, teams };
