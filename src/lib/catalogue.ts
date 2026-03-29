export interface ProductImage {
    url: string;
    name: string;
}

export interface Tool {
    id: string;
    name: string;
    description?: string;
    category: string;
    subcategory: string;
    images: ProductImage[];
    price?: string;
    isOnOffer?: boolean;
    originalPrice?: number;
    offerPrice?: number;
    isBestseller?: boolean;
}

export const catalogue: Tool[] = [
    {
        "id": "water-pumps-tester-test",
        "name": "TEST",
        "category": "Water Pumps",
        "subcategory": "TESTER",
        "price": "12,000",
        "description": "Testing for website ",
        "images": [
            {
                "name": "main",
                "url": "data:image/jpeg;base64,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"
            }
        ],
        "isOnOffer": true,
        "isBestseller": true,
        "originalPrice": 12000,
        "offerPrice": 9000
    },
    {
        "id": "YEM 115 - Uyus Angle Grinder Wrench (Spanner)-YEM 115 - Uyus Angle Grinder Wrench (Spanner)",
        "name": "YEM 115 - Uyus Angle Grinder Wrench (Spanner)",
        "description": "Type :Grinder Key\r\nModel / Size :YEM115\r\nApplication :DIY, Professional, Commercial\r\nMaterial :High-Quality Steel\r\nSafety Standard :EN Standard Compliant",
        "category": "Accessories",
        "subcategory": "Angle Grinder Wrenches (Spanners)",
        "images": [
            {
                "name": "X_yem1158342.png",
                "url": "/website%20products/Accessories/Angle%20Grinder%20Wrenches%20(Spanners)/YEM%20115%20-%20Uyus%20Angle%20Grinder%20Wrench%20(Spanner)/X_yem1158342.png"
            }
        ],
        "price": "149.9999944",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HIL01R - Uyus Trimmer Line (2.4mm x 15m)-HIL01R - Uyus Trimmer Line (2.4mm x 15m)",
        "name": "HIL01R - Uyus Trimmer Line (2.4mm x 15m)",
        "description": "Round shape\r\nWidth: 2.4mm\r\nLength: 15m\r\nMaterial: PA6 nylon\r\nBreaking strength> 900N\r\nPackage: blister card",
        "category": "Accessories",
        "subcategory": "Bush Cutter Timmer Lines and Blades",
        "images": [
            {
                "name": "006478.x27086.webp",
                "url": "/website%20products/Accessories/Bush%20Cutter%20Timmer%20Lines%20and%20Blades/HIL01R%20-%20Uyus%20Trimmer%20Line%20(2.4mm%20x%2015m)/006478.x27086.webp"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TGTLS2545 - Total Line Spool-TGTLS2545 - Total Line Spool",
        "name": "TGTLS2545 - Total Line Spool",
        "description": "Line diameter: 2.5mm\r\nLine length: 4m\r\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Bush Cutter Timmer Lines and Blades",
        "images": [
            {
                "name": "TGTLS2545.jpg",
                "url": "/website%20products/Accessories/Bush%20Cutter%20Timmer%20Lines%20and%20Blades/TGTLS2545%20-%20Total%20Line%20Spool/TGTLS2545.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TSB423045 - Ingco Bush Cutter Blade-TSB423045 - Ingco Bush Cutter Blade",
        "name": "TSB423045 - Ingco Bush Cutter Blade",
        "description": "Diameter:230mm(9\")\r\nQuantity of teeth :40T\r\nArbor:25.4mm\r\nWith 1pcs 20mm reduction ring\r\nSuitable for bush cutter Match with GBC5434421\r\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Bush Cutter Timmer Lines and Blades",
        "images": [
            {
                "name": "TSB423045.jpg",
                "url": "/website%20products/Accessories/Bush%20Cutter%20Timmer%20Lines%20and%20Blades/TSB423045%20-%20Ingco%20Bush%20Cutter%20Blade/TSB423045.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CK1301 - Ingco 13mm Chuck Key-CK1301 - Ingco 13mm Chuck Key",
        "name": "CK1301 - Ingco 13mm Chuck Key",
        "description": "Key for 13mm key chuck\r\nLength:80mm\r\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Chuck Key",
        "images": [
            {
                "name": "CK1301.jpg",
                "url": "/website%20products/Accessories/Chuck%20Key/CK1301%20-%20Ingco%2013mm%20Chuck%20Key/CK1301.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CK1601 - Ingco 16mm Chuck Key-CK1601 - Ingco 16mm Chuck Key",
        "name": "CK1601 - Ingco 16mm Chuck Key",
        "description": "Key for 16mm key chuck\r\nLength:85mm\r\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Chuck Key",
        "images": [
            {
                "name": "CK1601.jpg",
                "url": "/website%20products/Accessories/Chuck%20Key/CK1601%20-%20Ingco%2016mm%20Chuck%20Key/CK1601.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "MDB13U - Uyus Keyless Chuck (13mm)-MDB13U - Uyus Keyless Chuck (13mm)",
        "name": "MDB13U - Uyus Keyless Chuck (13mm)",
        "description": "Type: Threaded, Keyless Drill Chuck.\r\nCapacity: 1.5mm to 13mm (or 1/2 inch).\r\nThread Size: 1/2\"-20 UNF.\r\nIncludes: Often comes with a matching chuck key for tightening/loosening.",
        "category": "Accessories",
        "subcategory": "Chucks",
        "images": [
            {
                "name": "[4093] DRILL CHUCK & KEY 1.5-13MM 1-2_-20 UNF MDB13U UYUS.png",
                "url": "/website%20products/Accessories/Chucks/MDB13U%20-%20Uyus%20Keyless%20Chuck%20(13mm)/%5B4093%5D%20DRILL%20CHUCK%20&%20KEY%201.5-13MM%201-2_-20%20UNF%20MDB13U%20UYUS.png"
            }
        ],
        "price": "799.9999971999999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2 608 644 404 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (40T)-2 608 644 404 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (40T)",
        "name": "2 608 644 404 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (40T)",
        "description": "Technical Data\r\nBore size :30mm\r\nCutting width :2.800mm\r\nNumber of teeth :40\r\nNet Weight :0.220 kg\r\nGross Weight :0.220 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644404-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2%20608%20644%20404%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20Circular%20Saw%20Blade%20(40T)/2608644404-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2 608 644 405 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (60T)-2 608 644 405 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (60T)",
        "name": "2 608 644 405 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (60T)",
        "description": "Technical Data\r\nBore size :30mm\r\nCutting width :2.800mm\r\nNumber of teeth :60\r\nNet Weight :0.220 kg\r\nGross Weight :0.220 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644405-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Sa.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2%20608%20644%20405%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20Circular%20Saw%20Blade%20(60T)/2608644405-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Sa.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608644399 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (40T)-2608644399 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (40T)",
        "name": "2608644399 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (40T)",
        "description": "Technical Data\r\nBore size :20mm\r\nCutting width :2.200mm\r\nNumber of teeth :40\r\nNet Weight :0.220 kg\r\nGross Weight :0.347 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644399-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2608644399%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20Circular%20Saw%20Blade%20(40T)/2608644399-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608644400 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (60T)-2608644400 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (60T)",
        "name": "2608644400 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (60T)",
        "description": "Technical Data\r\nBore size :20mm\r\nCutting width :2.200mm\r\nNumber of teeth :60\r\nNet Weight :0.220 kg\r\nGross Weight :0.347 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644400-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-en-K.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2608644400%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20Circular%20Saw%20Blade%20(60T)/2608644400-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-en-K.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC231255 - Total 4 Inch TCT Saw Blade (40T)-TAC231255 - Total 4 Inch TCT Saw Blade (40T)",
        "name": "TAC231255 - Total 4 Inch TCT Saw Blade (40T)",
        "description": "115mm(4-1/2\"\")\r\n40T,arbor:22.2mm\r\nReduction ring:16mm\r\nSuitable for Angle Grinder, Wood Cutting\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "TAC231255.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/TAC231255%20-%20Total%204%20Inch%20TCT%20Saw%20Blade%20(40T)/TAC231255.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC231413 - Total 185mm (7 Inch) TCT Saw Blade (60T)-TAC231413 - Total 185mm (7 Inch) TCT Saw Blade (60T)",
        "name": "TAC231413 - Total 185mm (7 Inch) TCT Saw Blade (60T)",
        "description": "185mm(7-1/4\"\")\r\n60T,arbor:20mm\r\nReduction ring:16mm\r\nSuitable for circular saw\r\nFor item TS1141856\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "TAC231413.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/TAC231413%20-%20Total%20185mm%20(7%20Inch)%20TCT%20Saw%20Blade%20(60T)/TAC231413.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC231415 - Total 185mm (7 Inch) TCT Saw Blade (40T)-TAC231415 - Total 185mm (7 Inch) TCT Saw Blade (40T)",
        "name": "TAC231415 - Total 185mm (7 Inch) TCT Saw Blade (40T)",
        "description": "185mm(7-1/4\"\")\r\n40T,arbor:20mm\r\nReduction ring:16mm\r\nSuitable for circular saw\r\nFor item TS1141856\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "TAC231415.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/TAC231415%20-%20Total%20185mm%20(7%20Inch)%20TCT%20Saw%20Blade%20(40T)/TAC231415.jpg"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DBCS0031 - Ingco 3 Pcs Countersink Set-DBCS0031 - Ingco 3 Pcs Countersink Set",
        "name": "DBCS0031 - Ingco 3 Pcs Countersink Set",
        "description": "Type: Countersink Bit Set.\r\nQuantity: 3 bits per set.\r\nSizes: 12mm, 16mm, 19mm.\r\nAngle: 90°.\r\nMaterial: High-Speed Steel (HSS).\r\nShank: 1/4\" Hex Shank (Quick Change).\r\nApplications: Metal, mild steel, copper, zinc, woodworking.\r\nPackaging: Often sold in a double blister pack",
        "category": "Accessories",
        "subcategory": "Countersink Sets",
        "images": [
            {
                "name": "DBCS0031.jpg",
                "url": "/website%20products/Accessories/Countersink%20Sets/DBCS0031%20-%20Ingco%203%20Pcs%20Countersink%20Set/DBCS0031.jpg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608615027 - Bosch 4 Inch (115mm) Eco for Universal Segmented Diamond Cutting Disc-2608615027 - Bosch 4 Inch (115mm) Eco for Universal Segmented Diamond Cutting Disc",
        "name": "2608615027 - Bosch 4 Inch (115mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\r\nDiameter mm :115\r\nCutting width mm :2\r\nProduct text :Pack of 1\r\nSpecification :115x22.23x2.0x7mm\r\nNet Weight:0.100 kg\r\nGross Weight :0.145 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "o234198v82_2608615027_bo_pro_u_f_1.webp",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615027%20-%20Bosch%204%20Inch%20(115mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/o234198v82_2608615027_bo_pro_u_f_1.webp"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608615030 - Bosch 7 Inch (185mm) Eco for Universal Segmented Diamond Cutting Disc-2608615030 - Bosch 7 Inch (185mm) Eco for Universal Segmented Diamond Cutting Disc",
        "name": "2608615030 - Bosch 7 Inch (185mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\r\nDiameter mm :180\r\nCutting width mm :2.2\r\nProduct text :Pack of 1\r\nSpecification :180x22.23x2.0x7mm\r\nNet Weight:0.310 kg\r\nGross Weight :0.368 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "2608615030-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Gr.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615030%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/2608615030-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Gr.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608615031 - Bosch 9 Inch (235mm) Eco for Universal Segmented Diamond Cutting Disc-2608615031 - Bosch 9 Inch (235mm) Eco for Universal Segmented Diamond Cutting Disc",
        "name": "2608615031 - Bosch 9 Inch (235mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\r\nDiameter mm :230\r\nCutting width mm :2.6\r\nProduct text :Pack of 1\r\nSpecification :230x22.23x2.0x7mm\r\nNet Weight:0.500 kg\r\nGross Weight :0.657 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "2608615031-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Grinde.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615031%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/2608615031-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Grinde.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC21111532 - Total 4.5 Inch (115mm) 2 Pcs Diamond Cutting Disc  Set (Segmented)-TAC21111532 - Total 4.5 Inch (115mm) 2 Pcs Diamond Cutting Disc  Set (Segmented)",
        "name": "TAC21111532 - Total 4.5 Inch (115mm) 2 Pcs Diamond Cutting Disc  Set (Segmented)",
        "description": "115(4-1/2\"\")X22mm\r\nBlade width:7mm",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "TAC-21111532.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC21111532%20-%20Total%204.5%20Inch%20(115mm)%202%20Pcs%20Diamond%20Cutting%20Disc%20%20Set%20(Segmented)/TAC-21111532.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC2131153 - Total 4.5 Inch (115mm) Turbo Diamond Cutting Disc (Continuos)-TAC2131153 - Total 4.5 Inch (115mm) Turbo Diamond Cutting Disc (Continuos)",
        "name": "TAC2131153 - Total 4.5 Inch (115mm) Turbo Diamond Cutting Disc (Continuos)",
        "description": "Size: 115 (4.5 ') x 22 mm\r\nBlade width: 7.5mm\r\nDiameter: 115mm (4 1/2 \")\r\nShaft Diameter: 22mm (7/8 \")\r\nMaximum speed: 13000 min-1/80 m / s.\r\nWeight: 0.88 lbs\r\nApplication: wet and dry cutting.",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "71ca7b1d0deffa2472283f97f3d1ba6028879dad__94236.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC2131153%20-%20Total%204.5%20Inch%20(115mm)%20Turbo%20Diamond%20Cutting%20Disc%20(Continuos)/71ca7b1d0deffa2472283f97f3d1ba6028879dad__94236.jpg"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC2164051 - TOTAL DIAMOND DISC FOR ASPHALT CUTTING LASER Φ - 405 X 25.4mm-TAC2164051 - TOTAL DIAMOND DISC FOR ASPHALT CUTTING LASER Φ - 405 X 25.4mm",
        "name": "TAC2164051 - TOTAL DIAMOND DISC FOR ASPHALT CUTTING LASER Φ - 405 X 25.4mm",
        "description": "405mm(16\"\")X25.4mm\r\nSpecial for asphalt cutting\r\nLaser welded cutting rim\r\nBlade width:10mm\r\nSuitable for Gasoline floor saw TP1016-2/TP1016-2EE\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "TAC2164051.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC2164051%20-%20TOTAL%20DIAMOND%20DISC%20FOR%20ASPHALT%20CUTTING%20LASER%20%CE%A6%20-%20405%20X%2025.4mm/TAC2164051.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Ceramic (Tile) Drill Bits-2608587161 - Bosch 6 mm Ceramic (Tile) Bit-2608587161 - Bosch 6 mm Ceramic (Tile) Bit",
        "name": "2608587161 - Bosch 6 mm Ceramic (Tile) Bit",
        "description": "Diameter (D) mm :6\r\nProduct text :Pack of 1\r\nSpecification :6 x 80 mm\r\nTotal length (L2) mm :80\r\nNet Weight :0.008 kg\r\nGross Weight :0.012 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608587161-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181150v117-2608587161-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587161%20-%20Bosch%206%20mm%20Ceramic%20(Tile)%20Bit/2608587161-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181150v117-2608587161-bo-pro-u-a-1.jpg"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Ceramic (Tile) Drill Bits-2608587164 - Bosch 8 mm Ceramic (Tile) Bit-2608587164 - Bosch 8 mm Ceramic (Tile) Bit",
        "name": "2608587164 - Bosch 8 mm Ceramic (Tile) Bit",
        "description": "Diameter (D) mm :8\r\nProduct text :Pack of 1\r\nSpecification :8 x 80 mm\r\nTotal length (L2) mm :80",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608587164-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181152v117-2608587164-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587164%20-%20Bosch%208%20mm%20Ceramic%20(Tile)%20Bit/2608587164-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181152v117-2608587164-bo-pro-u-a-1.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Ceramic (Tile) Drill Bits-2608587165 - Bosch 10 mm Ceramic (Tile) Bit-2608587165 - Bosch 10 mm Ceramic (Tile) Bit",
        "name": "2608587165 - Bosch 10 mm Ceramic (Tile) Bit",
        "description": "Diameter (D) mm :10\r\nProduct text :Pack of 1\r\nSpecification :10 x 90 mm\r\nTotal length (L2) mm :90",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608587165-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181153v117-2608587165-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587165%20-%20Bosch%2010%20mm%20Ceramic%20(Tile)%20Bit/2608587165-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181153v117-2608587165-bo-pro-u-a-1.jpg"
            }
        ],
        "price": "900",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Glass Drill Bits-AKD7058 - Ingco 5 Pcs Glass Drill Bit Set-AKD7058 - Ingco 5 Pcs Glass Drill Bit Set",
        "name": "AKD7058 - Ingco 5 Pcs Glass Drill Bit Set",
        "description": "5 Pcs glass drill bits\r\nCross head carbide tip\r\nHigh quality carbide tip\r\nSize:4mm,5mm,6mm,8mm,10mm\r\nShank:1/4\" hex shank,Titanium finishing\r\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "AKD7058.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Glass%20Drill%20Bits/AKD7058%20-%20Ingco%205%20Pcs%20Glass%20Drill%20Bit%20Set/AKD7058.jpg"
            }
        ],
        "price": "2350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Impact Drill Concrete (Masonry) Drill Bits-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "name": "2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\r\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\r\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\r\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\r\n– 1 Key\r\n– 1 Adapter bits.",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Impact Drill Concrete (Masonry) Drill Bits-2608590090 - Bosch 5 Pcs Concrete (Masonry) Drill Bit Set-2608590090 - Bosch 5 Pcs Concrete (Masonry) Drill Bit Set",
        "name": "2608590090 - Bosch 5 Pcs Concrete (Masonry) Drill Bit Set",
        "description": "Package Contents: 1-Piece 4mm Drill Bit, 1-Piece 5mm Drill Bit, 1-Piece 6mm Drill Bit, 1-Piece 8mm Drill Bit and 1-Piece 10mm Drill Bit\r\nBosch 5 pieces masonry drill bit set\r\nSize Diameter: 4mm, 5mm, 6mm, 8mm and 10mm\r\nMaterial: HSS with brazed carbide tip",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608590090-CYL-1-Masonry-Drill-B.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/2608590090%20-%20Bosch%205%20Pcs%20Concrete%20(Masonry)%20Drill%20Bit%20Set/2608590090-CYL-1-Masonry-Drill-B.jpg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Impact Drill Concrete (Masonry) Drill Bits-TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set-TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set",
        "name": "TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set",
        "description": "Package comes with,\r\n\r\n7 pcs HSS drill bits: 2mm, 3mm, 3.5mm, 4mm, 4mm, 5mm, 6mm\r\n\r\n4 pcs Masonry drill bits: 4mm, 5mm, 6mm, 8mm\r\n\r\n8 pcs Screwdriver bits, 25mm: SL4.5, SL5.5, PH1, PH2, PZ1, PZ2, TX20, TX30",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TACSDB1901.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/TACSDB1901%20-%20Total%2019%20Pcs%20Drill%20and%20Screwdriver%20Bits%20Set/TACSDB1901.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "name": "2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\r\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\r\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\r\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\r\n– 1 Key\r\n– 1 Adapter bits.",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577198 - Bosch HSS Twist PointTeQ 3mm Metal Drill Bit-2608577198 - Bosch HSS Twist PointTeQ 3mm Metal Drill Bit",
        "name": "2608577198 - Bosch HSS Twist PointTeQ 3mm Metal Drill Bit",
        "description": "Diameter (D) mm :3\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :61\r\nWorking length (L1) mm :33\r\nShank diameter (d) mm :3",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577198%20-%20Bosch%20HSS%20Twist%20PointTeQ%203mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "45",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577208 - Bosch HSS Twist PointTeQ 4mm Metal Drill Bit-2608577208 - Bosch HSS Twist PointTeQ 4mm Metal Drill Bit",
        "name": "2608577208 - Bosch HSS Twist PointTeQ 4mm Metal Drill Bit",
        "description": "Diameter (D) mm :4\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :75\r\nWorking length (L1) mm :43\r\nShank diameter (d) mm :4",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577208%20-%20Bosch%20HSS%20Twist%20PointTeQ%204mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "55",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577218 - Bosch HSS Twist PointTeQ 5mm Metal Drill Bit-2608577218 - Bosch HSS Twist PointTeQ 5mm Metal Drill Bit",
        "name": "2608577218 - Bosch HSS Twist PointTeQ 5mm Metal Drill Bit",
        "description": "Diameter (D) mm :5\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :86\r\nWorking length (L1) mm :52\r\nShank diameter (d) mm :5",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577218%20-%20Bosch%20HSS%20Twist%20PointTeQ%205mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "75",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577228 - Bosch HSS Twist PointTeQ 6mm Metal Drill Bit-2608577228 - Bosch HSS Twist PointTeQ 6mm Metal Drill Bit",
        "name": "2608577228 - Bosch HSS Twist PointTeQ 6mm Metal Drill Bit",
        "description": "Diameter (D) mm :6\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :93\r\nWorking length (L1) mm :57\r\nShank diameter (d) mm :6",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577228%20-%20Bosch%20HSS%20Twist%20PointTeQ%206mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "110",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577238 - Bosch HSS Twist PointTeQ 7mm Metal Drill Bit-2608577238 - Bosch HSS Twist PointTeQ 7mm Metal Drill Bit",
        "name": "2608577238 - Bosch HSS Twist PointTeQ 7mm Metal Drill Bit",
        "description": "Diameter (D) mm :7\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :109\r\nWorking length (L1) mm :69\r\nShank diameter (d) mm :7",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577238%20-%20Bosch%20HSS%20Twist%20PointTeQ%207mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "145",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577248 - Bosch HSS Twist PointTeQ 8mm Metal Drill Bit-2608577248 - Bosch HSS Twist PointTeQ 8mm Metal Drill Bit",
        "name": "2608577248 - Bosch HSS Twist PointTeQ 8mm Metal Drill Bit",
        "description": "Diameter (D) mm :8\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :117\r\nWorking length (L1) mm :75\r\nShank diameter (d) mm :8",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577248%20-%20Bosch%20HSS%20Twist%20PointTeQ%208mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "185",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577258 - Bosch HSS Twist PointTeQ 9mm Metal Drill Bit-2608577258 - Bosch HSS Twist PointTeQ 9mm Metal Drill Bit",
        "name": "2608577258 - Bosch HSS Twist PointTeQ 9mm Metal Drill Bit",
        "description": "Diameter (D) mm :9\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :125\r\nWorking length (L1) mm :81\r\nShank diameter (d) mm :9",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577258%20-%20Bosch%20HSS%20Twist%20PointTeQ%209mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577268 - Bosch HSS Twist PointTeQ 10mm Metal Drill Bit-2608577268 - Bosch HSS Twist PointTeQ 10mm Metal Drill Bit",
        "name": "2608577268 - Bosch HSS Twist PointTeQ 10mm Metal Drill Bit",
        "description": "Diameter (D) mm :10\r\nProduct text :Pack of 10\r\nTotal length (L2) mm :133\r\nWorking length (L1) mm :87\r\nShank diameter (d) mm :10",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577268%20-%20Bosch%20HSS%20Twist%20PointTeQ%2010mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "260",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577278 - Bosch HSS Twist PointTeQ 11mm Metal Drill Bit-2608577278 - Bosch HSS Twist PointTeQ 11mm Metal Drill Bit",
        "name": "2608577278 - Bosch HSS Twist PointTeQ 11mm Metal Drill Bit",
        "description": "Diameter (D) mm :11\r\nProduct text :Pack of 5\r\nTotal length (L2) mm :142\r\nWorking length (L1) mm :94\r\nShank diameter (d) mm :11",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577278%20-%20Bosch%20HSS%20Twist%20PointTeQ%2011mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-2608577288 - Bosch HSS Twist PointTeQ 12mm Metal Drill Bit-2608577288 - Bosch HSS Twist PointTeQ 12mm Metal Drill Bit",
        "name": "2608577288 - Bosch HSS Twist PointTeQ 12mm Metal Drill Bit",
        "description": "Diameter (D) mm :12\r\nProduct text :Pack of 5\r\nTotal length (L2) mm :151\r\nWorking length (L1) mm :101\r\nShank diameter (d) mm :12",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577288%20-%20Bosch%20HSS%20Twist%20PointTeQ%2012mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            }
        ],
        "price": "275",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-AKD1055 - Ingco 6 Pcs HSS Metal Drill Bit Set (Hard Case)-AKD1055 - Ingco 6 Pcs HSS Metal Drill Bit Set (Hard Case)",
        "name": "AKD1055 - Ingco 6 Pcs HSS Metal Drill Bit Set (Hard Case)",
        "description": "6pcs Metal drill bits set\r\nMaterial:HSS 4341\r\nSIZE:2,3,4,5,6,8mm\r\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "AKD1055.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/AKD1055%20-%20Ingco%206%20Pcs%20HSS%20Metal%20Drill%20Bit%20Set%20(Hard%20Case)/AKD1055.jpg"
            }
        ],
        "price": "440.00000484",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-TACSD0125 - Total 12 Pcs HSS Metal Drill Bit Set-TACSD0125 - Total 12 Pcs HSS Metal Drill Bit Set",
        "name": "TACSD0125 - Total 12 Pcs HSS Metal Drill Bit Set",
        "description": "Size：2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8mm\r\n12pcs HSS twist drill bits set\r\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TACSD0125.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/TACSD0125%20-%20Total%2012%20Pcs%20HSS%20Metal%20Drill%20Bit%20Set/TACSD0125.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Metal Drill Bits-TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set-TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set",
        "name": "TACSDB1901 - Total 19 Pcs Drill and Screwdriver Bits Set",
        "description": "Package comes with,\r\n\r\n7 pcs HSS drill bits: 2mm, 3mm, 3.5mm, 4mm, 4mm, 5mm, 6mm\r\n\r\n4 pcs Masonry drill bits: 4mm, 5mm, 6mm, 8mm\r\n\r\n8 pcs Screwdriver bits, 25mm: SL4.5, SL5.5, PH1, PH2, PZ1, PZ2, TX20, TX30",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TACSDB1901.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/TACSDB1901%20-%20Total%2019%20Pcs%20Drill%20and%20Screwdriver%20Bits%20Set/TACSDB1901.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SDS (Rotary Hammer) Concrete (Masonry) Drill Bits-TAC261012 - Total SDS Plus Concrete Drill Bit (10 x 120mm)-TAC261012 - Total SDS Plus Concrete Drill Bit (10 x 120mm)",
        "name": "TAC261012 - Total SDS Plus Concrete Drill Bit (10 x 120mm)",
        "description": "Diameter :10 x 120mm\r\nDurable carbide tip for longer life in concrete and hard aggregate\r\nSuitable for drilling of cement, concrete, brick and block\r\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TAC261012-500x500.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC261012%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(10%20x%20120mm)/TAC261012-500x500.webp"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SDS (Rotary Hammer) Concrete (Masonry) Drill Bits-TAC310601 - Total SDS Plus Concrete Drill Bit (6 x 110mm)-TAC310601 - Total SDS Plus Concrete Drill Bit (6 x 110mm)",
        "name": "TAC310601 - Total SDS Plus Concrete Drill Bit (6 x 110mm)",
        "description": "Model no.\tTAC310601\r\nDiameter\t6mm\r\nTotal length\t110mm\r\nWorking length\t50mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TAC310601.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310601%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(6%20x%20110mm)/TAC310601.jpg"
            }
        ],
        "price": "225",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SDS (Rotary Hammer) Concrete (Masonry) Drill Bits-TAC310602 - Total SDS Plus Concrete Drill Bit (6 x 160mm)-TAC310602 - Total SDS Plus Concrete Drill Bit (6 x 160mm)",
        "name": "TAC310602 - Total SDS Plus Concrete Drill Bit (6 x 160mm)",
        "description": "Model no.\tTAC310602\r\nDiameter\t6mm\r\nLength\t160mm\r\nWorking length\t135mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TAC310602.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310602%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(6%20x%20160mm)/TAC310602.jpg"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SDS (Rotary Hammer) Concrete (Masonry) Drill Bits-TAC310803 - Total SDS Plus Concrete Drill Bit (8 x 210mm)-TAC310803 - Total SDS Plus Concrete Drill Bit (8 x 210mm)",
        "name": "TAC310803 - Total SDS Plus Concrete Drill Bit (8 x 210mm)",
        "description": "Diameter :8mm\r\nLength :210mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TAC310803.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310803%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(8%20x%20210mm)/TAC310803.jpg"
            }
        ],
        "price": "325",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Screwdriver Bits-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)-2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "name": "2607017503 - Bosch 27 Pcs Accessory Kit Hand Tool (Screwdriver and Drill Bit Combo Set)",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\r\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\r\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\r\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\r\n– 1 Key\r\n– 1 Adapter bits.",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Screwdriver Bits-2608521042 - Bosch PH2 Screwdriver Bits (10 Pcs)-2608521042 - Bosch PH2 Screwdriver Bits (10 Pcs)",
        "name": "2608521042 - Bosch PH2 Screwdriver Bits (10 Pcs)",
        "description": "Length mm :65\r\nSet description :Set Content: 10 PH2 double ended screwdriver bits\r\nDimensions, 2nd bit :Object #200227055: 8678 \r\nPH2\r\nDimensions, 1st bit :Object #200227055: 8678\r\nPH2\r\nNet Weight :0.155 kg\r\nGross Weight :0.155 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "PH2-65mm-Gold-700x700.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/2608521042%20-%20Bosch%20PH2%20Screwdriver%20Bits%20(10%20Pcs)/PH2-65mm-Gold-700x700.jpg"
            }
        ],
        "price": "1050",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Screwdriver Bits-DL6903 - Deli Double Side Ph2X100 mm Bit (10 Pcs)-DL6903 - Deli Double Side Ph2X100 mm Bit (10 Pcs)",
        "name": "DL6903 - Deli Double Side Ph2X100 mm Bit (10 Pcs)",
        "description": "Dimension :2x100 mm\r\nUsage For :Home, Industry and Professional\r\nMaterial :Stainless Steel\r\nRust Proof :Yes\r\nColor :Silver\r\nSize :100 mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "HAN.BIT.99632652_1726654399813.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/DL6903%20-%20Deli%20Double%20Side%20Ph2X100%20mm%20Bit%20(10%20Pcs)/HAN.BIT.99632652_1726654399813.webp"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Screwdriver Bits-TACIM16PH23 - Total PH2 Screwdriver Bit (10 Pcs)-TACIM16PH23 - Total PH2 Screwdriver Bit (10 Pcs)",
        "name": "TACIM16PH23 - Total PH2 Screwdriver Bit (10 Pcs)",
        "description": "Impact Screwdriver bit\r\nPH2+PH2 65mm\r\n10pcs/set\r\nWith high visibility sleeve\r\nThe larger optimized Shock Zone are reduces tip breakages\r\nS2 industrial steel\r\nBlack surface with magnet\r\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TACIM16PH233.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/TACIM16PH23%20-%20Total%20PH2%20Screwdriver%20Bit%20(10%20Pcs)/TACIM16PH233.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-2608596303 - Bosch 6 mm Wood Drill Bit-2608596303 - Bosch 6 mm Wood Drill Bit",
        "name": "2608596303 - Bosch 6 mm Wood Drill Bit",
        "description": "Diameter (D) mm :6\r\nProduct text :Pack of 1\r\nSpecification : 6 x 57 x 93 mm, d 6 mm\r\nTotal length (L2) mm :93\r\nWorking length (L1) mm :60\r\nShank diameter (d) mm :6\r\nNet Weight :0.015 kg\r\nGross Weight :0.018 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596303%20-%20Bosch%206%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            }
        ],
        "price": "225",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-2608596305 - Bosch 8 mm Wood Drill Bit-2608596305 - Bosch 8 mm Wood Drill Bit",
        "name": "2608596305 - Bosch 8 mm Wood Drill Bit",
        "description": "Diameter (D) mm :8\r\nProduct text :Pack of 1\r\nSpecification : 8 x 75 x 117 mm, d 8 mm\r\nTotal length (L2) mm :117\r\nWorking length (L1) mm :80\r\nShank diameter (d) mm :8\r\nNet Weight :0.031 kg\r\nGross Weight :0.032 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596305%20-%20Bosch%208%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-2608596307 - Bosch 10 mm Wood Drill Bit-2608596307 - Bosch 10 mm Wood Drill Bit",
        "name": "2608596307 - Bosch 10 mm Wood Drill Bit",
        "description": "Diameter (D) mm :10\r\nProduct text :Pack of 1\r\nSpecification : 10 x 80 x 120 mm, d 10 mm\r\nTotal length (L2) mm :120\r\nWorking length (L1) mm :80\r\nShank diameter (d) mm :10\r\nNet Weight :0.047 kg\r\nGross Weight :0.047 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596307%20-%20Bosch%2010%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-2608596309 - Bosch 12 mm Wood Drill Bit-2608596309 - Bosch 12 mm Wood Drill Bit",
        "name": "2608596309 - Bosch 12 mm Wood Drill Bit",
        "description": "Diameter (D) mm :12\r\nProduct text :Pack of 1\r\nSpecification : 12 x 96 x 151 mm, d 10 mm\r\nTotal length (L2) mm :151\r\nWorking length (L1) mm :110\r\nShank diameter (d) mm :10\r\nNet Weight :0.068 kg\r\nGross Weight :0.071 kg",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596309%20-%20Bosch%2012%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2211001 - Ingco 10mm Flat Wood Drill Bit Set-DBW2211001 - Ingco 10mm Flat Wood Drill Bit Set",
        "name": "DBW2211001 - Ingco 10mm Flat Wood Drill Bit Set",
        "description": "Wood Flat Drill Bit\r\nDiameter:10mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211001] DBW2211001 WOOD FLAT DRILL BIT 10MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211001%20-%20Ingco%2010mm%20Flat%20Wood%20Drill%20Bit%20Set/%5BDBW2211001%5D%20DBW2211001%20WOOD%20FLAT%20DRILL%20BIT%2010MM.png"
            }
        ],
        "price": "120.00000479999999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2211401 - Ingco WOOD FLAT DRILL BIT 14mm-DBW2211401 - Ingco WOOD FLAT DRILL BIT 14mm",
        "name": "DBW2211401 - Ingco WOOD FLAT DRILL BIT 14mm",
        "description": "Wood Flat Drill Bit\r\nDiameter:14mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211401%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2014mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2211601 - Ingco WOOD FLAT DRILL BIT 6mm-DBW2211601 - Ingco WOOD FLAT DRILL BIT 6mm",
        "name": "DBW2211601 - Ingco WOOD FLAT DRILL BIT 6mm",
        "description": "Wood Flat Drill Bit\r\nDiameter:6mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211601%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%206mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2212001 - Ingco WOOD FLAT DRILL BIT 12mm-DBW2212001 - Ingco WOOD FLAT DRILL BIT 12mm",
        "name": "DBW2212001 - Ingco WOOD FLAT DRILL BIT 12mm",
        "description": "Wood Flat Drill Bit\r\nDiameter:12mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2212001%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2012mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2212501 - Ingco WOOD FLAT DRILL BIT 25mm-DBW2212501 - Ingco WOOD FLAT DRILL BIT 25mm",
        "name": "DBW2212501 - Ingco WOOD FLAT DRILL BIT 25mm",
        "description": "Wood Flat Drill Bit\r\nDiameter:25mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2212501%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2025mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Wood Drill Bits-DBW2213001 - Ingco WOOD FLAT DRILL BIT 30MM-DBW2213001 - Ingco WOOD FLAT DRILL BIT 30MM",
        "name": "DBW2213001 - Ingco WOOD FLAT DRILL BIT 30MM",
        "description": "Wood Flat Drill Bit\r\nDiameter:30mm\r\nTotal length:152mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2213001%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2030MM/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AET25153N - Tronic Extension Reel (25mx1.5mm)-AET25153N - Tronic Extension Reel (25mx1.5mm)",
        "name": "AET25153N - Tronic Extension Reel (25mx1.5mm)",
        "description": "Color: Black & Yellow\r\nAmps: 13Amps\r\nVoltage: AC 220 - 240V\r\nCable Rating: 1.5mm 3 Core\r\nCable Length: 25 Meters\r\nLoad Rotating: 3600 Watts\r\nMaterial: PVC\r\nAdditional Features: 4x13A Sockets\r\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5_87461c00-f76f-4620-a898-b7dab2ca7e79.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET25153N%20-%20Tronic%20Extension%20Reel%20(25mx1.5mm)/5_87461c00-f76f-4620-a898-b7dab2ca7e79.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AET25253N - Tronic Extension Reel (25m x 2.5mm)-AET25253N - Tronic Extension Reel (25m x 2.5mm)",
        "name": "AET25253N - Tronic Extension Reel (25m x 2.5mm)",
        "description": "Color: Black & Yellow\r\nAmps: 13Amps\r\nVoltage: AC 220 - 240V\r\nCable Rating: 2.5mm 3 Core\r\nCable Length: 25 Meters\r\nLoad Rotating: 3600 Watts\r\nMaterial: PVC\r\nAdditional Features: 4x13A Sockets\r\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5_04793bb4-72e1-4682-8eff-89265897c2e1.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET25253N%20-%20Tronic%20Extension%20Reel%20(25m%20x%202.5mm)/5_04793bb4-72e1-4682-8eff-89265897c2e1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AET50253N - Tronic Extension Reel (50m x 2.5mm)-AET50253N - Tronic Extension Reel (50m x 2.5mm)",
        "name": "AET50253N - Tronic Extension Reel (50m x 2.5mm)",
        "description": "Color: Black & Yellow\r\nAmps: 13Amps\r\nVoltage: AC 220 - 240V\r\nCable Rating: 2.5mm 3 Core\r\nCable Length: 50 Meters\r\nLoad Rotating: 3600 Watts\r\nMaterial: PVC\r\nAdditional Features: 4x13A Sockets\r\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET50253N%20-%20Tronic%20Extension%20Reel%20(50m%20x%202.5mm)/5.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Generic Cable Reel-Generic Cable Reel",
        "name": "Generic Cable Reel",
        "description": "Available in Sizes : \r\n50m x 1.5mm\r\n100m x 1.5mm\r\n\r\n50m x 2.5mm\r\n100m x 2.5mm",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "1.jpg",
                "url": "/website%20products/Accessories/Extention%20Cables/Generic%20Cable%20Reel/1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FD1151 - Ingco Flap Disc (P40)-FD1151 - Ingco Flap Disc (P40)",
        "name": "FD1151 - Ingco Flap Disc (P40)",
        "description": "Size: 115mm by 22mm\r\nP40 Suitable for high steel,steel, cast iron and sheet steel",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "[FD1151] FD1151 FLAP DISC P40.png",
                "url": "/website%20products/Accessories/Flap%20Discs/FD1151%20-%20Ingco%20Flap%20Disc%20(P40)/%5BFD1151%5D%20FD1151%20FLAP%20DISC%20P40.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FD1152 - Ingco Flap Disc (P60)-FD1152 - Ingco Flap Disc (P60)",
        "name": "FD1152 - Ingco Flap Disc (P60)",
        "description": "Size: 115mm by 22mm\r\nP60 Suitable for high steel,steel, cast iron and sheet steel",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "[FD1152] FD1152 FLAP DISC P60.png",
                "url": "/website%20products/Accessories/Flap%20Discs/FD1152%20-%20Ingco%20Flap%20Disc%20(P60)/%5BFD1152%5D%20FD1152%20FLAP%20DISC%20P60.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FD1153 - Ingco Flap Disc (P80)-FD1153 - Ingco Flap Disc (P80)",
        "name": "FD1153 - Ingco Flap Disc (P80)",
        "description": "Size: 115mm by 22mm\r\nP80 Suitable for high steel,steel, cast iron and sheet steel",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "[FD1153] FD1153 FLAP DISC P80.png",
                "url": "/website%20products/Accessories/Flap%20Discs/FD1153%20-%20Ingco%20Flap%20Disc%20(P80)/%5BFD1153%5D%20FD1153%20FLAP%20DISC%20P80.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC631252 - Total Flap Disc (P60)-TAC631252 - Total Flap Disc (P60)",
        "name": "TAC631252 - Total Flap Disc (P60)",
        "description": "Size：125mm*22mm,P60\r\nSuitable for high steel，steel，cast iron and sheet steel\r\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "TAC631252.jpg",
                "url": "/website%20products/Accessories/Flap%20Discs/TAC631252%20-%20Total%20Flap%20Disc%20(P60)/TAC631252.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC631803 - Total Flap Disc (P80)-TAC631803 - Total Flap Disc (P80)",
        "name": "TAC631803 - Total Flap Disc (P80)",
        "description": "Size：180mm*22mm*120 P80\r\nSuitable for high steel，steel，cast iron and sheet steel\r\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "TAC631803.jpg",
                "url": "/website%20products/Accessories/Flap%20Discs/TAC631803%20-%20Total%20Flap%20Disc%20(P80)/TAC631803.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608003025 - Bosch Hacksaw Blade (150 mm)-2608003025 - Bosch Hacksaw Blade (150 mm)",
        "name": "2608003025 - Bosch Hacksaw Blade (150 mm)",
        "description": "Material :High Speed Steel\r\nColour :Blue\r\nNumber of Teeth :24\r\nStyle :Traditional\r\nItem Weight :0.9 Kilograms",
        "category": "Accessories",
        "subcategory": "Hacksaw Blades",
        "images": [
            {
                "name": "51YTIK+vboL._SX569_.jpg",
                "url": "/website%20products/Accessories/Hacksaw%20Blades/2608003025%20-%20Bosch%20Hacksaw%20Blade%20(150%20mm)/51YTIK+vboL._SX569_.jpg"
            }
        ],
        "price": "100",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "T 111 C -  Bosch Basic 5 Pcs Jigsaw Blade Set (Wood)-T 111 C -  Bosch Basic 5 Pcs Jigsaw Blade Set (Wood)",
        "name": "T 111 C -  Bosch Basic 5 Pcs Jigsaw Blade Set (Wood)",
        "description": "Total length mm :100\r\nShank :Single lug shank\r\nType :T 111 C\r\nLength of teeth mm :74\r\nMaterial :HCS\r\nTooth spacing [mm] :3\r\nSoftwood (4-50 mm), chipboard, wood core plywood, fibre boards, quick cutHCS, side set, milled\r\nSpecification :Basic for Wood",
        "category": "Accessories",
        "subcategory": "Jigsaw Blades",
        "images": [
            {
                "name": "2608630033-T-111-C-Basic-for-Wood-Jigsaw-Blades-en-KE-o353506v117-2608630808-bo-pro-u-f-2.jpg",
                "url": "/website%20products/Accessories/Jigsaw%20Blades/T%20111%20C%20-%20%20Bosch%20Basic%205%20Pcs%20Jigsaw%20Blade%20Set%20(Wood)/2608630033-T-111-C-Basic-for-Wood-Jigsaw-Blades-en-KE-o353506v117-2608630808-bo-pro-u-f-2.jpg"
            }
        ],
        "price": "499.99999679999996",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "T 144 D -  Bosch Speed 5 Pcs Jigsaw Blade Set (Wood)-T 144 D -  Bosch Speed 5 Pcs Jigsaw Blade Set (Wood)",
        "name": "T 144 D -  Bosch Speed 5 Pcs Jigsaw Blade Set (Wood)",
        "description": "Total length mm :100\r\nShank :Single lug shank\r\nType :T 144 D\r\nLength of teeth mm :74\r\nMaterial :HCS\r\nTooth spacing [mm] :4.0 - 5.2\r\nSoftwood (5-50 mm), chipboard, wood core plywood, fibre boards\r\nSpecification :Speed for Wood",
        "category": "Accessories",
        "subcategory": "Jigsaw Blades",
        "images": [
            {
                "name": "2608630040-T-144-D-Speed-for-Wood-Jigsaw-Blades-en-KE-o353701v117-2608630560-bo-pro-u-f-2.jpg",
                "url": "/website%20products/Accessories/Jigsaw%20Blades/T%20144%20D%20-%20%20Bosch%20Speed%205%20Pcs%20Jigsaw%20Blade%20Set%20(Wood)/2608630040-T-144-D-Speed-for-Wood-Jigsaw-Blades-en-KE-o353701v117-2608630560-bo-pro-u-f-2.jpg"
            }
        ],
        "price": "499.99999679999996",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC270831 - Total 3 Pcs Magnetic Nut Set-TAC270831 - Total 3 Pcs Magnetic Nut Set",
        "name": "TAC270831 - Total 3 Pcs Magnetic Nut Set",
        "description": "8mm,3pcs/set\r\nShank:1/4\"\" Hex\r\nLength:65mm\r\nMaterial：50BV30\r\nWith strong magnet\r\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Magnetic Nut Sets",
        "images": [
            {
                "name": "TAC270831.jpg",
                "url": "/website%20products/Accessories/Magnetic%20Nut%20Sets/TAC270831%20-%20Total%203%20Pcs%20Magnetic%20Nut%20Set/TAC270831.jpg"
            }
        ],
        "price": "449.99999479999997",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608619383 - Bosch 4.5 Inch (115mm) Metal Cuting Discs-2608619383 - Bosch 4.5 Inch (115mm) Metal Cuting Discs",
        "name": "2608619383 - Bosch 4.5 Inch (115mm) Metal Cuting Discs",
        "description": "Bore diameter mm :22.230\r\nThickness mm :1\r\nDiameter mm :115\r\nProduct text :Straight\r\nSpecification :A 60 T BF",
        "category": "Accessories",
        "subcategory": "Metal Cutting Discs",
        "images": [
            {
                "name": "o323279v82_2608619383_bo_pro_u_f_1.webp",
                "url": "/website%20products/Accessories/Metal%20Cutting%20Discs/2608619383%20-%20Bosch%204.5%20Inch%20(115mm)%20Metal%20Cuting%20Discs/o323279v82_2608619383_bo_pro_u_f_1.webp"
            }
        ],
        "price": "70",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608619770 - Bosch 9 Inch (230mm) Metal Cutting Disc-2608619770 - Bosch 9 Inch (230mm) Metal Cutting Disc",
        "name": "2608619770 - Bosch 9 Inch (230mm) Metal Cutting Disc",
        "description": "Bore diameter mm :22.230\r\nThickness mm :1.9\r\nDiameter mm :230\r\nProduct text :Straight\r\nSpecification :A 46 S BF",
        "category": "Accessories",
        "subcategory": "Metal Cutting Discs",
        "images": [
            {
                "name": "2608619770-Standard-for-Metal-Cutting-Discs-with-Straight-Centre-22.23-mm-Bore-for-Large-Angle-Grin.jpg",
                "url": "/website%20products/Accessories/Metal%20Cutting%20Discs/2608619770%20-%20Bosch%209%20Inch%20(230mm)%20Metal%20Cutting%20Disc/2608619770-Standard-for-Metal-Cutting-Discs-with-Straight-Centre-22.23-mm-Bore-for-Large-Angle-Grin.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TAC2162301 - Total 9 Inch (230mm) Metal Cutting Discs-TAC2162301 - Total 9 Inch (230mm) Metal Cutting Discs",
        "name": "TAC2162301 - Total 9 Inch (230mm) Metal Cutting Discs",
        "description": "230MM(9\")X1.6MM(1/16\")X22.2MM(7/8\")\r\nFlat centre\r\nCutting disc for metal and inox\r\nRPM:6650r/min\r\nPacked by label",
        "category": "Accessories",
        "subcategory": "Metal Cutting Discs",
        "images": [
            {
                "name": "TAC2162301.jpg",
                "url": "/website%20products/Accessories/Metal%20Cutting%20Discs/TAC2162301%20-%20Total%209%20Inch%20(230mm)%20Metal%20Cutting%20Discs/TAC2162301.jpg"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608603181 - Bosch PRO Metal Bonded Grinding Disc, 115 x 6 x 22.23 mm-2608603181 - Bosch PRO Metal Bonded Grinding Disc, 115 x 6 x 22.23 mm",
        "name": "2608603181 - Bosch PRO Metal Bonded Grinding Disc, 115 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\r\nThickness mm :6\r\nDiameter mm :115\r\nSpecification :A 24 P BF, 115 mm, 22,23 mm, 6,0 mm\r\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603181-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470251v117-260860318.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603181%20-%20Bosch%20PRO%20Metal%20Bonded%20Grinding%20Disc,%20115%20x%206%20x%2022.23%20mm/2608603181-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470251v117-260860318.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608603182 - PRO Metal Bonded Grinding Disc, 125 x 6 x 22.23 mm-2608603182 - PRO Metal Bonded Grinding Disc, 125 x 6 x 22.23 mm",
        "name": "2608603182 - PRO Metal Bonded Grinding Disc, 125 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\r\nThickness mm :6\r\nDiameter mm :125\r\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\r\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603182-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470253v117-2608603182-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603182%20-%20PRO%20Metal%20Bonded%20Grinding%20Disc,%20125%20x%206%20x%2022.23%20mm/2608603182-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470253v117-2608603182-bo-pro-u-f-1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608603183 - PRO Metal Bonded Grinding Disc, 180 x 6 x 22.23 mm-2608603183 - PRO Metal Bonded Grinding Disc, 180 x 6 x 22.23 mm",
        "name": "2608603183 - PRO Metal Bonded Grinding Disc, 180 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\r\nThickness mm :6\r\nDiameter mm :180\r\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\r\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603183-PRO-Metal-Bonded-Grinding-Disc-for-Large-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470255v117-2608603183-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603183%20-%20PRO%20Metal%20Bonded%20Grinding%20Disc,%20180%20x%206%20x%2022.23%20mm/2608603183-PRO-Metal-Bonded-Grinding-Disc-for-Large-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470255v117-2608603183-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608603184 - Bosch PRO Metal Bonded Grinding Disc, 230 x 6 x 22.23 mm-2608603184 - Bosch PRO Metal Bonded Grinding Disc, 230 x 6 x 22.23 mm",
        "name": "2608603184 - Bosch PRO Metal Bonded Grinding Disc, 230 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\r\nThickness mm :6\r\nDiameter mm :230\r\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\r\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "51e5ddd72c3d3018ce07ae3e758e601f.webp",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603184%20-%20Bosch%20PRO%20Metal%20Bonded%20Grinding%20Disc,%20230%20x%206%20x%2022.23%20mm/51e5ddd72c3d3018ce07ae3e758e601f.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "MGD601801 - Ingco 7 Inch Metal Grinding Disc-MGD601801 - Ingco 7 Inch Metal Grinding Disc",
        "name": "MGD601801 - Ingco 7 Inch Metal Grinding Disc",
        "description": "180mm(7\")X6.0mm(1/4\")X22.2mm(7/8\")\r\nDepressed centre\r\nGrinding disc for metal\r\nPacked by label",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "[MGD601801] MGD601801  ABRASIVE METAL GRINDING DISC.png",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/MGD601801%20-%20Ingco%207%20Inch%20Metal%20Grinding%20Disc/%5BMGD601801%5D%20MGD601801%20%20ABRASIVE%20METAL%20GRINDING%20DISC.png"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "MGD602301 - Ingco 9 Inch Metal grinding Disc-MGD602301 - Ingco 9 Inch Metal grinding Disc",
        "name": "MGD602301 - Ingco 9 Inch Metal grinding Disc",
        "description": "230mm(9\")X6.0mm(1/4\")X22.2mm(7/8\")\r\nDepressed centre\r\nGrinding disc for metal\r\nPacked by label",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "MCD301151.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/MGD602301%20-%20Ingco%209%20Inch%20Metal%20grinding%20Disc/MCD301151.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT9391BL - Total Planer Blade-THT9391BL - Total Planer Blade",
        "name": "THT9391BL - Total Planer Blade",
        "description": "Product: THT9391BL (Planer Blade).\r\nBrand: TOTAL Tools.\r\nCompatibility: Specifically for the THT9391 Planer.\r\nDimensions: 80mm (Length) x 44mm (Width).\r\nMaterial: Often Q195 steel for durability, as seen with the main planer model.",
        "category": "Accessories",
        "subcategory": "Planer Blades",
        "images": [
            {
                "name": "THT9391BL-scaled__80395.jpg",
                "url": "/website%20products/Accessories/Planer%20Blades/THT9391BL%20-%20Total%20Planer%20Blade/THT9391BL-scaled__80395.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SSB922EF - Ingco 5 Pcs Reciprocating Saw Blades (Metal)-SSB922EF - Ingco 5 Pcs Reciprocating Saw Blades (Metal)",
        "name": "SSB922EF - Ingco 5 Pcs Reciprocating Saw Blades (Metal)",
        "description": "Flexible for Metal\r\n150mmX19mmX0.9mm\r\n18TPI - Bi-Metal - Milled\r\nSuitable for RS8008\r\n1/2\" shank,2pcs/set\r\nCuts all metals including nonferrous pipe (&lt;100mm) conduit, stainless and sheet metals(1.5-4mm)\r\nPacked by blister card",
        "category": "Accessories",
        "subcategory": "Reciprocating Saw Blades",
        "images": [
            {
                "name": "[SSB922EF] SSB922EF RECIPROCATING SAW BLADE.png",
                "url": "/website%20products/Accessories/Reciprocating%20Saw%20Blades/SSB922EF%20-%20Ingco%205%20Pcs%20Reciprocating%20Saw%20Blades%20(Metal)/%5BSSB922EF%5D%20SSB922EF%20RECIPROCATING%20SAW%20BLADE.png"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607017465 - Bosch PRO Router Bit Straight Set, Shank 6 mm, 6 pcs-2607017465 - Bosch PRO Router Bit Straight Set, Shank 6 mm, 6 pcs",
        "name": "2607017465 - Bosch PRO Router Bit Straight Set, Shank 6 mm, 6 pcs",
        "description": "Type: Straight router bit set for woodworking routers\r\nNumber of Pieces: 6 router bits\r\nShank Diameter: 6 mm (fits routers with 6 mm collet)\r\nMaterial: Carbide cutting edges for durability and clean cuts\r\nCase: Comes in a robust storage case with transparent cover for easy organization and transport\r\n\r\nDiameter (D)\tWorking/Cutting Length\tTotal Length\tType\r\n6 mm\t        20 mm\t                54 mm\t        Straight bit (2-cutter)\r\n8 mm\t        20 mm\t                50 mm\t        Straight bit (2-cutter)\r\n10 mm\t        30 mm\t                60 mm\t        Straight bit (2-cutter)\r\n12 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\r\n16 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\r\n20 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "bosch-2607017465-6-mm-wood-drill-bit-set-6-units-1-600x600.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017465%20-%20Bosch%20PRO%20Router%20Bit%20Straight%20Set,%20Shank%206%20mm,%206%20pcs/bosch-2607017465-6-mm-wood-drill-bit-set-6-units-1-600x600.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607017466 - Bosch PRO Router Bit Straight Set, Shank 8 mm, 6 pcs-2607017466 - Bosch PRO Router Bit Straight Set, Shank 8 mm, 6 pcs",
        "name": "2607017466 - Bosch PRO Router Bit Straight Set, Shank 8 mm, 6 pcs",
        "description": "Set Type: Straight router bit set for woodworking\r\nNumber of Pieces: 6 router bits\r\nShank Diameter: 8 mm (fits routers with an 8 mm collet)\r\nCutting Material: Carbide cutting edges brazed to steel for durability and smoother cuts\r\nCase: Comes in a plastic or cassette style carrying case for secure bit storage and transport\r\nTypical Uses: Grooves, slots, rebates and straight routing in softwoods, hardwoods and wood composite materials\r\n\r\n\r\nDiameter (D)\tWorking/Cutting Length\tTotal Length\tType\r\n6 mm\t        20 mm\t                54 mm\t        Straight bit (2-cutter)\r\n8 mm\t        20 mm\t                50 mm\t        Straight bit (2-cutter)\r\n10 mm\t        30 mm\t                60 mm\t        Straight bit (2-cutter)\r\n12 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\r\n16 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\r\n20 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017466-PRO-Router-Bit-Straight-Set-6-pcs-en-KE-o487504v117-2607017466-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017466%20-%20Bosch%20PRO%20Router%20Bit%20Straight%20Set,%20Shank%208%20mm,%206%20pcs/2607017466-PRO-Router-Bit-Straight-Set-6-pcs-en-KE-o487504v117-2607017466-bo-pro-u-f-1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607017471 - Bosch PRO Router Bit Mixed Set, Shank 6 mm, 15 pcs-2607017471 - Bosch PRO Router Bit Mixed Set, Shank 6 mm, 15 pcs",
        "name": "2607017471 - Bosch PRO Router Bit Mixed Set, Shank 6 mm, 15 pcs",
        "description": "Set Type: Mixed router bit set for precision wood routing\r\nNumber of Pieces: 15 bits\r\nShank Diameter: 6 mm (fits routers/trimmers with a 6 mm collet)\r\nMaterial: Carbide-tipped cutters for durability and clean cuts\r\nStorage: Supplied in a robust plastic case with Easy-Pick inlay for safe storage and quick selection\r\nStandards: Manufactured to DIN EN 847 woodworking accessory standards\r\n\r\n| Profile Type            | Diameter (mm)  | Working Length (mm) | Total Length (mm) |                           \r\n| ----------------------- | -------------- | ------------------- | ----------------- | \r\n| Flush trim bit          | 13             | 25                  | 65                |                           \r\n| Flush pattern bit       | 16             | 25                  | 65                |                           \r\n| Dovetail bit            | 13             | 12                  | 49                |                           \r\n| Chamfer bit (45°)       | 35             | 16                  | 56                |                           \r\n| Chamfer bit (25°)       | 25             | 13                  | 54                |                           \r\n| V-groove bit (60°)      | 16             | 18                  | 50                |                           \r\n| Slotting cutter         | 32             | 4                   | 50                |                           \r\n| Rebating bit            | 32             | 13                  | 54                |                           \r\n| Straight bit (2-cutter) | 8              | 20                  | 50                |                           \r\n| Straight bit (2-cutter) | 10             | 30                  | 60                |                           \r\n| Straight bit (3-cutter) | 16             | 30                  | 60                |                           \r\n| Rounding-over bit       | 19 (radius 3)  | 10                  | 51                |                           \r\n| Rounding-over bit       | 25 (radius 6)  | 13                  | 55                |                           \r\n| Roman ogee bit          | 27 (radius 4)  | 12                  | 52                |                           \r\n| Cove bit                | 29 (radius 10) | 12                  | 54                |",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017471-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o518221v117-2607017471-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017471%20-%20Bosch%20PRO%20Router%20Bit%20Mixed%20Set,%20Shank%206%20mm,%2015%20pcs/2607017471-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o518221v117-2607017471-bo-pro-u-f-1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607017472 - Bosch PRO Router Bit Mixed Set, Shank 8 mm, 15 pcs-2607017472 - Bosch PRO Router Bit Mixed Set, Shank 8 mm, 15 pcs",
        "name": "2607017472 - Bosch PRO Router Bit Mixed Set, Shank 8 mm, 15 pcs",
        "description": "Set Type: Mixed router bit set for precision wood routing\r\nNumber of Pieces: 15 bits\r\nShank Diameter: 8mm (fits routers/trimmers with a 6 mm collet)\r\nMaterial: Carbide-tipped cutters for durability and clean cuts\r\nStorage: Supplied in a robust plastic case with Easy-Pick inlay for safe storage and quick selection\r\nStandards: Manufactured to DIN EN 847 woodworking accessory standards\r\n\r\n| Profile Type            | Diameter (mm)  | Working Length (mm) | Total Length (mm) |                           \r\n| ----------------------- | -------------- | ------------------- | ----------------- | \r\n| Flush trim bit          | 13             | 25                  | 65                |                           \r\n| Flush pattern bit       | 16             | 25                  | 65                |                           \r\n| Dovetail bit            | 13             | 12                  | 49                |                           \r\n| Chamfer bit (45°)       | 35             | 16                  | 56                |                           \r\n| Chamfer bit (25°)       | 25             | 13                  | 54                |                           \r\n| V-groove bit (60°)      | 16             | 18                  | 50                |                           \r\n| Slotting cutter         | 32             | 4                   | 50                |                           \r\n| Rebating bit            | 32             | 13                  | 54                |                           \r\n| Straight bit (2-cutter) | 8              | 20                  | 50                |                           \r\n| Straight bit (2-cutter) | 10             | 30                  | 60                |                           \r\n| Straight bit (3-cutter) | 16             | 30                  | 60                |                           \r\n| Rounding-over bit       | 19 (radius 3)  | 10                  | 51                |                           \r\n| Rounding-over bit       | 25 (radius 6)  | 13                  | 55                |                           \r\n| Roman ogee bit          | 27 (radius 4)  | 12                  | 52                |                           \r\n| Cove bit                | 29 (radius 10) | 12                  | 54                |",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017472-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o487512v117-2607017472-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017472%20-%20Bosch%20PRO%20Router%20Bit%20Mixed%20Set,%20Shank%208%20mm,%2015%20pcs/2607017472-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o487512v117-2607017472-bo-pro-u-f-1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607019464 - Bosch Tungsten-carbide Router Bit Set 6 Pieces-2607019464 - Bosch Tungsten-carbide Router Bit Set 6 Pieces",
        "name": "2607019464 - Bosch Tungsten-carbide Router Bit Set 6 Pieces",
        "description": "Model / Part Number: 2607.019.464-UUU (Bosch 2607019464)\r\nType: Router bit set for woodworking routers\r\nNumber of Pieces: 6 bits in the set\r\nShank Diameter: 6 mm (fits routers with 6 mm collet)\r\nMaterial: Cemented carbide cutting edges for durability and wear resistance\r\nColor: Silver and black finish",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607019464-6-piece-TC-router-bit-set-6-mm-shank-en-KE-o179487v288-2607019464-bo-pl-u-a-1.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607019464%20-%20Bosch%20Tungsten-carbide%20Router%20Bit%20Set%206%20Pieces/2607019464-6-piece-TC-router-bit-set-6-mm-shank-en-KE-o179487v288-2607019464-bo-pl-u-a-1.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2607019469 - Bosch Tungsten-carbide Router Bit Set 15 pcs-2607019469 - Bosch Tungsten-carbide Router Bit Set 15 pcs",
        "name": "2607019469 - Bosch Tungsten-carbide Router Bit Set 15 pcs",
        "description": "Model / Part Number: 2607.019.469-UUU (Bosch 2607019469)\r\nType: Router bit set for woodworking\r\nNumber of Pieces: 15 router bits in the set\r\nShank Diameter: 8 mm (fits routers and trimmers with 8 mm collet)\r\nMaterial: Tungsten-carbide tipped / carbide bits (high quality for durability and long life)\r\nFinish / Packaging: Typically supplied in a wooden or plastic case for organization and safe storage",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607019469-15-piece-TC-router-bit-set-8-mm-shank-en-KE-o406429v288-2607019469-bo-pl-u-a-1.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607019469%20-%20Bosch%20Tungsten-carbide%20Router%20Bit%20Set%2015%20pcs/2607019469-15-piece-TC-router-bit-set-8-mm-shank-en-KE-o406429v288-2607019469-bo-pl-u-a-1.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "26150660JA - DREMEL® Multipurpose Router Bit Set-26150660JA - DREMEL® Multipurpose Router Bit Set",
        "name": "26150660JA - DREMEL® Multipurpose Router Bit Set",
        "description": "Bits included: 7 router bits designed for various routing tasks\r\nCompatible with: Most Dremel rotary/multi-tools and other tools that accept a 3.2 mm shank\r\nMaterial: High-speed steel (HSS) for durability and clean cuts\r\nShank diameter: 3.2 mm\r\nStorage: Comes in a wooden box for organization and protection\r\n\r\nBit Type\t                 Approx Size / Use\r\nType 612 – Piloted Beading\t 9.5 mm\r\nType 615 – Corner Rounding\t 9.5 mm\r\nType 640 – V-Groove\t         6.4 mm\r\nType 650 – Straight Cutter\t 3.2 mm\r\nType 652 – Straight Cutter\t 4.8 mm\r\nType 654 – Straight Cutter\t 6.4 mm\r\nType 655 – Keyhole Router Bit\t 8.0 mm",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "26150660JA-DREMEL-Multipurpose-Router-Bit-Set--en-KE-dremelmdb01-o16221v113-16221.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/26150660JA%20-%20DREMEL%C2%AE%20Multipurpose%20Router%20Bit%20Set/26150660JA-DREMEL-Multipurpose-Router-Bit-Set--en-KE-dremelmdb01-o16221v113-16221.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TACSR0121 - Total Router Bits Set (6mm)-TACSR0121 - Total Router Bits Set (6mm)",
        "name": "TACSR0121 - Total Router Bits Set (6mm)",
        "description": "Shank diameter:6mm\r\n3pcs straight bit:6mm, 12mm, 16mm\r\n1pcs 1/2” 90 v-groove bit\r\n1pcs 1/2” dovetail bit\r\n1pcs 32mm 45 chamfer bit\r\n1pcs 1/2′ flush trim bit",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "TACSR0121.webp",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/TACSR0121%20-%20Total%20Router%20Bits%20Set%20(6mm)/TACSR0121.webp"
            }
        ],
        "price": "3049.9999943999997",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608606081 - Bosch X440 Sanding Belt (Belt Sander Sanding Sheets)-2608606081 - Bosch X440 Sanding Belt (Belt Sander Sanding Sheets)",
        "name": "2608606081 - Bosch X440 Sanding Belt (Belt Sander Sanding Sheets)",
        "description": "Grit :60\r\nMachine type :Belt Sanders\r\nType :X440\r\nProduct text :Pack of 10\r\nSuitable for :Bosch; AEG; DeWalt; Festool; Holz-Her; Makita; Skil\r\nSpecification :75 x 533 mm, 60",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "2608606081-PRO-X440-Sanding-Belt-for-Sanders-en-KE-o42724.jpg",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/2608606081%20-%20Bosch%20X440%20Sanding%20Belt%20(Belt%20Sander%20Sanding%20Sheets)/2608606081-PRO-X440-Sanding-Belt-for-Sanders-en-KE-o42724.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AKRS150051 - Ingco Sanding Sheet for Sander (150mm)-AKRS150051 - Ingco Sanding Sheet for Sander (150mm)",
        "name": "AKRS150051 - Ingco Sanding Sheet for Sander (150mm)",
        "description": "Specifications\r\nProduct Type: Sanding Sheet for Random Orbit Sander\r\nSize: 6\" (150 mm)\r\n\r\nGrit Composition:\r\n3 pcs Grit 80 (coarse)\r\n2 pcs Grit 120 (medium)\r\n\r\nCompatibility: Applicable to other orbit sanders",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "[AKRS150051] SANDING SHEET AKRS150051.webp",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/AKRS150051%20-%20Ingco%20Sanding%20Sheet%20for%20Sander%20(150mm)/%5BAKRS150051%5D%20SANDING%20SHEET%20AKRS150051.webp"
            }
        ],
        "price": "385.00000264",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Generic Velcro Backing Pad-Generic Velcro Backing Pad",
        "name": "Generic Velcro Backing Pad",
        "description": "M14 Machine Connecting Nut\r\nSoft Pad that Stretches According to the Applied Surface\r\nVelcro Surface That Can Be Sanded\r\n\r\nAvailable in sizes : 4\"/5\"/7\"/9\"",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "sgs-180mm-velcro-sanding-disc-pad-base.webp",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/Generic%20Velcro%20Backing%20Pad/sgs-180mm-velcro-sanding-disc-pad-base.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Ingco Staples (# x 11.3 x 1.2mm)-Ingco Staples (# x 11.3 x 1.2mm)",
        "name": "Ingco Staples (# x 11.3 x 1.2mm)",
        "description": "1000pcs staples\r\nsize:8mm/10mm/12mm width:1.2mm length:11.3mm\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Staple Pins",
        "images": [
            {
                "name": "[STS0208] STS0208 STAPLES 8MM.png",
                "url": "/website%20products/Accessories/Staple%20Pins/Ingco%20Staples%20(#%20x%2011.3%20x%201.2mm)/%5BSTS0208%5D%20STS0208%20STAPLES%208MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Total Staples (# x 11.3 x 0.7mm)-Total Staples (# x 11.3 x 0.7mm)",
        "name": "Total Staples (# x 11.3 x 0.7mm)",
        "description": "1000pcs staples\r\nsize:8mm/10mm/12mm width:0.7mm length:11.3mm\r\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Staple Pins",
        "images": [
            {
                "name": "THT3981.jpg",
                "url": "/website%20products/Accessories/Staple%20Pins/Total%20Staples%20(#%20x%2011.3%20x%200.7mm)/THT3981.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TPVP1451 - Total Vibrator Poker (45mm)-TPVP1451 - Total Vibrator Poker (45mm)",
        "name": "TPVP1451 - Total Vibrator Poker (45mm)",
        "description": "DIAMETER :45mm\r\nLENGTH :6m\r\nVIBRATING FREQUENCY :200Hz\r\nWEIGHT :18 Kg",
        "category": "Accessories",
        "subcategory": "Vibrator Pokers",
        "images": [
            {
                "name": "TPVP1451.jpg",
                "url": "/website%20products/Accessories/Vibrator%20Pokers/TPVP1451%20-%20Total%20Vibrator%20Poker%20(45mm)/TPVP1451.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-2608901168 - Bosch EXPERT S470 Combi Block 69 x 97 x 26 mm, Fine",
        "name": "2608901168 - Bosch EXPERT S470 Combi Block 69 x 97 x 26 mm, Fine",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\r\nWidth mm :97\r\nGrade :Fine\r\nHeight mm :26\r\nLength mm :69\r\nProduct colour :yellow\r\nSpecification :69 x 97 x 26 mm, fine",
        "category": "Consumables",
        "subcategory": "2608901168 - Bosch EXPERT S470 Combi Block 69 x 97 x 26 mm, Fine",
        "images": [
            {
                "name": "o353109v82_2608901168-standard-portrait-unpackaged-front-nodim.webp",
                "url": "/website%20products/Consumables/2608901168%20-%20Bosch%20EXPERT%20S470%20Combi%20Block%2069%20x%2097%20x%2026%20mm,%20Fine/o353109v82_2608901168-standard-portrait-unpackaged-front-nodim.webp"
            }
        ],
        "price": "220",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-2608901169 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Medium",
        "name": "2608901169 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Medium",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\r\nWidth mm :97\r\nGrade :Medium\r\nHeight mm :26\r\nLength mm :69\r\nProduct colour :Orange\r\nSpecification :69 x 97 x 26 mm, medium",
        "category": "Consumables",
        "subcategory": "2608901169 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Medium",
        "images": [
            {
                "name": "2608901169-EXPERT-S471-Standard-Sanding-Block-en-KE-o353115v117-2608901169-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Consumables/2608901169%20-%20Bosch%20EXPERT%20S471%20Standard%20Sanding%20Block,%2026%20x%2069%20x%2097%20mm,%20Medium/2608901169-EXPERT-S471-Standard-Sanding-Block-en-KE-o353115v117-2608901169-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "145",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-2608901180 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Super Fine",
        "name": "2608901180 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Super Fine",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\r\nWidth mm :97\r\nGrade :Superfine\r\nHeight mm :26\r\nLength mm :69\r\nProduct colour :Green\r\nSpecification :69 x 97 x 26 mm, super fine",
        "category": "Consumables",
        "subcategory": "2608901180 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Super Fine",
        "images": [
            {
                "name": "2608901180-EXPERT-S471-Standard-Sanding-Block-en-KE-o353157v117-2608901180-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Consumables/2608901180%20-%20Bosch%20EXPERT%20S471%20Standard%20Sanding%20Block,%2026%20x%2069%20x%2097%20mm,%20Super%20Fine/2608901180-EXPERT-S471-Standard-Sanding-Block-en-KE-o353157v117-2608901180-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "145",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-Asmaco PU Foam (Gold)",
        "name": "Asmaco PU Foam (Gold)",
        "description": "300% - Triple Expanding Foam.\r\nExcellent adhesion & filling capacity and high thermal & acoustical insulation valve.\r\nExcellent mounting capacity and stability.\r\nAdheres to almost all building materials with the exception of surfaces such as\r\npolyethylene, Teflon, silicone and surface contaminated with oils and greases, mold release agents, and similar materials.\r\nMould proof, waterproof, over paintable.\r\nQuick-drying, moisture curing\r\nClosed-cell structure, resistant to water absorption\r\ncured foam dries rigid and can be trimmed, shaped, and sanded.\r\nSuitable for sealing high volume low moment gaps.\r\nIt does not contain any propellant gases that are harmful to the ozone layer.",
        "category": "Consumables",
        "subcategory": "Asmaco PU Foam (Gold)",
        "images": [
            {
                "name": "PUFOAMGOLDPREMIUM.webp",
                "url": "/website%20products/Consumables/Asmaco%20PU%20Foam%20(Gold)/PUFOAMGOLDPREMIUM.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-Asmaco PU Foam (Green)",
        "name": "Asmaco PU Foam (Green)",
        "description": "300% - Triple Expanding Foam.\r\nExcellent adhesion & filling capacity and high thermal & acoustical insulation valve.\r\nExcellent mounting capacity and stability.\r\nAdheres to almost all building materials with the exception of surfaces such as\r\npolyethylene, Teflon, silicone and surface contaminated with oils and greases, mold release agents, and similar materials.\r\nMould proof, waterproof, over paintable.\r\nQuick-drying, moisture curing\r\nClosed-cell structure, resistant to water absorption\r\ncured foam dries rigid and can be trimmed, shaped, and sanded.\r\nSuitable for sealing high volume low moment gaps.\r\nIt does not contain any propellant gases that are harmful to the ozone layer.",
        "category": "Consumables",
        "subcategory": "Asmaco PU Foam (Green)",
        "images": [
            {
                "name": "AsmacoUniversalMultiFoam.webp",
                "url": "/website%20products/Consumables/Asmaco%20PU%20Foam%20(Green)/AsmacoUniversalMultiFoam.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-Cable Ties",
        "name": "Cable Ties",
        "description": "Tronic Cable Ties\r\nColor : White or Black\r\nMaterial : Nylon 66 \r\n\r\nAvailable Sizes : \r\n150 x 2.5mm\r\n\r\n150 x 3.6mm\r\n200 x 3.6mm\r\n250 x 3.6mm\r\n300 x 3.6mm\r\n\r\n200 x 4.8mm\r\n250 x 4.8mm\r\n300 x 4.8mm\r\n430 x 4.8mm\r\n\r\n200 x 7.6mm\r\n250 x 7.6mm\r\n300 x 7.6mm\r\n550 x 7.6mm\r\n\r\n750 x 9.0mm",
        "category": "Consumables",
        "subcategory": "Cable Ties",
        "images": [
            {
                "name": "NTBLACK_8db04f09-6e48-47eb-837a-bd391c92e821.webp",
                "url": "/website%20products/Consumables/Cable%20Ties/NTBLACK_8db04f09-6e48-47eb-837a-bd391c92e821.webp"
            },
            {
                "name": "NTWHITE.webp",
                "url": "/website%20products/Consumables/Cable%20Ties/NTWHITE.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-DL8080-1 - Deli Vacuum Cleaner Replacement Filter",
        "name": "DL8080-1 - Deli Vacuum Cleaner Replacement Filter",
        "description": "Efficient Dust Filtration – Captures dust and fine particles\r\nWashable & Reusable – Easy to clean for repeated use\r\nImproves Suction Performance – Helps maintain optimal airflow\r\nDurable Material – Long-lasting and reliable design\r\nEasy Installation – Simple replacement with no tools required\r\n\r\nMaintenance Practices for Vacuum Cleaner Filter\r\nClean Regularly: Wash the filter every 2–4 weeks to prevent dust buildup and maintain strong suction.\r\nDry Completely: Always air-dry the filter fully before reinstalling to avoid moisture damage.\r\nInspect for Wear: Check for tears or clogging that may reduce filtration efficiency.\r\nReplace on Time: Change the filter every 6–12 months for optimal performance.\r\nAvoid Chemicals: Clean using water only; detergents can damage the filter material.",
        "category": "Consumables",
        "subcategory": "DL8080-1 - Deli Vacuum Cleaner Replacement Filter",
        "images": [
            {
                "name": "13a.jpg",
                "url": "/website%20products/Consumables/DL8080-1%20-%20Deli%20Vacuum%20Cleaner%20Replacement%20Filter/13a.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-57101 - Tolsen Adjustable Nozzle",
        "name": "57101 - Tolsen Adjustable Nozzle",
        "description": "• Adjustable from fine mist to powerful jet stream\r\n• Durable ABS body with TPR comfort grip\r\n• Packing: skin card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "57101 - Tolsen Adjustable Nozzle",
        "images": [
            {
                "name": "ADJUSTABLE-NOZZLE-768x768.jpg.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57101%20-%20Tolsen%20Adjustable%20Nozzle/ADJUSTABLE-NOZZLE-768x768.jpg.webp"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-57102 - Tolsen Adjustable Nozzle (Quick Connect)",
        "name": "57102 - Tolsen Adjustable Nozzle (Quick Connect)",
        "description": "• Adjustable from fine mist to powerful jet stream\r\n• Durable ABS body with PP material\r\n• Global quick connect adapter\r\n• Packing: skin card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "57102 - Tolsen Adjustable Nozzle (Quick Connect)",
        "images": [
            {
                "name": "ADJUSTABLE-NOZZLE-768x768.jpg (1).webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57102%20-%20Tolsen%20Adjustable%20Nozzle%20(Quick%20Connect)/ADJUSTABLE-NOZZLE-768x768.jpg%20(1).webp"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-57510 - Tolsen 6 Inch Garden Rake",
        "name": "57510 - Tolsen 6 Inch Garden Rake",
        "description": "• 9 teeth\r\n• Size of each tooth: 6.0×1.0mm\r\n• Drop forged special tool steel\r\n• Black powder coated\r\n• Total length: 350mm\r\n• Thickness: 2.5mm\r\n• Two-component plastic handle\r\n• Packing: hang tag",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "57510 - Tolsen 6 Inch Garden Rake",
        "images": [
            {
                "name": "GARDEN-RAKE-768x768.jpg.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57510%20-%20Tolsen%206%20Inch%20Garden%20Rake/GARDEN-RAKE-768x768.jpg.webp"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-EDL2779 - Deli Loppers (26.5'')",
        "name": "EDL2779 - Deli Loppers (26.5'')",
        "description": "Type: 26.5\" / 690mm Lopper/Gardening Shears\r\nMaterial: 55 Carbon Steel (55C)\r\nCutting Capacity: Up to 15mm-30mm\r\nBlade Treatment: Heat-treated and Teflon coated\r\nHandle: PP anti-slip\r\nColor: Yellow/Black",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "EDL2779 - Deli Loppers (26.5'')",
        "images": [
            {
                "name": "1827701079668641.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL2779%20-%20Deli%20Loppers%20(26.5'')/1827701079668641.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-EDL580321 - Deli Loppers (30.5'')",
        "name": "EDL580321 - Deli Loppers (30.5'')",
        "description": "Type: Hedge Shear / Bypass Lopper\r\nTotal Length: 30.5 inches (approx. 775 mm)\r\nMaterial: 55# Carbon Steel Blade (Heat-treated with Teflon coating)\r\nMaximum Cutting Capacity: 30 mm diameter\r\nHandle Material: PP+TPR (Plastic/Rubber) with ergonomic grip\r\nFeatures: Wave-shaped blades, integrated locking mechanism",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "EDL580321 - Deli Loppers (30.5'')",
        "images": [
            {
                "name": "4a-4-600x600.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL580321%20-%20Deli%20Loppers%20(30.5'')/4a-4-600x600.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-EDL580803 - Deli Gardening Tool Set (3 Pcs)",
        "name": "EDL580803 - Deli Gardening Tool Set (3 Pcs)",
        "description": "Wide shovel for shoveling and potting\r\nThe five-tooth harrow is used for loosening soil, leveling soil for flower pots and removing roots\r\nDual-purpose hoe for digging pits and weeding",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "EDL580803 - Deli Gardening Tool Set (3 Pcs)",
        "images": [
            {
                "name": "edl580803-3-piece-gardening-tool-set.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL580803%20-%20Deli%20Gardening%20Tool%20Set%20(3%20Pcs)/edl580803-3-piece-gardening-tool-set.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-EDL58110B - Deli Mini Hose Reel Set",
        "name": "EDL58110B - Deli Mini Hose Reel Set",
        "description": "10m\r\nMaterial:PP\r\nPortable and convenient,\r\neasily carried with one hand\r\nAccessories:1 pcs hose reel,1\r\npcs faucet adapter ,1 pcs\r\nshower head spray gun,2 pcs\r\nquick couplings,1 pcs 10m\r\nhose\r\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "EDL58110B - Deli Mini Hose Reel Set",
        "images": [
            {
                "name": "9203740.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL58110B%20-%20Deli%20Mini%20Hose%20Reel%20Set/9203740.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "name": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "description": "Displacement:31cc\r\nRated power:0.7Kw(1.1HP)\r\nMax speed：9300rpm\r\nMax cutting path:480mm\r\nSpool liner:2.4mmx4m\r\nBlade diameter:255mm(3teeth)\r\nFuel tank capacity:700ml\r\nPowerful 4-stroke motor\r\nWith 2 function:trimmer and cutter\r\nAir cooled engine,single cylinder\r\nWith line spool ALS25405\r\nWith bush cutter blade ABCB05\r\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "images": [
            {
                "name": "[GBC53144141] GBC53144141 GASOLINE GRASS TRIMMER & BUSH CUTTER 31CC.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC53144141%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(31cc)/%5BGBC53144141%5D%20GBC53144141%20GASOLINE%20GRASS%20TRIMMER%20&%20BUSH%20CUTTER%2031CC.png"
            }
        ],
        "price": "32500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "name": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "description": "Displacement:52cc\r\nRated power:1.4Kw(2.2HP)\r\nMax speed:8000rpm\r\nMax cutting path:420mm\r\nSpool liner:2.4mmx4m\r\nBlade diameter:255mm(3teeth)\r\nFuel tank capacity:1200ml\r\nPowerful 2-stroke motor\r\nWith 2 function:trimmer and cutter\r\nAir cooled engine,single cylinder\r\nWith line spool ALS25405\r\nWith bush cutter blade ABCB05\r\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "images": [
            {
                "name": "[GBC5524421] GBC5524421 GASOLINE GRASS TRIMMER & BUSH CUTTER 52CC.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC5524421%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(52cc)/%5BGBC5524421%5D%20GBC5524421%20GASOLINE%20GRASS%20TRIMMER%20&%20BUSH%20CUTTER%2052CC.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HPS0601 - Ingco Pruning Shears (8.5'')",
        "name": "HPS0601 - Ingco Pruning Shears (8.5'')",
        "description": "Size:8.5\"(215mm)\r\nEntire metal frame,more durable\r\nHigh-Quality Garden Pruning Shear\r\n55# carbon steel blade\r\nHeat treatment Telfon coating\r\nPP handle coverd TPR grip\r\nPacked by blister card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "HPS0601 - Ingco Pruning Shears (8.5'')",
        "images": [
            {
                "name": "[HPS0601] HPS0601 PRUNING SHEARS 8.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS0601%20-%20Ingco%20Pruning%20Shears%20(8.5'')/%5BHPS0601%5D%20HPS0601%20PRUNING%20SHEARS%208.png"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HPS13601 - Ingco Plastic Auto Gear Sprinkler (0.75 Inch)",
        "name": "HPS13601 - Ingco Plastic Auto Gear Sprinkler (0.75 Inch)",
        "description": "Plastic Auto Gear sprinkler head\r\n3/4\" tool adaptor\r\n3 Pin plastic spike\r\nWith 360° rotary function\r\nDimension：38*17.4*6.4cm\r\nMeterial Breakdown: ABS+PP\r\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "HPS13601 - Ingco Plastic Auto Gear Sprinkler (0.75 Inch)",
        "images": [
            {
                "name": "[HPS13601] HPS13601 Plastic Auto Gear sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS13601%20-%20Ingco%20Plastic%20Auto%20Gear%20Sprinkler%20(0.75%20Inch)/%5BHPS13601%5D%20HPS13601%20Plastic%20Auto%20Gear%20sprinkler.png"
            }
        ],
        "price": "1600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HPS23602 - Ingco Plastic 3 Arm Rotary Sprinkler",
        "name": "HPS23602 - Ingco Plastic 3 Arm Rotary Sprinkler",
        "description": "Plastic Base With Plastic 3 Arm Rotatory Sprinkler\r\nWith 3/4\" tool adaptor\r\nMeterial Breakdown: ABS and PP\r\nDimension：16.5*14*8cm\r\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "HPS23602 - Ingco Plastic 3 Arm Rotary Sprinkler",
        "images": [
            {
                "name": "[HPS23602] HPS23602 Plastic 3 Arm Rotatory Sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS23602%20-%20Ingco%20Plastic%203%20Arm%20Rotary%20Sprinkler/%5BHPS23602%5D%20HPS23602%20Plastic%203%20Arm%20Rotatory%20Sprinkler.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HPS33061 - Ingco 5 in 1 Plastic Turret Sprinkler",
        "name": "HPS33061 - Ingco 5 in 1 Plastic Turret Sprinkler",
        "description": "Plastic 5-In-1 Turret Sprinkler\r\n3/4\" tool adaptor\r\nMaterial:ABS\r\nNet weight:160g\r\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "HPS33061 - Ingco 5 in 1 Plastic Turret Sprinkler",
        "images": [
            {
                "name": "[HPS33061] HPS33061 Plastic Turret sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS33061%20-%20Ingco%205%20in%201%20Plastic%20Turret%20Sprinkler/%5BHPS33061%5D%20HPS33061%20Plastic%20Turret%20sprinkler.png"
            }
        ],
        "price": "715.00000308",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGC5001 - Total Gasoline Tiller (196cc)",
        "name": "TGC5001 - Total Gasoline Tiller (196cc)",
        "description": "Petrol Engine\r\nEngine power:4.8kW(6.5HP)\r\nTilling Scope(mm):900\r\nTilling depth(mm):150-300\r\nGear shifting:-1,2,0,1\r\nDriving model:Belt\r\nMax. torque(N.m/rpm):11/2500\r\nTransmission oil capacity(L):0.95\r\nPacked by wooden case",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TGC5001 - Total Gasoline Tiller (196cc)",
        "images": [
            {
                "name": "TGC5001.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGC5001%20-%20Total%20Gasoline%20Tiller%20(196cc)/TGC5001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "name": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "description": "Zongshen brand engine(The best one in China)\r\nDisplacement:141cc\r\nRated power:3.0Kw(4HP)\r\nRated speed: 2600rpm\r\nDrive type:Hand push\r\n4 stroke engine\r\nCutting height:25-75mm(7 positions)\r\nCutting width:460mm(18”)\r\nCatchervolume:60L\r\nDeck material:steel\r\nWheel size:6\" / 8\"\r\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "images": [
            {
                "name": "TGT141181.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGT141181%20-%20Total%20Gasoline%20Lawnmower%20(141cc)%20(4%20HP)/TGT141181.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "name": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "description": "Zongshen brand engine(The best one in China)\r\nDisplacement:196cc\r\n4 stroke engine\r\nRated power:3.5Kw(4.8HP)\r\nDisplacement:196cc\r\nRated speed: 3600rpm\r\n3 function:Catcher,side discharge, mulching,rear discharge\r\n4 stroke engine\r\nCutting height:28-80mm(7 positions)\r\nCutting width:510mm(20”)\r\nCatchervolume:60L\r\nDeck material:steel\r\nWheel size:8\"\"/10\"\"\r\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "images": [
            {
                "name": "TGT196201.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGT196201%20-%20Total%20Gasoline%20Lawnmower%20(4.8HP)/TGT196201.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-THT1516301 - Total 55cm Hedge Shears",
        "name": "THT1516301 - Total 55cm Hedge Shears",
        "description": "Head material: SK5\r\nLength:22-7/8\"\"(557mm)\r\nWavy blade for more efficiency when cutting large areas\r\nHeat treatment blade\r\nBlade painted teflon\r\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "THT1516301 - Total 55cm Hedge Shears",
        "images": [
            {
                "name": "THT1516301.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/THT1516301%20-%20Total%2055cm%20Hedge%20Shears/THT1516301.jpg"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP3202 - Total Gasoline Water Pump (2'')",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :28m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :550 Lit / min\r\nDIAMETER :2\" X 2\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :21 Kg",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TP3202 - Total Gasoline Water Pump (2'')",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP3302 - Total Gasoline Water Pump (3'')",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :32m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :1000 Lit / min\r\nDIAMETER :3\" X 3\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :25 Kg",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TP3302 - Total Gasoline Water Pump (3'')",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "name": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "description": "No-load speed :8000/min\r\nBlade diameter :255mm (3 teeth)\r\nCutting capacity :420mm\r\nEngine :2-stroke\r\nDisplacement :42.7cc\r\nFuel tank :1200ml (Mix ratio: 40:1)",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "images": [
            {
                "name": "TP5434421.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP5434421%20-%20Total%202HP%20(42%20cm)%20Petrol%20Brushcutter%20(Bush%20Cutter)/TP5434421.jpg"
            }
        ],
        "price": "19999.9999996",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "name": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "description": "Brand:YATO\r\nSymbol:YT-84892\r\nProduct Name:Gasoline Chainsaw 52CC\r\nEngine Displacement :52cc\r\nPower:2.1kw\r\nFuel Tank:0.50l\r\nOil Tank:0.24l\r\nChinese Chain & Bar:20\"\r\nEasy Start",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "images": [
            {
                "name": "YT-84892.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/YT-84892%20-%20Yato%20Gasoline%20Chainsaw%20(52cc)/YT-84892.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "name": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "description": "Symbol:YT-85255\r\nProduct Name:3 In 1 Gasoline Lawn Mower 20 Inch\r\nDISPLACEMENT:196CC\r\nENGINE MODEL:ZONGSHEN XP200                           \r\nPOWER MAX:3.5KW/2800RPM\r\nDRIVE:HAND PUSH\r\nCUTTING HEIGHTS:25-70MM WITH 7 GRADES\r\nCUTTING WIDTH:510MM\r\nDECK MATERIAL:STEEL\r\nFRONT/REAR WHEEL:8/10INCH,PP+PVC WITH BALL BEARING\r\nFABRIC GRASS CATCHER + HALF PLASTIC WITH LOGO PRINT\r\nADJUSTMENT SYSTEM: CENTRAL ADJUSTMENT\r\nHEIGHT ADJUSTMENT HANDLE WITH SOFT GRIP  FRONT PLASTIC COVER\r\nSIDE DISCHARGE, MULCHING, REAR CATCHER\r\nNOISE LEVEL: 98DB(A)\r\n\r\n- Versatile Functionality: Offers three mowing options – cutting, mulching, and bagging – to suit different lawn care needs.\r\n- Powerful Engine: Equipped with a robust gasoline engine for efficient and effective grass cutting, suitable for various lawn sizes.\r\n- 20-Inch Cutting Deck: The wide cutting deck enables quicker mowing by covering a larger area with each pass.\r\n- Adjustable Cutting Heights: Allows users to easily modify the cutting height for a customized lawn finish.\r\n- Durable Construction: Built with sturdy materials to withstand regular use and provide long-lasting performance.\r\n- Easy Maneuverability: Designed for comfortable handling and maneuvering, even on uneven terrains.\r\n- User-Friendly Features: Comes with simple controls and features that make it accessible for users of all experience levels.",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "images": [
            {
                "name": "YT-85255.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/YT-85255%20-%20Yato%20Gasoline%20Lawnmower%20(3%20in%201)/YT-85255.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-CSGX45 - Uyus Gasoline Chainsaw (45cc)",
        "name": "CSGX45 - Uyus Gasoline Chainsaw (45cc)",
        "description": "Engine: 45cc, 2-stroke gasoline engine.\r\nPower Output: 1.8 kW.\r\nGuide Bar Length: 18 inches / 45 cm.\r\nUsage: Ideal for professional wood cutting, trimming, and logging.\r\nDesign: Compact, durable, and lightweight for easier handling.",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "CSGX45 - Uyus Gasoline Chainsaw (45cc)",
        "images": [
            {
                "name": "CSGX45_2_400x.webp",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/CSGX45%20-%20Uyus%20Gasoline%20Chainsaw%20(45cc)/CSGX45_2_400x.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "name": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "description": "Displacement:31cc\r\nRated power:0.7Kw(1.1HP)\r\nMax speed：9300rpm\r\nMax cutting path:480mm\r\nSpool liner:2.4mmx4m\r\nBlade diameter:255mm(3teeth)\r\nFuel tank capacity:700ml\r\nPowerful 4-stroke motor\r\nWith 2 function:trimmer and cutter\r\nAir cooled engine,single cylinder\r\nWith line spool ALS25405\r\nWith bush cutter blade ABCB05\r\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "images": [
            {
                "name": "[GBC53144141] GBC53144141 GASOLINE GRASS TRIMMER & BUSH CUTTER 31CC.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC53144141%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(31cc)/%5BGBC53144141%5D%20GBC53144141%20GASOLINE%20GRASS%20TRIMMER%20&%20BUSH%20CUTTER%2031CC.png"
            }
        ],
        "price": "32500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "name": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "description": "Displacement:52cc\r\nRated power:1.4Kw(2.2HP)\r\nMax speed:8000rpm\r\nMax cutting path:420mm\r\nSpool liner:2.4mmx4m\r\nBlade diameter:255mm(3teeth)\r\nFuel tank capacity:1200ml\r\nPowerful 2-stroke motor\r\nWith 2 function:trimmer and cutter\r\nAir cooled engine,single cylinder\r\nWith line spool ALS25405\r\nWith bush cutter blade ABCB05\r\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "images": [
            {
                "name": "[GBC5524421] GBC5524421 GASOLINE GRASS TRIMMER & BUSH CUTTER 52CC.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC5524421%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(52cc)/%5BGBC5524421%5D%20GBC5524421%20GASOLINE%20GRASS%20TRIMMER%20&%20BUSH%20CUTTER%2052CC.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-GDB80551 - Ingco Gasoline Hammer",
        "name": "GDB80551 - Ingco Gasoline Hammer",
        "description": "Displacement(ml):80\r\nRated power(Kw):2.0\r\nMax output(Kw):2.3\r\nNo load speed:4250rpm\r\nImpact rate:1300bpm\r\nImpact energy:55J\r\nFuel consumption(L/h):1.8L/h\r\nOil tank capacity(L):1.2L\r\nPetrol-oil mixture:50:1\r\nDry weight(Kg):23\r\nSquare chuck system\r\nAir-cooled,2 cycle single cylinder\r\nIncluding 2pcs chisels\r\nPacked by carton with foam",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "GDB80551 - Ingco Gasoline Hammer",
        "images": [
            {
                "name": "[GDB80551] GDB80551 GASOLINE HAMMER 2.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GDB80551%20-%20Ingco%20Gasoline%20Hammer/%5BGDB80551%5D%20GDB80551%20GASOLINE%20HAMMER%202.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGC5001 - Total Gasoline Tiller (196cc)",
        "name": "TGC5001 - Total Gasoline Tiller (196cc)",
        "description": "Petrol Engine\r\nEngine power:4.8kW(6.5HP)\r\nTilling Scope(mm):900\r\nTilling depth(mm):150-300\r\nGear shifting:-1,2,0,1\r\nDriving model:Belt\r\nMax. torque(N.m/rpm):11/2500\r\nTransmission oil capacity(L):0.95\r\nPacked by wooden case",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TGC5001 - Total Gasoline Tiller (196cc)",
        "images": [
            {
                "name": "TGC5001.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGC5001%20-%20Total%20Gasoline%20Tiller%20(196cc)/TGC5001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "name": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "description": "Zongshen brand engine(The best one in China)\r\nDisplacement:141cc\r\nRated power:3.0Kw(4HP)\r\nRated speed: 2600rpm\r\nDrive type:Hand push\r\n4 stroke engine\r\nCutting height:25-75mm(7 positions)\r\nCutting width:460mm(18”)\r\nCatchervolume:60L\r\nDeck material:steel\r\nWheel size:6\" / 8\"\r\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "images": [
            {
                "name": "TGT141181.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGT141181%20-%20Total%20Gasoline%20Lawnmower%20(141cc)%20(4%20HP)/TGT141181.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "name": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "description": "Zongshen brand engine(The best one in China)\r\nDisplacement:196cc\r\n4 stroke engine\r\nRated power:3.5Kw(4.8HP)\r\nDisplacement:196cc\r\nRated speed: 3600rpm\r\n3 function:Catcher,side discharge, mulching,rear discharge\r\n4 stroke engine\r\nCutting height:28-80mm(7 positions)\r\nCutting width:510mm(20”)\r\nCatchervolume:60L\r\nDeck material:steel\r\nWheel size:8\"\"/10\"\"\r\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "images": [
            {
                "name": "TGT196201.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGT196201%20-%20Total%20Gasoline%20Lawnmower%20(4.8HP)/TGT196201.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP1016-2 - Total Gasoline Floor Saw",
        "name": "TP1016-2 - Total Gasoline Floor Saw",
        "description": "Gasoline engine\r\nEngine power:9.6kW(13HP)\r\nWeight:120kg\r\nMax.cutting depth:14cm(5.5\")\r\nBlade size:30-45cm(12\"-18\")\r\nDepth adjustment:Handle rotation\r\nDriving:Manual push\r\nWater tank capacity:35L\r\nFuel tank:2.8L\r\nBlade not included\r\nPacked by wooden case",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP1016-2 - Total Gasoline Floor Saw",
        "images": [
            {
                "name": "TP1016-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP1016-2%20-%20Total%20Gasoline%20Floor%20Saw/TP1016-2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP3202 - Total Gasoline Water Pump (2'')",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :28m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :550 Lit / min\r\nDIAMETER :2\" X 2\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :21 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP3202 - Total Gasoline Water Pump (2'')",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP3302 - Total Gasoline Water Pump (3'')",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :32m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :1000 Lit / min\r\nDIAMETER :3\" X 3\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :25 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP3302 - Total Gasoline Water Pump (3'')",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "name": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "description": "No-load speed :8000/min\r\nBlade diameter :255mm (3 teeth)\r\nCutting capacity :420mm\r\nEngine :2-stroke\r\nDisplacement :42.7cc\r\nFuel tank :1200ml (Mix ratio: 40:1)",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "images": [
            {
                "name": "TP5434421.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP5434421%20-%20Total%202HP%20(42%20cm)%20Petrol%20Brushcutter%20(Bush%20Cutter)/TP5434421.jpg"
            }
        ],
        "price": "19999.9999996",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP630-2 - Total Gasoline Concrete Vibrator",
        "name": "TP630-2 - Total Gasoline Concrete Vibrator",
        "description": "Gasoline engine\r\nEngine power:4.0kW(5.5HP）\r\nClaw type coupling\r\nNot included vibrator poker\r\nSuitalbe for item TPVP1381,TPVP1451,TPVP1601\r\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP630-2 - Total Gasoline Concrete Vibrator",
        "images": [
            {
                "name": "TP630-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP630-2%20-%20Total%20Gasoline%20Concrete%20Vibrator/TP630-2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP7100-2E - TOTAL Gasoline plate compactor (90Kgs)",
        "name": "TP7100-2E - TOTAL Gasoline plate compactor (90Kgs)",
        "description": "Gasoline engine\r\nEngine power:4.8kW(6.5HP)\r\nWeight:90kg\r\nFrequency:4200VPM\r\nCentrifugal force:15kN\r\nCompaction depth:30cm\r\nTravel speed:45cm/s\r\nEfficiency:660㎡/Hr\r\nPlate size:56x44cm\r\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP7100-2E - TOTAL Gasoline plate compactor (90Kgs)",
        "images": [
            {
                "name": "TP7100-2E.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP7100-2E%20-%20TOTAL%20Gasoline%20plate%20compactor%20(90Kgs)/TP7100-2E.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TP7125-2 - TOTAL GASOLINE REVERSIBLE PLATE COMPATOR (196cc) (6.5HP) (127Kg)",
        "name": "TP7125-2 - TOTAL GASOLINE REVERSIBLE PLATE COMPATOR (196cc) (6.5HP) (127Kg)",
        "description": "DISPLACEMENT :196cc\r\nPOWER :4.8kw / 6.5HP\r\nFREQUENCY :4.300VPM\r\nCENTRIFUGAL FORCE :25Kn\r\nCOMPACTION DEPTH :30cm\r\nTRAVEL SPEED :25cm / s\r\nEFFICIENCY :500m2 / ΩΡΑ\r\nPLATE SIZE :63 Χ 40cm\r\nWEIGHT :126 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "TP7125-2 - TOTAL GASOLINE REVERSIBLE PLATE COMPATOR (196cc) (6.5HP) (127Kg)",
        "images": [
            {
                "name": "TP7125-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP7125-2%20-%20TOTAL%20GASOLINE%20REVERSIBLE%20PLATE%20COMPATOR%20(196cc)%20(6.5HP)%20(127Kg)/TP7125-2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "name": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "description": "Brand:YATO\r\nSymbol:YT-84892\r\nProduct Name:Gasoline Chainsaw 52CC\r\nEngine Displacement :52cc\r\nPower:2.1kw\r\nFuel Tank:0.50l\r\nOil Tank:0.24l\r\nChinese Chain & Bar:20\"\r\nEasy Start",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "images": [
            {
                "name": "YT-84892.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/YT-84892%20-%20Yato%20Gasoline%20Chainsaw%20(52cc)/YT-84892.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "name": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "description": "Symbol:YT-85255\r\nProduct Name:3 In 1 Gasoline Lawn Mower 20 Inch\r\nDISPLACEMENT:196CC\r\nENGINE MODEL:ZONGSHEN XP200                           \r\nPOWER MAX:3.5KW/2800RPM\r\nDRIVE:HAND PUSH\r\nCUTTING HEIGHTS:25-70MM WITH 7 GRADES\r\nCUTTING WIDTH:510MM\r\nDECK MATERIAL:STEEL\r\nFRONT/REAR WHEEL:8/10INCH,PP+PVC WITH BALL BEARING\r\nFABRIC GRASS CATCHER + HALF PLASTIC WITH LOGO PRINT\r\nADJUSTMENT SYSTEM: CENTRAL ADJUSTMENT\r\nHEIGHT ADJUSTMENT HANDLE WITH SOFT GRIP  FRONT PLASTIC COVER\r\nSIDE DISCHARGE, MULCHING, REAR CATCHER\r\nNOISE LEVEL: 98DB(A)\r\n\r\n- Versatile Functionality: Offers three mowing options – cutting, mulching, and bagging – to suit different lawn care needs.\r\n- Powerful Engine: Equipped with a robust gasoline engine for efficient and effective grass cutting, suitable for various lawn sizes.\r\n- 20-Inch Cutting Deck: The wide cutting deck enables quicker mowing by covering a larger area with each pass.\r\n- Adjustable Cutting Heights: Allows users to easily modify the cutting height for a customized lawn finish.\r\n- Durable Construction: Built with sturdy materials to withstand regular use and provide long-lasting performance.\r\n- Easy Maneuverability: Designed for comfortable handling and maneuvering, even on uneven terrains.\r\n- User-Friendly Features: Comes with simple controls and features that make it accessible for users of all experience levels.",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "images": [
            {
                "name": "YT-85255.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/YT-85255%20-%20Yato%20Gasoline%20Lawnmower%20(3%20in%201)/YT-85255.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1010103 - Total 10 inch Adjustable Spanner-THT1010103 - Total 10 inch Adjustable Spanner",
        "name": "THT1010103 - Total 10 inch Adjustable Spanner",
        "description": "Range : 0-30mm\r\nMaterial : C45 Carbon Steel\r\nLength : 250mm (10 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT1010103.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT1010103%20-%20Total%2010%20inch%20Adjustable%20Spanner/THT1010103.jpg"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1010123 - Total 12 inch Adjustable Spanner-THT1010123 - Total 12 inch Adjustable Spanner",
        "name": "THT1010123 - Total 12 inch Adjustable Spanner",
        "description": "Range : 0-35mm\r\nMaterial : C45 Carbon Steel\r\nLength : 300mm (12 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT1010123.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT1010123%20-%20Total%2012%20inch%20Adjustable%20Spanner/THT1010123.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT101063 - Total 6 inch Adjustable Spanner-THT101063 - Total 6 inch Adjustable Spanner",
        "name": "THT101063 - Total 6 inch Adjustable Spanner",
        "description": "Range : 0-19mm\r\nMaterial : C45 Carbon Steel\r\nLength : 150mm (6 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT101063.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT101063%20-%20Total%206%20inch%20Adjustable%20Spanner/THT101063.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT101083 - Total 8 inch Adjustable Spanner-THT101083 - Total 8 inch Adjustable Spanner",
        "name": "THT101083 - Total 8 inch Adjustable Spanner",
        "description": "Range : 0-24mm\r\nMaterial : C45 Carbon Steel\r\nLength : 200mm (8 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT101083.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT101083%20-%20Total%208%20inch%20Adjustable%20Spanner/THT101083.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHK11091 - Ingco Hex Key Set-HHK11091 - Ingco Hex Key Set",
        "name": "HHK11091 - Ingco Hex Key Set",
        "description": "9pcs hex key set\r\nMaterial:S2\r\nSize:1.5mm,2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm.\r\nLong arm\r\nHeat treatment and chrome plate\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK11091.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK11091%20-%20Ingco%20Hex%20Key%20Set/HHK11091.jpg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHK11092 - Ingco Hex Key Set (9 Pcs)-HHK11092 - Ingco Hex Key Set (9 Pcs)",
        "name": "HHK11092 - Ingco Hex Key Set (9 Pcs)",
        "description": "9pcs hex key set\r\nMateria:S2\r\nSize:1.5mm,2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm.\r\nExtra-long arm\r\nHeat treatment and chrome plate\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK11092.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK11092%20-%20Ingco%20Hex%20Key%20Set%20(9%20Pcs)/HHK11092.jpg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHK13092 - Ingco Torx Key Set (9 Pcs)-HHK13092 - Ingco Torx Key Set (9 Pcs)",
        "name": "HHK13092 - Ingco Torx Key Set (9 Pcs)",
        "description": "9pcs torx key set\r\nMaterial:S2\r\nSize:T-10,T-15,T-20,T-25,T-27,T-30,T-40,T-45,T-50.\r\nExtra-long arm\r\nHeat treatment and chrome plate\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK13092.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK13092%20-%20Ingco%20Torx%20Key%20Set%20(9%20Pcs)/HHK13092.jpg"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1061826 - Total 8 Pcs Hex Key Set-THT1061826 - Total 8 Pcs Hex Key Set",
        "name": "THT1061826 - Total 8 Pcs Hex Key Set",
        "description": "Portable pocket size.\r\nHeat treated and chrome plated.\r\nMaterial: Chromium-vanadium steel (Cr-V)\r\nSize\t2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 7mm, 8mm",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "THT1061826.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/THT1061826%20-%20Total%208%20Pcs%20Hex%20Key%20Set/THT1061826.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1061846 - Total 8 Pcs Torx Key Set-THT1061846 - Total 8 Pcs Torx Key Set",
        "name": "THT1061846 - Total 8 Pcs Torx Key Set",
        "description": "8pcs torx key set( Pocket)\r\nSize：T9-T40\r\nMaterial：Cr-V\r\nHeat treatment and chrome plate",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "THT1061846.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/THT1061846%20-%20Total%208%20Pcs%20Torx%20Key%20Set/THT1061846.jpg"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT106191 - Total 9 pcs Hex Key Set-THT106191 - Total 9 pcs Hex Key Set",
        "name": "THT106191 - Total 9 pcs Hex Key Set",
        "description": "SPECIFICATIONS\r\n9pcs hex key set\r\nMaterial:S2\r\nSize:1.5mm*62.5mm,2mm*76mm,2.5mm*85.5mm,3mm*91mm,4mm*102mm, 5mm*118mm, 6mm*139mm, | 8mm*155mm, 10mm*177mm.\r\nLong arm\r\nHeat treatment and chrome plate\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "THT106191.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/THT106191%20-%20Total%209%20pcs%20Hex%20Key%20Set/THT106191.jpg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT106392 - Total 9 Pcs Torx Key Set-THT106392 - Total 9 Pcs Torx Key Set",
        "name": "THT106392 - Total 9 Pcs Torx Key Set",
        "description": "Specifications\r\nModel no.\tTHT106392\r\nMaterial\tChromium-vanadium steel (Cr-V)\r\nSize\tT10, T15, T20, T25, T27, T30, T40, T45, T50",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "THT106392.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/THT106392%20-%20Total%209%20Pcs%20Torx%20Key%20Set/THT106392.jpg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HCG0109 - Ingco Aluminium Caulking Gun-HCG0109 - Ingco Aluminium Caulking Gun",
        "name": "HCG0109 - Ingco Aluminium Caulking Gun",
        "description": "9\" aluminum caulking gun\r\nLength:230mm\r\nDiameter:51mm\r\nWith 1pcs plastic adaptor\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Caulking Guns",
        "images": [
            {
                "name": "[HCG0109] HCG0109 CAULKING GUN.png",
                "url": "/website%20products/Hand%20Tools/Caulking%20Guns/HCG0109%20-%20Ingco%20Aluminium%20Caulking%20Gun/%5BHCG0109%5D%20HCG0109%20CAULKING%20GUN.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT21309 - Total Skeleton Caulking Gun-THT21309 - Total Skeleton Caulking Gun",
        "name": "THT21309 - Total Skeleton Caulking Gun",
        "description": "9 Inch caulking gun\r\nAluminum handle for durability\r\nDouble push plate for added stability\r\nIncludes a needle for precision\r\nCompact design with a 2.2mm thickness",
        "category": "Hand Tools",
        "subcategory": "Caulking Guns",
        "images": [
            {
                "name": "d90eb3df-996a-43aa-a1ae-bcf55ad302f1.webp",
                "url": "/website%20products/Hand%20Tools/Caulking%20Guns/THT21309%20-%20Total%20Skeleton%20Caulking%20Gun/d90eb3df-996a-43aa-a1ae-bcf55ad302f1.webp"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Chalk Line Generic-Chalk Line Generic",
        "name": "Chalk Line Generic",
        "description": "Generic Chalk Line\r\n15m",
        "category": "Hand Tools",
        "subcategory": "Chalk Line",
        "images": [
            {
                "name": "WhatsApp Image 2025-01-17 at 12.27.49.jpeg",
                "url": "/website%20products/Hand%20Tools/Chalk%20Line/Chalk%20Line%20Generic/WhatsApp%20Image%202025-01-17%20at%2012.27.49.jpeg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKTF63 - Ingco File Set-HKTF63 - Ingco File Set",
        "name": "HKTF63 - Ingco File Set",
        "description": "6pcs File set\r\nLength:140mm\r\nDiameter:3mm\r\nFlat,Round,Half round,Square,Triangle,Knife\r\nWith two color handle\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HKTF63] HKTF63 6 PCS FILE SET.png",
                "url": "/website%20products/Hand%20Tools/Files/HKTF63%20-%20Ingco%20File%20Set/%5BHKTF63%5D%20HKTF63%206%20PCS%20FILE%20SET.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKTFW0308 - Ingco 3 pcs Wood File Set-HKTFW0308 - Ingco 3 pcs Wood File Set",
        "name": "HKTFW0308 - Ingco 3 pcs Wood File Set",
        "description": "Length:8“/200mm\r\nFlat wood file 1pcs\r\nHalf round wood file 1pcs\r\nRound wood file 1pcs\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HKTFW0308] HKTFW0308 3PCS WOOD FILE SET.png",
                "url": "/website%20products/Hand%20Tools/Files/HKTFW0308%20-%20Ingco%203%20pcs%20Wood%20File%20Set/%5BHKTFW0308%5D%20HKTFW0308%203PCS%20WOOD%20FILE%20SET.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSFF088 - Ingco Flat Steel File-HSFF088 - Ingco Flat Steel File",
        "name": "HSFF088 - Ingco Flat Steel File",
        "description": "Length:200mm\r\nT12 Steel\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HSFF088] HSFF088 FLAT STEEL FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HSFF088%20-%20Ingco%20Flat%20Steel%20File/%5BHSFF088%5D%20HSFF088%20FLAT%20STEEL%20FILE%20200MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSRF088 - Ingco Round Steel File-HSRF088 - Ingco Round Steel File",
        "name": "HSRF088 - Ingco Round Steel File",
        "description": "Length:200mm\r\nT12 Steel\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HSRF088] HSRF088 ROUND STEEL FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HSRF088%20-%20Ingco%20Round%20Steel%20File/%5BHSRF088%5D%20HSRF088%20ROUND%20STEEL%20FILE%20200MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HWFF088 - Ingco Flat Wood File-HWFF088 - Ingco Flat Wood File",
        "name": "HWFF088 - Ingco Flat Wood File",
        "description": "Length:200mm\r\nT12 Steel\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HWFF088] HWFF088 FLAT WOOD FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HWFF088%20-%20Ingco%20Flat%20Wood%20File/%5BHWFF088%5D%20HWFF088%20FLAT%20WOOD%20FILE%20200MM.png"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HWHF088 - Ingco Half-Round Wood File-HWHF088 - Ingco Half-Round Wood File",
        "name": "HWHF088 - Ingco Half-Round Wood File",
        "description": "Length:200mm\r\nT12 Steel\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HWHF088] HWHF088 HALF-ROUND WOOD FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HWHF088%20-%20Ingco%20Half-Round%20Wood%20File/%5BHWHF088%5D%20HWHF088%20HALF-ROUND%20WOOD%20FILE%20200MM.png"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HWRF088 - Ingco Round Wood File-HWRF088 - Ingco Round Wood File",
        "name": "HWRF088 - Ingco Round Wood File",
        "description": "Length:200mm\r\nT12 Steel\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HWRF088] HWRF088 ROUND WOOD FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HWRF088%20-%20Ingco%20Round%20Wood%20File/%5BHWRF088%5D%20HWRF088%20ROUND%20WOOD%20FILE%20200MM.png"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DLG204 - Deli 4 inch G-Clamp-DLG204 - Deli 4 inch G-Clamp",
        "name": "DLG204 - Deli 4 inch G-Clamp",
        "description": "Size : 4 Inches\r\nClamping Range : 0-50mm\r\nMaterial : High Quality Cast Iron\r\nHandle Design : T-Shaped Rotating Handle",
        "category": "Hand Tools",
        "subcategory": "G-Clamps",
        "images": [
            {
                "name": "WhatsApp Image 2025-07-15 at 10.21.34.jpeg",
                "url": "/website%20products/Hand%20Tools/G-Clamps/DLG204%20-%20Deli%204%20inch%20G-Clamp/WhatsApp%20Image%202025-07-15%20at%2010.21.34.jpeg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DLG205 - Deli 5 inch G-Clamp-DLG205 - Deli 5 inch G-Clamp",
        "name": "DLG205 - Deli 5 inch G-Clamp",
        "description": "Size : 5 Inches\r\nMaterial : High Quality Cast Iron\r\nHandle Design : T-Shaped Rotating Handle",
        "category": "Hand Tools",
        "subcategory": "G-Clamps",
        "images": [
            {
                "name": "WhatsApp Image 2025-07-15 at 10.21.35.jpeg",
                "url": "/website%20products/Hand%20Tools/G-Clamps/DLG205%20-%20Deli%205%20inch%20G-Clamp/WhatsApp%20Image%202025-07-15%20at%2010.21.35.jpeg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DLG206 - Deli 6 inch G-Clamp-DLG206 - Deli 6 inch G-Clamp",
        "name": "DLG206 - Deli 6 inch G-Clamp",
        "description": "",
        "category": "Hand Tools",
        "subcategory": "G-Clamps",
        "images": [
            {
                "name": "WhatsApp Image 2025-08-08 at 10.27.28.jpeg",
                "url": "/website%20products/Hand%20Tools/G-Clamps/DLG206%20-%20Deli%206%20inch%20G-Clamp/WhatsApp%20Image%202025-08-08%20at%2010.27.28.jpeg"
            }
        ],
        "price": "1150",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "YT-07042 - Yato Grease Gun-YT-07042 - Yato Grease Gun",
        "name": "YT-07042 - Yato Grease Gun",
        "description": "Model: YT-07042\r\nCapacity: 600cc\r\nMaterial: Aluminum gun head and T-handle, zinc tube, and handle\r\nOperating Pressure: 27-41 MPa\r\nDimensions: 330x6.4x1.2 mm\r\nWeight: 1.95 kg",
        "category": "Hand Tools",
        "subcategory": "Grease Guns",
        "images": [
            {
                "name": "07042_1-png.webp",
                "url": "/website%20products/Hand%20Tools/Grease%20Guns/YT-07042%20-%20Yato%20Grease%20Gun/07042_1-png.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "0-15-218 - Stanley Junior Hacksaw-0-15-218 - Stanley Junior Hacksaw",
        "name": "0-15-218 - Stanley Junior Hacksaw",
        "description": "Brand: Stanley\r\nModel Number: 0-15-218\r\nType: Junior Hacksaw\r\nBlade Length: 6 inches (150 mm)\r\nFrame Material: Metal\r\nHandle Material: Plastic with ergonomic design\r\nWeight: Approximately 0.2 pounds (90 grams)",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "Ecomm_Large-0-15-218_3.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/0-15-218%20-%20Stanley%20Junior%20Hacksaw/Ecomm_Large-0-15-218_3.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "EDL353206 - Deli Mini Hacksaw Frame (150mm)-EDL353206 - Deli Mini Hacksaw Frame (150mm)",
        "name": "EDL353206 - Deli Mini Hacksaw Frame (150mm)",
        "description": "Material: 65Mn steel blade\r\nHandle: Ergonomic PVC-coated handle\r\nCutting Capacity: Suitable for wood, PVC, plastic, and light metals\r\nSize: 6 inches (150mm)\r\nPackage Type: Paper card\r\nWeight: Lightweight and easy to handle\r\nUsage: Ideal for detailed and precision cutting tasks",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "1_20__3.webp",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/EDL353206%20-%20Deli%20Mini%20Hacksaw%20Frame%20(150mm)/1_20__3.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "MC12PL - Uyus Hacksaw Frame-MC12PL - Uyus Hacksaw Frame",
        "name": "MC12PL - Uyus Hacksaw Frame",
        "description": "1. Flat Steel frame\r\n2. With Bi-metal blade, 24TPI\r\n3. ABS handle\r\n4. Packed by color sleeve\r\n12″",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "a2421a5178b4d48d2fb4330859e94793mc12pl.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/MC12PL%20-%20Uyus%20Hacksaw%20Frame/a2421a5178b4d48d2fb4330859e94793mc12pl.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT541036 - Total Hacksaw Frame-THT541036 - Total Hacksaw Frame",
        "name": "THT541036 - Total Hacksaw Frame",
        "description": "1 pc 65 Manganese (Mn) spring steel blade\r\nSize\t300mm (12\")",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "THT541036.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/THT541036%20-%20Total%20Hacksaw%20Frame/THT541036.jpg"
            }
        ],
        "price": "425",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT54106 - Total Hacksaw Frame (Industrial)-THT54106 - Total Hacksaw Frame (Industrial)",
        "name": "THT54106 - Total Hacksaw Frame (Industrial)",
        "description": "LENGTH\t300mm",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "THT54106.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/THT54106%20-%20Total%20Hacksaw%20Frame%20(Industrial)/THT54106.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HCH81016 - Ingco 160z Claw Hammer-HCH81016 - Ingco 160z Claw Hammer",
        "name": "HCH81016 - Ingco 160z Claw Hammer",
        "description": "Weight:16oz/450g\r\nMagnetic nail function\r\nInnovated drop-forged hammer head\r\nHeat treatment,45# carbon steel\r\nStrong three-color fiberglass handle for comfortable grip\r\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Hammers",
        "images": [
            {
                "name": "[HCH81016] HCH81016 CLAW HAMMER 16oz_.png",
                "url": "/website%20products/Hand%20Tools/Hammers/HCH81016%20-%20Ingco%20160z%20Claw%20Hammer/%5BHCH81016%5D%20HCH81016%20CLAW%20HAMMER%2016oz_.png"
            }
        ],
        "price": "700.0000047999999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT9391 - Total Planer (235mm)-THT9391 - Total Planer (235mm)",
        "name": "THT9391 - Total Planer (235mm)",
        "description": "LENGTH\t235mm\r\nPLANING WIDTH $ DEPTH\t44 X 2mm\r\nWEIGHT\t0.9 Kg",
        "category": "Hand Tools",
        "subcategory": "Hand Planers",
        "images": [
            {
                "name": "THT9391.jpg",
                "url": "/website%20products/Hand%20Tools/Hand%20Planers/THT9391%20-%20Total%20Planer%20(235mm)/THT9391.jpg"
            }
        ],
        "price": "1050",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHAS08400 - Ingco 16 inch Hand Saw-HHAS08400 - Ingco 16 inch Hand Saw",
        "name": "HHAS08400 - Ingco 16 inch Hand Saw",
        "description": "",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08400] HHAS08400 HAND SAW 16_-400MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08400%20-%20Ingco%2016%20inch%20Hand%20Saw/%5BHHAS08400%5D%20HHAS08400%20HAND%20SAW%2016_-400MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHAS08450 - Ingco 18 inch Hand Saw-HHAS08450 - Ingco 18 inch Hand Saw",
        "name": "HHAS08450 - Ingco 18 inch Hand Saw",
        "description": "Size：18\"(450mm)\r\nThickness：0.9mm, 7TPI\r\nMaterial:65Mn\r\nWith teeth protector\r\nHeat treatment\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08450] HHAS08450 HAND SAW 18_-450MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08450%20-%20Ingco%2018%20inch%20Hand%20Saw/%5BHHAS08450%5D%20HHAS08450%20HAND%20SAW%2018_-450MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHAS08500 - Ingco 20 inch Hand Saw-HHAS08500 - Ingco 20 inch Hand Saw",
        "name": "HHAS08500 - Ingco 20 inch Hand Saw",
        "description": "Size：20\"(500mm)\r\nThickness：0.9mm, 7TPI\r\nMaterial:65Mn\r\nWith teeth protector\r\nHeat treatment\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08500] HHAS08500 HAND SAW 20_-500MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08500%20-%20Ingco%2020%20inch%20Hand%20Saw/%5BHHAS08500%5D%20HHAS08500%20HAND%20SAW%2020_-500MM.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT55400 - Total 16 inch (400mm) Hand Saw-THT55400 - Total 16 inch (400mm) Hand Saw",
        "name": "THT55400 - Total 16 inch (400mm) Hand Saw",
        "description": "SPECIFICATIONS\r\nLength:400mm/16\"\"\r\nThickness:0.9mm, 7TPI\r\nMaterial：65Mn\r\nWith teeth protector\r\nHeat treatment\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "THT55400.jpg",
                "url": "/website%20products/Hand%20Tools/Handsaws/THT55400%20-%20Total%2016%20inch%20(400mm)%20Hand%20Saw/THT55400.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT55450 - Total 18 Inch Handsaw (450mm)-THT55450 - Total 18 Inch Handsaw (450mm)",
        "name": "THT55450 - Total 18 Inch Handsaw (450mm)",
        "description": "SPECIFICATIONS\r\nLength:450mm/18\"\"\r\nThickness:0.9mm, 7TPI\r\nMaterial：65Mn\r\nWith teeth protector\r\nHeat treatment\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "THT55450.jpg",
                "url": "/website%20products/Hand%20Tools/Handsaws/THT55450%20-%20Total%2018%20Inch%20Handsaw%20(450mm)/THT55450.jpg"
            }
        ],
        "price": "693.0000021999999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "1609200243 - Bosch Hole Cutters Set (8 Pcs)-1609200243 - Bosch Hole Cutters Set (8 Pcs)",
        "name": "1609200243 - Bosch Hole Cutters Set (8 Pcs)",
        "description": "Product overview\r\n• Brand: Bosch Professional Accessories\r\n• Part number: 1609200243\r\n• Product type: Hole saw (hole cutter) set\r\n• Application: Wood and plastics\r\n• Number of pieces: 8\r\n• EAN: 3165140004442\r\n\r\nIncluded hole saw diameters\r\n• 25 mm\r\n• 32 mm\r\n• 38 mm\r\n• 44 mm\r\n• 51 mm\r\n• 57 mm\r\n• 63 mm\r\n• 68 mm\r\n\r\nTechnical specifications\r\n• Cutting depth: 27 mm\r\n• Material: Die-cast aluminium\r\n• Shank type: Hexagon socket\r\n\r\nTypical applications\r\n• Drilling clean holes in wood and plastic\r\n• Electrical installations (junction boxes)\r\n• Ventilation and general fitting work",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "o178579v82_1609200243_bo_pro_p_f_1.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/1609200243%20-%20Bosch%20Hole%20Cutters%20Set%20(8%20Pcs)/o178579v82_1609200243_bo_pro_p_f_1.webp"
            },
            {
                "name": "o183824v82_1609200243_bo_pro_u_a_1.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/1609200243%20-%20Bosch%20Hole%20Cutters%20Set%20(8%20Pcs)/o183824v82_1609200243_bo_pro_u_a_1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608580803 - HSS Bi-Metal Holesaw Set (Plumbers) (9 Pcs)-2608580803 - HSS Bi-Metal Holesaw Set (Plumbers) (9 Pcs)",
        "name": "2608580803 - HSS Bi-Metal Holesaw Set (Plumbers) (9 Pcs)",
        "description": "Product overview\r\n• Brand: Bosch Professional\r\n• Part number: 2608580803\r\n• Product type: HSS bi-metal hole saw (plumber’s set)\r\n• Number of pieces: 9\r\n\r\nSet contents\r\n• 6 × HSS bi-metal hole saws:\r\n– 19 mm\r\n– 22 mm\r\n– 29 mm\r\n– 38 mm\r\n– 44 mm\r\n– 57 mm\r\n• 2 × hex-shank hole saw arbors (for different diameters)\r\n• 2 × HSS pilot drill bits\r\n• 1 × Allen key\r\n• Storage case\r\n\r\nTechnical specifications\r\n• Material: Bi-metal HSS (high-speed steel) with cobalt alloy\r\n• Tooth design: Progressive tooth pitch for faster, smoother cutting\r\n• Cutting depth: Approx. 38–40 mm (varies by size)\r\n• Shank type: Hex shank (arbors)",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "o91429v82_Lochsaegenkoffer.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/2608580803%20-%20HSS%20Bi-Metal%20Holesaw%20Set%20(Plumbers)%20(9%20Pcs)/o91429v82_Lochsaegenkoffer.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "2608580804 - HSS Bi-Metal Holesaw Set (Electricians) (9 Pcs)-2608580804 - HSS Bi-Metal Holesaw Set (Electricians) (9 Pcs)",
        "name": "2608580804 - HSS Bi-Metal Holesaw Set (Electricians) (9 Pcs)",
        "description": "Product overview\r\n• Brand: Bosch Professional\r\n• Part number: 2608580804\r\n• Product type: HSS bi-metal hole saw set (Electrician’s set)\r\n• Number of pieces: 9\r\n\r\nSet contents\r\n• 6 × HSS bi-metal hole saws:\r\n– 20 mm\r\n– 25 mm\r\n– 32 mm\r\n– 38 mm\r\n– 51 mm\r\n– 64 mm\r\n• 2 × hex-shank hole saw arbors (for different diameters)\r\n• 1 × Allen key\r\n• Storage case\r\n\r\nTechnical specifications\r\n• Material: HSS bi-metal with cobalt alloy for extended life\r\n• Tooth design: Progressive tooth pitch for smoother, faster cutting\r\n• Cutting depth: Approx. 38–40 mm (varies by size)\r\n• Arbor shank type: Hex shank\r\n\r\nSuitable materials\r\n• Mild steel and stainless steel\r\n• Aluminium, copper, brass\r\n• PVC and other plastics\r\n• Wood and plasterboard\r\n\r\nTypical applications\r\n• Electrical installations such as conduit and switch boxes\r\n• HVAC and general mechanical work\r\n• Trade and maintenance drilling",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "o91429v82_Lochsaegenkoffer.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/2608580804%20-%20HSS%20Bi-Metal%20Holesaw%20Set%20(Electricians)%20(9%20Pcs)/o91429v82_Lochsaegenkoffer.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "EDH-SKZ002-E1 - Deli Hole Saw Adaptor-EDH-SKZ002-E1 - Deli Hole Saw Adaptor",
        "name": "EDH-SKZ002-E1 - Deli Hole Saw Adaptor",
        "description": "Arbor for hole saw\r\nHex shank 7/16\"\r\nFit hole saws 32mm to\r\n230mm\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "d4sinptuo7mm6fs7j8551oh7n7jcuali.png",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/EDH-SKZ002-E1%20-%20Deli%20Hole%20Saw%20Adaptor/d4sinptuo7mm6fs7j8551oh7n7jcuali.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SEO011 - Uyus Hole Saw Set (11 Pcs)-SEO011 - Uyus Hole Saw Set (11 Pcs)",
        "name": "SEO011 - Uyus Hole Saw Set (11 Pcs)",
        "description": "• 11-Piece Set: Offers multiple sizes for versatile hole cutting needs\r\n• Hardened Steel Construction: Ensures durability and long service life\r\n• Clean & Accurate Cuts: Produces smooth, precise circular holes\r\n• Wide Tool Compatibility: Fits most electric and cordless drills",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "1-Copy-157.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO011%20-%20Uyus%20Hole%20Saw%20Set%20(11%20Pcs)/1-Copy-157.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SEO015 - Uyus Hole Saw Set (15 Pcs)-SEO015 - Uyus Hole Saw Set (15 Pcs)",
        "name": "SEO015 - Uyus Hole Saw Set (15 Pcs)",
        "description": "1. Material: Carbon Steel\r\n# 45\r\n2. 1.1 mm Thickness\r\n3. Hardness Of 42 - 45 Hrc\r\n4. For Drilling Wood,\r\nPlywood, Mdf, Etc\r\n5. Packed By By Blow\r\nMould Box 1. 2\r\nMandrels 3/8”\r\n2. 1 Mandrels 1/4''\r\n3. 1 Hex Key 2.5",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "sierra-copa-uyustools-15-piezas-seo015.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO015%20-%20Uyus%20Hole%20Saw%20Set%20(15%20Pcs)/sierra-copa-uyustools-15-piezas-seo015.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SEO205 - Uyus Carbide Gritted Hole Saw Set-SEO205 - Uyus Carbide Gritted Hole Saw Set",
        "name": "SEO205 - Uyus Carbide Gritted Hole Saw Set",
        "description": "",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "WhatsApp Image 2025-02-04 at 15.46.42 (1).jpeg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO205%20-%20Uyus%20Carbide%20Gritted%20Hole%20Saw%20Set/WhatsApp%20Image%202025-02-04%20at%2015.46.42%20(1).jpeg"
            },
            {
                "name": "WhatsApp Image 2025-02-04 at 15.46.42 (2).jpeg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO205%20-%20Uyus%20Carbide%20Gritted%20Hole%20Saw%20Set/WhatsApp%20Image%202025-02-04%20at%2015.46.42%20(2).jpeg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SEO207 - Uyus Carbide Gritted Hole Saw Set (7 Pcs)-SEO207 - Uyus Carbide Gritted Hole Saw Set (7 Pcs)",
        "name": "SEO207 - Uyus Carbide Gritted Hole Saw Set (7 Pcs)",
        "description": "1. Tungsten Carbide\r\nTipped Teeth With\r\nHardness Of 85 Hra\r\n2. Diameters Of 33,53,67,\r\n73, 83mm And Cutting\r\nDepth To 63mm\r\n3. For Cutting Wall,\r\nPlasterboard, Interior\r\nCeiling And Metal Fascia\r\nPanels\r\n4. Packed By Color Box.",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "002-00964.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO207%20-%20Uyus%20Carbide%20Gritted%20Hole%20Saw%20Set%20(7%20Pcs)/002-00964.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TACSH0132 - Total Hole Saw Set (13 Pcs)-TACSH0132 - Total Hole Saw Set (13 Pcs)",
        "name": "TACSH0132 - Total Hole Saw Set (13 Pcs)",
        "description": "13 Pcs Bi-metal hole saw set\r\nMaterial: HSS M3 Bi-metal\r\nSize:19mm(3/4\"\")/22mm(7/8\"\")/29mm(1-1/8\"\")/35mm(1-3/8\"\")/38mm(1-1/2\"\")/44mm(1-3/4\"\")/51mm(2\"\")/57mm(2-1/4\"\")/64mm(2-1/2\"\")\r\n1 pcs arbor:3/8\"\" Hex Shank,Fit Size:9/16\"\"~1-3/16\"\"\r\n1 pcs arbor:7/16\"\" Hex Shank,Fit Size:1-1/4\"\"~8-17/64\"\"\r\n1 pcs adapter arbors with 1/2-20 threads to fit hole saws 5/8-18 threads\r\n1 pcs pilot drill\r\n1 pcs hex key wrench\r\nPacked by plastic case",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "TACSH0132.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/TACSH0132%20-%20Total%20Hole%20Saw%20Set%20(13%20Pcs)/TACSH0132.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL350042 - Deli 43mm Pipe Cutter-DL350042 - Deli 43mm Pipe Cutter",
        "name": "DL350042 - Deli 43mm Pipe Cutter",
        "description": "65Mn Stainless steel blade, waterproof and rust-proof\r\nAluminum alloy body, lightweight and durable\r\nRatchet structure, easy and effortless cuttin",
        "category": "Hand Tools",
        "subcategory": "PVC Pipe Cutters",
        "images": [
            {
                "name": "edl350042-2.webp",
                "url": "/website%20products/Hand%20Tools/PVC%20Pipe%20Cutters/DL350042%20-%20Deli%2043mm%20Pipe%20Cutter/edl350042-2.webp"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Generic Paint Brushes-Generic Paint Brushes",
        "name": "Generic Paint Brushes",
        "description": "Generic Paintbrushes \r\n\r\nAvailable Sizes : \r\n2\"\r\n3\"\r\n4\"\r\n5\"\r\n6\"",
        "category": "Hand Tools",
        "subcategory": "Paint Brushes and Paint Rollers",
        "images": [
            {
                "name": "2.jpg",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/Generic%20Paint%20Brushes/2.jpg"
            },
            {
                "name": "3.jpg",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/Generic%20Paint%20Brushes/3.jpg"
            },
            {
                "name": "4.jpg",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/Generic%20Paint%20Brushes/4.jpg"
            },
            {
                "name": "5.jpg",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/Generic%20Paint%20Brushes/5.jpg"
            },
            {
                "name": "6.jpg",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/Generic%20Paint%20Brushes/6.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT170806 - Total 8 inch Pipe Wrench-THT170806 - Total 8 inch Pipe Wrench",
        "name": "THT170806 - Total 8 inch Pipe Wrench",
        "description": "Size:8\" (200mm)\r\nMax clamping diameter:27mm\r\nMobile jaw drop-forged with high quality carbon steel\r\nInactivate treatment\r\nBody material:ductile cast iron\r\nBlack finish and polish\r\nSolid rivet\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "THT170806.jpg",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/THT170806%20-%20Total%208%20inch%20Pipe%20Wrench/THT170806.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT171006 - Total 10 inch Pipe Wrench-THT171006 - Total 10 inch Pipe Wrench",
        "name": "THT171006 - Total 10 inch Pipe Wrench",
        "description": "Size:10\" (250mm)\r\nMax clamping diameter:34mm\r\nMobile jaw drop-forged with high quality carbon steel\r\nInactivate treatment\r\nBody material:ductile cast iron\r\nBlack finish and polish\r\nSolid rivet\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "THT171006.jpg",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/THT171006%20-%20Total%2010%20inch%20Pipe%20Wrench/THT171006.jpg"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT171206 - Total 12 inch Pipe Wrench-THT171206 - Total 12 inch Pipe Wrench",
        "name": "THT171206 - Total 12 inch Pipe Wrench",
        "description": "Size:12\"\" (300mm)\r\nMax clamping diameter:42mm\r\nMobile jaw drop-forged with high quality carbon steel\r\nInactivate treatment\r\nBody material:ductile cast iron\r\nBlack finish and polish\r\nSolid rivet\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "THT171206.jpg",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/THT171206%20-%20Total%2012%20inch%20Pipe%20Wrench/THT171206.jpg"
            }
        ],
        "price": "1100.00000572",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "BDHT81589 - Black and Decker Pump Pliers-BDHT81589 - Black and Decker Pump Pliers",
        "name": "BDHT81589 - Black and Decker Pump Pliers",
        "description": "Brand: Black+Decker\r\nType: Waterpump Pliers (also called Pelican Pliers or Groove Pliers)\r\nSize: 250mm (10 inches)\r\nMaterial: Forged Carbon Steel Jaws, Alloy Steel Body\r\nHandle: Bi-material soft grip for comfort and control\r\nDesign: Multi-groove adjustable jaw for various pipe/fitting sizes\r\nUses: Plumbing, automotive, general repairs, gripping curved objects",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "BDHT81589_1.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/BDHT81589%20-%20Black%20and%20Decker%20Pump%20Pliers/BDHT81589_1.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL2001 - Deli Curved Jaw Locking Pliers-DL2001 - Deli Curved Jaw Locking Pliers",
        "name": "DL2001 - Deli Curved Jaw Locking Pliers",
        "description": "Type : Locking Pliers with Round Jaws\r\nMaterial : High-carbon steel\r\nLength : 220 mm (8.6 inches)\r\nJaw Design : Rounded jaws for optimal grip\r\nAdjustability : Screw adjustment mechanism\r\nApplication : Automotive, industrial, and home use\r\nGrip : Non-slip ergonomic handle",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "DL2001.webp",
                "url": "/website%20products/Hand%20Tools/Pliers/DL2001%20-%20Deli%20Curved%20Jaw%20Locking%20Pliers/DL2001.webp"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HCP28168 - Ingco 6 inch Combination Pliers-HCP28168 - Ingco 6 inch Combination Pliers",
        "name": "HCP28168 - Ingco 6 inch Combination Pliers",
        "description": "Size: 6\"/160mm\r\nMaterial: Cr-V\r\nSurface treatment: black finish and polish\r\nTPR three color handle\r\nPacked by PP hanger",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "HCP28168.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/HCP28168%20-%20Ingco%206%20inch%20Combination%20Pliers/HCP28168.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HPC08208 - Ingco 8 inch Combination Pliers-HPC08208 - Ingco 8 inch Combination Pliers",
        "name": "HPC08208 - Ingco 8 inch Combination Pliers",
        "description": "Size:8\"/200mm\r\nMaterial: #55 Carbon steel\r\nSurface treatment: Polish and anti-rust oil\r\nTwo color handle\r\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "HCP08208.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/HPC08208%20-%20Ingco%208%20inch%20Combination%20Pliers/HCP08208.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1K0301 - Total 3 Pcs Pliers Set-THT1K0301 - Total 3 Pcs Pliers Set",
        "name": "THT1K0301 - Total 3 Pcs Pliers Set",
        "description": "Polished steel with anti-rust oil, two-tone rubber handle.\r\nPackage comes with,\r\n1 pc Long nose pliers: 160mm (6″)\r\n1 pc Diagonal cutting pliers: 160mm (6″)\r\n1 pc Combination pliers: 200mm (8″)",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "THT1K0301.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/THT1K0301%20-%20Total%203%20Pcs%20Pliers%20Set/THT1K0301.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TNA308 - Uyus End Cutting Pliers-TNA308 - Uyus End Cutting Pliers",
        "name": "TNA308 - Uyus End Cutting Pliers",
        "description": "Drop forged from carbon steel #55\r\nHeat treated & polished head\r\nBi-color dipped handle\r\nPacked by head double blister 8″",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "TNA308.webp",
                "url": "/website%20products/Hand%20Tools/Pliers/TNA308%20-%20Uyus%20End%20Cutting%20Pliers/TNA308.webp"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "YT-21152 - Yato 8 inch Insulated COmbination Pliers-YT-21152 - Yato 8 inch Insulated COmbination Pliers",
        "name": "YT-21152 - Yato 8 inch Insulated COmbination Pliers",
        "description": "7-inch insulated combination pliers for electrical work\r\nInsulated handles for protection against electrical shock (up to 1000V)\r\nMade from high-quality chrome vanadium steel\r\nCombination of cutting edges and gripping jaws for versatility\r\nSuitable for a wide range of electrical tasks\r\nDurable construction for long-lasting performance\r\nComfortable grip for extended use",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "21152-png.webp",
                "url": "/website%20products/Hand%20Tools/Pliers/YT-21152%20-%20Yato%208%20inch%20Insulated%20COmbination%20Pliers/21152-png.webp"
            }
        ],
        "price": "1450",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL1033D - Deli Precision Screwdriver Set-DL1033D - Deli Precision Screwdriver Set",
        "name": "DL1033D - Deli Precision Screwdriver Set",
        "description": "Key features:\r\n\r\n33-piece set for versatile repair applications\r\n\r\nPrecision bits suitable for delicate electronics\r\n\r\nMagnetic bit holder for easier handling\r\n\r\nCompact, organized storage case for convenience and portability\r\n\r\nSpecifications:\r\n\r\nNumber of pieces: 33\r\n\r\nApplications: Mobile phones, laptops, watches, small electronics",
        "category": "Hand Tools",
        "subcategory": "Precision Screwdrivers",
        "images": [
            {
                "name": "HAN.SCR.29620964_1726654482001.webp",
                "url": "/website%20products/Hand%20Tools/Precision%20Screwdrivers/DL1033D%20-%20Deli%20Precision%20Screwdriver%20Set/HAN.SCR.29620964_1726654482001.webp"
            }
        ],
        "price": "900",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKSD0718 - Ingco 7 Pcs Precision Set-HKSD0718 - Ingco 7 Pcs Precision Set",
        "name": "HKSD0718 - Ingco 7 Pcs Precision Set",
        "description": "7PCS precision screwdriver set\r\nnew design handle,New plastic box\r\nInclude:\r\nSL2.0*50，SL2.5*50，SL3.0*50，PH00*50，PH0*50，T6*50，T8*50\r\nMaterial:CR-V\r\nErgonomic comfort-grip handle\r\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Precision Screwdrivers",
        "images": [
            {
                "name": "HKSD0718.jpg",
                "url": "/website%20products/Hand%20Tools/Precision%20Screwdrivers/HKSD0718%20-%20Ingco%207%20Pcs%20Precision%20Set/HKSD0718.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "10209 - Tolsen Quick Bar Ratchet Clamp (4 Pcs)-10209 - Tolsen Quick Bar Ratchet Clamp (4 Pcs)",
        "name": "10209 - Tolsen Quick Bar Ratchet Clamp (4 Pcs)",
        "description": "• Hard plastic body\r\n• Black finished bar\r\n• Soft non-marking pads\r\n• Packing: paper hanger\r\n\r\n2pcs 4″\r\n2pcs 6″",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "4PCS-QUICK-RATCHET-BAR-CLAMP-SET-768x768.jpg.webp",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/10209%20-%20Tolsen%20Quick%20Bar%20Ratchet%20Clamp%20(4%20Pcs)/4PCS-QUICK-RATCHET-BAR-CLAMP-SET-768x768.jpg.webp"
            }
        ],
        "price": "2750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL110112 - Deli 12-inch Quick Bar Clamp-DL110112 - Deli 12-inch Quick Bar Clamp",
        "name": "DL110112 - Deli 12-inch Quick Bar Clamp",
        "description": "Clamp size: 63x300mm\r\nMax clamp force: 90N\r\nTrigger-type clamp and rubber chuck\r\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "edl110112-quick-bar-clamp.webp",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/DL110112%20-%20Deli%2012-inch%20Quick%20Bar%20Clamp/edl110112-quick-bar-clamp.webp"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DLL110118 - Deli 18-inch Quick-Bar Clamp-DLL110118 - Deli 18-inch Quick-Bar Clamp",
        "name": "DLL110118 - Deli 18-inch Quick-Bar Clamp",
        "description": "Material: Durable A3 steel\r\nMechanism: Trigger-type for quick adjustments\r\nLength: 18 inches (450mm)\r\nGrip: Rubber chucks to prevent surface damage\r\nUse: Ideal for woodworking, assembly, and general maintenance\r\nDesign: Black finish for a professional look",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "1_-_2024-05-15t160138.248.webp",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/DLL110118%20-%20Deli%2018-inch%20Quick-Bar%20Clamp/1_-_2024-05-15t160138.248.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HQBC36803 - Ingco Quick Bar Clamp (80 x 900mm)-HQBC36803 - Ingco Quick Bar Clamp (80 x 900mm)",
        "name": "HQBC36803 - Ingco Quick Bar Clamp (80 x 900mm)",
        "description": "Clamp size:80x900mm\r\nMax clamp force:135KGS\r\nThickness and width of iron ruler:6X18mm\r\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "[HQBC36803] HQBC36803 QUICK BAR CLAMPS 80x900mm.png",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/HQBC36803%20-%20Ingco%20Quick%20Bar%20Clamp%20(80%20x%20900mm)/%5BHQBC36803%5D%20HQBC36803%20QUICK%20BAR%20CLAMPS%2080x900mm.png"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THKTHP21426 - Total 142 Pcs Combination Tool Set-THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "name": "THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "description": "142 Pcs Combination Tools Set\r\nInclude：\r\n1/2\"\"DR.Part：\r\n19Pcs 1/2\"\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM\r\n5Pcs 1/2\"\" Star Socket:E10 12 14 16 20\r\n1Pcs 1/2\"\"Dr.Flex handle，375MM\r\n1Pcs 1/2\"\" ratchet wrench,45T\r\n2Pcs 1/2\"\" Extension bar:75mm(3\"\") 250mm(10\"\")\r\n1Pcs 1/2\"\" Dr. Universal joint\r\n1Pcs 1/2\"\"(F)*3/8\"\"(M) three way adaptor\r\n2Pcs Spark plug socket 1/2\"\"Dr.16MM&21MM\r\n1Pcs 1/2\"\"*10\"\" L handle\r\n3/8\"\"DR.Part：\r\n15Pcs 3/8\"\" 12pt.socket:6-7-8-9-10-11-12-13-14-15-17-18-19-21-22\r\n1Pcs 3/8\"\" ratchet wrench,45T\r\n2Pcs 3/8\"\" Extension bar:75mm(3\"\") 150mm(6\"\")\r\n1Pcs 3/8\"\" Dr. Universal joint\r\n1/4\"\"DR.Part:\r\n26Pcs 1/4\"\"*25MM Screwdriver bits:\r\nPH0-PH1-PH1-PH2-PH2-PH3-PZ0-PZ1-PZ2-PZ3-SL4-SL5-SL6-SL7-H2-H3-H4-H5-H6-T10H-T15H-T20H-T25H-T27H-T30H-T40H\r\n1Pcs Bit holder\r\n9Pcs 1/4\"\" Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10\r\n5Pcs 1/4\"\" Star Socket:E4 5 6 7 8\r\n1Pcs 1/4\"\" ratchet wrench,45T\r\n3Pcs 1/4\"\" Extension bar:50mm(2\"\") 100mm(4\"\") 150mm(6\"\")\r\n1Pcs 1/4\"\" Dr. Universal joint\r\n1Pcs 3/8\"\"(F)*1/4\"\"(M)three way adaptor\r\n1Pcs 1/4\"\"*150mm Spinner handle\r\n1Pcs 1/4\"\"*150mm Flexible extension bar\r\n17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\r\n5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19\r\n10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM\r\n1 Pcs 300g Machinist hammer\r\n1 Pcs 7\"\" Combination Pliers\r\n1Pcs 10\"\"Curved jaw lock wrench\r\n2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150\r\n2Pcs S2 Phillips screwdriver:PH2*100 PH2*150\r\n2Pcs Stubby screwdriver:PH2*38 SL6.5*38\r\nPacked by BMC",
        "category": "Hand Tools",
        "subcategory": "Ratchet Wrenches",
        "images": [
            {
                "name": "THKTHP21426.jpg",
                "url": "/website%20products/Hand%20Tools/Ratchet%20Wrenches/THKTHP21426%20-%20Total%20142%20Pcs%20Combination%20Tool%20Set/THKTHP21426.jpg"
            }
        ],
        "price": "28500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT121201 - Total 20 Pcs Half Inch Socket Set-THT121201 - Total 20 Pcs Half Inch Socket Set",
        "name": "THT121201 - Total 20 Pcs Half Inch Socket Set",
        "description": "Include：\r\n1pcs 1/2\"\" DR. Ratchet handle,45T\r\n12pcs 1/2\"\" DR. Sockets: 10,11,12,13,14,15,16,17,18,19,22,24mm\r\n1pcs 1/2\"\" DR. Spark Plug Socket：16mm\r\n1pcs 1/2\"\" DR. Universal joint\r\n1pcs 1/2\"\" DR. Extension bar,10\"\"(250mm)\r\n1pcs 1/2\"\" DR. Three way joint\r\n3pcs 1/2\"\" DR. Deep hexagonal sockets: 13,17,19mm\r\nMaterial：CR-V(50BV30),heat treated\r\nPacked by BMC",
        "category": "Hand Tools",
        "subcategory": "Ratchet Wrenches",
        "images": [
            {
                "name": "THT121201.jpg",
                "url": "/website%20products/Hand%20Tools/Ratchet%20Wrenches/THT121201%20-%20Total%2020%20Pcs%20Half%20Inch%20Socket%20Set/THT121201.jpg"
            }
        ],
        "price": "5750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT141201 - Total 20 Pcs Quarter Inch Socket Set-THT141201 - Total 20 Pcs Quarter Inch Socket Set",
        "name": "THT141201 - Total 20 Pcs Quarter Inch Socket Set",
        "description": "Include：\r\n1pcs 1/4\"\" DR. Ratchet handle,45T\r\n13pcs 1/4\"\" DR. Sockets: 4,4.5,5,5.5,6,7,8,9,10,11,12,13,14mm\r\n1pcs 1/4\"\" DR. Extension bar,2\"\"(50mm)\r\n1pcs 1/4\"\" DR. Screwdriver handle\r\n4pcs 1/4\"\" DR. Deep hexagonal sockets:8,10,12,13mm\r\nMaterial：CR-V(50BV30),heat treated\r\nPacked by BMC",
        "category": "Hand Tools",
        "subcategory": "Ratchet Wrenches",
        "images": [
            {
                "name": "THT141201.jpg",
                "url": "/website%20products/Hand%20Tools/Ratchet%20Wrenches/THT141201%20-%20Total%2020%20Pcs%20Quarter%20Inch%20Socket%20Set/THT141201.jpg"
            }
        ],
        "price": "3100",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "BDHT62296 - Black and Decker Star Screwdriver (6'')-BDHT62296 - Black and Decker Star Screwdriver (6'')",
        "name": "BDHT62296 - Black and Decker Star Screwdriver (6'')",
        "description": "Feature\tDetails\r\nBrand\tBlack+Decker\r\nModel\tBDHT62296\r\nType\tPhillips Dranfees (PH1)\r\nBlade Length\t100mm\r\nMaterial\tChrome Vanadium Steel (Cr-V)\r\nTip Coating\tBlack Phosphate-Coated Magnetic Tip\r\nHandle Type\tBi-Material Soft Grip\r\nErgonomic Design\tYes",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "31zmAoIEJVL._SY300_SX300_QL70_FMwebp_.webp",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/BDHT62296%20-%20Black%20and%20Decker%20Star%20Screwdriver%20(6'')/31zmAoIEJVL._SY300_SX300_QL70_FMwebp_.webp"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL1033D - Deli Precision Screwdriver Set-DL1033D - Deli Precision Screwdriver Set",
        "name": "DL1033D - Deli Precision Screwdriver Set",
        "description": "Key features:\r\n\r\n33-piece set for versatile repair applications\r\n\r\nPrecision bits suitable for delicate electronics\r\n\r\nMagnetic bit holder for easier handling\r\n\r\nCompact, organized storage case for convenience and portability\r\n\r\nSpecifications:\r\n\r\nNumber of pieces: 33\r\n\r\nApplications: Mobile phones, laptops, watches, small electronics",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HAN.SCR.29620964_1726654482001.webp",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/DL1033D%20-%20Deli%20Precision%20Screwdriver%20Set/HAN.SCR.29620964_1726654482001.webp"
            }
        ],
        "price": "900",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKSD0718 - Ingco 7 Pcs Precision Set-HKSD0718 - Ingco 7 Pcs Precision Set",
        "name": "HKSD0718 - Ingco 7 Pcs Precision Set",
        "description": "7PCS precision screwdriver set\r\nnew design handle,New plastic box\r\nInclude:\r\nSL2.0*50，SL2.5*50，SL3.0*50，PH00*50，PH0*50，T6*50，T8*50\r\nMaterial:CR-V\r\nErgonomic comfort-grip handle\r\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HKSD0718.jpg",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSD0718%20-%20Ingco%207%20Pcs%20Precision%20Set/HKSD0718.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HS285075 - Ingco Slotted Screwdriver-HS285075 - Ingco Slotted Screwdriver",
        "name": "HS285075 - Ingco Slotted Screwdriver",
        "description": "1pcs slotted screwdriver\r\nCr-V, Round shank\r\nSlotted：5.5mm\r\nDiameter：5.0mm\r\nLength：75mm\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS285075] HS285075 SLOTTED SCREWDRIVER.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS285075%20-%20Ingco%20Slotted%20Screwdriver/%5BHS285075%5D%20HS285075%20SLOTTED%20SCREWDRIVER.png"
            }
        ],
        "price": "120",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HS285100 - Ingco Slotted Screwdriver-HS285100 - Ingco Slotted Screwdriver",
        "name": "HS285100 - Ingco Slotted Screwdriver",
        "description": "1pcs slotted screwdriver\r\nCr-V, Round shank\r\nSlotted：5.5mm\r\nDiameter：5.0mm\r\nLength：100mm\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS285100] HS285100 SLOTTED SCREWDRIVER.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS285100%20-%20Ingco%20Slotted%20Screwdriver/%5BHS285100%5D%20HS285100%20SLOTTED%20SCREWDRIVER.png"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HS286125 - Ingco Slotted Screwdriver-HS286125 - Ingco Slotted Screwdriver",
        "name": "HS286125 - Ingco Slotted Screwdriver",
        "description": "1pcs screwdriver with 1pcs plastic hanger\r\nCr-V, Round shank\r\nSlotted：6.5mm\r\nDiameter：6.0mm\r\nLength：125mm\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS286125] HS286125 SLOTTED SCREWDRIVER.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS286125%20-%20Ingco%20Slotted%20Screwdriver/%5BHS286125%5D%20HS286125%20SLOTTED%20SCREWDRIVER.png"
            }
        ],
        "price": "164.99999384",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HS28T10100 - Ingco Torx Screwdriver (5mm)-HS28T10100 - Ingco Torx Screwdriver (5mm)",
        "name": "HS28T10100 - Ingco Torx Screwdriver (5mm)",
        "description": "1pcs screwdriver with 1pcs plastic hanger\r\nCR-V,T10, Round shank\r\ndiameter：5.0mm\r\nlength：100mm\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS28T10100] HS28T10100 TORX SCREWDRIVER 5MM.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS28T10100%20-%20Ingco%20Torx%20Screwdriver%20(5mm)/%5BHS28T10100%5D%20HS28T10100%20TORX%20SCREWDRIVER%205MM.png"
            }
        ],
        "price": "130",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HS28T20150 - Incgo Torx Screwdriver (6mm)-HS28T20150 - Incgo Torx Screwdriver (6mm)",
        "name": "HS28T20150 - Incgo Torx Screwdriver (6mm)",
        "description": "1pcs screwdriver with 1pcs plastic hanger\r\nCR-V,T10, Round shank\r\ndiameter：6.0mm\r\nlength：150mm\r\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS28T20150] HS28T20150 TORX SCREWDRIVER 6MM.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS28T20150%20-%20Incgo%20Torx%20Screwdriver%20(6mm)/%5BHS28T20150%5D%20HS28T20150%20TORX%20SCREWDRIVER%206MM.png"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSDPH0075 - Ingco Phillips Screwdriver (PH0)-HSDPH0075 - Ingco Phillips Screwdriver (PH0)",
        "name": "HSDPH0075 - Ingco Phillips Screwdriver (PH0)",
        "description": "Blade material: S2\r\nTip type: phillips PH0(magnetic)\r\nBlade length: 75mm\r\nBlade diameter: 3.0mm\r\nShank type: round\r\nHandle material: three-color ergonomic\r\n1Pcs screwdriver with 1pcs plastic hanger\r\nWith strong magnetic\r\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HSDPH0075] HSDPH0075 PHILIPS SCREWDRIVER PH0.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HSDPH0075%20-%20Ingco%20Phillips%20Screwdriver%20(PH0)/%5BHSDPH0075%5D%20HSDPH0075%20PHILIPS%20SCREWDRIVER%20PH0.png"
            }
        ],
        "price": "135",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "YT-2827 - Yato Insulated Screwdriver Set-YT-2827 - Yato Insulated Screwdriver Set",
        "name": "YT-2827 - Yato Insulated Screwdriver Set",
        "description": "Set of 5 insulated screwdrivers for electrical work\r\nInsulated handles for protection against electric shock (up to 1000V)\r\nMade from high-quality chrome vanadium steel\r\nMagnetic tip for easy handling of screws\r\nSuitable for use with live wires\r\nIncludes a range of sizes for various applications\r\nComes in a convenient storage case for easy organization and transport",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "2827_2Png_zp.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/YT-2827%20-%20Yato%20Insulated%20Screwdriver%20Set/2827_2Png_zp.png"
            }
        ],
        "price": "1250.0000036",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CE1305 - Uyus Snap Off Knife-CE1305 - Uyus Snap Off Knife",
        "name": "CE1305 - Uyus Snap Off Knife",
        "description": "1. ABS case with TPR\r\n2. Includes 1pc 0.5 mm thick blade\r\n3. With self-locking mechanism\r\n4. Packed by blister card",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "CE1305.jpeg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/CE1305%20-%20Uyus%20Snap%20Off%20Knife/CE1305.jpeg"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CEA3SU - Uyus Snap Off Knife Blade-CEA3SU - Uyus Snap Off Knife Blade",
        "name": "CEA3SU - Uyus Snap Off Knife Blade",
        "description": "Type\tUtility Knife\r\nModel / Size\tCEA3SU, 18mm\r\nApplication\tDIY, Professional, Commercial\r\nBlades Included\t3 Replaceable Blades\r\nHandle\tErgonomic",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "66401-1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/CEA3SU%20-%20Uyus%20Snap%20Off%20Knife%20Blade/66401-1.jpg"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL018B - Deli Utility Knife (18mm)-DL018B - Deli Utility Knife (18mm)",
        "name": "DL018B - Deli Utility Knife (18mm)",
        "description": "Material: SK5 blade, ABS body\r\nBlade: 18mm, 8 snap-off sections\r\nMechanism: Self-locking push button\r\nDesign: Electrophoretic blade body, corrosion-resistant\r\nBlade Replacement: Foldable tail cover\r\nColor: Yellow\r\nPackage Type: OPP bag",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "1_7.webp",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/DL018B%20-%20Deli%20Utility%20Knife%20(18mm)/1_7.webp"
            }
        ],
        "price": "125",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKNS1806 - Ingco Snap Off Blade Knife-HKNS1806 - Ingco Snap Off Blade Knife",
        "name": "HKNS1806 - Ingco Snap Off Blade Knife",
        "description": "Blade:9mm(W)x80mm(L) (HKNSB0901)\r\nStainless steel body\r\nWith 1 pcs blade,Auto-Lock\r\nLength:132mm\r\nWith flat push button\r\nPacked by Color box",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "[HKNS1806] HKNS1806 SNAP-OFF BLADE KNIFE.png",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/HKNS1806%20-%20Ingco%20Snap%20Off%20Blade%20Knife/%5BHKNS1806%5D%20HKNS1806%20SNAP-OFF%20BLADE%20KNIFE.png"
            }
        ],
        "price": "70",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKNS28035 - Ingco Snap Off Blade Knife-HKNS28035 - Ingco Snap Off Blade Knife",
        "name": "HKNS28035 - Ingco Snap Off Blade Knife",
        "description": "Blade Size:18mmx100mm\r\nWith 3 pcs SK5 blades HKNSB181\r\nWith flat push button",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "image_1_354246d6-a6ca-4824-9ea0-df6e76d529f2_300x.avif",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/HKNS28035%20-%20Ingco%20Snap%20Off%20Blade%20Knife/image_1_354246d6-a6ca-4824-9ea0-df6e76d529f2_300x.avif"
            }
        ],
        "price": "265",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "STHT10322-800 - STanley Slide Lock Snap Off Knife (9mm)-STHT10322-800 - STanley Slide Lock Snap Off Knife (9mm)",
        "name": "STHT10322-800 - STanley Slide Lock Snap Off Knife (9mm)",
        "description": "",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "Ecomm_Large-STHT10322-800_1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/STHT10322-800%20-%20STanley%20Slide%20Lock%20Snap%20Off%20Knife%20(9mm)/Ecomm_Large-STHT10322-800_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "STHT10323-800 - Stanley Slide Lock Snap Off Knife (18mm)-STHT10323-800 - Stanley Slide Lock Snap Off Knife (18mm)",
        "name": "STHT10323-800 - Stanley Slide Lock Snap Off Knife (18mm)",
        "description": "",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "Ecomm_Large-STHT10323-800_1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/STHT10323-800%20-%20Stanley%20Slide%20Lock%20Snap%20Off%20Knife%20(18mm)/Ecomm_Large-STHT10323-800_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Combination Spanners-Combination Spanners",
        "name": "Combination Spanners",
        "description": "Available Sizes:6mm - 32mm\r\nMaterial:Cr-V\r\nChrome plated,matt finish\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HCSPA061] HCSPA061 COMBINATION SPANNER.png",
                "url": "/website%20products/Hand%20Tools/Spanners/Combination%20Spanners/%5BHCSPA061%5D%20HCSPA061%20COMBINATION%20SPANNER.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DLI60008A - Deli Open End Spanner Set-DLI60008A - Deli Open End Spanner Set",
        "name": "DLI60008A - Deli Open End Spanner Set",
        "description": "Color\tBlack\r\nNet weight\t875g\r\nSize\t6x7mm, 8x9mm, 10x11mm, 12x13mm, 14x15mm, 16x17mm, 18x19mm, 20x22mm\r\nMaterial\tCarbon Steel\r\nPackaging\tPlastic Stand",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "83dd9fd4-e862-4e6e-a275-fe827b345061.webp",
                "url": "/website%20products/Hand%20Tools/Spanners/DLI60008A%20-%20Deli%20Open%20End%20Spanner%20Set/83dd9fd4-e862-4e6e-a275-fe827b345061.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Double Open End Spanners-Double Open End Spanners",
        "name": "Double Open End Spanners",
        "description": "Double Open End Spanner\r\nLength:124mm,\r\nMaterial:Cr-V. Chrome plated,matt finished",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HDSPA08091] HDSPA08091 DOUBLE OPEN END SPANNER 8X9mm.png",
                "url": "/website%20products/Hand%20Tools/Spanners/Double%20Open%20End%20Spanners/%5BHDSPA08091%5D%20HDSPA08091%20DOUBLE%20OPEN%20END%20SPANNER%208X9mm.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKSPA1142 - Ingco Combination Spanner Set (12 Pcs)-HKSPA1142 - Ingco Combination Spanner Set (12 Pcs)",
        "name": "HKSPA1142 - Ingco Combination Spanner Set (12 Pcs)",
        "description": "12pcs combination spanner set\r\nSize:6-24mm\r\n6mm,8mm,10mm,11mm，12mm,13mm,14mm,15mm,17mm,19mm,22mm,24mm\r\nFine polished\r\nPacked by canvas bag",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HKSPA1142] HKSPA1142 12 PCS COMBINATION SPANNER SET (6-24MM).png",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA1142%20-%20Ingco%20Combination%20Spanner%20Set%20(12%20Pcs)/%5BHKSPA1142%5D%20HKSPA1142%2012%20PCS%20COMBINATION%20SPANNER%20SET%20(6-24MM).png"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "STMT25147 - Stanley Offset Ring Spanner (9 Pcs)-STMT25147 - Stanley Offset Ring Spanner (9 Pcs)",
        "name": "STMT25147 - Stanley Offset Ring Spanner (9 Pcs)",
        "description": "Compliance: All wrenches exceed ASME. ISO and DIN standards\r\nErgonomic handle with 15 degree orientation\r\nBig Marking. Nice finish in open-end jaw.\r\nMaxi Drive: 45 degree offset angle",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "5dba65aac368fc7e8b6f896646de3ef4ec16154dfbf080c7421e63f07a511084.webp",
                "url": "/website%20products/Hand%20Tools/Spanners/STMT25147%20-%20Stanley%20Offset%20Ring%20Spanner%20(9%20Pcs)/5dba65aac368fc7e8b6f896646de3ef4ec16154dfbf080c7421e63f07a511084.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1022121- Total Combination Spanner Set (12 Pcs)-THT1022121- Total Combination Spanner Set (12 Pcs)",
        "name": "THT1022121- Total Combination Spanner Set (12 Pcs)",
        "description": "Model no.\tTHT1022121\r\nDimensions\t47cm * 12cm * 8cm\r\nMaterial\tChromium-vanadium steel (Cr-V)\r\nSize\t6mm, 8mm, 10mm, 11mm, 12mm, 13mm, 14mm, 15mm, 17mm, 19mm, 22mm, 24mm",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "THT1022121.jpg",
                "url": "/website%20products/Hand%20Tools/Spanners/THT1022121-%20Total%20Combination%20Spanner%20Set%20(12%20Pcs)/THT1022121.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT1022122 - Total Combination Spanner Set-THT1022122 - Total Combination Spanner Set",
        "name": "THT1022122 - Total Combination Spanner Set",
        "description": "12pcs combination spanner set\r\nSize:6-32mm\r\n6mm,8mm,10mm,12mm,14mm,17mm,19mm,22mm,24mm,27mm,30mm,32mm\r\nFine polished\r\nPacked by canvas bag",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "THT1022122.jpg",
                "url": "/website%20products/Hand%20Tools/Spanners/THT1022122%20-%20Total%20Combination%20Spanner%20Set/THT1022122.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT102286 - Total 8 pcs Combination spanner set-THT102286 - Total 8 pcs Combination spanner set",
        "name": "THT102286 - Total 8 pcs Combination spanner set",
        "description": "Key Features\r\n\r\nSize: 6-19mm\r\n6mm\r\n8mm\r\n10mm\r\n12mm\r\n14mm\r\n15mm\r\n17mm\r\n19mm\r\nFinish: Fine polished\r\nPacked by: Plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "THT102286-I.jpg",
                "url": "/website%20products/Hand%20Tools/Spanners/THT102286%20-%20Total%208%20pcs%20Combination%20spanner%20set/THT102286-I.jpg"
            }
        ],
        "price": "1600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSL28060 - Ingco 60cm Magnetic Spirit Level-HSL28060 - Ingco 60cm Magnetic Spirit Level",
        "name": "HSL28060 - Ingco 60cm Magnetic Spirit Level",
        "description": "Length：60cm\r\nAluminum\r\nThickness:2.0mm\r\nWith magnetic\r\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "HSL28060.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/HSL28060%20-%20Ingco%2060cm%20Magnetic%20Spirit%20Level/HSL28060.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSL38040M - Ingco 40cm Magnetic Spirit Level-HSL38040M - Ingco 40cm Magnetic Spirit Level",
        "name": "HSL38040M - Ingco 40cm Magnetic Spirit Level",
        "description": "Length:40cm\r\nDouble side milled\r\n0.5mm/m accurate vials\r\nThickness:1.5mm\r\n2 Pcs powerful magnets\r\nDouble flat surfaces design\r\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "HSL38040M.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/HSL38040M%20-%20Ingco%2040cm%20Magnetic%20Spirit%20Level/HSL38040M.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT210016 - Total 100cm Spirit Level-TMT210016 - Total 100cm Spirit Level",
        "name": "TMT210016 - Total 100cm Spirit Level",
        "description": "Length:100cm\r\nAluminum\r\nAluminum thickness:1mm\r\nUnique design\r\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "TMT210016.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/TMT210016%20-%20Total%20100cm%20Spirit%20Level/TMT210016.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT24036 - Total 40cm Spirit Level-TMT24036 - Total 40cm Spirit Level",
        "name": "TMT24036 - Total 40cm Spirit Level",
        "description": "Length：40cm\r\n2pcs cylinder spirit bulbs\r\nAluminum thickness:1mm\r\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "TMT24036.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/TMT24036%20-%20Total%2040cm%20Spirit%20Level/TMT24036.jpg"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT26026 - Total 60cm Spirit Level-TMT26026 - Total 60cm Spirit Level",
        "name": "TMT26026 - Total 60cm Spirit Level",
        "description": "Length：60cm\r\n2pcs cylinder spirit bulbs\r\nAluminum thickness:1mm\r\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "TMT26036.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/TMT26026%20-%20Total%2060cm%20Spirit%20Level/TMT26036.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HQSC0206 - 6 inch Spring Clamp-HQSC0206 - 6 inch Spring Clamp",
        "name": "HQSC0206 - 6 inch Spring Clamp",
        "description": "Size:6\"\r\nLength：150mm\r\nClamping force:15KGS\r\nBlack clip body\r\nMax open mouth：68mm\r\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Spring Clamps",
        "images": [
            {
                "name": "HQSC0206.jpg",
                "url": "/website%20products/Hand%20Tools/Spring%20Clamps/HQSC0206%20-%206%20inch%20Spring%20Clamp/HQSC0206.jpg"
            }
        ],
        "price": "175",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "6-TR110 - Stanley Heavy Duty Staple Gun-6-TR110 - Stanley Heavy Duty Staple Gun",
        "name": "6-TR110 - Stanley Heavy Duty Staple Gun",
        "description": "Brand : Stanley\r\nStaple Size : 6 → 14mm\r\nStaple Leg Length : 6 → 14mm\r\nColour : Chrome Plated",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "Ecomm_Large-6-TR110_1.jpg",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/6-TR110%20-%20Stanley%20Heavy%20Duty%20Staple%20Gun/Ecomm_Large-6-TR110_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "6-TR45 - Stanley Light Duty Staple Gun-6-TR45 - Stanley Light Duty Staple Gun",
        "name": "6-TR45 - Stanley Light Duty Staple Gun",
        "description": "Material\tSteel\r\nCompatible Staples\tA-Type (Light Duty) [T50]\r\nLoading Mechanism (Staple Guns)\tBottom Loading\r\nCompatible Staple Size\t6, 8, 10 mm\r\nFastener Reload Indicator\tYes\r\nAnti-Jam Function\tYes",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "Ecomm_Large-6-TR45_2.jpg",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/6-TR45%20-%20Stanley%20Light%20Duty%20Staple%20Gun/Ecomm_Large-6-TR45_2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "EDL1313 - Deli Staple Gun (3 in 1)-EDL1313 - Deli Staple Gun (3 in 1)",
        "name": "EDL1313 - Deli Staple Gun (3 in 1)",
        "description": "3 in 1 staple gun\r\nAdjustable driving force\r\nStaples: Wire: 1.2mm, Crown: 11.3mm, Length: 4-14mm\r\nU-Shape Staples: Wire: 1.2mm, Crown: 6.3mm, Length: 10-12mm\r\nBrad Nails: Wire:1.2mm, Length: 10-14mm\r\nPacked by double bliste",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "edl1313-3in1-staple-gun.webp",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/EDL1313%20-%20Deli%20Staple%20Gun%20(3%20in%201)/edl1313-3in1-staple-gun.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "EGU002 - Uyus 3 in 1 Staple Gun-EGU002 - Uyus 3 in 1 Staple Gun",
        "name": "EGU002 - Uyus 3 in 1 Staple Gun",
        "description": "Type\t3-Way Staple Gun\r\nModel\tEGU002\r\nMaterial\tHigh-Quality Steel\r\nApplication\tDIY, Professional, Commercial\r\nStaple Directions\t3 Adjustable Angles",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "EGU002.jpg",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/EGU002%20-%20Uyus%203%20in%201%20Staple%20Gun/EGU002.jpg"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSG14018 - Ingco Staple Gun-HSG14018 - Ingco Staple Gun",
        "name": "HSG14018 - Ingco Staple Gun",
        "description": "Staple gun\r\nAdjustable driving force\r\nWire:0.7mm\r\nCrown:11.3mm\r\nLength：4-14mm\r\nMatched with Staple items:\r\nSTS0108,STS0110 and STS0112\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "[HSG14018] HSG14018 STAPLE GUN.png",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/HSG14018%20-%20Ingco%20Staple%20Gun/%5BHSG14018%5D%20HSG14018%20STAPLE%20GUN.png"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSG1403 - Ingco Staple Gun-HSG1403 - Ingco Staple Gun",
        "name": "HSG1403 - Ingco Staple Gun",
        "description": "Staple gun\r\nAdjustable driving force\r\nWire:0.7mm\r\nCrown:11.3mm\r\nLength：4-14mm\r\nPacked by double blister\r\nMatch with STS0108/STS0110/STS0112",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "[HSG1403] HSG1403 STAPLE GUN.png",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/HSG1403%20-%20Ingco%20Staple%20Gun/%5BHSG1403%5D%20HSG1403%20STAPLE%20GUN.png"
            }
        ],
        "price": "1550",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSDT1408 - Ingco 140mm ELectrical Tester-HSDT1408 - Ingco 140mm ELectrical Tester",
        "name": "HSDT1408 - Ingco 140mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\r\nSlotted size: 3x140mm\r\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1408.jpg",
                "url": "/website%20products/Hand%20Tools/Testers/HSDT1408%20-%20Ingco%20140mm%20ELectrical%20Tester/HSDT1408.jpg"
            }
        ],
        "price": "135",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "STHT80891-0 - Stanley Tire Repair Kit-STHT80891-0 - Stanley Tire Repair Kit",
        "name": "STHT80891-0 - Stanley Tire Repair Kit",
        "description": "Key Features & Components\r\nPurpose: Repairs tubeless tire punctures effectively.\r\nTools Included: Spiral probe, insertion tool, repair plugs (strings/strings), rubber cement, and a cutter.\r\nConvenience: Allows repair without dismounting the tire or wheel.\r\nPortability: Comes in a durable, compact carrying case.\r\nVehicles: Suitable for cars, motorcycles, and bicycles.",
        "category": "Hand Tools",
        "subcategory": "Tire Repair Kit",
        "images": [
            {
                "name": "Ecomm_Large-STHT80891-0_1.jpg",
                "url": "/website%20products/Hand%20Tools/Tire%20Repair%20Kit/STHT80891-0%20-%20Stanley%20Tire%20Repair%20Kit/Ecomm_Large-STHT80891-0_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HFTT858 - Ingco Garden Trowel-HFTT858 - Ingco Garden Trowel",
        "name": "HFTT858 - Ingco Garden Trowel",
        "description": "length:340mm\r\nUnique design patent handle\r\nWidth:85mm\r\nThickness:1.5mm\r\nMaterial:carbon steel\r\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HFTT858.jpg",
                "url": "/website%20products/Hand%20Tools/Trowels/HFTT858%20-%20Ingco%20Garden%20Trowel/HFTT858.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HPT28138 - Ingco Plastering Trowel-HPT28138 - Ingco Plastering Trowel",
        "name": "HPT28138 - Ingco Plastering Trowel",
        "description": "Plastering trowel\r\nSize:280x130mm\r\nUnique design handle\r\nPacked by plastic bag",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HPT28138-i2_400x.webp",
                "url": "/website%20products/Hand%20Tools/Trowels/HPT28138%20-%20Ingco%20Plastering%20Trowel/HPT28138-i2_400x.webp"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HPUT08100 - Ingco 4 inch Putty Trowel-HPUT08100 - Ingco 4 inch Putty Trowel",
        "name": "HPUT08100 - Ingco 4 inch Putty Trowel",
        "description": "Size:100mm(4'')\r\nstainless steel\r\nHeat treatment\r\nFine polished\r\nDouble color plastic handle\r\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HPUT08040.jpg",
                "url": "/website%20products/Hand%20Tools/Trowels/HPUT08100%20-%20Ingco%204%20inch%20Putty%20Trowel/HPUT08040.jpg"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT81286 - Total Plastering Trowel-THT81286 - Total Plastering Trowel",
        "name": "THT81286 - Total Plastering Trowel",
        "description": "SPECIFICATIONS\r\nSIZE\t280 X 130mm\r\nMETERIAL HANDLE\tABS & TPR\r\nWEIGHT\t0.400 Kg",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "THT81286.jpg",
                "url": "/website%20products/Hand%20Tools/Trowels/THT81286%20-%20Total%20Plastering%20Trowel/THT81286.jpg"
            }
        ],
        "price": "900",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL2607 - Deli 7 inch Wire Stripper-DL2607 - Deli 7 inch Wire Stripper",
        "name": "DL2607 - Deli 7 inch Wire Stripper",
        "description": "Strips wires from 0.6 to 2.6mm\r\nDurable construction for long-term use\r\nErgonomic handle for comfort\r\nBright yellow color for visibility\r\nSuitable for professional and DIY use",
        "category": "Hand Tools",
        "subcategory": "Wire Stripper",
        "images": [
            {
                "name": "download-2025-03-27T221953.243.webp",
                "url": "/website%20products/Hand%20Tools/Wire%20Stripper/DL2607%20-%20Deli%207%20inch%20Wire%20Stripper/download-2025-03-27T221953.243.webp"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THT15851 - Total Wire Stripper-THT15851 - Total Wire Stripper",
        "name": "THT15851 - Total Wire Stripper",
        "description": "SIZE\t215mm\r\nWEIGHT\t250gr\r\nPACKAGE\t12 PCS",
        "category": "Hand Tools",
        "subcategory": "Wire Stripper",
        "images": [
            {
                "name": "THT15851.jpg",
                "url": "/website%20products/Hand%20Tools/Wire%20Stripper/THT15851%20-%20Total%20Wire%20Stripper/THT15851.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DL6203-ED1 - Deli Wood Chisel Set (3 Pcs)-DL6203-ED1 - Deli Wood Chisel Set (3 Pcs)",
        "name": "DL6203-ED1 - Deli Wood Chisel Set (3 Pcs)",
        "description": "Blade material: carbon steel\r\nHandle material: PP + TPR\r\nBlade size: 12/19/25mm\r\nTotal length: 260mm\r\nColor: yellow/black",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "xlarge_20250722122008_c795c93c.jpeg",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/DL6203-ED1%20-%20Deli%20Wood%20Chisel%20Set%20(3%20Pcs)/xlarge_20250722122008_c795c93c.jpeg"
            }
        ],
        "price": "1800",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HWC0822 - Ingco Wood Chisel (22mm)-HWC0822 - Ingco Wood Chisel (22mm)",
        "name": "HWC0822 - Ingco Wood Chisel (22mm)",
        "description": "Width:22mm(7/8\")\r\nLength:140mm\r\nWood Chisel,Cr-V\r\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0822] HWC0822 WOOD CHISEL 22MM.png",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0822%20-%20Ingco%20Wood%20Chisel%20(22mm)/%5BHWC0822%5D%20HWC0822%20WOOD%20CHISEL%2022MM.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THYSW101214 - Total Y-Type Socket Wrench-THYSW101214 - Total Y-Type Socket Wrench",
        "name": "THYSW101214 - Total Y-Type Socket Wrench",
        "description": "Size : 10-12-14mm\r\nEach bar length:145mm\r\nSocket Material:CR-V\r\nsurface:chrome-plated\r\nPacked by Paper card",
        "category": "Hand Tools",
        "subcategory": "Y-Type Socket Wrench",
        "images": [
            {
                "name": "THYSW101214.jpg",
                "url": "/website%20products/Hand%20Tools/Y-Type%20Socket%20Wrench/THYSW101214%20-%20Total%20Y-Type%20Socket%20Wrench/THYSW101214.jpg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-DL515180 - Deli Insulated Bilhook Cable Stripping Knife",
        "name": "DL515180 - Deli Insulated Bilhook Cable Stripping Knife",
        "description": "Insulated dismantling knife\r\n1000V, VDE/GS certification\r\nSize: 50x180mm\r\nManufactured according to EN60900\r\nStainless steel blade\r\nPacked by blister card",
        "category": "Insulated Tools",
        "subcategory": "DL515180 - Deli Insulated Bilhook Cable Stripping Knife",
        "images": [
            {
                "name": "dl515180-insulated-billhook-cable-stripping-knife.webp",
                "url": "/website%20products/Insulated%20Tools/DL515180%20-%20Deli%20Insulated%20Bilhook%20Cable%20Stripping%20Knife/dl515180-insulated-billhook-cable-stripping-knife.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-DL515185 - Deli Insulated Straight Cable Knife",
        "name": "DL515185 - Deli Insulated Straight Cable Knife",
        "description": "Purpose: A 185mm professional, VDE/GS certified insulated knife for cutting/stripping cables in live electrical environments.\r\nSafety: Features a 1000V insulated handle and stainless steel blade.\r\nUsage: Designed for electricians, with a 50x185mm size.",
        "category": "Insulated Tools",
        "subcategory": "DL515185 - Deli Insulated Straight Cable Knife",
        "images": [
            {
                "name": "download-2025-01-19T134650.409.webp",
                "url": "/website%20products/Insulated%20Tools/DL515185%20-%20Deli%20Insulated%20Straight%20Cable%20Knife/download-2025-01-19T134650.409.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HIADW101 - Ingco Insulated Adjustable Wrench (10'')",
        "name": "HIADW101 - Ingco Insulated Adjustable Wrench (10'')",
        "description": "Insulated adjustable wrench\r\n1000V,VDE/GS Certification\r\nManufactured according to EN60900\r\nMaterial: chrome vanadium material\r\nChrome plated surface\r\nPacked by blister card",
        "category": "Insulated Tools",
        "subcategory": "HIADW101 - Ingco Insulated Adjustable Wrench (10'')",
        "images": [
            {
                "name": "adj_-wrench-insulated_720x.webp",
                "url": "/website%20products/Insulated%20Tools/HIADW101%20-%20Ingco%20Insulated%20Adjustable%20Wrench%20(10'')/adj_-wrench-insulated_720x.webp"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HIKPS28318 - Ingco Insulated Pliers Set (3 Pcs)",
        "name": "HIKPS28318 - Ingco Insulated Pliers Set (3 Pcs)",
        "description": "Included Tools: 8\" (200mm) Insulated Combination Pliers, 6\" (160mm) Insulated Long Nose Pliers, 6\" (160mm) Insulated Diagonal Cutting Pliers.\r\nSafety Rating: 1000V insulation for live line working.\r\nMaterial: High-grade Chrome Vanadium (Cr-V) steel, polished and blackened for corrosion resistance.\r\nDesign: Ergonomic, two-color TPR (thermoplastic rubber) handles for improved grip and comfort.\r\nCompliance: IEC60900 / VDE certified.\r\nPackaging: Typically packed by PP hanger.",
        "category": "Insulated Tools",
        "subcategory": "HIKPS28318 - Ingco Insulated Pliers Set (3 Pcs)",
        "images": [
            {
                "name": "HIKPS28318.jpg",
                "url": "/website%20products/Insulated%20Tools/HIKPS28318%20-%20Ingco%20Insulated%20Pliers%20Set%20(3%20Pcs)/HIKPS28318.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKISD1008 - Ingco Interchangeable Insulated Screwdriver Set (10 Pcs)",
        "name": "HKISD1008 - Ingco Interchangeable Insulated Screwdriver Set (10 Pcs)",
        "description": "10 Pcs interchangeable Insulated\r\nscrewdriver set Include：\r\n8 Pcs Insulated Screwdriver Shank（1000V）： SL2.5*110mm\r\nSL3*110mm SL4*110mm SL5.5*110mm SL6.5*110mm\r\nPH0*110mm PH1*110mm",
        "category": "Insulated Tools",
        "subcategory": "HKISD1008 - Ingco Interchangeable Insulated Screwdriver Set (10 Pcs)",
        "images": [
            {
                "name": "HKISD1008.jpg",
                "url": "/website%20products/Insulated%20Tools/HKISD1008%20-%20Ingco%20Interchangeable%20Insulated%20Screwdriver%20Set%20(10%20Pcs)/HKISD1008.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKIST3061 - Ingco Insulated Hand Tools Set (6 Pcs)",
        "name": "HKIST3061 - Ingco Insulated Hand Tools Set (6 Pcs)",
        "description": "6Pcs Insulated Handtools set\r\nINCLUDE:\r\n1 Pcs SL5.5x125mm Insulation screwdriver\r\n1 Pcs SL4.0x100mm Insulation screwdriver\r\n1 Pcs PH2x100mm Insulation screwdriver\r\n1 Pcs 7\" Insulated Combination Pliers\r\n1 Pcs 6\" Insulated Diagonal Cutting Pliers\r\n1 Pcs Test Pencil(Test voltage:100-500VAC)\r\nPacked by Double Blister",
        "category": "Insulated Tools",
        "subcategory": "HKIST3061 - Ingco Insulated Hand Tools Set (6 Pcs)",
        "images": [
            {
                "name": "HKIST3061.jpg",
                "url": "/website%20products/Insulated%20Tools/HKIST3061%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(6%20Pcs)/HKIST3061.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKITH1601 - Ingco Insulated Hand Tools Set (16 Pcs)",
        "name": "HKITH1601 - Ingco Insulated Hand Tools Set (16 Pcs)",
        "description": "Description\r\n16 pieces Insulated hand tools set\r\n1 000V, VDE/GS Certification\r\n\r\nIncludes:\r\n1 piece 200 mm insulated combination pliers\r\n1 piece 200 mm insulated long nose pliers\r\n1 piece 160 mm insulated diagonal cutting pliers\r\n1 piece 160 mm insulated wire stripping pliers\r\n4 pieces insulated slotted screwdrivers: SL3 x 75 mm, SL4.0 x 100 mm, SL5.5 x 125 mm, SL6.5x150mm\r\n5 pieces insulated phillips screwdrivers: PH00 x 50 mm, PH0 x 60 mm; PH1 x 80 mm; PH2 x 100 mm; PH3 x 150 mm\r\n1 piece 30 x 70 mm voltage tester\r\n1 piece 50 x 180 mm cable knife\r\n1 piece vinyl electrical tape\r\n\r\nPacked by Unique design BMC + Colour box.",
        "category": "Insulated Tools",
        "subcategory": "HKITH1601 - Ingco Insulated Hand Tools Set (16 Pcs)",
        "images": [
            {
                "name": "HKITH1601.jpg",
                "url": "/website%20products/Insulated%20Tools/HKITH1601%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(16%20Pcs)/HKITH1601.jpg"
            }
        ],
        "price": "14849.99999428",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTV01P051 - Ingco Insulated Hand Tools Set (5 Pcs)",
        "name": "HKTV01P051 - Ingco Insulated Hand Tools Set (5 Pcs)",
        "description": "Description\r\n5 Pcs Insulated hand tools set Include：\r\n1 Pcs 7\" Insulated Combination\r\nPliers\r\n1 Pcs 6\" Insulated Diagonal Cutting Pliers\r\n1 Pcs 6” Insulated Long Nose Pliers 1 Pcs 6\" Insulated Wire Stripping Pliers\r\n1 Pcs Test Pencil（Test\r\nvoltage：100-500VAC）",
        "category": "Insulated Tools",
        "subcategory": "HKTV01P051 - Ingco Insulated Hand Tools Set (5 Pcs)",
        "images": [
            {
                "name": "HKTV01P051.webp",
                "url": "/website%20products/Insulated%20Tools/HKTV01P051%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(5%20Pcs)/HKTV01P051.webp"
            }
        ],
        "price": "3750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTV01S101 - Ingco Insulated Hand Tools Set (10 Pcs)",
        "name": "HKTV01S101 - Ingco Insulated Hand Tools Set (10 Pcs)",
        "description": "Key Features:\r\n\r\n1 Pc SL3.0x75mm Screwdriver\r\n1 Pc SL4.0x100mm Screwdriver\r\n1 Pc SL5.5x125mm Screwdriver\r\n1 Pc SL6.5x150mm Screwdriver\r\n1 Pc PH0x60mm Screwdriver\r\n1 Pc PH1x80mm Screwdriver\r\n1 Pc PH2x100mm Screwdriver\r\n1 Pc PZ1x80mm Screwdriver\r\n1 Pc PZ2x100mm Screwdriver\r\n1 Pc Test Pencil: Test Voltage 100-500VAC",
        "category": "Insulated Tools",
        "subcategory": "HKTV01S101 - Ingco Insulated Hand Tools Set (10 Pcs)",
        "images": [
            {
                "name": "HKTV01S101-i1_400x.webp",
                "url": "/website%20products/Insulated%20Tools/HKTV01S101%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(10%20Pcs)/HKTV01S101-i1_400x.webp"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-21152 - Yato 8 inch Insulated Combination Pliers",
        "name": "YT-21152 - Yato 8 inch Insulated Combination Pliers",
        "description": "7-inch insulated combination pliers for electrical work\r\nInsulated handles for protection against electrical shock (up to 1000V)\r\nMade from high-quality chrome vanadium steel\r\nCombination of cutting edges and gripping jaws for versatility\r\nSuitable for a wide range of electrical tasks\r\nDurable construction for long-lasting performance\r\nComfortable grip for extended use",
        "category": "Insulated Tools",
        "subcategory": "YT-21152 - Yato 8 inch Insulated Combination Pliers",
        "images": [
            {
                "name": "21152-png.webp",
                "url": "/website%20products/Insulated%20Tools/YT-21152%20-%20Yato%208%20inch%20Insulated%20Combination%20Pliers/21152-png.webp"
            }
        ],
        "price": "1450",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-YT-2827 - Yato Insulated Screwdriver Set",
        "name": "YT-2827 - Yato Insulated Screwdriver Set",
        "description": "Set of 5 insulated screwdrivers for electrical work\r\nInsulated handles for protection against electric shock (up to 1000V)\r\nMade from high-quality chrome vanadium steel\r\nMagnetic tip for easy handling of screws\r\nSuitable for use with live wires\r\nIncludes a range of sizes for various applications\r\nComes in a convenient storage case for easy organization and transport",
        "category": "Insulated Tools",
        "subcategory": "YT-2827 - Yato Insulated Screwdriver Set",
        "images": [
            {
                "name": "2827_2Png_zp.png",
                "url": "/website%20products/Insulated%20Tools/YT-2827%20-%20Yato%20Insulated%20Screwdriver%20Set/2827_2Png_zp.png"
            }
        ],
        "price": "1250.0000036",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ECN212 - Uyus 305mm (12-inch) Machinist's Angle Square-ECN212 - Uyus 305mm (12-inch) Machinist's Angle Square",
        "name": "ECN212 - Uyus 305mm (12-inch) Machinist's Angle Square",
        "description": "Material & Precision: Durable construction for industrial or workshop use.\r\nLocking Mechanism: Enables the blade to be fixed at specific lengths for consistent, repeated measurements.\r\nPurpose: Ideal for checking 90-degree angles and marking, common in metalworking and woodworking projects.\r\nSize: 12 inches (305 mm).",
        "category": "Measuring Tools",
        "subcategory": "Angle Squares (T Squares)",
        "images": [
            {
                "name": "X_20250617-1119317510.jpg",
                "url": "/website%20products/Measuring%20Tools/Angle%20Squares%20(T%20Squares)/ECN212%20-%20Uyus%20305mm%20(12-inch)%20Machinist's%20Angle%20Square/X_20250617-1119317510.jpg"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HAS20202 - Ingco Angle Square-HAS20202 - Ingco Angle Square",
        "name": "HAS20202 - Ingco Angle Square",
        "description": "Size:18cm\r\nmaterial：ABS\r\nOnly metric\r\nBeveled edge for ease of reading\r\nEasy-to-read gradations\r\nBase enable easy marking and cutting\r\nLightweight &amp; high-impact structural material\r\nPacked by label",
        "category": "Measuring Tools",
        "subcategory": "Angle Squares (T Squares)",
        "images": [
            {
                "name": "[HAS20202] HAS20202 ANGLE SQUARE.png",
                "url": "/website%20products/Measuring%20Tools/Angle%20Squares%20(T%20Squares)/HAS20202%20-%20Ingco%20Angle%20Square/%5BHAS20202%5D%20HAS20202%20ANGLE%20SQUARE.png"
            }
        ],
        "price": "549.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT42002 - Total AC Clamp Meter (2000 Count)-TMT42002 - Total AC Clamp Meter (2000 Count)",
        "name": "TMT42002 - Total AC Clamp Meter (2000 Count)",
        "description": "2000 Counts\r\nData Hold\r\nAC Current:2A/20A/200A/±(2.5% +8)\r\nAC Voltage:0.1~600V±(1.0% +5)\r\nDC Voltage:0.1~600V±(0.5% +5)\r\nResistance:2kΩ/20kΩ±(1.0% +3)\r\nPacked by color box",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "1.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/TMT42002%20-%20Total%20AC%20Clamp%20Meter%20(2000%20Count)/1.jpg"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT423 - Clamp Meter Test Leads-TMT423 - Clamp Meter Test Leads",
        "name": "TMT423 - Clamp Meter Test Leads",
        "description": "Length:100cm\r\nPen length:143mm\r\nSuitable for all multimeter and clamp meter(Except TMT460013)\r\nPacked by paper hanger",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "TMT423.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/TMT423%20-%20Clamp%20Meter%20Test%20Leads/TMT423.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TMT46003 - Total AC clamp meter (6000 count)-TMT46003 - Total AC clamp meter (6000 count)",
        "name": "TMT46003 - Total AC clamp meter (6000 count)",
        "description": "Data Hold\r\nDisplay :6000 counts\r\nLCD with double color backlight\r\nAC Current:4A/40A/400A/600A\r\nAC Voltage:4V/40V/400V/600V\r\nDC Voltage:400mV/4V/40V/400V/600V\r\nResistance: 400Ω/4kΩ/40kΩ/400kΩ/4MΩ/40MΩ\r\nCapacitance:4nf/40nf/400nf/4μF/40μF/400μF/4mf\r\nNon-contact voltage detection\r\nDiode test\r\nData Hold\r\nAuto power off\r\nWith backlight function\r\nWith flash light function\r\nWith lower battery indication function\r\nWith 2pcs LR03 AAA batteries\r\nPacked by color box",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "TMT46003.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/TMT46003%20-%20Total%20AC%20clamp%20meter%20(6000%20count)/TMT46003.jpg"
            }
        ],
        "price": "3750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "UT201 - Uni-T Clamp Meter-UT201 - Uni-T Clamp Meter",
        "name": "UT201 - Uni-T Clamp Meter",
        "description": "True RMS\r\nLCD backlight\r\nLarge screen and display digits\r\n60mF large capacitance measurement (UT202A+/UT204+)\r\nNeutral/live wire test (UT202A+/UT204+)",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "UT204_1.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/UT201%20-%20Uni-T%20Clamp%20Meter/UT204_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "UT2078 - Uni-T Clamp Meter-UT2078 - Uni-T Clamp Meter",
        "name": "UT2078 - Uni-T Clamp Meter",
        "description": "Flashlight button: Short press this button to turn on/oﬀ the flashlight\r\nNCV Multi-Segment Display and audio/visual alarm\r\nTrue RMS/Auto backlight\r\nNCV/Function retention",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "UT205E_1.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/UT2078%20-%20Uni-T%20Clamp%20Meter/UT205E_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSDT1408 - Ingco 140mm ELectrical Tester-HSDT1408 - Ingco 140mm ELectrical Tester",
        "name": "HSDT1408 - Ingco 140mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\r\nSlotted size: 3x140mm\r\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1408.jpg",
                "url": "/website%20products/Measuring%20Tools/Testers/HSDT1408%20-%20Ingco%20140mm%20ELectrical%20Tester/HSDT1408.jpg"
            }
        ],
        "price": "135",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AC20248 - Ingco 24L Air Compressor-AC20248 - Ingco 24L Air Compressor",
        "name": "AC20248 - Ingco 24L Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "AC20248.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC20248%20-%20Ingco%2024L%20Air%20Compressor/AC20248.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AC25508 - Ingco 50L Air Compressor-AC25508 - Ingco 50L Air Compressor",
        "name": "AC25508 - Ingco 50L Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "a2e72166a2ef41c2a34578045a571017.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC25508%20-%20Ingco%2050L%20Air%20Compressor/a2e72166a2ef41c2a34578045a571017.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AC301008 - Ingco 100L Air Compressor-AC301008 - Ingco 100L Air Compressor",
        "name": "AC301008 - Ingco 100L Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "AC301008.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC301008%20-%20Ingco%20100L%20Air%20Compressor/AC301008.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ACS112501 - Ingco 50L Silent and Oil-free Air Compressor-ACS112501 - Ingco 50L Silent and Oil-free Air Compressor",
        "name": "ACS112501 - Ingco 50L Silent and Oil-free Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS112501.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS112501%20-%20Ingco%2050L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS112501.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ACS175241 - Ingco 24L Silent and Oil-free Air Compressor-ACS175241 - Ingco 24L Silent and Oil-free Air Compressor",
        "name": "ACS175241 - Ingco 24L Silent and Oil-free Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS175241.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS175241%20-%20Ingco%2024L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS175241.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ACS2241001 - Ingco 100L Silent and Oil-free Air Compressor-ACS2241001 - Ingco 100L Silent and Oil-free Air Compressor",
        "name": "ACS2241001 - Ingco 100L Silent and Oil-free Air Compressor",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS2241001.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS2241001%20-%20Ingco%20100L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS2241001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AG110018 - Ingco 4 inch 1100w Angle Grinder-AG110018 - Ingco 4 inch 1100w Angle Grinder",
        "name": "AG110018 - Ingco 4 inch 1100w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG110018.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG110018%20-%20Ingco%204%20inch%201100w%20Angle%20Grinder/AG110018.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AG24008 - Ingco 9 inch 2400w Angle grinder-AG24008 - Ingco 9 inch 2400w Angle grinder",
        "name": "AG24008 - Ingco 9 inch 2400w Angle grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG24008.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG24008%20-%20Ingco%209%20inch%202400w%20Angle%20grinder/AG24008.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AG7118 - Ingco 4 inch 710w Angle Grinder-AG7118 - Ingco 4 inch 710w Angle Grinder",
        "name": "AG7118 - Ingco 4 inch 710w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG7118.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG7118%20-%20Ingco%204%20inch%20710w%20Angle%20Grinder/AG7118.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AG750282 - Ingco 4 inch 750w Angle Grinder-AG750282 - Ingco 4 inch 750w Angle Grinder",
        "name": "AG750282 - Ingco 4 inch 750w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG750282.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG750282%20-%20Ingco%204%20inch%20750w%20Angle%20Grinder/AG750282.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AG90028 - Ingco 4 inch 900w Angle grinder-AG90028 - Ingco 4 inch 900w Angle grinder",
        "name": "AG90028 - Ingco 4 inch 900w Angle grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG90028.png",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG90028%20-%20Ingco%204%20inch%20900w%20Angle%20grinder/AG90028.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set-COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Cagli2211532 - Ingco 20V Cordless Angle Grinder-Cagli2211532 - Ingco 20V Cordless Angle Grinder",
        "name": "Cagli2211532 - Ingco 20V Cordless Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "CAGLI2211532 LITHIUM-ION ANGLE GRINDER 20V.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/Cagli2211532%20-%20Ingco%2020V%20Cordless%20Angle%20Grinder/CAGLI2211532%20LITHIUM-ION%20ANGLE%20GRINDER%2020V.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DWE4120-B5 - Dewalt 900w Angle Grinder (4'')-DWE4120-B5 - Dewalt 900w Angle Grinder (4'')",
        "name": "DWE4120-B5 - Dewalt 900w Angle Grinder (4'')",
        "description": "Complete a wide range of grinding applications with the 4-1/2 in. Paddle Switch Small Angle Grinder. Engineered with a powerful 9 Amp motor that delivers fast material removal and overload protection, this grinder features a slim design ideal for operating in tight spaces.\r\n\r\n9 amp AC/DC, 12,000 rpm motor designed for faster material removal and higher overload protection\r\n\r\nHigh-efficiency motor provides low operating temps\r\n\r\nOne-Touch™ guard allows for 360-degree rotation of the guard with a single action",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "Dewalt-Angle-Grinder-4.5-inch-115mm-DWE4120-B5-Paddle-Switch-900W.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/DWE4120-B5%20-%20Dewalt%20900w%20Angle%20Grinder%20(4'')/Dewalt-Angle-Grinder-4.5-inch-115mm-DWE4120-B5-Paddle-Switch-900W.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DWE492-QS - Dewalt (2200W) 9'' Angle Grinder-DWE492-QS - Dewalt (2200W) 9'' Angle Grinder",
        "name": "DWE492-QS - Dewalt (2200W) 9'' Angle Grinder",
        "description": "Product overview\r\n• Brand: DeWALT\r\n• Model: DWE492-QS\r\n• Tool type: Corded angle grinder\r\n• Disc diameter: 230 mm (9 inch)\r\n\r\nPower and performance\r\n• Power input: 2200 W\r\n• No-load speed: 6,600 rpm\r\n• Motor type: Brushed motor\r\n\r\nMechanical features\r\n• Spindle thread: M14\r\n• Guard: Tool-free adjustable guard\r\n• Side handle: Two-position auxiliary handle\r\n• Brush access: External brush access for easier servicing\r\n\r\nDimensions and weight\r\n• Approx. length: 490 mm\r\n• Approx. height: 151 mm\r\n• Weight: Approx. 5.2 kg",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "DWE492_2.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/DWE492-QS%20-%20Dewalt%20(2200W)%209''%20Angle%20Grinder/DWE492_2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GWS 2200 - Bosch 9 inch 2200w Angle Grinder-GWS 2200 - Bosch 9 inch 2200w Angle Grinder",
        "name": "GWS 2200 - Bosch 9 inch 2200w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o332817v54_GWS2200fullexecution.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%202200%20-%20Bosch%209%20inch%202200w%20Angle%20Grinder/o332817v54_GWS2200fullexecution.webp"
            }
        ],
        "price": "13899.9999992",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GWS 24-230 H Bosch (9'') Angle Grinder 2400W-GWS 24-230 H Bosch (9'') Angle Grinder 2400W",
        "name": "GWS 24-230 H Bosch (9'') Angle Grinder 2400W",
        "description": "Power: 2400 Watts.\r\nDisc Diameter: 230 mm (9 inches).\r\nNo-Load Speed: 6,500 rpm.\r\nVoltage: 230 V.\r\nSpindle Thread: M14.\r\nWeight: Around 5.1 - 5.8 kg (depending on source).\r\nMotor: \"Champion\" motor with high overload capacity for fast material removal.\r\nSafety Features: Restart protection, soft start, anti-rotation protective guard, lockable switch.\r\nDurability: Armored coils protect motor from dust, double sealed ball bearings, sturdy gearing.",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o91923v54_GWS-24-230_H_Dynamik.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%2024-230%20H%20Bosch%20(9'')%20Angle%20Grinder%202400W/o91923v54_GWS-24-230_H_Dynamik.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GWS 700 - Bosch 4 inch 710w Angle Grinder-GWS 700 - Bosch 4 inch 710w Angle Grinder",
        "name": "GWS 700 - Bosch 4 inch 710w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o328882v54_FullExecution_GWS.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%20700%20-%20Bosch%204%20inch%20710w%20Angle%20Grinder/o328882v54_FullExecution_GWS.webp"
            }
        ],
        "price": "5999.999996399999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG10710076 - Total 4 inch 710w Angle Grinder-TG10710076 - Total 4 inch 710w Angle Grinder",
        "name": "TG10710076 - Total 4 inch 710w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG10710076.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG10710076%20-%20Total%204%20inch%20710w%20Angle%20Grinder/TG10710076.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG10711556 - Total 4 inch 750w Angle Grinder-TG10711556 - Total 4 inch 750w Angle Grinder",
        "name": "TG10711556 - Total 4 inch 750w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG10711556.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG10711556%20-%20Total%204%20inch%20750w%20Angle%20Grinder/TG10711556.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG1252306 - Total 9 inch 2400w Angle Grinder-TG1252306 - Total 9 inch 2400w Angle Grinder",
        "name": "TG1252306 - Total 9 inch 2400w Angle Grinder",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG1252306.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG1252306%20-%20Total%209%20inch%202400w%20Angle%20Grinder/TG1252306.jpg"
            }
        ],
        "price": "13500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GPO 14CE - Bosch 1400w Pro Angle Polsiher-GPO 14CE - Bosch 1400w Pro Angle Polsiher",
        "name": "GPO 14CE - Bosch 1400w Pro Angle Polsiher",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "o113114v54_P_K_GPO_14CE_Dynamik.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/GPO%2014CE%20-%20Bosch%201400w%20Pro%20Angle%20Polsiher/o113114v54_P_K_GPO_14CE_Dynamik.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GPO 950 - Bosch 950w Angle Polisher-GPO 950 - Bosch 950w Angle Polisher",
        "name": "GPO 950 - Bosch 950w Angle Polisher",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "o283013v54_lv-139333-12-GPO950_dyn_01.png",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/GPO%20950%20-%20Bosch%20950w%20Angle%20Polisher/o283013v54_lv-139333-12-GPO950_dyn_01.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TP11418018 - Total 1400w Angle Polisher-TP11418018 - Total 1400w Angle Polisher",
        "name": "TP11418018 - Total 1400w Angle Polisher",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "TP11418018.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/TP11418018%20-%20Total%201400w%20Angle%20Polisher/TP11418018.jpg"
            }
        ],
        "price": "10250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AB4018 - Ingco 400w Blower-AB4018 - Ingco 400w Blower",
        "name": "AB4018 - Ingco 400w Blower",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "AB4018.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/AB4018%20-%20Ingco%20400w%20Blower/AB4018.jpg"
            }
        ],
        "price": "3700",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AB6008 - Ingco 600w Blower-AB6008 - Ingco 600w Blower",
        "name": "AB6008 - Ingco 600w Blower",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "AB6008.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/AB6008%20-%20Ingco%20600w%20Blower/AB6008.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBL 620 - Bosch 650w Blower-GBL 620 - Bosch 650w Blower",
        "name": "GBL 620 - Bosch 650w Blower",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "o275032v54_GBL620_dyn_01.png",
                "url": "/website%20products/Power%20Tools/Blowers/GBL%20620%20-%20Bosch%20650w%20Blower/o275032v54_GBL620_dyn_01.png"
            }
        ],
        "price": "6440.0000024",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "M4000B - Makita 550w Blower-M4000B - Makita 550w Blower",
        "name": "M4000B - Makita 550w Blower",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "M4000B.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/M4000B%20-%20Makita%20550w%20Blower/M4000B.jpg"
            }
        ],
        "price": "5399.9999956",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CS18538 - Ingco 1400W 7 Inch Circular Saw-CS18538 - Ingco 1400W 7 Inch Circular Saw",
        "name": "CS18538 - Ingco 1400W 7 Inch Circular Saw",
        "description": "Voltage: 220-240V~50/60Hz\r\nInput Power:1400W\r\nNo-load speed:4800rpm\r\nBlade diameter:185x20mm\r\nCutting capacity:\r\n45 degree:45mm\r\n90 degree:65mm\r\nAdjustable cutting depth\r\nAdjustable bevel cutting\r\nWith 1pcs 185mm blade\r\nWith 1set extra carbon brushes\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "CS18538.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/CS18538%20-%20Ingco%201400W%207%20Inch%20Circular%20Saw/CS18538.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DWE5615-GB - Dewalt 7 inch Circular Saw (1350W)-DWE5615-GB - Dewalt 7 inch Circular Saw (1350W)",
        "name": "DWE5615-GB - Dewalt 7 inch Circular Saw (1350W)",
        "description": "POWER INPUT\r\n1350 W\r\nBLADE DIAMETER\r\n190 mm\r\nBEVEL CAPACITY\r\n45 °\r\nNO LOAD SPEED\r\n5500 RPM\r\nMAX. DEPTH OF CUT (90°)\r\n68 mm\r\nMAX. DEPTH OF CUT (45°)\r\n48 mm",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "81ygib-xral._sl1500__1_.webp",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/DWE5615-GB%20-%20Dewalt%207%20inch%20Circular%20Saw%20(1350W)/81ygib-xral._sl1500__1_.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GKS 140 - Bosch 1400w 7 inch Circular Saw-GKS 140 - Bosch 1400w 7 inch Circular Saw",
        "name": "GKS 140 - Bosch 1400w 7 inch Circular Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "GKS 140.webp",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/GKS%20140%20-%20Bosch%201400w%207%20inch%20Circular%20Saw/GKS%20140.webp"
            }
        ],
        "price": "14079.999994799999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GKS 235 Turbo - Bosch PRO Heavy Duty (2050W) (9'') Circular Saw-GKS 235 Turbo - Bosch PRO Heavy Duty (2050W) (9'') Circular Saw",
        "name": "GKS 235 Turbo - Bosch PRO Heavy Duty (2050W) (9'') Circular Saw",
        "description": "Power: 2,050 W input power for strong performance.\r\nBlade: 235 mm diameter, 25 mm bore.\r\nCutting Depth: Up to 85 mm (90°) and 65 mm (45°).\r\nSpeed: 5,300 rpm (no-load).\r\nDurability: Robust design with double the overload lifetime of standard models.\r\nWeight: 7.6 kg.",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "o246835v54_lv-84102-49-GKS_235_Turbo_Dy.png",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/GKS%20235%20Turbo%20-%20Bosch%20PRO%20Heavy%20Duty%20(2050W)%20(9'')%20Circular%20Saw/o246835v54_lv-84102-49-GKS_235_Turbo_Dy.png"
            }
        ],
        "price": "32500.0000008",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS11418526-8 - Total 1400w 7 inch Circular Saw-TS11418526-8 - Total 1400w 7 inch Circular Saw",
        "name": "TS11418526-8 - Total 1400w 7 inch Circular Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "TS11418526.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/TS11418526-8%20-%20Total%201400w%207%20inch%20Circular%20Saw/TS11418526.jpg"
            }
        ],
        "price": "9000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS1161856-8 - Total 1600W 7 inch Circular Saw-TS1161856-8 - Total 1600W 7 inch Circular Saw",
        "name": "TS1161856-8 - Total 1600W 7 inch Circular Saw",
        "description": "SPECIFICATIONS\r\nVOLTAGE\t230V - 50Hz\r\nPOWER\t1600W\r\nNO LOAD INPUT\t5.000 rpm / min\r\nCUTTING DEPTH 90x65mm\r\nCUTTING DEPTH 45x44mm\r\nBLADE DIAMETER\t185mm X 20mm\r\nWEIGHT\t5 Kg",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "TS1161856.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/TS1161856-8%20-%20Total%201600W%207%20inch%20Circular%20Saw/TS1161856.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS122235622 - Total 2200W 9 inch Circular Saw-TS122235622 - Total 2200W 9 inch Circular Saw",
        "name": "TS122235622 - Total 2200W 9 inch Circular Saw",
        "description": "SPECIFICATIONS\r\nVOLTAGE\t230V - 50Hz\r\nPOWER\t2.200W\r\nNO LOAD INPUT\t3.800 rpm / min\r\nCUTTING DEPTH 90o\t80mm\r\nCUTTING DEPTH 45o\t65mm\r\nBLADE DIAMETER\t235mm\r\nWEIGHT\t9.5 Kg",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "TS1222356.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/TS122235622%20-%20Total%202200W%209%20inch%20Circular%20Saw/TS1222356.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "UY-SCC235 - Uyus 2800w 9 inch Circular Saw-UY-SCC235 - Uyus 2800w 9 inch Circular Saw",
        "name": "UY-SCC235 - Uyus 2800w 9 inch Circular Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "chinesw.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/UY-SCC235%20-%20Uyus%202800w%209%20inch%20Circular%20Saw/chinesw.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSB-16 Re - Bosch Pro Heavy Duty Impact Drill (750W)-GSB-16 Re - Bosch Pro Heavy Duty Impact Drill (750W)",
        "name": "GSB-16 Re - Bosch Pro Heavy Duty Impact Drill (750W)",
        "description": "Speed preselection with setting wheel\r\nSoftgrip for a secure hold\r\nRotating brush plate for constant power in reverse and forward rotation\r\nSpindle collar diameter of 43 mm (European standard) – can be used in drill stands\r\n1Powerful 701 watts\r\n2Forward/reverse rotation\r\n3Electronic control for exact pilot drilling",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "o260252v54_lv-84560-12-GSB_16_RE_dyn_highres_02.png",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/GSB-16%20Re%20-%20Bosch%20Pro%20Heavy%20Duty%20Impact%20Drill%20(750W)/o260252v54_lv-84560-12-GSB_16_RE_dyn_highres_02.png"
            }
        ],
        "price": "11160.000005599999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSB570 - Bosch 570w Impact Drill-GSB570 - Bosch 570w Impact Drill",
        "name": "GSB570 - Bosch 570w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "WhatsApp-Image-2020-06-10-at-09.50.48.jpeg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/GSB570%20-%20Bosch%20570w%20Impact%20Drill/WhatsApp-Image-2020-06-10-at-09.50.48.jpeg"
            }
        ],
        "price": "5489.999999199999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ID11008 - Ingco 1100w Impact Drill-ID11008 - Ingco 1100w Impact Drill",
        "name": "ID11008 - Ingco 1100w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "ID11008.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID11008%20-%20Ingco%201100w%20Impact%20Drill/ID11008.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ID6808 - Ingco 680w Impact Drill-ID6808 - Ingco 680w Impact Drill",
        "name": "ID6808 - Ingco 680w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "9ca782f12a3f42d9ac7354efd048365f.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID6808%20-%20Ingco%20680w%20Impact%20Drill/9ca782f12a3f42d9ac7354efd048365f.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ID8508 - Ingco 810w Impact Drill-ID8508 - Ingco 810w Impact Drill",
        "name": "ID8508 - Ingco 810w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "ID8508.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID8508%20-%20Ingco%20810w%20Impact%20Drill/ID8508.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG1071366 - Total 710w Impact Drill-TG1071366 - Total 710w Impact Drill",
        "name": "TG1071366 - Total 710w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "TG1071366E.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/TG1071366%20-%20Total%20710w%20Impact%20Drill/TG1071366E.jpg"
            }
        ],
        "price": "4250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG1081316 - Total 810w Impact Drill-TG1081316 - Total 810w Impact Drill",
        "name": "TG1081316 - Total 810w Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "TG1081316.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/TG1081316%20-%20Total%20810w%20Impact%20Drill/TG1081316.jpg"
            }
        ],
        "price": "4949.999993840001",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Bosch 18V 5.0Ah Cordless Battery-Bosch 18V 5.0Ah Cordless Battery",
        "name": "Bosch 18V 5.0Ah Cordless Battery",
        "description": "Technical data\r\nAdditional data\r\nBattery voltage\r\n18.0 V\r\nWeight\r\n0.62 kg\r\nBattery dimensions (width x length x height)\r\n76 x 113 x 58 mm",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o458332v54_GBA_18V_5Ah_Dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/Bosch%2018V%205.0Ah%20Cordless%20Battery/o458332v54_GBA_18V_5Ah_Dyn.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FCLI2001 - Ingco 20V (2AH) Cordless tools P20S Battery Charger-FCLI2001 - Ingco 20V (2AH) Cordless tools P20S Battery Charger",
        "name": "FCLI2001 - Ingco 20V (2AH) Cordless tools P20S Battery Charger",
        "description": "Input voltage:220-240V~50/60Hz\r\nOutput voltage:20V\r\nOutput current:2A\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "FCLI2001.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/FCLI2001%20-%20Ingco%2020V%20(2AH)%20Cordless%20tools%20P20S%20Battery%20Charger/FCLI2001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FCLI20411 - Ingco 20V (4AH) Cordless tools P20S Battery Charger-FCLI20411 - Ingco 20V (4AH) Cordless tools P20S Battery Charger",
        "name": "FCLI20411 - Ingco 20V (4AH) Cordless tools P20S Battery Charger",
        "description": "Input voltage:220-240V~50/60Hz\r\nOutput voltage:21V\r\nOutput current:4A\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "FCLI20411.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/FCLI20411%20-%20Ingco%2020V%20(4AH)%20Cordless%20tools%20P20S%20Battery%20Charger/FCLI20411.jpg"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GAX 18V-30 - Bosch 18V Cordless Charger-GAX 18V-30 - Bosch 18V Cordless Charger",
        "name": "GAX 18V-30 - Bosch 18V Cordless Charger",
        "description": "Technical data\r\nAdditional data\r\nBattery voltage\r\n18.0 V\r\nBattery charging voltage\r\n10.8 – 18 V\r\nCharge current\r\n3 A\r\nWeight\r\n0.8 kg\r\nInterfaces\r\nUSB port: 5 V, max. 2.1 A\r\nCharg. time at bat. cap. 2.0 Ah (80%/100%) approx.\r\n35/45 min\r\nCharg. time at bat. cap. 2.5 Ah (80%/100%) approx.\r\n40/65 min\r\nCharg. time at bat. cap. 3.0 Ah (80%/100%) approx.\r\n53/68 min\r\nCharg. time at bat. cap. 4.0 Ah (80%/100%) approx.\r\n65/85 min\r\nCharg. time at bat. cap. 5.0 Ah (80%/100%) approx.\r\n82/107 min\r\nCharg. time at bat. cap. 6.0 Ah (80%/100%) approx.\r\n100/130 min\r\nCharg. time at bat. cap. 6.3 Ah (80%/100%) approx.\r\n109/181 min",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o245049v54_P_A_GAX_18V-30_dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/GAX%2018V-30%20-%20Bosch%2018V%20Cordless%20Charger/o245049v54_P_A_GAX_18V-30_dyn.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBA 12V 2.0Ah - Bosch 12V 2.0Ah Cordless Battery-GBA 12V 2.0Ah - Bosch 12V 2.0Ah Cordless Battery",
        "name": "GBA 12V 2.0Ah - Bosch 12V 2.0Ah Cordless Battery",
        "description": "Technical data\r\nAdditional data\r\nBattery voltage\r\n12.0 V\r\nWeight\r\n0.18 kg\r\nBattery capacity\r\n2 Ah\r\nBattery dimensions (width x length x height)\r\n48 x 51 x 85 mm",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o275819v54_o275819v12_12V2-0Ah_dyn_02(2).webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/GBA%2012V%202.0Ah%20-%20Bosch%2012V%202.0Ah%20Cordless%20Battery/o275819v54_o275819v12_12V2-0Ah_dyn_02(2).webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HEAVY DUTY ProCORE18V 12.0Ah - Bosch 18V 12.0Ah Cordless Battery-HEAVY DUTY ProCORE18V 12.0Ah - Bosch 18V 12.0Ah Cordless Battery",
        "name": "HEAVY DUTY ProCORE18V 12.0Ah - Bosch 18V 12.0Ah Cordless Battery",
        "description": "Technical data\r\nAdditional data\r\nBattery capacity\r\n12 Ah\r\nWeight\r\n1.35 kg\r\nBattery voltage\r\n18.0 V\r\nBattery dimensions (width x length x height)\r\n78 x 116 x 92 mm",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o395624v54_GBA_18V_ProCORE_12Ah_dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/HEAVY%20DUTY%20ProCORE18V%2012.0Ah%20-%20Bosch%2018V%2012.0Ah%20Cordless%20Battery/o395624v54_GBA_18V_ProCORE_12Ah_dyn.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CDLI12202 - Ingco 12V Cordless Drill-CDLI12202 - Ingco 12V Cordless Drill",
        "name": "CDLI12202 - Ingco 12V Cordless Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CDLI12202 (1).jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/CDLI12202%20-%20Ingco%2012V%20Cordless%20Drill/CDLI12202%20(1).jpg"
            }
        ],
        "price": "4949.999993840001",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CIDLI20558 - Ingco 20V Cordless Impact Drill (55nm)-CIDLI20558 - Ingco 20V Cordless Impact Drill (55nm)",
        "name": "CIDLI20558 - Ingco 20V Cordless Impact Drill (55nm)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CIDLI20558.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/CIDLI20558%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20(55nm)/CIDLI20558.jpg"
            }
        ],
        "price": "10750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set-COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DCD776S2-B5 - Dewalt CORDLESS DRILL 18V XR LI-ION 1.5AH-DCD776S2-B5 - Dewalt CORDLESS DRILL 18V XR LI-ION 1.5AH",
        "name": "DCD776S2-B5 - Dewalt CORDLESS DRILL 18V XR LI-ION 1.5AH",
        "description": "Type: 18V Cordless Compact Hammer Drill Driver.\r\nChuck: 13mm single sleeve, keyless with spindle lock for quick bit changes.\r\nSpeeds: Two speed settings (0-450 / 0-1500 RPM) for control.\r\nHammer Function: For drilling into masonry.\r\nTorque: 15-position adjustable torque control.\r\nBattery: 1.5Ah XR Li-Ion.\r\nLight: Bright white LED with delay.\r\nErgonomics: Improved rubber grip for comfort",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "DCD776S2A_1.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/DCD776S2-B5%20-%20Dewalt%20CORDLESS%20DRILL%2018V%20XR%20LI-ION%201.5AH/DCD776S2A_1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DCD996P2-B5 - Dewalt CORDLESS DRILL 18V MAX HD XR LI- ION 5.0AH BRUSHLESS-DCD996P2-B5 - Dewalt CORDLESS DRILL 18V MAX HD XR LI- ION 5.0AH BRUSHLESS",
        "name": "DCD996P2-B5 - Dewalt CORDLESS DRILL 18V MAX HD XR LI- ION 5.0AH BRUSHLESS",
        "description": "Model: DEWALT DCD996P2-B5.\r\nVoltage: 18V.\r\nMotor: Brushless, providing longer run time and power.\r\nSpeeds: 3-speed transmission (0-450/1300/2000 RPM).\r\nChuck: 13mm (1/2\") keyless metal chuck.\r\nHammer Function: Delivers up to 38,250 BPM for masonry.\r\nBatteries: Comes with two 18V 5.0Ah XR Li-Ion batteries.\r\nLighting: 3-mode LED light with a flashlight function.\r\nIncluded: Charger, side handle, and a kit box.",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CORDLESS-DRILL-18V-MAX-H-D-XR-LI-ION-5.0AH-BRUSHLESS-2.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/DCD996P2-B5%20-%20Dewalt%20CORDLESS%20DRILL%2018V%20MAX%20HD%20XR%20LI-%20ION%205.0AH%20BRUSHLESS/CORDLESS-DRILL-18V-MAX-H-D-XR-LI-ION-5.0AH-BRUSHLESS-2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSB120 - Bosch 12V Cordless Impact Drill-GSB120 - Bosch 12V Cordless Impact Drill",
        "name": "GSB120 - Bosch 12V Cordless Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "Bosch-Cordless-Impact-Drill-GSB120.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/GSB120%20-%20Bosch%2012V%20Cordless%20Impact%20Drill/Bosch-Cordless-Impact-Drill-GSB120.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSB183-li - Bosch 18V Cordless Impact Drill-GSB183-li - Bosch 18V Cordless Impact Drill",
        "name": "GSB183-li - Bosch 18V Cordless Impact Drill",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "Pic.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/GSB183-li%20-%20Bosch%2018V%20Cordless%20Impact%20Drill/Pic.jpg"
            },
            {
                "name": "o394082v54_gsb_183-li_sos_06019K9100_120_180_1C0_1E0_1E2_1G0_1H0_1K0_1L0.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/GSB183-li%20-%20Bosch%2018V%20Cordless%20Impact%20Drill/o394082v54_gsb_183-li_sos_06019K9100_120_180_1C0_1E0_1E2_1G0_1H0_1K0_1L0.webp"
            }
        ],
        "price": "17500.000003999998",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set-HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "name": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "[HKTHP11651] HKTHP11651 165 PCS TOOLS SET - 20V.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/HKTHP11651%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/%5BHKTHP11651%5D%20HKTHP11651%20165%20PCS%20TOOLS%20SET%20-%2020V.jpg"
            }
        ],
        "price": "14000.000003199999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set-THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "name": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "THKTHP11652.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/THKTHP11652%20-%20Total%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/THKTHP11652.jpg"
            }
        ],
        "price": "13000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TIDLI20558E - Total 20v Cordless Impact Drill (55nm)-TIDLI20558E - Total 20v Cordless Impact Drill (55nm)",
        "name": "TIDLI20558E - Total 20v Cordless Impact Drill (55nm)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "TIDLI20558E.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/TIDLI20558E%20-%20Total%2020v%20Cordless%20Impact%20Drill%20(55nm)/TIDLI20558E.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSH 14 C - Bosch 1750w Demolition Breaker (28J)-GSH 14 C - Bosch 1750w Demolition Breaker (28J)",
        "name": "GSH 14 C - Bosch 1750w Demolition Breaker (28J)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o400770v54_o400770v12BoschGSH14CTOOLBOX01.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2014%20C%20-%20Bosch%201750w%20Demolition%20Breaker%20(28J)/o400770v54_o400770v12BoschGSH14CTOOLBOX01.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSH 16-28 - Bsoch 1750w Demolition Hammer (41J)-GSH 16-28 - Bsoch 1750w Demolition Hammer (41J)",
        "name": "GSH 16-28 - Bsoch 1750w Demolition Hammer (41J)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375915v54_GSH_16-28_sos_F4_0611335000_30_60.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2016-28%20-%20Bsoch%201750w%20Demolition%20Hammer%20(41J)/o375915v54_GSH_16-28_sos_F4_0611335000_30_60.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSH 16-30 - Bosch 1750w Demolition Breaker (41J)-GSH 16-30 - Bosch 1750w Demolition Breaker (41J)",
        "name": "GSH 16-30 - Bosch 1750w Demolition Breaker (41J)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375916v54_GSH_16-30_sos_F4_0611335100_40_B0_P0.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2016-30%20-%20Bosch%201750w%20Demolition%20Breaker%20(41J)/o375916v54_GSH_16-30_sos_F4_0611335100_40_B0_P0.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSH 27 VC - Bosch 1900w Demolition Breaker-GSH 27 VC - Bosch 1900w Demolition Breaker",
        "name": "GSH 27 VC - Bosch 1900w Demolition Breaker",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375917v54_GSH_27_VC_sos_F4_061130A000_30_40_80_B0_P0.png",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2027%20VC%20-%20Bosch%201900w%20Demolition%20Breaker/o375917v54_GSH_27_VC_sos_F4_061130A000_30_40_80_B0_P0.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PRO GSH 5 - Bosch 1100w Demolition Hammer-PRO GSH 5 - Bosch 1100w Demolition Hammer",
        "name": "PRO GSH 5 - Bosch 1100w Demolition Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o108203v54_GSH_5_dynamic.png",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/PRO%20GSH%205%20-%20Bosch%201100w%20Demolition%20Hammer/o108203v54_GSH_5_dynamic.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PRO GSH 500 - Bosch 1100w Demolition Hammer-PRO GSH 500 - Bosch 1100w Demolition Hammer",
        "name": "PRO GSH 500 - Bosch 1100w Demolition Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o340423v54_gsh_500_full_execution.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/PRO%20GSH%20500%20-%20Bosch%201100w%20Demolition%20Hammer/o340423v54_gsh_500_full_execution.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TH215456 - Total 1700w Demolition Breaker (Hammer)-TH215456 - Total 1700w Demolition Breaker (Hammer)",
        "name": "TH215456 - Total 1700w Demolition Breaker (Hammer)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "TH215456.jpg",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/TH215456%20-%20Total%201700w%20Demolition%20Breaker%20(Hammer)/TH215456.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TH220502 - Total 2200w Demolition Breaker (Hammer)-TH220502 - Total 2200w Demolition Breaker (Hammer)",
        "name": "TH220502 - Total 2200w Demolition Breaker (Hammer)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "TH220502.jpg",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/TH220502%20-%20Total%202200w%20Demolition%20Breaker%20(Hammer)/TH220502.jpg"
            }
        ],
        "price": "90000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TDWS105016 - Total Drywall Sander-TDWS105016 - Total Drywall Sander",
        "name": "TDWS105016 - Total Drywall Sander",
        "description": "SPECIFICATIONS\r\nVOLTAGE\t230V - 50Hz\r\nPOWER\t1.050W\r\nNO LOAD SPEED\t600 - 2.300 rpm\r\nSANDING PAPER DIAMETER\t215mm\r\nDUST HOSE DIAMETER\t38mm\r\nWEIGHT\t7 Kg",
        "category": "Power Tools",
        "subcategory": "Drywall Sander",
        "images": [
            {
                "name": "TWS10501.jpg",
                "url": "/website%20products/Power%20Tools/Drywall%20Sander/TDWS105016%20-%20Total%20Drywall%20Sander/TWS10501.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GH0 700 - Bosch ELectric Planer-GH0 700 - Bosch ELectric Planer",
        "name": "GH0 700 - Bosch ELectric Planer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "o323133v54_lv-178630-12-gho_700_full_execution_02.png",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/GH0%20700%20-%20Bosch%20ELectric%20Planer/o323133v54_lv-178630-12-gho_700_full_execution_02.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PL10508 - Ingco 1050w Electric Planer-PL10508 - Ingco 1050w Electric Planer",
        "name": "PL10508 - Ingco 1050w Electric Planer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "[PL10508] PL10508 ELECTRIC PLANER.png",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/PL10508%20-%20Ingco%201050w%20Electric%20Planer/%5BPL10508%5D%20PL10508%20ELECTRIC%20PLANER.png"
            }
        ],
        "price": "12500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SPG3508 - Ingco 450w Electric Spray Gun-SPG3508 - Ingco 450w Electric Spray Gun",
        "name": "SPG3508 - Ingco 450w Electric Spray Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "SPG3508.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/SPG3508%20-%20Ingco%20450w%20Electric%20Spray%20Gun/SPG3508.jpg"
            }
        ],
        "price": "4949.999993840001",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SPG5008 - Ingco 550w Electric Spray Gun-SPG5008 - Ingco 550w Electric Spray Gun",
        "name": "SPG5008 - Ingco 550w Electric Spray Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "SPG5008.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/SPG5008%20-%20Ingco%20550w%20Electric%20Spray%20Gun/SPG5008.jpg"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TSGLI20042 - Total 20v Cordless Spray Gun-TSGLI20042 - Total 20v Cordless Spray Gun",
        "name": "TSGLI20042 - Total 20v Cordless Spray Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TSGLI2004.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TSGLI20042%20-%20Total%2020v%20Cordless%20Spray%20Gun/TSGLI2004.jpg"
            }
        ],
        "price": "9000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TT4506 - Total 450w Electric Spray Gun-TT4506 - Total 450w Electric Spray Gun",
        "name": "TT4506 - Total 450w Electric Spray Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TT3506.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TT4506%20-%20Total%20450w%20Electric%20Spray%20Gun/TT3506.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TT5006-2 - Total 550w Electric Spray Gun-TT5006-2 - Total 550w Electric Spray Gun",
        "name": "TT5006-2 - Total 550w Electric Spray Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TT5006-2.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TT5006-2%20-%20Total%20550w%20Electric%20Spray%20Gun/TT5006-2.jpg"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GG148-8 - Ingco Glue Gun-GG148-8 - Ingco Glue Gun",
        "name": "GG148-8 - Ingco Glue Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Glue Gun",
        "images": [
            {
                "name": "GG148-8.jpg",
                "url": "/website%20products/Power%20Tools/Glue%20Gun/GG148-8%20-%20Ingco%20Glue%20Gun/GG148-8.jpg"
            }
        ],
        "price": "1375.00000396",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TT201116 - Total Glue Gun-TT201116 - Total Glue Gun",
        "name": "TT201116 - Total Glue Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Glue Gun",
        "images": [
            {
                "name": "TT201116.jpg",
                "url": "/website%20products/Power%20Tools/Glue%20Gun/TT201116%20-%20Total%20Glue%20Gun/TT201116.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GHG180 - Bosch Heat Gun-GHG180 - Bosch Heat Gun",
        "name": "GHG180 - Bosch Heat Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Heat Guns",
        "images": [
            {
                "name": "o284269v54_lv-166639-12-FullExecution_060194D0L0_GHG180.webp",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/GHG180%20-%20Bosch%20Heat%20Gun/o284269v54_lv-166639-12-FullExecution_060194D0L0_GHG180.webp"
            }
        ],
        "price": "5989.999996",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HG5030 - Makita Heat Gun-HG5030 - Makita Heat Gun",
        "name": "HG5030 - Makita Heat Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Heat Guns",
        "images": [
            {
                "name": "HG5030_C2L0.jpg",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/HG5030%20-%20Makita%20Heat%20Gun/HG5030_C2L0.jpg"
            }
        ],
        "price": "5399.9999956",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "UY-PSC2000 - Uyus 2000w Heat Gun-UY-PSC2000 - Uyus 2000w Heat Gun",
        "name": "UY-PSC2000 - Uyus 2000w Heat Gun",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Heat Guns",
        "images": [
            {
                "name": "UY-PSC2000_1_400x.webp",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/UY-PSC2000%20-%20Uyus%202000w%20Heat%20Gun/UY-PSC2000_1_400x.webp"
            },
            {
                "name": "UY-PSC2000_400x.webp",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/UY-PSC2000%20-%20Uyus%202000w%20Heat%20Gun/UY-PSC2000_400x.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CIWLI20135 - Ingco 1350nm Cordless Impact Wrench-CIWLI20135 - Ingco 1350nm Cordless Impact Wrench",
        "name": "CIWLI20135 - Ingco 1350nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20135.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20135%20-%20Ingco%201350nm%20Cordless%20Impact%20Wrench/CIWLI20135.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CIWLI20236 - Ingco 230nm Cordless Impact Wrench-CIWLI20236 - Ingco 230nm Cordless Impact Wrench",
        "name": "CIWLI20236 - Ingco 230nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20236.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20236%20-%20Ingco%20230nm%20Cordless%20Impact%20Wrench/CIWLI20236.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CIWLI20401 - Ingco 400nm Cordless Impact Wrench-CIWLI20401 - Ingco 400nm Cordless Impact Wrench",
        "name": "CIWLI20401 - Ingco 400nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20401.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20401%20-%20Ingco%20400nm%20Cordless%20Impact%20Wrench/CIWLI20401.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CIWLI20851tm - Ingco 850nm Cordless Impact Wrench-CIWLI20851tm - Ingco 850nm Cordless Impact Wrench",
        "name": "CIWLI20851tm - Ingco 850nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20851.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20851tm%20-%20Ingco%20850nm%20Cordless%20Impact%20Wrench/CIWLI20851.jpg"
            }
        ],
        "price": "11500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "COSLI23048 - Ingco 2pcs Impact Wrench Combo Set-COSLI23048 - Ingco 2pcs Impact Wrench Combo Set",
        "name": "COSLI23048 - Ingco 2pcs Impact Wrench Combo Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "[COSLI23048] COSLI23048 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/COSLI23048%20-%20Ingco%202pcs%20Impact%20Wrench%20Combo%20Set/%5BCOSLI23048%5D%20COSLI23048%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "COSLI240789 - Ingco Cordless Impact Wrench Combo Kit-COSLI240789 - Ingco Cordless Impact Wrench Combo Kit",
        "name": "COSLI240789 - Ingco Cordless Impact Wrench Combo Kit",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "COSLI240789.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/COSLI240789%20-%20Ingco%20Cordless%20Impact%20Wrench%20Combo%20Kit/COSLI240789.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TIWLI2040 - Total 400nm Cordless impact wrench-TIWLI2040 - Total 400nm Cordless impact wrench",
        "name": "TIWLI2040 - Total 400nm Cordless impact wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2040.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2040%20-%20Total%20400nm%20Cordless%20impact%20wrench/TIWLI2040.jpg"
            }
        ],
        "price": "14500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TIWLI2050 - Total 500nm Cordless Impact Wrench-TIWLI2050 - Total 500nm Cordless Impact Wrench",
        "name": "TIWLI2050 - Total 500nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2050.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2050%20-%20Total%20500nm%20Cordless%20Impact%20Wrench/TIWLI2050.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TIWLI2085 - Total 850nm Cordless Impact Wrench-TIWLI2085 - Total 850nm Cordless Impact Wrench",
        "name": "TIWLI2085 - Total 850nm Cordless Impact Wrench",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2085.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2085%20-%20Total%20850nm%20Cordless%20Impact%20Wrench/TIWLI2085.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "79551 - Tolsen 800W Jigsaw-79551 - Tolsen 800W Jigsaw",
        "name": "79551 - Tolsen 800W Jigsaw",
        "description": "• CE approved\r\n• Rated voltage: 230-240V\r\n• Frequency: 50/60Hz\r\n• Input power: 800W\r\n• Cutting speed: 800-3200/min\r\n• Stroke Length: 20mm\r\n• Max. in steel: 8mm\r\n• Max. in wood: 80mm\r\n• Footplate tilt: 0-45°, left or right\r\n• Plug & cable: VDE approved\r\n• Blade type: T-shank\r\n• Accessories:\r\n1pc dust adapter\r\n1pc hex key\r\n1pc blade for wood\r\n1pc parallel guide\r\n• Packing: color box",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "800W-JIG-SAW-2-768x768.jpg.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/79551%20-%20Tolsen%20800W%20Jigsaw/800W-JIG-SAW-2-768x768.jpg.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GST 650 - Bosch 450w Jigsaw-GST 650 - Bosch 450w Jigsaw",
        "name": "GST 650 - Bosch 450w Jigsaw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "57452b7caf571feed32241336e0aad30@2x.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/GST%20650%20-%20Bosch%20450w%20Jigsaw/57452b7caf571feed32241336e0aad30@2x.webp"
            }
        ],
        "price": "6440.0000024",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GST 750 - Bosch 520w Jigsaw-GST 750 - Bosch 520w Jigsaw",
        "name": "GST 750 - Bosch 520w Jigsaw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "o402243v54_GST_750_dyn.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/GST%20750%20-%20Bosch%20520w%20Jigsaw/o402243v54_GST_750_dyn.webp"
            }
        ],
        "price": "14699.9999964",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "JS57028 - Ingco 570w Jigsaw-JS57028 - Ingco 570w Jigsaw",
        "name": "JS57028 - Ingco 570w Jigsaw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "JS57028.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/JS57028%20-%20Ingco%20570w%20Jigsaw/JS57028.jpg"
            }
        ],
        "price": "5750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS206656 - Total 570w Jigsaw-TS206656 - Total 570w Jigsaw",
        "name": "TS206656 - Total 570w Jigsaw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "TS206656.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/TS206656%20-%20Total%20570w%20Jigsaw/TS206656.jpg"
            }
        ],
        "price": "5500.00000308",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS2081006 - Total 800W Jigsaw-TS2081006 - Total 800W Jigsaw",
        "name": "TS2081006 - Total 800W Jigsaw",
        "description": "VOLTAGE - 230V - 50Hz\r\nPOWER - 800W\r\nNO LOAD SPEED - 800 - 3.000 rpm\r\nCUTTING DEPTH - 100mm(WOOD)/ 10mm(STEEL)/10mm(PLASTIC)\r\nWEIGHT - 2.5 Kg",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "TS2081006.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/TS2081006%20-%20Total%20800W%20Jigsaw/TS2081006.jpg"
            }
        ],
        "price": "8249.99999824",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "COS35568 - ingco 2400w Metal Cut-off Saw-COS35568 - ingco 2400w Metal Cut-off Saw",
        "name": "COS35568 - ingco 2400w Metal Cut-off Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "COS35568.jpg",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/COS35568%20-%20ingco%202400w%20Metal%20Cut-off%20Saw/COS35568.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GCO 220 - Bosch 2200w Metal Cut-off Saw-GCO 220 - Bosch 2200w Metal Cut-off Saw",
        "name": "GCO 220 - Bosch 2200w Metal Cut-off Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "o288412v54_274242-gco_200_dyn_01.webp",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/GCO%20220%20-%20Bosch%202200w%20Metal%20Cut-off%20Saw/o288412v54_274242-gco_200_dyn_01.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GCO 240 - Bosch 2400w Metal Cut-off Saw-GCO 240 - Bosch 2400w Metal Cut-off Saw",
        "name": "GCO 240 - Bosch 2400w Metal Cut-off Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "o275849v54_lv-98432-12-GCO_2400_dyn_highres.webp",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/GCO%20240%20-%20Bosch%202400w%20Metal%20Cut-off%20Saw/o275849v54_lv-98432-12-GCO_2400_dyn_highres.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Bosch Dremel 3000-Bosch Dremel 3000",
        "name": "Bosch Dremel 3000",
        "description": "DREMEL 3000-15 Multi-Tool (130 Watt), 15 Accessories\r\nFor all of your precision DIY projects: carve, engrave, rout, cut, sand, grind, sharpen, polish and clean\r\nWork on your projects for extended periods of time\r\nTackle your precision DIY projects straight away with the 15 included accessories\r\nEZ Twist: Switch between applications within 1 or more projects easily",
        "category": "Power Tools",
        "subcategory": "Mini Grinder - Dremel Tool",
        "images": [
            {
                "name": "F0133000JB-DREMEL-3000-en-KE-dremelmdb01-o16229v113-dremel-3000-15.png",
                "url": "/website%20products/Power%20Tools/Mini%20Grinder%20-%20Dremel%20Tool/Bosch%20Dremel%203000/F0133000JB-DREMEL-3000-en-KE-dremelmdb01-o16229v113-dremel-3000-15.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TG513326 - Total Mini Grinder Dremel Set-TG513326 - Total Mini Grinder Dremel Set",
        "name": "TG513326 - Total Mini Grinder Dremel Set",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mini Grinder - Dremel Tool",
        "images": [
            {
                "name": "TG513326E.jpg",
                "url": "/website%20products/Power%20Tools/Mini%20Grinder%20-%20Dremel%20Tool/TG513326%20-%20Total%20Mini%20Grinder%20Dremel%20Set/TG513326E.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "BM2S24001 - Ingco 2400w Mitre Saw-BM2S24001 - Ingco 2400w Mitre Saw",
        "name": "BM2S24001 - Ingco 2400w Mitre Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "BM2S24001.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/BM2S24001%20-%20Ingco%202400w%20Mitre%20Saw/BM2S24001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "BMS14007 - Ingco 1400w Mitre Saw-BMS14007 - Ingco 1400w Mitre Saw",
        "name": "BMS14007 - Ingco 1400w Mitre Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "BMS14007.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/BMS14007%20-%20Ingco%201400w%20Mitre%20Saw/BMS14007.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GCM 216 - Bosch 1100w Mitre Saw-GCM 216 - Bosch 1100w Mitre Saw",
        "name": "GCM 216 - Bosch 1100w Mitre Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "o357457v54_GCM_216_dyn.webp",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/GCM%20216%20-%20Bosch%201100w%20Mitre%20Saw/o357457v54_GCM_216_dyn.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GCM 254 - Bosch 1750w Mitre Saw-GCM 254 - Bosch 1750w Mitre Saw",
        "name": "GCM 254 - Bosch 1750w Mitre Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "o404641v54_GCM_254_dyn_REE.webp",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/GCM%20254%20-%20Bosch%201750w%20Mitre%20Saw/o404641v54_GCM_254_dyn_REE.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TS42142107 - Total 1400 Mitre Saw-TS42142107 - Total 1400 Mitre Saw",
        "name": "TS42142107 - Total 1400 Mitre Saw",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "TS42142107.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/TS42142107%20-%20Total%201400%20Mitre%20Saw/TS42142107.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CBNLI2016 - Ingco Cordless Brad Nailer-CBNLI2016 - Ingco Cordless Brad Nailer",
        "name": "CBNLI2016 - Ingco Cordless Brad Nailer",
        "description": "Specifications:\r\nVoltage:20V\r\nWith 1pcs 20V 2.0AH battery (FBLI2001)and 1pcs charge (FCLI2001E)\r\nNail type:F15~F50\r\nSuitable for:ANA18201,ANA18251,ANA18301,ANA18351,ANA18401,ANA18501\r\nDrive rate:2.5nails/s\r\nMagazine capacity:100pcs\r\nRamp up time:80ms\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "CBNLI2016.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/CBNLI2016%20-%20Ingco%20Cordless%20Brad%20Nailer/CBNLI2016.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CBNLI3508 - Ingco Cordless Brad Nailer-CBNLI3508 - Ingco Cordless Brad Nailer",
        "name": "CBNLI3508 - Ingco Cordless Brad Nailer",
        "description": "Voltage20V\r\nNail type F15~F35\r\nDrive rate 3 nailss\r\nMagazine capacity 105pcs\r\nNet weight 1.7kg\r\nInclude\r\n1000 Pcs brad nails (35mm)\r\n1pcs air nozzle\r\n1pcs pin\r\n1 Pcs 20V 2.0AH battery(FBLI2001)\r\n1 Pcs charger(FCLI2001E)\r\nCharge volts 220-240V~5060Hz\r\nPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "CBNLI3508.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/CBNLI3508%20-%20Ingco%20Cordless%20Brad%20Nailer/CBNLI3508.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CBNLI5005TM - Ihgco Cordless Brad Nailer-CBNLI5005TM - Ihgco Cordless Brad Nailer",
        "name": "CBNLI5005TM - Ihgco Cordless Brad Nailer",
        "description": "Voltage:20V\r\nNail type: F15~F50\r\nDrive rate: 3 nails/s\r\nMagazine capacity: 105pcs\r\nBrushless motor\r\nInclude:\r\n1 Pcs 140mm blade\r\n1000 Pcs brad nails(50mm)\r\n1 Pcs air nozzle\r\n1 Pcs pin\r\n\r\nBattery and charger sold separately",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "[CBNLI5005TM] CBNLI5005TM CORDLESS BRAD NAILER.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/CBNLI5005TM%20-%20Ihgco%20Cordless%20Brad%20Nailer/%5BCBNLI5005TM%5D%20CBNLI5005TM%20CORDLESS%20BRAD%20NAILER.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TT328151 - Total 1400w Plastic Pipe Welding Tool (PPR Welding Machine)-TT328151 - Total 1400w Plastic Pipe Welding Tool (PPR Welding Machine)",
        "name": "TT328151 - Total 1400w Plastic Pipe Welding Tool (PPR Welding Machine)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Pipe Welding (PPR) Tools",
        "images": [
            {
                "name": "TT328151.jpg",
                "url": "/website%20products/Power%20Tools/Pipe%20Welding%20(PPR)%20Tools/TT328151%20-%20Total%201400w%20Plastic%20Pipe%20Welding%20Tool%20(PPR%20Welding%20Machine)/TT328151.jpg"
            }
        ],
        "price": "8500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBH 12-52 DV Professional - Bosch 1700w Rotary Hammer-GBH 12-52 DV Professional - Bosch 1700w Rotary Hammer",
        "name": "GBH 12-52 DV Professional - Bosch 1700w Rotary Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o375983v54_GBH_12-52_DV_sos_F4_0611266000_30_40_60_B0.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%2012-52%20DV%20Professional%20-%20Bosch%201700w%20Rotary%20Hammer/o375983v54_GBH_12-52_DV_sos_F4_0611266000_30_40_60_B0.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBH 2-24 DRE Professional - Bosch 800w Rotary Hammer-GBH 2-24 DRE Professional - Bosch 800w Rotary Hammer",
        "name": "GBH 2-24 DRE Professional - Bosch 800w Rotary Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o246408v54_lv-105498-12-GBH2-24DRE_dyn_02.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%202-24%20DRE%20Professional%20-%20Bosch%20800w%20Rotary%20Hammer/o246408v54_lv-105498-12-GBH2-24DRE_dyn_02.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBH 2-26 F Professional - Bosch 830w Rotary Hammer-GBH 2-26 F Professional - Bosch 830w Rotary Hammer",
        "name": "GBH 2-26 F Professional - Bosch 830w Rotary Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o376079v54_GBH_2-26_F_sos_F4_06112A4070_00_30_60.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%202-26%20F%20Professional%20-%20Bosch%20830w%20Rotary%20Hammer/o376079v54_GBH_2-26_F_sos_F4_06112A4070_00_30_60.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GBH 8-45 D Professional - Bosch 1500w Rotary Hammer-GBH 8-45 D Professional - Bosch 1500w Rotary Hammer",
        "name": "GBH 8-45 D Professional - Bosch 1500w Rotary Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o375979v54_GBH_8-45_D_sos_F4_0611265100_30_40_60.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%208-45%20D%20Professional%20-%20Bosch%201500w%20Rotary%20Hammer/o375979v54_GBH_8-45_D_sos_F4_0611265100_30_40_60.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RGH9028 - Ingco 800w Rotary Hammer (1 Chuck)-RGH9028 - Ingco 800w Rotary Hammer (1 Chuck)",
        "name": "RGH9028 - Ingco 800w Rotary Hammer (1 Chuck)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "RGH9028.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/RGH9028%20-%20Ingco%20800w%20Rotary%20Hammer%20(1%20Chuck)/RGH9028.jpg"
            }
        ],
        "price": "9500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RGH9028-2 - Ingco 800w Rotary Hammer (2 Chuck)-RGH9028-2 - Ingco 800w Rotary Hammer (2 Chuck)",
        "name": "RGH9028-2 - Ingco 800w Rotary Hammer (2 Chuck)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "RGH9028-2.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/RGH9028-2%20-%20Ingco%20800w%20Rotary%20Hammer%20(2%20Chuck)/RGH9028-2.jpg"
            }
        ],
        "price": "12000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TH110266 - Total 1050w Rotary Hammer-TH110266 - Total 1050w Rotary Hammer",
        "name": "TH110266 - Total 1050w Rotary Hammer",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "TH110266.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/TH110266%20-%20Total%201050w%20Rotary%20Hammer/TH110266.jpg"
            }
        ],
        "price": "13500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TH308268 - Total 800w Rotary Hammer (1 Chuck)-TH308268 - Total 800w Rotary Hammer (1 Chuck)",
        "name": "TH308268 - Total 800w Rotary Hammer (1 Chuck)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "TH308268.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/TH308268%20-%20Total%20800w%20Rotary%20Hammer%20(1%20Chuck)/TH308268.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TH308268-2 - Total 800w Rotary Hammer (2 Chucks)-TH308268-2 - Total 800w Rotary Hammer (2 Chucks)",
        "name": "TH308268-2 - Total 800w Rotary Hammer (2 Chucks)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "TH308268-2.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/TH308268-2%20-%20Total%20800w%20Rotary%20Hammer%20(2%20Chucks)/TH308268-2.jpg"
            }
        ],
        "price": "11500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GKF 550 - Bosch 550w Palm Router-GKF 550 - Bosch 550w Palm Router",
        "name": "GKF 550 - Bosch 550w Palm Router",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "o316066v54_gkf_550_dyn_1.webp",
                "url": "/website%20products/Power%20Tools/Routers/GKF%20550%20-%20Bosch%20550w%20Palm%20Router/o316066v54_gkf_550_dyn_1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GOF 130 - Bosch 1300w Router-GOF 130 - Bosch 1300w Router",
        "name": "GOF 130 - Bosch 1300w Router",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "o345597v54_433.webp",
                "url": "/website%20products/Power%20Tools/Routers/GOF%20130%20-%20Bosch%201300w%20Router/o345597v54_433.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PLM6001 - Ingco Laminate Trimmer (Palm Router)-PLM6001 - Ingco Laminate Trimmer (Palm Router)",
        "name": "PLM6001 - Ingco Laminate Trimmer (Palm Router)",
        "description": "Voltage: 220-240V ~ 50/60Hz\r\nInput Power: 600W\r\nNo-load Speed: 34,500 rpm\r\nCollet Size: 6mm and 1/4\"\r\nIncludes:\r\n1 pcs Template guide\r\n1 set Trimmer guide\r\n1 set Straight guide\r\n1 set Extra carbon brushes\r\nPacked by: Color box",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "PLM6001.jpg",
                "url": "/website%20products/Power%20Tools/Routers/PLM6001%20-%20Ingco%20Laminate%20Trimmer%20(Palm%20Router)/PLM6001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RT12008 - Ingco 1200w Router-RT12008 - Ingco 1200w Router",
        "name": "RT12008 - Ingco 1200w Router",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "RT12008.jpg",
                "url": "/website%20products/Power%20Tools/Routers/RT12008%20-%20Ingco%201200w%20Router/RT12008.jpg"
            }
        ],
        "price": "12500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RT22008 - Ingco 2200w Router-RT22008 - Ingco 2200w Router",
        "name": "RT22008 - Ingco 2200w Router",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "RT22008.jpg",
                "url": "/website%20products/Power%20Tools/Routers/RT22008%20-%20Ingco%202200w%20Router/RT22008.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TLT6001 - Total Laminate Trimmer (Palm Router)-TLT6001 - Total Laminate Trimmer (Palm Router)",
        "name": "TLT6001 - Total Laminate Trimmer (Palm Router)",
        "description": "Voltage:220-240V~50/60Hz\r\nInput power:600W\r\nNo-load speed: 34500rpm\r\nCollet size: 6mm and 1/4\"\r\nInclude:\r\n2Pcs wrenches\r\n1Pcs template guide\r\n1Pcs horizontal guide rail\r\n1Pcs linear guide\r\n1Set roller components\r\n1Set extra carbon brushes\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "TLT6001.jpg",
                "url": "/website%20products/Power%20Tools/Routers/TLT6001%20-%20Total%20Laminate%20Trimmer%20(Palm%20Router)/TLT6001.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TR111226 - Total 2200w Router-TR111226 - Total 2200w Router",
        "name": "TR111226 - Total 2200w Router",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "TR111226.jpg",
                "url": "/website%20products/Power%20Tools/Routers/TR111226%20-%20Total%202200w%20Router/TR111226.jpg"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "FS3208 - Ingco 350w Finishing Sander-FS3208 - Ingco 350w Finishing Sander",
        "name": "FS3208 - Ingco 350w Finishing Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "FS3208.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/FS3208%20-%20Ingco%20350w%20Finishing%20Sander/FS3208.jpg"
            }
        ],
        "price": "7000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GEX 125 - Bosch 280w Random Orbital Sander-GEX 125 - Bosch 280w Random Orbital Sander",
        "name": "GEX 125 - Bosch 280w Random Orbital Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o407281v54_gex_125_BeautyShot.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%20125%20-%20Bosch%20280w%20Random%20Orbital%20Sander/o407281v54_gex_125_BeautyShot.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GEX 125-1 AE - Bosch 250w Random Orbital Sander-GEX 125-1 AE - Bosch 250w Random Orbital Sander",
        "name": "GEX 125-1 AE - Bosch 250w Random Orbital Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o361136v54_GEX_125-1_AE_sos_0601387503.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%20125-1%20AE%20-%20Bosch%20250w%20Random%20Orbital%20Sander/o361136v54_GEX_125-1_AE_sos_0601387503.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GEX 40-150 - Bosch 400w Random Orbital Sander-GEX 40-150 - Bosch 400w Random Orbital Sander",
        "name": "GEX 40-150 - Bosch 400w Random Orbital Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o379329v54_GEX_40-150_sos_F4_060137B250_02.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%2040-150%20-%20Bosch%20400w%20Random%20Orbital%20Sander/o379329v54_GEX_40-150_sos_F4_060137B250_02.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSS 140 - Bosch 220w Finishing Sander-GSS 140 - Bosch 220w Finishing Sander",
        "name": "GSS 140 - Bosch 220w Finishing Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o428054v54_428054.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GSS%20140%20-%20Bosch%20220w%20Finishing%20Sander/o428054v54_428054.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "GSS 20-18 - Bosch 200w Finishing Sander-GSS 20-18 - Bosch 200w Finishing Sander",
        "name": "GSS 20-18 - Bosch 200w Finishing Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o476965v54_GSS_20-18_Dyn.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GSS%2020-18%20-%20Bosch%20200w%20Finishing%20Sander/o476965v54_GSS_20-18_Dyn.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PBS12001 - Ingco Belt Sander-PBS12001 - Ingco Belt Sander",
        "name": "PBS12001 - Ingco Belt Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "PBS12001.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/PBS12001%20-%20Ingco%20Belt%20Sander/PBS12001.jpg"
            }
        ],
        "price": "21500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RS3208 - Ingco 320w Rotary Sander-RS3208 - Ingco 320w Rotary Sander",
        "name": "RS3208 - Ingco 320w Rotary Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "RS3208.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/RS3208%20-%20Ingco%20320w%20Rotary%20Sander/RS3208.jpg"
            }
        ],
        "price": "8250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "RS4516 - Ingco 450w Rotary Sander-RS4516 - Ingco 450w Rotary Sander",
        "name": "RS4516 - Ingco 450w Rotary Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "[RS4516] RS4516 ROTARY SANDER 450W.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/RS4516%20-%20Ingco%20450w%20Rotary%20Sander/%5BRS4516%5D%20RS4516%20ROTARY%20SANDER%20450W.jpg"
            }
        ],
        "price": "8000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TF2061506 - Total Rotary Sander (450W)-TF2061506 - Total Rotary Sander (450W)",
        "name": "TF2061506 - Total Rotary Sander (450W)",
        "description": "Voltage:220-240V~50/60Hz\r\nInput power:450W\r\nNo-load speed:6000-12000rpm\r\nDia of sanding pad:150mm\r\nVelcrops base\r\nVariable speed control\r\nWith 5pcs sand papers\r\nWith 1set extra carbon brushes\r\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "TF2061506.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/TF2061506%20-%20Total%20Rotary%20Sander%20(450W)/TF2061506.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TF2131256 - Total 350w Rotary Sander-TF2131256 - Total 350w Rotary Sander",
        "name": "TF2131256 - Total 350w Rotary Sander",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "TF2031256-1.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/TF2131256%20-%20Total%20350w%20Rotary%20Sander/TF2031256-1.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SI01606 - Ingco 70W Soldering Iron (Variable Temp)-SI01606 - Ingco 70W Soldering Iron (Variable Temp)",
        "name": "SI01606 - Ingco 70W Soldering Iron (Variable Temp)",
        "description": "Voltage:110-120V~50/60Hz\r\nInput power: 70W\r\nPreheat: time: 120s\r\nMax. temperature: 500℃\r\nCeramic heating element\r\nStraight, tip head\r\nAdjustable temperature\r\nFast and stable heating, easy to replace\r\nWith a piece of holder\r\nLong life replaceable tip\r\nPacked by double blister",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "614392904_1964640621114962_3363497205725538829_n (1).jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01606%20-%20Ingco%2070W%20Soldering%20Iron%20(Variable%20Temp)/614392904_1964640621114962_3363497205725538829_n%20(1).jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SI01608 - Ingco 90W Soldering Iron (Variable Temp)-SI01608 - Ingco 90W Soldering Iron (Variable Temp)",
        "name": "SI01608 - Ingco 90W Soldering Iron (Variable Temp)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "611665266_1433256218815284_6687341826696230321_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01608%20-%20Ingco%2090W%20Soldering%20Iron%20(Variable%20Temp)/611665266_1433256218815284_6687341826696230321_n.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SI01610 - Ingco 120W Soldering Iron (Variable Temp)-SI01610 - Ingco 120W Soldering Iron (Variable Temp)",
        "name": "SI01610 - Ingco 120W Soldering Iron (Variable Temp)",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "613239581_757788213464455_2855882867687363714_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01610%20-%20Ingco%20120W%20Soldering%20Iron%20(Variable%20Temp)/613239581_757788213464455_2855882867687363714_n.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TET1606 - Total 60W Electric Soldering Iron-TET1606 - Total 60W Electric Soldering Iron",
        "name": "TET1606 - Total 60W Electric Soldering Iron",
        "description": "Voltage:220-240V~50/60Hz\r\nInput power:60W\r\nPreheat.time:3~5minutes\r\nStraight,tip head\r\nWith a piece of support\r\nLong life replaceble tip\r\nPacked by sliding card",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "616660266_869643895926808_8679140178579609251_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/TET1606%20-%20Total%2060W%20Electric%20Soldering%20Iron/616660266_869643895926808_8679140178579609251_n.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ING-MMA1302 - Ingco 130A Welding Machine-ING-MMA1302 - Ingco 130A Welding Machine",
        "name": "ING-MMA1302 - Ingco 130A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA1302.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA1302%20-%20Ingco%20130A%20Welding%20Machine/ING-MMA1302.jpg"
            }
        ],
        "price": "14500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ING-MMA1606 - Ingco 160A Welding Machine-ING-MMA1606 - Ingco 160A Welding Machine",
        "name": "ING-MMA1606 - Ingco 160A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA1606.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA1606%20-%20Ingco%20160A%20Welding%20Machine/ING-MMA1606.jpg"
            }
        ],
        "price": "17000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ING-MMA18059 - Ingco 180A Welding Machine-ING-MMA18059 - Ingco 180A Welding Machine",
        "name": "ING-MMA18059 - Ingco 180A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA18059.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA18059%20-%20Ingco%20180A%20Welding%20Machine/ING-MMA18059.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ING-MMA20069 - Ingco 200A Welding Machine-ING-MMA20069 - Ingco 200A Welding Machine",
        "name": "ING-MMA20069 - Ingco 200A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA20069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA20069%20-%20Ingco%20200A%20Welding%20Machine/ING-MMA20069.jpg"
            }
        ],
        "price": "19500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ING-MMA2508 - Ingco 250A Welding Machine-ING-MMA2508 - Ingco 250A Welding Machine",
        "name": "ING-MMA2508 - Ingco 250A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "[ING-MMA2506] ING-MMA2506 INVERTER WELDING MACHINE 250A.png",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA2508%20-%20Ingco%20250A%20Welding%20Machine/%5BING-MMA2506%5D%20ING-MMA2506%20INVERTER%20WELDING%20MACHINE%20250A.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TW21306 - Total 130A Welding Machine-TW21306 - Total 130A Welding Machine",
        "name": "TW21306 - Total 130A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW21306.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW21306%20-%20Total%20130A%20Welding%20Machine/TW21306.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TW218016 - Total 180A Welding Machine-TW218016 - Total 180A Welding Machine",
        "name": "TW218016 - Total 180A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW218016.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW218016%20-%20Total%20180A%20Welding%20Machine/TW218016.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TW220069 - Total 200A Welding Machine-TW220069 - Total 200A Welding Machine",
        "name": "TW220069 - Total 200A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW220069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW220069%20-%20Total%20200A%20Welding%20Machine/TW220069.jpg"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TW225069 - Total 250A Welding Machine-TW225069 - Total 250A Welding Machine",
        "name": "TW225069 - Total 250A Welding Machine",
        "description": "",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW225069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW225069%20-%20Total%20250A%20Welding%20Machine/TW225069.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Generic Velcro Reflector-Generic Velcro Reflector",
        "name": "Generic Velcro Reflector",
        "description": "",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Reflectors",
        "images": [
            {
                "name": "2-stripes-Reflector-Jacket.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Reflectors/Generic%20Velcro%20Reflector/2-stripes-Reflector-Jacket.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Generic Zip Reflector with Pockets-Generic Zip Reflector with Pockets",
        "name": "Generic Zip Reflector with Pockets",
        "description": "",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Reflectors",
        "images": [
            {
                "name": "Pocket-reflector-vest-2.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Reflectors/Generic%20Zip%20Reflector%20with%20Pockets/Pocket-reflector-vest-2.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ACE Safety Shoes (Duma)-ACE Safety Shoes (Duma)",
        "name": "ACE Safety Shoes (Duma)",
        "description": "Description\r\nAce® Duma Safety shoe is a professional footwear which offers an attractive style, great comfort and best protection. These shoes are composed of a steel toe cap, an anti-puncture steel midsole, which also provides the wearer shock absorption qualities and a genuine water resistant leather for your outdoor performance. Ace® Duma Safety shoe is an ideal safety shoe for anybody working in maintenance, transport, forestry, construction and mining industries.\r\n\r\nWork Comfortably in Any Environment with Stylish Ace Duma Safety Shoes Grey.\r\n\r\nTough, Comfortable, and Durable Safety Shoes for Your Workplace\r\nWorking in normal shoes can tire your feet or make them prone to injuries. With the increase in workplace accidents, you need to protect your feet from pain, swelling, paralysis, or more. The right safety shoes should protect your feet and still make you look dapper.\r\n\r\n \r\n\r\nAnd this is why you should consider getting a pair of Ace Duma Safety Shoes Grey. These shoes have a stylish look and can protect your feet from a range of workplace accidents. Our safety shoes are best for any maintenance, transport, forestry, mining industries and construction workers.\r\n\r\nMade of Genuine Leather\r\nCrafted from genuine leather, the Ace® Duma Safety Shoes provide superior protection and comfort. Each pair is built to last, ensuring reliable safety and performance. A great choice for any industrial or outdoor task.\r\n\r\nSteel Toe Cap\r\nThe Ace® Duma Safety Shoes are a reliable and comfortable choice for your work needs. With a steel toe cap providing 200J impact resistance, your feet are kept safe from potential hazards. A solid design ensures your safety and comfort, no matter where the job takes you.\r\n\r\n\r\nAnti-Slip\r\nThese boots also have a threaded outsole, offering a good grip on any terrain. Whether you work on surfaces exposed to oil or water, you’re safe from slips and fall accidents.\r\n\r\nAnti-Static\r\nThe footbed and sole of Ace Duma Shoes have superior shock absorption technologies that prevent your feet from suffering uncomfortable static and electrical shocks. This ensures extreme safety and comfort at work.\r\n\r\nBreathable Padding\r\nThe insoles of Ace Duma Shoes let air in and out, protecting your feet from sweating and foul odor. The added cushioning to your shoes also provides lasting comfort when using them on hard surfaces.\r\n\r\nProtect Your Feet in Style with Ace Duma Safety Shoes\r\nWant to look good on the job while still protecting your feet?\r\nAce Duma Safety Shoes is the shoe for you. It combines elegant style, premium protection, and maximum comfort at an affordable price.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Shoes",
        "images": [
            {
                "name": "ace-duma-safety-shoes-greywith-grey-strip-855465.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/ACE%20Safety%20Shoes%20(Duma)/ace-duma-safety-shoes-greywith-grey-strip-855465.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "ACE Safety Shoes (Mamba)-ACE Safety Shoes (Mamba)",
        "name": "ACE Safety Shoes (Mamba)",
        "description": "Description\r\nAce® Mamba Safety shoe is a professional high ankle safety footwear which offers an attractive style, great comfort and best protection. These full ankle protection shoes are composed of a steel toe cap, that ensure your feet are protected from accidents at work. Ace Mamba High Ankle Safety Shoes also provide the wearer shock absorption qualities and have a genuine water resistant leather for your outdoor performance. Ace Mamba Safety shoe is an ideal safety shoe for anybody working in maintenance, transport, forestry, construction and mining industries.\r\n\r\n\r\nStylish and Durable Work Boots - Every Pair of Ace Mamba Safety Shoes Blue is a Powerhouse\r\n\r\n \r\n\r\nWork Comfortably and Safely with the Ace Mamba Safety Shoes\r\nWhen at your worksite, you’re exposed to a lot of dangers including pointed protrusions, electrical hazards, falling objects, as well as uneven greasy surfaces. In addition to other protective gear, you need the right safety work boots.\r\nAnd this is where the Ace Mamba Safety Shoes Blue comes in. These high-ankle protective shoes have an attractive style and offer unmatched protection to take on all types of work environments.\r\n\r\n\r\nPremium Shock Absorption\r\nThanks to its thick rubber sole, the Ace Mamba work boots offer superior shock absorption. This eliminates the impact on your feet and knees, and prevent a range of conditions such as flat feet.\r\n\r\nWater-Resistant\r\nThe Ace Mamba boasts of a hardy, high-quality leather sole that is water-resistant for the ultimate outdoor performance. With this water-resistance, you’re guaranteed a pair of work boots that can serve you for years.\r\n\r\nAnti-Slip\r\nThe sufficiently threaded outsole of the Ace Mamba boots offers a good grip on any terrain especially when the surface is exposed to water and oil. This protects you from slips and fall accidents.\r\n\r\nSteel Toe Cap\r\nThe metal plate incorporated around the toe section of the boot is sturdy enough to protect your feet from possible compression, falling debris, and sharp objects.\r\n\r\nHigh Ankle\r\nThe Ace Mamba Safety Shoes have cuffs that rise a few inches above the ankle bone to help keep the shoes snug nicely on your feet when laced up. The high ankle also gives your feet adequate support when using rough terrains.\r\n\r\n \r\n\r\nProtect Your Feet with the Right Safety Work Boots\r\nLooking for comfortable and safe boots for your demanding job Look no further than the Ace Mamba Safety Shoes. They’re suitable for all working environments including transport, construction, forestry, mining, electrical, and more.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Shoes",
        "images": [
            {
                "name": "ace-mamba-safety-shoes-blue-403703.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/ACE%20Safety%20Shoes%20(Mamba)/ace-mamba-safety-shoes-blue-403703.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AHM006 - Ingco Auto-Darkening Welding Helmet-AHM006 - Ingco Auto-Darkening Welding Helmet",
        "name": "AHM006 - Ingco Auto-Darkening Welding Helmet",
        "description": "Optical rating:1/1/1/1\r\nThe biggest view area:100 x 67 mm\r\nSensors:4\r\nLight state:DIN 3\r\nDark state: DIN 5-9 / 9-13\r\nUV/lR protection:up to DlN 16\r\nSwitch time (Light to dark): <0.04ms\r\nShade control:inside & stepless\r\nSensitivity control:inside & stepless\r\nDelay control (Dark to light):inside & stepless, 0.15-0.80s\r\nTlG amps rated:≥2 amps\r\nGrind mode:yes, inside\r\nMaterial of helmet: nylon\r\nWeight:560g±5%\r\nOperating temperature: -5℃ (23°F)- +55℃ (131°F)\r\nStoring temperature: -20℃ (-4°F)- +70℃ (158°F)\r\nPower supply: solar panel & replaceable lithium batteries 2pcs*CR2032\r\nPacked by color box",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM006.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM006%20-%20Ingco%20Auto-Darkening%20Welding%20Helmet/AHM006.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AHM111 - Ingco Auto-Darkening Welding Glasses-AHM111 - Ingco Auto-Darkening Welding Glasses",
        "name": "AHM111 - Ingco Auto-Darkening Welding Glasses",
        "description": "Auto-darkening welding glasses\r\nViewing area:95x31mm\r\nCartridge size:108x 50.8x 5mm\r\nSensors:2\r\nLight state:3\r\nDark state:11\r\nUV/IR protection: up to DIN 16\r\nON / OFF: automatic\r\nSwitch time(Light to dark): <0.5ms\r\nTIG amps rated: ≥ 30 amps\r\nOperating temperature: -5℃~ +55℃\r\nStoring temperature: -20℃~ +70℃\r\nPower supply: solar panel & lithium battery 2xCR1220\r\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM111.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM111%20-%20Ingco%20Auto-Darkening%20Welding%20Glasses/AHM111.jpg"
            }
        ],
        "price": "1950",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "AHM112 - Ingco Auto-Darkening Welding Goggles-AHM112 - Ingco Auto-Darkening Welding Goggles",
        "name": "AHM112 - Ingco Auto-Darkening Welding Goggles",
        "description": "Auto-darkening welding goggle\r\nViewing area:95x31mm\r\nCartridge size:108x 50.8x 5mm\r\nSensors:2\r\nLight state:3\r\nDark state:11\r\nUV/IR protection: up to DIN 16\r\nON / OFF: automatic\r\nSwitch time(Light to dark):<0.5ms\r\nTIG amps rated: ≥ 30 amps\r\nOperating temperature:-5℃~ +55℃\r\nStoring temperature:-20℃~ +70℃\r\nPower supply: solar panel & lithium battery 2xCR1220\r\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM112.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM112%20-%20Ingco%20Auto-Darkening%20Welding%20Goggles/AHM112.jpg"
            }
        ],
        "price": "2144.99999648",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HHWM102 - Ingco Welding Mask-HHWM102 - Ingco Welding Mask",
        "name": "HHWM102 - Ingco Welding Mask",
        "description": "Welding mask\r\nMaterial:100% PP\r\nWith 1 pcs 108*50*3mm welding glass and 1 pcs protection glass\r\nPacked by label",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "HHWM102.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/HHWM102%20-%20Ingco%20Welding%20Mask/HHWM102.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "HSGW01 - Ingco Welding Goggles-HSGW01 - Ingco Welding Goggles",
        "name": "HSGW01 - Ingco Welding Goggles",
        "description": "Flexible PVC body, indirect ventilation design.\r\nDark shade:8\r\nFlip design with open-close locking positioning, easy to use.\r\nInner lenses are clear, outer lenses adopt colored inorganic glass.\r\nPacked by poly bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "HSGW01.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/HSGW01%20-%20Ingco%20Welding%20Goggles/HSGW01.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TSP303 - Total Welding Goggles-TSP303 - Total Welding Goggles",
        "name": "TSP303 - Total Welding Goggles",
        "description": "Flexible PVC body, indirect ventilation design.\r\nDark shade:8\r\nFlip design with open-close locking positioning, easy to use.\r\nInner lenses are clear, outer lenses adopt colored inorganic glass.\r\nPacked by poly bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "TSP303.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/TSP303%20-%20Total%20Welding%20Goggles/TSP303.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TSP9309 - Total Auto-Darkening Welding Helmet-TSP9309 - Total Auto-Darkening Welding Helmet",
        "name": "TSP9309 - Total Auto-Darkening Welding Helmet",
        "description": "Viewing area:90×35mm\r\nCartridge size:110×90×10mm\r\nArc sensor:2\r\nLight state:DIN 4\r\nDark state:fixed shade 11\r\nShade control: unadjustable\r\nPower ON/OFF:fully automatic\r\nSensitivity control: unadjustable,auto\r\nUV/IR protection: DIN 16\r\nPower supply: solar cells+1*CR2032 lithium battery\r\nSwitching time:1/5000s,from light to dark\r\nDark to light:0.15-0.45s auto\r\nLow amperage TIG:≥20amps(DC), ≥20amps(AC)\r\nOperating temperature:-5℃~+55℃\r\nStoring temperature:-20℃~+70℃\r\nPacked by color box",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "TSP9309.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/TSP9309%20-%20Total%20Auto-Darkening%20Welding%20Helmet/TSP9309.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TSP9403 - Total Auto-Darking Welding Goggles-TSP9403 - Total Auto-Darking Welding Goggles",
        "name": "TSP9403 - Total Auto-Darking Welding Goggles",
        "description": "Viewing area: 90x35mm\r\nCartridge size: 108x 51x 5mm\r\nSensors: 2\r\nLight state: 4\r\nDark state: 11\r\nUV/IR protection: up to DIN 11\r\nON / OFF: automatic\r\nSwitch time(Light to dark): <1ms\r\nTIG amps rated: ≥ 30 amps\r\nOperating temperature: -5℃~ +55℃\r\nStoring temperature: -20℃~ +70℃\r\nPower supply: solar panel & lithium battery CR1025\r\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "TSP9403.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/TSP9403%20-%20Total%20Auto-Darking%20Welding%20Goggles/TSP9403.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "WM101 - Ingco Welding Mask-WM101 - Ingco Welding Mask",
        "name": "WM101 - Ingco Welding Mask",
        "description": "Welding mask\r\nMaterial:100% PP\r\nGlass size:108*50*3mm,movable type glass\r\n1 pcs clear protection glass\r\nPacked by label",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "WM101.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/WM101%20-%20Ingco%20Welding%20Mask/WM101.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-Bosch Professional Tool Bag - Freedom Concept Professional",
        "name": "Bosch Professional Tool Bag - Freedom Concept Professional",
        "description": "",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Bosch Professional Tool Bag - Freedom Concept Professional",
        "images": [
            {
                "name": "o279466v54_lv-137994-12-P_A_Tool_Bag_dyn_V1.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/Bosch%20Professional%20Tool%20Bag%20-%20Freedom%20Concept%20Professional/o279466v54_lv-137994-12-P_A_Tool_Bag_dyn_V1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-EDL432717 - Deli Stainless Steel Tool Box (17 Inches)",
        "name": "EDL432717 - Deli Stainless Steel Tool Box (17 Inches)",
        "description": "17\"\r\nProduct material: stainless steel + PP material\r\nMaximum load: 18kg\r\nTwo layer design\r\nPacking Type: OPP Bag+Paper Card",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "EDL432717 - Deli Stainless Steel Tool Box (17 Inches)",
        "images": [
            {
                "name": "edl432717-stainless-steel-tool-box.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/EDL432717%20-%20Deli%20Stainless%20Steel%20Tool%20Box%20(17%20Inches)/edl432717-stainless-steel-tool-box.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "name": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "description": "",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "images": [
            {
                "name": "[HKTHP11651] HKTHP11651 165 PCS TOOLS SET - 20V.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTHP11651%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/%5BHKTHP11651%5D%20HKTHP11651%20165%20PCS%20TOOLS%20SET%20-%2020V.jpg"
            }
        ],
        "price": "14000.000003199999",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTHP21681 - Ingco 168 Pcs Hand Tools Set",
        "name": "HKTHP21681 - Ingco 168 Pcs Hand Tools Set",
        "description": "168 Pcs handtools Set\r\nInclude:\r\n1 Pcs 8Oz Claw hammer\r\n1 Pcs 7\" Combination Pliers\r\n1 Pcs 6\" Long nose pliers\r\n1 Pcs 10\" Pump Plier\r\n1 Pcs 8.5\" Wire stripper\r\n1 Pcs SL5.5*100 Screwdriver\r\n1 Pcs PH1*100 Screwdriver\r\n2 Pcs Stubby screwdriver: PH2*38 SL6.5*38\r\n4 Pcs precision screwdriver (SL2.0*50mm,SL2.5*50mm,PH000*50mm,PH00*50mm)\r\n1 Pcs Test Pencil(test volte :100-500V AC)\r\n1 Pcs 8\" Adjustable Wrench\r\n1 Pcs 3M Steel measuring tape\r\n1 Pcs Mini Hacksaw frame\r\n8 Pcs hex key: 1.5/2/2.5/3/4/5/5.5/6mm\r\n1 Pcs 1/4\" 100mm magnetic shank\r\n40 Pcs screwdriver bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4-SL3-SL3-SL4-SL4-SL5-SL5.5-SL6-SL6.5-SL7-SL7-H2-H3-H3-H4-H4-H5-H5-H6-H7-H7\r\n1 Pcs 18mm Snap-off blade knife\r\n10 Pcs knife blades\r\n9 Pcs 1/4\" Hexagonal Socket 4mm 5mm 6mm 7mm 8mm 9mm 10mm 11mm 12mm\r\n1 Pcs 4-6mm(25mm) socket adaptor\r\n1 Pcs 225mm spirit level\r\n40 Pcs screws(22pcs*ST3.5,10pcs*ST4,8pcs*ST5)\r\n40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)\r\nPacked by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTHP21681 - Ingco 168 Pcs Hand Tools Set",
        "images": [
            {
                "name": "[HKTHP21681] HKTHP21681 168 PCS HANDTOOLS SET.png",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTHP21681%20-%20Ingco%20168%20Pcs%20Hand%20Tools%20Set/%5BHKTHP21681%5D%20HKTHP21681%20168%20PCS%20HANDTOOLS%20SET.png"
            }
        ],
        "price": "8500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTTS0131 - Ingco 13 Pcs Electronic (Telecom) Tool Set",
        "name": "HKTTS0131 - Ingco 13 Pcs Electronic (Telecom) Tool Set",
        "description": "Specifications:\r\n\r\nPliers:\r\n\r\n1pc Mini Long Nose Pliers\r\n1pc Mini Diagonal Cutting Pliers (4.5\")\r\nScrewdrivers:\r\n\r\n4pcs: SL3 x 40mm, SL5 x 75mm, PH0 x 40mm, PH1 x 75mm\r\nScissors: 1pc (5.5\")\r\n\r\nSoldering Equipment:\r\n\r\n1pc Soldering Iron (40 Watts)\r\n1pc Soldering Iron Stand\r\n1pc Soldering Wire\r\n1pc Vacuum Soldering Pump\r\nTweezers: 1pc (125mm)\r\n\r\nIndicator Screwdriver: 1pc (100-500 VAC)\r\n\r\nFeatures:\r\n\r\nComprehensive tool set for electronics and small repairs.\r\nDurable and high-quality materials for long-lasting use.\r\nCompact and portable design for convenience.",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTTS0131 - Ingco 13 Pcs Electronic (Telecom) Tool Set",
        "images": [
            {
                "name": "HKTTS0131.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTTS0131%20-%20Ingco%2013%20Pcs%20Electronic%20(Telecom)%20Tool%20Set/HKTTS0131.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTTS0511 - Ingco 51 Pcs Electronic (Telecom) Tool Set",
        "name": "HKTTS0511 - Ingco 51 Pcs Electronic (Telecom) Tool Set",
        "description": "51 Pcs Telecom Tools set\r\n220-240V~50/60Hz\r\nInclude：\r\n1 Pcs Digital Multimeter(Alkaline battery included)\r\n1 Pcs 8\" Adjustable wrench\r\n1 Pcs 6\" Long nose plier\r\n1 Pcs 6\" Diagonal cutting pliers\r\n1 Pcs 7\" Combination plier\r\n1 Pcs 6\" Wire stripper\r\n8 Pcs Hex key set（2-2.5-3-4-5-6-7-8）\r\n3 Pcs Slotted screwdriver SL3x75mm, SL5.5x 100mm, SL6.5x 150mm\r\n3 Pcs Phillips screwdriver PH0X75mm, PH1x 100mm, PH2x 150mm\r\n1 Pcs Snap-off blade knife\r\n1 Pcs Vacuum desoldering pump\r\n1 Pcs Mini Claw hammer\r\n1 Pcs 3M Steel measuring tape\r\n1 Pcs 40W Electric soldering iron\r\n1 Pcs Electric soldering iron support\r\n1 Pcs Test pencil 140mm\r\n1 Pcs Flashlight\r\n1 Pcs Soldering wire 10g\r\n1 Pcs Mini Hacksaw Frame\r\n1 Pcs PVC Insulating tape\r\n6 Pcs 1/4\" Hexagonal Socket 5mm 6mm 8mm 9mm 10mm 11mm\r\n1 Pcs 4-6mm(25mm) Socket adaptor\r\n1 pcs 100mm Magnetic shank\r\n1 Pcs Half round steel file 3*140mm\r\n1 pcs Tweezers 125mm\r\n6 Pcs Precision screwdriver (SL2.0*50mm，SL2.5*50mm，SL3.0*50mm，PH000*50mm，PH00*50mm，PH0*50mm )\r\n1 Pcs Electrician's Scissors\r\n10 Pcs Screwdriver bits PH1-PH2-PZ1-PZ2-SL4-SL6-Hex4-Hex5-T20-T25\r\nPacked by canvas bag",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTTS0511 - Ingco 51 Pcs Electronic (Telecom) Tool Set",
        "images": [
            {
                "name": "[HKTTS0511] HKTTS0511 51 PCS TELECOM TOOLS SET.png",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTTS0511%20-%20Ingco%2051%20Pcs%20Electronic%20(Telecom)%20Tool%20Set/%5BHKTTS0511%5D%20HKTTS0511%2051%20PCS%20TELECOM%20TOOLS%20SET.png"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTV01P051 - Ingco 5 Pcs Insulated Hand Tools Set",
        "name": "HKTV01P051 - Ingco 5 Pcs Insulated Hand Tools Set",
        "description": "5 pcs insulated hand tools set\r\ninclude:\r\n1 pcs 7\" insulated combination pliers\r\n1 pcs 6\" insulated diagonal cutting pliers\r\n1 pcs 6” insulated long nose pliers\r\n1 pcs 6\" insulated wire stripping pliers\r\n1 pcs test pencil(test voltage:100-500vac)\r\npacked by stackable plastic box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTV01P051 - Ingco 5 Pcs Insulated Hand Tools Set",
        "images": [
            {
                "name": "[HKTV01P051] HKTV01P051  5 PCS INSULATED HAND TOOLS SET.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTV01P051%20-%20Ingco%205%20Pcs%20Insulated%20Hand%20Tools%20Set/%5BHKTV01P051%5D%20HKTV01P051%20%205%20PCS%20INSULATED%20HAND%20TOOLS%20SET.jpg"
            }
        ],
        "price": "3750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HKTV01S101 - Ingco 10 Pcs Insulated Hand Tools Set",
        "name": "HKTV01S101 - Ingco 10 Pcs Insulated Hand Tools Set",
        "description": "Key Features:\r\n\r\n1 Pc SL3.0x75mm Screwdriver\r\n1 Pc SL4.0x100mm Screwdriver\r\n1 Pc SL5.5x125mm Screwdriver\r\n1 Pc SL6.5x150mm Screwdriver\r\n1 Pc PH0x60mm Screwdriver\r\n1 Pc PH1x80mm Screwdriver\r\n1 Pc PH2x100mm Screwdriver\r\n1 Pc PZ1x80mm Screwdriver\r\n1 Pc PZ2x100mm Screwdriver\r\n1 Pc Test Pencil: Test Voltage 100-500VAC\r\nFeatures:\r\n\r\nHigh-quality insulation for electrical safety\r\nErgonomic design for comfortable use\r\nDurable and reliable for various tasks\r\nPackaging:\r\n\r\nPacked in a durable box for organized storage and easy transport",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HKTV01S101 - Ingco 10 Pcs Insulated Hand Tools Set",
        "images": [
            {
                "name": "HKTV01S101-i1_500x.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTV01S101%20-%20Ingco%2010%20Pcs%20Insulated%20Hand%20Tools%20Set/HKTV01S101-i1_500x.webp"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HPTCS73281 - Total 328 Pcs Tool Chest Set",
        "name": "HPTCS73281 - Total 328 Pcs Tool Chest Set",
        "description": "SPECIFICATIONS:\r\n\r\n328 Pcs Tool Chest Set\r\nChest part:\r\nWith 7pcs drawers\r\nOverall size:65x465x812mm\r\nOverall with casters size:765x465x976mm\r\nCasters size:5\"\"*2\"\"\r\nThickness of Cabinet:0.8-1.0mm\r\nThickness of drawer:0.7mm\r\nWith 5pcs 536x410x74.5mm drawer\r\nWith 2pcs 536x410x153.5mm drawer\r\n5Pcs iron hooks(for hanger tools)\r\nPacked in EVA foam + carton box + Pallet\r\nTools part:\r\n1Pcs Ratchet wrench: 1/4\"\"\r\n13Pcs 1/4\"\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\r\n24Pcs 1/4\"\" x 32(L) bits Socket:Hex:3-4-5-6-7-8-10mm Star: T8-T10-T15-T20-T25-T27-T30-T40 SL:4-5.5-7mm,PH1,PH2,PH3,PZ1,PZ2,PZ.\r\n8Pcs 1/4\"\"DR 50mm(L) Deep socket:6-7-8-9-10-11-12-13mm\r\n6Pcs 1/4\"\" star socket:E4-E5-E6-E7-E8-E10\r\n2Pcs Extension bar:1/4\"\"Dr. x 50mm,1/4\"\"Dr. x 100mm\r\n1Pcs Spinner handle:1/4\"\"x150mm\r\n1Pcs Extension flexible bar :1/4\"\" x 150mm\r\n1Pcs 1/4\"\"Universal joint\r\n1Pcs Sliding \"\"T\"\" Bar:1/4\"\"x 114mm\r\n1Pcs 1/4\"\" three way adaptor:3/8\"\"(F)*1/4\"\"(M)\r\n1Pcs bit holder:1/4\"\"*6.35mm\r\n40Pcs 6.35*25mm(L) bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4\r\n1Pcs magnetic shank:6.35mm*100mm\r\n1Pcs Ratchet wrench: 1/2\"\"\r\n1Pcs 1/2\"\"Universal joint\r\n19Pcs 1/2\"\"DR Socket:8-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\r\n4Pcs 1/2\"\"DR 77mm(L) Deep socket: 14-15-17-19mm\r\n8Pcs 1/2\"\" Star Socket:E10 12 14 16 18 20 22 24\r\n2Pcs Spark plug socket: 1/2\"\"Dr.16mm -21mm\r\n1Pcs 1/2\"\"*250mm Sliding T bar\r\n2Pcs Extension bar:1/2\"\"Dr. x 100mm,1/2\"\"Dr. x 250mm\r\n3Pcs 1/2\"\"x58mm(L) bits socket:T55-T60-T70\r\n1Pcs 1/2\"\" three way adaptor:3/8\"\"(F)x1/2(M)\r\n32Pcs 8x30mm(L) bits:PH3-PH4-PZ3-PZ4-H7-H8-H10-H12-H14-SL5-SL6-SL6.5-SL8-T20-T25-T27-T30-T35-T40-T45-T50-T55-T27H-T30H-T35H-T40H--T45H-T50H-M5-M6-M8-M10\r\n1Pcs bit holder: 1/2\"\"*8mm\r\n13Pcs 3/8\"\" hexagonal socket:10-11-12-13-14-15-16-17-18-19-21-22-24mm\r\n9Pcs 3/8\"\" deep hexagonal socket: 10-11-12-13-14-15-16-17-19mm\r\n7Pcs 3/8\"\" star socket:E10-E11-E12-E14-E16-E18-E20\r\n1Pcs ratchet wrench: 3/8\"\"\r\n2Pcs 3/8\"\" extension bar:75mm(3\"\"),150mm(6\"\")\r\n1Pcs Dr. Universal joint:3/8\"\"\r\n1Pcs 3/8\"\" three way adaptor:3/8\"\"(F)x3/8(M)\r\n14Pcs screwdriver:SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL6.5*150,SL8*200, PH0*75,PH1*75,PH1*100,PH2*38,PH2*125,PH2*150,PH3*200\r\n8Pcs T-handle hexwrench:2*75mm,2.5*75mm,3x100mm,4x100mm,5x150mm,6x150mm,8*200mm,10*200mm\r\n8Pcs T-handle Torx wrench:T10X75mm,T15X75mm,T20X100mm,T25X100mm,T30X150mm,T40X150mm,T45X200mm,T50X200mm\r\n17Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\r\n5Pcs Flare nut Spanner:8*10,10*12,11*13,12*14,17*19\r\n5Pcs Double flexible socket wrench:8*10,10*12,12*13,14*17,17*19\r\n12Pcs Offset ring spanner: 6*7,8*9,10*11,12*13,14*15,16*17,18*19,20*22,21*23,24*27,25*28,30*32.\r\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\r\n9Pcs Trox Key Wrench:T10-T15-T20-T25-T27-T30-T40-T45-T50\r\n1Pcs 10\"\"Curved jaw lock wrench\r\n1Pcs 40mm Rubber and plastic hammer\r\n1Pcs 10\"\" Water pump pliers\r\n1Pcs 8\"\" high leverage long nose pliers\r\n1Pcs 8\"\" high leverage bent nose pliers\r\n1Pcs 8\"\" high leverage combination pliers\r\n1Pcs 7\"\" high leverage diagonal cutting pliers\r\n4Pcs circlip pliers\r\n1Pcs 300g Machinist Hammer\r\n1Pcs 10\"\"Adjustable wrench | 1Pcs Hacksaw frame\r\n3 pcs cold chisel: 10x142mm 13x152mm 16x172mm\r\n6 pcs pin punch: 1.5x152mm 3x152mm 4x152mm 5x152 6x152mm 8x152mm\r\n1 pcs taper punch: 2x140mm(3/32\"\"x5-1/2\"\")\r\n2 pcs centre punch: 6x102mm(1/14\"\"x4\"\") 8x115mm(5/16\"\"x4-1/2\"\")\r\n5 Pcs steel file set:\r\nFlat steel file 1pcs\r\nHalf round steel file 1pcs\r\nRound steel file 1pcs\r\nTriangle steel file 1pcs\r\nSquare steel file 1pcs\"",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HPTCS73281 - Total 328 Pcs Tool Chest Set",
        "images": [
            {
                "name": "THPTCS73281.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HPTCS73281%20-%20Total%20328%20Pcs%20Tool%20Chest%20Set/THPTCS73281.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HTCS15591 - Ingco 59 Pcs Tools Chest",
        "name": "HTCS15591 - Ingco 59 Pcs Tools Chest",
        "description": "59 Pcs Tool Chest Set\r\nInclude：\r\n12Pcs Combination spanner:8-10-11-12-13-14-15-16-17-18-19-22MM\r\n8Pcs Screwdriver :SL3X75MM,4x100MM,5x125MM,6x100MM,8x200MM;PH1X80MM,PH2X100MM,PH3X200MM\r\n18Pcs 1/2\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32MM\r\n1Pcs 1/2\" ratchet wrench,45T\r\n2Pcs 1/2\" Extension bar:125mm(5\"),250mm(10\")\r\n2Pcs Spark plug socket 1/2\"Dr.16MM&21MM\r\n1Pcs 1/2\" Dr. Universal joint\r\n1Pcs 1/2\"Dr.Flex handle，375MM\r\n1Pcs 8\"Combination pliers\r\n1Pcs 6\"Long nose pliers\r\n1Pcs 7\"Diagonal cutting pliers\r\n1Pcs 10\"Adjustable wrench\r\n1Pcs 10\"Curved jaw lock wrench\r\n9Pcs Hex key 1.5-2-2.5-3-4-5-6-8-10MM\r\nPacked by metal box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HTCS15591 - Ingco 59 Pcs Tools Chest",
        "images": [
            {
                "name": "HTCS15591.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS15591%20-%20Ingco%2059%20Pcs%20Tools%20Chest/HTCS15591.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HTCS220971 - Ingco Tool Chest",
        "name": "HTCS220971 - Ingco Tool Chest",
        "description": "97 Pcs Tool Chest Set\r\nChest part:\r\nOverall size:520*218*243mm\r\nThickness of Cabinet:0.8mm\r\nThickness of drawer:0.6mm\r\nWith 1pcs 506*215*63mm Top Tracy Area\r\nWith 2pcs 449*196*54mm drawer\r\nTools part:\r\nTop Tray Area\r\nIncluded:\r\n1Pcs Ratchet wrench: 1/2\"\r\n18Pcs 1/2\"DR Socket:10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\r\n1Pcs 1/2\"Universal joint\r\n1Pcs Extension bar:1/2\"Dr x 125mm\r\n1Pcs 1/2\"*250mm Sliding T bar\r\n2Pcs Spark plug socket: 1/2\"Dr 16mm&amp;21mm\r\n1Pcs Ratchet wrench: 1/4\"\r\n13Pcs 1/4\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\r\n1Pcs 1/4\"Universal joint\r\n1Pcs Extension bar:1/4\"Dr x 100mm\r\n1Pcs Spinner handle:1/4\"x150mm\r\n1Pcs Screwdriver Bits holder\r\n20Pcs bits:Hex:3-4-5-6mm Star:T10-T15-T20-T30 SL:3-4-5-6mm,PH0-PH1-PH2-PH3,PZ0-PZ1-PZ2-PZ3.\r\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\r\n\r\nDrawer 1\r\nIncluded:\r\n7Pcs screwdriver:SL3*75,SL5.5*100,SL6.5*100,SL8*150, PH0*75,PH1*100,PH2*150\r\n11Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-17\r\n\r\nDrawer 2\r\nIncluded:\r\n1Pcs 10\" Water pump pliers\r\n1Pcs 6\" Combination Pliers\r\n1Pcs 6\" Long nose pliers\r\n1Pcs 6\" Diagonal cutting pliers\r\n1Pcs Utility knife\r\n1Pcs 10\"Adjustable wrench\r\n1Pcs 3Mx16mm Steel measuring tape\r\nPacked in Blister + carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HTCS220971 - Ingco Tool Chest",
        "images": [
            {
                "name": "[HTCS220971] HTCS220971 TOOL CHEST SET.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS220971%20-%20Ingco%20Tool%20Chest/%5BHTCS220971%5D%20HTCS220971%20TOOL%20CHEST%20SET.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-HTCS271621 - Ingco 162 Pcs Tool Chest",
        "name": "HTCS271621 - Ingco 162 Pcs Tool Chest",
        "description": "162 Pcs Tool Chest Set\r\nChest part:\r\nWith 7pcs drawers\r\nOverall size：765x465x812mm\r\nOverall with casters size：765x465x976mm\r\nCasters size：5\"*2\"\r\nThickness of Cabinet:0.8-1.0mm\r\nThickness of drawer:0.7mm\r\nWith 5pcs 536x410x74.5mm drawer\r\nWith 2pcs 536x410x153.5mm drawer\r\nTools part：\r\nDrawer 1\r\nIncluded:\r\n1Pcs Ratchet wrench: 1/4\"\r\n13Pcs 1/4\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\r\n17Pcs 1/4\" x 32(L) bits Socket:Hex:3-4-5-6mm Star: T8-T10-T15-T20-T25-T30 SL:4-5.5-7mm,PH1,PH2,PZ1,PZ2\r\n8Pcs 1/4\"DR 50mm(L) Deep socket:6-7-8-9-10-11-12-13mm\r\n2Pcs Extension bar:1/4\"Dr. x 50mm,1/4\"Dr. x 100mm\r\n1Pcs Spinner handle:1/4\"x150mm\r\n1Pcs Extension flexible bar :1/4\" x 150mm\r\n1Pcs 1/4\"Universal joint\r\n1Pcs Sliding \"T\" Bar:1/4\"x 114mm\r\n1PCS Ratchet wrench: 1/2\"\r\n1Pcs 1/2\"Universal joint\r\n19Pcs 1/2\"DR Socket:8-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\r\n4Pcs 1/2\"DR 77mm(L) Deep socket: 14-15-17-19mm\r\n5Pcs 1/2\" Star Socket:E10 12 14 16 20\r\n2Pcs Spark plug socket: 1/2\"Dr.16mm -21mm\r\n1Pcs 1/2\"*250mm Sliding T bar\r\n2Pcs Extension bar:1/2\"Dr. x 125mm,1/2\"Dr. x 250mm\r\n\r\nDrawer 2\r\nIncluded:\r\n14Pcs screwdriver：SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL6.5*150,SL8*200, PH0*75，PH1*75,PH1*100,PH2*38,PH2*125,PH2*150,PH3*200\r\n4Pcs T-handle hex wrench:3x100mm,4x100mm,5x150mm,6x150mm\r\n1Pcs Flashlight\r\n\r\nDrawer 3\r\nIncluded:\r\n17Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\r\n5Pcs Flare nut Spanner：8*10，10*12,11*13,12*14,17*19\r\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\r\n9Pcs Trox Key Wrench:T10-T15-T20-T25-T27-T30-T40-T45-T50\r\nDrawer 4\r\nIncluded:\r\n1Pcs 10\"Curved jaw lock wrench\r\n1Pcs 40mm Rubber and plastic hammer\r\n1Pcs 10\" Water pump pliers\r\n1Pcs 8\" Combination Pliers\r\n1Pcs 6\" Long nose pliers\r\n1Pcs 7\" Diagonal cutting pliers\r\n1Pcs Utility knife\r\n4Pcs circlip pliers\r\n1Pcs 300g Machinist Hammer\r\n1Pcs 10\"Adjustable wrench\r\n1Pcs 5x19mm Steel measuring tape\r\n\r\nDrawer 5\r\nIncluded:\r\n1Pcs Spirit level (With powerful magnets) 1Pcs Hacksaw frame\r\n1Pcs Mechanic gloves\r\n5Pcs iron hooks（for hanger tools）\r\n\r\nDrawer 6(Empty)\r\nDrawer 7(Empty)\r\nPacked in EVA foam + carton box + Pallet",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "HTCS271621 - Ingco 162 Pcs Tool Chest",
        "images": [
            {
                "name": "[HTCS271621] HTCS271621 162 PCS TOOL CHEST.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS271621%20-%20Ingco%20162%20Pcs%20Tool%20Chest/%5BHTCS271621%5D%20HTCS271621%20162%20PCS%20TOOL%20CHEST.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "name": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "description": "",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "images": [
            {
                "name": "THKTHP11652.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP11652%20-%20Total%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/THKTHP11652.jpg"
            }
        ],
        "price": "13000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "name": "THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "description": "142 Pcs Combination Tools Set\r\nInclude：\r\n1/2\"\"DR.Part：\r\n19Pcs 1/2\"\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM\r\n5Pcs 1/2\"\" Star Socket:E10 12 14 16 20\r\n1Pcs 1/2\"\"Dr.Flex handle，375MM\r\n1Pcs 1/2\"\" ratchet wrench,45T\r\n2Pcs 1/2\"\" Extension bar:75mm(3\"\") 250mm(10\"\")\r\n1Pcs 1/2\"\" Dr. Universal joint\r\n1Pcs 1/2\"\"(F)*3/8\"\"(M) three way adaptor\r\n2Pcs Spark plug socket 1/2\"\"Dr.16MM&21MM\r\n1Pcs 1/2\"\"*10\"\" L handle\r\n3/8\"\"DR.Part：\r\n15Pcs 3/8\"\" 12pt.socket:6-7-8-9-10-11-12-13-14-15-17-18-19-21-22\r\n1Pcs 3/8\"\" ratchet wrench,45T\r\n2Pcs 3/8\"\" Extension bar:75mm(3\"\") 150mm(6\"\")\r\n1Pcs 3/8\"\" Dr. Universal joint\r\n1/4\"\"DR.Part:\r\n26Pcs 1/4\"\"*25MM Screwdriver bits:\r\nPH0-PH1-PH1-PH2-PH2-PH3-PZ0-PZ1-PZ2-PZ3-SL4-SL5-SL6-SL7-H2-H3-H4-H5-H6-T10H-T15H-T20H-T25H-T27H-T30H-T40H\r\n1Pcs Bit holder\r\n9Pcs 1/4\"\" Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10\r\n5Pcs 1/4\"\" Star Socket:E4 5 6 7 8\r\n1Pcs 1/4\"\" ratchet wrench,45T\r\n3Pcs 1/4\"\" Extension bar:50mm(2\"\") 100mm(4\"\") 150mm(6\"\")\r\n1Pcs 1/4\"\" Dr. Universal joint\r\n1Pcs 3/8\"\"(F)*1/4\"\"(M)three way adaptor\r\n1Pcs 1/4\"\"*150mm Spinner handle\r\n1Pcs 1/4\"\"*150mm Flexible extension bar\r\n17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\r\n5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19\r\n10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM\r\n1 Pcs 300g Machinist hammer\r\n1 Pcs 7\"\" Combination Pliers\r\n1Pcs 10\"\"Curved jaw lock wrench\r\n2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150\r\n2Pcs S2 Phillips screwdriver:PH2*100 PH2*150\r\n2Pcs Stubby screwdriver:PH2*38 SL6.5*38\r\nPacked by BMC",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "images": [
            {
                "name": "THKTHP21426.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP21426%20-%20Total%20142%20Pcs%20Combination%20Tool%20Set/THKTHP21426.jpg"
            }
        ],
        "price": "28500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-THKTP1152 - Total 115 Pcs Tool Set (includes 680w Impact Drill)",
        "name": "THKTP1152 - Total 115 Pcs Tool Set (includes 680w Impact Drill)",
        "description": "1 pc 680W Impact Drill (220-240V ~ 50/60Hz, 13mm key chuck)\r\n\r\n1 pc 8 oz. Claw hammer\r\n\r\n1 pc SL5.5 * 100 Screwdriver\r\n\r\n1 pc PH1 * 100 Screwdriver\r\n\r\n1 pc 7″ Combination Pliers\r\n\r\n1 pc 6″ Adjustable Wrench\r\n\r\n1 pc Steel Measuring Tape, 3m\r\n\r\n1 pc Snap-off Blade Knife, 9mm\r\n\r\n1 pc Test Pencil\r\n\r\n1 pc Magnetic Bits Holder\r\n\r\n1 pc PVC Insulation Tape\r\n\r\n5 pcs Twist Drill Bits (2, 3, 4, 5, 6mm)\r\n\r\n5 pcs Masonry Drill Bits (4, 5, 6, 8, 10mm)\r\n\r\n4 pcs Wood Drill Bits (4, 5, 6, 8mm)\r\n\r\n6 pcs Screwdriver Bits (PH1, PH2, SL4, SL6, T20, T25)\r\n\r\n40 pcs Screws (20 pcs * ST3.5, 10 pcs * ST4, 10 pcs ST5)\r\n\r\n40 pcs Plastic Plugs (20 pcs * 5mm, 10 pcs * 6mm, 10 pcs * 8mm)\r\n\r\n10 pcs Screwdriver Bits (PH0, PH1, PH2, PH3, PZ0, PZ1, SL3, SL4, SL5, SL6)",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "THKTP1152 - Total 115 Pcs Tool Set (includes 680w Impact Drill)",
        "images": [
            {
                "name": "THKTHP1152.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTP1152%20-%20Total%20115%20Pcs%20Tool%20Set%20(includes%20680w%20Impact%20Drill)/THKTHP1152.jpg"
            }
        ],
        "price": "8000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TPBX0141 - Total Plastic Tool Box (14 Inches)",
        "name": "TPBX0141 - Total Plastic Tool Box (14 Inches)",
        "description": "14\" Plastic Tool Box\r\nSize : 356mm(14\"\")*168mm（6.6\"\"）*160mm(6.3\"\")\r\nMaterial ：PP\r\nWeight : 720g\r\nPP plastic buckle\r\nMax Load : 10KG\r\nHigh-strength Handle\r\nUpper cover with three storage areas\r\nUpper cover with scale function\r\nContains 1Pcs plastic tray\r\nPacked by label",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "TPBX0141 - Total Plastic Tool Box (14 Inches)",
        "images": [
            {
                "name": "TPBX0141.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0141%20-%20Total%20Plastic%20Tool%20Box%20(14%20Inches)/TPBX0141.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TPBX0171 - Total Plastic Tool Box (17 Inches)",
        "name": "TPBX0171 - Total Plastic Tool Box (17 Inches)",
        "description": "SPECIFICATIONS\r\nSize : 436mm(17\"\")*220mm（8.7\"\"）*205mm(8\"\")\r\nMaterial： PP\r\nweight：1390g\r\nPP plastic buckle\r\nMax Load : 15KG\r\nHigh-strength Handle\r\nUpper cover with three storage areas\r\nUpper cover with scale function\r\nContains 1Pcs plastic tray\r\nPacked by carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "TPBX0171 - Total Plastic Tool Box (17 Inches)",
        "images": [
            {
                "name": "TPBX0171.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0171%20-%20Total%20Plastic%20Tool%20Box%20(17%20Inches)/TPBX0171.jpg"
            }
        ],
        "price": "1850",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "-TPBX0201 - Total Plastic Tool Box (20 Inches)",
        "name": "TPBX0201 - Total Plastic Tool Box (20 Inches)",
        "description": "20\" Plastic Tool Box\r\nSize : 508mm(20\"\")*296mm（11.7\"\"）*261mm(10.3\"\")\r\nMaterial ：PP\r\nWeight : 2150g\r\nPP plastic buckle\r\nMax Load : 20KG\r\nHigh-strength Handle\r\nUpper cover with three storage areas\r\nUpper cover with scale function\r\nContains 1Pcs plastic tray\r\nPacked by label",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "TPBX0201 - Total Plastic Tool Box (20 Inches)",
        "images": [
            {
                "name": "TPBX0201.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0201%20-%20Total%20Plastic%20Tool%20Box%20(20%20Inches)/TPBX0201.jpg"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DSD 37 - DAYLIFF 0.37KW 1PH CW 30M CABLE & FSWITCH-DSD 37 - DAYLIFF 0.37KW 1PH CW 30M CABLE & FSWITCH",
        "name": "DSD 37 - DAYLIFF 0.37KW 1PH CW 30M CABLE & FSWITCH",
        "description": "Dayliff DSD range of Submersible Multistage centrifugal pumps are specially designed for domestic and small scale water supply from wells and boreholes. Material of construction include plastic impellers and diffusers, cast iron delivery and suction chambers and AISI 304 stainless steel pump housing, shaft and shaft coupling. These quality materials together with the plastic impellers provide the pumps with excellent sand handling capabilities for a longer life. The pumps are also supplied complete with 30m cable.\r\n\r\nThe pump is coupled to a sealed liquid cooled 2-pole asynchronous squirrel-cage motor constructed of stainless steel. Motors are supplied complete with purpose designed control boxes that include the capacitor and electrical overload protection.\r\n\r\nA DAYLIFF electronic Pump Controller is recommended for comprehensive pump control including wireless low level, motor overload and irregular power supply protection.\r\n\r\nMotor:\r\nEnclosure Class: IP68\r\nVoltage: 1 X 240V\r\nInsulation: Class B\r\nSpeed: 2850rpm\r\n\r\nOperating Conditions:\r\nPumped Liquid: Thin, clean, chemically non-aggressive liquids with a max. sand content of 0.25%\r\nMaximum Fluid Temperature: +35C\r\nMaximum Ambient Temperature: +35C\r\nMaximum immersion depth: 80M\r\nMinimum borehole diameter: 110mm\r\n\r\nDimensions & Weights:\r\nDN(\"): 1.25\r\n\r\nPump Information\r\nIstat / I: 6.0\r\nModel: DSD 3/7\r\nPower (kW): 0.37\r\nMaximum Operating Current (A): 3.7\r\nWeight (kg): 7",
        "category": "Water Pumps",
        "subcategory": "Borehole Submersible Pumps",
        "images": [
            {
                "name": "DSD-486x461_1.webp",
                "url": "/website%20products/Water%20Pumps/Borehole%20Submersible%20Pumps/DSD%2037%20-%20DAYLIFF%200.37KW%201PH%20CW%2030M%20CABLE%20&%20FSWITCH/DSD-486x461_1.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DQ15F - Dayliff Circulator (Shower Booster) Pump (CW Flowswitch)-DQ15F - Dayliff Circulator (Shower Booster) Pump (CW Flowswitch)",
        "name": "DQ15F - Dayliff Circulator (Shower Booster) Pump (CW Flowswitch)",
        "description": "DAYLIFF DQ 15F circulator pump is designed for domestic shower pressure boosting applications. It can also be used for pressure boosting in domestic dwellings and for circulation in solar hot water system, the pump includes a built-in flow switch which activates pump operations whenever there is supply demand. This is particularly applicable to domestic shower pressure boosting.",
        "category": "Water Pumps",
        "subcategory": "Circulator (Shower Booster) Pumps",
        "images": [
            {
                "name": "dq15-800x600.jpg",
                "url": "/website%20products/Water%20Pumps/Circulator%20(Shower%20Booster)%20Pumps/DQ15F%20-%20Dayliff%20Circulator%20(Shower%20Booster)%20Pump%20(CW%20Flowswitch)/dq15-800x600.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Dayliff Float Switch-Dayliff Float Switch",
        "name": "Dayliff Float Switch",
        "description": "Paddle type float switch with weight and 3m PVC cable. The switch is suitable for both high level and low level control according to the wiring connections.",
        "category": "Water Pumps",
        "subcategory": "Float Switches",
        "images": [
            {
                "name": "DayliffFloatswitch.webp",
                "url": "/website%20products/Water%20Pumps/Float%20Switches/Dayliff%20Float%20Switch/DayliffFloatswitch.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TP3202 - Total Gasoline Water Pump (2'')-TP3202 - Total Gasoline Water Pump (2'')",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :28m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :550 Lit / min\r\nDIAMETER :2\" X 2\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :21 Kg",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TP3302 - Total Gasoline Water Pump (3'')-TP3302 - Total Gasoline Water Pump (3'')",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\r\nDISPLACEMENT :208cc\r\nPOWER :7HP\r\nDELIVERY HEIGHT :32m\r\nSUCTION LIFT :8m\r\nDELIVERY VOLUME :1000 Lit / min\r\nDIAMETER :3\" X 3\"\r\nFUEL TANK :3.6 Lit\r\nWEIGHT :25 Kg",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "CPM158 - Pedrollo 1hp Peripheral Impeller Booster Pumps-CPM158 - Pedrollo 1hp Peripheral Impeller Booster Pumps",
        "name": "CPM158 - Pedrollo 1hp Peripheral Impeller Booster Pumps",
        "description": "",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "CPM150-800x600_bd1c1614-a57d-4d67-9bb6-8776ddcadf4c.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/CPM158%20-%20Pedrollo%201hp%20Peripheral%20Impeller%20Booster%20Pumps/CPM150-800x600_bd1c1614-a57d-4d67-9bb6-8776ddcadf4c.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDC 158 - Dayliff 1HP Booster Pump-DDC 158 - Dayliff 1HP Booster Pump",
        "name": "DDC 158 - Dayliff 1HP Booster Pump",
        "description": "The Dayliff DDC centrifugal non self priming closed impeller pump is specially designed for all small scale domestic and commercial water supply uses and is particularly suited for water boosting and transfer applications. The pump body is cast iron and the impeller brass.\r\n\r\nDDC158 Econo is of lighter construction and is fitted with stainless steel impeller.\r\n\r\nMOTORS\r\n\r\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: IP44\r\nInsulation Class: F\r\nSpeed: 2900rpm\r\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "dayliff-DDC158-800x600_1.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDC%20158%20-%20Dayliff%201HP%20Booster%20Pump/dayliff-DDC158-800x600_1.webp"
            }
        ],
        "price": "14500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDP 60 - Dayliff 0.5hp Peripheral Impeller Booster Pumps-DDP 60 - Dayliff 0.5hp Peripheral Impeller Booster Pumps",
        "name": "DDP 60 - Dayliff 0.5hp Peripheral Impeller Booster Pumps",
        "description": "The Dayliff DDP peripheral pump is specially designed for all small scale domestic and commercial water supply uses. It is of high specification peripheral featuring copper windings, a high capacity motor and stainless steel housing inserts to ensure free impeller movement. The pump body is manufactured from cast iron and impeller from brass.\r\n\r\nMOTORS\r\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: IP44\r\nInsulation Class: F\r\nSpeed: 2900rpm\r\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "dayliff-ddp60-800x600_1.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDP%2060%20-%20Dayliff%200.5hp%20Peripheral%20Impeller%20Booster%20Pumps/dayliff-ddp60-800x600_1.webp"
            }
        ],
        "price": "6600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDP 60E - Dayliff 0.5hp Econo Peripheral Impeller Booster Pumps-DDP 60E - Dayliff 0.5hp Econo Peripheral Impeller Booster Pumps",
        "name": "DDP 60E - Dayliff 0.5hp Econo Peripheral Impeller Booster Pumps",
        "description": "The Dayliff DDP peripheral pump is specially designed for all small scale domestic and commercial water supply uses. It is of high specification peripheral featuring copper windings, a high capacity motor and stainless steel housing inserts to ensure free impeller movement. The pump body is manufactured from cast iron and impeller from brass.\r\n\r\nMOTORS\r\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: IP44\r\nInsulation Class: F\r\nSpeed: 2900rpm\r\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "ddpe-water-pumps-in-kenya-486x461.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDP%2060E%20-%20Dayliff%200.5hp%20Econo%20Peripheral%20Impeller%20Booster%20Pumps/ddpe-water-pumps-in-kenya-486x461.webp"
            }
        ],
        "price": "5600",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "PKM60 - Davis and Shirtliff Pedrollo 0.5hp Peripheral Impeller Booster Pumps-PKM60 - Davis and Shirtliff Pedrollo 0.5hp Peripheral Impeller Booster Pumps",
        "name": "PKM60 - Davis and Shirtliff Pedrollo 0.5hp Peripheral Impeller Booster Pumps",
        "description": "The PEDROLLO PKm is a robust, reliable and economical pump used principally for water transfer in domestic and small scale water transfer applications. The pump body is made from cast iron with a brass insert set into the front housing for improved starting performance and protection from jamming. The impeller is made from brass.\r\n\r\nThe pumps feature the following benefits;\r\n\r\nQuiet operation due to the anti vibration system between shaft and impeller.\r\nMore compact.\r\nMore efficient motor with low energy consumption and lower operating temperature.\r\nSpecial paint which gives improved resistance against environmental corrosion.\r\nExtended life\r\nPumps can be installed for manual or automatic control using either the unique ‘Presscontrol’ unit or a pressure tank and switch. Also available is the integral ‘Hydrofresh’ version (Pkm60 only) which combines a 24L horizontal diaphragm tank, pressure switch and gauge with pressure settings of 1.4 Bar for pump start and 2.8 Bar for pump stop.\r\n\r\nMOTOR\r\nPumps are close coupled to a TEFC brushless induction motor designed for continuous operation. A thermal relay is provided in the windings to protect against electrical and mechanical overload and the pump can be connected directly to the mains power supply through a 10amp fuse or MCB.\r\n\r\nEnclosure Class:PKm60®:IPX4, PKm65: IP44\r\nVoltage:1x240V\r\nInsulation Class:F\r\nSpeed:2900rpm",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "Pedrollo-PKM-60-486x461_4f6cf9e0-ed86-4a7c-8eb4-638bd5f495d0.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/PKM60%20-%20Davis%20and%20Shirtliff%20Pedrollo%200.5hp%20Peripheral%20Impeller%20Booster%20Pumps/Pedrollo-PKM-60-486x461_4f6cf9e0-ed86-4a7c-8eb4-638bd5f495d0.webp"
            }
        ],
        "price": "9000.0000004",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Dayliff Superpress P Pressure Controller-Dayliff Superpress P Pressure Controller",
        "name": "Dayliff Superpress P Pressure Controller",
        "description": "High specification in-line electronic pump controllers for automatic operation of pressurised water supplies.\r\n\r\n\r\nFeatures include:-\r\n\r\nStarts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\r\ncontroller automatically senses the pipe pressure and regulates the starting pressure\r\nDry run protection provided and restart when supply returns (positive suction)\r\nIncorporates a spring activated hydraulic accumulator to control pump cycling\r\nLED power on, pump run, dry run indicators and delay timer\r\nSettable delay timer for tank filling (P)\r\nBuilt in pressure gauge for pressure monitoring (P\r\nMax Motor size: 2.2kW/1ph\r\n\r\nMax Current: 10A\r\n\r\nProtection: IP65\r\n\r\nMax Operating Pressure: 10 Bar\r\n\r\nConnection: 1''M Voltage: 90-260V\r\n\r\nDimensions (L/W/H): 192x140x90mm",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "DAYLIFF_SUPERPRESSCON_P.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Dayliff%20Superpress%20P%20Pressure%20Controller/DAYLIFF_SUPERPRESSCON_P.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Dayliff Superpress S Pressure Controller-Dayliff Superpress S Pressure Controller",
        "name": "Dayliff Superpress S Pressure Controller",
        "description": "High specification in-line electronic pump controllers for automatic operation of pressurised water supplies.\r\n\r\n\r\nFeatures include:-\r\n\r\nStarts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\r\ncontroller automatically senses the pipe pressure and regulates the starting pressure\r\nDry run protection provided and restart when supply returns (positive suction)\r\nIncorporates a spring activated hydraulic accumulator to control pump cycling\r\nLED power on, pump run, dry run indicators and delay timer\r\nSettable delay timer for tank filling (P)\r\nBuilt in pressure gauge for pressure monitoring (P\r\nMax Motor size: 2.2kW/1ph\r\n\r\nMax Current: 10A\r\n\r\nProtection: IP65\r\n\r\nMax Operating Pressure: 10 Bar\r\n\r\nConnection: 1''M Voltage: 90-260V\r\n\r\nDimensions (L/W/H): 192x140x90mm",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "Controller.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Dayliff%20Superpress%20S%20Pressure%20Controller/Controller.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "Mondial PRESSCONTROL 1.1KW (1 Inch)-Mondial PRESSCONTROL 1.1KW (1 Inch)",
        "name": "Mondial PRESSCONTROL 1.1KW (1 Inch)",
        "description": "",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "Press-Control-1.1kW-486x461.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Mondial%20PRESSCONTROL%201.1KW%20(1%20Inch)/Press-Control-1.1kW-486x461.webp"
            }
        ],
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDA1000P - Dayliff 1hp Submersible Pump-DDA1000P - Dayliff 1hp Submersible Pump",
        "name": "DDA1000P - Dayliff 1hp Submersible Pump",
        "description": "DAYLIFF DDA submersible multistage centrifugal pumps are designed for pumping clean, non-aggressive water in various domestic and light duty applications. They are particularly suitable for wells and boreholes, though can also be used for water transfer from tanks, irrigation and pressure boosting applications as an alternative to a conventional dry mounted pump. A design feature is the jacketed motor arrangement which provides excellent cooling and allows the pump to work semi-submerged. The pumps also feature mechanical seals (twin on DDA600C & DDA1200C2) in an intermediate oil chamber for greater pump reliability and pump construction is Polypropylene impellers and diffusers and stainless steel pump casing.\r\n\r\nPumps can be fitted with a pressure controller for automatic operation. All pumps are supplied complete with 20m cable.\r\n\r\nDDA1000P, DDA600C & DDA1200C2 are fitted with a low level float switch with adjustment clamp and an inbuilt capacitor for simplified installation and are particularly suitable to well and tank applications. DDA900C is particularly suited to borehole applications and is supplied with an external control box which incorporates an isolator, run indicator light, thermal overload protection and starting capacitor which can be connected directly to mains power. The box is also provided with auxiliary terminals for control probes, pressure switch or float switch.\r\n\r\nMOTOR\r\nEnclosed and rewindable liquid cooled, non-overloading induction motor designed for continuous operations incorporating a thermal cut-out in the windings to protect against overloading. Pumps can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: X8\r\nInsulation Class: B\r\nVoltage: 1x240V\r\nSpeed: 2900rpm",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "DDA1000P_4db8859d-e0cd-47e6-99f2-e2a7af66c9a1.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDA1000P%20-%20Dayliff%201hp%20Submersible%20Pump/DDA1000P_4db8859d-e0cd-47e6-99f2-e2a7af66c9a1.webp"
            }
        ],
        "price": "19000",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDW 750 S - Dayliff 0.5hp Drainage Pump (Clean Water)-DDW 750 S - Dayliff 0.5hp Drainage Pump (Clean Water)",
        "name": "DDW 750 S - Dayliff 0.5hp Drainage Pump (Clean Water)",
        "description": "The DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation, fountain, pond and water transfer applications. Two versions are available, the standard S version with open impeller for lightly turbid water and the vortex V version for water with higher silt loads. Pump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch is provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet suitable for threaded or hose connection.\r\n\r\nMOTORS\r\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is provided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: IPX8\r\nInsulation Class: F\r\nVoltage:1x240V\r\nSpeed: 2900rpm",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "Dayliff-DDW750S-800x600.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDW%20750%20S%20-%20Dayliff%200.5hp%20Drainage%20Pump%20(Clean%20Water)/Dayliff-DDW750S-800x600.webp"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "DDW 750 V - Dayliff 0.5hp Drainage Pump (Dirty Water)-DDW 750 V - Dayliff 0.5hp Drainage Pump (Dirty Water)",
        "name": "DDW 750 V - Dayliff 0.5hp Drainage Pump (Dirty Water)",
        "description": "The DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation, fountain, pond and water transfer applications. Two versions are available, the standard S version with open impeller for lightly turbid water and the vortex V version for water with higher silt loads. Pump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch is provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet suitable for threaded or hose connection.\r\n\r\nMOTORS\r\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is provided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply through a 10A fuse or MCB.\r\n\r\nEnclosure Class: IPX8\r\nInsulation Class: F\r\nVoltage:1x240V\r\nSpeed: 2900rpm",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "Dayliff-DDW750V-800x600.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDW%20750%20V%20-%20Dayliff%200.5hp%20Drainage%20Pump%20(Dirty%20Water)/Dayliff-DDW750V-800x600.webp"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SPC7508 - Ingco 1hp Submersible Pump-SPC7508 - Ingco 1hp Submersible Pump",
        "name": "SPC7508 - Ingco 1hp Submersible Pump",
        "description": "Voltage:220-240V~50Hz\r\nRated power: 750W(1.0HP)\r\nMax.head:32m\r\nMax.flow:120L/min\r\nPipe diameter:1\"\r\n9m length cable\r\nCopper wire motor\r\nStainless steel base\r\nStainless steel screws\r\nStainless steel shaft\r\nThermal protection\r\nWith float switch\r\nFor clean water\r\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "SPC7508.jpg",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/SPC7508%20-%20Ingco%201hp%20Submersible%20Pump/SPC7508.jpg"
            }
        ],
        "price": "17500",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "SPD7508 - Ingco 1hp Drainage (Sewer Submersible) Pump (Dirty Water)-SPD7508 - Ingco 1hp Drainage (Sewer Submersible) Pump (Dirty Water)",
        "name": "SPD7508 - Ingco 1hp Drainage (Sewer Submersible) Pump (Dirty Water)",
        "description": "Voltage:220V-240~50Hz\r\nRated power:750W(1.0HP)\r\nMax.head:8m\r\nMax.flow:217L/min\r\nMax.depth:7m\r\nPipe diameter:1\"\r\nCopper wire motor\r\n9m length cable\r\nWith float switch\r\nFor dirty water\r\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "SPD7508.jpg",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/SPD7508%20-%20Ingco%201hp%20Drainage%20(Sewer%20Submersible)%20Pump%20(Dirty%20Water)/SPD7508.jpg"
            }
        ],
        "price": "11000.00000616",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    },
    {
        "id": "TWP63706 - Total 0.5hp Submersible Pump-TWP63706 - Total 0.5hp Submersible Pump",
        "name": "TWP63706 - Total 0.5hp Submersible Pump",
        "description": "Voltage:220-240V~50Hz\r\nRated power: 370W(0.5HP)\r\nMax.head:17m\r\nMax.flow:100L/min\r\nPipe diameter:1\"\r\n9m length cable\r\nCopper wire motor\r\nStainless steel base\r\nStainless steel screws\r\nStainless steel shaft\r\nThermal protection\r\nWith float switch\r\nFor clean water\r\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "TWP63706.jpg",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/TWP63706%20-%20Total%200.5hp%20Submersible%20Pump/TWP63706.jpg"
            }
        ],
        "price": "11750",
        "isOnOffer": false,
        "originalPrice": 0,
        "offerPrice": 0,
        "isBestseller": false
    }
];
