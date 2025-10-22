const products = [
  {
    "id": 1,
    "name": "White Aesthetic Chair",
    "slug": "white-aesthetic-chair",
    "subtext": "Scandinavian comfort meets timeless elegance",
    "description": "Elevate your living space with this stunning White Aesthetic Chair that perfectly blends Scandinavian design principles with modern comfort. Crafted from sustainably sourced solid wood and upholstered in premium wool fabric, this chair features a gently curved backrest that provides excellent lumbar support while maintaining an elegant silhouette. The natural wood legs showcase beautiful grain patterns and are finished with a protective coating for durability. The plush wool cushioning offers both comfort and breathability, making it ideal for long hours of reading, working, or relaxing. This versatile piece complements minimalist, contemporary, and bohemian interiors alike.",
    "price": 99.98,
    "category": "Furniture",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Black", "hex": "#000000" },
        { "name": "Dark Green", "hex": "#2D5016" },
        { "name": "Natural Wood", "hex": "#DEB887" },
        { "name": "White", "hex": "#FFFFFF" }
      ],
      "size": ["Standard"]
    },
    "dimensions": {
      "width": "22 inches",
      "depth": "24 inches",
      "height": "32 inches",
      "weight": "18 lbs"
    },
    "materials": ["Solid Oak Wood", "Premium Wool Blend", "Non-toxic Finish"],
    "care_instructions": "Vacuum regularly with upholstery attachment. Spot clean with mild soap and water. Professional cleaning recommended annually.",
    "created_at": "2025-09-15T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Wooden Aesthetic Chair",
    "slug": "wooden-aesthetic-chair",
    "subtext": "Handcrafted beauty in every grain",
    "description": "Discover the perfect balance of rustic charm and contemporary design with our Wooden Aesthetic Chair. This handcrafted piece features a solid wood frame that showcases the natural beauty of carefully selected timber, with each chair displaying unique grain patterns that make it truly one-of-a-kind. The seat is generously padded with high-density foam and covered in soft, durable wool fabric that's both comfortable and easy to maintain. The angled backrest is ergonomically designed to support your natural posture, while the slightly flared legs provide excellent stability. Whether you're furnishing a dining room, home office, or cozy reading nook, this chair brings warmth and sophistication to any space.",
    "price": 58.39,
    "category": "Furniture",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Natural Wood", "hex": "#DEB887" },
        { "name": "White", "hex": "#FFFFFF" },
        { "name": "Black", "hex": "#000000" }
      ],
      "size": ["Standard"]
    },
    "dimensions": {
      "width": "20 inches",
      "depth": "22 inches",
      "height": "31 inches",
      "weight": "15 lbs"
    },
    "materials": ["Beech Wood", "Wool Upholstery", "High-density Foam"],
    "care_instructions": "Wipe wood frame with slightly damp cloth. Vacuum fabric regularly. Avoid direct sunlight to prevent fading.",
    "created_at": "2025-08-22T14:15:00Z"
  },
  {
    "id": 3,
    "name": "Plant With Clay Stand",
    "slug": "plant-with-clay-stand",
    "subtext": "Bring nature home with artisan craftsmanship",
    "description": "Transform your interior into a botanical oasis with this exquisite Plant and Clay Stand combination. This artisan-crafted piece features a living succulent or air plant nestled in a handmade ceramic pot that sits elegantly atop a minimalist wooden stand. The clay pot is carefully thrown on a pottery wheel by skilled craftspeople, resulting in subtle variations that add character and authenticity. The wooden stand is constructed from sustainable hardwood with clean, geometric lines that elevate the plant to eye level, creating an eye-catching display. The porous ceramic material allows for proper drainage and air circulation, promoting healthy root growth. Perfect for adding a touch of nature to desks, shelves, mantels, or side tables, this piece brings life and tranquility to any room while requiring minimal maintenance.",
    "price": 61.49,
    "category": "Decoration",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?w=1200&q=80",
    "gallery": [
      "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Gray", "hex": "#808080" },
        { "name": "Terracotta", "hex": "#E2725B" },
        { "name": "White", "hex": "#FFFFFF" }
      ],
      "size": ["Small", "Medium"]
    },
    "dimensions": {
      "pot_diameter": "4-6 inches",
      "stand_height": "8-12 inches",
      "total_height": "12-18 inches"
    },
    "materials": ["Handmade Ceramic", "Solid Wood Stand", "Live Plant"],
    "care_instructions": "Water plant weekly or as needed. Provide indirect sunlight. Dust stand with dry cloth.",
    "created_at": "2025-09-01T09:45:00Z"
  },
  {
    "id": 4,
    "name": "Oval Gold Mirror",
    "slug": "oval-gold-mirror",
    "subtext": "Reflect your style with golden sophistication",
    "description": "Make a striking statement in your home with this luxurious Oval Gold Mirror that combines classic elegance with modern sophistication. The mirror features a beautifully beveled glass surface that adds depth and dimension while the ornate oval frame is meticulously finished in a warm gold tone that catches and reflects light throughout the day. The frame's smooth, polished surface is crafted from durable metal alloy and treated with a protective coating to maintain its lustrous appearance for years. This versatile mirror works beautifully in entryways to check your appearance before heading out, above bathroom vanities for a spa-like ambiance, in bedrooms to create the illusion of more space, or as a decorative accent in living rooms and dining areas. The timeless oval shape softens angular spaces while the metallic finish adds a touch of glamour to both traditional and contemporary interiors.",
    "price": 32.43,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Gold", "hex": "#FFD700" },
        { "name": "Silver", "hex": "#C0C0C0" },
        { "name": "Bronze", "hex": "#CD7F32" }
      ],
      "size": ["Medium", "Large"]
    },
    "dimensions": {
      "medium": "18 x 24 inches",
      "large": "24 x 36 inches",
      "frame_width": "2 inches"
    },
    "materials": ["Metal Alloy Frame", "Beveled Glass", "Protective Backing"],
    "care_instructions": "Clean glass with streak-free cleaner. Dust frame with soft cloth. Hang securely using provided hardware.",
    "created_at": "2025-07-18T16:20:00Z"
  },
  {
    "id": 5,
    "name": "Modern Desk Lamp",
    "slug": "modern-desk-lamp",
    "subtext": "Precision lighting for focused productivity",
    "description": "Illuminate your workspace with precision and style using this Modern Desk Lamp that seamlessly blends form and function. Featuring a sleek, minimalist design with clean lines and a powder-coated metal finish, this lamp is built to complement contemporary office and home environments. The fully adjustable arm with smooth-rotating joints allows you to direct light exactly where you need it, whether you're working on detailed projects, reading, or creating ambient lighting. Equipped with energy-efficient LED technology, it provides bright, flicker-free illumination that reduces eye strain during extended use while consuming minimal electricity. The weighted base ensures stability on any surface, and the touch-sensitive control panel offers multiple brightness levels to suit different tasks and times of day. The long-lasting LED bulb means you won't need to worry about replacements for years to come.",
    "price": 45.99,
    "category": "Lighting",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80",
      "https://images.unsplash.com/photo-1534105615274-ec71f2eaa8ca?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "White", "hex": "#FFFFFF" },
        { "name": "Black", "hex": "#000000" },
        { "name": "Gray", "hex": "#808080" }
      ]
    },
    "dimensions": {
      "base_diameter": "6 inches",
      "max_height": "22 inches",
      "arm_length": "16 inches"
    },
    "materials": ["Powder-coated Steel", "LED Light", "Aluminum Components"],
    "specifications": {
      "bulb_type": "Integrated LED",
      "wattage": "12W",
      "lumens": "800",
      "color_temperature": "3000K-6000K adjustable",
      "cord_length": "6 feet"
    },
    "care_instructions": "Wipe with dry cloth. Do not use near water. LED not replaceable but lasts 50,000+ hours.",
    "created_at": "2025-08-10T11:30:00Z"
  },
  {
    "id": 6,
    "name": "Ceramic Planter Set",
    "slug": "ceramic-planter-set",
    "subtext": "Three handcrafted pots for your green sanctuary",
    "description": "Bring nature indoors with this elegant Ceramic Planter Set that includes three beautifully crafted pots perfect for displaying your favorite plants, herbs, or succulents. Each planter is handmade from high-quality ceramic with a smooth, glazed finish that's both aesthetically pleasing and easy to clean. The set features graduated sizes that work beautifully together or separately throughout your home. Each pot includes a pre-drilled drainage hole with a matching saucer to protect your furniture from water damage while ensuring your plants receive proper hydration without root rot. The minimalist design with subtle ribbed texture adds visual interest without overwhelming your plants, allowing the natural beauty of your greenery to take center stage. These versatile planters are perfect for windowsills, countertops, shelving units, or as a coordinated display on a plant stand.",
    "price": 28.75,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?w=1200&q=80",
    "gallery": [
      "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "White", "hex": "#FFFFFF" },
        { "name": "Gray", "hex": "#808080" },
        { "name": "Mint Green", "hex": "#98FF98" }
      ],
      "size": ["Small", "Medium", "Large"]
    },
    "dimensions": {
      "small": "4 x 4 inches",
      "medium": "5 x 5 inches",
      "large": "6 x 6 inches"
    },
    "materials": ["Glazed Ceramic", "Drainage Holes", "Matching Saucers"],
    "care_instructions": "Wipe clean with damp cloth. Drainage saucers included. Suitable for indoor use.",
    "created_at": "2025-09-05T08:00:00Z"
  },
  {
    "id": 7,
    "name": "Scandinavian Bookshelf",
    "slug": "scandinavian-bookshelf",
    "subtext": "Nordic design meets functional elegance",
    "description": "Organize your literary collection and display cherished decorative items with this stunning Scandinavian Bookshelf that embodies the principles of Nordic design: simplicity, functionality, and natural beauty. Crafted from premium solid wood with visible grain patterns that celebrate the material's organic origins, this bookshelf features five spacious tiers that provide ample storage for books, plants, photo frames, and decorative objects. The open design creates an airy, uncluttered appearance while the angled sides add architectural interest and stability. Each shelf is reinforced to support substantial weight without sagging, and the wide spacing between tiers accommodates oversized art books and tall items. The bookshelf arrives with all necessary hardware and clear instructions for straightforward assembly. Its neutral aesthetic allows it to blend seamlessly with existing furniture while serving as a focal point that draws the eye and anchors the room.",
    "price": 189.50,
    "category": "Furniture",
    "featured": true,
    "in_stock": false,
    "image_url": "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80",
      "https://images.unsplash.com/photo-1595428773457-2c9293d81e97?w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Oak", "hex": "#C19A6B" },
        { "name": "Walnut", "hex": "#5C4033" },
        { "name": "White", "hex": "#FFFFFF" }
      ],
      "size": ["Small", "Large"]
    },
    "dimensions": {
      "small": "48 x 32 x 12 inches",
      "large": "72 x 36 x 14 inches",
      "shelf_thickness": "0.75 inches"
    },
    "materials": ["Solid Wood", "Reinforced Shelves", "Anti-tip Hardware"],
    "specifications": {
      "weight_capacity_per_shelf": "45 lbs",
      "number_of_shelves": "5",
      "assembly_required": true
    },
    "care_instructions": "Dust regularly. Clean with wood-safe cleaner. Anchor to wall for safety.",
    "created_at": "2025-06-30T13:45:00Z"
  },
  {
    "id": 8,
    "name": "Round Wall Clock",
    "slug": "round-wall-clock",
    "subtext": "Silent elegance for every moment",
    "description": "Keep track of time in style with this sophisticated Round Wall Clock that combines practical functionality with elegant decorative appeal. The clock features a sleek rose gold frame that adds a touch of luxury to any room, complemented by a clean white face with minimalist hour markers and slender hands that embody contemporary design aesthetics. The silent sweep movement ensures your space remains peaceful without the distracting tick-tock sound common in traditional clocks. The large, easy-to-read numbers and contrasting hands make checking the time effortless from across the room. Protected by a clear glass cover, the clock face stays clean and pristine while the durable metal frame maintains its beautiful finish over time. This versatile timepiece works beautifully in living rooms, bedrooms, kitchens, offices, or entryways, adding both function and visual interest to bare walls.",
    "price": 24.99,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/19801745/pexels-photo-19801745.jpeg?w=1200&q=80",
    "gallery": [
      "https://images.pexels.com/photos/19801745/pexels-photo-19801745.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?w=1200&q=80",
      "https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Rose Gold", "hex": "#B76E79" },
        { "name": "Silver", "hex": "#C0C0C0" },
        { "name": "Black", "hex": "#000000" }
      ]
    },
    "dimensions": {
      "diameter": "12 inches",
      "depth": "2 inches",
      "weight": "1.5 lbs"
    },
    "materials": ["Metal Frame", "Glass Cover", "Silent Quartz Movement"],
    "specifications": {
      "movement_type": "Silent sweep quartz",
      "power_source": "1 AA battery (not included)",
      "mounting": "Wall hook (included)"
    },
    "care_instructions": "Wipe glass with soft cloth. Replace battery annually. Hang securely on wall.",
    "created_at": "2025-08-28T15:10:00Z"
  },
  {
    "id": 9,
    "name": "Woven Storage Basket",
    "slug": "woven-storage-basket",
    "subtext": "Natural organization with rustic charm",
    "description": "Declutter your space beautifully with this handcrafted Woven Storage Basket that combines practical organization with natural, rustic charm. Meticulously woven from sustainable natural fibers by skilled artisans, each basket features a tight, durable weave that holds its shape while remaining surprisingly lightweight. The sturdy reinforced handles make it easy to transport from room to room, whether you're gathering laundry, corralling toys, storing blankets, organizing magazines, or displaying rolled towels in the bathroom. The basket's neutral texture adds warmth and organic appeal to any décor style, from coastal and bohemian to farmhouse and Scandinavian. The open weave allows air circulation, making it ideal for storing items that benefit from breathability. Each basket bears slight variations in color and pattern, reflecting its handmade nature and ensuring your piece is truly unique.",
    "price": 19.99,
    "category": "Storage",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?w=1200&q=80",
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?w=1200&q=80",
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Natural", "hex": "#D2B48C" },
        { "name": "White", "hex": "#FFFFFF" },
        { "name": "Gray", "hex": "#808080" }
      ],
      "size": ["Small", "Medium", "Large"]
    },
    "dimensions": {
      "small": "10 x 10 x 8 inches",
      "medium": "14 x 14 x 10 inches",
      "large": "18 x 18 x 12 inches"
    },
    "materials": ["Natural Seagrass", "Water Hyacinth", "Reinforced Handles"],
    "care_instructions": "Spot clean with damp cloth. Avoid prolonged moisture exposure. Store in dry area.",
    "created_at": "2025-09-12T10:00:00Z"
  },
  {
    "id": 10,
    "name": "Velvet Throw Pillow",
    "slug": "velvet-throw-pillow",
    "subtext": "Luxury comfort in sumptuous velvet",
    "description": "Add instant luxury and comfort to your living space with this sumptuous Velvet Throw Pillow that invites you to sink in and relax. Crafted from premium velvet fabric with a dense, plush pile, this pillow feels incredibly soft to the touch while the rich color depth creates visual interest and sophistication. The hidden zipper closure allows easy removal of the cover for cleaning, and the generously filled insert provides perfect support whether you're lounging on the sofa, reading in bed, or creating a cozy seating arrangement. The velvet's subtle sheen catches light beautifully throughout the day, adding dimension and elegance to your décor. Available in a curated palette of jewel tones and neutrals, these pillows can be mixed and matched to create custom combinations that reflect your personal style. The durable construction ensures the pillow maintains its shape and appearance through regular use.",
    "price": 16.50,
    "category": "Textiles",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1601042879774-1147b6c37ae1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
    ],
    "variations": {
      "color": [
        { "name": "Emerald Green", "hex": "#50C878" },
        { "name": "Navy Blue", "hex": "#000080" },
        { "name": "Blush Pink", "hex": "#FFC0CB" },
        { "name": "Mustard Yellow", "hex": "#FFDB58" }
      ],
      "size": ["16x16", "18x18", "20x20"]
    },
    "dimensions": {
      "16x16": "16 x 16 inches",
      "18x18": "18 x 18 inches",
      "20x20": "20 x 20 inches"
    },
    "materials": ["Premium Velvet Cover", "Polyester Fill", "Hidden Zipper"],
    "care_instructions": "Remove cover and machine wash cold on gentle cycle. Tumble dry low. Iron on low if needed.",
    "created_at": "2025-09-20T12:30:00Z"
  }
];

module.exports = products;