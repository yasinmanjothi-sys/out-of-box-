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
        "id": "yem-115---uyus-angle-grinder-wrench-spanner",
        "name": "YEM 115 - Uyus Angle Grinder Wrench (Spanner)",
        "description": "Type :Grinder Key\nModel / Size :YEM115\nApplication :DIY, Professional, Commercial\nMaterial :High-Quality Steel\nSafety Standard :EN Standard Compliant",
        "category": "Accessories",
        "subcategory": "Angle Grinder Wrenches (Spanners)",
        "images": [
            {
                "name": "X_yem1158342.png",
                "url": "/website%20products/Accessories/Angle%20Grinder%20Wrenches%20(Spanners)/YEM%20115%20-%20Uyus%20Angle%20Grinder%20Wrench%20(Spanner)/X_yem1158342.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hil01r---uyus-trimmer-line-24mm-x-15m",
        "name": "HIL01R - Uyus Trimmer Line (2.4mm x 15m)",
        "description": "Round shape\nWidth: 2.4mm\nLength: 15m\nMaterial: PA6 nylon\nBreaking strength> 900N\nPackage: blister card",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgtls2545---total-line-spool",
        "name": "TGTLS2545 - Total Line Spool",
        "description": "Line diameter: 2.5mm\nLine length: 4m\nPacked by double blister",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsb423045---ingco-bush-cutter-blade",
        "name": "TSB423045 - Ingco Bush Cutter Blade",
        "description": "Diameter:230mm(9\")\nQuantity of teeth :40T\nArbor:25.4mm\nWith 1pcs 20mm reduction ring\nSuitable for bush cutter Match with GBC5434421\nPacked by double blister",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ck1301---ingco-13mm-chuck-key",
        "name": "CK1301 - Ingco 13mm Chuck Key",
        "description": "Key for 13mm key chuck\nLength:80mm\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Chuck Key",
        "images": [
            {
                "name": "CK1301.jpg",
                "url": "/website%20products/Accessories/Chuck%20Key/CK1301%20-%20Ingco%2013mm%20Chuck%20Key/CK1301.jpg"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ck1601---ingco-16mm-chuck-key",
        "name": "CK1601 - Ingco 16mm Chuck Key",
        "description": "Key for 16mm key chuck\nLength:85mm\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Chuck Key",
        "images": [
            {
                "name": "CK1601.jpg",
                "url": "/website%20products/Accessories/Chuck%20Key/CK1601%20-%20Ingco%2016mm%20Chuck%20Key/CK1601.jpg"
            }
        ],
        "price": "280",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac470131---total-13mm-chuck-key",
        "name": "TAC470131 - Total 13mm Chuck Key",
        "description": "Key for 13mm key chuck\nLength:80mm\nPacked in sliding card",
        "category": "Accessories",
        "subcategory": "Chuck Key",
        "images": [
            {
                "name": "TAC470131.jpg",
                "url": "/website%20products/Accessories/Chuck%20Key/TAC470131%20-%20Total%2013mm%20Chuck%20Key/TAC470131.jpg"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mdb13u---uyus-keyless-chuck-13mm",
        "name": "MDB13U - Uyus Keyless Chuck (13mm)",
        "description": "Type: Threaded, Keyless Drill Chuck.\nCapacity: 1.5mm to 13mm (or 1/2 inch).\nThread Size: 1/2\"-20 UNF.\nIncludes: Often comes with a matching chuck key for tightening/loosening.",
        "category": "Accessories",
        "subcategory": "Chucks",
        "images": [
            {
                "name": "[4093] DRILL CHUCK & KEY 1.5-13MM 1-2_-20 UNF MDB13U UYUS.png",
                "url": "/website%20products/Accessories/Chucks/MDB13U%20-%20Uyus%20Keyless%20Chuck%20(13mm)/%5B4093%5D%20DRILL%20CHUCK%20%26%20KEY%201.5-13MM%201-2_-20%20UNF%20MDB13U%20UYUS.png"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2-608-644-404---bosch-9-inch-235mm-eco-circular-saw-blade-40t",
        "name": "2 608 644 404 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (40T)",
        "description": "Technical Data\nBore size :30mm\nCutting width :2.800mm\nNumber of teeth :40\nNet Weight :0.220 kg\nGross Weight :0.220 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644404-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2%20608%20644%20404%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20Circular%20Saw%20Blade%20(40T)/2608644404-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg"
            }
        ],
        "price": "2410",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2-608-644-405---bosch-9-inch-235mm-eco-circular-saw-blade-60t",
        "name": "2 608 644 405 - Bosch 9 Inch (235mm) Eco Circular Saw Blade (60T)",
        "description": "Technical Data\nBore size :30mm\nCutting width :2.800mm\nNumber of teeth :60\nNet Weight :0.220 kg\nGross Weight :0.220 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644405-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Sa.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2%20608%20644%20405%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20Circular%20Saw%20Blade%20(60T)/2608644405-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Sa.jpg"
            }
        ],
        "price": "2950",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608644399---bosch-7-inch-185mm-eco-circular-saw-blade-40t",
        "name": "2608644399 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (40T)",
        "description": "Technical Data\nBore size :20mm\nCutting width :2.200mm\nNumber of teeth :40\nNet Weight :0.220 kg\nGross Weight :0.347 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644399-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2608644399%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20Circular%20Saw%20Blade%20(40T)/2608644399-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-e.jpg"
            }
        ],
        "price": "1870",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608644400---bosch-7-inch-185mm-eco-circular-saw-blade-60t",
        "name": "2608644400 - Bosch 7 Inch (185mm) Eco Circular Saw Blade (60T)",
        "description": "Technical Data\nBore size :20mm\nCutting width :2.200mm\nNumber of teeth :60\nNet Weight :0.220 kg\nGross Weight :0.347 kg",
        "category": "Accessories",
        "subcategory": "Circular Saw Wood Cutting Discs (TCT Saw Blade)",
        "images": [
            {
                "name": "2608644400-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-en-K.jpg",
                "url": "/website%20products/Accessories/Circular%20Saw%20Wood%20Cutting%20Discs%20(TCT%20Saw%20Blade)/2608644400%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20Circular%20Saw%20Blade%20(60T)/2608644400-Eco-for-Wood-Circular-Saw-Blades-for-Hand-Held-Saws-en-K.jpg"
            }
        ],
        "price": "2050",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac231255---total-4-inch-tct-saw-blade-40t",
        "name": "TAC231255 - Total 4 Inch TCT Saw Blade (40T)",
        "description": "115mm(4-1/2\"\")\n40T,arbor:22.2mm\nReduction ring:16mm\nSuitable for Angle Grinder, Wood Cutting\nPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac231413---total-185mm-7-inch-tct-saw-blade-60t",
        "name": "TAC231413 - Total 185mm (7 Inch) TCT Saw Blade (60T)",
        "description": "185mm(7-1/4\"\")\n60T,arbor:20mm\nReduction ring:16mm\nSuitable for circular saw\nFor item TS1141856\nPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac231415---total-185mm-7-inch-tct-saw-blade-40t",
        "name": "TAC231415 - Total 185mm (7 Inch) TCT Saw Blade (40T)",
        "description": "185mm(7-1/4\"\")\n40T,arbor:20mm\nReduction ring:16mm\nSuitable for circular saw\nFor item TS1141856\nPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dbcs0031---ingco-3-pcs-countersink-set",
        "name": "DBCS0031 - Ingco 3 Pcs Countersink Set",
        "description": "Type: Countersink Bit Set.\nQuantity: 3 bits per set.\nSizes: 12mm, 16mm, 19mm.\nAngle: 90°.\nMaterial: High-Speed Steel (HSS).\nShank: 1/4\" Hex Shank (Quick Change).\nApplications: Metal, mild steel, copper, zinc, woodworking.\nPackaging: Often sold in a double blister pack",
        "category": "Accessories",
        "subcategory": "Countersink Sets",
        "images": [
            {
                "name": "DBCS0031.jpg",
                "url": "/website%20products/Accessories/Countersink%20Sets/DBCS0031%20-%20Ingco%203%20Pcs%20Countersink%20Set/DBCS0031.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608615027---bosch-4-inch-115mm-eco-for-universal-segmented-diamond-cutting-disc",
        "name": "2608615027 - Bosch 4 Inch (115mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\nDiameter mm :115\nCutting width mm :2\nProduct text :Pack of 1\nSpecification :115x22.23x2.0x7mm\nNet Weight:0.100 kg\nGross Weight :0.145 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "o234198v82_2608615027_bo_pro_u_f_1.webp",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615027%20-%20Bosch%204%20Inch%20(115mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/o234198v82_2608615027_bo_pro_u_f_1.webp"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608615030---bosch-7-inch-185mm-eco-for-universal-segmented-diamond-cutting-disc",
        "name": "2608615030 - Bosch 7 Inch (185mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\nDiameter mm :180\nCutting width mm :2.2\nProduct text :Pack of 1\nSpecification :180x22.23x2.0x7mm\nNet Weight:0.310 kg\nGross Weight :0.368 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "2608615030-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Gr.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615030%20-%20Bosch%207%20Inch%20(185mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/2608615030-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Gr.jpg"
            }
        ],
        "price": "1930",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608615031---bosch-9-inch-235mm-eco-for-universal-segmented-diamond-cutting-disc",
        "name": "2608615031 - Bosch 9 Inch (235mm) Eco for Universal Segmented Diamond Cutting Disc",
        "description": "Bore diameter mm :22.230\nDiameter mm :230\nCutting width mm :2.6\nProduct text :Pack of 1\nSpecification :230x22.23x2.0x7mm\nNet Weight:0.500 kg\nGross Weight :0.657 kg",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "2608615031-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Grinde.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/2608615031%20-%20Bosch%209%20Inch%20(235mm)%20Eco%20for%20Universal%20Segmented%20Diamond%20Cutting%20Disc/2608615031-Eco-for-Universal-Diamond-Cutting-Discs-for-Large-Angle-Grinde.jpg"
            }
        ],
        "price": "1850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dmd0123023---ingco-dry-diamond-disc-super-select-9-3-pcs",
        "name": "DMD0123023 - Ingco Dry Diamond Disc (Super Select) (9'') (3 Pcs)",
        "description": "230(9\")X22.2mm\nBlade width:7mm\n3pcs/set",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "[DMD0123023] DMD0123023 DRY DIAMOND DISC 9_.jfif",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/DMD0123023%20-%20Ingco%20Dry%20Diamond%20Disc%20(Super%20Select)%20(9'')%20(3%20Pcs)/%5BDMD0123023%5D%20DMD0123023%20DRY%20DIAMOND%20DISC%209_.jfif"
            }
        ],
        "price": "3650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dmd012302m---ingco-9-inch-230mm-segmented-diamond-cutting-disc",
        "name": "DMD012302M - Ingco 9 Inch (230mm) Segmented Diamond Cutting Disc",
        "description": "Dry Diamond Disc- PCS- 230(9inch)x22.2mm\nBlade with:7.5mm",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "[DMD012302M] DMD012302M DRY DIAMOND DISC 9_.jfif",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/DMD012302M%20-%20Ingco%209%20Inch%20(230mm)%20Segmented%20Diamond%20Cutting%20Disc/%5BDMD012302M%5D%20DMD012302M%20DRY%20DIAMOND%20DISC%209_.jfif"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dmd11802-m---ingco-7-inch-185mm-segmented-diamond-cutting-disc",
        "name": "DMD11802 M - Ingco 7 Inch (185mm) Segmented Diamond Cutting Disc",
        "description": "Dry Diamond Disc (Pcs): 180(7inch)x22.2mm\nBlade width:7.5mm",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "[DMD011802M] DMD011802M DRY DIAMOND DISC 7_.jfif",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/DMD11802%20M%20-%20Ingco%207%20Inch%20(185mm)%20Segmented%20Diamond%20Cutting%20Disc/%5BDMD011802M%5D%20DMD011802M%20DRY%20DIAMOND%20DISC%207_.jfif"
            }
        ],
        "price": "1200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac21111532---total-45-inch-115mm-2-pcs-diamond-cutting-disc-set-segmented",
        "name": "TAC21111532 - Total 4.5 Inch (115mm) 2 Pcs Diamond Cutting Disc  Set (Segmented)",
        "description": "115(4-1/2\"\")X22mm\nBlade width:7mm",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "TAC-21111532.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC21111532%20-%20Total%204.5%20Inch%20(115mm)%202%20Pcs%20Diamond%20Cutting%20Disc%20%20Set%20(Segmented)/TAC-21111532.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2112303---total-9-inch-230mm-diamond-disc",
        "name": "TAC2112303 - Total 9 Inch (230mm) Diamond Disc",
        "description": "230(9\")X22.2mm\nBlade width:10mm\nDesigned for stone cutting, including concrete, brick, limestone, granite and marble\nSuitable for both wet and dry cutting\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "TAC2112303.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC2112303%20-%20Total%209%20Inch%20(230mm)%20Diamond%20Disc/TAC2112303.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2131153---total-45-inch-115mm-turbo-diamond-cutting-disc-continuos",
        "name": "TAC2131153 - Total 4.5 Inch (115mm) Turbo Diamond Cutting Disc (Continuos)",
        "description": "Size: 115 (4.5 ') x 22 mm\nBlade width: 7.5mm\nDiameter: 115mm (4 1/2 \")\nShaft Diameter: 22mm (7/8 \")\nMaximum speed: 13000 min-1/80 m / s.\nWeight: 0.88 lbs\nApplication: wet and dry cutting.",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2164051---total-diamond-disc-for-asphalt-cutting-laser----405-x-254mm",
        "name": "TAC2164051 - TOTAL DIAMOND DISC FOR ASPHALT CUTTING LASER Φ - 405 X 25.4mm",
        "description": "405mm(16\"\")X25.4mm\nSpecial for asphalt cutting\nLaser welded cutting rim\nBlade width:10mm\nSuitable for Gasoline floor saw TP1016-2/TP1016-2EE\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Diamond Cutting Discs",
        "images": [
            {
                "name": "TAC2164051.jpg",
                "url": "/website%20products/Accessories/Diamond%20Cutting%20Discs/TAC2164051%20-%20TOTAL%20DIAMOND%20DISC%20FOR%20ASPHALT%20CUTTING%20LASER%20%CE%A6%20-%20405%20X%2025.4mm/TAC2164051.jpg"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ceramic-tile-drill-bits",
        "name": "Ceramic (Tile) Drill Bits",
        "description": "Diameter (D) mm :6\nProduct text :Pack of 1\nSpecification :6 x 80 mm\nTotal length (L2) mm :80\nNet Weight :0.008 kg\nGross Weight :0.012 kg\n\nDiameter (D) mm :8\nSpecification :8 x 80 mm\nDiameter (D) mm :10\nSpecification :10 x 90 mm\nTotal length (L2) mm :90",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608587161-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181150v117-2608587161-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587161%20-%20Bosch%206%20mm%20Ceramic%20(Tile)%20Bit/2608587161-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181150v117-2608587161-bo-pro-u-a-1.jpg"
            },
            {
                "name": "2608587164-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181152v117-2608587164-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587164%20-%20Bosch%208%20mm%20Ceramic%20(Tile)%20Bit/2608587164-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181152v117-2608587164-bo-pro-u-a-1.jpg"
            },
            {
                "name": "2608587165-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181153v117-2608587165-bo-pro-u-a-1.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Ceramic%20(Tile)%20Drill%20Bits/2608587165%20-%20Bosch%2010%20mm%20Ceramic%20(Tile)%20Bit/2608587165-CYL-9-SoftCeramic-Drill-Bits-en-KE-o181153v117-2608587165-bo-pro-u-a-1.jpg"
            }
        ],
        "price": "690",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glass-drill-bits",
        "name": "Glass Drill Bits",
        "description": "5 Pcs glass drill bits\nCross head carbide tip\nHigh quality carbide tip\nSize:4mm,5mm,6mm,8mm,10mm\nShank:1/4\" hex shank,Titanium finishing\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "AKD7058.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Glass%20Drill%20Bits/AKD7058%20-%20Ingco%205%20Pcs%20Glass%20Drill%20Bit%20Set/AKD7058.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "impact-drill-concrete-masonry-drill-bits",
        "name": "Impact Drill Concrete (Masonry) Drill Bits",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\n– 1 Key\n– 1 Adapter bits.\n\nPackage Contents: 1-Piece 4mm Drill Bit, 1-Piece 5mm Drill Bit, 1-Piece 6mm Drill Bit, 1-Piece 8mm Drill Bit and 1-Piece 10mm Drill Bit\nBosch 5 pieces masonry drill bit set\nSize Diameter: 4mm, 5mm, 6mm, 8mm and 10mm\nMaterial: HSS with brazed carbide tip\nPackage comes with,\n7 pcs HSS drill bits: 2mm, 3mm, 3.5mm, 4mm, 4mm, 5mm, 6mm\n4 pcs Masonry drill bits: 4mm, 5mm, 6mm, 8mm\n8 pcs Screwdriver bits, 25mm: SL4.5, SL5.5, PH1, PH2, PZ1, PZ2, TX20, TX30",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            },
            {
                "name": "2608590090-CYL-1-Masonry-Drill-B.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/2608590090%20-%20Bosch%205%20Pcs%20Concrete%20(Masonry)%20Drill%20Bit%20Set/2608590090-CYL-1-Masonry-Drill-B.jpg"
            },
            {
                "name": "TACSDB1901.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Impact%20Drill%20Concrete%20(Masonry)%20Drill%20Bits/TACSDB1901%20-%20Total%2019%20Pcs%20Drill%20and%20Screwdriver%20Bits%20Set/TACSDB1901.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "metal-drill-bits",
        "name": "Metal Drill Bits",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\n– 1 Key\n– 1 Adapter bits.\n\nDiameter (D) mm :3\nProduct text :Pack of 10\nTotal length (L2) mm :61\nWorking length (L1) mm :33\nShank diameter (d) mm :3\nDiameter (D) mm :4\nTotal length (L2) mm :75\nWorking length (L1) mm :43\nShank diameter (d) mm :4\nDiameter (D) mm :5\nTotal length (L2) mm :86\nWorking length (L1) mm :52\nShank diameter (d) mm :5\nDiameter (D) mm :6\nTotal length (L2) mm :93\nWorking length (L1) mm :57\nShank diameter (d) mm :6\nDiameter (D) mm :7\nTotal length (L2) mm :109\nWorking length (L1) mm :69\nShank diameter (d) mm :7\nDiameter (D) mm :8\nTotal length (L2) mm :117\nWorking length (L1) mm :75\nShank diameter (d) mm :8\nDiameter (D) mm :9\nTotal length (L2) mm :125\nWorking length (L1) mm :81\nShank diameter (d) mm :9\nDiameter (D) mm :10\nTotal length (L2) mm :133\nWorking length (L1) mm :87\nShank diameter (d) mm :10\nDiameter (D) mm :11\nProduct text :Pack of 5\nTotal length (L2) mm :142\nWorking length (L1) mm :94\nShank diameter (d) mm :11\nDiameter (D) mm :12\nTotal length (L2) mm :151\nWorking length (L1) mm :101\nShank diameter (d) mm :12\n6pcs Metal drill bits set\nMaterial:HSS 4341\nSIZE:2,3,4,5,6,8mm\nPacked by plastic box\nSize：2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8mm\n12pcs HSS twist drill bits set\nPacked by double blister\nPackage comes with,\n7 pcs HSS drill bits: 2mm, 3mm, 3.5mm, 4mm, 4mm, 5mm, 6mm\n4 pcs Masonry drill bits: 4mm, 5mm, 6mm, 8mm\n8 pcs Screwdriver bits, 25mm: SL4.5, SL5.5, PH1, PH2, PZ1, PZ2, TX20, TX30",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577198%20-%20Bosch%20HSS%20Twist%20PointTeQ%203mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577208%20-%20Bosch%20HSS%20Twist%20PointTeQ%204mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577218%20-%20Bosch%20HSS%20Twist%20PointTeQ%205mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577228%20-%20Bosch%20HSS%20Twist%20PointTeQ%206mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577238%20-%20Bosch%20HSS%20Twist%20PointTeQ%207mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577248%20-%20Bosch%20HSS%20Twist%20PointTeQ%208mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577258%20-%20Bosch%20HSS%20Twist%20PointTeQ%209mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577268%20-%20Bosch%20HSS%20Twist%20PointTeQ%2010mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577278%20-%20Bosch%20HSS%20Twist%20PointTeQ%2011mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "o257151v82_2608577228_bo_pro_u_a_1.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/2608577288%20-%20Bosch%20HSS%20Twist%20PointTeQ%2012mm%20Metal%20Drill%20Bit/o257151v82_2608577228_bo_pro_u_a_1.webp"
            },
            {
                "name": "AKD1055.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/AKD1055%20-%20Ingco%206%20Pcs%20HSS%20Metal%20Drill%20Bit%20Set%20(Hard%20Case)/AKD1055.jpg"
            },
            {
                "name": "TACSD0125.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/TACSD0125%20-%20Total%2012%20Pcs%20HSS%20Metal%20Drill%20Bit%20Set/TACSD0125.jpg"
            },
            {
                "name": "TACSDB1901.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Metal%20Drill%20Bits/TACSDB1901%20-%20Total%2019%20Pcs%20Drill%20and%20Screwdriver%20Bits%20Set/TACSDB1901.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "sds-rotary-hammer-concrete-masonry-drill-bits",
        "name": "SDS (Rotary Hammer) Concrete (Masonry) Drill Bits",
        "description": "Diameter :10 x 120mm\nDurable carbide tip for longer life in concrete and hard aggregate\nSuitable for drilling of cement, concrete, brick and block\nPacked by double blister\n\nModel no.\tTAC310601\nDiameter\t6mm\nTotal length\t110mm\nWorking length\t50mm\nModel no.\tTAC310602\nLength\t160mm\nWorking length\t135mm\nDiameter :8mm\nLength :210mm",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "TAC261012-500x500.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC261012%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(10%20x%20120mm)/TAC261012-500x500.webp"
            },
            {
                "name": "TAC310601.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310601%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(6%20x%20110mm)/TAC310601.jpg"
            },
            {
                "name": "TAC310602.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310602%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(6%20x%20160mm)/TAC310602.jpg"
            },
            {
                "name": "TAC310803.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/SDS%20(Rotary%20Hammer)%20Concrete%20(Masonry)%20Drill%20Bits/TAC310803%20-%20Total%20SDS%20Plus%20Concrete%20Drill%20Bit%20(8%20x%20210mm)/TAC310803.jpg"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "screwdriver-bits",
        "name": "Screwdriver Bits",
        "description": "5 Drill bits for iron 2 / 2 / 3 / 4 / 5mm.\n– 5 Drill bits for concrete 5 / 5.5 / 6 / 7 / 8mm.\n– 5 Drill bits for wood 4 / 5 / 6 / 7 / 8mm.\n– 10 bits PH1 / PH2 / PH2 / PH3 / PZ1 / PZ2 / PZ2 / PZ2 / S4 / S6.\n– 1 Key\n– 1 Adapter bits.\n\nLength mm :65\nSet description :Set Content: 10 PH2 double ended screwdriver bits\nDimensions, 2nd bit :Object #200227055: 8678\nPH2\nDimensions, 1st bit :Object #200227055: 8678\nNet Weight :0.155 kg\nGross Weight :0.155 kg\n60mm,2pcs/set\nMaterial：Steel + Cr-v\nPacked by double blister\nDimension :2x100 mm\nUsage For :Home, Industry and Professional\nMaterial :Stainless Steel\nRust Proof :Yes\nColor :Silver\nSize :100 mm\nImpact Screwdriver bit\nPH2+PH2 65mm\n10pcs/set\nWith high visibility sleeve\nThe larger optimized Shock Zone are reduces tip breakages\nS2 industrial steel\nBlack surface with magnet\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "Bosch-Accessories-Set-27-pc-260.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/2607017503%20-%20Bosch%2027%20Pcs%20Accessory%20Kit%20Hand%20Tool%20(Screwdriver%20and%20Drill%20Bit%20Combo%20Set)/Bosch-Accessories-Set-27-pc-260.webp"
            },
            {
                "name": "PH2-65mm-Gold-700x700.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/2608521042%20-%20Bosch%20PH2%20Screwdriver%20Bits%20(10%20Pcs)/PH2-65mm-Gold-700x700.jpg"
            },
            {
                "name": "[ABH10601] ABH10601 SCREWDRIVER BIT HOLDER.jfif",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/ABH10601%20-%20Ingco%20Screwdriver%20bit%20holder/%5BABH10601%5D%20ABH10601%20SCREWDRIVER%20BIT%20HOLDER.jfif"
            },
            {
                "name": "HAN.BIT.99632652_1726654399813.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/DL6903%20-%20Deli%20Double%20Side%20Ph2X100%20mm%20Bit%20(10%20Pcs)/HAN.BIT.99632652_1726654399813.webp"
            },
            {
                "name": "TACIM16PH233.webp",
                "url": "/website%20products/Accessories/Drill%20Bits/Screwdriver%20Bits/TACIM16PH23%20-%20Total%20PH2%20Screwdriver%20Bit%20(10%20Pcs)/TACIM16PH233.webp"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "wood-drill-bits",
        "name": "Wood Drill Bits",
        "description": "Diameter (D) mm :6\nProduct text :Pack of 1\nSpecification : 6 x 57 x 93 mm, d 6 mm\nTotal length (L2) mm :93\nWorking length (L1) mm :60\nShank diameter (d) mm :6\nNet Weight :0.015 kg\nGross Weight :0.018 kg\n\nDiameter (D) mm :8\nSpecification : 8 x 75 x 117 mm, d 8 mm\nTotal length (L2) mm :117\nWorking length (L1) mm :80\nShank diameter (d) mm :8\nNet Weight :0.031 kg\nGross Weight :0.032 kg\nDiameter (D) mm :10\nSpecification : 10 x 80 x 120 mm, d 10 mm\nTotal length (L2) mm :120\nShank diameter (d) mm :10\nNet Weight :0.047 kg\nGross Weight :0.047 kg\nDiameter (D) mm :12\nSpecification : 12 x 96 x 151 mm, d 10 mm\nTotal length (L2) mm :151\nWorking length (L1) mm :110\nNet Weight :0.068 kg\nGross Weight :0.071 kg\nWood Flat Drill Bit\nDiameter:10mm\nTotal length:152mm\nDiameter:14mm\nDiameter:6mm\nDiameter:12mm\nDiameter:25mm\nDiameter:30mm\nSpecification\nMaterial :High-speed steel\nSizes :10mm, 12mm, 16mm, 18mm, 20mm, 25mm\nQuantity :6 pieces\nApplication:Wood drilling\nShank type:Hex shank",
        "category": "Accessories",
        "subcategory": "Drill Bits",
        "images": [
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596303%20-%20Bosch%206%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            },
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596305%20-%20Bosch%208%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            },
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596307%20-%20Bosch%2010%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            },
            {
                "name": "2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/2608596309%20-%20Bosch%2012%20mm%20Wood%20Drill%20Bit/2608596303-Brad-Point-Wood-Drill-Bits-with-Cylindrical-Shan.jpg"
            },
            {
                "name": "[DBW2211001] DBW2211001 WOOD FLAT DRILL BIT 10MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211001%20-%20Ingco%2010mm%20Flat%20Wood%20Drill%20Bit%20Set/%5BDBW2211001%5D%20DBW2211001%20WOOD%20FLAT%20DRILL%20BIT%2010MM.png"
            },
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211401%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2014mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            },
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2211601%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%206mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            },
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2212001%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2012mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            },
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2212501%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2025mm/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            },
            {
                "name": "[DBW2211401] DBW2211401 WOOD FLAT DRILL BIT 14MM.png",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DBW2213001%20-%20Ingco%20WOOD%20FLAT%20DRILL%20BIT%2030MM/%5BDBW2211401%5D%20DBW2211401%20WOOD%20FLAT%20DRILL%20BIT%2014MM.png"
            },
            {
                "name": "download-2025-03-26T111931.382.jfif",
                "url": "/website%20products/Accessories/Drill%20Bits/Wood%20Drill%20Bits/DH-MBZ006-ED1%20-%20Deli%20Flat%20Wood%20Drill%20Bit%20Set/download-2025-03-26T111931.382.jfif"
            }
        ],
        "price": "190",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "aet25153n---tronic-extension-reel-25mx15mm",
        "name": "AET25153N - Tronic Extension Reel (25mx1.5mm)",
        "description": "Color: Black & Yellow\nAmps: 13Amps\nVoltage: AC 220 - 240V\nCable Rating: 1.5mm 3 Core\nCable Length: 25 Meters\nLoad Rotating: 3600 Watts\nMaterial: PVC\nAdditional Features: 4x13A Sockets\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5_87461c00-f76f-4620-a898-b7dab2ca7e79.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET25153N%20-%20Tronic%20Extension%20Reel%20(25mx1.5mm)/5_87461c00-f76f-4620-a898-b7dab2ca7e79.webp"
            }
        ],
        "price": "12900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "aet25253n---tronic-extension-reel-25m-x-25mm",
        "name": "AET25253N - Tronic Extension Reel (25m x 2.5mm)",
        "description": "Color: Black & Yellow\nAmps: 13Amps\nVoltage: AC 220 - 240V\nCable Rating: 2.5mm 3 Core\nCable Length: 25 Meters\nLoad Rotating: 3600 Watts\nMaterial: PVC\nAdditional Features: 4x13A Sockets\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5_04793bb4-72e1-4682-8eff-89265897c2e1.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET25253N%20-%20Tronic%20Extension%20Reel%20(25m%20x%202.5mm)/5_04793bb4-72e1-4682-8eff-89265897c2e1.webp"
            }
        ],
        "price": "15850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "aet50253n---tronic-extension-reel-50m-x-25mm",
        "name": "AET50253N - Tronic Extension Reel (50m x 2.5mm)",
        "description": "Color: Black & Yellow\nAmps: 13Amps\nVoltage: AC 220 - 240V\nCable Rating: 2.5mm 3 Core\nCable Length: 50 Meters\nLoad Rotating: 3600 Watts\nMaterial: PVC\nAdditional Features: 4x13A Sockets\nWarranty: 1 Year",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "5.webp",
                "url": "/website%20products/Accessories/Extention%20Cables/AET50253N%20-%20Tronic%20Extension%20Reel%20(50m%20x%202.5mm)/5.webp"
            }
        ],
        "price": "24350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-cable-reel",
        "name": "Generic Cable Reel",
        "description": "Available in Sizes :\n50m x 1.5mm\n100m x 1.5mm\n\n50m x 2.5mm\n100m x 2.5mm",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "1.jpg",
                "url": "/website%20products/Accessories/Extention%20Cables/Generic%20Cable%20Reel/1.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hes03041v---ingco-4-ways-extension-socket",
        "name": "HES03041V - Ingco 4 Ways Extension Socket",
        "description": "4 ways extension socket\nMaximum current 13A\n3 meters 3*1.25mm2 power cable\n2.1A USB\nFlame retardant material\nWith overload protection\nWith 4pcs separate switch\nCopper wire inside construction\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "[HES03041V] HES03041V 4 WAYS EXTENSION SOCKETS.jfif",
                "url": "/website%20products/Accessories/Extention%20Cables/HES03041V%20-%20Ingco%204%20Ways%20Extension%20Socket/%5BHES03041V%5D%20HES03041V%204%20WAYS%20EXTENSION%20SOCKETS.jfif"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hes13041vsb---ingco-extention-cable",
        "name": "HES13041VSB - Ingco Extention Cable",
        "description": "3 ways extension socket\nMaximum current 13A\n3 meters 3*1.25mm2 power cable\n2.1A USB\nFlame retardant material\nWith overload protection\nWith 1pcs separate switch\nCopper wire inside construction\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Extention Cables",
        "images": [
            {
                "name": "[HES13041VSB] HES13041VSB 3 WAYS EXTENSION SOCKETS WITH USB.jfif",
                "url": "/website%20products/Accessories/Extention%20Cables/HES13041VSB%20-%20Ingco%20Extention%20Cable/%5BHES13041VSB%5D%20HES13041VSB%203%20WAYS%20EXTENSION%20SOCKETS%20WITH%20USB.jfif"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dh-115p100---deli-flap-disc-p100",
        "name": "DH-115P100 - Deli Flap Disc (P100)",
        "description": "P100\nSize : 115 x 22.2mm\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "55294b9abb723fa5be113089fdec05c6958b6.png",
                "url": "/website%20products/Accessories/Flap%20Discs/DH-115P100%20-%20Deli%20Flap%20Disc%20(P100)/55294b9abb723fa5be113089fdec05c6958b6.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dh-115p40---deli-flap-disc-p40",
        "name": "DH-115P40 - Deli Flap Disc (P40)",
        "description": "P40\nSize : 115 x 22.2mm\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "55294b9abb723fa5be113089fdec05c6958b6.png",
                "url": "/website%20products/Accessories/Flap%20Discs/DH-115P40%20-%20Deli%20Flap%20Disc%20(P40)/55294b9abb723fa5be113089fdec05c6958b6.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dh-115p60---deli-flap-disc-p60",
        "name": "DH-115P60 - Deli Flap Disc (P60)",
        "description": "P60\nSize : 115 x 22.2mm\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "55294b9abb723fa5be113089fdec05c6958b6.png",
                "url": "/website%20products/Accessories/Flap%20Discs/DH-115P60%20-%20Deli%20Flap%20Disc%20(P60)/55294b9abb723fa5be113089fdec05c6958b6.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dh-115p80---deli-flap-disc-p80",
        "name": "DH-115P80 - Deli Flap Disc (P80)",
        "description": "P80\nSize : 115 x 22.2mm\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "55294b9abb723fa5be113089fdec05c6958b6.png",
                "url": "/website%20products/Accessories/Flap%20Discs/DH-115P80%20-%20Deli%20Flap%20Disc%20(P80)/55294b9abb723fa5be113089fdec05c6958b6.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac631252---total-flap-disc-p60",
        "name": "TAC631252 - Total Flap Disc (P60)",
        "description": "Size：125mm*22mm,P60\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "TAC631252.jpg",
                "url": "/website%20products/Accessories/Flap%20Discs/TAC631252%20-%20Total%20Flap%20Disc%20(P60)/TAC631252.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac631803---total-flap-disc-p80",
        "name": "TAC631803 - Total Flap Disc (P80)",
        "description": "Size：180mm*22mm*120 P80\nSuitable for high steel，steel，cast iron and sheet steel\nPacked by label\"",
        "category": "Accessories",
        "subcategory": "Flap Discs",
        "images": [
            {
                "name": "TAC631803.jpg",
                "url": "/website%20products/Accessories/Flap%20Discs/TAC631803%20-%20Total%20Flap%20Disc%20(P80)/TAC631803.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608003025---bosch-hacksaw-blade-150-mm",
        "name": "2608003025 - Bosch Hacksaw Blade (150 mm)",
        "description": "Material :High Speed Steel\nColour :Blue\nNumber of Teeth :24\nStyle :Traditional\nItem Weight :0.9 Kilograms",
        "category": "Accessories",
        "subcategory": "Hacksaw Blades",
        "images": [
            {
                "name": "51YTIK+vboL._SX569_.jpg",
                "url": "/website%20products/Accessories/Hacksaw%20Blades/2608003025%20-%20Bosch%20Hacksaw%20Blade%20(150%20mm)/51YTIK%2BvboL._SX569_.jpg"
            }
        ],
        "price": "100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "t-111-c---bosch-basic-5-pcs-jigsaw-blade-set-wood",
        "name": "T 111 C -  Bosch Basic 5 Pcs Jigsaw Blade Set (Wood)",
        "description": "Total length mm :100\nShank :Single lug shank\nType :T 111 C\nLength of teeth mm :74\nMaterial :HCS\nTooth spacing [mm] :3\nSoftwood (4-50 mm), chipboard, wood core plywood, fibre boards, quick cutHCS, side set, milled\nSpecification :Basic for Wood",
        "category": "Accessories",
        "subcategory": "Jigsaw Blades",
        "images": [
            {
                "name": "2608630033-T-111-C-Basic-for-Wood-Jigsaw-Blades-en-KE-o353506v117-2608630808-bo-pro-u-f-2.jpg",
                "url": "/website%20products/Accessories/Jigsaw%20Blades/T%20111%20C%20-%20%20Bosch%20Basic%205%20Pcs%20Jigsaw%20Blade%20Set%20(Wood)/2608630033-T-111-C-Basic-for-Wood-Jigsaw-Blades-en-KE-o353506v117-2608630808-bo-pro-u-f-2.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "t-144-d---bosch-speed-5-pcs-jigsaw-blade-set-wood",
        "name": "T 144 D -  Bosch Speed 5 Pcs Jigsaw Blade Set (Wood)",
        "description": "Total length mm :100\nShank :Single lug shank\nType :T 144 D\nLength of teeth mm :74\nMaterial :HCS\nTooth spacing [mm] :4.0 - 5.2\nSoftwood (5-50 mm), chipboard, wood core plywood, fibre boards\nSpecification :Speed for Wood",
        "category": "Accessories",
        "subcategory": "Jigsaw Blades",
        "images": [
            {
                "name": "2608630040-T-144-D-Speed-for-Wood-Jigsaw-Blades-en-KE-o353701v117-2608630560-bo-pro-u-f-2.jpg",
                "url": "/website%20products/Accessories/Jigsaw%20Blades/T%20144%20D%20-%20%20Bosch%20Speed%205%20Pcs%20Jigsaw%20Blade%20Set%20(Wood)/2608630040-T-144-D-Speed-for-Wood-Jigsaw-Blades-en-KE-o353701v117-2608630560-bo-pro-u-f-2.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tjsbt111c---total-jigsaw-blade-set-5-pcs",
        "name": "TJSBT111C - Total Jigsaw Blade Set (5 Pcs)",
        "description": "Basic for wood\nLength of tooth:74mm\n8TPI\nHCS,milled\n5pcs/set\nideal for soft wood(4-50mm),chipboards,wood core plywood,fibre boards,quick cut,\nPacked by blister card",
        "category": "Accessories",
        "subcategory": "Jigsaw Blades",
        "images": [
            {
                "name": "TJSBT111C.jpg",
                "url": "/website%20products/Accessories/Jigsaw%20Blades/TJSBT111C%20-%20Total%20Jigsaw%20Blade%20Set%20(5%20Pcs)/TJSBT111C.jpg"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl4808t---deli-magnetic-nut-driver-set-3-pcs",
        "name": "EDL4808T - Deli Magnetic Nut Driver Set (3 Pcs)",
        "description": "8mm Nut Driver Size – Precision 8mm tips provide secure engagement for fastening and loosening nuts and bolts in professional workshop and maintenance tasks.\n65mm Shaft Length – Compact design allows access to recessed or tight fasteners while maintaining full control during use.\n3 Piece Set – Includes three magnetic nut drivers for versatile applications and easy replacement during repetitive fastening work.\nMagnetic Tip Design – Strong magnets hold nuts and bolts in place for accurate positioning and efficient operation.\nHigh Strength Construction – Built from durable materials to withstand frequent use in automotive, electrical, and workshop environments.\nErgonomic Handle Design – Comfortable grips improve control and reduce hand fatigue during extended applications.\nCorrosion Resistant Finish – Protective coating prevents rust and maintains tool durability over time.\nVersatile Workshop and Industrial Use – Ideal for technicians, electricians, mechanics, and DIY users performing assembly, repair, and maintenance tasks.",
        "category": "Accessories",
        "subcategory": "Magnetic Nut Sets",
        "images": [
            {
                "name": "EDL4808T-i1_400x.webp",
                "url": "/website%20products/Accessories/Magnetic%20Nut%20Sets/EDL4808T%20-%20Deli%20Magnetic%20Nut%20Driver%20Set%20(3%20Pcs)/EDL4808T-i1_400x.webp"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac270831---total-3-pcs-magnetic-nut-set",
        "name": "TAC270831 - Total 3 Pcs Magnetic Nut Set",
        "description": "8mm,3pcs/set\nShank:1/4\"\" Hex\nLength:65mm\nMaterial：50BV30\nWith strong magnet\nPacked by sliding card",
        "category": "Accessories",
        "subcategory": "Magnetic Nut Sets",
        "images": [
            {
                "name": "TAC270831.jpg",
                "url": "/website%20products/Accessories/Magnetic%20Nut%20Sets/TAC270831%20-%20Total%203%20Pcs%20Magnetic%20Nut%20Set/TAC270831.jpg"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2765061---total-magnetic-impact-nut-set-6-pcs",
        "name": "TAC2765061 - Total Magnetic Impact Nut Set (6 Pcs)",
        "description": "6pcs/set\n6mm,7mm,8mm,9mm,10mm,12mm\nShank:1/4\"\" Hex\nLength:65mm\nMaterial:50BV30\nWith strong magnet\nPacked by plastic box",
        "category": "Accessories",
        "subcategory": "Magnetic Nut Sets",
        "images": [
            {
                "name": "TAC2765061.jpg",
                "url": "/website%20products/Accessories/Magnetic%20Nut%20Sets/TAC2765061%20-%20Total%20Magnetic%20Impact%20Nut%20Set%20(6%20Pcs)/TAC2765061.jpg"
            }
        ],
        "price": "900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608619383---bosch-45-inch-115mm-metal-cuting-discs",
        "name": "2608619383 - Bosch 4.5 Inch (115mm) Metal Cuting Discs",
        "description": "Bore diameter mm :22.230\nThickness mm :1\nDiameter mm :115\nProduct text :Straight\nSpecification :A 60 T BF",
        "category": "Accessories",
        "subcategory": "Metal Cutting Discs",
        "images": [
            {
                "name": "o323279v82_2608619383_bo_pro_u_f_1.webp",
                "url": "/website%20products/Accessories/Metal%20Cutting%20Discs/2608619383%20-%20Bosch%204.5%20Inch%20(115mm)%20Metal%20Cuting%20Discs/o323279v82_2608619383_bo_pro_u_f_1.webp"
            }
        ],
        "price": "65",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608619770---bosch-9-inch-230mm-metal-cutting-disc",
        "name": "2608619770 - Bosch 9 Inch (230mm) Metal Cutting Disc",
        "description": "Bore diameter mm :22.230\nThickness mm :1.9\nDiameter mm :230\nProduct text :Straight\nSpecification :A 46 S BF",
        "category": "Accessories",
        "subcategory": "Metal Cutting Discs",
        "images": [
            {
                "name": "2608619770-Standard-for-Metal-Cutting-Discs-with-Straight-Centre-22.23-mm-Bore-for-Large-Angle-Grin.jpg",
                "url": "/website%20products/Accessories/Metal%20Cutting%20Discs/2608619770%20-%20Bosch%209%20Inch%20(230mm)%20Metal%20Cutting%20Disc/2608619770-Standard-for-Metal-Cutting-Discs-with-Straight-Centre-22.23-mm-Bore-for-Large-Angle-Grin.jpg"
            }
        ],
        "price": "180",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2162301---total-9-inch-230mm-metal-cutting-discs",
        "name": "TAC2162301 - Total 9 Inch (230mm) Metal Cutting Discs",
        "description": "230MM(9\")X1.6MM(1/16\")X22.2MM(7/8\")\nFlat centre\nCutting disc for metal and inox\nRPM:6650r/min\nPacked by label",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608603181---bosch-pro-metal-bonded-grinding-disc-115-x-6-x-2223-mm",
        "name": "2608603181 - Bosch PRO Metal Bonded Grinding Disc, 115 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\nThickness mm :6\nDiameter mm :115\nSpecification :A 24 P BF, 115 mm, 22,23 mm, 6,0 mm\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603181-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470251v117-260860318.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603181%20-%20Bosch%20PRO%20Metal%20Bonded%20Grinding%20Disc%2C%20115%20x%206%20x%2022.23%20mm/2608603181-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470251v117-260860318.jpg"
            }
        ],
        "price": "130",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608603182---pro-metal-bonded-grinding-disc-125-x-6-x-2223-mm",
        "name": "2608603182 - PRO Metal Bonded Grinding Disc, 125 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\nThickness mm :6\nDiameter mm :125\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603182-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470253v117-2608603182-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603182%20-%20PRO%20Metal%20Bonded%20Grinding%20Disc%2C%20125%20x%206%20x%2022.23%20mm/2608603182-PRO-Metal-Bonded-Grinding-Disc-for-Small-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470253v117-2608603182-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "140",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608603183---pro-metal-bonded-grinding-disc-180-x-6-x-2223-mm",
        "name": "2608603183 - PRO Metal Bonded Grinding Disc, 180 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\nThickness mm :6\nDiameter mm :180\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "2608603183-PRO-Metal-Bonded-Grinding-Disc-for-Large-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470255v117-2608603183-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603183%20-%20PRO%20Metal%20Bonded%20Grinding%20Disc%2C%20180%20x%206%20x%2022.23%20mm/2608603183-PRO-Metal-Bonded-Grinding-Disc-for-Large-Angle-Grinders-Bore-22.23-mm-oSa-en-KE-o470255v117-2608603183-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608603184---bosch-pro-metal-bonded-grinding-disc-230-x-6-x-2223-mm",
        "name": "2608603184 - Bosch PRO Metal Bonded Grinding Disc, 230 x 6 x 22.23 mm",
        "description": "Bore diameter mm :22.230\nThickness mm :6\nDiameter mm :230\nSpecification :A 24 P BF, 125 mm, 22,23 mm, 6,0 mm\nSpecification :A 24 P BF",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "51e5ddd72c3d3018ce07ae3e758e601f.webp",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/2608603184%20-%20Bosch%20PRO%20Metal%20Bonded%20Grinding%20Disc%2C%20230%20x%206%20x%2022.23%20mm/51e5ddd72c3d3018ce07ae3e758e601f.webp"
            }
        ],
        "price": "410",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mgd601151---ingco-4-inch-metal-grinding-disc",
        "name": "MGD601151 - Ingco 4 Inch Metal Grinding Disc",
        "description": "Abrasive Metal Grinding Disc\n115x6x22.2mm\nCutting disc for metal-4inch\nHS CODE:68042210.00.00",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "[MGD601151] MGD601151  ABRASIVE METAL GRINDING DISC.jfif",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/MGD601151%20-%20Ingco%204%20Inch%20Metal%20Grinding%20Disc/%5BMGD601151%5D%20MGD601151%20%20ABRASIVE%20METAL%20GRINDING%20DISC.jfif"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mgd601801---ingco-7-inch-metal-grinding-disc",
        "name": "MGD601801 - Ingco 7 Inch Metal Grinding Disc",
        "description": "180mm(7\")X6.0mm(1/4\")X22.2mm(7/8\")\nDepressed centre\nGrinding disc for metal\nPacked by label",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mgd602301---ingco-9-inch-metal-grinding-disc",
        "name": "MGD602301 - Ingco 9 Inch Metal grinding Disc",
        "description": "230mm(9\")X6.0mm(1/4\")X22.2mm(7/8\")\nDepressed centre\nGrinding disc for metal\nPacked by label",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "MCD301151.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/MGD602301%20-%20Ingco%209%20Inch%20Metal%20grinding%20Disc/MCD301151.jpg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2231151---total-4-inch-metal-grinding-disc",
        "name": "TAC2231151 - Total 4 Inch Metal Grinding Disc",
        "description": "DIAMENSIONS\t115mm X 6mm X 22.2mm",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "TAC2231151.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/TAC2231151%20-%20Total%204%20Inch%20Metal%20Grinding%20Disc/TAC2231151.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2231801---total-7-inch-metal-griniding-disc",
        "name": "TAC2231801 - Total 7 Inch Metal Griniding Disc",
        "description": "DIMENSIONS: 180mm X 6mm X 22.2mm",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "TAC2231801.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/TAC2231801%20-%20Total%207%20Inch%20Metal%20Griniding%20Disc/TAC2231801.jpg"
            }
        ],
        "price": "320",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tac2232301---total-9-inch-metal-grinidng-disc",
        "name": "TAC2232301 - Total 9 Inch Metal Grinidng Disc",
        "description": "DIMENSIONS: 230mm X 6mm X 22.2mm",
        "category": "Accessories",
        "subcategory": "Metal Grinding Discs",
        "images": [
            {
                "name": "TAC2232301.jpg",
                "url": "/website%20products/Accessories/Metal%20Grinding%20Discs/TAC2232301%20-%20Total%209%20Inch%20Metal%20Grinidng%20Disc/TAC2232301.jpg"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "epb820121---ingco-planer-blade",
        "name": "EPB820121 - Ingco Planer Blade",
        "description": "Size:82X5.5X1.2mm\nMaterial:HSS\n2pcs/set\nSuitable for electric planer PL10508\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Planer Blades",
        "images": [
            {
                "name": "[EPB820121] EPB820121 PLANNER BLADE.jfif",
                "url": "/website%20products/Accessories/Planer%20Blades/EPB820121%20-%20Ingco%20Planer%20Blade/%5BEPB820121%5D%20EPB820121%20PLANNER%20BLADE.jfif"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht9391bl---total-planer-blade",
        "name": "THT9391BL - Total Planer Blade",
        "description": "Product: THT9391BL (Planer Blade).\nBrand: TOTAL Tools.\nCompatibility: Specifically for the THT9391 Planer.\nDimensions: 80mm (Length) x 44mm (Width).\nMaterial: Often Q195 steel for durability, as seen with the main planer model.",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "rsb611d---ingco-5-pcs-reciprocating-saw-blades-wood",
        "name": "RSB611D - Ingco 5 Pcs Reciprocating Saw Blades (Wood)",
        "description": "Basic for Wood\n150mm*19mm*1.2mm\n6TPI-HCS-Milled\n5pcs/set\nPacked by double blister",
        "category": "Accessories",
        "subcategory": "Reciprocating Saw Blades",
        "images": [
            {
                "name": "[RSB611D] RSB611D RECIPROCATING SAW BLADES FOR WOOD.jfif",
                "url": "/website%20products/Accessories/Reciprocating%20Saw%20Blades/RSB611D%20-%20Ingco%205%20Pcs%20Reciprocating%20Saw%20Blades%20(Wood)/%5BRSB611D%5D%20RSB611D%20RECIPROCATING%20SAW%20BLADES%20FOR%20WOOD.jfif"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ssb922ef---ingco-5-pcs-reciprocating-saw-blades-metal",
        "name": "SSB922EF - Ingco 5 Pcs Reciprocating Saw Blades (Metal)",
        "description": "Flexible for Metal\n150mmX19mmX0.9mm\n18TPI - Bi-Metal - Milled\nSuitable for RS8008\n1/2\" shank,2pcs/set\nCuts all metals including nonferrous pipe (&lt;100mm) conduit, stainless and sheet metals(1.5-4mm)\nPacked by blister card",
        "category": "Accessories",
        "subcategory": "Reciprocating Saw Blades",
        "images": [
            {
                "name": "[SSB922EF] SSB922EF RECIPROCATING SAW BLADE.png",
                "url": "/website%20products/Accessories/Reciprocating%20Saw%20Blades/SSB922EF%20-%20Ingco%205%20Pcs%20Reciprocating%20Saw%20Blades%20(Metal)/%5BSSB922EF%5D%20SSB922EF%20RECIPROCATING%20SAW%20BLADE.png"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607017465---bosch-pro-router-bit-straight-set-shank-6-mm-6-pcs",
        "name": "2607017465 - Bosch PRO Router Bit Straight Set, Shank 6 mm, 6 pcs",
        "description": "Type: Straight router bit set for woodworking routers\nNumber of Pieces: 6 router bits\nShank Diameter: 6 mm (fits routers with 6 mm collet)\nMaterial: Carbide cutting edges for durability and clean cuts\nCase: Comes in a robust storage case with transparent cover for easy organization and transport\n\nDiameter (D)\tWorking/Cutting Length\tTotal Length\tType\n6 mm\t        20 mm\t                54 mm\t        Straight bit (2-cutter)\n8 mm\t        20 mm\t                50 mm\t        Straight bit (2-cutter)\n10 mm\t        30 mm\t                60 mm\t        Straight bit (2-cutter)\n12 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\n16 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\n20 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "bosch-2607017465-6-mm-wood-drill-bit-set-6-units-1-600x600.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017465%20-%20Bosch%20PRO%20Router%20Bit%20Straight%20Set%2C%20Shank%206%20mm%2C%206%20pcs/bosch-2607017465-6-mm-wood-drill-bit-set-6-units-1-600x600.jpg"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607017466---bosch-pro-router-bit-straight-set-shank-8-mm-6-pcs",
        "name": "2607017466 - Bosch PRO Router Bit Straight Set, Shank 8 mm, 6 pcs",
        "description": "Set Type: Straight router bit set for woodworking\nNumber of Pieces: 6 router bits\nShank Diameter: 8 mm (fits routers with an 8 mm collet)\nCutting Material: Carbide cutting edges brazed to steel for durability and smoother cuts\nCase: Comes in a plastic or cassette style carrying case for secure bit storage and transport\nTypical Uses: Grooves, slots, rebates and straight routing in softwoods, hardwoods and wood composite materials\n\nDiameter (D)\tWorking/Cutting Length\tTotal Length\tType\n6 mm\t        20 mm\t                54 mm\t        Straight bit (2-cutter)\n8 mm\t        20 mm\t                50 mm\t        Straight bit (2-cutter)\n10 mm\t        30 mm\t                60 mm\t        Straight bit (2-cutter)\n12 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\n16 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)\n20 mm\t        30 mm\t                60 mm\t        Straight bit (3-cutter)",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017466-PRO-Router-Bit-Straight-Set-6-pcs-en-KE-o487504v117-2607017466-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017466%20-%20Bosch%20PRO%20Router%20Bit%20Straight%20Set%2C%20Shank%208%20mm%2C%206%20pcs/2607017466-PRO-Router-Bit-Straight-Set-6-pcs-en-KE-o487504v117-2607017466-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "3490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607017471---bosch-pro-router-bit-mixed-set-shank-6-mm-15-pcs",
        "name": "2607017471 - Bosch PRO Router Bit Mixed Set, Shank 6 mm, 15 pcs",
        "description": "Set Type: Mixed router bit set for precision wood routing\nNumber of Pieces: 15 bits\nShank Diameter: 6 mm (fits routers/trimmers with a 6 mm collet)\nMaterial: Carbide-tipped cutters for durability and clean cuts\nStorage: Supplied in a robust plastic case with Easy-Pick inlay for safe storage and quick selection\nStandards: Manufactured to DIN EN 847 woodworking accessory standards\n\n| Profile Type            | Diameter (mm)  | Working Length (mm) | Total Length (mm) |\n| ----------------------- | -------------- | ------------------- | ----------------- |\n| Flush trim bit          | 13             | 25                  | 65                |\n| Flush pattern bit       | 16             | 25                  | 65                |\n| Dovetail bit            | 13             | 12                  | 49                |\n| Chamfer bit (45°)       | 35             | 16                  | 56                |\n| Chamfer bit (25°)       | 25             | 13                  | 54                |\n| V-groove bit (60°)      | 16             | 18                  | 50                |\n| Slotting cutter         | 32             | 4                   | 50                |\n| Rebating bit            | 32             | 13                  | 54                |\n| Straight bit (2-cutter) | 8              | 20                  | 50                |\n| Straight bit (2-cutter) | 10             | 30                  | 60                |\n| Straight bit (3-cutter) | 16             | 30                  | 60                |\n| Rounding-over bit       | 19 (radius 3)  | 10                  | 51                |\n| Rounding-over bit       | 25 (radius 6)  | 13                  | 55                |\n| Roman ogee bit          | 27 (radius 4)  | 12                  | 52                |\n| Cove bit                | 29 (radius 10) | 12                  | 54                |",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017471-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o518221v117-2607017471-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017471%20-%20Bosch%20PRO%20Router%20Bit%20Mixed%20Set%2C%20Shank%206%20mm%2C%2015%20pcs/2607017471-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o518221v117-2607017471-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "8890",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607017472---bosch-pro-router-bit-mixed-set-shank-8-mm-15-pcs",
        "name": "2607017472 - Bosch PRO Router Bit Mixed Set, Shank 8 mm, 15 pcs",
        "description": "Set Type: Mixed router bit set for precision wood routing\nNumber of Pieces: 15 bits\nShank Diameter: 8mm (fits routers/trimmers with a 6 mm collet)\nMaterial: Carbide-tipped cutters for durability and clean cuts\nStorage: Supplied in a robust plastic case with Easy-Pick inlay for safe storage and quick selection\nStandards: Manufactured to DIN EN 847 woodworking accessory standards\n\n| Profile Type            | Diameter (mm)  | Working Length (mm) | Total Length (mm) |\n| ----------------------- | -------------- | ------------------- | ----------------- |\n| Flush trim bit          | 13             | 25                  | 65                |\n| Flush pattern bit       | 16             | 25                  | 65                |\n| Dovetail bit            | 13             | 12                  | 49                |\n| Chamfer bit (45°)       | 35             | 16                  | 56                |\n| Chamfer bit (25°)       | 25             | 13                  | 54                |\n| V-groove bit (60°)      | 16             | 18                  | 50                |\n| Slotting cutter         | 32             | 4                   | 50                |\n| Rebating bit            | 32             | 13                  | 54                |\n| Straight bit (2-cutter) | 8              | 20                  | 50                |\n| Straight bit (2-cutter) | 10             | 30                  | 60                |\n| Straight bit (3-cutter) | 16             | 30                  | 60                |\n| Rounding-over bit       | 19 (radius 3)  | 10                  | 51                |\n| Rounding-over bit       | 25 (radius 6)  | 13                  | 55                |\n| Roman ogee bit          | 27 (radius 4)  | 12                  | 52                |\n| Cove bit                | 29 (radius 10) | 12                  | 54                |",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607017472-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o487512v117-2607017472-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607017472%20-%20Bosch%20PRO%20Router%20Bit%20Mixed%20Set%2C%20Shank%208%20mm%2C%2015%20pcs/2607017472-PRO-Router-Bit-Mixed-Set-15-pcs-en-KE-o487512v117-2607017472-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "8900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607019464---bosch-tungsten-carbide-router-bit-set-6-pieces",
        "name": "2607019464 - Bosch Tungsten-carbide Router Bit Set 6 Pieces",
        "description": "Model / Part Number: 2607.019.464-UUU (Bosch 2607019464)\nType: Router bit set for woodworking routers\nNumber of Pieces: 6 bits in the set\nShank Diameter: 6 mm (fits routers with 6 mm collet)\nMaterial: Cemented carbide cutting edges for durability and wear resistance\nColor: Silver and black finish",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607019464-6-piece-TC-router-bit-set-6-mm-shank-en-KE-o179487v288-2607019464-bo-pl-u-a-1.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607019464%20-%20Bosch%20Tungsten-carbide%20Router%20Bit%20Set%206%20Pieces/2607019464-6-piece-TC-router-bit-set-6-mm-shank-en-KE-o179487v288-2607019464-bo-pl-u-a-1.png"
            }
        ],
        "price": "4600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2607019469---bosch-tungsten-carbide-router-bit-set-15-pcs",
        "name": "2607019469 - Bosch Tungsten-carbide Router Bit Set 15 pcs",
        "description": "Model / Part Number: 2607.019.469-UUU (Bosch 2607019469)\nType: Router bit set for woodworking\nNumber of Pieces: 15 router bits in the set\nShank Diameter: 8 mm (fits routers and trimmers with 8 mm collet)\nMaterial: Tungsten-carbide tipped / carbide bits (high quality for durability and long life)\nFinish / Packaging: Typically supplied in a wooden or plastic case for organization and safe storage",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "2607019469-15-piece-TC-router-bit-set-8-mm-shank-en-KE-o406429v288-2607019469-bo-pl-u-a-1.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/2607019469%20-%20Bosch%20Tungsten-carbide%20Router%20Bit%20Set%2015%20pcs/2607019469-15-piece-TC-router-bit-set-8-mm-shank-en-KE-o406429v288-2607019469-bo-pl-u-a-1.png"
            }
        ],
        "price": "8670",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "26150660ja---dremel-multipurpose-router-bit-set",
        "name": "26150660JA - DREMEL® Multipurpose Router Bit Set",
        "description": "Bits included: 7 router bits designed for various routing tasks\nCompatible with: Most Dremel rotary/multi-tools and other tools that accept a 3.2 mm shank\nMaterial: High-speed steel (HSS) for durability and clean cuts\nShank diameter: 3.2 mm\nStorage: Comes in a wooden box for organization and protection\n\nBit Type\t                 Approx Size / Use\nType 612 – Piloted Beading\t 9.5 mm\nType 615 – Corner Rounding\t 9.5 mm\nType 640 – V-Groove\t         6.4 mm\nType 650 – Straight Cutter\t 3.2 mm\nType 652 – Straight Cutter\t 4.8 mm\nType 654 – Straight Cutter\t 6.4 mm\nType 655 – Keyhole Router Bit\t 8.0 mm",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "26150660JA-DREMEL-Multipurpose-Router-Bit-Set--en-KE-dremelmdb01-o16221v113-16221.png",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/26150660JA%20-%20DREMEL%C2%AE%20Multipurpose%20Router%20Bit%20Set/26150660JA-DREMEL-Multipurpose-Router-Bit-Set--en-KE-dremelmdb01-o16221v113-16221.png"
            }
        ],
        "price": "8150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akrt1201---ingco-router-bit-set-6mm",
        "name": "AKRT1201 - Ingco Router Bit Set (6mm)",
        "description": "Shank diameter: 6mm\n3pcs Straight bit:6mm,12mm,16mm\n1pcs 1/2\" 90°V-groove bit\n1pcs 1/2\" Dovetail bit\n1pcs 32mm 45°Chamfer bit\n1pcs 1/2\" flush trim bits\n2pcs Round over bit:1/4\",3/8\"\n1pcs 1/4\" Core box bit\n1pcs 1/4\" Core bit\n1pcs R-4 Roman ogee bit\nPacked by plywood case",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "[AKRT1201] AKRT1201 12 PCS ROUTER BIT SET 6MM.jfif",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/AKRT1201%20-%20Ingco%20Router%20Bit%20Set%20(6mm)/%5BAKRT1201%5D%20AKRT1201%2012%20PCS%20ROUTER%20BIT%20SET%206MM.jfif"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akrt1211---ingco-router-bit-set-8mm",
        "name": "AKRT1211 - Ingco Router Bit Set (8mm)",
        "description": "Shank diameter: 8mm\n3pcs Straight bit : 6mm,12mm,16mm, 1pcs 1/2\" 90°V-groove bit\n1pcs 1/2\" Dovetail bit\n1pcs 32mm 45°Chamfer bit\n1pcs 1/2\" flush trim bits\n2pcs Corner round bit:1/4\",3/8\"\n1pcs 1/4\" Core box bit\n1pcs 1/4\" Core bit\n1pcs R-4 Roman ogee bit\nPacked by plywood case",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "[AKRT1211] AKRT1211 12 PCS ROUTER BIT SET 8MM.jfif",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/AKRT1211%20-%20Ingco%20Router%20Bit%20Set%20(8mm)/%5BAKRT1211%5D%20AKRT1211%2012%20PCS%20ROUTER%20BIT%20SET%208MM.jfif"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tacsr0121---total-router-bits-set-6mm",
        "name": "TACSR0121 - Total Router Bits Set (6mm)",
        "description": "Shank diameter:6mm\n3pcs straight bit:6mm, 12mm, 16mm\n1pcs 1/2” 90 v-groove bit\n1pcs 1/2” dovetail bit\n1pcs 32mm 45 chamfer bit\n1pcs 1/2′ flush trim bit",
        "category": "Accessories",
        "subcategory": "Router Bits Set",
        "images": [
            {
                "name": "TACSR0121.webp",
                "url": "/website%20products/Accessories/Router%20Bits%20Set/TACSR0121%20-%20Total%20Router%20Bits%20Set%20(6mm)/TACSR0121.webp"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608606081---bosch-x440-sanding-belt-belt-sander-sanding-sheets",
        "name": "2608606081 - Bosch X440 Sanding Belt (Belt Sander Sanding Sheets)",
        "description": "Grit :60\nMachine type :Belt Sanders\nType :X440\nProduct text :Pack of 10\nSuitable for :Bosch; AEG; DeWalt; Festool; Holz-Her; Makita; Skil\nSpecification :75 x 533 mm, 60",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "2608606081-PRO-X440-Sanding-Belt-for-Sanders-en-KE-o42724.jpg",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/2608606081%20-%20Bosch%20X440%20Sanding%20Belt%20(Belt%20Sander%20Sanding%20Sheets)/2608606081-PRO-X440-Sanding-Belt-for-Sanders-en-KE-o42724.jpg"
            }
        ],
        "price": "1860",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akrs150051---ingco-sanding-sheet-for-sander-150mm",
        "name": "AKRS150051 - Ingco Sanding Sheet for Sander (150mm)",
        "description": "Specifications\nProduct Type: Sanding Sheet for Random Orbit Sander\nSize: 6\" (150 mm)\n\nGrit Composition:\n3 pcs Grit 80 (coarse)\n2 pcs Grit 120 (medium)\nCompatibility: Applicable to other orbit sanders",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "[AKRS150051] SANDING SHEET AKRS150051.webp",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/AKRS150051%20-%20Ingco%20Sanding%20Sheet%20for%20Sander%20(150mm)/%5BAKRS150051%5D%20SANDING%20SHEET%20AKRS150051.webp"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edh-dsz610-e1---deli-belt-sander-sheet-p80-2-pcs-100x610mm",
        "name": "EDH-DSZ610-E1 - Deli Belt Sander Sheet (P80) (2 Pcs) (100x610mm)",
        "description": "100*610mm\nP80,2pcs/set\nPacked by label",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "dh-dsz610-e1_l.jpg",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/EDH-DSZ610-E1%20-%20Deli%20Belt%20Sander%20Sheet%20(P80)%20(2%20Pcs)%20(100x610mm)/dh-dsz610-e1_l.jpg"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-velcro-backing-pad",
        "name": "Generic Velcro Backing Pad",
        "description": "M14 Machine Connecting Nut\nSoft Pad that Stretches According to the Applied Surface\nVelcro Surface That Can Be Sanded\n\nAvailable in sizes : 4\"/5\"/7\"/9\"",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "sgs-180mm-velcro-sanding-disc-pad-base.webp",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/Generic%20Velcro%20Backing%20Pad/sgs-180mm-velcro-sanding-disc-pad-base.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-velcro-sanding-sheets-sandpaper",
        "name": "Generic Velcro Sanding Sheets (Sandpaper)",
        "description": "Key Features and Benefits\nEasy Attachment: Quickly swap between grits without adhesive mess, making them ideal for progressive sanding.\nVersatility: Available inVarious sizes, commonly 5-inch (125mm) or 6-inch (150mm) for random orbit sanders, as well as specialized shapes like triangular, rectangular, and \"mouse\" shapes for corner sanding.\nDust Extraction: Many pads come pre-punched with holes (e.g., 8-hole or 15-hole patterns) to allow debris to pass through, reducing clogging and improving air quality.\nMaterial: Often constructed from durable aluminum oxide, suitable for wood, metal, plastic, and filler materials.\nCost-Effective: Reusable design allows for long-term use, and worn-out Velcro backing pads on tools can be easily replaced.\nUsage Tips\nCompatibility: Ensure the sanding discs match the hole pattern of your sander for maximum dust collection.\nReplacement: To replace a worn-out velcro base on a sander, clean the pad thoroughly with alcohol, remove old debris, and ensure a 24-hour curing time for new adhesive-backed Velcro.\nStorage: Avoid storing sanders face-down to prevent the hook fasteners from bending, which weakens their grip.\nVelcro sanding pads are highly recommended for both DIY enthusiasts and professionals for tasks requiring fast, clean, and consistent finishes\n\nAvailable in Grits : P40/P60/P80/P100/P120/P180/P240\nAvailable Sizes : 4\"/5\"/7\"/9\"",
        "category": "Accessories",
        "subcategory": "Sanding Sheet (Sandpaper) and Sanding Backing Pads",
        "images": [
            {
                "name": "download.jfif",
                "url": "/website%20products/Accessories/Sanding%20Sheet%20(Sandpaper)%20and%20Sanding%20Backing%20Pads/Generic%20Velcro%20Sanding%20Sheets%20(Sandpaper)/download.jfif"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ingco-staples--x-113-x-07mm",
        "name": "Ingco Staples (# x 11.3 x 0.7mm)",
        "description": "1000pcs staples\nsize:8mm/10mm/12mm width:0.7mm length:11.3mm\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Staple Pins",
        "images": [
            {
                "name": "[STS0108] STS0108 STAPLES 8MM.jfif",
                "url": "/website%20products/Accessories/Staple%20Pins/Ingco%20Staples%20(%23%20x%2011.3%20x%200.7mm)/%5BSTS0108%5D%20STS0108%20STAPLES%208MM.jfif"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ingco-staples--x-113-x-12mm",
        "name": "Ingco Staples (# x 11.3 x 1.2mm)",
        "description": "1000pcs staples\nsize:8mm/10mm/12mm width:1.2mm length:11.3mm\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Staple Pins",
        "images": [
            {
                "name": "[STS0208] STS0208 STAPLES 8MM.png",
                "url": "/website%20products/Accessories/Staple%20Pins/Ingco%20Staples%20(%23%20x%2011.3%20x%201.2mm)/%5BSTS0208%5D%20STS0208%20STAPLES%208MM.png"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "total-staples--x-113-x-07mm",
        "name": "Total Staples (# x 11.3 x 0.7mm)",
        "description": "1000pcs staples\nsize:8mm/10mm/12mm width:0.7mm length:11.3mm\nPacked by color box",
        "category": "Accessories",
        "subcategory": "Staple Pins",
        "images": [
            {
                "name": "THT3981.jpg",
                "url": "/website%20products/Accessories/Staple%20Pins/Total%20Staples%20(%23%20x%2011.3%20x%200.7mm)/THT3981.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpvp1451---total-vibrator-poker-45mm",
        "name": "TPVP1451 - Total Vibrator Poker (45mm)",
        "description": "DIAMETER :45mm\nLENGTH :6m\nVIBRATING FREQUENCY :200Hz\nWEIGHT :18 Kg",
        "category": "Accessories",
        "subcategory": "Vibrator Pokers",
        "images": [
            {
                "name": "TPVP1451.jpg",
                "url": "/website%20products/Accessories/Vibrator%20Pokers/TPVP1451%20-%20Total%20Vibrator%20Poker%20(45mm)/TPVP1451.jpg"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "vbp1382---ingco-vibrator-poker-38mm",
        "name": "VBP1382 - Ingco Vibrator Poker (38mm)",
        "description": "Diameter:38mm\nHead length:465mm\nHEX type coupling\nVibrating frequency:200Hz\nVibrating ampitude:1.2mm\nFlexible hose length:6m\nSuitable for GVR-12,GVR-22\nPacked by carton box",
        "category": "Accessories",
        "subcategory": "Vibrator Pokers",
        "images": [
            {
                "name": "[VBP1382] VBP1382 VIBRATOR POKER 38MM.jfif",
                "url": "/website%20products/Accessories/Vibrator%20Pokers/VBP1382%20-%20Ingco%20Vibrator%20Poker%20(38mm)/%5BVBP1382%5D%20VBP1382%20VIBRATOR%20POKER%2038MM.jfif"
            }
        ],
        "price": "17500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "vbp1452---ingco-vibrator-poker-45mm",
        "name": "VBP1452 - Ingco Vibrator Poker (45mm)",
        "description": "Diameter:45mm\nHead length:475mm\nHEX type coupling\nVibrating frequency:200Hz\nVibrating ampitude:1.2mm\nFlexible hose length:6m\nSuitable for GVR-12,GVR-22\nPacked by carton box",
        "category": "Accessories",
        "subcategory": "Vibrator Pokers",
        "images": [
            {
                "name": "[VBP1452] VBP1452 VIBRATOR POKER 45MM.jfif",
                "url": "/website%20products/Accessories/Vibrator%20Pokers/VBP1452%20-%20Ingco%20Vibrator%20Poker%20(45mm)/%5BVBP1452%5D%20VBP1452%20VIBRATOR%20POKER%2045MM.jfif"
            }
        ],
        "price": "19000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608901168---bosch-expert-s470-combi-block-69-x-97-x-26-mm-fine",
        "name": "2608901168 - Bosch EXPERT S470 Combi Block 69 x 97 x 26 mm, Fine",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\nWidth mm :97\nGrade :Fine\nHeight mm :26\nLength mm :69\nProduct colour :yellow\nSpecification :69 x 97 x 26 mm, fine",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "o353109v82_2608901168-standard-portrait-unpackaged-front-nodim.webp",
                "url": "/website%20products/Consumables/2608901168%20-%20Bosch%20EXPERT%20S470%20Combi%20Block%2069%20x%2097%20x%2026%20mm%2C%20Fine/o353109v82_2608901168-standard-portrait-unpackaged-front-nodim.webp"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608901169---bosch-expert-s471-standard-sanding-block-26-x-69-x-97-mm-medium",
        "name": "2608901169 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Medium",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\nWidth mm :97\nGrade :Medium\nHeight mm :26\nLength mm :69\nProduct colour :Orange\nSpecification :69 x 97 x 26 mm, medium",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "2608901169-EXPERT-S471-Standard-Sanding-Block-en-KE-o353115v117-2608901169-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Consumables/2608901169%20-%20Bosch%20EXPERT%20S471%20Standard%20Sanding%20Block%2C%2026%20x%2069%20x%2097%20mm%2C%20Medium/2608901169-EXPERT-S471-Standard-Sanding-Block-en-KE-o353115v117-2608901169-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608901180---bosch-expert-s471-standard-sanding-block-26-x-69-x-97-mm-super-fine",
        "name": "2608901180 - Bosch EXPERT S471 Standard Sanding Block, 26 x 69 x 97 mm, Super Fine",
        "description": "Dimensions LxWxT [mm] :69 x 97 x 26\nWidth mm :97\nGrade :Superfine\nHeight mm :26\nLength mm :69\nProduct colour :Green\nSpecification :69 x 97 x 26 mm, super fine",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "2608901180-EXPERT-S471-Standard-Sanding-Block-en-KE-o353157v117-2608901180-bo-pro-u-f-1.jpg",
                "url": "/website%20products/Consumables/2608901180%20-%20Bosch%20EXPERT%20S471%20Standard%20Sanding%20Block%2C%2026%20x%2069%20x%2097%20mm%2C%20Super%20Fine/2608901180-EXPERT-S471-Standard-Sanding-Block-en-KE-o353157v117-2608901180-bo-pro-u-f-1.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "asmaco-pu-foam-gold",
        "name": "Asmaco PU Foam (Gold)",
        "description": "300% - Triple Expanding Foam.\nExcellent adhesion & filling capacity and high thermal & acoustical insulation valve.\nExcellent mounting capacity and stability.\nAdheres to almost all building materials with the exception of surfaces such as\npolyethylene, Teflon, silicone and surface contaminated with oils and greases, mold release agents, and similar materials.\nMould proof, waterproof, over paintable.\nQuick-drying, moisture curing\nClosed-cell structure, resistant to water absorption\ncured foam dries rigid and can be trimmed, shaped, and sanded.\nSuitable for sealing high volume low moment gaps.\nIt does not contain any propellant gases that are harmful to the ozone layer.",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "PUFOAMGOLDPREMIUM.webp",
                "url": "/website%20products/Consumables/Asmaco%20PU%20Foam%20(Gold)/PUFOAMGOLDPREMIUM.webp"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "asmaco-pu-foam-green",
        "name": "Asmaco PU Foam (Green)",
        "description": "300% - Triple Expanding Foam.\nExcellent adhesion & filling capacity and high thermal & acoustical insulation valve.\nExcellent mounting capacity and stability.\nAdheres to almost all building materials with the exception of surfaces such as\npolyethylene, Teflon, silicone and surface contaminated with oils and greases, mold release agents, and similar materials.\nMould proof, waterproof, over paintable.\nQuick-drying, moisture curing\nClosed-cell structure, resistant to water absorption\ncured foam dries rigid and can be trimmed, shaped, and sanded.\nSuitable for sealing high volume low moment gaps.\nIt does not contain any propellant gases that are harmful to the ozone layer.",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "AsmacoUniversalMultiFoam.webp",
                "url": "/website%20products/Consumables/Asmaco%20PU%20Foam%20(Green)/AsmacoUniversalMultiFoam.webp"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "asmaco-spray-paints",
        "name": "Asmaco Spray Paints",
        "description": "Quick dry Acrylic based spray paint for all Interior and Exterior Applications. The product has good hiding power, coverage and gives protection against corrosion\n\nFeatures :\nQuick-drying, smooth finish.\nPremium quality, high durable.\nIdeal for wood, metals, plastic, automotive and motorcycle, equipment etc.\nAvailable more than 55 colors including metallic, Fluorescent colors.\nInterior and exterior application.\nNon-fading, none yellowing, weather-resistant.\nHigh coverage ability without running or excessive thickness\nExcellent Finish\nAerosol formulation gives quick, even spray\nCFC Free\nAvailable in :\nWhite\nMatt White\nBlack\nMatt Black\nCream\nBrown\nMaroon\nRust\nLight Blue\nDark Blue\nLight Green\nDark Green\nPine Green\nOlive Green\nFresh Green\nJade Green\nRed\nSignal Red\nPeach Red\nRed Oxide\nLight Pink\nYellow\nCanary Yellow\nDeep Yellow\nOrange\nMedium Grey\nSilver Grey\nSilver\nMatt Silver\nGold\nClear (Transparent coat)",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "Spraypaintinterior.webp",
                "url": "/website%20products/Consumables/Asmaco%20Spray%20Paints/Spraypaintinterior.webp"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cable-ties",
        "name": "Cable Ties",
        "description": "Tronic Cable Ties\nColor : White or Black\nMaterial : Nylon 66\n\nAvailable Sizes :\n150 x 2.5mm\n150 x 3.6mm\n200 x 3.6mm\n250 x 3.6mm\n300 x 3.6mm\n200 x 4.8mm\n250 x 4.8mm\n300 x 4.8mm\n430 x 4.8mm\n200 x 7.6mm\n250 x 7.6mm\n300 x 7.6mm\n550 x 7.6mm\n750 x 9.0mm",
        "category": "Consumables",
        "subcategory": "Consumables",
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
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl390050b---deli-glue-gun-stick",
        "name": "DL390050B - Deli Glue Gun Stick",
        "description": "Material: EVA, ROHS tested\nDiameter: 11mm\nLength: 200mm\nSold Per Piece",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "DL390050B-i1_400x.webp",
                "url": "/website%20products/Consumables/DL390050B%20-%20Deli%20Glue%20Gun%20Stick/DL390050B-i1_400x.webp"
            }
        ],
        "price": "45",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl8080-1---deli-vacuum-cleaner-replacement-filter",
        "name": "DL8080-1 - Deli Vacuum Cleaner Replacement Filter",
        "description": "Efficient Dust Filtration – Captures dust and fine particles\nWashable & Reusable – Easy to clean for repeated use\nImproves Suction Performance – Helps maintain optimal airflow\nDurable Material – Long-lasting and reliable design\nEasy Installation – Simple replacement with no tools required\n\nMaintenance Practices for Vacuum Cleaner Filter\nClean Regularly: Wash the filter every 2–4 weeks to prevent dust buildup and maintain strong suction.\nDry Completely: Always air-dry the filter fully before reinstalling to avoid moisture damage.\nInspect for Wear: Check for tears or clogging that may reduce filtration efficiency.\nReplace on Time: Change the filter every 6–12 months for optimal performance.\nAvoid Chemicals: Clean using water only; detergents can damage the filter material.",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "13a.jpg",
                "url": "/website%20products/Consumables/DL8080-1%20-%20Deli%20Vacuum%20Cleaner%20Replacement%20Filter/13a.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "961a---gypsum-screws-35-x-15mm",
        "name": "961A - Gypsum Screws (3.5 x 15mm)",
        "description": "6 x 1/2\"\n200 Pcs/Box",
        "category": "Consumables",
        "subcategory": "Gypsum Screws",
        "images": [
            {
                "name": "{DE1D1808-3AA2-4750-AE5C-BCEC86CA2B11}.png",
                "url": "/website%20products/Consumables/Gypsum%20Screws/961A%20-%20Gypsum%20Screws%20(3.5%20x%2015mm)/%7BDE1D1808-3AA2-4750-AE5C-BCEC86CA2B11%7D.png"
            }
        ],
        "price": "155",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "961b---gypsum-screws-35-x-25mm",
        "name": "961B - Gypsum Screws (3.5 x 25mm)",
        "description": "6 x 1\"\n200 Pcs/Box",
        "category": "Consumables",
        "subcategory": "Gypsum Screws",
        "images": [
            {
                "name": "{DE1D1808-3AA2-4750-AE5C-BCEC86CA2B11}.png",
                "url": "/website%20products/Consumables/Gypsum%20Screws/961B%20-%20Gypsum%20Screws%20(3.5%20x%2025mm)/%7BDE1D1808-3AA2-4750-AE5C-BCEC86CA2B11%7D.png"
            }
        ],
        "price": "165",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "961c---gypsum-screws-35-x-32mm",
        "name": "961C - Gypsum Screws (3.5 x 32mm)",
        "description": "6 x 1 1/4\"\n200 Pcs/Box",
        "category": "Consumables",
        "subcategory": "Gypsum Screws",
        "images": [
            {
                "name": "{DE1D1808-3AA2-4750-AE5C-BCEC86CA2B11}.png",
                "url": "/website%20products/Consumables/Gypsum%20Screws/961C%20-%20Gypsum%20Screws%20(3.5%20x%2032mm)/%7BDE1D1808-3AA2-4750-AE5C-BCEC86CA2B11%7D.png"
            }
        ],
        "price": "220",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "961d---gypsum-screws-35-x-40mm",
        "name": "961D - Gypsum Screws (3.5 x 40mm)",
        "description": "6 x 1 1/2\"\n200 Pcs/Box",
        "category": "Consumables",
        "subcategory": "Gypsum Screws",
        "images": [
            {
                "name": "{DE1D1808-3AA2-4750-AE5C-BCEC86CA2B11}.png",
                "url": "/website%20products/Consumables/Gypsum%20Screws/961D%20-%20Gypsum%20Screws%20(3.5%20x%2040mm)/%7BDE1D1808-3AA2-4750-AE5C-BCEC86CA2B11%7D.png"
            }
        ],
        "price": "220",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "961e---gypsum-screws-35-x-50mm",
        "name": "961E - Gypsum Screws (3.5 x 50mm)",
        "description": "6 x 2\"\n200 Pcs/Box",
        "category": "Consumables",
        "subcategory": "Gypsum Screws",
        "images": [
            {
                "name": "{DE1D1808-3AA2-4750-AE5C-BCEC86CA2B11}.png",
                "url": "/website%20products/Consumables/Gypsum%20Screws/961E%20-%20Gypsum%20Screws%20(3.5%20x%2050mm)/%7BDE1D1808-3AA2-4750-AE5C-BCEC86CA2B11%7D.png"
            }
        ],
        "price": "275",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299---mdf-screws-35-x-16mm",
        "name": "2299 - MDF Screws (3.5 x 16mm)",
        "description": "MDF Screws\n3.5 x 16mm",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299%20-%20MDF%20Screws%20(3.5%20x%2016mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "115",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299a---mdf-screws-4-x-19mm",
        "name": "2299A - MDF Screws (4 x 19mm)",
        "description": "MDF Screws\n4.0 x 19mm (3/4\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299A%20-%20MDF%20Screws%20(4%20x%2019mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "140",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299b---mdf-screws-4-x-25mm",
        "name": "2299B - MDF Screws (4 x 25mm)",
        "description": "MDF Screws\n4.0 x 25mm (1\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299B%20-%20MDF%20Screws%20(4%20x%2025mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "190",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299c---mdf-screws-4-x-30mm",
        "name": "2299C - MDF Screws (4 x 30mm)",
        "description": "MDF Screws\n4.0 x 30mm (1 1/4\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299C%20-%20MDF%20Screws%20(4%20x%2030mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "190",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299d---mdf-screws-4-x-40mm",
        "name": "2299D - MDF Screws (4 x 40mm)",
        "description": "MDF Screws\n4.0 x 40mm (1 1/2\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299D%20-%20MDF%20Screws%20(4%20x%2040mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "230",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299e---mdf-screws-4-x-50mm",
        "name": "2299E - MDF Screws (4 x 50mm)",
        "description": "MDF Screws\n4.0 x 50mm (2\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299E%20-%20MDF%20Screws%20(4%20x%2050mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299f---mdf-screws-4-x-60mm",
        "name": "2299F - MDF Screws (4 x 60mm)",
        "description": "MDF Screws\n4.0 x 60mm (2 1/2\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299F%20-%20MDF%20Screws%20(4%20x%2060mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "320",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299h---mdf-screws-5-x-75mm",
        "name": "2299H - MDF Screws (5 x 75mm)",
        "description": "MDF Screws\n5.0 x 75mm (3\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299H%20-%20MDF%20Screws%20(5%20x%2075mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "615",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2299j---mdf-screws-5-x-100mm",
        "name": "2299J - MDF Screws (5 x 100mm)",
        "description": "MDF Screws\n5.0 x 100mm (4\")",
        "category": "Consumables",
        "subcategory": "MDF Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 125341.png",
                "url": "/website%20products/Consumables/MDF%20Screws/2299J%20-%20MDF%20Screws%20(5%20x%20100mm)/Screenshot%202026-04-16%20125341.png"
            }
        ],
        "price": "1200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262g---self-drilling-csk-star-screw-40-x-25mm",
        "name": "2262G - Self Drilling CSK Star Screw (4.0 x 25mm)",
        "description": "1\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screw CSK Star Screw",
        "images": [
            {
                "name": "Screenshot 2026-04-16 132450.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screw%20CSK%20Star%20Screw/2262G%20-%20Self%20Drilling%20CSK%20Star%20Screw%20(4.0%20x%2025mm)/Screenshot%202026-04-16%20132450.png"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262h---self-drilling-csk-star-screw-40-x-32mm",
        "name": "2262H - Self Drilling CSK Star Screw (4.0 x 32mm)",
        "description": "1 1/4\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screw CSK Star Screw",
        "images": [
            {
                "name": "Screenshot 2026-04-16 132450.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screw%20CSK%20Star%20Screw/2262H%20-%20Self%20Drilling%20CSK%20Star%20Screw%20(4.0%20x%2032mm)/Screenshot%202026-04-16%20132450.png"
            }
        ],
        "price": "330",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262i---self-drilling-csk-star-screw-40-x-38mm",
        "name": "2262I - Self Drilling CSK Star Screw (4.0 x 38mm)",
        "description": "1 1/2\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screw CSK Star Screw",
        "images": [
            {
                "name": "Screenshot 2026-04-16 132450.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screw%20CSK%20Star%20Screw/2262I%20-%20Self%20Drilling%20CSK%20Star%20Screw%20(4.0%20x%2038mm)/Screenshot%202026-04-16%20132450.png"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262j---self-drilling-csk-star-screw-40-x-50mm",
        "name": "2262J - Self Drilling CSK Star Screw (4.0 x 50mm)",
        "description": "2\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screw CSK Star Screw",
        "images": [
            {
                "name": "Screenshot 2026-04-16 132450.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screw%20CSK%20Star%20Screw/2262J%20-%20Self%20Drilling%20CSK%20Star%20Screw%20(4.0%20x%2050mm)/Screenshot%202026-04-16%20132450.png"
            }
        ],
        "price": "465",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262---55-x-20mm",
        "name": "2262 - 5.5 x 20mm",
        "description": "1/4\" x 3/4\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262%20-%205.5%20x%2020mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "290",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262a---55-x-25mm",
        "name": "2262A - 5.5 x 25mm",
        "description": "1/4\" x 1\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262A%20-%205.5%20x%2025mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262b---55-x-35mm",
        "name": "2262B - 5.5 x 35mm",
        "description": "1/4\" x 1 1/4\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262B%20-%205.5%20x%2035mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262c---55-x-40mm",
        "name": "2262C - 5.5 x 40mm",
        "description": "1/4\" x 1 1/2\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262C%20-%205.5%20x%2040mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262d---55-x-50mm",
        "name": "2262D - 5.5 x 50mm",
        "description": "1/4\" x 2\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262D%20-%205.5%20x%2050mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262e---55-x-63mm",
        "name": "2262E - 5.5 x 63mm",
        "description": "1/4\" x 2 1/2\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262E%20-%205.5%20x%2063mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2262f---55-x-75mm",
        "name": "2262F - 5.5 x 75mm",
        "description": "1/4\" x 3\"",
        "category": "Consumables",
        "subcategory": "Self Drilling Screws",
        "images": [
            {
                "name": "Screenshot 2026-04-16 131909.png",
                "url": "/website%20products/Consumables/Self%20Drilling%20Screws/2262F%20-%205.5%20x%2075mm/Screenshot%202026-04-16%20131909.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht3521---total-superglue",
        "name": "THT3521 - Total Superglue",
        "description": "One year guarantee\nMaterial:100% purity glue\n3 parts big cap\nColor: Clear\nHardening time：10 seconds\nApplication: Plastics,leather,metal,ceramic and wood\nPacked by blister card",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "THT3521.webp",
                "url": "/website%20products/Consumables/THT3521%20-%20Total%20Superglue/THT3521.webp"
            }
        ],
        "price": "50",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tq82086---tianqin-screw-extractor-set-6-pcs",
        "name": "TQ82086 - Tianqin Screw Extractor Set (6 Pcs)",
        "description": "N1: 3-6mm\nN2: 6-8mm\nN3: 8-11mm\nN4: 11-14mm\nN5: 14-18mm\nN6: 18-22mm",
        "category": "Consumables",
        "subcategory": "Consumables",
        "images": [
            {
                "name": "Tianqin_TQ82086_400x.webp",
                "url": "/website%20products/Consumables/TQ82086%20-%20Tianqin%20Screw%20Extractor%20Set%20(6%20Pcs)/Tianqin_TQ82086_400x.webp"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "57101---tolsen-adjustable-nozzle",
        "name": "57101 - Tolsen Adjustable Nozzle",
        "description": "• Adjustable from fine mist to powerful jet stream\n• Durable ABS body with TPR comfort grip\n• Packing: skin card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "ADJUSTABLE-NOZZLE-768x768.jpg.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57101%20-%20Tolsen%20Adjustable%20Nozzle/ADJUSTABLE-NOZZLE-768x768.jpg.webp"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "57102---tolsen-adjustable-nozzle-quick-connect",
        "name": "57102 - Tolsen Adjustable Nozzle (Quick Connect)",
        "description": "• Adjustable from fine mist to powerful jet stream\n• Durable ABS body with PP material\n• Global quick connect adapter\n• Packing: skin card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "ADJUSTABLE-NOZZLE-768x768.jpg (1).webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57102%20-%20Tolsen%20Adjustable%20Nozzle%20(Quick%20Connect)/ADJUSTABLE-NOZZLE-768x768.jpg%20(1).webp"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "57510---tolsen-6-inch-garden-rake",
        "name": "57510 - Tolsen 6 Inch Garden Rake",
        "description": "• 9 teeth\n• Size of each tooth: 6.0×1.0mm\n• Drop forged special tool steel\n• Black powder coated\n• Total length: 350mm\n• Thickness: 2.5mm\n• Two-component plastic handle\n• Packing: hang tag",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "GARDEN-RAKE-768x768.jpg.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/57510%20-%20Tolsen%206%20Inch%20Garden%20Rake/GARDEN-RAKE-768x768.jpg.webp"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl2779---deli-loppers-265",
        "name": "EDL2779 - Deli Loppers (26.5'')",
        "description": "Type: 26.5\" / 690mm Lopper/Gardening Shears\nMaterial: 55 Carbon Steel (55C)\nCutting Capacity: Up to 15mm-30mm\nBlade Treatment: Heat-treated and Teflon coated\nHandle: PP anti-slip\nColor: Yellow/Black",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "1827701079668641.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL2779%20-%20Deli%20Loppers%20(26.5'')/1827701079668641.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl580321---deli-loppers-305",
        "name": "EDL580321 - Deli Loppers (30.5'')",
        "description": "Type: Hedge Shear / Bypass Lopper\nTotal Length: 30.5 inches (approx. 775 mm)\nMaterial: 55# Carbon Steel Blade (Heat-treated with Teflon coating)\nMaximum Cutting Capacity: 30 mm diameter\nHandle Material: PP+TPR (Plastic/Rubber) with ergonomic grip\nFeatures: Wave-shaped blades, integrated locking mechanism",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "4a-4-600x600.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL580321%20-%20Deli%20Loppers%20(30.5'')/4a-4-600x600.jpg"
            }
        ],
        "price": "2250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl580803---deli-gardening-tool-set-3-pcs",
        "name": "EDL580803 - Deli Gardening Tool Set (3 Pcs)",
        "description": "Wide shovel for shoveling and potting\nThe five-tooth harrow is used for loosening soil, leveling soil for flower pots and removing roots\nDual-purpose hoe for digging pits and weeding",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "edl580803-3-piece-gardening-tool-set.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL580803%20-%20Deli%20Gardening%20Tool%20Set%20(3%20Pcs)/edl580803-3-piece-gardening-tool-set.webp"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl58110b---deli-mini-hose-reel-set",
        "name": "EDL58110B - Deli Mini Hose Reel Set",
        "description": "10m\nMaterial:PP\nPortable and convenient,\neasily carried with one hand\nAccessories:1 pcs hose reel,1\npcs faucet adapter ,1 pcs\nshower head spray gun,2 pcs\nquick couplings,1 pcs 10m\nhose\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "9203740.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/EDL58110B%20-%20Deli%20Mini%20Hose%20Reel%20Set/9203740.png"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc31264---ingco-gasoline-grass-trimmer-and-bush-cutter",
        "name": "GBC31264 - Ingco Gasoline Grass Trimmer and Bush Cutter",
        "description": "Engine displacement: 30.5cc\nRated power: 0.81kW\nMax speed: 6000rpm\nMating engine: 1E36FB\nFuel tank capacity: 0.8L\nPowerful 2-stroke motor\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GBC31264] GBC31264 GASOLINE GRASS TRIMMER AND BUSH CUTTER 30.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC31264%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter/%5BGBC31264%5D%20GBC31264%20GASOLINE%20GRASS%20TRIMMER%20AND%20BUSH%20CUTTER%2030.jfif"
            }
        ],
        "price": "26000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc45441---ingco-gasoline-grass-trimmer-and-bush-cutter-43cc",
        "name": "GBC45441 - Ingco Gasoline Grass Trimmer and Bush Cutter (43cc)",
        "description": "Displacement:43cc\nRated power:1.25Kw(2HP)\nMax speed：9000rpm\nMax cutting path:460mm\nSpool liner:2.5mmx4m\nBlade diameter:230mm(3teeth)\nFuel tank capacity:1200ml\nPowerful 2-stroke motor\nWith 2 function:trimmer and cutter\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GBC45441] GBC45441 GASOLINE GRASS TRIMMER & BUSH CUTTER 43CC.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC45441%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(43cc)/%5BGBC45441%5D%20GBC45441%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2043CC.jfif"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc53144141---ingco-gasoline-grass-trimmer-and-bush-cutter-31cc",
        "name": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "description": "Displacement:31cc\nRated power:0.7Kw(1.1HP)\nMax speed：9300rpm\nMax cutting path:480mm\nSpool liner:2.4mmx4m\nBlade diameter:255mm(3teeth)\nFuel tank capacity:700ml\nPowerful 4-stroke motor\nWith 2 function:trimmer and cutter\nAir cooled engine,single cylinder\nWith line spool ALS25405\nWith bush cutter blade ABCB05\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GBC53144141] GBC53144141 GASOLINE GRASS TRIMMER & BUSH CUTTER 31CC.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC53144141%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(31cc)/%5BGBC53144141%5D%20GBC53144141%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2031CC.png"
            }
        ],
        "price": "34000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc5524421---ingco-gasoline-grass-trimmer-and-bush-cutter-52cc",
        "name": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "description": "Displacement:52cc\nRated power:1.4Kw(2.2HP)\nMax speed:8000rpm\nMax cutting path:420mm\nSpool liner:2.4mmx4m\nBlade diameter:255mm(3teeth)\nFuel tank capacity:1200ml\nPowerful 2-stroke motor\nWith 2 function:trimmer and cutter\nAir cooled engine,single cylinder\nWith line spool ALS25405\nWith bush cutter blade ABCB05\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GBC5524421] GBC5524421 GASOLINE GRASS TRIMMER & BUSH CUTTER 52CC.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GBC5524421%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(52cc)/%5BGBC5524421%5D%20GBC5524421%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2052CC.png"
            }
        ],
        "price": "28850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gc6101---ingco-gasoline-cultivator",
        "name": "GC6101 - Ingco Gasoline Cultivator",
        "description": "Petrol Engine\nEngine power:4.8kW(6.5HP)\nTilling Scope(mm):900\nDriving model:Belt\nTilling depth(mm):150-300\nGear shifting:-1,0,2,1\nMax. torque(N.m/rpm):11/2500\nTransmission oil capacity(L):0.95\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GC6101] GC6101 GASOLINE CULTIVATOR 6.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GC6101%20-%20Ingco%20Gasoline%20Cultivator/%5BGC6101%5D%20GC6101%20GASOLINE%20CULTIVATOR%206.jfif"
            }
        ],
        "price": "108000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcs5602411---ingco-gasoline-chainsaw-62cc",
        "name": "GCS5602411 - Ingco Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:2.4kW\nEngine idle speed:3100±300rpm\nMax. cutting diameter:605mm(24\")\nFuel tank capacity:550ml\nOil tank capacity:260ml\nPowerful 2-stroke motor\n24\" chain saw\nWith saw chain AGSC52401\nWith chain saw bar AGSB52401\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GCS5602411] GCS5602411 GASOLINE CHAIN SAW 62CC TOP 50.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GCS5602411%20-%20Ingco%20Gasoline%20Chainsaw%20(62cc)/%5BGCS5602411%5D%20GCS5602411%20GASOLINE%20CHAIN%20SAW%2062CC%20TOP%2050.jfif"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcs62241---ingco-gasoline-chainsaw-62cc",
        "name": "GCS62241 - Ingco Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:3.2Kw\nIdling speed:3200rpm\nMax.cutting diameter:605mm(24\")\nFuel tank capacity:670ml\nOil tank capacity:350ml\nPowerful 2-stroke motor\nOregon brand chain\nWalbro carburetor\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GCS62241] GCS62241 GASOLINE CHAIN SAW 62CC.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GCS62241%20-%20Ingco%20Gasoline%20Chainsaw%20(62cc)/%5BGCS62241%5D%20GCS62241%20GASOLINE%20CHAIN%20SAW%2062CC.jfif"
            }
        ],
        "price": "45000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ght5265511---ingco-gasoline-hedge-trimmer",
        "name": "GHT5265511 - Ingco Gasoline Hedge Trimmer",
        "description": "Displacement:25.4cc\nRated power:0.75Kw(1HP)\nNo-load/rated speed:10000/min\nCutting diameter: 26mm-28mm\nFuel inlet pipe:double-deck PUR pipe\nFuel tank capacity:550ml\nPowerful 2-stroke motor\nMax cutting diameter:550mm\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GHT5265511] GHT5265511 GASOLINE GRASS TRIMMER AND BUSH CUTTER.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GHT5265511%20-%20Ingco%20Gasoline%20Hedge%20Trimmer/%5BGHT5265511%5D%20GHT5265511%20GASOLINE%20GRASS%20TRIMMER%20AND%20BUSH%20CUTTER.jfif"
            }
        ],
        "price": "34650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm141181---ingco-gasoline-lawnmower-141cc-4hp",
        "name": "GLM141181 - Ingco Gasoline Lawnmower (141cc) (4HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:141cc\nRated power:3.0Kw(4HP)\nRated speed: 2600rpm\nDrive type:Hand push\n4 stroke engine\nCutting height:25-75mm(7 positions)\nCutting width:460mm(18”)\nCatchervolume:60L\nDeck material:steel\nWheel size:6\"/8\"\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GLM141181] GLM141181 GASOLINE LAWN MOWER 141CC-4HP.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GLM141181%20-%20Ingco%20Gasoline%20Lawnmower%20(141cc)%20(4HP)/%5BGLM141181%5D%20GLM141181%20GASOLINE%20LAWN%20MOWER%20141CC-4HP.jfif"
            }
        ],
        "price": "71000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm196201---ingco-gasoline-lawnmower-48hp-196cc",
        "name": "GLM196201 - Ingco Gasoline Lawnmower (4.8HP) (196cc)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:196cc\n4 stroke engine\nRated power:3.5Kw(4.8HP)\nRated speed: 3600rpm\n3 function:Catcher,side discharge, mulching,rear discharge\nCutting height:28-80mm(7 positions)\nCutting width:510mm(20”)\nCatchervolume:60L\nDeck material:steel\nWheel size:8\"/10\"\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GLM196201] GLM196201 GASOLINE LAWN MOWER 196CC-4.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GLM196201%20-%20Ingco%20Gasoline%20Lawnmower%20(4.8HP)%20(196cc)/%5BGLM196201%5D%20GLM196201%20GASOLINE%20LAWN%20MOWER%20196CC-4.jfif"
            }
        ],
        "price": "81000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp201h---ingco-gasoline-high-pressure-water-pump-2",
        "name": "GWP201H - Ingco Gasoline High Pressure Water Pump (2'')",
        "description": "Gasoline high pressure water pump with double impeller\nSuction port diameter:50mm,2\"\nDischarge port diameter:50mm,2\"/40mm,1.5\"/40mm,1.5\"\nMax.flow:300L/min\nMax.head lift:75/80/80m\nMax.suction head:7m\n7.5HP gasoline engine\nDisplacement:212cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GWP201H] GWP201H GASOLINE HIGH PRESSURE WATER PUMP 2_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GWP201H%20-%20Ingco%20Gasoline%20High%20Pressure%20Water%20Pump%20(2'')/%5BGWP201H%5D%20GWP201H%20GASOLINE%20HIGH%20PRESSURE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp202---ingco-gasoline-water-pump-2",
        "name": "GWP202 - Ingco Gasoline Water Pump (2'')",
        "description": "Suction&amp;Discharge port diameter:50mm,2\"\nMax.flow:550L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GWP202] GWP202 GASOLINE WATER PUMP 2_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GWP202%20-%20Ingco%20Gasoline%20Water%20Pump%20(2'')/%5BGWP202%5D%20GWP202%20GASOLINE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "25000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp302---ingco-gasoline-water-pump-3",
        "name": "GWP302 - Ingco Gasoline Water Pump (3'')",
        "description": "Suction&amp;Discharge port diameter:80mm,3\"\nMax.flow:1000L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[GWP302] GWP302 GASOLINE WATER PUMP 3_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/GWP302%20-%20Ingco%20Gasoline%20Water%20Pump%20(3'')/%5BGWP302%5D%20GWP302%20GASOLINE%20WATER%20PUMP%203_.jfif"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hlt78033---ingco-garden-shear-set-3-pcs",
        "name": "HLT78033 - Ingco Garden Shear Set (3 Pcs)",
        "description": "3pcs garden shears set\nInclude:\n1pcs 200MM/8'' Pruning Shear\n1pcs 550mm/22'' Hedge shear\n1pcs 690mm/27'' Lopper\nHeat treatment blade\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HLT78033] HLT78033 3 PCS GARDEN SHEAR SET.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HLT78033%20-%20Ingco%20Garden%20Shear%20Set%20(3%20Pcs)/%5BHLT78033%5D%20HLT78033%203%20PCS%20GARDEN%20SHEAR%20SET.jfif"
            }
        ],
        "price": "3290",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hlt93301---ingco-garden-shear-set-3-pcs-industrial",
        "name": "HLT93301 - Ingco Garden Shear Set (3 Pcs) (Industrial)",
        "description": "3pcs garden shears set\nInclude:\n1pcs 205mm/8'' Pruning Shear(HPS0308)\n1pcs 640-860mm/25\"-34\" Lopper(HLTS7608)\n1pcs 720-880mm/28''-35\" Hedge shear(HHS6306)\nHead material: SK5\nHeat treatment blade\nBlade painted teflon\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HLT93301] HLT93301 3 PCS GARDEN SHEAR SET.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HLT93301%20-%20Ingco%20Garden%20Shear%20Set%20(3%20Pcs)%20(Industrial)/%5BHLT93301%5D%20HLT93301%203%20PCS%20GARDEN%20SHEAR%20SET.jfif"
            }
        ],
        "price": "5750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hos3422---ingco-oscillating-garden-sprinkler",
        "name": "HOS3422 - Ingco Oscillating Garden Sprinkler",
        "description": "17 Holes Oscillating Sprinkler\nbrass jet nozzle\nWater up to 2202 sqft\nPowerful gear train mechanism\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HOS3422] HOS3422 OSCILLATING SPRINKLER.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HOS3422%20-%20Ingco%20Oscillating%20Garden%20Sprinkler/%5BHOS3422%5D%20HOS3422%20OSCILLATING%20SPRINKLER.jfif"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hphm0201---ingco-05-inch-plastic-hose-connector-mender",
        "name": "HPHM0201 - Ingco 0.5 Inch Plastic Hose Connector (Mender)",
        "description": "1/2’’ plastic Hose Mender\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPHM0201] HPHM0201 PLASTIC HOSE MENDER.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPHM0201%20-%20Ingco%200.5%20Inch%20Plastic%20Hose%20Connector%20(Mender)/%5BHPHM0201%5D%20HPHM0201%20PLASTIC%20HOSE%20MENDER.jfif"
            }
        ],
        "price": "120",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps0109---ingco-pruning-shears-8",
        "name": "HPS0109 - Ingco Pruning Shears (8'')",
        "description": "Aluminium body pruning shear blade\nHandle non slip treatment\nMax cutting diameter 12mm\nSize:8\"(200mm)\nPacked by Blister card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS0109] HPS0109 PRUNING SHEARS 8_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS0109%20-%20Ingco%20Pruning%20Shears%20(8'')/%5BHPS0109%5D%20HPS0109%20PRUNING%20SHEARS%208_.jfif"
            }
        ],
        "price": "785",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps0308---ingco-8-inch-205mm-pruning-shear",
        "name": "HPS0308 - Ingco 8 Inch (205mm) Pruning Shear",
        "description": "With heat treatment Aluminium handle with soft TPR grip\nSize:8\"(205mm)\nWith hight quality blade\nPacked by Blister card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS0308] HPS0308 PRUNING SHEARS 8_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS0308%20-%20Ingco%208%20Inch%20(205mm)%20Pruning%20Shear/%5BHPS0308%5D%20HPS0308%20PRUNING%20SHEARS%208_.jfif"
            }
        ],
        "price": "1100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps0402---ingco-plastic-pulsating-sprinkler",
        "name": "HPS0402 - Ingco Plastic Pulsating Sprinkler",
        "description": "Same as STANLEY quality level.\nPlastic pulsating sprinkler 2-Way Metal spike.\nHead Full Or Part Circle.\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS0402] HPS0402 PLASTIC PULSATING SPRINKLER.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS0402%20-%20Ingco%20Plastic%20Pulsating%20Sprinkler/%5BHPS0402%5D%20HPS0402%20PLASTIC%20PULSATING%20SPRINKLER.jfif"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps0601---ingco-pruning-shears-85",
        "name": "HPS0601 - Ingco Pruning Shears (8.5'')",
        "description": "Size:8.5\"(215mm)\nEntire metal frame,more durable\nHigh-Quality Garden Pruning Shear\n55# carbon steel blade\nHeat treatment Telfon coating\nPP handle coverd TPR grip\nPacked by blister card",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS0601] HPS0601 PRUNING SHEARS 8.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS0601%20-%20Ingco%20Pruning%20Shears%20(8.5'')/%5BHPS0601%5D%20HPS0601%20PRUNING%20SHEARS%208.png"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps13601---ingco-plastic-auto-gear-sprinkler-075-inch",
        "name": "HPS13601 - Ingco Plastic Auto Gear Sprinkler (0.75 Inch)",
        "description": "Plastic Auto Gear sprinkler head\n3/4\" tool adaptor\n3 Pin plastic spike\nWith 360° rotary function\nDimension：38*17.4*6.4cm\nMeterial Breakdown: ABS+PP\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS13601] HPS13601 Plastic Auto Gear sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS13601%20-%20Ingco%20Plastic%20Auto%20Gear%20Sprinkler%20(0.75%20Inch)/%5BHPS13601%5D%20HPS13601%20Plastic%20Auto%20Gear%20sprinkler.png"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps23602---ingco-plastic-3-arm-rotary-sprinkler",
        "name": "HPS23602 - Ingco Plastic 3 Arm Rotary Sprinkler",
        "description": "Plastic Base With Plastic 3 Arm Rotatory Sprinkler\nWith 3/4\" tool adaptor\nMeterial Breakdown: ABS and PP\nDimension：16.5*14*8cm\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS23602] HPS23602 Plastic 3 Arm Rotatory Sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS23602%20-%20Ingco%20Plastic%203%20Arm%20Rotary%20Sprinkler/%5BHPS23602%5D%20HPS23602%20Plastic%203%20Arm%20Rotatory%20Sprinkler.png"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps3008---ingco-pruning-saw-12",
        "name": "HPS3008 - Ingco Pruning Saw (12'')",
        "description": "Size:12\"/300mm\nMaterial：Taiwan SK5\n7TPI,heat treatment teeth\nTriple teeth(Precision ground teeth 3 edges)\nFast cut and long life\nPacked by Color sleeve",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS3008] HPS3008 PRUNING SAW 12_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS3008%20-%20Ingco%20Pruning%20Saw%20(12'')/%5BHPS3008%5D%20HPS3008%20PRUNING%20SAW%2012_.jfif"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps33028c---ingco-pruning-saw-13",
        "name": "HPS33028C - Ingco Pruning Saw (13'')",
        "description": "Size:13\"/330mm\nMaterial：65Mn\n6TPI\nTriple teeth(Precision ground teeth 3 edges)\nFast cut\nPacked by color sleeve",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS33028C] HPS33028C PRUNING SAW 13_.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS33028C%20-%20Ingco%20Pruning%20Saw%20(13'')/%5BHPS33028C%5D%20HPS33028C%20PRUNING%20SAW%2013_.jfif"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hps33061---ingco-5-in-1-plastic-turret-sprinkler",
        "name": "HPS33061 - Ingco 5 in 1 Plastic Turret Sprinkler",
        "description": "Plastic 5-In-1 Turret Sprinkler\n3/4\" tool adaptor\nMaterial:ABS\nNet weight:160g\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[HPS33061] HPS33061 Plastic Turret sprinkler.png",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/HPS33061%20-%20Ingco%205%20in%201%20Plastic%20Turret%20Sprinkler/%5BHPS33061%5D%20HPS33061%20Plastic%20Turret%20sprinkler.png"
            }
        ],
        "price": "715",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "husqavarna-272-xp",
        "name": "Husqavarna 272 XP",
        "description": "High-performance chainsaw for home and professional use\n\nPowerful, fuel-efficient engine\nErgonomic anti-vibration design for comfortable handling\nAutomatic chain lubrication for smooth cutting\nLightweight models for garden/home tasks; heavy-duty models for forestry\nDurable and reliable for long-term use",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "qd-157812.webp",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/Husqavarna%20272%20XP/qd-157812.webp"
            }
        ],
        "price": "87500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "lm383---ingco-electric-lawnmower",
        "name": "LM383 - Ingco Electric Lawnmower",
        "description": "Voltage:220V-240~50Hz\nInput Power:1600W\nInduction motor\nNo-load speed:2800rpm\nCutting width:380mm\nCutting height:\n28/38/48/58/68mm\nGrass box size:50L\nWith 0.35m power cord\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[LM383] LM383 ELECTRIC LAWN MOWER 1600W.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/LM383%20-%20Ingco%20Electric%20Lawnmower/%5BLM383%5D%20LM383%20ELECTRIC%20LAWN%20MOWER%201600W.jfif"
            }
        ],
        "price": "37000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "lmli20186---ingco-cordless-lawnmower-40v",
        "name": "LMLI20186 - Ingco Cordless Lawnmower (40V)",
        "description": "Brushless motor\nVoltage: 40V(20V+20V)\nNo-load speed: 2800rpm\nMaximum cutting diameter: 460mm\nCutting height range: 30-80mm\nCutting hegith positions: 8 gears\nBag capacity: 60L\n3 functions: bagging/mulching/side-discharge\nInclude:\n1 Pcs grass bag\n1 Pcs mulching plug\n1 Pcs side-discharge chute\n2 Pcs 5.0Ah battery pack(FBLI2003)\n1 Pcs dual-port charger(FCLI2034E)\nCharge volts:220-240V~50/60Hz\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "[LMLI20186] LMLI20186 40V LI-ION CORDLESS LAWN MOWER.jfif",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/LMLI20186%20-%20Ingco%20Cordless%20Lawnmower%20(40V)/%5BLMLI20186%5D%20LMLI20186%2040V%20LI-ION%20CORDLESS%20LAWN%20MOWER.jfif"
            }
        ],
        "price": "102000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg5602411---total-gasoline-chainsaw-62cc",
        "name": "TG5602411 - Total Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:2.4Kw\nEngine idle speed:3100±300rpm\nMax. cutting diameter:605mm(24\"\")\nOregon brand chain\nFuel tank capacity:550ml\nOil tank capacity:260ml\nPowerful 2-stroke motor\n24\" chain saw\nPacked by color box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TG5602411.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TG5602411%20-%20Total%20Gasoline%20Chainsaw%20(62cc)/TG5602411.jpg"
            }
        ],
        "price": "40000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgc5001---total-gasoline-tiller-196cc",
        "name": "TGC5001 - Total Gasoline Tiller (196cc)",
        "description": "Petrol Engine\nEngine power:4.8kW(6.5HP)\nTilling Scope(mm):900\nTilling depth(mm):150-300\nGear shifting:-1,2,0,1\nDriving model:Belt\nMax. torque(N.m/rpm):11/2500\nTransmission oil capacity(L):0.95\nPacked by wooden case",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TGC5001.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGC5001%20-%20Total%20Gasoline%20Tiller%20(196cc)/TGC5001.jpg"
            }
        ],
        "price": "82500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgt141181---total-gasoline-lawnmower-141cc-4-hp",
        "name": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:141cc\nRated power:3.0Kw(4HP)\nRated speed: 2600rpm\nDrive type:Hand push\n4 stroke engine\nCutting height:25-75mm(7 positions)\nCutting width:460mm(18”)\nCatchervolume:60L\nDeck material:steel\nWheel size:6\" / 8\"\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TGT141181.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGT141181%20-%20Total%20Gasoline%20Lawnmower%20(141cc)%20(4%20HP)/TGT141181.jpg"
            }
        ],
        "price": "47500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgt196201---total-gasoline-lawnmower-48hp",
        "name": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:196cc\n4 stroke engine\nRated power:3.5Kw(4.8HP)\nRated speed: 3600rpm\n3 function:Catcher,side discharge, mulching,rear discharge\nCutting height:28-80mm(7 positions)\nCutting width:510mm(20”)\nCatchervolume:60L\nDeck material:steel\nWheel size:8\"\"/10\"\"\nPacked by carton box",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TGT196201.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TGT196201%20-%20Total%20Gasoline%20Lawnmower%20(4.8HP)/TGT196201.jpg"
            }
        ],
        "price": "70000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1516301---total-55cm-hedge-shears",
        "name": "THT1516301 - Total 55cm Hedge Shears",
        "description": "Head material: SK5\nLength:22-7/8\"\"(557mm)\nWavy blade for more efficiency when cutting large areas\nHeat treatment blade\nBlade painted teflon\nPacked by paper hanger",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "THT1516301.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/THT1516301%20-%20Total%2055cm%20Hedge%20Shears/THT1516301.jpg"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3202---total-gasoline-water-pump-2",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :28m\nSUCTION LIFT :8m\nDELIVERY VOLUME :550 Lit / min\nDIAMETER :2\" X 2\"\nFUEL TANK :3.6 Lit\nWEIGHT :21 Kg",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "price": "28500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3302---total-gasoline-water-pump-3",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :32m\nSUCTION LIFT :8m\nDELIVERY VOLUME :1000 Lit / min\nDIAMETER :3\" X 3\"\nFUEL TANK :3.6 Lit\nWEIGHT :25 Kg",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "price": "31500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp5434421---total-2hp-42-cm-petrol-brushcutter-bush-cutter",
        "name": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "description": "No-load speed :8000/min\nBlade diameter :255mm (3 teeth)\nCutting capacity :420mm\nEngine :2-stroke\nDisplacement :42.7cc\nFuel tank :1200ml (Mix ratio: 40:1)",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "TP5434421.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/TP5434421%20-%20Total%202HP%20(42%20cm)%20Petrol%20Brushcutter%20(Bush%20Cutter)/TP5434421.jpg"
            }
        ],
        "price": "21000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-84892---yato-gasoline-chainsaw-52cc",
        "name": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "description": "Brand:YATO\nSymbol:YT-84892\nProduct Name:Gasoline Chainsaw 52CC\nEngine Displacement :52cc\nPower:2.1kw\nFuel Tank:0.50l\nOil Tank:0.24l\nChinese Chain & Bar:20\"\nEasy Start",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "YT-84892.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/YT-84892%20-%20Yato%20Gasoline%20Chainsaw%20(52cc)/YT-84892.jpg"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-85255---yato-gasoline-lawnmower-3-in-1",
        "name": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "description": "Symbol:YT-85255\nProduct Name:3 In 1 Gasoline Lawn Mower 20 Inch\nDISPLACEMENT:196CC\nENGINE MODEL:ZONGSHEN XP200\nPOWER MAX:3.5KW/2800RPM\nDRIVE:HAND PUSH\nCUTTING HEIGHTS:25-70MM WITH 7 GRADES\nCUTTING WIDTH:510MM\nDECK MATERIAL:STEEL\nFRONT/REAR WHEEL:8/10INCH,PP+PVC WITH BALL BEARING\nFABRIC GRASS CATCHER + HALF PLASTIC WITH LOGO PRINT\nADJUSTMENT SYSTEM: CENTRAL ADJUSTMENT\nHEIGHT ADJUSTMENT HANDLE WITH SOFT GRIP  FRONT PLASTIC COVER\nSIDE DISCHARGE, MULCHING, REAR CATCHER\nNOISE LEVEL: 98DB(A)\n\n- Versatile Functionality: Offers three mowing options – cutting, mulching, and bagging – to suit different lawn care needs.\n- Powerful Engine: Equipped with a robust gasoline engine for efficient and effective grass cutting, suitable for various lawn sizes.\n- 20-Inch Cutting Deck: The wide cutting deck enables quicker mowing by covering a larger area with each pass.\n- Adjustable Cutting Heights: Allows users to easily modify the cutting height for a customized lawn finish.\n- Durable Construction: Built with sturdy materials to withstand regular use and provide long-lasting performance.\n- Easy Maneuverability: Designed for comfortable handling and maneuvering, even on uneven terrains.\n- User-Friendly Features: Comes with simple controls and features that make it accessible for users of all experience levels.",
        "category": "Gardening Equpiment and Gardening Tools",
        "subcategory": "Gardening Equpiment and Gardening Tools",
        "images": [
            {
                "name": "YT-85255.jpg",
                "url": "/website%20products/Gardening%20Equpiment%20and%20Gardening%20Tools/YT-85255%20-%20Yato%20Gasoline%20Lawnmower%20(3%20in%201)/YT-85255.jpg"
            }
        ],
        "price": "56500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "csgx45---uyus-gasoline-chainsaw-45cc",
        "name": "CSGX45 - Uyus Gasoline Chainsaw (45cc)",
        "description": "Engine: 45cc, 2-stroke gasoline engine.\nPower Output: 1.8 kW.\nGuide Bar Length: 18 inches / 45 cm.\nUsage: Ideal for professional wood cutting, trimming, and logging.\nDesign: Compact, durable, and lightweight for easier handling.",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "CSGX45_2_400x.webp",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/CSGX45%20-%20Uyus%20Gasoline%20Chainsaw%20(45cc)/CSGX45_2_400x.webp"
            }
        ],
        "price": "21000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc31264---ingco-gasoline-grass-trimmer-and-bush-cutter",
        "name": "GBC31264 - Ingco Gasoline Grass Trimmer and Bush Cutter",
        "description": "Engine displacement: 30.5cc\nRated power: 0.81kW\nMax speed: 6000rpm\nMating engine: 1E36FB\nFuel tank capacity: 0.8L\nPowerful 2-stroke motor\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GBC31264] GBC31264 GASOLINE GRASS TRIMMER AND BUSH CUTTER 30.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC31264%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter/%5BGBC31264%5D%20GBC31264%20GASOLINE%20GRASS%20TRIMMER%20AND%20BUSH%20CUTTER%2030.jfif"
            }
        ],
        "price": "26000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc45441---ingco-gasoline-grass-trimmer-and-bush-cutter-43cc",
        "name": "GBC45441 - Ingco Gasoline Grass Trimmer and Bush Cutter (43cc)",
        "description": "Displacement:43cc\nRated power:1.25Kw(2HP)\nMax speed：9000rpm\nMax cutting path:460mm\nSpool liner:2.5mmx4m\nBlade diameter:230mm(3teeth)\nFuel tank capacity:1200ml\nPowerful 2-stroke motor\nWith 2 function:trimmer and cutter\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GBC45441] GBC45441 GASOLINE GRASS TRIMMER & BUSH CUTTER 43CC.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC45441%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(43cc)/%5BGBC45441%5D%20GBC45441%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2043CC.jfif"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc53144141---ingco-gasoline-grass-trimmer-and-bush-cutter-31cc",
        "name": "GBC53144141 - Ingco Gasoline Grass Trimmer and Bush Cutter (31cc)",
        "description": "Displacement:31cc\nRated power:0.7Kw(1.1HP)\nMax speed：9300rpm\nMax cutting path:480mm\nSpool liner:2.4mmx4m\nBlade diameter:255mm(3teeth)\nFuel tank capacity:700ml\nPowerful 4-stroke motor\nWith 2 function:trimmer and cutter\nAir cooled engine,single cylinder\nWith line spool ALS25405\nWith bush cutter blade ABCB05\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GBC53144141] GBC53144141 GASOLINE GRASS TRIMMER & BUSH CUTTER 31CC.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC53144141%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(31cc)/%5BGBC53144141%5D%20GBC53144141%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2031CC.png"
            }
        ],
        "price": "34000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbc5524421---ingco-gasoline-grass-trimmer-and-bush-cutter-52cc",
        "name": "GBC5524421 - Ingco Gasoline Grass Trimmer and Bush Cutter (52cc)",
        "description": "Displacement:52cc\nRated power:1.4Kw(2.2HP)\nMax speed:8000rpm\nMax cutting path:420mm\nSpool liner:2.4mmx4m\nBlade diameter:255mm(3teeth)\nFuel tank capacity:1200ml\nPowerful 2-stroke motor\nWith 2 function:trimmer and cutter\nAir cooled engine,single cylinder\nWith line spool ALS25405\nWith bush cutter blade ABCB05\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GBC5524421] GBC5524421 GASOLINE GRASS TRIMMER & BUSH CUTTER 52CC.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GBC5524421%20-%20Ingco%20Gasoline%20Grass%20Trimmer%20and%20Bush%20Cutter%20(52cc)/%5BGBC5524421%5D%20GBC5524421%20GASOLINE%20GRASS%20TRIMMER%20%26%20BUSH%20CUTTER%2052CC.png"
            }
        ],
        "price": "28850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gc6101---ingco-gasoline-cultivator",
        "name": "GC6101 - Ingco Gasoline Cultivator",
        "description": "Petrol Engine\nEngine power:4.8kW(6.5HP)\nTilling Scope(mm):900\nDriving model:Belt\nTilling depth(mm):150-300\nGear shifting:-1,0,2,1\nMax. torque(N.m/rpm):11/2500\nTransmission oil capacity(L):0.95\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GC6101] GC6101 GASOLINE CULTIVATOR 6.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GC6101%20-%20Ingco%20Gasoline%20Cultivator/%5BGC6101%5D%20GC6101%20GASOLINE%20CULTIVATOR%206.jfif"
            }
        ],
        "price": "108000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcp060-2---ingco-gasoline-plate-compactor-60kgs",
        "name": "GCP060-2 - Ingco Gasoline Plate Compactor (60Kgs)",
        "description": "Gasoline engine\nEngine power:4.8kW(6.5HP)\nWeight:60kg\nFrequency:5600VPM\nCentrifugal force:10.5kN\nCompaction depth:20cm\nTravel speed:40cm/s\nEfficiency:450㎡/Hr\nPlate size:50x36cm\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GCP060-2] GCP060-2 PLATE COMPACTOR 60KGS.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GCP060-2%20-%20Ingco%20Gasoline%20Plate%20Compactor%20(60Kgs)/%5BGCP060-2%5D%20GCP060-2%20PLATE%20COMPACTOR%2060KGS.jfif"
            }
        ],
        "price": "88000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcp160-2---ingco-reversible-plate-compactor-9hp",
        "name": "GCP160-2 - Ingco Reversible Plate Compactor (9HP)",
        "description": "Gasoline engine\nEngine power:6.0kW(9.0HP)\nWeight:160kg\nFrequency:4000VPM\nCentrifugal force:30.5kN\nCompaction depth:50cm\nTravel speed:25cm/s\nEfficiency:405㎡/Hr\nPlate size:73x45cm\nPacked by wooden case",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GCP160-2] GCP160-2 REVERSIBLE PLATE COMPACTOR 9HP.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GCP160-2%20-%20Ingco%20Reversible%20Plate%20Compactor%20(9HP)/%5BGCP160-2%5D%20GCP160-2%20REVERSIBLE%20PLATE%20COMPACTOR%209HP.jfif"
            }
        ],
        "price": "255000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcs5602411---ingco-gasoline-chainsaw-62cc",
        "name": "GCS5602411 - Ingco Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:2.4kW\nEngine idle speed:3100±300rpm\nMax. cutting diameter:605mm(24\")\nFuel tank capacity:550ml\nOil tank capacity:260ml\nPowerful 2-stroke motor\n24\" chain saw\nWith saw chain AGSC52401\nWith chain saw bar AGSB52401\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GCS5602411] GCS5602411 GASOLINE CHAIN SAW 62CC TOP 50.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GCS5602411%20-%20Ingco%20Gasoline%20Chainsaw%20(62cc)/%5BGCS5602411%5D%20GCS5602411%20GASOLINE%20CHAIN%20SAW%2062CC%20TOP%2050.jfif"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcs62241---ingco-gasoline-chainsaw-62cc",
        "name": "GCS62241 - Ingco Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:3.2Kw\nIdling speed:3200rpm\nMax.cutting diameter:605mm(24\")\nFuel tank capacity:670ml\nOil tank capacity:350ml\nPowerful 2-stroke motor\nOregon brand chain\nWalbro carburetor\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GCS62241] GCS62241 GASOLINE CHAIN SAW 62CC.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GCS62241%20-%20Ingco%20Gasoline%20Chainsaw%20(62cc)/%5BGCS62241%5D%20GCS62241%20GASOLINE%20CHAIN%20SAW%2062CC.jfif"
            }
        ],
        "price": "45000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gdb80551---ingco-gasoline-hammer",
        "name": "GDB80551 - Ingco Gasoline Hammer",
        "description": "Displacement(ml):80\nRated power(Kw):2.0\nMax output(Kw):2.3\nNo load speed:4250rpm\nImpact rate:1300bpm\nImpact energy:55J\nFuel consumption(L/h):1.8L/h\nOil tank capacity(L):1.2L\nPetrol-oil mixture:50:1\nDry weight(Kg):23\nSquare chuck system\nAir-cooled,2 cycle single cylinder\nIncluding 2pcs chisels\nPacked by carton with foam",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GDB80551] GDB80551 GASOLINE HAMMER 2.png",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GDB80551%20-%20Ingco%20Gasoline%20Hammer/%5BGDB80551%5D%20GDB80551%20GASOLINE%20HAMMER%202.png"
            }
        ],
        "price": "257600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ghpw2103---ingco-gasoline-pressure-washer-7hp",
        "name": "GHPW2103 - Ingco Gasoline Pressure Washer (7HP)",
        "description": "Pump Type:AxialPump\nPump head material:Brass\nPump with changing oil function\nMax Output:7.0HP\nLife time:300h\nMax. Pressure:235Bar (3450psi)\nFlow Rate:9.5L/min (2.5GPM)\nDisplacement :212cc\nStarting System :Recoil\nEngine Type :OHV 4-stroke\nEngine Speed :3600rpm\nFuel volume :3.6L\nOil Volume :0.6L\nFuel Type:Unleaded Gasoline\n1 pcs metal lance\n1 pcs metal gun\n9.1m pressure hose\nFour nozzles\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GHPW2103] GHPW2103 GASOLINE PRESSURE WASHER 7HP.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GHPW2103%20-%20Ingco%20Gasoline%20Pressure%20Washer%20(7HP)/%5BGHPW2103%5D%20GHPW2103%20GASOLINE%20PRESSURE%20WASHER%207HP.jfif"
            }
        ],
        "price": "81000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ght5265511---ingco-gasoline-hedge-trimmer",
        "name": "GHT5265511 - Ingco Gasoline Hedge Trimmer",
        "description": "Displacement:25.4cc\nRated power:0.75Kw(1HP)\nNo-load/rated speed:10000/min\nCutting diameter: 26mm-28mm\nFuel inlet pipe:double-deck PUR pipe\nFuel tank capacity:550ml\nPowerful 2-stroke motor\nMax cutting diameter:550mm\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GHT5265511] GHT5265511 GASOLINE GRASS TRIMMER AND BUSH CUTTER.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GHT5265511%20-%20Ingco%20Gasoline%20Hedge%20Trimmer/%5BGHT5265511%5D%20GHT5265511%20GASOLINE%20GRASS%20TRIMMER%20AND%20BUSH%20CUTTER.jfif"
            }
        ],
        "price": "34650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm141181---ingco-gasoline-lawnmower-141cc-4hp",
        "name": "GLM141181 - Ingco Gasoline Lawnmower (141cc) (4HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:141cc\nRated power:3.0Kw(4HP)\nRated speed: 2600rpm\nDrive type:Hand push\n4 stroke engine\nCutting height:25-75mm(7 positions)\nCutting width:460mm(18”)\nCatchervolume:60L\nDeck material:steel\nWheel size:6\"/8\"\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GLM141181] GLM141181 GASOLINE LAWN MOWER 141CC-4HP.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GLM141181%20-%20Ingco%20Gasoline%20Lawnmower%20(141cc)%20(4HP)/%5BGLM141181%5D%20GLM141181%20GASOLINE%20LAWN%20MOWER%20141CC-4HP.jfif"
            }
        ],
        "price": "71000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm196201---ingco-gasoline-lawnmower-48hp-196cc",
        "name": "GLM196201 - Ingco Gasoline Lawnmower (4.8HP) (196cc)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:196cc\n4 stroke engine\nRated power:3.5Kw(4.8HP)\nRated speed: 3600rpm\n3 function:Catcher,side discharge, mulching,rear discharge\nCutting height:28-80mm(7 positions)\nCutting width:510mm(20”)\nCatchervolume:60L\nDeck material:steel\nWheel size:8\"/10\"\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GLM196201] GLM196201 GASOLINE LAWN MOWER 196CC-4.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GLM196201%20-%20Ingco%20Gasoline%20Lawnmower%20(4.8HP)%20(196cc)/%5BGLM196201%5D%20GLM196201%20GASOLINE%20LAWN%20MOWER%20196CC-4.jfif"
            }
        ],
        "price": "81000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "grt75-2---ingco-pavement-rammer-79kgs",
        "name": "GRT75-2 - Ingco Pavement Rammer (79Kgs)",
        "description": "Gasoline engine\nEngine power:4.8kW(6.5HP)\nWeight:79kg\nImpact force:10kN\nImpact rate:450-660rpm\nJumping stroke:65mm\nShoe size:33X29cm\nFuel tank volume:2.0L\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GRT75-2] GRT75-2 PAVEMENT RAMMER 79KGS.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GRT75-2%20-%20Ingco%20Pavement%20Rammer%20(79Kgs)/%5BGRT75-2%5D%20GRT75-2%20PAVEMENT%20RAMMER%2079KGS.jfif"
            }
        ],
        "price": "125000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gvr-22---ingco-gasoline-concrete-vibrator-55hp-hex-type",
        "name": "GVR-22 - Ingco Gasoline Concrete Vibrator (5.5HP) (Hex Type)",
        "description": "Gasoline engine\nEngine power:4.0kW(5.5HP)\nHEX type coupling\nNot included vibrator poker\nSuitalbe for item VBP1382,VBP1452,VBP1602\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GVR-22] GVR-22 GASOLINE CONCRETE VIBRATOR 5.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GVR-22%20-%20Ingco%20Gasoline%20Concrete%20Vibrator%20(5.5HP)%20(Hex%20Type)/%5BGVR-22%5D%20GVR-22%20GASOLINE%20CONCRETE%20VIBRATOR%205.jfif"
            }
        ],
        "price": "46250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp201h---ingco-gasoline-high-pressure-water-pump-2",
        "name": "GWP201H - Ingco Gasoline High Pressure Water Pump (2'')",
        "description": "Gasoline high pressure water pump with double impeller\nSuction port diameter:50mm,2\"\nDischarge port diameter:50mm,2\"/40mm,1.5\"/40mm,1.5\"\nMax.flow:300L/min\nMax.head lift:75/80/80m\nMax.suction head:7m\n7.5HP gasoline engine\nDisplacement:212cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GWP201H] GWP201H GASOLINE HIGH PRESSURE WATER PUMP 2_.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GWP201H%20-%20Ingco%20Gasoline%20High%20Pressure%20Water%20Pump%20(2'')/%5BGWP201H%5D%20GWP201H%20GASOLINE%20HIGH%20PRESSURE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp202---ingco-gasoline-water-pump-2",
        "name": "GWP202 - Ingco Gasoline Water Pump (2'')",
        "description": "Suction&amp;Discharge port diameter:50mm,2\"\nMax.flow:550L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GWP202] GWP202 GASOLINE WATER PUMP 2_.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GWP202%20-%20Ingco%20Gasoline%20Water%20Pump%20(2'')/%5BGWP202%5D%20GWP202%20GASOLINE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "25000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp302---ingco-gasoline-water-pump-3",
        "name": "GWP302 - Ingco Gasoline Water Pump (3'')",
        "description": "Suction&amp;Discharge port diameter:80mm,3\"\nMax.flow:1000L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "[GWP302] GWP302 GASOLINE WATER PUMP 3_.jfif",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/GWP302%20-%20Ingco%20Gasoline%20Water%20Pump%20(3'')/%5BGWP302%5D%20GWP302%20GASOLINE%20WATER%20PUMP%203_.jfif"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "husqavarna-272-xp",
        "name": "Husqavarna 272 XP",
        "description": "High-performance chainsaw for home and professional use\n\nPowerful, fuel-efficient engine\nErgonomic anti-vibration design for comfortable handling\nAutomatic chain lubrication for smooth cutting\nLightweight models for garden/home tasks; heavy-duty models for forestry\nDurable and reliable for long-term use",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "qd-157812.webp",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/Husqavarna%20272%20XP/qd-157812.webp"
            }
        ],
        "price": "87500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg5602411---total-gasoline-chainsaw-62cc",
        "name": "TG5602411 - Total Gasoline Chainsaw (62cc)",
        "description": "Displacement:62cc\nRated power:2.4Kw\nEngine idle speed:3100±300rpm\nMax. cutting diameter:605mm(24\"\")\nOregon brand chain\nFuel tank capacity:550ml\nOil tank capacity:260ml\nPowerful 2-stroke motor\n24\" chain saw\nPacked by color box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TG5602411.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TG5602411%20-%20Total%20Gasoline%20Chainsaw%20(62cc)/TG5602411.jpg"
            }
        ],
        "price": "40000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgc5001---total-gasoline-tiller-196cc",
        "name": "TGC5001 - Total Gasoline Tiller (196cc)",
        "description": "Petrol Engine\nEngine power:4.8kW(6.5HP)\nTilling Scope(mm):900\nTilling depth(mm):150-300\nGear shifting:-1,2,0,1\nDriving model:Belt\nMax. torque(N.m/rpm):11/2500\nTransmission oil capacity(L):0.95\nPacked by wooden case",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TGC5001.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGC5001%20-%20Total%20Gasoline%20Tiller%20(196cc)/TGC5001.jpg"
            }
        ],
        "price": "82500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgt141181---total-gasoline-lawnmower-141cc-4-hp",
        "name": "TGT141181 - Total Gasoline Lawnmower (141cc) (4 HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:141cc\nRated power:3.0Kw(4HP)\nRated speed: 2600rpm\nDrive type:Hand push\n4 stroke engine\nCutting height:25-75mm(7 positions)\nCutting width:460mm(18”)\nCatchervolume:60L\nDeck material:steel\nWheel size:6\" / 8\"\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TGT141181.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGT141181%20-%20Total%20Gasoline%20Lawnmower%20(141cc)%20(4%20HP)/TGT141181.jpg"
            }
        ],
        "price": "47500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tgt196201---total-gasoline-lawnmower-48hp",
        "name": "TGT196201 - Total Gasoline Lawnmower (4.8HP)",
        "description": "Zongshen brand engine(The best one in China)\nDisplacement:196cc\n4 stroke engine\nRated power:3.5Kw(4.8HP)\nRated speed: 3600rpm\n3 function:Catcher,side discharge, mulching,rear discharge\nCutting height:28-80mm(7 positions)\nCutting width:510mm(20”)\nCatchervolume:60L\nDeck material:steel\nWheel size:8\"\"/10\"\"\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TGT196201.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TGT196201%20-%20Total%20Gasoline%20Lawnmower%20(4.8HP)/TGT196201.jpg"
            }
        ],
        "price": "70000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp1016-2---total-gasoline-floor-saw",
        "name": "TP1016-2 - Total Gasoline Floor Saw",
        "description": "Gasoline engine\nEngine power:9.6kW(13HP)\nWeight:120kg\nMax.cutting depth:14cm(5.5\")\nBlade size:30-45cm(12\"-18\")\nDepth adjustment:Handle rotation\nDriving:Manual push\nWater tank capacity:35L\nFuel tank:2.8L\nBlade not included\nPacked by wooden case",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP1016-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP1016-2%20-%20Total%20Gasoline%20Floor%20Saw/TP1016-2.jpg"
            }
        ],
        "price": "158000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3202---total-gasoline-water-pump-2",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :28m\nSUCTION LIFT :8m\nDELIVERY VOLUME :550 Lit / min\nDIAMETER :2\" X 2\"\nFUEL TANK :3.6 Lit\nWEIGHT :21 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "price": "28500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3302---total-gasoline-water-pump-3",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :32m\nSUCTION LIFT :8m\nDELIVERY VOLUME :1000 Lit / min\nDIAMETER :3\" X 3\"\nFUEL TANK :3.6 Lit\nWEIGHT :25 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "price": "31500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp5434421---total-2hp-42-cm-petrol-brushcutter-bush-cutter",
        "name": "TP5434421 - Total 2HP (42 cm) Petrol Brushcutter (Bush Cutter)",
        "description": "No-load speed :8000/min\nBlade diameter :255mm (3 teeth)\nCutting capacity :420mm\nEngine :2-stroke\nDisplacement :42.7cc\nFuel tank :1200ml (Mix ratio: 40:1)",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP5434421.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP5434421%20-%20Total%202HP%20(42%20cm)%20Petrol%20Brushcutter%20(Bush%20Cutter)/TP5434421.jpg"
            }
        ],
        "price": "21000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp630-2---total-gasoline-concrete-vibrator",
        "name": "TP630-2 - Total Gasoline Concrete Vibrator",
        "description": "Gasoline engine\nEngine power:4.0kW(5.5HP）\nClaw type coupling\nNot included vibrator poker\nSuitalbe for item TPVP1381,TPVP1451,TPVP1601\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP630-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP630-2%20-%20Total%20Gasoline%20Concrete%20Vibrator/TP630-2.jpg"
            }
        ],
        "price": "38500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp7100-2e---total-gasoline-plate-compactor-90kgs",
        "name": "TP7100-2E - TOTAL Gasoline plate compactor (90Kgs)",
        "description": "Gasoline engine\nEngine power:4.8kW(6.5HP)\nWeight:90kg\nFrequency:4200VPM\nCentrifugal force:15kN\nCompaction depth:30cm\nTravel speed:45cm/s\nEfficiency:660㎡/Hr\nPlate size:56x44cm\nPacked by carton box",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP7100-2E.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP7100-2E%20-%20TOTAL%20Gasoline%20plate%20compactor%20(90Kgs)/TP7100-2E.jpg"
            }
        ],
        "price": "86000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp7125-2---total-gasoline-reversible-plate-compator-196cc-65hp-127kg",
        "name": "TP7125-2 - TOTAL GASOLINE REVERSIBLE PLATE COMPATOR (196cc) (6.5HP) (127Kg)",
        "description": "DISPLACEMENT :196cc\nPOWER :4.8kw / 6.5HP\nFREQUENCY :4.300VPM\nCENTRIFUGAL FORCE :25Kn\nCOMPACTION DEPTH :30cm\nTRAVEL SPEED :25cm / s\nEFFICIENCY :500m2 / ΩΡΑ\nPLATE SIZE :63 Χ 40cm\nWEIGHT :126 Kg",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "TP7125-2.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/TP7125-2%20-%20TOTAL%20GASOLINE%20REVERSIBLE%20PLATE%20COMPATOR%20(196cc)%20(6.5HP)%20(127Kg)/TP7125-2.jpg"
            }
        ],
        "price": "176000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-84892---yato-gasoline-chainsaw-52cc",
        "name": "YT-84892 - Yato Gasoline Chainsaw (52cc)",
        "description": "Brand:YATO\nSymbol:YT-84892\nProduct Name:Gasoline Chainsaw 52CC\nEngine Displacement :52cc\nPower:2.1kw\nFuel Tank:0.50l\nOil Tank:0.24l\nChinese Chain & Bar:20\"\nEasy Start",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "YT-84892.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/YT-84892%20-%20Yato%20Gasoline%20Chainsaw%20(52cc)/YT-84892.jpg"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-85255---yato-gasoline-lawnmower-3-in-1",
        "name": "YT-85255 - Yato Gasoline Lawnmower (3 in 1)",
        "description": "Symbol:YT-85255\nProduct Name:3 In 1 Gasoline Lawn Mower 20 Inch\nDISPLACEMENT:196CC\nENGINE MODEL:ZONGSHEN XP200\nPOWER MAX:3.5KW/2800RPM\nDRIVE:HAND PUSH\nCUTTING HEIGHTS:25-70MM WITH 7 GRADES\nCUTTING WIDTH:510MM\nDECK MATERIAL:STEEL\nFRONT/REAR WHEEL:8/10INCH,PP+PVC WITH BALL BEARING\nFABRIC GRASS CATCHER + HALF PLASTIC WITH LOGO PRINT\nADJUSTMENT SYSTEM: CENTRAL ADJUSTMENT\nHEIGHT ADJUSTMENT HANDLE WITH SOFT GRIP  FRONT PLASTIC COVER\nSIDE DISCHARGE, MULCHING, REAR CATCHER\nNOISE LEVEL: 98DB(A)\n\n- Versatile Functionality: Offers three mowing options – cutting, mulching, and bagging – to suit different lawn care needs.\n- Powerful Engine: Equipped with a robust gasoline engine for efficient and effective grass cutting, suitable for various lawn sizes.\n- 20-Inch Cutting Deck: The wide cutting deck enables quicker mowing by covering a larger area with each pass.\n- Adjustable Cutting Heights: Allows users to easily modify the cutting height for a customized lawn finish.\n- Durable Construction: Built with sturdy materials to withstand regular use and provide long-lasting performance.\n- Easy Maneuverability: Designed for comfortable handling and maneuvering, even on uneven terrains.\n- User-Friendly Features: Comes with simple controls and features that make it accessible for users of all experience levels.",
        "category": "Gasoline (Petrol) Machinery and Tools",
        "subcategory": "Gasoline (Petrol) Machinery and Tools",
        "images": [
            {
                "name": "YT-85255.jpg",
                "url": "/website%20products/Gasoline%20(Petrol)%20Machinery%20and%20Tools/YT-85255%20-%20Yato%20Gasoline%20Lawnmower%20(3%20in%201)/YT-85255.jpg"
            }
        ],
        "price": "56500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1010103---total-10-inch-adjustable-spanner",
        "name": "THT1010103 - Total 10 inch Adjustable Spanner",
        "description": "Range : 0-30mm\nMaterial : C45 Carbon Steel\nLength : 250mm (10 Inch)",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1010123---total-12-inch-adjustable-spanner",
        "name": "THT1010123 - Total 12 inch Adjustable Spanner",
        "description": "Range : 0-35mm\nMaterial : C45 Carbon Steel\nLength : 300mm (12 Inch)",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht101063---total-6-inch-adjustable-spanner",
        "name": "THT101063 - Total 6 inch Adjustable Spanner",
        "description": "Range : 0-19mm\nMaterial : C45 Carbon Steel\nLength : 150mm (6 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT101063.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT101063%20-%20Total%206%20inch%20Adjustable%20Spanner/THT101063.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht101083---total-8-inch-adjustable-spanner",
        "name": "THT101083 - Total 8 inch Adjustable Spanner",
        "description": "Range : 0-24mm\nMaterial : C45 Carbon Steel\nLength : 200mm (8 Inch)",
        "category": "Hand Tools",
        "subcategory": "Adjustable Spanners",
        "images": [
            {
                "name": "THT101083.jpg",
                "url": "/website%20products/Hand%20Tools/Adjustable%20Spanners/THT101083%20-%20Total%208%20inch%20Adjustable%20Spanner/THT101083.jpg"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhk11091---ingco-hex-key-set",
        "name": "HHK11091 - Ingco Hex Key Set",
        "description": "9pcs hex key set\nMaterial:S2\nSize:1.5mm,2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm.\nLong arm\nHeat treatment and chrome plate\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK11091.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK11091%20-%20Ingco%20Hex%20Key%20Set/HHK11091.jpg"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhk11092---ingco-hex-key-set-9-pcs",
        "name": "HHK11092 - Ingco Hex Key Set (9 Pcs)",
        "description": "9pcs hex key set\nMateria:S2\nSize:1.5mm,2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm.\nExtra-long arm\nHeat treatment and chrome plate\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK11092.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK11092%20-%20Ingco%20Hex%20Key%20Set%20(9%20Pcs)/HHK11092.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhk13092---ingco-torx-key-set-9-pcs",
        "name": "HHK13092 - Ingco Torx Key Set (9 Pcs)",
        "description": "9pcs torx key set\nMaterial:S2\nSize:T-10,T-15,T-20,T-25,T-27,T-30,T-40,T-45,T-50.\nExtra-long arm\nHeat treatment and chrome plate\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "HHK13092.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/HHK13092%20-%20Ingco%20Torx%20Key%20Set%20(9%20Pcs)/HHK13092.jpg"
            }
        ],
        "price": "1150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1061826---total-8-pcs-hex-key-set",
        "name": "THT1061826 - Total 8 Pcs Hex Key Set",
        "description": "Portable pocket size.\nHeat treated and chrome plated.\nMaterial: Chromium-vanadium steel (Cr-V)\nSize\t2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 7mm, 8mm",
        "category": "Hand Tools",
        "subcategory": "Allan Key - Torx Key - Hex Key Sets",
        "images": [
            {
                "name": "THT1061826.jpg",
                "url": "/website%20products/Hand%20Tools/Allan%20Key%20-%20Torx%20Key%20-%20Hex%20Key%20Sets/THT1061826%20-%20Total%208%20Pcs%20Hex%20Key%20Set/THT1061826.jpg"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1061846---total-8-pcs-torx-key-set",
        "name": "THT1061846 - Total 8 Pcs Torx Key Set",
        "description": "8pcs torx key set( Pocket)\nSize：T9-T40\nMaterial：Cr-V\nHeat treatment and chrome plate",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht106191---total-9-pcs-hex-key-set",
        "name": "THT106191 - Total 9 pcs Hex Key Set",
        "description": "SPECIFICATIONS\n9pcs hex key set\nMaterial:S2\nSize:1.5mm*62.5mm,2mm*76mm,2.5mm*85.5mm,3mm*91mm,4mm*102mm, 5mm*118mm, 6mm*139mm, | 8mm*155mm, 10mm*177mm.\nLong arm\nHeat treatment and chrome plate\nPacked by double blister",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht106392---total-9-pcs-torx-key-set",
        "name": "THT106392 - Total 9 Pcs Torx Key Set",
        "description": "Specifications\nModel no.\tTHT106392\nMaterial\tChromium-vanadium steel (Cr-V)\nSize\tT10, T15, T20, T25, T27, T30, T40, T45, T50",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hcg0109---ingco-aluminium-caulking-gun",
        "name": "HCG0109 - Ingco Aluminium Caulking Gun",
        "description": "9\" aluminum caulking gun\nLength:230mm\nDiameter:51mm\nWith 1pcs plastic adaptor\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Caulking Guns",
        "images": [
            {
                "name": "[HCG0109] HCG0109 CAULKING GUN.png",
                "url": "/website%20products/Hand%20Tools/Caulking%20Guns/HCG0109%20-%20Ingco%20Aluminium%20Caulking%20Gun/%5BHCG0109%5D%20HCG0109%20CAULKING%20GUN.png"
            }
        ],
        "price": "1260",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht21309---total-skeleton-caulking-gun",
        "name": "THT21309 - Total Skeleton Caulking Gun",
        "description": "9 Inch caulking gun\nAluminum handle for durability\nDouble push plate for added stability\nIncludes a needle for precision\nCompact design with a 2.2mm thickness",
        "category": "Hand Tools",
        "subcategory": "Caulking Guns",
        "images": [
            {
                "name": "d90eb3df-996a-43aa-a1ae-bcf55ad302f1.webp",
                "url": "/website%20products/Hand%20Tools/Caulking%20Guns/THT21309%20-%20Total%20Skeleton%20Caulking%20Gun/d90eb3df-996a-43aa-a1ae-bcf55ad302f1.webp"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "chalk-line-generic",
        "name": "Chalk Line Generic",
        "description": "Generic Chalk Line\n15m",
        "category": "Hand Tools",
        "subcategory": "Chalk Line",
        "images": [
            {
                "name": "WhatsApp Image 2025-01-17 at 12.27.49.jpeg",
                "url": "/website%20products/Hand%20Tools/Chalk%20Line/Chalk%20Line%20Generic/WhatsApp%20Image%202025-01-17%20at%2012.27.49.jpeg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl352506---deli-diamond-steel-file-set-6-pcs",
        "name": "DL352506 - Deli Diamond Steel File Set (6 Pcs)",
        "description": "6pcs File set\nLength:180mm\nDiameter:5mm\nFlat,Round,Half\nround,Square,Triangle,Knife\nPacked by pvc bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "WhatsApp-Image-2026-03-02-at-12.44.10-500x500.jpeg",
                "url": "/website%20products/Hand%20Tools/Files/DL352506%20-%20Deli%20Diamond%20Steel%20File%20Set%20(6%20Pcs)/WhatsApp-Image-2026-03-02-at-12.44.10-500x500.jpeg"
            }
        ],
        "price": "950",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl2141---deli-file-set-3-pcs-140mm",
        "name": "EDL2141 - Deli File Set (3 Pcs) (140mm)",
        "description": "140mm File Length – Compact size provides precise control and maneuverability for detailed filing, shaping, and finishing work in workshop and craft applications.\n3mm File Diameter – Slim profile allows access to tight spaces and intricate areas for accurate material removal and surface finishing.\n6 Piece File Set Variety – Includes flat, round, half round, square, triangle, and knife files for versatile shaping, smoothing, and detailing tasks.\nPrecision Engineered Filing Surfaces – Designed for smooth and consistent material removal on metal, wood, plastic, and soft materials.\nHigh Strength Hardened Steel Construction – Ensures durability, wear resistance, and long-lasting performance in professional and workshop environments.\nErgonomic Handle Design – Comfortable grip enhances control and reduces hand fatigue during extended precision work.\nCorrosion Resistant Finish – Protective coating prevents rust and maintains tool performance over time.\nVersatile Workshop and Craft Applications – Ideal for metalworkers, woodworkers, jewelers, technicians, and DIY users performing shaping, deburring, and finishing tasks.",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "EDL2141-12_400x.webp",
                "url": "/website%20products/Hand%20Tools/Files/EDL2141%20-%20Deli%20File%20Set%20(3%20Pcs)%20(140mm)/EDL2141-12_400x.webp"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl352085---deli-file-set-5-pcs-8",
        "name": "EDL352085 - Deli File Set (5 Pcs) (8'')",
        "description": "5pcs File set\n8″Flat File * 1\n8″Triangle File * 1\n8″Square File * 1\n8″Round File * 1\n8″Half Round File * 1\nPacked by pvc bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "edl352085-file-set-5pcs.webp",
                "url": "/website%20products/Hand%20Tools/Files/EDL352085%20-%20Deli%20File%20Set%20(5%20Pcs)%20(8'')/edl352085-file-set-5pcs.webp"
            }
        ],
        "price": "2150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktf63---ingco-file-set",
        "name": "HKTF63 - Ingco File Set",
        "description": "6pcs File set\nLength:140mm\nDiameter:3mm\nFlat,Round,Half round,Square,Triangle,Knife\nWith two color handle\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HKTF63] HKTF63 6 PCS FILE SET.png",
                "url": "/website%20products/Hand%20Tools/Files/HKTF63%20-%20Ingco%20File%20Set/%5BHKTF63%5D%20HKTF63%206%20PCS%20FILE%20SET.png"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktfs1308---ingco-3-pcs-steel-file-set",
        "name": "HKTFS1308 - Ingco 3 Pcs Steel File Set",
        "description": "Size:8“/200mm\nT12 Steel\nFlat steel file 1pcs\nRound steel file 1pcs\nHalf round steel file 1pcs\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HKTFS1308] HKTFS1308 3 PCS STEEL FILE SET 8_.jfif",
                "url": "/website%20products/Hand%20Tools/Files/HKTFS1308%20-%20Ingco%203%20Pcs%20Steel%20File%20Set/%5BHKTFS1308%5D%20HKTFS1308%203%20PCS%20STEEL%20FILE%20SET%208_.jfif"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktfw0308---ingco-3-pcs-wood-file-set",
        "name": "HKTFW0308 - Ingco 3 pcs Wood File Set",
        "description": "Length:8“/200mm\nFlat wood file 1pcs\nHalf round wood file 1pcs\nRound wood file 1pcs\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HKTFW0308] HKTFW0308 3PCS WOOD FILE SET.png",
                "url": "/website%20products/Hand%20Tools/Files/HKTFW0308%20-%20Ingco%203%20pcs%20Wood%20File%20Set/%5BHKTFW0308%5D%20HKTFW0308%203PCS%20WOOD%20FILE%20SET.png"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsff088---ingco-flat-steel-file",
        "name": "HSFF088 - Ingco Flat Steel File",
        "description": "Length:200mm\nT12 Steel\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HSFF088] HSFF088 FLAT STEEL FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HSFF088%20-%20Ingco%20Flat%20Steel%20File/%5BHSFF088%5D%20HSFF088%20FLAT%20STEEL%20FILE%20200MM.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsrf088---ingco-round-steel-file",
        "name": "HSRF088 - Ingco Round Steel File",
        "description": "Length:200mm\nT12 Steel\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HSRF088] HSRF088 ROUND STEEL FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HSRF088%20-%20Ingco%20Round%20Steel%20File/%5BHSRF088%5D%20HSRF088%20ROUND%20STEEL%20FILE%20200MM.png"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwff088---ingco-flat-wood-file",
        "name": "HWFF088 - Ingco Flat Wood File",
        "description": "Length:200mm\nT12 Steel\nPacked by poly bag",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwhf088---ingco-half-round-wood-file",
        "name": "HWHF088 - Ingco Half-Round Wood File",
        "description": "Length:200mm\nT12 Steel\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HWHF088] HWHF088 HALF-ROUND WOOD FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HWHF088%20-%20Ingco%20Half-Round%20Wood%20File/%5BHWHF088%5D%20HWHF088%20HALF-ROUND%20WOOD%20FILE%20200MM.png"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwrf088---ingco-round-wood-file",
        "name": "HWRF088 - Ingco Round Wood File",
        "description": "Length:200mm\nT12 Steel\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Files",
        "images": [
            {
                "name": "[HWRF088] HWRF088 ROUND WOOD FILE 200MM.png",
                "url": "/website%20products/Hand%20Tools/Files/HWRF088%20-%20Ingco%20Round%20Wood%20File/%5BHWRF088%5D%20HWRF088%20ROUND%20WOOD%20FILE%20200MM.png"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dlg204---deli-4-inch-g-clamp",
        "name": "DLG204 - Deli 4 inch G-Clamp",
        "description": "Size : 4 Inches\nClamping Range : 0-50mm\nMaterial : High Quality Cast Iron\nHandle Design : T-Shaped Rotating Handle",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dlg205---deli-5-inch-g-clamp",
        "name": "DLG205 - Deli 5 inch G-Clamp",
        "description": "Size : 5 Inches\nMaterial : High Quality Cast Iron\nHandle Design : T-Shaped Rotating Handle",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dlg206---deli-6-inch-g-clamp",
        "name": "DLG206 - Deli 6 inch G-Clamp",
        "description": "Size : 6 Inches\nMaterial : High Quality Cast Iron\nHandle Design : T-Shaped Rotating Handle",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-07042---yato-grease-gun",
        "name": "YT-07042 - Yato Grease Gun",
        "description": "Model: YT-07042\nCapacity: 600cc\nMaterial: Aluminum gun head and T-handle, zinc tube, and handle\nOperating Pressure: 27-41 MPa\nDimensions: 330x6.4x1.2 mm\nWeight: 1.95 kg",
        "category": "Hand Tools",
        "subcategory": "Grease Guns",
        "images": [
            {
                "name": "07042_1-png.webp",
                "url": "/website%20products/Hand%20Tools/Grease%20Guns/YT-07042%20-%20Yato%20Grease%20Gun/07042_1-png.webp"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "0-15-218---stanley-junior-hacksaw",
        "name": "0-15-218 - Stanley Junior Hacksaw",
        "description": "Brand: Stanley\nModel Number: 0-15-218\nType: Junior Hacksaw\nBlade Length: 6 inches (150 mm)\nFrame Material: Metal\nHandle Material: Plastic with ergonomic design\nWeight: Approximately 0.2 pounds (90 grams)",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "Ecomm_Large-0-15-218_3.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/0-15-218%20-%20Stanley%20Junior%20Hacksaw/Ecomm_Large-0-15-218_3.jpg"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl353206---deli-mini-hacksaw-frame-150mm",
        "name": "EDL353206 - Deli Mini Hacksaw Frame (150mm)",
        "description": "Material: 65Mn steel blade\nHandle: Ergonomic PVC-coated handle\nCutting Capacity: Suitable for wood, PVC, plastic, and light metals\nSize: 6 inches (150mm)\nPackage Type: Paper card\nWeight: Lightweight and easy to handle\nUsage: Ideal for detailed and precision cutting tasks",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "1_20__3.webp",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/EDL353206%20-%20Deli%20Mini%20Hacksaw%20Frame%20(150mm)/1_20__3.webp"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mc12pl---uyus-hacksaw-frame",
        "name": "MC12PL - Uyus Hacksaw Frame",
        "description": "1. Flat Steel frame\n2. With Bi-metal blade, 24TPI\n3. ABS handle\n4. Packed by color sleeve\n12″",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "a2421a5178b4d48d2fb4330859e94793mc12pl.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/MC12PL%20-%20Uyus%20Hacksaw%20Frame/a2421a5178b4d48d2fb4330859e94793mc12pl.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht541016---total-hacksaw-frame-industrial",
        "name": "THT541016 - Total Hacksaw Frame (Industrial)",
        "description": "LENGTH\t300mm",
        "category": "Hand Tools",
        "subcategory": "Hackaw Frames",
        "images": [
            {
                "name": "THT54106.jpg",
                "url": "/website%20products/Hand%20Tools/Hackaw%20Frames/THT541016%20-%20Total%20Hacksaw%20Frame%20(Industrial)/THT54106.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht541036---total-hacksaw-frame",
        "name": "THT541036 - Total Hacksaw Frame",
        "description": "1 pc 65 Manganese (Mn) spring steel blade\nSize\t300mm (12\")",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hch81008---ingco-8oz-claw-hammer",
        "name": "HCH81008 - Ingco 8oz Claw Hammer",
        "description": "Weigh:8oz/220g\nMagnetic nail function\nInnovated drop-forged hammer head\nDrop-forged hammerhead\nHeat treatment, 45# carbon steel\nUnique design fiberglass handle\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Hammers",
        "images": [
            {
                "name": "[HCH81008] HCH81008 CLAW HAMMER 8oz_.jfif",
                "url": "/website%20products/Hand%20Tools/Hammers/HCH81008%20-%20Ingco%208oz%20Claw%20Hammer/%5BHCH81008%5D%20HCH81008%20CLAW%20HAMMER%208oz_.jfif"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hch81016---ingco-160z-claw-hammer",
        "name": "HCH81016 - Ingco 160z Claw Hammer",
        "description": "Weight:16oz/450g\nMagnetic nail function\nInnovated drop-forged hammer head\nHeat treatment,45# carbon steel\nStrong three-color fiberglass handle for comfortable grip\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Hammers",
        "images": [
            {
                "name": "[HCH81016] HCH81016 CLAW HAMMER 16oz_.png",
                "url": "/website%20products/Hand%20Tools/Hammers/HCH81016%20-%20Ingco%20160z%20Claw%20Hammer/%5BHCH81016%5D%20HCH81016%20CLAW%20HAMMER%2016oz_.png"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpl01300---ingco-planer-235mm",
        "name": "HPL01300 - Ingco Planer (235mm)",
        "description": "Length:235mm\nSteel Q195\nPlaning width&depth:44*2mm\nPacked by hanger card",
        "category": "Hand Tools",
        "subcategory": "Hand Planers",
        "images": [
            {
                "name": "[HPL01300] HPL01300 IRON PLANER 9_.jfif",
                "url": "/website%20products/Hand%20Tools/Hand%20Planers/HPL01300%20-%20Ingco%20Planer%20(235mm)/%5BHPL01300%5D%20HPL01300%20IRON%20PLANER%209_.jfif"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht9391---total-planer-235mm",
        "name": "THT9391 - Total Planer (235mm)",
        "description": "LENGTH\t235mm\nPLANING WIDTH $ DEPTH\t44 X 2mm\nWEIGHT\t0.9 Kg",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhas08400---ingco-16-inch-hand-saw",
        "name": "HHAS08400 - Ingco 16 inch Hand Saw",
        "description": "Size：16\"(400mm)\nThickness：0.9mm, 7TPI\nMaterial:65Mn\nWith teeth protector\nHeat treatment\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08400] HHAS08400 HAND SAW 16_-400MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08400%20-%20Ingco%2016%20inch%20Hand%20Saw/%5BHHAS08400%5D%20HHAS08400%20HAND%20SAW%2016_-400MM.png"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhas08450---ingco-18-inch-hand-saw",
        "name": "HHAS08450 - Ingco 18 inch Hand Saw",
        "description": "Size：18\"(450mm)\nThickness：0.9mm, 7TPI\nMaterial:65Mn\nWith teeth protector\nHeat treatment\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08450] HHAS08450 HAND SAW 18_-450MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08450%20-%20Ingco%2018%20inch%20Hand%20Saw/%5BHHAS08450%5D%20HHAS08450%20HAND%20SAW%2018_-450MM.png"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhas08500---ingco-20-inch-hand-saw",
        "name": "HHAS08500 - Ingco 20 inch Hand Saw",
        "description": "Size：20\"(500mm)\nThickness：0.9mm, 7TPI\nMaterial:65Mn\nWith teeth protector\nHeat treatment\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS08500] HHAS08500 HAND SAW 20_-500MM.png",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS08500%20-%20Ingco%2020%20inch%20Hand%20Saw/%5BHHAS08500%5D%20HHAS08500%20HAND%20SAW%2020_-500MM.png"
            }
        ],
        "price": "950",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hhas48400---ingco-16-inch-handsaw",
        "name": "HHAS48400 - Ingco 16 Inch Handsaw",
        "description": "Size：16\"(400mm)\nThickness：0.9mm, 7TPI\nMaterial:65Mn\nWith teeth protector\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "[HHAS48400] HHAS48400 HAND SAW 16_-400MM.jfif",
                "url": "/website%20products/Hand%20Tools/Handsaws/HHAS48400%20-%20Ingco%2016%20Inch%20Handsaw/%5BHHAS48400%5D%20HHAS48400%20HAND%20SAW%2016_-400MM.jfif"
            }
        ],
        "price": "770",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht55400---total-16-inch-400mm-hand-saw",
        "name": "THT55400 - Total 16 inch (400mm) Hand Saw",
        "description": "SPECIFICATIONS\nLength:400mm/16\"\"\nThickness:0.9mm, 7TPI\nMaterial：65Mn\nWith teeth protector\nHeat treatment\nPacked by paper card",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht55450---total-18-inch-handsaw-450mm",
        "name": "THT55450 - Total 18 Inch Handsaw (450mm)",
        "description": "SPECIFICATIONS\nLength:450mm/18\"\"\nThickness:0.9mm, 7TPI\nMaterial：65Mn\nWith teeth protector\nHeat treatment\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Handsaws",
        "images": [
            {
                "name": "THT55450.jpg",
                "url": "/website%20products/Hand%20Tools/Handsaws/THT55450%20-%20Total%2018%20Inch%20Handsaw%20(450mm)/THT55450.jpg"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "1609200243---bosch-hole-cutters-set-8-pcs",
        "name": "1609200243 - Bosch Hole Cutters Set (8 Pcs)",
        "description": "Product overview\n• Brand: Bosch Professional Accessories\n• Part number: 1609200243\n• Product type: Hole saw (hole cutter) set\n• Application: Wood and plastics\n• Number of pieces: 8\n• EAN: 3165140004442\n\nIncluded hole saw diameters\n• 25 mm\n• 32 mm\n• 38 mm\n• 44 mm\n• 51 mm\n• 57 mm\n• 63 mm\n• 68 mm\nTechnical specifications\n• Cutting depth: 27 mm\n• Material: Die-cast aluminium\n• Shank type: Hexagon socket\nTypical applications\n• Drilling clean holes in wood and plastic\n• Electrical installations (junction boxes)\n• Ventilation and general fitting work",
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
        "price": "2300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608580803---hss-bi-metal-holesaw-set-plumbers-9-pcs",
        "name": "2608580803 - HSS Bi-Metal Holesaw Set (Plumbers) (9 Pcs)",
        "description": "Product overview\n• Brand: Bosch Professional\n• Part number: 2608580803\n• Product type: HSS bi-metal hole saw (plumber’s set)\n• Number of pieces: 9\n\nSet contents\n• 6 × HSS bi-metal hole saws:\n– 19 mm\n– 22 mm\n– 29 mm\n– 38 mm\n– 44 mm\n– 57 mm\n• 2 × hex-shank hole saw arbors (for different diameters)\n• 2 × HSS pilot drill bits\n• 1 × Allen key\n• Storage case\nTechnical specifications\n• Material: Bi-metal HSS (high-speed steel) with cobalt alloy\n• Tooth design: Progressive tooth pitch for faster, smoother cutting\n• Cutting depth: Approx. 38–40 mm (varies by size)\n• Shank type: Hex shank (arbors)",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "o91429v82_Lochsaegenkoffer.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/2608580803%20-%20HSS%20Bi-Metal%20Holesaw%20Set%20(Plumbers)%20(9%20Pcs)/o91429v82_Lochsaegenkoffer.webp"
            }
        ],
        "price": "8700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "2608580804---hss-bi-metal-holesaw-set-electricians-9-pcs",
        "name": "2608580804 - HSS Bi-Metal Holesaw Set (Electricians) (9 Pcs)",
        "description": "Product overview\n• Brand: Bosch Professional\n• Part number: 2608580804\n• Product type: HSS bi-metal hole saw set (Electrician’s set)\n• Number of pieces: 9\n\nSet contents\n• 6 × HSS bi-metal hole saws:\n– 20 mm\n– 25 mm\n– 32 mm\n– 38 mm\n– 51 mm\n– 64 mm\n• 2 × hex-shank hole saw arbors (for different diameters)\n• 1 × Allen key\n• Storage case\nTechnical specifications\n• Material: HSS bi-metal with cobalt alloy for extended life\n• Tooth design: Progressive tooth pitch for smoother, faster cutting\n• Cutting depth: Approx. 38–40 mm (varies by size)\n• Arbor shank type: Hex shank\nSuitable materials\n• Mild steel and stainless steel\n• Aluminium, copper, brass\n• PVC and other plastics\n• Wood and plasterboard\nTypical applications\n• Electrical installations such as conduit and switch boxes\n• HVAC and general mechanical work\n• Trade and maintenance drilling",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "o91429v82_Lochsaegenkoffer.webp",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/2608580804%20-%20HSS%20Bi-Metal%20Holesaw%20Set%20(Electricians)%20(9%20Pcs)/o91429v82_Lochsaegenkoffer.webp"
            }
        ],
        "price": "9700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akh0021---ingco-bi-metal-hole-saw-set",
        "name": "AKH0021 - Ingco Bi-Metal Hole Saw Set",
        "description": "9 Pcs Plumber's bi-metal hole saw set (AKH0091)\nMaterial: HSS M3 Bi-metal\nSize:19mm(3/4\")/22mm(7/8\")29mm(1-1/8\")/38mm(1-1/2\")/44mm(1-3/4\")/57mm(2-1/4\")\n1 pcs arbor:3/8\" Hex Shank,Fit Size:9/16\"~1-3/16\"\n1 pcs arbor:7/16\" Hex Shank,Fit Size:1-1/4\"~8-17/64\"\n1 pcs adapter arbors with 1/2-20 threads to fit hole saws 5/8-18 threads\n9 Pcs Electrician's bi-metal hole saw set (AKH0092)\nSize:22mm(7/8\")/29mm(1-1/8\")/35mm(1-3/8\")/44mm(1-3/4\")/51mm(2\")/64mm(2-1/2\")\nPacked by plastic case",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "[AKH0021] AKH0021 9 PCS BI-METAL HOLE SAW SET.jfif",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/AKH0021%20-%20Ingco%20Bi-Metal%20Hole%20Saw%20Set/%5BAKH0021%5D%20AKH0021%209%20PCS%20BI-METAL%20HOLE%20SAW%20SET.jfif"
            }
        ],
        "price": "9250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akh0092---ingco-bi-metal-hole-saw-set-9-pcs",
        "name": "AKH0092 - Ingco Bi-Metal Hole Saw Set (9 Pcs)",
        "description": "9 Pcs Electrician's bi-metal hole saw set (AKH0092)\nMaterial: HSS M3 Bi-metal\nSize:22mm(7/8\")/29mm(1-1/8\")/35mm(1-3/8\")/44mm(1-3/4\")/51mm(2\")/64mm(2-1/2\")\n1 pcs arbor:3/8\" Hex Shank,Fit Size:9/16\"~1-3/16\"\n1 pcs arbor:7/16\" Hex Shank,Fit Size:1-1/4\"~8-17/64\"\n1 pcs adapter arbors with 1/2-20 threads to fit hole saws 5/8-18 threads\nPacked by plastic case",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "[AKH0092] AKH0092 BI-METAL HOLE SAW SET.jfif",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/AKH0092%20-%20Ingco%20Bi-Metal%20Hole%20Saw%20Set%20(9%20Pcs)/%5BAKH0092%5D%20AKH0092%20BI-METAL%20HOLE%20SAW%20SET.jfif"
            }
        ],
        "price": "6250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "akhs702---ingco-hole-saw-set-7-pcs",
        "name": "AKHS702 - Ingco Hole Saw Set (7 Pcs)",
        "description": "7pcs hole saw set\nHole saw diameter:26，32，38，45，50，56，63mm\nHeight:50mm(2\")\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "[AKHS702] AKHS702 HOLE SAW SET.jfif",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/AKHS702%20-%20Ingco%20Hole%20Saw%20Set%20(7%20Pcs)/%5BAKHS702%5D%20AKHS702%20HOLE%20SAW%20SET.jfif"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edh-skz002-e1---deli-hole-saw-adaptor",
        "name": "EDH-SKZ002-E1 - Deli Hole Saw Adaptor",
        "description": "Arbor for hole saw\nHex shank 7/16\"\nFit hole saws 32mm to\n230mm\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "d4sinptuo7mm6fs7j8551oh7n7jcuali.png",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/EDH-SKZ002-E1%20-%20Deli%20Hole%20Saw%20Adaptor/d4sinptuo7mm6fs7j8551oh7n7jcuali.png"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsb4061---ingco-carbide-gritted-hole-saw-set",
        "name": "HSB4061 - Ingco Carbide Gritted Hole Saw Set",
        "description": "Hole Saw Size：33mm，53mm，73mm，83mm\n1pcs Aluminum locating plate\n1pcs pilot drill",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "[HSB4061] HSB4061 CARBIDE GRITTED HOLE SAW SET.jfif",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/HSB4061%20-%20Ingco%20Carbide%20Gritted%20Hole%20Saw%20Set/%5BHSB4061%5D%20HSB4061%20CARBIDE%20GRITTED%20HOLE%20SAW%20SET.jfif"
            }
        ],
        "price": "3100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "seo011---uyus-hole-saw-set-11-pcs",
        "name": "SEO011 - Uyus Hole Saw Set (11 Pcs)",
        "description": "• 11-Piece Set: Offers multiple sizes for versatile hole cutting needs\n• Hardened Steel Construction: Ensures durability and long service life\n• Clean & Accurate Cuts: Produces smooth, precise circular holes\n• Wide Tool Compatibility: Fits most electric and cordless drills",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "1-Copy-157.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO011%20-%20Uyus%20Hole%20Saw%20Set%20(11%20Pcs)/1-Copy-157.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "seo015---uyus-hole-saw-set-15-pcs",
        "name": "SEO015 - Uyus Hole Saw Set (15 Pcs)",
        "description": "1. Material: Carbon Steel\n# 45\n2. 1.1 mm Thickness\n3. Hardness Of 42 - 45 Hrc\n4. For Drilling Wood,\nPlywood, Mdf, Etc\n5. Packed By By Blow\nMould Box 1. 2\nMandrels 3/8”\n2. 1 Mandrels 1/4''\n3. 1 Hex Key 2.5",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "sierra-copa-uyustools-15-piezas-seo015.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO015%20-%20Uyus%20Hole%20Saw%20Set%20(15%20Pcs)/sierra-copa-uyustools-15-piezas-seo015.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "seo205---uyus-carbide-gritted-hole-saw-set",
        "name": "SEO205 - Uyus Carbide Gritted Hole Saw Set",
        "description": "Professional Hole Saw Sets from the Hand Tools collection. High-quality engineering for reliable performance.",
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
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "seo207---uyus-carbide-gritted-hole-saw-set-7-pcs",
        "name": "SEO207 - Uyus Carbide Gritted Hole Saw Set (7 Pcs)",
        "description": "1. Tungsten Carbide\nTipped Teeth With\nHardness Of 85 Hra\n2. Diameters Of 33,53,67,\n73, 83mm And Cutting\nDepth To 63mm\n3. For Cutting Wall,\nPlasterboard, Interior\nCeiling And Metal Fascia\nPanels\n4. Packed By Color Box.",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "002-00964.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/SEO207%20-%20Uyus%20Carbide%20Gritted%20Hole%20Saw%20Set%20(7%20Pcs)/002-00964.jpg"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tacsh0132---total-hole-saw-set-13-pcs",
        "name": "TACSH0132 - Total Hole Saw Set (13 Pcs)",
        "description": "13 Pcs Bi-metal hole saw set\nMaterial: HSS M3 Bi-metal\nSize:19mm(3/4\"\")/22mm(7/8\"\")/29mm(1-1/8\"\")/35mm(1-3/8\"\")/38mm(1-1/2\"\")/44mm(1-3/4\"\")/51mm(2\"\")/57mm(2-1/4\"\")/64mm(2-1/2\"\")\n1 pcs arbor:3/8\"\" Hex Shank,Fit Size:9/16\"\"~1-3/16\"\"\n1 pcs arbor:7/16\"\" Hex Shank,Fit Size:1-1/4\"\"~8-17/64\"\"\n1 pcs adapter arbors with 1/2-20 threads to fit hole saws 5/8-18 threads\n1 pcs pilot drill\n1 pcs hex key wrench\nPacked by plastic case",
        "category": "Hand Tools",
        "subcategory": "Hole Saw Sets",
        "images": [
            {
                "name": "TACSH0132.jpg",
                "url": "/website%20products/Hand%20Tools/Hole%20Saw%20Sets/TACSH0132%20-%20Total%20Hole%20Saw%20Set%20(13%20Pcs)/TACSH0132.jpg"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl350042---deli-43mm-pipe-cutter",
        "name": "DL350042 - Deli 43mm Pipe Cutter",
        "description": "65Mn Stainless steel blade, waterproof and rust-proof\nAluminum alloy body, lightweight and durable\nRatchet structure, easy and effortless cutting",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpc0232---ingco-32mm-pipe-cutter",
        "name": "HPC0232 - Ingco 32mm Pipe Cutter",
        "description": "Copper and aluminum pipe cutter\nCutting diameter:3-32mm\nWith high Quality blade\nAluminium knob\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "PVC Pipe Cutters",
        "images": [
            {
                "name": "HPC0232.jfif",
                "url": "/website%20products/Hand%20Tools/PVC%20Pipe%20Cutters/HPC0232%20-%20Ingco%2032mm%20Pipe%20Cutter/HPC0232.jfif"
            }
        ],
        "price": "980",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpc0442---ingco-230mm-industrial-pipe-cutter",
        "name": "HPC0442 - Ingco 230mm Industrial Pipe Cutter",
        "description": "Length:230mm\nCutting diameter:3-42mm\nAuto-open function\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "PVC Pipe Cutters",
        "images": [
            {
                "name": "HPC0442.jfif",
                "url": "/website%20products/Hand%20Tools/PVC%20Pipe%20Cutters/HPC0442%20-%20Ingco%20230mm%20Industrial%20Pipe%20Cutter/HPC0442.jfif"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-paint-brushes",
        "name": "Generic Paint Brushes",
        "description": "Generic Paintbrushes\n\nAvailable Sizes :\n2\"\n3\"\n4\"\n5\"\n6\"",
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
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hrht042301d---cylinder-brush-inner-wall",
        "name": "HRHT042301D - Cylinder brush (Inner wall)",
        "description": "Material: Micro fibre\nSize:230mm/9\"\nFibre height: 12mm\nSuitable for inner wall\n5.8mm central shank\nWith 1pcs roller cover\nWith 4pcs assistant shank\nMatch with unique handle\nPacked by plastic bag",
        "category": "Hand Tools",
        "subcategory": "Paint Brushes and Paint Rollers",
        "images": [
            {
                "name": "HRHT042301D.jfif",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/HRHT042301D%20-%20Cylinder%20brush%20(Inner%20wall)/HRHT042301D.jfif"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hrht042302d---cylinder-brush-outer-wall",
        "name": "HRHT042302D - Cylinder brush (Outer wall)",
        "description": "Material: Micro fibre\nSize: 230mm/9\"\nFibre height:18mm\nSuitable for outer wall\n7.8mm central shank\nMatch with unique handle\nWith 1pcs roller cover\nWith 4pcs assistant shank\nPacked by plastic bag",
        "category": "Hand Tools",
        "subcategory": "Paint Brushes and Paint Rollers",
        "images": [
            {
                "name": "HRHT042302D.jfif",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/HRHT042302D%20-%20Cylinder%20brush%20(Outer%20wall)/HRHT042302D.jfif"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hrht281002---mini-cylinder-brush-100mm-inner-wall",
        "name": "HRHT281002 - Mini cylinder brush 100mm (Inner wall)",
        "description": "Material:Acrylic\nSize:100mm/4\"\nFibre height:12mm\nSuitable for inner wall\n6mm central shank\nWith 1pcs roller cover\nPacked by plastic bag",
        "category": "Hand Tools",
        "subcategory": "Paint Brushes and Paint Rollers",
        "images": [
            {
                "name": "[HRHT281002] HRHT281002 MINI CYLINDER BRUSH(INNER WALL) 4_.jfif",
                "url": "/website%20products/Hand%20Tools/Paint%20Brushes%20and%20Paint%20Rollers/HRHT281002%20-%20Mini%20cylinder%20brush%20100mm%20(Inner%20wall)/%5BHRHT281002%5D%20HRHT281002%20MINI%20CYLINDER%20BRUSH(INNER%20WALL)%204_.jfif"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpw0808---ingco-8-inch-pipe-wrench",
        "name": "HPW0808 - Ingco 8 inch Pipe wrench",
        "description": "Size:8\"(200mm)\nMax clamping diameter:27mm\nMobile jaw material:cr-mo\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "HPW0808.jfif",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/HPW0808%20-%20Ingco%208%20inch%20Pipe%20wrench/HPW0808.jfif"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpw0810---ingco-10-inch-pipe-wrench",
        "name": "HPW0810 - Ingco 10 inch Pipe wrench",
        "description": "Size:10\"(250mm)\nMax clamping diameter:34mm\nMobile jaw material:cr-mo\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "HPW0810.jfif",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/HPW0810%20-%20Ingco%2010%20inch%20Pipe%20wrench/HPW0810.jfif"
            }
        ],
        "price": "1150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpw0812---ingco-12-inch-pipe-wrench",
        "name": "HPW0812 - Ingco 12 inch Pipe wrench",
        "description": "Size:12\" (300mm)\nMax clamping diameter:42mm\nMobile jaw material:cr-mo\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "HPW0812.jfif",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/HPW0812%20-%20Ingco%2012%20inch%20Pipe%20wrench/HPW0812.jfif"
            }
        ],
        "price": "1200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht170806---total-8-inch-pipe-wrench",
        "name": "THT170806 - Total 8 inch Pipe Wrench",
        "description": "Size:8\" (200mm)\nMax clamping diameter:27mm\nMobile jaw drop-forged with high quality carbon steel\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "THT170806.jpg",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/THT170806%20-%20Total%208%20inch%20Pipe%20Wrench/THT170806.jpg"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht171006---total-10-inch-pipe-wrench",
        "name": "THT171006 - Total 10 inch Pipe Wrench",
        "description": "Size:10\" (250mm)\nMax clamping diameter:34mm\nMobile jaw drop-forged with high quality carbon steel\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht171206---total-12-inch-pipe-wrench",
        "name": "THT171206 - Total 12 inch Pipe Wrench",
        "description": "Size:12\"\" (300mm)\nMax clamping diameter:42mm\nMobile jaw drop-forged with high quality carbon steel\nInactivate treatment\nBody material:ductile cast iron\nBlack finish and polish\nSolid rivet\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Pipe Wrenches",
        "images": [
            {
                "name": "THT171206.jpg",
                "url": "/website%20products/Hand%20Tools/Pipe%20Wrenches/THT171206%20-%20Total%2012%20inch%20Pipe%20Wrench/THT171206.jpg"
            }
        ],
        "price": "1100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bdht81589---black-and-decker-pump-pliers",
        "name": "BDHT81589 - Black and Decker Pump Pliers",
        "description": "Brand: Black+Decker\nType: Waterpump Pliers (also called Pelican Pliers or Groove Pliers)\nSize: 250mm (10 inches)\nMaterial: Forged Carbon Steel Jaws, Alloy Steel Body\nHandle: Bi-material soft grip for comfort and control\nDesign: Multi-groove adjustable jaw for various pipe/fitting sizes\nUses: Plumbing, automotive, general repairs, gripping curved objects",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "BDHT81589_1.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/BDHT81589%20-%20Black%20and%20Decker%20Pump%20Pliers/BDHT81589_1.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl2001---deli-curved-jaw-locking-pliers",
        "name": "DL2001 - Deli Curved Jaw Locking Pliers",
        "description": "Type : Locking Pliers with Round Jaws\nMaterial : High-carbon steel\nLength : 220 mm (8.6 inches)\nJaw Design : Rounded jaws for optimal grip\nAdjustability : Screw adjustment mechanism\nApplication : Automotive, industrial, and home use\nGrip : Non-slip ergonomic handle",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hbnp08160---ingco-bent-nose-pliers",
        "name": "HBNP08160 - Ingco Bent Nose Pliers",
        "description": "Size：6\"/160mm\nPolish and anti-rust oil\nTwo color handle\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "[HBNP08160] HBNP08160 BENT NOSE PLIERS 6_.jfif",
                "url": "/website%20products/Hand%20Tools/Pliers/HBNP08160%20-%20Ingco%20Bent%20Nose%20Pliers/%5BHBNP08160%5D%20HBNP08160%20BENT%20NOSE%20PLIERS%206_.jfif"
            }
        ],
        "price": "420",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hcp28168---ingco-6-inch-combination-pliers",
        "name": "HCP28168 - Ingco 6 inch Combination Pliers",
        "description": "Size: 6\"/160mm\nMaterial: Cr-V\nSurface treatment: black finish and polish\nTPR three color handle\nPacked by PP hanger",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hmps06115---ingco-mini-pliers-set-6-pcs",
        "name": "HMPS06115 - Ingco Mini Pliers Set (6 Pcs)",
        "description": "Size：\n4.5\" Combination pliers\n4.5\" Diagonal cutting pliers\n4.5\" End cutting pliers\n4.5\" Long nose pliers\n4.5\" Flat nose pliers\n4.5\" Needle nose pliers\nTwo color handle\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "[HMPS06115] HMPS06115 6PCS  MINI PLIERS SET.jfif",
                "url": "/website%20products/Hand%20Tools/Pliers/HMPS06115%20-%20Ingco%20Mini%20Pliers%20Set%20(6%20Pcs)/%5BHMPS06115%5D%20HMPS06115%206PCS%20%20MINI%20PLIERS%20SET.jfif"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpc08208---ingco-8-inch-combination-pliers",
        "name": "HPC08208 - Ingco 8 inch Combination Pliers",
        "description": "Size:8\"/200mm\nMaterial: #55 Carbon steel\nSurface treatment: Polish and anti-rust oil\nTwo color handle\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "HCP08208.jpg",
                "url": "/website%20products/Hand%20Tools/Pliers/HPC08208%20-%20Ingco%208%20inch%20Combination%20Pliers/HCP08208.jpg"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1k0301---total-3-pcs-pliers-set",
        "name": "THT1K0301 - Total 3 Pcs Pliers Set",
        "description": "Polished steel with anti-rust oil, two-tone rubber handle.\nPackage comes with,\n1 pc Long nose pliers: 160mm (6″)\n1 pc Diagonal cutting pliers: 160mm (6″)\n1 pc Combination pliers: 200mm (8″)",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tna308---uyus-end-cutting-pliers",
        "name": "TNA308 - Uyus End Cutting Pliers",
        "description": "Drop forged from carbon steel #55\nHeat treated & polished head\nBi-color dipped handle\nPacked by head double blister 8″",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-21152---yato-8-inch-insulated-combination-pliers",
        "name": "YT-21152 - Yato 8 inch Insulated COmbination Pliers",
        "description": "7-inch insulated combination pliers for electrical work\nInsulated handles for protection against electrical shock (up to 1000V)\nMade from high-quality chrome vanadium steel\nCombination of cutting edges and gripping jaws for versatility\nSuitable for a wide range of electrical tasks\nDurable construction for long-lasting performance\nComfortable grip for extended use",
        "category": "Hand Tools",
        "subcategory": "Pliers",
        "images": [
            {
                "name": "21152-png.webp",
                "url": "/website%20products/Hand%20Tools/Pliers/YT-21152%20-%20Yato%208%20inch%20Insulated%20COmbination%20Pliers/21152-png.webp"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl1033d---deli-precision-screwdriver-set",
        "name": "DL1033D - Deli Precision Screwdriver Set",
        "description": "Key features:\n\n33-piece set for versatile repair applications\nPrecision bits suitable for delicate electronics\nMagnetic bit holder for easier handling\nCompact, organized storage case for convenience and portability\nSpecifications:\nNumber of pieces: 33\nApplications: Mobile phones, laptops, watches, small electronics",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksd0718---ingco-7-pcs-precision-set",
        "name": "HKSD0718 - Ingco 7 Pcs Precision Set",
        "description": "7PCS precision screwdriver set\nnew design handle,New plastic box\nInclude:\nSL2.0*50，SL2.5*50，SL3.0*50，PH00*50，PH0*50，T6*50，T8*50\nMaterial:CR-V\nErgonomic comfort-grip handle\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Precision Screwdrivers",
        "images": [
            {
                "name": "HKSD0718.jpg",
                "url": "/website%20products/Hand%20Tools/Precision%20Screwdrivers/HKSD0718%20-%20Ingco%207%20Pcs%20Precision%20Set/HKSD0718.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksdb0348---ingco-32-pcs-precision-screwdriver-set",
        "name": "HKSDB0348 -  Ingco 32 Pcs Precision Screwdriver Set",
        "description": "32PCS precision screwdriver set\n1Pcs unique design handle\n1Pcs 4X60mm bits holder\n30PCS 4X28mm bits：\nSL1.5,SL2,SL2.5,SL3,SL3.5,SL4,PH000,PH00,PH0,PH1,T4,T5,T6,T7,T8,T9,T10,T15,T20,H0.9,H1.3,H1.5,H2,H2.5,H3,H4,Y2,U2.6,Five Star0.8，Five Star1.2 Five Star0.8，Five Star1.2 is suitable for iPhone and ipad\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Precision Screwdrivers",
        "images": [
            {
                "name": "[HKSDB0348] HKSDB0348 PRECISION SCREWDRIVER SET.png",
                "url": "/website%20products/Hand%20Tools/Precision%20Screwdrivers/HKSDB0348%20-%20%20Ingco%2032%20Pcs%20Precision%20Screwdriver%20Set/%5BHKSDB0348%5D%20HKSDB0348%20PRECISION%20SCREWDRIVER%20SET.png"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "10209---tolsen-quick-bar-ratchet-clamp-4-pcs",
        "name": "10209 - Tolsen Quick Bar Ratchet Clamp (4 Pcs)",
        "description": "• Hard plastic body\n• Black finished bar\n• Soft non-marking pads\n• Packing: paper hanger\n\n2pcs 4″\n2pcs 6″",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl110112---deli-12-inch-quick-bar-clamp",
        "name": "DL110112 - Deli 12-inch Quick Bar Clamp",
        "description": "Clamp size: 63x300mm\nMax clamp force: 90N\nTrigger-type clamp and rubber chuck\nPacked by label",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dll110118---deli-18-inch-quick-bar-clamp",
        "name": "DLL110118 - Deli 18-inch Quick-Bar Clamp",
        "description": "Material: Durable A3 steel\nMechanism: Trigger-type for quick adjustments\nLength: 18 inches (450mm)\nGrip: Rubber chucks to prevent surface damage\nUse: Ideal for woodworking, assembly, and general maintenance\nDesign: Black finish for a professional look",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "1_-_2024-05-15t160138.248.webp",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/DLL110118%20-%20Deli%2018-inch%20Quick-Bar%20Clamp/1_-_2024-05-15t160138.248.webp"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hqbc36803---ingco-quick-bar-clamp-80-x-900mm",
        "name": "HQBC36803 - Ingco Quick Bar Clamp (80 x 900mm)",
        "description": "Clamp size:80x900mm\nMax clamp force:135KGS\nThickness and width of iron ruler:6X18mm\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Quick Bar Clamps",
        "images": [
            {
                "name": "[HQBC36803] HQBC36803 QUICK BAR CLAMPS 80x900mm.png",
                "url": "/website%20products/Hand%20Tools/Quick%20Bar%20Clamps/HQBC36803%20-%20Ingco%20Quick%20Bar%20Clamp%20(80%20x%20900mm)/%5BHQBC36803%5D%20HQBC36803%20QUICK%20BAR%20CLAMPS%2080x900mm.png"
            }
        ],
        "price": "3100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkts12101---ingco-10-pcs-half-inch-socket-set-with-l-handle",
        "name": "HKTS12101 - Ingco 10 Pcs Half Inch Socket Set with L-Handle",
        "description": "10 Pcs 1/2\" socket set\nInclude:\n9 Pcs 1/2\" Cr-V DR. Sockets: 10-12-13-14-17-19-21-22-24mm\n1 Pcs 1/2\"DR. 300mm L Bar\nMaterial:Cr-V(50BV30)\nHeat treated\nChromed plated\nPacked by metal box",
        "category": "Hand Tools",
        "subcategory": "Ratchet Wrenches",
        "images": [
            {
                "name": "[HKTS12101] HKTS12101 10PCS 1-2_ SOCKET SET 300MM.jfif",
                "url": "/website%20products/Hand%20Tools/Ratchet%20Wrenches/HKTS12101%20-%20Ingco%2010%20Pcs%20Half%20Inch%20Socket%20Set%20with%20L-Handle/%5BHKTS12101%5D%20HKTS12101%2010PCS%201-2_%20SOCKET%20SET%20300MM.jfif"
            }
        ],
        "price": "3250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp21426---total-142-pcs-combination-tool-set",
        "name": "THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "description": "142 Pcs Combination Tools Set\nInclude：\n1/2\"\"DR.Part：\n19Pcs 1/2\"\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM\n5Pcs 1/2\"\" Star Socket:E10 12 14 16 20\n1Pcs 1/2\"\"Dr.Flex handle，375MM\n1Pcs 1/2\"\" ratchet wrench,45T\n2Pcs 1/2\"\" Extension bar:75mm(3\"\") 250mm(10\"\")\n1Pcs 1/2\"\" Dr. Universal joint\n1Pcs 1/2\"\"(F)*3/8\"\"(M) three way adaptor\n2Pcs Spark plug socket 1/2\"\"Dr.16MM&21MM\n1Pcs 1/2\"\"*10\"\" L handle\n3/8\"\"DR.Part：\n15Pcs 3/8\"\" 12pt.socket:6-7-8-9-10-11-12-13-14-15-17-18-19-21-22\n1Pcs 3/8\"\" ratchet wrench,45T\n2Pcs 3/8\"\" Extension bar:75mm(3\"\") 150mm(6\"\")\n1Pcs 3/8\"\" Dr. Universal joint\n1/4\"\"DR.Part:\n26Pcs 1/4\"\"*25MM Screwdriver bits:\nPH0-PH1-PH1-PH2-PH2-PH3-PZ0-PZ1-PZ2-PZ3-SL4-SL5-SL6-SL7-H2-H3-H4-H5-H6-T10H-T15H-T20H-T25H-T27H-T30H-T40H\n1Pcs Bit holder\n9Pcs 1/4\"\" Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10\n5Pcs 1/4\"\" Star Socket:E4 5 6 7 8\n1Pcs 1/4\"\" ratchet wrench,45T\n3Pcs 1/4\"\" Extension bar:50mm(2\"\") 100mm(4\"\") 150mm(6\"\")\n1Pcs 1/4\"\" Dr. Universal joint\n1Pcs 3/8\"\"(F)*1/4\"\"(M)three way adaptor\n1Pcs 1/4\"\"*150mm Spinner handle\n1Pcs 1/4\"\"*150mm Flexible extension bar\n17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\n5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19\n10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM\n1 Pcs 300g Machinist hammer\n1 Pcs 7\"\" Combination Pliers\n1Pcs 10\"\"Curved jaw lock wrench\n2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150\n2Pcs S2 Phillips screwdriver:PH2*100 PH2*150\n2Pcs Stubby screwdriver:PH2*38 SL6.5*38\nPacked by BMC",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht121201---total-20-pcs-half-inch-socket-set",
        "name": "THT121201 - Total 20 Pcs Half Inch Socket Set",
        "description": "Include：\n1pcs 1/2\"\" DR. Ratchet handle,45T\n12pcs 1/2\"\" DR. Sockets: 10,11,12,13,14,15,16,17,18,19,22,24mm\n1pcs 1/2\"\" DR. Spark Plug Socket：16mm\n1pcs 1/2\"\" DR. Universal joint\n1pcs 1/2\"\" DR. Extension bar,10\"\"(250mm)\n1pcs 1/2\"\" DR. Three way joint\n3pcs 1/2\"\" DR. Deep hexagonal sockets: 13,17,19mm\nMaterial：CR-V(50BV30),heat treated\nPacked by BMC",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht141201---total-20-pcs-quarter-inch-socket-set",
        "name": "THT141201 - Total 20 Pcs Quarter Inch Socket Set",
        "description": "Include：\n1pcs 1/4\"\" DR. Ratchet handle,45T\n13pcs 1/4\"\" DR. Sockets: 4,4.5,5,5.5,6,7,8,9,10,11,12,13,14mm\n1pcs 1/4\"\" DR. Extension bar,2\"\"(50mm)\n1pcs 1/4\"\" DR. Screwdriver handle\n4pcs 1/4\"\" DR. Deep hexagonal sockets:8,10,12,13mm\nMaterial：CR-V(50BV30),heat treated\nPacked by BMC",
        "category": "Hand Tools",
        "subcategory": "Ratchet Wrenches",
        "images": [
            {
                "name": "THT141201.jpg",
                "url": "/website%20products/Hand%20Tools/Ratchet%20Wrenches/THT141201%20-%20Total%2020%20Pcs%20Quarter%20Inch%20Socket%20Set/THT141201.jpg"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "abh10601---ingco-screwdriver-bit-holder",
        "name": "ABH10601 - Ingco Screwdriver Bit Holder",
        "description": "60mm,2pcs/set\nMaterial：Steel + Cr-v\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[ABH10601] ABH10601 SCREWDRIVER BIT HOLDER.jfif",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/ABH10601%20-%20Ingco%20Screwdriver%20Bit%20Holder/%5BABH10601%5D%20ABH10601%20SCREWDRIVER%20BIT%20HOLDER.jfif"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bdht62296---black-and-decker-star-screwdriver-6",
        "name": "BDHT62296 - Black and Decker Star Screwdriver (6'')",
        "description": "Feature\tDetails\nBrand\tBlack+Decker\nModel\tBDHT62296\nType\tPhillips Dranfees (PH1)\nBlade Length\t100mm\nMaterial\tChrome Vanadium Steel (Cr-V)\nTip Coating\tBlack Phosphate-Coated Magnetic Tip\nHandle Type\tBi-Material Soft Grip\nErgonomic Design\tYes",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl1033d---deli-precision-screwdriver-set",
        "name": "DL1033D - Deli Precision Screwdriver Set",
        "description": "Key features:\n\n33-piece set for versatile repair applications\nPrecision bits suitable for delicate electronics\nMagnetic bit holder for easier handling\nCompact, organized storage case for convenience and portability\nSpecifications:\nNumber of pieces: 33\nApplications: Mobile phones, laptops, watches, small electronics",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksd0628---ingco-6pcs-screwdriver-set",
        "name": "HKSD0628 - Ingco 6pcs Screwdriver Set",
        "description": "6 pcs screwdriver setnew design handle\nMaterial:CR-V\nRound blade\n1pcs SL5.5*5*75\n1pcs SL5.5*5*100\n1pcs SL6.5*6*150\n1pcs PH1*5*75\n1pcs PH1*5*100\n1pcs PH2*6*150\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HKSD0628.jfif",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSD0628%20-%20Ingco%206pcs%20Screwdriver%20Set/HKSD0628.jfif"
            }
        ],
        "price": "950",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksd0718---ingco-7-pcs-precision-set",
        "name": "HKSD0718 - Ingco 7 Pcs Precision Set",
        "description": "7PCS precision screwdriver set\nnew design handle,New plastic box\nInclude:\nSL2.0*50，SL2.5*50，SL3.0*50，PH00*50，PH0*50，T6*50，T8*50\nMaterial:CR-V\nErgonomic comfort-grip handle\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HKSD0718.jpg",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSD0718%20-%20Ingco%207%20Pcs%20Precision%20Set/HKSD0718.jpg"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksdb0188---ingco-t-handle-wrench-screwdriver-set",
        "name": "HKSDB0188 - Ingco T-Handle Wrench Screwdriver Set",
        "description": "24PCS T-handle wrench screwdriver set\nMaterial:CR-V\n15pcs 6.35x25MM CR-V screwdriver bit:SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ1,PZ2,T15,T20,H4,H5,H6\n1PC 5X100MM bit holder with strong magnetic\n1PC unique design T-handle Ratchet wrench\n1PC 4-6mm(25mm)bits adaptor\n6PC 1/4\" socket: 5,6,7,8,9,10\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HKSDB0188.jfif",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSDB0188%20-%20Ingco%20T-Handle%20Wrench%20Screwdriver%20Set/HKSDB0188.jfif"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksdb0248---ingco-24-pcs-screwdriver-set",
        "name": "HKSDB0248 - Ingco 24 Pcs Screwdriver Set",
        "description": "24 Pcs screwdriver set\nInclude:\n16 Pcs 6.35X25mm Screwdriver bit:SL3,SL4,SL5,SL6,SL6,SL7,PH1,PH2,PH2,PH3,PZ1,PZ2,T10,T15,T20,T25\n7Pcs 1/4\" Power sleeve:5MM 6MM 7MM 8MM 9MM 10MM 11MM\n1Pcs unique design ratchet handle\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "HKSDB0248.jfif",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSDB0248%20-%20Ingco%2024%20Pcs%20Screwdriver%20Set/HKSDB0248.jfif"
            }
        ],
        "price": "1600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksdb0348---ingco-32-pcs-precision-screwdriver-set",
        "name": "HKSDB0348 -  Ingco 32 Pcs Precision Screwdriver Set",
        "description": "32PCS precision screwdriver set\n1Pcs unique design handle\n1Pcs 4X60mm bits holder\n30PCS 4X28mm bits：\nSL1.5,SL2,SL2.5,SL3,SL3.5,SL4,PH000,PH00,PH0,PH1,T4,T5,T6,T7,T8,T9,T10,T15,T20,H0.9,H1.3,H1.5,H2,H2.5,H3,H4,Y2,U2.6,Five Star0.8，Five Star1.2 Five Star0.8，Five Star1.2 is suitable for iPhone and ipad\nPacked by plastic box",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HKSDB0348] HKSDB0348 PRECISION SCREWDRIVER SET.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HKSDB0348%20-%20%20Ingco%2032%20Pcs%20Precision%20Screwdriver%20Set/%5BHKSDB0348%5D%20HKSDB0348%20PRECISION%20SCREWDRIVER%20SET.png"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs285075---ingco-slotted-screwdriver",
        "name": "HS285075 - Ingco Slotted Screwdriver",
        "description": "1pcs slotted screwdriver\nCr-V, Round shank\nSlotted：5.5mm\nDiameter：5.0mm\nLength：75mm\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS285075] HS285075 SLOTTED SCREWDRIVER.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS285075%20-%20Ingco%20Slotted%20Screwdriver/%5BHS285075%5D%20HS285075%20SLOTTED%20SCREWDRIVER.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs285100---ingco-slotted-screwdriver",
        "name": "HS285100 - Ingco Slotted Screwdriver",
        "description": "1pcs slotted screwdriver\nCr-V, Round shank\nSlotted：5.5mm\nDiameter：5.0mm\nLength：100mm\nPacked by poly bag",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs286125---ingco-slotted-screwdriver",
        "name": "HS286125 - Ingco Slotted Screwdriver",
        "description": "1pcs screwdriver with 1pcs plastic hanger\nCr-V, Round shank\nSlotted：6.5mm\nDiameter：6.0mm\nLength：125mm\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS286125] HS286125 SLOTTED SCREWDRIVER.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS286125%20-%20Ingco%20Slotted%20Screwdriver/%5BHS286125%5D%20HS286125%20SLOTTED%20SCREWDRIVER.png"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs28ph3200---ingco-phillips-screwdriver-ph3",
        "name": "HS28PH3200 - Ingco Phillips Screwdriver (PH3)",
        "description": "1pcs screwdriver with 1pcs plastic hanger\nCR-V,PH3,Round shank\ndiameter：8.0mm\nlength：200mm\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS28PH3200] HS28PH3200 PHILIPS SCREWDRIVER PH3.jfif",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS28PH3200%20-%20Ingco%20Phillips%20Screwdriver%20(PH3)/%5BHS28PH3200%5D%20HS28PH3200%20PHILIPS%20SCREWDRIVER%20PH3.jfif"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs28t10100---ingco-torx-screwdriver-5mm",
        "name": "HS28T10100 - Ingco Torx Screwdriver (5mm)",
        "description": "1pcs screwdriver with 1pcs plastic hanger\nCR-V,T10, Round shank\ndiameter：5.0mm\nlength：100mm\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS28T10100] HS28T10100 TORX SCREWDRIVER 5MM.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS28T10100%20-%20Ingco%20Torx%20Screwdriver%20(5mm)/%5BHS28T10100%5D%20HS28T10100%20TORX%20SCREWDRIVER%205MM.png"
            }
        ],
        "price": "160",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hs28t20150---incgo-torx-screwdriver-6mm",
        "name": "HS28T20150 - Incgo Torx Screwdriver (6mm)",
        "description": "1pcs screwdriver with 1pcs plastic hanger\nCR-V,T10, Round shank\ndiameter：6.0mm\nlength：150mm\nPacked by poly bag",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HS28T20150] HS28T20150 TORX SCREWDRIVER 6MM.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HS28T20150%20-%20Incgo%20Torx%20Screwdriver%20(6mm)/%5BHS28T20150%5D%20HS28T20150%20TORX%20SCREWDRIVER%206MM.png"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsdph0075---ingco-phillips-screwdriver-ph0",
        "name": "HSDPH0075 - Ingco Phillips Screwdriver (PH0)",
        "description": "Blade material: S2\nTip type: phillips PH0(magnetic)\nBlade length: 75mm\nBlade diameter: 3.0mm\nShank type: round\nHandle material: three-color ergonomic\n1Pcs screwdriver with 1pcs plastic hanger\nWith strong magnetic\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "[HSDPH0075] HSDPH0075 PHILIPS SCREWDRIVER PH0.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/HSDPH0075%20-%20Ingco%20Phillips%20Screwdriver%20(PH0)/%5BHSDPH0075%5D%20HSDPH0075%20PHILIPS%20SCREWDRIVER%20PH0.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-2827---yato-insulated-screwdriver-set",
        "name": "YT-2827 - Yato Insulated Screwdriver Set",
        "description": "Set of 5 insulated screwdrivers for electrical work\nInsulated handles for protection against electric shock (up to 1000V)\nMade from high-quality chrome vanadium steel\nMagnetic tip for easy handling of screws\nSuitable for use with live wires\nIncludes a range of sizes for various applications\nComes in a convenient storage case for easy organization and transport",
        "category": "Hand Tools",
        "subcategory": "Screwdrivers",
        "images": [
            {
                "name": "2827_2Png_zp.png",
                "url": "/website%20products/Hand%20Tools/Screwdrivers/YT-2827%20-%20Yato%20Insulated%20Screwdriver%20Set/2827_2Png_zp.png"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ce1305---uyus-snap-off-knife",
        "name": "CE1305 - Uyus Snap Off Knife",
        "description": "1. ABS case with TPR\n2. Includes 1pc 0.5 mm thick blade\n3. With self-locking mechanism\n4. Packed by blister card",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cea3su---uyus-snap-off-knife-blade",
        "name": "CEA3SU - Uyus Snap Off Knife Blade",
        "description": "Type\tUtility Knife\nModel / Size\tCEA3SU, 18mm\nApplication\tDIY, Professional, Commercial\nBlades Included\t3 Replaceable Blades\nHandle\tErgonomic",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "66401-1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/CEA3SU%20-%20Uyus%20Snap%20Off%20Knife%20Blade/66401-1.jpg"
            }
        ],
        "price": "550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl018b---deli-utility-knife-18mm",
        "name": "DL018B - Deli Utility Knife (18mm)",
        "description": "Material: SK5 blade, ABS body\nBlade: 18mm, 8 snap-off sections\nMechanism: Self-locking push button\nDesign: Electrophoretic blade body, corrosion-resistant\nBlade Replacement: Foldable tail cover\nColor: Yellow\nPackage Type: OPP bag",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "1_7.webp",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/DL018B%20-%20Deli%20Utility%20Knife%20(18mm)/1_7.webp"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkns1806---ingco-snap-off-blade-knife",
        "name": "HKNS1806 - Ingco Snap Off Blade Knife",
        "description": "Blade:9mm(W)x80mm(L) (HKNSB0901)\nStainless steel body\nWith 1 pcs blade,Auto-Lock\nLength:132mm\nWith flat push button\nPacked by Color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkns1808---ingco-snap-off-blade-knife",
        "name": "HKNS1808 - Ingco Snap Off Blade Knife",
        "description": "Blade:100mm(L)x18mm(W)\nWith 6 pcs SK5 blades (HKNSB112)\nAluminum alloy shell\nWith blade locking bolt\nWith flat push button\nNet weight:190g\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "[HKNS1808] HKNS1808 SNAP-OFF BLADE KNIFE.jfif",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/HKNS1808%20-%20Ingco%20Snap%20Off%20Blade%20Knife/%5BHKNS1808%5D%20HKNS1808%20SNAP-OFF%20BLADE%20KNIFE.jfif"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkns28035---ingco-snap-off-blade-knife",
        "name": "HKNS28035 - Ingco Snap Off Blade Knife",
        "description": "Blade Size:18mmx100mm\nWith 3 pcs SK5 blades HKNSB181\nWith flat push button",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "image_1_354246d6-a6ca-4824-9ea0-df6e76d529f2_300x.avif",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/HKNS28035%20-%20Ingco%20Snap%20Off%20Blade%20Knife/image_1_354246d6-a6ca-4824-9ea0-df6e76d529f2_300x.avif"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "stht10322-800---stanley-slide-lock-snap-off-knife-9mm",
        "name": "STHT10322-800 - Stanley Slide Lock Snap Off Knife (9mm)",
        "description": "Snap-off knives have high quality carbon steel blades that snap off in sections, providing fresh and sharp cutting point to the user without the need to open up the knife",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "Ecomm_Large-STHT10322-800_1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/STHT10322-800%20-%20Stanley%20Slide%20Lock%20Snap%20Off%20Knife%20(9mm)/Ecomm_Large-STHT10322-800_1.jpg"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "stht10323-800---stanley-slide-lock-snap-off-knife-18mm",
        "name": "STHT10323-800 - Stanley Slide Lock Snap Off Knife (18mm)",
        "description": "Snap-off knives have high quality carbon steel blades that snap off in sections, providing fresh and sharp cutting point to the user without the need to open up the knife",
        "category": "Hand Tools",
        "subcategory": "Snap-off (Stripping) Knife",
        "images": [
            {
                "name": "Ecomm_Large-STHT10323-800_1.jpg",
                "url": "/website%20products/Hand%20Tools/Snap-off%20(Stripping)%20Knife/STHT10323-800%20-%20Stanley%20Slide%20Lock%20Snap%20Off%20Knife%20(18mm)/Ecomm_Large-STHT10323-800_1.jpg"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "combination-spanners",
        "name": "Combination Spanners",
        "description": "Available Sizes:6mm - 32mm\nMaterial:Cr-V\nChrome plated,matt finish\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HCSPA061] HCSPA061 COMBINATION SPANNER.png",
                "url": "/website%20products/Hand%20Tools/Spanners/Combination%20Spanners/%5BHCSPA061%5D%20HCSPA061%20COMBINATION%20SPANNER.png"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dli60008a---deli-open-end-spanner-set",
        "name": "DLI60008A - Deli Open End Spanner Set",
        "description": "Color\tBlack\nNet weight\t875g\nSize\t6x7mm, 8x9mm, 10x11mm, 12x13mm, 14x15mm, 16x17mm, 18x19mm, 20x22mm\nMaterial\tCarbon Steel\nPackaging\tPlastic Stand",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "83dd9fd4-e862-4e6e-a275-fe827b345061.webp",
                "url": "/website%20products/Hand%20Tools/Spanners/DLI60008A%20-%20Deli%20Open%20End%20Spanner%20Set/83dd9fd4-e862-4e6e-a275-fe827b345061.webp"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "double-open-end-spanners",
        "name": "Double Open End Spanners",
        "description": "Double Open End Spanner\nLength:124mm,\nMaterial:Cr-V. Chrome plated,matt finished",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HDSPA08091] HDSPA08091 DOUBLE OPEN END SPANNER 8X9mm.png",
                "url": "/website%20products/Hand%20Tools/Spanners/Double%20Open%20End%20Spanners/%5BHDSPA08091%5D%20HDSPA08091%20DOUBLE%20OPEN%20END%20SPANNER%208X9mm.png"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkspa1088---ingco-combination-spanner-set-8-pcs",
        "name": "HKSPA1088 - Ingco Combination Spanner Set (8 Pcs)",
        "description": "8pcs combination spanner set\nSize:6-19mm\n6mm,8mm,10mm,12mm,14mm,15mm,17mm,19mm\nFine polished\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "HKSPA1088.jfif",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA1088%20-%20Ingco%20Combination%20Spanner%20Set%20(8%20Pcs)/HKSPA1088.jfif"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkspa1142---ingco-combination-spanner-set-12-pcs",
        "name": "HKSPA1142 - Ingco Combination Spanner Set (12 Pcs)",
        "description": "12pcs combination spanner set\nSize:6-24mm\n6mm,8mm,10mm,11mm，12mm,13mm,14mm,15mm,17mm,19mm,22mm,24mm\nFine polished\nPacked by canvas bag",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "[HKSPA1142] HKSPA1142 12 PCS COMBINATION SPANNER SET (6-24MM).png",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA1142%20-%20Ingco%20Combination%20Spanner%20Set%20(12%20Pcs)/%5BHKSPA1142%5D%20HKSPA1142%2012%20PCS%20COMBINATION%20SPANNER%20SET%20(6-24MM).png"
            }
        ],
        "price": "4150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkspa1143---ingco-combination-spanner-set",
        "name": "HKSPA1143 - Ingco Combination Spanner Set",
        "description": "12pcs combination spanner set\nSize:6-32mm\n6mm,8mm,10mm,12mm,14mm,17mm,19mm,22mm,24mm,27mm,30mm,32mm\nFine polished\nPacked by canvas bag",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "HKSPA1143.jfif",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA1143%20-%20Ingco%20Combination%20Spanner%20Set/HKSPA1143.jfif"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkspa2088---ingco-8pcs-double-open-end-spanner-set",
        "name": "HKSPA2088 - Ingco 8Pcs Double open end spanner set",
        "description": "8pcs double open end spanner set\nSize:6-22mm\n6x7mm,8x9mm,10x11mm,12x13mm,\n14x15mm,16x17mm,18x19mm,20x22mm\nFine polished\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "HKSPA2088.jfif",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA2088%20-%20Ingco%208Pcs%20Double%20open%20end%20spanner%20set/HKSPA2088.jfif"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkspa3088---ingco-offser-ring-spanner-set-8-pcs",
        "name": "HKSPA3088 - Ingco Offser Ring Spanner Set (8 Pcs)",
        "description": "8pcs offset ring spanner set\nSize:6-22mm\n6x7mm,8x9mm,10x11mm,12x13mm,14x15mm,16x17mm,18x19mm,20x22mm\nFine polished\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "HKSPA3088.jfif",
                "url": "/website%20products/Hand%20Tools/Spanners/HKSPA3088%20-%20Ingco%20Offser%20Ring%20Spanner%20Set%20(8%20Pcs)/HKSPA3088.jfif"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "stmt25147---stanley-offset-ring-spanner-9-pcs",
        "name": "STMT25147 - Stanley Offset Ring Spanner (9 Pcs)",
        "description": "Compliance: All wrenches exceed ASME. ISO and DIN standards\nErgonomic handle with 15 degree orientation\nBig Marking. Nice finish in open-end jaw.\nMaxi Drive: 45 degree offset angle",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "5dba65aac368fc7e8b6f896646de3ef4ec16154dfbf080c7421e63f07a511084.webp",
                "url": "/website%20products/Hand%20Tools/Spanners/STMT25147%20-%20Stanley%20Offset%20Ring%20Spanner%20(9%20Pcs)/5dba65aac368fc7e8b6f896646de3ef4ec16154dfbf080c7421e63f07a511084.webp"
            }
        ],
        "price": "7200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1022121--total-combination-spanner-set-12-pcs",
        "name": "THT1022121- Total Combination Spanner Set (12 Pcs)",
        "description": "Model no.\tTHT1022121\nDimensions\t47cm * 12cm * 8cm\nMaterial\tChromium-vanadium steel (Cr-V)\nSize\t6mm, 8mm, 10mm, 11mm, 12mm, 13mm, 14mm, 15mm, 17mm, 19mm, 22mm, 24mm",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "THT1022121.jpg",
                "url": "/website%20products/Hand%20Tools/Spanners/THT1022121-%20Total%20Combination%20Spanner%20Set%20(12%20Pcs)/THT1022121.jpg"
            }
        ],
        "price": "4500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1022122---total-combination-spanner-set",
        "name": "THT1022122 - Total Combination Spanner Set",
        "description": "12pcs combination spanner set\nSize:6-32mm\n6mm,8mm,10mm,12mm,14mm,17mm,19mm,22mm,24mm,27mm,30mm,32mm\nFine polished\nPacked by canvas bag",
        "category": "Hand Tools",
        "subcategory": "Spanners",
        "images": [
            {
                "name": "THT1022122.jpg",
                "url": "/website%20products/Hand%20Tools/Spanners/THT1022122%20-%20Total%20Combination%20Spanner%20Set/THT1022122.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht102286---total-8-pcs-combination-spanner-set",
        "name": "THT102286 - Total 8 pcs Combination spanner set",
        "description": "Key Features\n\nSize: 6-19mm\n6mm\n8mm\n10mm\n12mm\n14mm\n15mm\n17mm\n19mm\nFinish: Fine polished\nPacked by: Plastic hanger",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsl28060---ingco-60cm-magnetic-spirit-level",
        "name": "HSL28060 - Ingco 60cm Magnetic Spirit Level",
        "description": "Length：60cm\nAluminum\nThickness:2.0mm\nWith magnetic\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "HSL28060.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/HSL28060%20-%20Ingco%2060cm%20Magnetic%20Spirit%20Level/HSL28060.jpg"
            }
        ],
        "price": "1350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsl38040m---ingco-40cm-magnetic-spirit-level",
        "name": "HSL38040M - Ingco 40cm Magnetic Spirit Level",
        "description": "Length:40cm\nDouble side milled\n0.5mm/m accurate vials\nThickness:1.5mm\n2 Pcs powerful magnets\nDouble flat surfaces design\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "HSL38040M.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/HSL38040M%20-%20Ingco%2040cm%20Magnetic%20Spirit%20Level/HSL38040M.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt210016---total-100cm-spirit-level",
        "name": "TMT210016 - Total 100cm Spirit Level",
        "description": "Length:100cm\nAluminum\nAluminum thickness:1mm\nUnique design\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "TMT210016.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/TMT210016%20-%20Total%20100cm%20Spirit%20Level/TMT210016.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt24036---total-40cm-spirit-level",
        "name": "TMT24036 - Total 40cm Spirit Level",
        "description": "Length：40cm\n2pcs cylinder spirit bulbs\nAluminum thickness:1mm\nPacked by color sleeve",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt26026---total-60cm-spirit-level",
        "name": "TMT26026 - Total 60cm Spirit Level",
        "description": "Length：60cm\n2pcs cylinder spirit bulbs\nAluminum thickness:1mm\nPacked by color sleeve",
        "category": "Hand Tools",
        "subcategory": "Spirit Levels",
        "images": [
            {
                "name": "TMT26036.jpg",
                "url": "/website%20products/Hand%20Tools/Spirit%20Levels/TMT26026%20-%20Total%2060cm%20Spirit%20Level/TMT26036.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hqsc0206---6-inch-spring-clamp",
        "name": "HQSC0206 - 6 inch Spring Clamp",
        "description": "Size:6\"\nLength：150mm\nClamping force:15KGS\nBlack clip body\nMax open mouth：68mm\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Spring Clamps",
        "images": [
            {
                "name": "HQSC0206.jpg",
                "url": "/website%20products/Hand%20Tools/Spring%20Clamps/HQSC0206%20-%206%20inch%20Spring%20Clamp/HQSC0206.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "6-tr110---stanley-heavy-duty-staple-gun",
        "name": "6-TR110 - Stanley Heavy Duty Staple Gun",
        "description": "Brand : Stanley\nStaple Size : 6 → 14mm\nStaple Leg Length : 6 → 14mm\nColour : Chrome Plated",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "Ecomm_Large-6-TR110_1.jpg",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/6-TR110%20-%20Stanley%20Heavy%20Duty%20Staple%20Gun/Ecomm_Large-6-TR110_1.jpg"
            }
        ],
        "price": "4200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "6-tr45---stanley-light-duty-staple-gun",
        "name": "6-TR45 - Stanley Light Duty Staple Gun",
        "description": "Material\tSteel\nCompatible Staples\tA-Type (Light Duty) [T50]\nLoading Mechanism (Staple Guns)\tBottom Loading\nCompatible Staple Size\t6, 8, 10 mm\nFastener Reload Indicator\tYes\nAnti-Jam Function\tYes",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "Ecomm_Large-6-TR45_2.jpg",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/6-TR45%20-%20Stanley%20Light%20Duty%20Staple%20Gun/Ecomm_Large-6-TR45_2.jpg"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl1313---deli-staple-gun-3-in-1",
        "name": "EDL1313 - Deli Staple Gun (3 in 1)",
        "description": "3 in 1 staple gun\nAdjustable driving force\nStaples: Wire: 1.2mm, Crown: 11.3mm, Length: 4-14mm\nU-Shape Staples: Wire: 1.2mm, Crown: 6.3mm, Length: 10-12mm\nBrad Nails: Wire:1.2mm, Length: 10-14mm\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "edl1313-3in1-staple-gun.webp",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/EDL1313%20-%20Deli%20Staple%20Gun%20(3%20in%201)/edl1313-3in1-staple-gun.webp"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "egu002---uyus-3-in-1-staple-gun",
        "name": "EGU002 - Uyus 3 in 1 Staple Gun",
        "description": "Type\t3-Way Staple Gun\nModel\tEGU002\nMaterial\tHigh-Quality Steel\nApplication\tDIY, Professional, Commercial\nStaple Directions\t3 Adjustable Angles",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsg14018---ingco-staple-gun",
        "name": "HSG14018 - Ingco Staple Gun",
        "description": "Staple gun\nAdjustable driving force\nWire:0.7mm\nCrown:11.3mm\nLength：4-14mm\nMatched with Staple items:\nSTS0108,STS0110 and STS0112\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "[HSG14018] HSG14018 STAPLE GUN.png",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/HSG14018%20-%20Ingco%20Staple%20Gun/%5BHSG14018%5D%20HSG14018%20STAPLE%20GUN.png"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsg1403---ingco-staple-gun",
        "name": "HSG1403 - Ingco Staple Gun",
        "description": "Staple gun\nAdjustable driving force\nWire:0.7mm\nCrown:11.3mm\nLength：4-14mm\nPacked by double blister\nMatch with STS0108/STS0110/STS0112",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "[HSG1403] HSG1403 STAPLE GUN.png",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/HSG1403%20-%20Ingco%20Staple%20Gun/%5BHSG1403%5D%20HSG1403%20STAPLE%20GUN.png"
            }
        ],
        "price": "1600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsg1408---ingco-staple-gun-2-in-1",
        "name": "HSG1408 - Ingco Staple Gun (2 in 1)",
        "description": "Heavy duty 2 In 1 staple gun\nTwo types of nails are available\nStaples:Wire:1.2mm,Crown:11.3mm,Length:4-14mm\nBrad Nails:Wire:1.2mm,Length:10-14mm\nWith 500pcs Staple\nWith 500pcs Brad Nails\nSoft three color handle\nMatched with Staple items:\nSTS0208,STS0210 and STS0212\nMatched with Brad Nails items:\nSTS6110\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Staple Guns",
        "images": [
            {
                "name": "[HSG1408] HSG1408 HEAVY DUTY 2 IN 1 STAPLE GUN.jfif",
                "url": "/website%20products/Hand%20Tools/Staple%20Guns/HSG1408%20-%20Ingco%20Staple%20Gun%20(2%20in%201)/%5BHSG1408%5D%20HSG1408%20HEAVY%20DUTY%202%20IN%201%20STAPLE%20GUN.jfif"
            }
        ],
        "price": "2700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsdt1408---ingco-140mm-electrical-tester",
        "name": "HSDT1408 - Ingco 140mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\nSlotted size: 3x140mm\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1408.jpg",
                "url": "/website%20products/Hand%20Tools/Testers/HSDT1408%20-%20Ingco%20140mm%20ELectrical%20Tester/HSDT1408.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsdt1908---ingco-190mm-electrical-tester",
        "name": "HSDT1908 - Ingco 190mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\nSlotted size: 4x190mm\nPacked by plastic hanger",
        "category": "Hand Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1908.jfif",
                "url": "/website%20products/Hand%20Tools/Testers/HSDT1908%20-%20Ingco%20190mm%20ELectrical%20Tester/HSDT1908.jfif"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "stht80891-0---stanley-tire-repair-kit",
        "name": "STHT80891-0 - Stanley Tire Repair Kit",
        "description": "Key Features & Components\nPurpose: Repairs tubeless tire punctures effectively.\nTools Included: Spiral probe, insertion tool, repair plugs (strings/strings), rubber cement, and a cutter.\nConvenience: Allows repair without dismounting the tire or wheel.\nPortability: Comes in a durable, compact carrying case.\nVehicles: Suitable for cars, motorcycles, and bicycles.",
        "category": "Hand Tools",
        "subcategory": "Tire Repair Kit",
        "images": [
            {
                "name": "Ecomm_Large-STHT80891-0_1.jpg",
                "url": "/website%20products/Hand%20Tools/Tire%20Repair%20Kit/STHT80891-0%20-%20Stanley%20Tire%20Repair%20Kit/Ecomm_Large-STHT80891-0_1.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hbt618---ingco-bricklaying-trowel-6x150mm",
        "name": "HBT618 - Ingco Bricklaying Trowel (6x150mm)",
        "description": "Size: 6\"/150mm\nDiameter of connecting rod:9.5mm\nunique design handle\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HBT618.jfif",
                "url": "/website%20products/Hand%20Tools/Trowels/HBT618%20-%20Ingco%20Bricklaying%20Trowel%20(6x150mm)/HBT618.jfif"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hbt818---ingco-bricklaying-trowel-8x200mm",
        "name": "HBT818 - Ingco Bricklaying Trowel (8x200mm)",
        "description": "Size: 8\"/200mm\nDiameter of connecting rod:9.5mm\nunique design handle\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HBT818.jfif",
                "url": "/website%20products/Hand%20Tools/Trowels/HBT818%20-%20Ingco%20Bricklaying%20Trowel%20(8x200mm)/HBT818.jfif"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hftt858---ingco-garden-trowel",
        "name": "HFTT858 - Ingco Garden Trowel",
        "description": "length:340mm\nUnique design patent handle\nWidth:85mm\nThickness:1.5mm\nMaterial:carbon steel\nPacked by paper card",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HFTT858.jpg",
                "url": "/website%20products/Hand%20Tools/Trowels/HFTT858%20-%20Ingco%20Garden%20Trowel/HFTT858.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hpt28138---ingco-plastering-trowel",
        "name": "HPT28138 - Ingco Plastering Trowel",
        "description": "Plastering trowel\nSize:280x130mm\nUnique design handle\nPacked by plastic bag",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HPT28138-i2_400x.webp",
                "url": "/website%20products/Hand%20Tools/Trowels/HPT28138%20-%20Ingco%20Plastering%20Trowel/HPT28138-i2_400x.webp"
            }
        ],
        "price": "950",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hptt23108---ingco-230x100mm-plastering-trowel",
        "name": "HPTT23108 - Ingco 230x100mm Plastering  Trowel",
        "description": "Size:230x100mm\nTeeth:10*6mm\nCarbon steel\nPacked by label",
        "category": "Hand Tools",
        "subcategory": "Trowels",
        "images": [
            {
                "name": "HPTT23108.jfif",
                "url": "/website%20products/Hand%20Tools/Trowels/HPTT23108%20-%20Ingco%20230x100mm%20Plastering%20%20Trowel/HPTT23108.jfif"
            }
        ],
        "price": "350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hput08100---ingco-4-inch-putty-trowel",
        "name": "HPUT08100 - Ingco 4 inch Putty Trowel",
        "description": "Size:100mm(4'')\nstainless steel\nHeat treatment\nFine polished\nDouble color plastic handle\nPacked by label",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht81286---total-plastering-trowel",
        "name": "THT81286 - Total Plastering Trowel",
        "description": "SPECIFICATIONS\nSIZE\t280 X 130mm\nMETERIAL HANDLE\tABS & TPR\nWEIGHT\t0.400 Kg",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "amwh6001---ingco-welding-magnet-set",
        "name": "AMWH6001 - Ingco Welding Magnet Set",
        "description": "Magnetic welding holder 6pcs set\nSpecifications:\n4pcs Mini Magnet\n2pcs 3\" Magnet\nPull Force:\nMini 10Lbs\n3\" 25Lbs\nProduct Dimensions per pcs：\nMini 70*42.5*12mm\n3\" 120*83*14.4mm\nWeight per pcs:\nMini 108g\n3\" 304g\nAngles: 45°,90°,135°\nMaterial: Magnet and Steel\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Welding Magnets",
        "images": [
            {
                "name": "[AMWH6001] AMWH6001 6PCS MAGNETIC WELDING HOLDER SET.jfif",
                "url": "/website%20products/Hand%20Tools/Welding%20Magnets/AMWH6001%20-%20Ingco%20Welding%20Magnet%20Set/%5BAMWH6001%5D%20AMWH6001%206PCS%20MAGNETIC%20WELDING%20HOLDER%20SET.jfif"
            }
        ],
        "price": "1150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl2607---deli-7-inch-wire-stripper",
        "name": "DL2607 - Deli 7 inch Wire Stripper",
        "description": "Strips wires from 0.6 to 2.6mm\nDurable construction for long-term use\nErgonomic handle for comfort\nBright yellow color for visibility\nSuitable for professional and DIY use",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwsp101---ingco-wire-stripper",
        "name": "HWSP101 - Ingco Wire Stripper",
        "description": "Size:10\"/254mm\nWith sharp edge for cutting wire\nWith push down wire function\nWith wire stripping function\nCan strip six kinds of wire size\nCan cut five kinds of copper screw size\nPacked by sliding card",
        "category": "Hand Tools",
        "subcategory": "Wire Stripper",
        "images": [
            {
                "name": "HWSP101.jfif",
                "url": "/website%20products/Hand%20Tools/Wire%20Stripper/HWSP101%20-%20Ingco%20Wire%20Stripper/HWSP101.jfif"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht15851---total-wire-stripper",
        "name": "THT15851 - Total Wire Stripper",
        "description": "SIZE\t215mm\nWEIGHT\t250gr\nPACKAGE\t12 PCS",
        "category": "Hand Tools",
        "subcategory": "Wire Stripper",
        "images": [
            {
                "name": "THT15851.jpg",
                "url": "/website%20products/Hand%20Tools/Wire%20Stripper/THT15851%20-%20Total%20Wire%20Stripper/THT15851.jpg"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl6203-ed1---deli-wood-chisel-set-3-pcs",
        "name": "DL6203-ED1 - Deli Wood Chisel Set (3 Pcs)",
        "description": "Blade material: carbon steel\nHandle material: PP + TPR\nBlade size: 12/19/25mm\nTotal length: 260mm\nColor: yellow/black",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "xlarge_20250722122008_c795c93c.jpeg",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/DL6203-ED1%20-%20Deli%20Wood%20Chisel%20Set%20(3%20Pcs)/xlarge_20250722122008_c795c93c.jpeg"
            }
        ],
        "price": "1650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0806---ingco-wood-chisel-6mm",
        "name": "HWC0806 - Ingco Wood Chisel (6mm)",
        "description": "Width:6mm(1/4\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0806] HWC0806 WOOD CHISEL 6MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0806%20-%20Ingco%20Wood%20Chisel%20(6mm)/%5BHWC0806%5D%20HWC0806%20WOOD%20CHISEL%206MM.jfif"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0809---ingco-wood-chisel-9mm",
        "name": "HWC0809 - Ingco Wood Chisel (9mm)",
        "description": "Width:9mm(3/8\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0809] HWC0809 WOOD CHISEL 9MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0809%20-%20Ingco%20Wood%20Chisel%20(9mm)/%5BHWC0809%5D%20HWC0809%20WOOD%20CHISEL%209MM.jfif"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0812---ingco-wood-chisel-12mm",
        "name": "HWC0812 - Ingco Wood Chisel (12mm)",
        "description": "Width:12mm(1/2\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0812] HWC0812 WOOD CHISEL 12MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0812%20-%20Ingco%20Wood%20Chisel%20(12mm)/%5BHWC0812%5D%20HWC0812%20WOOD%20CHISEL%2012MM.jfif"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0814---ingco-wood-chisel-14mm",
        "name": "HWC0814 - Ingco Wood Chisel (14mm)",
        "description": "Width:14mm(9/16\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0814] HWC0814 WOOD CHISEL 14MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0814%20-%20Ingco%20Wood%20Chisel%20(14mm)/%5BHWC0814%5D%20HWC0814%20WOOD%20CHISEL%2014MM.jfif"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0816---ingco-wood-chisel-16mm",
        "name": "HWC0816 - Ingco Wood Chisel (16mm)",
        "description": "Width:16mm(5/8\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0816] HWC0816 WOOD CHISEL 16MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0816%20-%20Ingco%20Wood%20Chisel%20(16mm)/%5BHWC0816%5D%20HWC0816%20WOOD%20CHISEL%2016MM.jfif"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0819---ingco-wood-chisel-19mm",
        "name": "HWC0819 - Ingco Wood Chisel (19mm)",
        "description": "Width:19mm(3/4\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0819] HWC0819 WOOD CHISEL 19MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0819%20-%20Ingco%20Wood%20Chisel%20(19mm)/%5BHWC0819%5D%20HWC0819%20WOOD%20CHISEL%2019MM.jfif"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0822---ingco-wood-chisel-22mm",
        "name": "HWC0822 - Ingco Wood Chisel (22mm)",
        "description": "Width:22mm(7/8\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0822] HWC0822 WOOD CHISEL 22MM.png",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0822%20-%20Ingco%20Wood%20Chisel%20(22mm)/%5BHWC0822%5D%20HWC0822%20WOOD%20CHISEL%2022MM.png"
            }
        ],
        "price": "650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hwc0825---ingco-wood-chisel-25mm",
        "name": "HWC0825 - Ingco Wood Chisel (25mm)",
        "description": "Width:25mm(1\")\nLength:140mm\nWood Chisel,Cr-V\nPacked by double blister",
        "category": "Hand Tools",
        "subcategory": "Wood Chisels",
        "images": [
            {
                "name": "[HWC0825] HWC0825 WOOD CHISEL 25MM.jfif",
                "url": "/website%20products/Hand%20Tools/Wood%20Chisels/HWC0825%20-%20Ingco%20Wood%20Chisel%20(25mm)/%5BHWC0825%5D%20HWC0825%20WOOD%20CHISEL%2025MM.jfif"
            }
        ],
        "price": "800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thysw101214---total-y-type-socket-wrench",
        "name": "THYSW101214 - Total Y-Type Socket Wrench",
        "description": "Size : 10-12-14mm\nEach bar length:145mm\nSocket Material:CR-V\nsurface:chrome-plated\nPacked by Paper card",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl515180---deli-insulated-bilhook-cable-stripping-knife",
        "name": "DL515180 - Deli Insulated Bilhook Cable Stripping Knife",
        "description": "Insulated dismantling knife\n1000V, VDE/GS certification\nSize: 50x180mm\nManufactured according to EN60900\nStainless steel blade\nPacked by blister card",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "dl515180-insulated-billhook-cable-stripping-knife.webp",
                "url": "/website%20products/Insulated%20Tools/DL515180%20-%20Deli%20Insulated%20Bilhook%20Cable%20Stripping%20Knife/dl515180-insulated-billhook-cable-stripping-knife.webp"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl515185---deli-insulated-straight-cable-knife",
        "name": "DL515185 - Deli Insulated Straight Cable Knife",
        "description": "Purpose: A 185mm professional, VDE/GS certified insulated knife for cutting/stripping cables in live electrical environments.\nSafety: Features a 1000V insulated handle and stainless steel blade.\nUsage: Designed for electricians, with a 50x185mm size.",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "download-2025-01-19T134650.409.webp",
                "url": "/website%20products/Insulated%20Tools/DL515185%20-%20Deli%20Insulated%20Straight%20Cable%20Knife/download-2025-01-19T134650.409.webp"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl512003t---deli-insulated-pliers-set-3-pcs",
        "name": "EDL512003T - Deli Insulated Pliers Set (3 Pcs)",
        "description": "3PC. pliers\nMaterial:Cr-V+TPE\nInsulated handle\nStand high pressure:1000V\nVDE,GS,IEC60900\nPacked by double blister\nIncludes:\n(1) 8in. Linesman plier\n(1) 6in. Long nose plier\n(1) 6in. Diagonal plier",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "1_734b7967-afe8-4ff9-aab8-51f0dce37f1e.webp",
                "url": "/website%20products/Insulated%20Tools/EDL512003T%20-%20Deli%20Insulated%20Pliers%20Set%20(3%20Pcs)/1_734b7967-afe8-4ff9-aab8-51f0dce37f1e.webp"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl512008---insulated-labor-saving-combination-pliers-8",
        "name": "EDL512008 - Insulated Labor-Saving Combination Pliers (8'')",
        "description": "Material Cr-V\n\nThe product has passed VDE certification to withstand voltage of 1000V\nCutting edge heat treatment\nDual-color encapsulated insulated plastic handle\nBlackening and polishing surface treatment",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "edl512008-insulated-labor-saving-combination-pliers.webp",
                "url": "/website%20products/Insulated%20Tools/EDL512008%20-%20Insulated%20Labor-Saving%20Combination%20Pliers%20(8'')/edl512008-insulated-labor-saving-combination-pliers.webp"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl512108---deli-insulated-labour-saving-long-nose-pliers",
        "name": "EDL512108 - Deli Insulated Labour Saving Long Nose Pliers",
        "description": "Size: 8\"/200mm\nBlack finish and polish\nInsulated handle\nStand high pressure:1000V\nPacked by half double blister",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "edl512108-insulated-labor-saving-long-nose-pliers.webp",
                "url": "/website%20products/Insulated%20Tools/EDL512108%20-%20Deli%20Insulated%20Labour%20Saving%20Long%20Nose%20Pliers/edl512108-insulated-labor-saving-long-nose-pliers.webp"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl512207---deli-insulated-labour-saving-heavy-duty-cutting-pliers",
        "name": "EDL512207 - Deli Insulated Labour Saving Heavy Duty Cutting Pliers",
        "description": "Material: Cr-V steel, PP & TPR handle\nSize: 7 inches\nCertification: VDE certified for 1000V\nHandle: Dual-color encapsulated insulated plastic\nSurface Treatment: Blackened and polished\nPackage Type: Blister Card",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "1_15__2.webp",
                "url": "/website%20products/Insulated%20Tools/EDL512207%20-%20Deli%20Insulated%20Labour%20Saving%20Heavy%20Duty%20Cutting%20Pliers/1_15__2.webp"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl515006---deli-insulated-wire-stripping-pliers",
        "name": "EDL515006 - Deli Insulated Wire Stripping Pliers",
        "description": "Size: 6\"/160mm\nBlack finish and polish\nInsulated handle\nStand high pressure:1000V\nPacked by half double blister",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "edl515006-insulated-wire-stripping-pliers.webp",
                "url": "/website%20products/Insulated%20Tools/EDL515006%20-%20Deli%20Insulated%20Wire%20Stripping%20Pliers/edl515006-insulated-wire-stripping-pliers.webp"
            }
        ],
        "price": "1150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl515106---deli-insulated-cable-cutter",
        "name": "EDL515106 - Deli Insulated Cable Cutter",
        "description": "Size: 6\"/160mm\nBlack finish and polish\nInsulated handle\nStand high pressure:1000V\nPacked by half double blister",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "edl515106-insulated-cable-cutter-6.webp",
                "url": "/website%20products/Insulated%20Tools/EDL515106%20-%20Deli%20Insulated%20Cable%20Cutter/edl515106-insulated-cable-cutter-6.webp"
            }
        ],
        "price": "1300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl5161501---insulated-slotted-screwdriver-65-x-150mm",
        "name": "EDL5161501 - Insulated Slotted Screwdriver (6.5 x 150mm)",
        "description": "Insulated screwdriver\n1000V,VDE+GS Certification\nSL6.5×150mm\nCr-V,Round shank\nNew design handle\nPacked by plastic hanger",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "edl5161501-insulated-slotted-screwdriver.webp",
                "url": "/website%20products/Insulated%20Tools/EDL5161501%20-%20Insulated%20Slotted%20Screwdriver%20(6.5%20x%20150mm)/edl5161501-insulated-slotted-screwdriver.webp"
            }
        ],
        "price": "400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl518150---insulated-phillips-screwdriver-ph3-x-150mm",
        "name": "EDL518150 - Insulated Phillips Screwdriver (PH3 x 150mm)",
        "description": "Insulated screwdriver\n1000V,VDE+GS Certification\nPH3*150mm\nCr-V,Round shank\nNew design handle\nPacked by plastic hanger",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "H7a01931747e54bdb9feaa94c0c3c8eceA.jpg",
                "url": "/website%20products/Insulated%20Tools/EDL518150%20-%20Insulated%20Phillips%20Screwdriver%20(PH3%20x%20150mm)/H7a01931747e54bdb9feaa94c0c3c8eceA.jpg"
            }
        ],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hiadw101---ingco-insulated-adjustable-wrench-10",
        "name": "HIADW101 - Ingco Insulated Adjustable Wrench (10'')",
        "description": "Insulated adjustable wrench\n1000V,VDE/GS Certification\nManufactured according to EN60900\nMaterial: chrome vanadium material\nChrome plated surface\nPacked by blister card",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "adj_-wrench-insulated_720x.webp",
                "url": "/website%20products/Insulated%20Tools/HIADW101%20-%20Ingco%20Insulated%20Adjustable%20Wrench%20(10'')/adj_-wrench-insulated_720x.webp"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hikps28318---ingco-insulated-pliers-set-3-pcs",
        "name": "HIKPS28318 - Ingco Insulated Pliers Set (3 Pcs)",
        "description": "Included Tools: 8\" (200mm) Insulated Combination Pliers, 6\" (160mm) Insulated Long Nose Pliers, 6\" (160mm) Insulated Diagonal Cutting Pliers.\nSafety Rating: 1000V insulation for live line working.\nMaterial: High-grade Chrome Vanadium (Cr-V) steel, polished and blackened for corrosion resistance.\nDesign: Ergonomic, two-color TPR (thermoplastic rubber) handles for improved grip and comfort.\nCompliance: IEC60900 / VDE certified.\nPackaging: Typically packed by PP hanger.",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HIKPS28318.jpg",
                "url": "/website%20products/Insulated%20Tools/HIKPS28318%20-%20Ingco%20Insulated%20Pliers%20Set%20(3%20Pcs)/HIKPS28318.jpg"
            }
        ],
        "price": "2250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkisd0608---ingco-insulated-screwdriver-set-6-pcs",
        "name": "HKISD0608 - Ingco Insulated Screwdriver Set (6 Pcs)",
        "description": "Safety Standards: VDE/GS certified for 1000V insulation.\nComponents: 3 Slotted and 3 Phillips screwdrivers with round shanks.\nDesign: Ergonomic handles, aluminum frame, and magnetic tips.\nPackaging: Usually packed by double blister.",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "download.jfif",
                "url": "/website%20products/Insulated%20Tools/HKISD0608%20-%20Ingco%20Insulated%20Screwdriver%20Set%20(6%20Pcs)/download.jfif"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkisd1008---ingco-interchangeable-insulated-screwdriver-set-10-pcs",
        "name": "HKISD1008 - Ingco Interchangeable Insulated Screwdriver Set (10 Pcs)",
        "description": "10 Pcs interchangeable Insulated\nscrewdriver set Include：\n8 Pcs Insulated Screwdriver Shank（1000V）： SL2.5*110mm\nSL3*110mm SL4*110mm SL5.5*110mm SL6.5*110mm\nPH0*110mm PH1*110mm",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HKISD1008.jpg",
                "url": "/website%20products/Insulated%20Tools/HKISD1008%20-%20Ingco%20Interchangeable%20Insulated%20Screwdriver%20Set%20(10%20Pcs)/HKISD1008.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkist3061---ingco-insulated-hand-tools-set-6-pcs",
        "name": "HKIST3061 - Ingco Insulated Hand Tools Set (6 Pcs)",
        "description": "6Pcs Insulated Handtools set\nINCLUDE:\n1 Pcs SL5.5x125mm Insulation screwdriver\n1 Pcs SL4.0x100mm Insulation screwdriver\n1 Pcs PH2x100mm Insulation screwdriver\n1 Pcs 7\" Insulated Combination Pliers\n1 Pcs 6\" Insulated Diagonal Cutting Pliers\n1 Pcs Test Pencil(Test voltage:100-500VAC)\nPacked by Double Blister",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HKIST3061.jpg",
                "url": "/website%20products/Insulated%20Tools/HKIST3061%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(6%20Pcs)/HKIST3061.jpg"
            }
        ],
        "price": "3080",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkith1601---ingco-insulated-hand-tools-set-16-pcs",
        "name": "HKITH1601 - Ingco Insulated Hand Tools Set (16 Pcs)",
        "description": "Description\n16 pieces Insulated hand tools set\n1 000V, VDE/GS Certification\n\nIncludes:\n1 piece 200 mm insulated combination pliers\n1 piece 200 mm insulated long nose pliers\n1 piece 160 mm insulated diagonal cutting pliers\n1 piece 160 mm insulated wire stripping pliers\n4 pieces insulated slotted screwdrivers: SL3 x 75 mm, SL4.0 x 100 mm, SL5.5 x 125 mm, SL6.5x150mm\n5 pieces insulated phillips screwdrivers: PH00 x 50 mm, PH0 x 60 mm; PH1 x 80 mm; PH2 x 100 mm; PH3 x 150 mm\n1 piece 30 x 70 mm voltage tester\n1 piece 50 x 180 mm cable knife\n1 piece vinyl electrical tape\nPacked by Unique design BMC + Colour box.",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HKITH1601.jpg",
                "url": "/website%20products/Insulated%20Tools/HKITH1601%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(16%20Pcs)/HKITH1601.jpg"
            }
        ],
        "price": "15500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktv01p051---ingco-insulated-hand-tools-set-5-pcs",
        "name": "HKTV01P051 - Ingco Insulated Hand Tools Set (5 Pcs)",
        "description": "Description\n5 Pcs Insulated hand tools set Include：\n1 Pcs 7\" Insulated Combination\nPliers\n1 Pcs 6\" Insulated Diagonal Cutting Pliers\n1 Pcs 6” Insulated Long Nose Pliers 1 Pcs 6\" Insulated Wire Stripping Pliers\n1 Pcs Test Pencil（Test voltage：100-500VAC）",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HKTV01P051.webp",
                "url": "/website%20products/Insulated%20Tools/HKTV01P051%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(5%20Pcs)/HKTV01P051.webp"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktv01s101---ingco-insulated-hand-tools-set-10-pcs",
        "name": "HKTV01S101 - Ingco Insulated Hand Tools Set (10 Pcs)",
        "description": "Key Features:\n\n1 Pc SL3.0x75mm Screwdriver\n1 Pc SL4.0x100mm Screwdriver\n1 Pc SL5.5x125mm Screwdriver\n1 Pc SL6.5x150mm Screwdriver\n1 Pc PH0x60mm Screwdriver\n1 Pc PH1x80mm Screwdriver\n1 Pc PH2x100mm Screwdriver\n1 Pc PZ1x80mm Screwdriver\n1 Pc PZ2x100mm Screwdriver\n1 Pc Test Pencil: Test Voltage 100-500VAC",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "HKTV01S101-i1_400x.webp",
                "url": "/website%20products/Insulated%20Tools/HKTV01S101%20-%20Ingco%20Insulated%20Hand%20Tools%20Set%20(10%20Pcs)/HKTV01S101-i1_400x.webp"
            }
        ],
        "price": "3500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-21152---yato-8-inch-insulated-combination-pliers",
        "name": "YT-21152 - Yato 8 inch Insulated Combination Pliers",
        "description": "7-inch insulated combination pliers for electrical work\nInsulated handles for protection against electrical shock (up to 1000V)\nMade from high-quality chrome vanadium steel\nCombination of cutting edges and gripping jaws for versatility\nSuitable for a wide range of electrical tasks\nDurable construction for long-lasting performance\nComfortable grip for extended use",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "21152-png.webp",
                "url": "/website%20products/Insulated%20Tools/YT-21152%20-%20Yato%208%20inch%20Insulated%20Combination%20Pliers/21152-png.webp"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-2827---yato-insulated-screwdriver-set",
        "name": "YT-2827 - Yato Insulated Screwdriver Set",
        "description": "Set of 5 insulated screwdrivers for electrical work\nInsulated handles for protection against electric shock (up to 1000V)\nMade from high-quality chrome vanadium steel\nMagnetic tip for easy handling of screws\nSuitable for use with live wires\nIncludes a range of sizes for various applications\nComes in a convenient storage case for easy organization and transport",
        "category": "Insulated Tools",
        "subcategory": "Insulated Tools",
        "images": [
            {
                "name": "2827_2Png_zp.png",
                "url": "/website%20products/Insulated%20Tools/YT-2827%20-%20Yato%20Insulated%20Screwdriver%20Set/2827_2Png_zp.png"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ecn212---uyus-305mm-12-inch-machinists-angle-square",
        "name": "ECN212 - Uyus 305mm (12-inch) Machinist's Angle Square",
        "description": "Material & Precision: Durable construction for industrial or workshop use.\nLocking Mechanism: Enables the blade to be fixed at specific lengths for consistent, repeated measurements.\nPurpose: Ideal for checking 90-degree angles and marking, common in metalworking and woodworking projects.\nSize: 12 inches (305 mm).",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl4041y---deli-triangle-carpenter-square-18cm",
        "name": "EDL4041Y - Deli Triangle Carpenter Square (18cm)",
        "description": "Product Name: Triangle Carpenter Square\nSize: 18cm\nMaterial: Aluminum\nScale Type: Dual Metric & Inch\nEdge Design: Beveled for Easy Reading\nGradation Type: Easy-to-read Gradations\nAngles Measured: 90° & 45°\nMaterial Feature: Lightweight High-impact Structural",
        "category": "Measuring Tools",
        "subcategory": "Angle Squares (T Squares)",
        "images": [
            {
                "name": "Deli_EDL4041Y-i1_167x.webp",
                "url": "/website%20products/Measuring%20Tools/Angle%20Squares%20(T%20Squares)/EDL4041Y%20-%20Deli%20Triangle%20Carpenter%20Square%20(18cm)/Deli_EDL4041Y-i1_167x.webp"
            }
        ],
        "price": "700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "has20202---ingco-angle-square",
        "name": "HAS20202 - Ingco Angle Square",
        "description": "Size:18cm\nmaterial：ABS\nOnly metric\nBeveled edge for ease of reading\nEasy-to-read gradations\nBase enable easy marking and cutting\nLightweight &amp; high-impact structural material\nPacked by label",
        "category": "Measuring Tools",
        "subcategory": "Angle Squares (T Squares)",
        "images": [
            {
                "name": "[HAS20202] HAS20202 ANGLE SQUARE.png",
                "url": "/website%20products/Measuring%20Tools/Angle%20Squares%20(T%20Squares)/HAS20202%20-%20Ingco%20Angle%20Square/%5BHAS20202%5D%20HAS20202%20ANGLE%20SQUARE.png"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt61126---total-angle-square",
        "name": "TMT61126 - Total Angle Square",
        "description": "Length:300mm(12\")\nBlade Width:40mm\nBlade Thickness:1.5mm\nStainless steel blade\nWith unique support ledge\nHigh-impact polymer handle\nMarking point for pencil\nPacked by paper card",
        "category": "Measuring Tools",
        "subcategory": "Angle Squares (T Squares)",
        "images": [
            {
                "name": "TMT61126.jpg",
                "url": "/website%20products/Measuring%20Tools/Angle%20Squares%20(T%20Squares)/TMT61126%20-%20Total%20Angle%20Square/TMT61126.jpg"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dcm100014---ingco-digital-ac-clamp-meter-6000-counts",
        "name": "DCM100014 - Ingco DIGITAL AC CLAMP METER 6000 COUNTS",
        "description": "Display :6000 counts\nLCD with backlight\nAC Current: 60A/600A/1000A\nAC Voltage:600mV/6V/60V/600V/750V\nDC Voltage:600mV/6V/60V/600V/1000V\nResistance: 600Ω/6kΩ/60kΩ/600kΩ/6MΩ/60MΩ\nCapacitance:10nf/100nf/1000nf/10μF/100μF/1000μF/10mf/100mf\nFrequency:10Hz/100Hz/1000Hz/10KHz/100KHz/1000KHz/10MHz\nDuty cycle: 1%~99%\nTemperature: -20~1000℃(-8~1832°F)\nNon-contact voltage detection\nDiode test\nData Hold\nLow battery indication\nAuto power off\nWith flash light function\nPacked by double blister",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "[DCM100014] DCM100014 DIGITAL AC CLAMP METER 6000 COUNTS.jfif",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/DCM100014%20-%20Ingco%20DIGITAL%20AC%20CLAMP%20METER%206000%20COUNTS/%5BDCM100014%5D%20DCM100014%20DIGITAL%20AC%20CLAMP%20METER%206000%20COUNTS.jfif"
            }
        ],
        "price": "8500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dcm2001---ingco-digital-ac-clamp-meter-2000-counts",
        "name": "DCM2001 - Ingco DIGITAL AC CLAMP METER 2000 COUNTS",
        "description": "Display :2000 counts\nAC Current:2A/20A/200A\nAC Voltage:2V/20V/200V/600V\nDC Voltage:200mV/2V/20V/200V/600V\nResistance: 200Ω/2kΩ/20kΩ/200kΩ/2MΩ/20MΩ\nData Hold\nDiode test\ndate hold\nLow battery indication\nAuto power off\nPacked by color box",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "[DCM2001] DCM2001 DIGITAL AC CLAMP METER 2000 COUNTS.jfif",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/DCM2001%20-%20Ingco%20DIGITAL%20AC%20CLAMP%20METER%202000%20COUNTS/%5BDCM2001%5D%20DCM2001%20DIGITAL%20AC%20CLAMP%20METER%202000%20COUNTS.jfif"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt42002---total-ac-clamp-meter-2000-count",
        "name": "TMT42002 - Total AC Clamp Meter (2000 Count)",
        "description": "2000 Counts\nData Hold\nAC Current:2A/20A/200A/±(2.5% +8)\nAC Voltage:0.1~600V±(1.0% +5)\nDC Voltage:0.1~600V±(0.5% +5)\nResistance:2kΩ/20kΩ±(1.0% +3)\nPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt423---clamp-meter-test-leads",
        "name": "TMT423 - Clamp Meter Test Leads",
        "description": "Length:100cm\nPen length:143mm\nSuitable for all multimeter and clamp meter(Except TMT460013)\nPacked by paper hanger",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt46003---total-ac-clamp-meter-6000-count",
        "name": "TMT46003 - Total AC clamp meter (6000 count)",
        "description": "Data Hold\nDisplay :6000 counts\nLCD with double color backlight\nAC Current:4A/40A/400A/600A\nAC Voltage:4V/40V/400V/600V\nDC Voltage:400mV/4V/40V/400V/600V\nResistance: 400Ω/4kΩ/40kΩ/400kΩ/4MΩ/40MΩ\nCapacitance:4nf/40nf/400nf/4μF/40μF/400μF/4mf\nNon-contact voltage detection\nDiode test\nAuto power off\nWith backlight function\nWith flash light function\nWith lower battery indication function\nWith 2pcs LR03 AAA batteries\nPacked by color box",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "TMT46003.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/TMT46003%20-%20Total%20AC%20clamp%20meter%20(6000%20count)/TMT46003.jpg"
            }
        ],
        "price": "4500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ut201---uni-t-clamp-meter",
        "name": "UT201 - Uni-T Clamp Meter",
        "description": "True RMS\nLCD backlight\nLarge screen and display digits\n60mF large capacitance measurement (UT202A+/UT204+)\nNeutral/live wire test (UT202A+/UT204+)",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "UT204_1.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/UT201%20-%20Uni-T%20Clamp%20Meter/UT204_1.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ut2078---uni-t-clamp-meter",
        "name": "UT2078 - Uni-T Clamp Meter",
        "description": "Flashlight button: Short press this button to turn on/oﬀ the flashlight\nNCV Multi-Segment Display and audio/visual alarm\nTrue RMS/Auto backlight\nNCV/Function retention",
        "category": "Measuring Tools",
        "subcategory": "Clamp Meters",
        "images": [
            {
                "name": "UT205E_1.jpg",
                "url": "/website%20products/Measuring%20Tools/Clamp%20Meters/UT2078%20-%20Uni-T%20Clamp%20Meter/UT205E_1.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm-25---bosch-25m-laser-distance-detector",
        "name": "GLM 25 - Bosch 25m Laser Distance Detector",
        "description": "Laser diode 635 nm, < 1 mW\nMeasurement range 0.150 – 25.000 m\nMeasuring range, up to 25 m\nWeight, approx. 0.09 kg\nMeasurement time, typical 0.5 s\nLaser class 2\nMeasurement accuracy, typical ± 2.0 mm\nMeasurement time, max. 4.2 s\nPower supply 2 x 1.5 V LR03 (AAA)\nAutomatic deactivation 5 min\nUnits of measurement m/cm/mm/ft/inch/ft-inch\nLaser colour Red",
        "category": "Measuring Tools",
        "subcategory": "Laser Distance Detectors",
        "images": [
            {
                "name": "o391272v54_GLM_25-23_on_dyn.png",
                "url": "/website%20products/Measuring%20Tools/Laser%20Distance%20Detectors/GLM%2025%20-%20Bosch%2025m%20Laser%20Distance%20Detector/o391272v54_GLM_25-23_on_dyn.png"
            }
        ],
        "price": "5300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "glm-40---bosch-40m-laser-distance-detector",
        "name": "GLM 40 - Bosch 40m Laser Distance Detector",
        "description": "Laser diode 635 nm, < 1 mW\nMeasurement range 0.150 – 40.000 m\nMeasuring range, up to 40 m\nWeight, approx. 0.09 kg\nMeasurement time, typical 0.5 s\nLaser class 2\nMeasurement accuracy, typical ± 1.5 mm\nMeasurement time, max. 4 s\nPower supply 2 x 1.5 V LR03 (AAA)\nAutomatic deactivation 5 min\nUnits of measurement m/cm/mm/ft/inch/ft-inch\nLaser colour Red",
        "category": "Measuring Tools",
        "subcategory": "Laser Distance Detectors",
        "images": [
            {
                "name": "o337111v54_GLM_40_SKU-0601072900.webp",
                "url": "/website%20products/Measuring%20Tools/Laser%20Distance%20Detectors/GLM%2040%20-%20Bosch%2040m%20Laser%20Distance%20Detector/o337111v54_GLM_40_SKU-0601072900.webp"
            }
        ],
        "price": "15300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mdl060---uyus-60m-laser-distance-detector",
        "name": "MDL060 - Uyus 60m Laser Distance Detector",
        "description": "Measuring Range: 0.05-60M\nMeasuring Accuracy：±2mm\nLaser Type: 630Nm-670Nm, <1Mw\nOperating Temp:-10°C ~ +50°C\nStorage Temp:-20°C ~ +60°C\nHistoricalMeasurements:99 Values\nSplash Proof/ Dust Protected:Ip54\nAuto Shut Down After 150S\nBatteries:Aaa, 2X1.5V, Up To 8000 Measurements",
        "category": "Measuring Tools",
        "subcategory": "Laser Distance Detectors",
        "images": [
            {
                "name": "MDL060_5_400x.webp",
                "url": "/website%20products/Measuring%20Tools/Laser%20Distance%20Detectors/MDL060%20-%20Uyus%2060m%20Laser%20Distance%20Detector/MDL060_5_400x.webp"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gll-12-22-g-professional---bosch-laser-level-green-line",
        "name": "GLL 12-22 G Professional - Bosch Laser Level (Green Line)",
        "description": "Dust and splash protection IP 55\nWorking range, value 12 m\nAccuracy ± 0.6 mm/m\nColour of laser line green\nLaser diode 500 - 540 nm, < 5mW\nOperating temperature -10 – 40 °C\nStorage temperature -20 – 70 °C\nLaser class 2\nSelf-levelling range ± 3.5°\nLevelling time 6 s\nPower supply 2 x 1.5 V LR6 (AA), 3.7 V Li-Ion battery (1000 mAh)\nOperating time (max.) 8 h\nWeight, approx. 0.35 kg\nProjection 2 lines",
        "category": "Measuring Tools",
        "subcategory": "Laser Levels",
        "images": [
            {
                "name": "o410605v54_GLL_12-22_G_sos_0601065320.webp",
                "url": "/website%20products/Measuring%20Tools/Laser%20Levels/GLL%2012-22%20G%20Professional%20-%20Bosch%20Laser%20Level%20(Green%20Line)/o410605v54_GLL_12-22_G_sos_0601065320.webp"
            }
        ],
        "price": "10900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gll-12-22-professional---bosch-laser-level-red-line",
        "name": "GLL 12-22 Professional - Bosch Laser Level (Red Line)",
        "description": "Dust and splash protection\nIP 55\nWorking range, value\n12 m\nAccuracy ± 0.8 mm/m\nColour of laser line red\nLaser diode 630 – 650 nm, < 5mW\nOperating temperature -10 – 40 °C\nStorage temperature -20 – 70 °C\nLaser class 2\nSelf-levelling range ± 3.5°\nLevelling time 6 s\nPower supply 2 x 1.5 V LR6 (AA), 3.7 V Li-Ion battery (1000 mAh)\nOperating time (max.) 10 h\nWeight, approx. 0.35 kg\nProjection 2 lines",
        "category": "Measuring Tools",
        "subcategory": "Laser Levels",
        "images": [
            {
                "name": "o410603v54_GLL_12-22_sos_0601065220.webp",
                "url": "/website%20products/Measuring%20Tools/Laser%20Levels/GLL%2012-22%20Professional%20-%20Bosch%20Laser%20Level%20(Red%20Line)/o410603v54_GLL_12-22_sos_0601065220.webp"
            }
        ],
        "price": "9900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gll3-15-x---bosch-laser-level",
        "name": "GLL3-15 X - Bosch Laser Level",
        "description": "Working range, value 15 m\nWorking range with receiver 15 m\nAccuracy\nHorizontal laser line: ± 0.2 mm/m ; Vertical laser lines: ± 0.3 mm/m\nColour of laser line red\nLaser diode 630 – 650 nm, < 1mW\nOperating temperature -10 – 45 °C\nStorage temperature -20 – 70 °C\nLaser class 2\nWorking range of laser points, max. 5 m (bottom)\nSelf-levelling range ± 3°\nLevelling time 4 s\nPower supply 4 x 1.5 V LR6 (AA)\nOperating time (max.) 24 h\nWeight, approx. 0.72 kg\nColor of plumb points red\nProjection 3 lines + 1 plumb point\nPlumb point accuracy ± 0.7 mm/m",
        "category": "Measuring Tools",
        "subcategory": "Laser Levels",
        "images": [
            {
                "name": "o219047v54_hugll064.webp",
                "url": "/website%20products/Measuring%20Tools/Laser%20Levels/GLL3-15%20X%20-%20Bosch%20Laser%20Level/o219047v54_hugll064.webp"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsmt081025---ingco-steel-measuring-tape-10mx25mm",
        "name": "HSMT081025 - Ingco Steel Measuring Tape (10mx25mm)",
        "description": "Length & width:10mx25mm\nSelf lock function\nWith metric and inch\nDouble button\nUnique design\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Measuring Tapes",
        "images": [
            {
                "name": "[HSMT081025] HSMT081025 STEEL MEASURING TAPE 10M.jfif",
                "url": "/website%20products/Measuring%20Tools/Measuring%20Tapes/HSMT081025%20-%20Ingco%20Steel%20Measuring%20Tape%20(10mx25mm)/%5BHSMT081025%5D%20HSMT081025%20STEEL%20MEASURING%20TAPE%2010M.jfif"
            }
        ],
        "price": "850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsmt08519---ingco-steel-measuring-tape-5x19mm",
        "name": "HSMT08519 - Ingco Steel Measuring Tape (5x19mm)",
        "description": "Length &amp; width:5mx19mm\nSelf lock function\nWith metric and inch\nDouble button\nUnique design\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Measuring Tapes",
        "images": [
            {
                "name": "[HSMT08519] HSMT08519 STEEL MEASURING TAPE 5M.jfif",
                "url": "/website%20products/Measuring%20Tools/Measuring%20Tapes/HSMT08519%20-%20Ingco%20Steel%20Measuring%20Tape%20(5x19mm)/%5BHSMT08519%5D%20HSMT08519%20STEEL%20MEASURING%20TAPE%205M.jfif"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt126051---total-5m-x-19mm-steel-measuring-tape",
        "name": "TMT126051 - Total 5m x 19mm Steel Measuring Tape",
        "description": "Length & width:5mx19mm\nWith metric and inch\nWith 3 stop button function\nWith rubber cover\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Measuring Tapes",
        "images": [
            {
                "name": "TMT126051.jpg",
                "url": "/website%20products/Measuring%20Tools/Measuring%20Tapes/TMT126051%20-%20Total%205m%20x%2019mm%20Steel%20Measuring%20Tape/TMT126051.jpg"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt126081---total-8m-x-25mm-steel-measuring-tape",
        "name": "TMT126081 - Total 8m x 25mm Steel Measuring Tape",
        "description": "Length & width:8mx25mm\nWith metric and inch\nWith 3 stop button function\nWith rubber cover\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Measuring Tapes",
        "images": [
            {
                "name": "TMT126081.jpg",
                "url": "/website%20products/Measuring%20Tools/Measuring%20Tapes/TMT126081%20-%20Total%208m%20x%2025mm%20Steel%20Measuring%20Tape/TMT126081.jpg"
            }
        ],
        "price": "750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt134316---total-3m-x-16mm-steel-measuring-tape",
        "name": "TMT134316 - Total 3m x 16mm Steel Measuring Tape",
        "description": "Length & width:3mx16mm\nOne button\nWith metric and inch\nPure ABS material cover\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Measuring Tapes",
        "images": [
            {
                "name": "TMT34316.jpg",
                "url": "/website%20products/Measuring%20Tools/Measuring%20Tapes/TMT134316%20-%20Total%203m%20x%2016mm%20Steel%20Measuring%20Tape/TMT34316.jpg"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dm310002---ingco-1000v-multimeter",
        "name": "DM310002 - Ingco 1000v Multimeter",
        "description": "Display : TRUR RMS 6000 counts\nDC/AC Current: 6000uA/60mA/600mA/10A\nDC Voltage:600mV/6V/60V/600V/1000V\nAC Voltage:600mV/6V/60V/600V/750V\nResistance:600Ω/6kΩ/60kΩ/600kΩ/6MΩ/60MΩ\nCapacitance:10nF/100nF/1000nF/10uF/1000uF/10mF/100mF\nFrequency:10Hz/100Hz/1000Hz/10kHz/100kHz/1000kHz/10MHz\nDuty cycle: 1%~95% ±(2.0% +3)\nNon-contact voltage detection\nlive line or neutral Line distinguish\nDiode test\nMax/Min and Data hold With backlight function\nWith flash light function\nWith lower battery indication function\nWith input jack LED indicate\nWith 3pcs LR03 AAA batteries\nPacked by double blister",
        "category": "Measuring Tools",
        "subcategory": "Multimeters",
        "images": [
            {
                "name": "DM310002.jpg",
                "url": "/website%20products/Measuring%20Tools/Multimeters/DM310002%20-%20Ingco%201000v%20Multimeter/DM310002.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dm360011---ingco-600v-multimeter",
        "name": "DM360011 - Ingco 600v Multimeter",
        "description": "Display : TRUR RMS 2000 counts\nDC Voltage:200mV/2V/20V/200V/600V\nAC Voltage:20V/200V/600V\nResistance:200Ω/2kΩ/20kΩ/200kΩ/2MΩ/20MΩ\nDC Current:20mA/200mA/10A\nNon-contact voltage detection\nlive line or neutral Line distinguish\nDiode test\nMax/Min and Data hold\nWith backlight function\nWith flash light function\nWith lower battery indication function\nWith input jack LED indicate\nWith 2pcs R03 AAA batteries\nPacked by double blister",
        "category": "Measuring Tools",
        "subcategory": "Multimeters",
        "images": [
            {
                "name": "[DM360011] DM360011 DIGITAL MULTIMETER.jfif",
                "url": "/website%20products/Measuring%20Tools/Multimeters/DM360011%20-%20Ingco%20600v%20Multimeter/%5BDM360011%5D%20DM360011%20DIGITAL%20MULTIMETER.jfif"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tmt423---multimeter-test-leads",
        "name": "TMT423 - Multimeter Test Leads",
        "description": "Length:100cm\nPen length:143mm\nSuitable for all multimeter and clamp meter(Except TMT460013)\nPacked by paper hanger",
        "category": "Measuring Tools",
        "subcategory": "Multimeters",
        "images": [],
        "price": "500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ut31---uni-t-multimeter",
        "name": "UT31 - Uni-T Multimeter",
        "description": "Professional Multimeters from the Measuring Tools collection. High-quality engineering for reliable performance.",
        "category": "Measuring Tools",
        "subcategory": "Multimeters",
        "images": [],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ut33---uni-t-multimeter",
        "name": "UT33 - Uni-T Multimeter",
        "description": "Professional Multimeters from the Measuring Tools collection. High-quality engineering for reliable performance.",
        "category": "Measuring Tools",
        "subcategory": "Multimeters",
        "images": [],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsdt1408---ingco-140mm-electrical-tester",
        "name": "HSDT1408 - Ingco 140mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\nSlotted size: 3x140mm\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1408.jpg",
                "url": "/website%20products/Measuring%20Tools/Testers/HSDT1408%20-%20Ingco%20140mm%20ELectrical%20Tester/HSDT1408.jpg"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsdt1908---ingco-190mm-electrical-tester",
        "name": "HSDT1908 - Ingco 190mm ELectrical Tester",
        "description": "Test Voltage:AC 100-500V\nSlotted size: 4x190mm\nPacked by plastic hanger",
        "category": "Measuring Tools",
        "subcategory": "Testers",
        "images": [
            {
                "name": "HSDT1908.jfif",
                "url": "/website%20products/Measuring%20Tools/Testers/HSDT1908%20-%20Ingco%20190mm%20ELectrical%20Tester/HSDT1908.jfif"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gks-140---bosch-1400w-7-inch-circular-saw",
        "name": "GKS 140 - Bosch 1400w 7 inch Circular Saw",
        "description": "Additional data\n\nRated input power: 1400 W\nSaw blade diameter: 184 mm\nVoltage, electrical: 220 V\nNo-load speed: 6,200 rpm\nSaw blade bore diameter: 20 mm\nWeight: 3.7 kg\nBaseplate: 290 x 150 mm\nGuide rail compatible: No\nTotal vibration values (Wood sawing)\nVibration emission value ah: 2.4 m/s²\nUncertainty K: 1.5 m/s²\nWood sawing\nSALE 12500",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "GKS 140.webp",
                "url": "/website%20products/Monthly%20Offers/GKS%20140%20-%20Bosch%201400w%207%20inch%20Circular%20Saw/GKS%20140.webp"
            }
        ],
        "price": "14080",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hksd0628---ingco-6pcs-screwdriver-set",
        "name": "HKSD0628 - Ingco 6pcs Screwdriver Set",
        "description": "6 pcs screwdriver setnew design handle\nMaterial:CR-V\nRound blade\n1pcs SL5.5*5*75\n1pcs SL5.5*5*100\n1pcs SL6.5*6*150\n1pcs PH1*5*75\n1pcs PH1*5*100\n1pcs PH2*6*150\nPacked by double blister\n\nSALE 650",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "HKSD0628.jfif",
                "url": "/website%20products/Monthly%20Offers/HKSD0628%20-%20Ingco%206pcs%20Screwdriver%20Set/HKSD0628.jfif"
            }
        ],
        "price": "950",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht1022122---total-combination-spanner-set",
        "name": "THT1022122 - Total Combination Spanner Set",
        "description": "12pcs combination spanner set\nSize:6-32mm\n6mm,8mm,10mm,12mm,14mm,17mm,19mm,22mm,24mm,27mm,30mm,32mm\nFine polished\nPacked by canvas bag",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "THT1022122.jpg",
                "url": "/website%20products/Monthly%20Offers/THT1022122%20-%20Total%20Combination%20Spanner%20Set/THT1022122.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0141---total-plastic-tool-box-14-inches",
        "name": "TPBX0141 - Total Plastic Tool Box (14 Inches)",
        "description": "14\" Plastic Tool Box\nSize : 356mm(14\"\")*168mm（6.6\"\"）*160mm(6.3\"\")\nMaterial ：PP\nWeight : 720g\nPP plastic buckle\nMax Load : 10KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by label\n\nSALE 800",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "TPBX0141.jpg",
                "url": "/website%20products/Monthly%20Offers/TPBX0141%20-%20Total%20Plastic%20Tool%20Box%20(14%20Inches)/TPBX0141.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0171---total-plastic-tool-box-17-inches",
        "name": "TPBX0171 - Total Plastic Tool Box (17 Inches)",
        "description": "SPECIFICATIONS\nSize : 436mm(17\"\")*220mm（8.7\"\"）*205mm(8\"\")\nMaterial： PP\nweight：1390g\nPP plastic buckle\nMax Load : 15KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by carton box\n\nSALE 1850",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "TPBX0171.jpg",
                "url": "/website%20products/Monthly%20Offers/TPBX0171%20-%20Total%20Plastic%20Tool%20Box%20(17%20Inches)/TPBX0171.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0201---total-plastic-tool-box-20-inches",
        "name": "TPBX0201 - Total Plastic Tool Box (20 Inches)",
        "description": "20\" Plastic Tool Box\nSize : 508mm(20\"\")*296mm（11.7\"\"）*261mm(10.3\"\")\nMaterial ：PP\nWeight : 2150g\nPP plastic buckle\nMax Load : 20KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by label\n\nSALE 2850",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "TPBX0201.jpg",
                "url": "/website%20products/Monthly%20Offers/TPBX0201%20-%20Total%20Plastic%20Tool%20Box%20(20%20Inches)/TPBX0201.jpg"
            }
        ],
        "price": "3500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt4506---total-530w-electric-spray-gun",
        "name": "TT4506 - Total 530w Electric Spray Gun",
        "description": "High-performance electric spray gun for home, workshop, and DIY use\nOperates on standard 220–240V ~ 50/60Hz power supply\nPowerful 530W motor for consistent spraying performance\nHandles maximum viscosity up to 130 DIN-s for various liquids\nAdjustable spray amplitude for precise control and uniform coverage\nSuitable for blowing dust and light cleaning tasks\nLarge 1000ml container for extended spraying sessions\nPaint flow rate of 410ml/min for 50 DIN paint\nWater flow rate of 950ml/min for cleaning or other liquid applications\nIdeal for painting, varnishing, and coating projects\nLightweight and ergonomic design for ease of use\nEfficient and quick application for professional or DIY tasks\n\nSALE 4500",
        "category": "Monthly Offers",
        "subcategory": "Monthly Offers",
        "images": [
            {
                "name": "2.jpg",
                "url": "/website%20products/Monthly%20Offers/TT4506%20-%20Total%20530w%20Electric%20Spray%20Gun/2.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac20248---ingco-24l-air-compressor",
        "name": "AC20248 - Ingco 24L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 1.5 kW (2 HP)Tank:24L(6.3Gal)Noise:96db1000HR lifetime promiseAluminium wire motorPump lubricated with oilNo-load speed:2850rpmOperation pressure:max.8barPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "AC20248.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/AC20248%20-%20Ingco%2024L%20Air%20Compressor/AC20248.jpg"
            }
        ],
        "price": "31000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac25508---ingco-50l-air-compressor",
        "name": "AC25508 - Ingco 50L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2×1200W （3.2HP）Tank:100L(26.4Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "a2e72166a2ef41c2a34578045a571017.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/AC25508%20-%20Ingco%2050L%20Air%20Compressor/a2e72166a2ef41c2a34578045a571017.jpg"
            }
        ],
        "price": "32900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac301008---ingco-100l-air-compressor",
        "name": "AC301008 - Ingco 100L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2.2kW (3HP)Tank:100L(26.4Gal)Noise:92db3000Hr lifetime promiseAluminium wire motorBelt driving systemPump lubricated with oilNo-load speed:1100rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "AC301008.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/AC301008%20-%20Ingco%20100L%20Air%20Compressor/AC301008.jpg"
            }
        ],
        "price": "86500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs112501---ingco-50l-silent-and-oil-free-air-compressor",
        "name": "ACS112501 - Ingco 50L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power:1200W （1.6HP）Tank:50L(13.2Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "ACS112501.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/ACS112501%20-%20Ingco%2050L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS112501.jpg"
            }
        ],
        "price": "45000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs175241---ingco-24l-silent-and-oil-free-air-compressor",
        "name": "ACS175241 - Ingco 24L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2.2kW (3HP)Tank:100L(26.4Gal)Noise:92db3000Hr lifetime promiseAluminium wire motorBelt driving systemPump lubricated with oilNo-load speed:1100rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "ACS175241.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/ACS175241%20-%20Ingco%2024L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS175241.jpg"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs2241001---ingco-100l-silent-and-oil-free-air-compressor",
        "name": "ACS2241001 - Ingco 100L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2×1200W （3.2HP）Tank:100L(26.4Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "ACS2241001.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/ACS2241001%20-%20Ingco%20100L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS2241001.jpg"
            }
        ],
        "price": "84000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "atg0601---ingco-air-tire-inflating-gun",
        "name": "ATG0601 - Ingco Air Tire Inflating Gun",
        "description": "Max pressure:8.5Bar(120PSI)\nWith Europe type connector, USA type connector, Nitto type connector and Italy type connector.\nPacked by sliding card",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "ATG0601.jfif",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/ATG0601%20-%20Ingco%20Air%20Tire%20Inflating%20Gun/ATG0601.jfif"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fhcpk06---fixtec-air-compressor-set-6-pcs",
        "name": "FHCPK06 - Fixtec Air Compressor Set (6 Pcs)",
        "description": "-Quick and Easy Coupling: The air quick coupler allows for quick and effortless coupling and uncoupling of air tools and accessories. With a simple push-pull mechanism, you can easily connect the coupler to the plug, saving you time and effort during equipment changes.\n-1/4\" Universal Compatibility: This air plug kit features a 1/4\" size, which is a common fitting size in the air tool industry. It is compatible with a wide range of pneumatic tools, compressors and accessories, ensuring that you can easily attach and detach them without compatibility issues.\n-Durable Construction: The couplers and plugs in this kit are made from high-quality materials, ensuring durability and long-term use. The robust construction can withstand regular use and can handle the demands of various applications.\n1/4\"  Quick Coupler&Plug Kit is a kind of connector for air tools, which is suitable for Japanese, American and European connector.",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "FHCPK06-800-800-500x500.webp",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/FHCPK06%20-%20Fixtec%20Air%20Compressor%20Set%20(6%20Pcs)/FHCPK06-800-800-500x500.webp"
            }
        ],
        "price": "1000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "sp1760-m-uyus-spray-gun-600cc-17mm",
        "name": "SP1760-M Uyus Spray Gun (600cc) (1.7mm)",
        "description": "Material: Stainless Iron\nNozzle, Pvc Tank\nStandard Nozzle: 1.7mm\nPattern Width: 180-\n250mm\nPaint Capacity: 600Ml\nConnector: G1/4\"\nOptional Nozzle: 1.2-\n1.8mm\nOperating Pressure:\n3.0Kg/Cm2",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "1558984.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/SP1760-M%20Uyus%20Spray%20Gun%20(600cc)%20(1.7mm)/1558984.jpg"
            }
        ],
        "price": "4250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat10401---total-air-spray-gun-400cc-15mm",
        "name": "TAT10401 - Total Air Spray Gun (400cc) (1.5mm)",
        "description": "NOZZLE\t1.5mm\nOPERATING PRESSURE\t3 - 4 bar\nPAINT CAPACITY\t400cc\nWEIGHT\t0.79 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT10401.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT10401%20-%20Total%20Air%20Spray%20Gun%20(400cc)%20(1.5mm)/TAT10401.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat10601---total-air-spray-gun-600cc",
        "name": "TAT10601 - Total Air Spray Gun (600cc)",
        "description": "NOZZLE\t1.4mm\nPRESSURE\t2 - 3.5 bar\nPAINT CAPACITY\t600cc\nWEIGHT\t0.85 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT10601.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT10601%20-%20Total%20Air%20Spray%20Gun%20(600cc)/TAT10601.jpg"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat10605---total-lvmp-air-spray-gun-600cc",
        "name": "TAT10605 - Total LVMP Air Spray Gun (600cc)",
        "description": "NOZZLE\t1.3mm\nPRESSURE\t2 bar\nPAINT CAPACITY\t600cc\nWEIGHT\t0.85 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT10605.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT10605%20-%20Total%20LVMP%20Air%20Spray%20Gun%20(600cc)/TAT10605.jpg"
            }
        ],
        "price": "10000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat11005---total-air-spray-gun-1000cc",
        "name": "TAT11005 - Total Air Spray Gun (1000cc)",
        "description": "NOZZLE\t1.8mm\nOPERATING PRESSURE\t3 - 4 bar\nPAINT CAPACITY\t1.000cc\nWEIGHT\t0.9 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT11005.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT11005%20-%20Total%20Air%20Spray%20Gun%20(1000cc)/TAT11005.jpg"
            }
        ],
        "price": "2850",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat11601---total-tire-inflating-gun",
        "name": "TAT11601 - Total Tire Inflating Gun",
        "description": "Air tire inflating gun\nMax pressure:8.5Bar(120PSI)\nWith Europe type connector, USA type connector, Nitto type connector and Italy type connector.\nPacked by sliding card",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT11601.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT11601%20-%20Total%20Tire%20Inflating%20Gun/TAT11601.jpg"
            }
        ],
        "price": "2250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat20751---total-washing-gun-750cc",
        "name": "TAT20751 - Total Washing Gun (750cc)",
        "description": "WASHING CAPACITY\t0.75 Lit\nPRESSURE\t4 bar\nWEIGHT\t0.65 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT20751.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT20751%20-%20Total%20Washing%20Gun%20(750cc)/TAT20751.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat40122---total-air-impact-wrench-12mm-610nm",
        "name": "TAT40122 - Total Air Impact Wrench (12mm) (610Nm)",
        "description": "SPECIFICATIONS\nMax TORQUE\t610 Nm\nAIR CONSUMPTION\t142.5 Lit / min\nAIR PRESSURE\t6.2 bar\nFREE SPEED\t7.000 rpm / min\nLENGTH\t187mm\nAIR HOSE\t3/8\"\nWEIGHT\t2.6 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT40122.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT40122%20-%20Total%20Air%20Impact%20Wrench%20(12mm)%20(610Nm)/TAT40122.jpg"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tat81501---total-air-nailer--stapler-2-in-1",
        "name": "TAT81501 - Total Air Nailer & Stapler (2 in 1)",
        "description": "OPERATING PRESSURE\t4 - 7 bar\nAIR FLOW\t0.66 Lit / SHOUT\nSTAPLE CROWN\t5.7mm\nSTAPLE SIZE\t16 - 40mm\nBRAD SIZE\t15 - 50mm GA18\nMAGAZINE CAPACITY\t100 PCS\nWEIGHT\t2.85 Kg\nWARRANTY\t1 YEAR",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TAT81501.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TAT81501%20-%20Total%20Air%20Nailer%20%26%20Stapler%20(2%20in%201)/TAT81501.jpg"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tatk053---total-air-tools-set-5-pcs",
        "name": "TATK053 - Total Air Tools Set (5 Pcs)",
        "description": "Air tools 5pcs set\nOnly with Europe type connector.\nRecoil hose\nLength:4m,Diameter:8mm\nAir blow gun\nNozzle length:16mm\nAir spray gun\nOperating pressure:3-4bar\nPaint capacity:600cc\nPattern width:180-250mm\nAir washing gun\nOperation pressure:4bar\nWashing capacity:750cc\nAir tire inflating gun\nMax pressure:12Bar\nPacked by color box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TATK053.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TATK053%20-%20Total%20Air%20Tools%20Set%20(5%20Pcs)/TATK053.jpg"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tc202416---total-air-compressor-24l-2hp",
        "name": "TC202416 - Total Air Compressor (24L) (2HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 1.5 kW (2 HP)\nTank:24L(6.3Gal)\nNoise:96db\nPump lubricated with oil\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TC202416-_24_2_8.webp",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TC202416%20-%20Total%20Air%20Compressor%20(24L)%20(2HP)/TC202416-_24_2_8.webp"
            }
        ],
        "price": "17500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tc255016---total-air-compressor-50l-15hp",
        "name": "TC255016 - Total Air Compressor (50L) (1.5HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 1.8kW(2.5HP)\nTank:50L(13.2Gal)\nNoise:96db\nPump lubricated with oil\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TC255016-1.webp",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TC255016%20-%20Total%20Air%20Compressor%20(50L)%20(1.5HP)/TC255016-1.webp"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs1110242---total-silent-air-compressor-24l-15hp",
        "name": "TCS1110242 - Total Silent Air Compressor (24L) (1.5HP)",
        "description": "Voltage:220-240V~60Hz(BS Plug)\nInput power: 1100W(1.5HP)\nTank:24L(6.3Gal)\nOil free system\nNoise: 67db\nAluminium wire motor\nNo-load speed:3400rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TCS1110242-85.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TCS1110242%20-%20Total%20Silent%20Air%20Compressor%20(24L)%20(1.5HP)/TCS1110242-85.jpg"
            }
        ],
        "price": "22000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs1120508---total-silent-air-compressor-50l-16hp",
        "name": "TCS1120508 - Total Silent Air Compressor (50L) (1.6HP)",
        "description": "Voltage:220-240V~50Hz\nInput power:1200W （1.6HP）\nTank:50L(13.2Gal)\nOil free system\nNoise: 75db\nCopper wire motor\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TCS1120508.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TCS1120508%20-%20Total%20Silent%20Air%20Compressor%20(50L)%20(1.6HP)/TCS1120508.jpg"
            }
        ],
        "price": "34250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs2241008---total-silent-air-compressor-100l-32hp",
        "name": "TCS2241008 - Total Silent Air Compressor (100L) (3.2HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 2×1200W （3.2HP）\nTank:100L(26.4Gal)\nOil free system\nNoise: 75db\nCopper wire motor\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by plywood case",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "TCS2241008.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/TCS2241008%20-%20Total%20Silent%20Air%20Compressor%20(100L)%20(3.2HP)/TCS2241008.jpg"
            }
        ],
        "price": "72",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht11101---total-air-hose-10m",
        "name": "THT11101 - Total Air Hose (10m)",
        "description": "Model no.\tTHT11101-3\nMax. pressure\t12 bar (174 psi)\nAir inlet\t1/4\" Nitto style-fitting\nDiameter\t8mm\nLength\t10m",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "THT11101-3.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/THT11101%20-%20Total%20Air%20Hose%20(10m)/THT11101-3.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tht118302---total-air-grease-lubricator-30l",
        "name": "THT118302 - Total Air Grease Lubricator (30L)",
        "description": "CAPACITY\t30Lit\nWORKING PRESSURE\t6 - 8 bar\nMax FREE FLOWRATE\t850gr / min\nCYLINDER DIAMETER\t70mm\nAIR CONSUMPION\t250Lit / min\nINLET & OUTLET AIR REGULATOR\t1/4\"\nGREASE HOSE\t5m\nWEIGHT\t16 Kg",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "THT118302.jpg",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/THT118302%20-%20Total%20Air%20Grease%20Lubricator%20(30L)/THT118302.jpg"
            }
        ],
        "price": "30000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "yt-24250---yato-air-hose-reel-15m",
        "name": "YT-24250 - Yato Air Hose Reel (15m)",
        "description": "The YATO YT-24250 Air Hose Reel is a convenient and durable tool designed to provide easy access to compressed air in workshops, garages, and industrial settings. With a 15-meter PVC hose and auto-rewind functionality, it offers both versatility and efficiency for various pneumatic applications. The reel can be easily mounted to a wall or bench, making it a practical addition to any workspace.\n\nKey Features:\nHose Length:\nEquipped with a 15-meter long air hose, providing extended reach for pneumatic tools across the workspace.\nInternal Diameter:\nThe hose has an internal diameter of 9.5mm, allowing for efficient airflow and ensuring the compatibility with a variety of air tools.\nMaximum Pressure:\nSupports a maximum working pressure of 2.0 MPa (20 Bar), making it suitable for high-pressure pneumatic applications.\n1/4\" Mounts:\nDesigned with 1/4\" mounts for easy connection to air compressors and other pneumatic tools.\nDurable PVC Hose:\nThe hose is made from high-quality PVC, offering durability, flexibility, and resistance to wear and weather conditions, ensuring long-lasting use.\nAuto-Rewind Mechanism:\nFeatures an auto-rewind function that retracts the hose smoothly and efficiently after use, keeping the workspace tidy and reducing the risk of tangles and kinks.\nWall or Bench Mountable:\nDesigned for easy mounting to walls or benches, providing a stable and accessible solution for air hose storage and use.\nThe YATO YT-24250 Air Hose Reel combines durability, convenience, and efficient operation, making it an essential tool for any professional or DIY workshop. With its auto-rewind feature and easy installation, it’s the perfect solution for managing compressed air tools and keeping the workspace clutter-free.",
        "category": "Pneumatic (Air Compressor) Tools",
        "subcategory": "Pneumatic (Air Compressor) Tools",
        "images": [
            {
                "name": "yt-24250-_zip.webp",
                "url": "/website%20products/Pneumatic%20(Air%20Compressor)%20Tools/YT-24250%20-%20Yato%20Air%20Hose%20Reel%20(15m)/yt-24250-_zip.webp"
            }
        ],
        "price": "15500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac20248---ingco-24l-air-compressor",
        "name": "AC20248 - Ingco 24L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 1.5 kW (2 HP)Tank:24L(6.3Gal)Noise:96db1000HR lifetime promiseAluminium wire motorPump lubricated with oilNo-load speed:2850rpmOperation pressure:max.8barPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "AC20248.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC20248%20-%20Ingco%2024L%20Air%20Compressor/AC20248.jpg"
            }
        ],
        "price": "31000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac25508---ingco-50l-air-compressor",
        "name": "AC25508 - Ingco 50L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2×1200W （3.2HP）Tank:100L(26.4Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "a2e72166a2ef41c2a34578045a571017.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC25508%20-%20Ingco%2050L%20Air%20Compressor/a2e72166a2ef41c2a34578045a571017.jpg"
            }
        ],
        "price": "32900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ac301008---ingco-100l-air-compressor",
        "name": "AC301008 - Ingco 100L Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2.2kW (3HP)Tank:100L(26.4Gal)Noise:92db3000Hr lifetime promiseAluminium wire motorBelt driving systemPump lubricated with oilNo-load speed:1100rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "AC301008.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/AC301008%20-%20Ingco%20100L%20Air%20Compressor/AC301008.jpg"
            }
        ],
        "price": "86500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs112501---ingco-50l-silent-and-oil-free-air-compressor",
        "name": "ACS112501 - Ingco 50L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power:1200W （1.6HP）Tank:50L(13.2Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS112501.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS112501%20-%20Ingco%2050L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS112501.jpg"
            }
        ],
        "price": "45000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs175241---ingco-24l-silent-and-oil-free-air-compressor",
        "name": "ACS175241 - Ingco 24L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2.2kW (3HP)Tank:100L(26.4Gal)Noise:92db3000Hr lifetime promiseAluminium wire motorBelt driving systemPump lubricated with oilNo-load speed:1100rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS175241.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS175241%20-%20Ingco%2024L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS175241.jpg"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "acs2241001---ingco-100l-silent-and-oil-free-air-compressor",
        "name": "ACS2241001 - Ingco 100L Silent and Oil-free Air Compressor",
        "description": "Specifications:\n\nVoltage:220-240V~50HzInput power: 2×1200W （3.2HP）Tank:100L(26.4Gal)Oil free systemNoise: 75dbCopper wire motorNo-load speed:2850rpmOperation pressure:max.8barPacked by plywood case",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "ACS2241001.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/ACS2241001%20-%20Ingco%20100L%20Silent%20and%20Oil-free%20Air%20Compressor/ACS2241001.jpg"
            }
        ],
        "price": "84000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tc202416---total-air-compressor-24l-2hp",
        "name": "TC202416 - Total Air Compressor (24L) (2HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 1.5 kW (2 HP)\nTank:24L(6.3Gal)\nNoise:96db\nPump lubricated with oil\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "TC202416-_24_2_8.webp",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/TC202416%20-%20Total%20Air%20Compressor%20(24L)%20(2HP)/TC202416-_24_2_8.webp"
            }
        ],
        "price": "17500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tc255016---total-air-compressor-50l-15hp",
        "name": "TC255016 - Total Air Compressor (50L) (1.5HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 1.8kW(2.5HP)\nTank:50L(13.2Gal)\nNoise:96db\nPump lubricated with oil\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "TC255016-1.webp",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/TC255016%20-%20Total%20Air%20Compressor%20(50L)%20(1.5HP)/TC255016-1.webp"
            }
        ],
        "price": "23000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs1110242---total-silent-air-compressor-24l-15hp",
        "name": "TCS1110242 - Total Silent Air Compressor (24L) (1.5HP)",
        "description": "Voltage:220-240V~60Hz(BS Plug)\nInput power: 1100W(1.5HP)\nTank:24L(6.3Gal)\nOil free system\nNoise: 67db\nAluminium wire motor\nNo-load speed:3400rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "TCS1110242-85.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/TCS1110242%20-%20Total%20Silent%20Air%20Compressor%20(24L)%20(1.5HP)/TCS1110242-85.jpg"
            }
        ],
        "price": "22000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs1120508---total-silent-air-compressor-50l-16hp",
        "name": "TCS1120508 - Total Silent Air Compressor (50L) (1.6HP)",
        "description": "Voltage:220-240V~50Hz\nInput power:1200W （1.6HP）\nTank:50L(13.2Gal)\nOil free system\nNoise: 75db\nCopper wire motor\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "TCS1120508.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/TCS1120508%20-%20Total%20Silent%20Air%20Compressor%20(50L)%20(1.6HP)/TCS1120508.jpg"
            }
        ],
        "price": "34250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcs2241008---total-silent-air-compressor-100l-32hp",
        "name": "TCS2241008 - Total Silent Air Compressor (100L) (3.2HP)",
        "description": "Voltage:220-240V~50Hz\nInput power: 2×1200W （3.2HP）\nTank:100L(26.4Gal)\nOil free system\nNoise: 75db\nCopper wire motor\nNo-load speed:2850rpm\nOperation pressure:max.8bar\nPacked by plywood case",
        "category": "Power Tools",
        "subcategory": "Air Compressors",
        "images": [
            {
                "name": "TCS2241008.jpg",
                "url": "/website%20products/Power%20Tools/Air%20Compressors/TCS2241008%20-%20Total%20Silent%20Air%20Compressor%20(100L)%20(3.2HP)/TCS2241008.jpg"
            }
        ],
        "price": "72",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ag24008---ingco-9-inch-2400w-angle-grinder",
        "name": "AG24008 - Ingco 9 inch 2400w Angle grinder",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:2400WNo-load speed:6400rpmDisc diameter:230mmSpindle thread:M14With 1pcs auxiliary handleWith 1set carbon brushesDisc not includedPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG24008.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG24008%20-%20Ingco%209%20inch%202400w%20Angle%20grinder/AG24008.jpg"
            }
        ],
        "price": "16500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ag7118---ingco-4-inch-710w-angle-grinder",
        "name": "AG7118 - Ingco 4 inch 710w Angle Grinder",
        "description": "Specifications:\n\nVoltage: 220-240V~50/60HzInput power: 710WNo-load speed: 12000rpmDisc diameter: 115mmSpindle thread: M14With 1pcs auxiliary handleDisc not includedPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG7118.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG7118%20-%20Ingco%204%20inch%20710w%20Angle%20Grinder/AG7118.jpg"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ag750282---ingco-4-inch-750w-angle-grinder",
        "name": "AG750282 - Ingco 4 inch 750w Angle Grinder",
        "description": "Specification:\n\nVoltage:220-240V~50/60HzInput power:750WNo-load speed:12000rpmDisc diameter:100mmSpindle thread:M10With 1pcs auxiliary handleDisc not includedPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG750282.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG750282%20-%20Ingco%204%20inch%20750w%20Angle%20Grinder/AG750282.jpg"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ag90028---ingco-4-inch-900w-angle-grinder",
        "name": "AG90028 - Ingco 4 inch 900w Angle grinder",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:900WNo-load speed:12000rpmDisc diameter:125mmSpindle thread:M14With 1pcs auxiliary handleDisc not includedPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "AG90028.png",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/AG90028%20-%20Ingco%204%20inch%20900w%20Angle%20grinder/AG90028.png"
            }
        ],
        "price": "7000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cosli241298---ingco-20v-4ah-cordless-drill-grinder-combo-set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "Specification:\n\nVoltage:20VWith 1pcs brushless cordless impact drill(CIDLI209681)With 1pcs cordless angle grinder(CAGLI27153)Brushless cordless impact drill(CIDLI209681):Brushless motorVoltage: 20VNo-load speed: 0-500/0-2000rpmMax impact rate: 30000bpmMax torque: 96NmMetal chuckChuck capacity: 13mmTorque settings: 22+1+1Mechanical 2-speed gearSpindle lock functionIntegrated LED work lightLED battery power indicatorCordless angle grinder(CAGLI27153):Brushless motorVoltage: 20VMax input power: 1000WNo-load speed: 3000/6000/9000rpmDisc diameter: 115mmSpindle thread: M14Include:3 Pcs wood flat drill bits(16.19.22mm)3 Pcs masonry drill bits(5.6.8mm)3 Pcs HSS drill bits(4.5.6mm)2 Pcs 65mm impact screwdriver bits(PH2+PH2,PH2+SL6)1 Set abrasive metal cutting disc(10 Pcs)2 Pcs 4.0Ah battery pack(FBLI20021)1 Pcs charger(FCLI2001)Charge volts: 220-240V~50/60HzPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cagli2211532---ingco-20v-cordless-angle-grinder",
        "name": "Cagli2211532 - Ingco 20V Cordless Angle Grinder",
        "description": "Specification:\n\nBrushless MotorVoltage:20VMax input power: 1200WNo-load speed:3000/6000/9000rpmDisc diameter:115mmSpindle thread:M14Include:1 Set abrasive metal cutting disc(10 Pcs)2 Pcs 5.0Ah battery pack(FBLI20031)1 Pcs charger(FCLI20411)Charge volts:220-240V~50/60HzPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "CAGLI2211532 LITHIUM-ION ANGLE GRINDER 20V.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/Cagli2211532%20-%20Ingco%2020V%20Cordless%20Angle%20Grinder/CAGLI2211532%20LITHIUM-ION%20ANGLE%20GRINDER%2020V.jpg"
            }
        ],
        "price": "24000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dwe4120-b5---dewalt-900w-angle-grinder-4",
        "name": "DWE4120-B5 - Dewalt 900w Angle Grinder (4'')",
        "description": "Complete a wide range of grinding applications with the 4-1/2 in. Paddle Switch Small Angle Grinder. Engineered with a powerful 9 Amp motor that delivers fast material removal and overload protection, this grinder features a slim design ideal for operating in tight spaces.\n\n9 amp AC/DC, 12,000 rpm motor designed for faster material removal and higher overload protection\nHigh-efficiency motor provides low operating temps\nOne-Touch™ guard allows for 360-degree rotation of the guard with a single action",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "Dewalt-Angle-Grinder-4.5-inch-115mm-DWE4120-B5-Paddle-Switch-900W.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/DWE4120-B5%20-%20Dewalt%20900w%20Angle%20Grinder%20(4'')/Dewalt-Angle-Grinder-4.5-inch-115mm-DWE4120-B5-Paddle-Switch-900W.jpg"
            }
        ],
        "price": "17000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dwe492-qs---dewalt-2200w-9-angle-grinder",
        "name": "DWE492-QS - Dewalt (2200W) 9'' Angle Grinder",
        "description": "Product overview\n• Brand: DeWALT\n• Model: DWE492-QS\n• Tool type: Corded angle grinder\n• Disc diameter: 230 mm (9 inch)\n\nPower and performance\n• Power input: 2200 W\n• No-load speed: 6,600 rpm\n• Motor type: Brushed motor\nMechanical features\n• Spindle thread: M14\n• Guard: Tool-free adjustable guard\n• Side handle: Two-position auxiliary handle\n• Brush access: External brush access for easier servicing\nDimensions and weight\n• Approx. length: 490 mm\n• Approx. height: 151 mm\n• Weight: Approx. 5.2 kg",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "DWE492_2.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/DWE492-QS%20-%20Dewalt%20(2200W)%209''%20Angle%20Grinder/DWE492_2.jpg"
            }
        ],
        "price": "25000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gws-2200---bosch-9-inch-2200w-angle-grinder",
        "name": "GWS 2200 - Bosch 9 inch 2200w Angle Grinder",
        "description": "Additional data\n\nRated input power: 2200 W\nNo-load speed: 6,500 – 6,500 rpm\nDisc diameter: 230 mm\nVoltage, electrical: 230 V\nGrinding spindle thread: M14\nMain handle: Barrel\nRubber backing pad, diameter: 180 mm\nBore size, diameter: 22.3 mm\nGrinding head, diameter: 140 mm\nWeight: 5.4 kg\nSwitch: Lockable Switch\nTotal vibration values (Surface grinding (roughing))\nVibration emission value ah: 5.5 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Sanding with sanding sheet)\nVibration emission value ah: 2.5 m/s²\nSurface grinding (roughing)\nSanding with sanding sheet",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o332817v54_GWS2200fullexecution.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%202200%20-%20Bosch%209%20inch%202200w%20Angle%20Grinder/o332817v54_GWS2200fullexecution.webp"
            }
        ],
        "price": "13900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gws-24-230-h-bosch-9-angle-grinder-2400w",
        "name": "GWS 24-230 H Bosch (9'') Angle Grinder 2400W",
        "description": "Power: 2400 Watts.\nDisc Diameter: 230 mm (9 inches).\nNo-Load Speed: 6,500 rpm.\nVoltage: 230 V.\nSpindle Thread: M14.\nWeight: Around 5.1 - 5.8 kg (depending on source).\nMotor: \"Champion\" motor with high overload capacity for fast material removal.\nSafety Features: Restart protection, soft start, anti-rotation protective guard, lockable switch.\nDurability: Armored coils protect motor from dust, double sealed ball bearings, sturdy gearing.",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o91923v54_GWS-24-230_H_Dynamik.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%2024-230%20H%20Bosch%20(9'')%20Angle%20Grinder%202400W/o91923v54_GWS-24-230_H_Dynamik.webp"
            }
        ],
        "price": "23060",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gws-700---bosch-4-inch-710w-angle-grinder",
        "name": "GWS 700 - Bosch 4 inch 710w Angle Grinder",
        "description": "Technical data\n\nAdditional data\nRated input power: 710 W\nNo-load speed: 12,000 – 12,000 rpm\nDisc diameter: 115 mm\nVoltage, electrical: 240 V\nGrinding spindle thread: M14\nWeight: 1.7 kg\nSwitch: Lockable Switch",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "o328882v54_FullExecution_GWS.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/GWS%20700%20-%20Bosch%204%20inch%20710w%20Angle%20Grinder/o328882v54_FullExecution_GWS.webp"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tagli261521---total-20v-brushless-cordless-grinder",
        "name": "TAGLI261521 - Total 20V Brushless Cordless Grinder",
        "description": "Brushless motor\nVoltage: 20V Max\nInput power: 900W\nNo-load speed: 3000/6000/9000rpm\nDisc diameter: 115mm\nSpindle thread: M14\n\nInclude:\n1 Set abrasive metal cutting disc(5 Pcs)\n1 Pcs 4.0Ah battery pack(TFBLI20021)\n1 Pcs charger(TFCLI2001) Charge volts: 220-240V~50/60Hz\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "25952_1-1536x1536.png.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TAGLI261521%20-%20Total%2020V%20Brushless%20Cordless%20Grinder/25952_1-1536x1536.png.webp"
            }
        ],
        "price": "9500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tckli20273---total-cordless-combination-kit-drill-and-grinder",
        "name": "TCKLI20273 - Total Cordless Combination Kit (Drill and Grinder)",
        "description": "Voltage: 20V\n1 Pcs cordless angle grinder(TAGLI27153)\n1 Pcs compact Brushless Cordless Impact Drill(TIDLI206681)\nCordless angle grinder(TAGLI27153):\nBrushless motor\nMax input power: 1000W\nNo-load speed: 3000/6000/9000rpm\nDisc diameter:115mm\nSpindle thread:M14\nCompact Brushless Cordless Impact Drill(TIDLI206681):\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 66Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nInclude:\n1 Set 115mm abrasive metal cutting disc(10 Pcs)\n47 Pcs accessories\n2 Pcs 4.0Ah battery pack(TFBLI20021)\n1 Pcs P20S Lithium-Ion battery charger(TFCLI2001)\nCharge volts: 220-240V~50/60Hz\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TCKLI20273.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TCKLI20273%20-%20Total%20Cordless%20Combination%20Kit%20(Drill%20and%20Grinder)/TCKLI20273.jpg"
            }
        ],
        "price": "18500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg10710076---total-4-inch-710w-angle-grinder",
        "name": "TG10710076 - Total 4 inch 710w Angle Grinder",
        "description": "With ON / OFF toggle switch located at the rear of machine.\n\nPackage comes with,\n1 pc Auxiliary handle\n1 pc Spanner\nCutting disc not included\nSpecifications\nModel no.\nTG10710076\nVoltage\n220-240V ~ 50/60Hz\nInput power\n710W\nNo-load speed\n12000/min\nDisc diameter\n100mm (4\")\nSpindle thread\nM10\nDimensions\n32cm * 13cm * 10cm\nWeight\n2.2kg",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG10710076.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG10710076%20-%20Total%204%20inch%20710w%20Angle%20Grinder/TG10710076.jpg"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg10711556---total-4-inch-750w-angle-grinder",
        "name": "TG10711556 - Total 4 inch 750w Angle Grinder",
        "description": "SPECIFICATIONS\n\nVoltage:220-240V~50/60Hz\nInput power:750W\nNo-load speed:11000rpm\nDisc diameter:115mm\nSpindle thread:M14\nWith 1pcs auxiliary handle\nPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG10711556.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG10711556%20-%20Total%204%20inch%20750w%20Angle%20Grinder/TG10711556.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg110125565---total-5-inch-1100w-angle-grinder-variable-speed",
        "name": "TG110125565 - Total 5 inch 1100W Angle Grinder (Variable Speed)",
        "description": "Voltage: 220-240V~50/60Hz\nInput power: 1100W\nNo-load speed: 5000-12000rpm\nvariable speed\nDisc diameter: 125mm\nSpindle thread: M14\nWith 1pcs auxiliary handle\nDisc not included\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG-110125565.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG110125565%20-%20Total%205%20inch%201100W%20Angle%20Grinder%20(Variable%20Speed)/TG-110125565.jpg"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg1252306---total-9-inch-2400w-angle-grinder",
        "name": "TG1252306 - Total 9 inch 2400w Angle Grinder",
        "description": "SPECIFICATIONS\n\nVOLTAGE\n230V - 50Hz\nPOWER\n2.400W\nNO LOAD SPEED\n6.300 rpm / min\nDISC DIAMETER\n230mm\nWEIGHT\n6.5 Kg",
        "category": "Power Tools",
        "subcategory": "Angle Grinders",
        "images": [
            {
                "name": "TG1252306.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Grinders/TG1252306%20-%20Total%209%20inch%202400w%20Angle%20Grinder/TG1252306.jpg"
            }
        ],
        "price": "13000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gpo-14ce---bosch-1400w-pro-angle-polsiher",
        "name": "GPO 14CE - Bosch 1400w Pro Angle Polsiher",
        "description": "Additional data\n\nRated input power: 1400 W\nNo-load speed: 750 – 3,000 rpm\nCup wheel, diameter: 180 mm\nVoltage, electrical: 240 V\nPower output: 800 W\nGrinding spindle thread: M14\nRubber sanding plate, diameter: 180 mm\nWire cup brush, diameter: 100 mm\nPolishing sponge, diameter: 160 mm\nSurface brush, diameter: 175 mm\nWeight: 2.5 kg\nTotal vibration values (Polishing)\nVibration emission value ah: 6 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 91 dB(A)\nSound power level: 102 dB(A)\nUncertainty K: 3 dB\nPolishing",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "o113114v54_P_K_GPO_14CE_Dynamik.webp",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/GPO%2014CE%20-%20Bosch%201400w%20Pro%20Angle%20Polsiher/o113114v54_P_K_GPO_14CE_Dynamik.webp"
            }
        ],
        "price": "28450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gpo-950---bosch-950w-angle-polisher",
        "name": "GPO 950 - Bosch 950w Angle Polisher",
        "description": "Additional data\n\nRated input power: 950 W\nNo-load speed: 600 – 2,100 rpm\nGrinding spindle thread: M14\nPolishing sponge, diameter: 180 mm\nWeight: 2.3 kg\nTotal vibration values (Polishing)\nVibration emission value ah: 7.5 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 80.5 dB(A)\nSound power level: 91.5 dB(A)\nUncertainty K: 3 dB\nPolishing",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "o283013v54_lv-139333-12-GPO950_dyn_01.png",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/GPO%20950%20-%20Bosch%20950w%20Angle%20Polisher/o283013v54_lv-139333-12-GPO950_dyn_01.png"
            }
        ],
        "price": "19350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp11418018---total-1400w-angle-polisher",
        "name": "TP11418018 - Total 1400w Angle Polisher",
        "description": "SPECIFICATIONS\n\nVoltage:220-240V~50/60Hz\nInput power:1400W\nNo-load speed:1500-3600rpm\nPolishing pad diameter:180mm\nSpindle Type : M14\nVariable speed control\nLock-on switch\nAluminum gear box\nIncludes:\n1pcs D-handle\n1pcs hook&loop polishing pad\n1pcs polishing bonnet\n1set extra carbon brushes\n1pcs hex key\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Angle Polisher - Buffing Machine",
        "images": [
            {
                "name": "TP11418018.jpg",
                "url": "/website%20products/Power%20Tools/Angle%20Polisher%20-%20Buffing%20Machine/TP11418018%20-%20Total%201400w%20Angle%20Polisher/TP11418018.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ab4018---ingco-400w-blower",
        "name": "AB4018 - Ingco 400w Blower",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:400WNo-load speed:14000rpmMax.blowing rate:3.0m³/minWith 1pcs dust bagPacked by color box",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "AB4018.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/AB4018%20-%20Ingco%20400w%20Blower/AB4018.jpg"
            }
        ],
        "price": "3650",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ab6008---ingco-600w-blower",
        "name": "AB6008 - Ingco 600w Blower",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:600WNo-load speed:0-16000rpmBlowing rate:0-3.5m³/minVariable speed controlWith 1pcs dust bagPacked by color box",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "AB6008.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/AB6008%20-%20Ingco%20600w%20Blower/AB6008.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbl-620---bosch-650w-blower",
        "name": "GBL 620 - Bosch 650w Blower",
        "description": "Additional data\n\nRated input power: 620 W\nWeight: 1.7 kg\nVolumetric flow rate: 3.5 m³/min\nVoltage, electrical: 230 V\nNo-load speed: 16,000 rpm",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "o275032v54_GBL620_dyn_01.png",
                "url": "/website%20products/Power%20Tools/Blowers/GBL%20620%20-%20Bosch%20650w%20Blower/o275032v54_GBL620_dyn_01.png"
            }
        ],
        "price": "6500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "m4000b---makita-550w-blower",
        "name": "M4000B - Makita 550w Blower",
        "description": "Continuous rating input : 530W\nAir volume : 1.2-2.9 m³/min\nNo Load Speed (RPM) : 8,500 – 16,000\nVibration Level : Operation w/o Load: 2.5 m/s² or less\nSound Pressure Level : 90 dB(A)\nSound Power Level : 101 dB(A)\nDimensions (L x W x H) : 427x161x212 mm (16-3/4″x6-3/8″x8-3/8″)\nNet weight : 1.5 kg (3.4 lbs.)\nPower supply cord : 2.0 m (6.6 ft.)",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "M4000B.jpg",
                "url": "/website%20products/Power%20Tools/Blowers/M4000B%20-%20Makita%20550w%20Blower/M4000B.jpg"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tabli2078---total-cordless-blower-20v",
        "name": "TABLI2078 - Total Cordless Blower (20V)",
        "description": "Voltage: 20V\nNo-load Speed: 18000 rpm\nMax Air Volume: 2.7\n\nBattery & Charger: Sold separately (Bare Tool)\nWeight: ~1 kg (bare tool)\nType: Single speed blowe",
        "category": "Power Tools",
        "subcategory": "Blowers",
        "images": [
            {
                "name": "TABLI2078_7bed8b62-a1aa-4356-9fc9-7424e72f0a0e.webp",
                "url": "/website%20products/Power%20Tools/Blowers/TABLI2078%20-%20Total%20Cordless%20Blower%20(20V)/TABLI2078_7bed8b62-a1aa-4356-9fc9-7424e72f0a0e.webp"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cs18538---ingco-1400w-7-inch-circular-saw",
        "name": "CS18538 - Ingco 1400W 7 Inch Circular Saw",
        "description": "Voltage: 220-240V~50/60Hz\nInput Power:1400W\nNo-load speed:4800rpm\nBlade diameter:185x20mm\nCutting capacity:\n45 degree:45mm\n90 degree:65mm\nAdjustable cutting depth\nAdjustable bevel cutting\nWith 1pcs 185mm blade\nWith 1set extra carbon brushes\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "CS18538.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/CS18538%20-%20Ingco%201400W%207%20Inch%20Circular%20Saw/CS18538.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dwe5615-gb---dewalt-7-inch-circular-saw-1350w",
        "name": "DWE5615-GB - Dewalt 7 inch Circular Saw (1350W)",
        "description": "POWER INPUT : 1350 W\nBLADE DIAMETER : 190 mm\nBEVEL CAPACITY : 45 °\nNO LOAD SPEED : 5500 RPM\nMAX. DEPTH OF CUT (90°) : 68 mm\nMAX. DEPTH OF CUT (45°) :48 mm",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "81ygib-xral._sl1500__1_.webp",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/DWE5615-GB%20-%20Dewalt%207%20inch%20Circular%20Saw%20(1350W)/81ygib-xral._sl1500__1_.webp"
            }
        ],
        "price": "24000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gks-140---bosch-1400w-7-inch-circular-saw",
        "name": "GKS 140 - Bosch 1400w 7 inch Circular Saw",
        "description": "Additional data\n\nRated input power: 1400 W\nSaw blade diameter: 184 mm\nVoltage, electrical: 220 V\nNo-load speed: 6,200 rpm\nSaw blade bore diameter: 20 mm\nWeight: 3.7 kg\nBaseplate: 290 x 150 mm\nGuide rail compatible: No\nTotal vibration values (Wood sawing)\nVibration emission value ah: 2.4 m/s²\nUncertainty K: 1.5 m/s²\nWood sawing",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "GKS 140.webp",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/GKS%20140%20-%20Bosch%201400w%207%20inch%20Circular%20Saw/GKS%20140.webp"
            }
        ],
        "price": "14080",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gks-235-turbo---bosch-pro-heavy-duty-2050w-9-circular-saw",
        "name": "GKS 235 Turbo - Bosch PRO Heavy Duty (2050W) (9'') Circular Saw",
        "description": "Power: 2,050 W input power for strong performance.\nBlade: 235 mm diameter, 25 mm bore.\nCutting Depth: Up to 85 mm (90°) and 65 mm (45°).\nSpeed: 5,300 rpm (no-load).\nDurability: Robust design with double the overload lifetime of standard models.\nWeight: 7.6 kg.",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "o246835v54_lv-84102-49-GKS_235_Turbo_Dy.png",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/GKS%20235%20Turbo%20-%20Bosch%20PRO%20Heavy%20Duty%20(2050W)%20(9'')%20Circular%20Saw/o246835v54_lv-84102-49-GKS_235_Turbo_Dy.png"
            }
        ],
        "price": "30800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts11418526-8---total-1400w-7-inch-circular-saw",
        "name": "TS11418526-8 - Total 1400w 7 inch Circular Saw",
        "description": "Specifications\n\nModel no: TS11418526\nVoltage: 220-240V ~ 50/60Hz\nInput power: 1400W\nNo-load speed\t: 4800/min\nBlade diameter: 185mm (7 1/4\")\nCutting capacity: 45 degree: 43mm, 90 degree: 65mm\nSuitable with: TAC231410 TCT Saw Blade\nPackage comes with:\n1 pc TCT blade\n1 pc Parallel guide\n1 pc Wrench\n1 set Carbon brushes",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts1161856-8---total-1600w-7-inch-circular-saw",
        "name": "TS1161856-8 - Total 1600W 7 inch Circular Saw",
        "description": "SPECIFICATIONS\nVOLTAGE\t230V - 50Hz\nPOWER\t1600W\nNO LOAD INPUT\t5.000 rpm / min\nCUTTING DEPTH 90x65mm\nCUTTING DEPTH 45x44mm\nBLADE DIAMETER\t185mm X 20mm\nWEIGHT\t5 Kg",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts122235622---total-2200w-9-inch-circular-saw",
        "name": "TS122235622 - Total 2200W 9 inch Circular Saw",
        "description": "SPECIFICATIONS\nVOLTAGE\t230V - 50Hz\nPOWER\t2.200W\nNO LOAD INPUT\t3.800 rpm / min\nCUTTING DEPTH 90o\t80mm\nCUTTING DEPTH 45o\t65mm\nBLADE DIAMETER\t235mm\nWEIGHT\t9.5 Kg",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "TS1222356.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/TS122235622%20-%20Total%202200W%209%20inch%20Circular%20Saw/TS1222356.jpg"
            }
        ],
        "price": "17000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "uy-scc235---uyus-2800w-9-inch-circular-saw",
        "name": "UY-SCC235 - Uyus 2800w 9 inch Circular Saw",
        "description": "SPECIFICATIONS\n\nPRODUCT NAME\nCircular Saw\nPRODUCT CODE\nUY-SCC235-CL\nRATED VOLTAGE\n110-120V/220-240V\nFREQUENCY\n50/60 Hz\nINPUT POWER\n2800 W\nDISC DIAMETER\n235mmx25.4mm\nNO LOAD SPEED\n4500 RPM\nCUTTING CAPACITY\n45°: 65mm90°: 85mm\nACCESSORIES\nWith 1 pc saw blade #DMA209PJ",
        "category": "Power Tools",
        "subcategory": "Circular Saws",
        "images": [
            {
                "name": "chinesw.jpg",
                "url": "/website%20products/Power%20Tools/Circular%20Saws/UY-SCC235%20-%20Uyus%202800w%209%20inch%20Circular%20Saw/chinesw.jpg"
            }
        ],
        "price": "17000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsb-16-re---bosch-pro-heavy-duty-impact-drill-750w",
        "name": "GSB-16 Re - Bosch Pro Heavy Duty Impact Drill (750W)",
        "description": "Speed preselection with setting wheel\nSoftgrip for a secure hold\nRotating brush plate for constant power in reverse and forward rotation\nSpindle collar diameter of 43 mm (European standard) – can be used in drill stands\n1Powerful 701 watts\n2Forward/reverse rotation\n3Electronic control for exact pilot drilling",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "o260252v54_lv-84560-12-GSB_16_RE_dyn_highres_02.png",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/GSB-16%20Re%20-%20Bosch%20Pro%20Heavy%20Duty%20Impact%20Drill%20(750W)/o260252v54_lv-84560-12-GSB_16_RE_dyn_highres_02.png"
            }
        ],
        "price": "11160",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsb570---bosch-570w-impact-drill",
        "name": "GSB570 - Bosch 570w Impact Drill",
        "description": "Specifications:\n\nRated input power\n570 W\nWeight\n1.7 kg\nVoltage, electrical\n220–240 V\nNo-load speed, 1st gear\n0 – 3,000 rpm\nPower output\n300 W\nImpact rate at no-load speed\n48,000 – bpm\nRated torque\n1.4 Nm\nChuck capacity, min./max.\n1.5 – 13 mm\nDrilling range:\nDrilling diameter in wood\n25 mm\nDrilling diameter in concrete\n13 mm\nDrilling diameter in steel\n10 mm\nDrilling dia. in brick, limestone\nDrilling diameter in masonry",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "WhatsApp-Image-2020-06-10-at-09.50.48.jpeg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/GSB570%20-%20Bosch%20570w%20Impact%20Drill/WhatsApp-Image-2020-06-10-at-09.50.48.jpeg"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsb600---bosch-600w-impact-drill",
        "name": "GSB600 - Bosch 600w Impact Drill",
        "description": "Rated input power :600 W\nNo-load speed, 1st gear : 0 – 3,000 rpm\nPower output: 600 W\nWeight : 1.7 kg\nImpact rate at no-load speed :0 – 48,000 bpm\nChuck capacity, min./max. : 1.5 – 13 mm",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "o396105v54_GSB_600_Handle_dyn.webp",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/GSB600%20-%20Bosch%20600w%20Impact%20Drill/o396105v54_GSB_600_Handle_dyn.webp"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "id11008---ingco-1100w-impact-drill",
        "name": "ID11008 - Ingco 1100w Impact Drill",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:1100WNo-load speed:0-2800rpmMax.drilling capacity:13mmVariable speed controlForward/Reverse switchHammer functionAluminum gear boxWith 1set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "ID11008.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID11008%20-%20Ingco%201100w%20Impact%20Drill/ID11008.jpg"
            }
        ],
        "price": "6250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "id6808---ingco-680w-impact-drill",
        "name": "ID6808 - Ingco 680w Impact Drill",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:680WNo-load speed:0-3000rpmMax.drilling capacity:13mmVariable speed controlForward/Reverse switchHammer functionPacked by color box",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "9ca782f12a3f42d9ac7354efd048365f.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID6808%20-%20Ingco%20680w%20Impact%20Drill/9ca782f12a3f42d9ac7354efd048365f.jpg"
            }
        ],
        "price": "4500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "id8508---ingco-810w-impact-drill",
        "name": "ID8508 - Ingco 810w Impact Drill",
        "description": "Specification:\n\nVoltage: 220-240V~50/60HzInput power: 850WNo-load speed:0-2700rpmMax.drilling capacity:13mmVariable speed controlForward/Reverse switchHammer functionWith 1set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "ID8508.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/ID8508%20-%20Ingco%20810w%20Impact%20Drill/ID8508.jpg"
            }
        ],
        "price": "5350",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg1071366---total-710w-impact-drill",
        "name": "TG1071366 - Total 710w Impact Drill",
        "description": "Specifications:\n\nVoltage: 220-240V~50/60Hz\nInput power: 710W\nNo-load speed: 0-3000rpm\nMax.drilling capacity: 13mm\nVariable speed control\nForward/Reverse switch\nHammer function\nPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg1081316---total-810w-impact-drill",
        "name": "TG1081316 - Total 810w Impact Drill",
        "description": "Specifications:\n\nVoltage:220-240V~50/60Hz\nInput power:810W\nNo-load speed:0-2750rpm\nMax.drilling capacity:13mm\nVariable speed\nFroward/Reverse switch\nHammer function\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "TG1081316.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/TG1081316%20-%20Total%20810w%20Impact%20Drill/TG1081316.jpg"
            }
        ],
        "price": "4950",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg21116---total-impact-drill-1100w",
        "name": "TG21116 - Total Impact Drill (1100W)",
        "description": "Voltage: 220-240V~50/60Hz\nInput power: 1100W\nNo-load speed: 0-1200rpm/0-3000rpm\nMax.drilling capacity:16mm\nVariable speed control\nFroward/Reverse action\nHammer function\nAluminum 2 mechanical gear box\nWith 1set extra carbon brushes\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Corded Drills",
        "images": [
            {
                "name": "TG211166.jpg",
                "url": "/website%20products/Power%20Tools/Corded%20Drills/TG21116%20-%20Total%20Impact%20Drill%20(1100W)/TG211166.jpg"
            }
        ],
        "price": "11500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bosch-18v-50ah-cordless-battery",
        "name": "Bosch 18V 5.0Ah Cordless Battery",
        "description": "Technical data\nBattery voltage : 18.0 V\nWeight : 0.62 kg\nBattery dimensions (width x length x height) : 76 x 113 x 58 mm\n5.0AH",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o458332v54_GBA_18V_5Ah_Dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/Bosch%2018V%205.0Ah%20Cordless%20Battery/o458332v54_GBA_18V_5Ah_Dyn.webp"
            }
        ],
        "price": "16500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fcli2001---ingco-20v-2ah-cordless-tools-p20s-battery-charger",
        "name": "FCLI2001 - Ingco 20V (2AH) Cordless tools P20S Battery Charger",
        "description": "Input voltage:220-240V~50/60Hz\nOutput voltage:20V\nOutput current:2A\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "FCLI2001.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/FCLI2001%20-%20Ingco%2020V%20(2AH)%20Cordless%20tools%20P20S%20Battery%20Charger/FCLI2001.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fcli20411---ingco-20v-4ah-cordless-tools-p20s-battery-charger",
        "name": "FCLI20411 - Ingco 20V (4AH) Cordless tools P20S Battery Charger",
        "description": "Input voltage:220-240V~50/60Hz\nOutput voltage:21V\nOutput current:4A\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "FCLI20411.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/FCLI20411%20-%20Ingco%2020V%20(4AH)%20Cordless%20tools%20P20S%20Battery%20Charger/FCLI20411.jpg"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gax-18v-30---bosch-18v-cordless-charger",
        "name": "GAX 18V-30 - Bosch 18V Cordless Charger",
        "description": "Technical data\nBattery voltage 18.0 V\nBattery charging voltage 10.8 – 18 V\nCharge current 3 A\nWeight 0.8 kg\nInterfaces\nUSB port: 5 V, max. 2.1 A\nCharg. time at bat. cap. 2.0 Ah (80%/100%) approx. 35/45 min\nCharg. time at bat. cap. 2.5 Ah (80%/100%) approx. 40/65 min\nCharg. time at bat. cap. 3.0 Ah (80%/100%) approx. 53/68 min\nCharg. time at bat. cap. 4.0 Ah (80%/100%) approx. 65/85 min\nCharg. time at bat. cap. 5.0 Ah (80%/100%) approx. 82/107 min\nCharg. time at bat. cap. 6.0 Ah (80%/100%) approx. 100/130 min\nCharg. time at bat. cap. 6.3 Ah (80%/100%) approx. 109/181 min",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o245049v54_P_A_GAX_18V-30_dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/GAX%2018V-30%20-%20Bosch%2018V%20Cordless%20Charger/o245049v54_P_A_GAX_18V-30_dyn.webp"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gba-12v-20ah---bosch-12v-20ah-cordless-battery",
        "name": "GBA 12V 2.0Ah - Bosch 12V 2.0Ah Cordless Battery",
        "description": "Technical data\nBattery voltage: 12.0 V\nWeight: 0.18 kg\nBattery capacity : 2 Ah\nBattery dimensions (width x length x height) : 48 x 51 x 85 mm",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o275819v54_o275819v12_12V2-0Ah_dyn_02(2).webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/GBA%2012V%202.0Ah%20-%20Bosch%2012V%202.0Ah%20Cordless%20Battery/o275819v54_o275819v12_12V2-0Ah_dyn_02(2).webp"
            }
        ],
        "price": "4500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "heavy-duty-procore18v-120ah---bosch-18v-120ah-cordless-battery",
        "name": "HEAVY DUTY ProCORE18V 12.0Ah - Bosch 18V 12.0Ah Cordless Battery",
        "description": "Technical data\nAdditional data\nBattery capacity\n12 Ah\nWeight\n1.35 kg\nBattery voltage\n18.0 V\nBattery dimensions (width x length x height)\n78 x 116 x 92 mm",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "o395624v54_GBA_18V_ProCORE_12Ah_dyn.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/HEAVY%20DUTY%20ProCORE18V%2012.0Ah%20-%20Bosch%2018V%2012.0Ah%20Cordless%20Battery/o395624v54_GBA_18V_ProCORE_12Ah_dyn.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tfbli20011---total-lithium-ion-battery-pack-20ah",
        "name": "TFBLI20011 - Total Lithium-Ion Battery Pack (2.0AH)",
        "description": "Volts:20V\nLithium-Ion 2.0Ah battery\nLED battery power indicator\nOne battery fits all P20S multiple tools\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "TFBLI20011.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/TFBLI20011%20-%20Total%20Lithium-Ion%20Battery%20Pack%20(2.0AH)/TFBLI20011.jpg"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tfcli2001---total-fast-intelligent-charger-2a",
        "name": "TFCLI2001 - Total Fast Intelligent Charger (2A)",
        "description": "Voltage:20V\nCharge current:2A\nCharges 20V 2.0Ah battery in 1Hr",
        "category": "Power Tools",
        "subcategory": "Cordless Batteries and Chargers",
        "images": [
            {
                "name": "TFCLI2001-500x425.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Batteries%20and%20Chargers/TFCLI2001%20-%20Total%20Fast%20Intelligent%20Charger%20(2A)/TFCLI2001-500x425.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cdli12202---ingco-12v-cordless-drill",
        "name": "CDLI12202 - Ingco 12V Cordless Drill",
        "description": "Voltage: 12VNo-load speed: 0-400/0-1500rpmMax torque: 20NmPlastic chuckChuck capacity: 0.8-10mmTorque settings: 15+1Mechanical 2-speed gearIntegrated LED work light\n\nIncludes:1 Pcs Cr-V 65mm bit2 Pcs 1.5Ah battery pack(FBLI12153)Battery charging port: USB type-CCharger sold separatelyPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CDLI12202 (1).jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/CDLI12202%20-%20Ingco%2012V%20Cordless%20Drill/CDLI12202%20(1).jpg"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cidli20558---ingco-20v-cordless-impact-drill-55nm",
        "name": "CIDLI20558 - Ingco 20V Cordless Impact Drill (55nm)",
        "description": "Specifications:\n\nBrushless motorVoltage: 20VNo-load speed: 0-500/0-2000rpmMax impact rate: 30000bpmMax torque: 55NmMetal chuckChuck capacity: 13mmTorque settings: 22+1+1Mechanical 2-speed gearSpindle lock functionIntegrated LED work lightLED battery power indicator\nIncludes:2 Pcs 2.0Ah battery pack(FBLI20011)1 Pcs charger(FCLI2001)Charge volts: 220-240V~50/60Hz47 Pcs accessories3 Pcs masonry drill bitsPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CIDLI20558.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/CIDLI20558%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20(55nm)/CIDLI20558.jpg"
            }
        ],
        "price": "12500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cosli241298---ingco-20v-4ah-cordless-drill-grinder-combo-set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "Voltage:20VWith 1pcs brushless cordless impact drill(CIDLI209681)With 1pcs cordless angle grinder(CAGLI27153)Brushless cordless impact drill(CIDLI209681):Brushless motorVoltage: 20VNo-load speed: 0-500/0-2000rpmMax impact rate: 30000bpmMax torque: 96NmMetal chuckChuck capacity: 13mmTorque settings: 22+1+1Mechanical 2-speed gearSpindle lock functionIntegrated LED work lightLED battery power indicatorCordless angle grinder(CAGLI27153):Brushless motorVoltage: 20VMax input power: 1000WNo-load speed: 3000/6000/9000rpmDisc diameter: 115mmSpindle thread: M14Include:3 Pcs wood flat drill bits(16.19.22mm)3 Pcs masonry drill bits(5.6.8mm)3 Pcs HSS drill bits(4.5.6mm)2 Pcs 65mm impact screwdriver bits(PH2+PH2,PH2+SL6)1 Set abrasive metal cutting disc(10 Pcs)2 Pcs 4.0Ah battery pack(FBLI20021)1 Pcs charger(FCLI2001)Charge volts: 220-240V~50/60HzPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dcd776s2-b5---dewalt-cordless-drill-18v-xr-li-ion-15ah",
        "name": "DCD776S2-B5 - Dewalt CORDLESS DRILL 18V XR LI-ION 1.5AH",
        "description": "Type: 18V Cordless Compact Hammer Drill Driver.\nChuck: 13mm single sleeve, keyless with spindle lock for quick bit changes.\nSpeeds: Two speed settings (0-450 / 0-1500 RPM) for control.\nHammer Function: For drilling into masonry.\nTorque: 15-position adjustable torque control.\nBattery: 1.5Ah XR Li-Ion.\nLight: Bright white LED with delay.\nErgonomics: Improved rubber grip for comfort",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "DCD776S2A_1.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/DCD776S2-B5%20-%20Dewalt%20CORDLESS%20DRILL%2018V%20XR%20LI-ION%201.5AH/DCD776S2A_1.jpg"
            }
        ],
        "price": "35000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dcd996p2-b5---dewalt-cordless-drill-18v-max-hd-xr-li--ion-50ah-brushless",
        "name": "DCD996P2-B5 - Dewalt CORDLESS DRILL 18V MAX HD XR LI- ION 5.0AH BRUSHLESS",
        "description": "Model: DEWALT DCD996P2-B5.\nVoltage: 18V.\nMotor: Brushless, providing longer run time and power.\nSpeeds: 3-speed transmission (0-450/1300/2000 RPM).\nChuck: 13mm (1/2\") keyless metal chuck.\nHammer Function: Delivers up to 38,250 BPM for masonry.\nBatteries: Comes with two 18V 5.0Ah XR Li-Ion batteries.\nLighting: 3-mode LED light with a flashlight function.\nIncluded: Charger, side handle, and a kit box.",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "CORDLESS-DRILL-18V-MAX-H-D-XR-LI-ION-5.0AH-BRUSHLESS-2.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/DCD996P2-B5%20-%20Dewalt%20CORDLESS%20DRILL%2018V%20MAX%20HD%20XR%20LI-%20ION%205.0AH%20BRUSHLESS/CORDLESS-DRILL-18V-MAX-H-D-XR-LI-ION-5.0AH-BRUSHLESS-2.jpg"
            }
        ],
        "price": "73500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsb120---bosch-12v-cordless-impact-drill",
        "name": "GSB120 - Bosch 12V Cordless Impact Drill",
        "description": "Additional data\n\nTorque (soft/hard/max.)\n14/30/- Nm\nNo-load speed (1st gear / 2nd gear)\n0 – 400 / 0 – 1,500 rpm\nBattery type\nLithium-Ion\nMax. impact rate\n22,500 bpm\nChuck capacity, min./max.\n0.8 / 10 mm\nWeight excl. battery\n0.9 kg\nTorque settings\n20+2",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "Bosch-Cordless-Impact-Drill-GSB120.webp",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/GSB120%20-%20Bosch%2012V%20Cordless%20Impact%20Drill/Bosch-Cordless-Impact-Drill-GSB120.webp"
            }
        ],
        "price": "14600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsb183-li---bosch-18v-cordless-impact-drill",
        "name": "GSB183-li - Bosch 18V Cordless Impact Drill",
        "description": "Additional data\n\nBattery voltage: 18.0 V\nTorque (soft/hard/max.): 21/56/60 Nm\nNo-load speed (1st gear / 2nd gear): 0 – 440 / 0 – 1,650 rpm\nChuck type: Keyless chuck\nWeight incl. battery: 1.5 kg\nChuck capacity, min./max.: 1.5 / 13 mm\nWeight excl. battery: 1.2 kg\nTorque settings: 20\nBITURBO: No",
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
        "price": "16990",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkthp11651---ingco-20v-cordless-impact-drill-tool-set",
        "name": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "description": "1 Pcs 20V cordless impact drill(CIDLI20668)1 Pcs 2.0Ah battery pack(FBLI20011 )1 Pcs charger(FCLI2001 )Charge volts: 220V-240V~50/60HzMax impact rate: 22500bpm1 Pcs 8oz claw hammer1 Pcs SL5.5x100 screwdriver1 Pcs PH1x100 screwdriver1 Pcs 7\" combination pliers1 Pcs 6\" long nose pliers1 Pcs 8\" adjustable wrench1 Pcs test pencil1 Pcs 3m steel measuring tape1 Pcs snap-off blade knife1 Pcs 1/4\" 100mm magnetic shank1 Pcs 4mm precision screwdriver handle10 Pcs precision screwdriver bits:SL1.5,SL2,SL3,PH000,PH00,PH0,T6,T8,H1.5,H2.51 Pcs 5.5\" electrician's scissors1 Pcs mini hacksaw frame8 Pcs Hex key:1.5,2,2.5,3,4,5,5.5,6mm5 Pcs masonry drill bits 4,5,6,8,10mm5 Pcs twist drill bits 2,3,4,5,6mm4 Pcs wood drill bits 4,5,6,8mm20 Pcs screwdriver bits SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H610Pcs 2\" screwdriver bits:SL4,SL5,SL6,PH1,PH2,PH3,T10,T15,T20,T307 Pcs power sleeve (Cr-V): 5,6,7,8,9,10,11mm1 Pcs magnetic bits holder40 Pcs screws(22pcs*ST3.5,10pcs*ST4, 8pcs*ST5)40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)Packed by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "[HKTHP11651] HKTHP11651 165 PCS TOOLS SET - 20V.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/HKTHP11651%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/%5BHKTHP11651%5D%20HKTHP11651%20165%20PCS%20TOOLS%20SET%20-%2020V.jpg"
            }
        ],
        "price": "16000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tckli20273---total-cordless-combination-kit-drill-and-grinder",
        "name": "TCKLI20273 - Total Cordless Combination Kit (Drill and Grinder)",
        "description": "Voltage: 20V\n1 Pcs cordless angle grinder(TAGLI27153)\n1 Pcs compact Brushless Cordless Impact Drill(TIDLI206681)\nCordless angle grinder(TAGLI27153):\nBrushless motor\nMax input power: 1000W\nNo-load speed: 3000/6000/9000rpm\nDisc diameter:115mm\nSpindle thread:M14\nCompact Brushless Cordless Impact Drill(TIDLI206681):\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 66Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nInclude:\n1 Set 115mm abrasive metal cutting disc(10 Pcs)\n47 Pcs accessories\n2 Pcs 4.0Ah battery pack(TFBLI20021)\n1 Pcs P20S Lithium-Ion battery charger(TFCLI2001)\nCharge volts: 220-240V~50/60Hz\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "TCKLI20273.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/TCKLI20273%20-%20Total%20Cordless%20Combination%20Kit%20(Drill%20and%20Grinder)/TCKLI20273.jpg"
            }
        ],
        "price": "18500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp11652---total-20v-cordless-impact-drill-tool-set",
        "name": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "description": "1 Pcs 20V cordless impact drill(TIDLI20668)1 Pcs 2.0Ah battery pack(TFBLI20011)1 Pcs charger(TFCLI2001 )Charge volts: 220V-240V~50/60HzMax impact rate: 30000bpm1 Pcs 8oz claw hammer1 Pcs SL5.5x100 screwdriver1 Pcs PH1x100 screwdriver1 Pcs 7\" combination pliers1 Pcs 6\" long nose pliers1 Pcs 8\" adjustable wrench1 Pcs test pencil1 Pcs 3m steel measuring tape1 Pcs snap-off blade knife1 Pcs 1/4\" 100mm magnetic shank1 Pcs 4mm precision screwdriver handle10 Pcs precision screwdriver bits:SL1.5,SL2,SL3,PH000,PH00,PH0,T6,T8,H1.5,H2.51 Pcs 5.5\" electrician's scissors1 Pcs mini hacksaw frame8 Pcs Hex key:1.5,2,2.5,3,4,5,5.5,6mm5 Pcs masonry drill bits 4,5,6,8,10mm5 Pcs twist drill bits 2,3,4,5,6mm4 Pcs wood drill bits 4,5,6,8mm20 Pcs screwdriver bits SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H610 Pcs 2\" screwdriver bits:SL4,SL5,SL6,PH1,PH2,PH3,T10,T15,T20,T307 Pcs power sleeve (Cr-V): 5,6,7,8,9,10,11mm1 Pcs magnetic bits holder40 Pcs screws(22pcs*ST3.5,10pcs*ST4, 8pcs*ST5)40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)Packed by carrying case",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tidli20558e---total-20v-cordless-impact-drill-55nm",
        "name": "TIDLI20558E - Total 20v Cordless Impact Drill (55nm)",
        "description": "SPECIFICATIONS\n\nBrushless motor\nVoltage: 20V\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 55Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nLED battery power indicator\nInclude:\n2 Pcs 2.0Ah battery pack(TFBLI2001)\n1 Pcs charger(TFCLI2001E)\nCharge volts: 220-240V~50/60Hz\n47 Pcs accessories\n3 Pcs masonry drill bits\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "TIDLI20558E.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/TIDLI20558E%20-%20Total%2020v%20Cordless%20Impact%20Drill%20(55nm)/TIDLI20558E.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tidli20668---total-compact-brushless-cordless-impact-drill-66nm",
        "name": "TIDLI20668 - Total Compact Brushless Cordless Impact Drill (66Nm)",
        "description": "Brushless motor\nVoltage: 20V\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 66Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nLED battery power indicator\nInclude:\n2 Pcs 2.0Ah battery pack(TFBLI20011)\n1 Pcs charger(TFCLI2001)\nCharge volts: 220-240V~50/60Hz\n47 Pcs accessories\n3 Pcs masonry drill bits\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "TIDLI20668.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/TIDLI20668%20-%20Total%20Compact%20Brushless%20Cordless%20Impact%20Drill%20(66Nm)/TIDLI20668.jpg"
            }
        ],
        "price": "12500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tidli209681---total-brushless-cordless-impact-drill-20v-96nm",
        "name": "TIDLI209681 - Total Brushless Cordless Impact Drill (20V) (96Nm)",
        "description": "Brushless motor\nVoltage: 20V\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 96Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nLED battery power indicator\nInclude:\n3 Pcs wood flat drill bits(16.19.22mm)\n3 Pcs masonry drill bits(5.6.8mm)\n3 Pcs HSS drill bits(4.5.6mm)\n2 Pcs 65mm impact screwdriver bits(PH2+PH2,PH2+SL6)\nBattery and charger sold separately\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Cordless Drills",
        "images": [
            {
                "name": "TIDLI209681.jpg",
                "url": "/website%20products/Power%20Tools/Cordless%20Drills/TIDLI209681%20-%20Total%20Brushless%20Cordless%20Impact%20Drill%20(20V)%20(96Nm)/TIDLI209681.jpg"
            }
        ],
        "price": "9000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsh-14-c---bosch-1750w-demolition-breaker-28j",
        "name": "GSH 14 C - Bosch 1750w Demolition Breaker (28J)",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 1,900 – 1,950 bpm\nAdditional data\nRated input power: 1750 W\nImpact energy: 28 J\nTool holder: HEX 22 mm\nVoltage, electrical: 240 V\nWeight: 14.6 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 10.9 m/s²\nUncertainty K: 1.5 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o400770v54_o400770v12BoschGSH14CTOOLBOX01.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2014%20C%20-%20Bosch%201750w%20Demolition%20Breaker%20(28J)/o400770v54_o400770v12BoschGSH14CTOOLBOX01.webp"
            }
        ],
        "price": "167000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsh-16-28---bsoch-1750w-demolition-hammer-41j",
        "name": "GSH 16-28 - Bsoch 1750w Demolition Hammer (41J)",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 1,280 bpm\nAdditional data\nRated input power: 1750 W\nImpact energy: 41 J\nTool holder: HEX 28 mm\nVoltage, electrical: 230 V\nWeight: 18.3 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 12.3 m/s²\nUncertainty K: 1.5 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375915v54_GSH_16-28_sos_F4_0611335000_30_60.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2016-28%20-%20Bsoch%201750w%20Demolition%20Hammer%20(41J)/o375915v54_GSH_16-28_sos_F4_0611335000_30_60.webp"
            }
        ],
        "price": "210000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsh-16-30---bosch-1750w-demolition-breaker-41j",
        "name": "GSH 16-30 - Bosch 1750w Demolition Breaker (41J)",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 1,300 – 1,300 bpm\nAdditional data\nRated input power: 1750 W\nImpact energy: 41 J\nTool holder: HEX 30 mm\nVoltage, electrical: 240 V\nWeight: 16.9 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 13 m/s²\nUncertainty K: 2 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375916v54_GSH_16-30_sos_F4_0611335100_40_B0_P0.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2016-30%20-%20Bosch%201750w%20Demolition%20Breaker%20(41J)/o375916v54_GSH_16-30_sos_F4_0611335100_40_B0_P0.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gsh-27-vc---bosch-1900w-demolition-breaker",
        "name": "GSH 27 VC - Bosch 1900w Demolition Breaker",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 1,000 bpm\nAdditional data\nRated input power: 1900 W\nImpact energy: 62 J\nTool holder: HEX 28 mm\nVoltage, electrical: 240 V\nWeight: 29.5 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 8.5 m/s²\nUncertainty K: 1.5 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o375917v54_GSH_27_VC_sos_F4_061130A000_30_40_80_B0_P0.png",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/GSH%2027%20VC%20-%20Bosch%201900w%20Demolition%20Breaker/o375917v54_GSH_27_VC_sos_F4_061130A000_30_40_80_B0_P0.png"
            }
        ],
        "price": "225000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pro-gsh-5---bosch-1100w-demolition-hammer",
        "name": "PRO GSH 5 - Bosch 1100w Demolition Hammer",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 2,850 bpm\nAdditional data\nRated input power: 1100 W\nImpact energy: 7.5 J\nTool holder: SDS max\nVoltage, electrical: 240 V\nWeight: 5.6 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 14 m/s²\nUncertainty K: 1.5 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o108203v54_GSH_5_dynamic.png",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/PRO%20GSH%205%20-%20Bosch%201100w%20Demolition%20Hammer/o108203v54_GSH_5_dynamic.png"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pro-gsh-500---bosch-1100w-demolition-hammer",
        "name": "PRO GSH 500 - Bosch 1100w Demolition Hammer",
        "description": "Specifications:\n\nPerformance data\nImpact rate at rated speed: 2,900 bpm\nAdditional data\nRated input power: 1100 W\nImpact energy: 7.8 J\nTool holder: SDS max\nWeight: 5.7 kg\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 12 m/s²\nUncertainty K: 1.5 m/s²\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "o340423v54_gsh_500_full_execution.webp",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/PRO%20GSH%20500%20-%20Bosch%201100w%20Demolition%20Hammer/o340423v54_gsh_500_full_execution.webp"
            }
        ],
        "price": "45000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "th215456---total-1700w-demolition-breaker-hammer",
        "name": "TH215456 - Total 1700w Demolition Breaker (Hammer)",
        "description": "SPECIFICATIONS\n\nVOLTAGE\n230V - 50Hz\nPOWER\n1.700W\nIMPACT POWER\n45 J\nIMPACT RATE\n1.900 rpm / min\nWEIGHT\n16 Kg",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "TH215456.jpg",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/TH215456%20-%20Total%201700w%20Demolition%20Breaker%20(Hammer)/TH215456.jpg"
            }
        ],
        "price": "31500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "th220502---total-2200w-demolition-breaker-hammer",
        "name": "TH220502 - Total 2200w Demolition Breaker (Hammer)",
        "description": "SPECIFICATIONS\n\nVOLTAGE\n230V - 50Hz\nPOWER\n2.200W\nIMPACT POWER\n75 J\nIMPACT RATE\n950 rpm / min\nWEIGHT\n30 Kg",
        "category": "Power Tools",
        "subcategory": "Demolition Hammers",
        "images": [
            {
                "name": "TH220502.jpg",
                "url": "/website%20products/Power%20Tools/Demolition%20Hammers/TH220502%20-%20Total%202200w%20Demolition%20Breaker%20(Hammer)/TH220502.jpg"
            }
        ],
        "price": "92500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tdws105016---total-drywall-sander",
        "name": "TDWS105016 - Total Drywall Sander",
        "description": "SPECIFICATIONS\nVOLTAGE\t230V - 50Hz\nPOWER\t1.050W\nNO LOAD SPEED\t600 - 2.300 rpm\nSANDING PAPER DIAMETER\t215mm\nDUST HOSE DIAMETER\t38mm\nWEIGHT\t7 Kg",
        "category": "Power Tools",
        "subcategory": "Drywall Sander",
        "images": [
            {
                "name": "TWS10501.jpg",
                "url": "/website%20products/Power%20Tools/Drywall%20Sander/TDWS105016%20-%20Total%20Drywall%20Sander/TWS10501.jpg"
            }
        ],
        "price": "19000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tdws10508---total-drywall-sander-850w",
        "name": "TDWS10508 - Total Drywall Sander (850W)",
        "description": "Voltage: 220-240V~50/60Hz\nInput power: 850W\nNo-load speed: 1000-2700rpm\nGrinding pad diameter: 180mm\nSanding paper diameter: 180mm\nIntegrated work light\nWith 8pcs sand papers\nWith 2m flexible pipe\nWith 1pcs dust bag\nWith 1set extra carbon brushes",
        "category": "Power Tools",
        "subcategory": "Drywall Sander",
        "images": [
            {
                "name": "Screenshot2026-03-02170828.webp",
                "url": "/website%20products/Power%20Tools/Drywall%20Sander/TDWS10508%20-%20Total%20Drywall%20Sander%20(850W)/Screenshot2026-03-02170828.webp"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gh0-700---bosch-electric-planer",
        "name": "GH0 700 - Bosch ELectric Planer",
        "description": "Additional data\n\nRated input power: 700 W\nPlaning width: 82 mm\nPlaning depth: 0 mm\nVoltage, electrical: 230 V\nWeight: 2.7 kg\nAdjustable rebating depth: 0 – 9 mm\nNo-load speed: 16,500 rpm\nNoise/vibration information\nSound pressure level: 88 dB(A)\nSound power level: 99 dB(A)\nUncertainty K: 3 dB\nTotal vibration values\nVibration emission value ah: 2.8 m/s²\nUncertainty K: 1.5 m/s²",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "o323133v54_lv-178630-12-gho_700_full_execution_02.png",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/GH0%20700%20-%20Bosch%20ELectric%20Planer/o323133v54_lv-178630-12-gho_700_full_execution_02.png"
            }
        ],
        "price": "13920",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pl10508---ingco-1050w-electric-planer",
        "name": "PL10508 - Ingco 1050w Electric Planer",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:1050WNo-load speed:16000rpmPlanning width&depth:82x3mmHeavy duty aluminum baseAluminum side coverSelf-cooling belt systemWith 1pcs beltWith 1set parallel guidesWith 1pcs depth guideWith 1set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "[PL10508] PL10508 ELECTRIC PLANER.png",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/PL10508%20-%20Ingco%201050w%20Electric%20Planer/%5BPL10508%5D%20PL10508%20ELECTRIC%20PLANER.png"
            }
        ],
        "price": "14500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pro-heavy-duty-gho-18v-li---bosch-cordless-planer",
        "name": "Pro Heavy Duty GHO 18V-Li - Bosch Cordless Planer",
        "description": "Battery voltage : 18.0 V\nPlaning width, max. 82 mm\nPlaning depth 0 mm\nNo-load speed : 14,000 rpm\nRebating depth : 0 – 8 mm\nWeight excl. battery : 1.5 kg",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "o375726v54_GHO_18V-LI_sos_F4_06015A0300.webp",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/Pro%20Heavy%20Duty%20GHO%2018V-Li%20-%20Bosch%20Cordless%20Planer/o375726v54_GHO_18V-LI_sos_F4_06015A0300.webp"
            }
        ],
        "price": "40500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pro-heavy-duty-gho26-82d---bosch-electric-planer-710w",
        "name": "Pro Heavy Duty GHO26-82D - Bosch Electric Planer (710W)",
        "description": "Rated input power : 710 W\nPlaning width : 82 mm\nPlaning depth : 2.6 mm\nVoltage, electrical : 240 V\nWeight : 2.8 kg\nAdjustable rebating depth : 9 mm\nNo-load speed : 18,000 rpm",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "o375727v54_GHO_26-82_D_sos_F4_06015A4300_02_32_70.webp",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/Pro%20Heavy%20Duty%20GHO26-82D%20-%20Bosch%20Electric%20Planer%20(710W)/o375727v54_GHO_26-82_D_sos_F4_06015A4300_02_32_70.webp"
            }
        ],
        "price": "30000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tl1108236---total-electric-planer-1050w",
        "name": "TL1108236 - Total Electric Planer (1050W)",
        "description": "VOLTAGE\t230V - 50Hz\nPOWER\t1.050W\nNO LOAD SPEED\t16.000 rpm\nPLANING WIDTH\t82mm\nPLANING DEPTH\t0 - 3mm\nREBATING DEPTH\t24mm\nWEIGHT\t4.5 Kg",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "TL1108236.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/TL1108236%20-%20Total%20Electric%20Planer%20(1050W)/TL1108236.jpg"
            }
        ],
        "price": "11500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tl5508216---total-electric-planer-550w",
        "name": "TL5508216 - Total Electric Planer (550W)",
        "description": "Voltage: 220-240V~50/60Hz\nInput power: 550W\nNo-load speed: 16000rpm\nPlanning width&depth: 82x1mm\nHeavy duty aluminum base\nAluminum side cover\nInclude:\n1 Pcs socket wrench\n1 Pcs parallel guide\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Electric Planer",
        "images": [
            {
                "name": "TL5508216.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Planer/TL5508216%20-%20Total%20Electric%20Planer%20(550W)/TL5508216.jpg"
            }
        ],
        "price": "8000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "spg5008---ingco-550w-electric-spray-gun",
        "name": "SPG5008 - Ingco 550w Electric Spray Gun",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:550WSpraying Pressure:0.1-0.2BarMax. flow:850ml/minMax. viscosity:120DIN-sContainer capacity:800mlPower cord length:2.0mWith 1pcs viscosity measuring cupWith 1pcs nozzle cleaning needleWith 1pcs shoulder strapPacked by color box",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "SPG5008.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/SPG5008%20-%20Ingco%20550w%20Electric%20Spray%20Gun/SPG5008.jpg"
            }
        ],
        "price": "6250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsgli20042---total-20v-cordless-spray-gun",
        "name": "TSGLI20042 - Total 20v Cordless Spray Gun",
        "description": "SPECIFICATIONS\n\nVoltage: 20V\nSpraying pressure: 0.1-0.2Bar\nMax.flow: 800ml/min\nMax.viscosity: 120DIN-s\nContainer capacity: 1000ml\nAdjustable spray amplitude\nInclude:\n1 Pcs dust blower nozzle\n1 Pcs viscosity measuring cup\n1 Pcs nozzle cleaning needle\n2 Pcs copper nozzle(1.5/2.5mm)\nBattery and charger sold separately\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TSGLI2004.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TSGLI20042%20-%20Total%2020v%20Cordless%20Spray%20Gun/TSGLI2004.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt3506---total-450w-electric-spray-gun",
        "name": "TT3506 - Total 450w Electric Spray Gun",
        "description": "SPECIFICATIONS\n\nVOLTAGE: 230V - 50Hz\nPOWER: 450W\nMax FLOW: 380ml / min\nCAPACITY OF BOTTLE: 800ml\nDIA OF SPRAY NOZZLE: 2.5mm\nWEIGHT: 1.4 Kg",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TT3506.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TT3506%20-%20Total%20450w%20Electric%20Spray%20Gun/TT3506.jpg"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt4506---total-530w-electric-spray-gun",
        "name": "TT4506 - Total 530w Electric Spray Gun",
        "description": "High-performance electric spray gun for home, workshop, and DIY use\nOperates on standard 220–240V ~ 50/60Hz power supply\nPowerful 530W motor for consistent spraying performance\nHandles maximum viscosity up to 130 DIN-s for various liquids\nAdjustable spray amplitude for precise control and uniform coverage\nSuitable for blowing dust and light cleaning tasks\nLarge 1000ml container for extended spraying sessions\nPaint flow rate of 410ml/min for 50 DIN paint\nWater flow rate of 950ml/min for cleaning or other liquid applications\nIdeal for painting, varnishing, and coating projects\nLightweight and ergonomic design for ease of use\nEfficient and quick application for professional or DIY tasks",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "2.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TT4506%20-%20Total%20530w%20Electric%20Spray%20Gun/2.jpg"
            }
        ],
        "price": "5000",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt5006-2---total-550w-electric-spray-gun",
        "name": "TT5006-2 - Total 550w Electric Spray Gun",
        "description": "SPECIFICATIONS\n\nVOLTAGE\n230V - 50Hz\nPOWER\n550W\nMax FLOW\n850ml / min\nCAPACITY OF BOTTLE\n800ml\nDIA OF SPRAY NOZZLE\n2.5mm\nWEIGHT\n2 Kg",
        "category": "Power Tools",
        "subcategory": "Electric Spray Guns",
        "images": [
            {
                "name": "TT5006-2.jpg",
                "url": "/website%20products/Power%20Tools/Electric%20Spray%20Guns/TT5006-2%20-%20Total%20550w%20Electric%20Spray%20Gun/TT5006-2.jpg"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gg148-8---ingco-glue-gun",
        "name": "GG148-8 - Ingco Glue Gun",
        "description": "Specifications:\n\nVolts:220-240V~50/60Hz(BS Plug)Input power:20W(100W)Gluing capacity:15-22g/minGlue stick diameter:11.2mmBS plugWith 2 pcs 150mm glue sticksPacked by double blister",
        "category": "Power Tools",
        "subcategory": "Glue Gun",
        "images": [
            {
                "name": "GG148-8.jpg",
                "url": "/website%20products/Power%20Tools/Glue%20Gun/GG148-8%20-%20Ingco%20Glue%20Gun/GG148-8.jpg"
            }
        ],
        "price": "1400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt201116---total-glue-gun",
        "name": "TT201116 - Total Glue Gun",
        "description": "Specifications:\n\nVolts:220-240V~50/60HzInput power:25W(150W)Gluing capacity:15-20g/minGlue stick diameter:11.2mmWith 4 pcs 150mm glue sticksPacked by double blister",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ghg180---bosch-heat-gun",
        "name": "GHG180 - Bosch Heat Gun",
        "description": "Additional data\n\nRated input power: 1800 W\nVoltage, electrical: 230 V\nWeight: 0.75 kg\nSpecifications, use\nWorking temperature: 60 – 550 °C\nHeat-up time: 1 s\nAirflow: 350 – 550 l/min\nControl, airflow: 3\nNoise/vibration information\nSound power level: 70 dB(A)\nUncertainty K: 3 dB\nSound pressure level: 70 dB(A)\nTotal vibration values\nVibration emission value ah: 1.5 m/s²\nUncertainty K: 2.5 m/s²",
        "category": "Power Tools",
        "subcategory": "Heat Guns",
        "images": [
            {
                "name": "o284269v54_lv-166639-12-FullExecution_060194D0L0_GHG180.webp",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/GHG180%20-%20Bosch%20Heat%20Gun/o284269v54_lv-166639-12-FullExecution_060194D0L0_GHG180.webp"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hg5030---makita-heat-gun",
        "name": "HG5030 - Makita Heat Gun",
        "description": "Technical specifications\n\nContinuous Input Power 240V\n1600 W\nMaximum Flow Rate\n300 / 500 L/min\nTemperature Range\n350 - 500 °C\nMax. Temperature\n500 °C\nVariable Temperature\nThermal Safety Switch\nWeight Without Cable\n0,56 kg\nProduct Dimensions (L x W x H):\n233 x 80 x 208 mm\nPower Supply Cord\n2,0 m",
        "category": "Power Tools",
        "subcategory": "Heat Guns",
        "images": [
            {
                "name": "HG5030_C2L0.jpg",
                "url": "/website%20products/Power%20Tools/Heat%20Guns/HG5030%20-%20Makita%20Heat%20Gun/HG5030_C2L0.jpg"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "uy-psc2000---uyus-2000w-heat-gun",
        "name": "UY-PSC2000 - Uyus 2000w Heat Gun",
        "description": "Specifications:\n\nRated power: 2000W\n220-240V/50HZ\nTwo gears\nGear I: 350, air output:300L/min\nGear II: 600, air output:500L/min\nMotor: DC17V\nCE certificate\n2m cable with VDE plug(European two round plug)\n1 set of plastic handle scrapers\n3 air nozzles",
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
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ciwli20135---ingco-1350nm-cordless-impact-wrench",
        "name": "CIWLI20135 - Ingco 1350nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motorVoltage: 20VSquare drive: 3/4\"No-load speed: 0-900/0-1200/0-1800rpmImpact rate: 0-1800/0-2000/0-2200bpmFastening torque: 1350NmNut-Busting torque: 1900NmIntegrated work lightInclude:2 Pcs 5.0Ah battery pack(FBLI20031)1 Pcs 4A charger(FCLI20411)3 Pcs sockets(27 30 32mm)Charge volts:220-240V~50/60HzPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20135.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20135%20-%20Ingco%201350nm%20Cordless%20Impact%20Wrench/CIWLI20135.jpg"
            }
        ],
        "price": "54000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ciwli20236---ingco-230nm-cordless-impact-wrench",
        "name": "CIWLI20236 - Ingco 230nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motorVoltage: 20VSquare drive: 1/2\"Hex shank: 6.35mmNo-load speed: 0-2000/0-2400/0-2600rpmImpact rate: 0-2100/0-2500/0-2900bpmMax torque: 230NmIntegrated LED work light3 Pcs sockets(17,19,21mm)1 Pcs screwdriver bit2 Pcs 2.0Ah battery pack(FBLI20011)1 Pcs charger(FCLI2001)Charge volts: 220-240V~50/60HzPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20236.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20236%20-%20Ingco%20230nm%20Cordless%20Impact%20Wrench/CIWLI20236.jpg"
            }
        ],
        "price": "12500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ciwli20401---ingco-400nm-cordless-impact-wrench",
        "name": "CIWLI20401 - Ingco 400nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motorVoltage: 20VSquare drive: 1/2\"No-load speed: 0-1600/0-1900/0-2300rpmImpact rate: 0-2100/0-2500/0-2900bpmFastening torque: 400NmBreakaway torque: 550NmIntegrated LED work lightInclude:3 Pcs sockets(17,19,21mm)Battery and charger sold separatelyPacked by color box",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20401.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20401%20-%20Ingco%20400nm%20Cordless%20Impact%20Wrench/CIWLI20401.jpg"
            }
        ],
        "price": "11550",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ciwli20851tm---ingco-850nm-cordless-impact-wrench",
        "name": "CIWLI20851tm - Ingco 850nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motorVoltage: 20VSquare drive:1/2\"No-load speed: 0-1600/0-2100/0-2400rpmImpact rate: 0-1500/0-1800/0-2200bpmFastening torque: 850NmNut-Busting torque: 1000NmIntegrated LED work lightInclude:3 Pcs deep sockets(22,24,27mm)1 Pcs belt clipBattery and charger sold separatelyPacked by color box",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "CIWLI20851.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/CIWLI20851tm%20-%20Ingco%20850nm%20Cordless%20Impact%20Wrench/CIWLI20851.jpg"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cosli23048---ingco-2pcs-impact-wrench-combo-set",
        "name": "COSLI23048 - Ingco 2pcs Impact Wrench Combo Set",
        "description": "Specifications:\n\nVoltage:20VWith 1pcs cordless impact wrench(CIWLI20401)With 1pcs work lamp(HWLI35261)Cordless impact wrench(CIWLI20401):Brushless motorSquare drive: 1/2\"No-load speed: 0-1600/0-1900/0-2300rpmImpact rate: 0-2100/0-2500/0-2900bpmFastening torque: 400NmNut-Busting torque: 550NmIntegrated LED work lightWork lamp(HWLI35261)Using Li-polymer rechargeable batteryLumens:Max:300±10%Low:75±10%LED power dissipation:3.5WInclude:1 Pcs USB charging cable10 Pcs 1/2\" DR. impact socket set1 Pcs 1/2\" square driver to 1/4\" hex10 Pcs PH2+SL6.0 65mm screwdriver bits2 Pcs 2.0Ah battery pack(FBLI20011)1 Pcs charger(FCLI2001)Charge volts:220-240V~50/60HzPacked by color box",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "[COSLI23048] COSLI23048 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/COSLI23048%20-%20Ingco%202pcs%20Impact%20Wrench%20Combo%20Set/%5BCOSLI23048%5D%20COSLI23048%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "16380",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cosli240789---ingco-cordless-impact-wrench-combo-kit",
        "name": "COSLI240789 - Ingco Cordless Impact Wrench Combo Kit",
        "description": "Specifications:\n\nVoltage: 20V1 Pcs Cordless impact wrench(CIWLI20851)1 Pcs Cordless angle grinder(CAGLI21154)1 Pcs Cordless vacuum cleaner(CVLI201261)Cordless impact wrench(CIWLI20851):Brushless motorVoltage: 20VSquare drive:1/2\"No-load speed: 0-1600/0-2100/0-2400rpmImpact rate: 0-1500/0-1800/0-2200bpmFastening torque: 850NmNut-Busting torque: 1000NmIntegrated LED work lightCordless angle grinder(CAGLI21154):Brushless MotorVoltage:20VNo-load speed:3000/6000/9000rpmDisc diameter:115mmSpindle thread:M14Cordless vacuum cleaner(CVLI201261):Voltage:20VDust Capacity:0.5LVacuum Pressure:≥9kpaInclude:3 Pcs deep sockets(22,24,27mm)1 Pcs belt clip1 Set abrasive metal cutting disc(10 Pcs)1 Pcs crevice nozzle1 Pcs dust brush2 Pcs 5.0Ah battery(FBLI20031)1 Pcs charge(FCLI2001)Charge volts: 220-240V~50/60HzPacked by color box",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "COSLI240789.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/COSLI240789%20-%20Ingco%20Cordless%20Impact%20Wrench%20Combo%20Kit/COSLI240789.jpg"
            }
        ],
        "price": "30800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tiwli2040---total-400nm-cordless-impact-wrench",
        "name": "TIWLI2040 - Total 400nm Cordless impact wrench",
        "description": "Specifications:\n\nBrushless motorSquare drive: 1/2\"No-load speed: 0-1600/0-1900/0-2300rpmImpact rate: 0-2100/0-2500/0-2900bpmFastening torque: 400NmNut-Busting torque: 550NmIntegrated LED work lightInclude:1 Pcs 20V charger(TFCLI2001)Charge volts: 220-240V~50/60Hz2 Pcs 2.0Ah battery pack(TFBLI20011)3 Pcs sockets(17,19,21mm)Packed by carrying case",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2040.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2040%20-%20Total%20400nm%20Cordless%20impact%20wrench/TIWLI2040.jpg"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tiwli2050---total-500nm-cordless-impact-wrench",
        "name": "TIWLI2050 - Total 500nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motor\nVoltage: 20V\nSquare drive: 1/2\"\"\nNo-load speed: 0-1200/0-1800/0-2200rpm\nImpact rate: 0-2400/0-2800/0-3300bpm\nFastening torque: 500Nm\nNut-Busting torque: 650Nm\nIntegrated work light\nInclude:\n3 Pcs sockets(21,22,24mm)\n2 Pcs 4.0Ah battery pack(TFBLI20021)\n1 Pcs charger(TFCLI2001)\nCharge volts:220-240V~50/60Hz\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2050.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2050%20-%20Total%20500nm%20Cordless%20Impact%20Wrench/TIWLI2050.jpg"
            }
        ],
        "price": "20500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tiwli2085---total-850nm-cordless-impact-wrench",
        "name": "TIWLI2085 - Total 850nm Cordless Impact Wrench",
        "description": "Specifications:\n\nBrushless motor\nVoltage:20V\nSquare drive:1/2\"\"\nNo-load speed: 0-1600/0-2100/0-2400rpm\nImpact rate: 0-1500/0-1800/0-2200bpm\nFastening torque:850Nm\nNut-Busting torque:1000Nm\nIntegrated LED work light\nInclude:\n3 Pcs deep sockets(22,24,27mm)\n2 Pcs 4.0Ah battery pack(TFBLI2002)\n1 Pcs charger(TFCLI2001E)\nCharge volts:220-240V~50/60Hz\nPacked by carrying case",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [
            {
                "name": "TIWLI2085.jpg",
                "url": "/website%20products/Power%20Tools/Impact%20Wrenches/TIWLI2085%20-%20Total%20850nm%20Cordless%20Impact%20Wrench/TIWLI2085.jpg"
            }
        ],
        "price": "29750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tiwli42608---total-600nm-42v-cordless-impact-wrench",
        "name": "TIWLI42608 - Total 600nm (42V) Cordless Impact Wrench",
        "description": "Professional Impact Wrenches from the Power Tools collection. High-quality engineering for reliable performance.",
        "category": "Power Tools",
        "subcategory": "Impact Wrenches",
        "images": [],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "79551---tolsen-800w-jigsaw",
        "name": "79551 - Tolsen 800W Jigsaw",
        "description": "• CE approved\n• Rated voltage: 230-240V\n• Frequency: 50/60Hz\n• Input power: 800W\n• Cutting speed: 800-3200/min\n• Stroke Length: 20mm\n• Max. in steel: 8mm\n• Max. in wood: 80mm\n• Footplate tilt: 0-45°, left or right\n• Plug & cable: VDE approved\n• Blade type: T-shank\n• Accessories:\n1pc dust adapter\n1pc hex key\n1pc blade for wood\n1pc parallel guide\n• Packing: color box",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "800W-JIG-SAW-2-768x768.jpg.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/79551%20-%20Tolsen%20800W%20Jigsaw/800W-JIG-SAW-2-768x768.jpg.webp"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gst-650---bosch-450w-jigsaw",
        "name": "GST 650 - Bosch 450w Jigsaw",
        "description": "Specifications:\n\nRated input power: 450 W\nStroke rate at no load: 800 – 3,100 spm\nWeight\t: 1.9 kg\nSaw, stroke length: 18 mm\nCutting depth\nCutting depth in wood: 65 mm\nCutting depth in aluminium: 10 mm\nCutting depth in non-alloyed steel: 3 mm\nTotal vibration values (Sawing wood)\nVibration emission value ah: 4.5 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Sawing sheet metal)\nVibration emission value ah: 5 m/s²\nUncertainty K: 1.5 m/s",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "57452b7caf571feed32241336e0aad30@2x.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/GST%20650%20-%20Bosch%20450w%20Jigsaw/57452b7caf571feed32241336e0aad30%402x.webp"
            }
        ],
        "price": "6500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gst-750---bosch-520w-jigsaw",
        "name": "GST 750 - Bosch 520w Jigsaw",
        "description": "Specifications:\n\nRated input power: 520 W\nVoltage, electrical: 230 V\nSaw, stroke length: 20 mm\nWeight: 2.37 kg\nBevel angle: -45 – 45 °\nTotal vibration values (Sawing wood)\nVibration emission value ah: 6.7 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Sawing sheet metal)\nVibration emission value ah: 4.7 m/s²\nSawing wood\nSawing sheet metal",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "o402243v54_GST_750_dyn.webp",
                "url": "/website%20products/Power%20Tools/Jigsaws/GST%20750%20-%20Bosch%20520w%20Jigsaw/o402243v54_GST_750_dyn.webp"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "js57028---ingco-570w-jigsaw",
        "name": "JS57028 - Ingco 570w Jigsaw",
        "description": "Specifications:\n\nVoltage: 220-240V~50/60HzInput power: 570WNo-load speed: 800-3000rpmCutting capacity:Wood: 65mmSteel: 8mmVariable speed control4 step pendulum functionInclude:3 Pcs saw blades1 Set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "JS57028.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/JS57028%20-%20Ingco%20570w%20Jigsaw/JS57028.jpg"
            }
        ],
        "price": "6000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts206656---total-570w-jigsaw",
        "name": "TS206656 - Total 570w Jigsaw",
        "description": "Specifications:\n\nVOLTAGE\n230V - 50Hz\nPOWER\n570W\nNO LOAD SPEED\n800 - 3.000 rpm\nCUTTING DEPTH\n65mm (WOOD) / 8mm (STEEL) / 8mm (PLASTIC)\nWEIGHT\n3 Kg",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "TS206656.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/TS206656%20-%20Total%20570w%20Jigsaw/TS206656.jpg"
            }
        ],
        "price": "5500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts2081006---total-800w-jigsaw",
        "name": "TS2081006 - Total 800W Jigsaw",
        "description": "VOLTAGE - 230V - 50Hz\nPOWER - 800W\nNO LOAD SPEED - 800 - 3.000 rpm\nCUTTING DEPTH - 100mm(WOOD)/ 10mm(STEEL)/10mm(PLASTIC)\nWEIGHT - 2.5 Kg",
        "category": "Power Tools",
        "subcategory": "Jigsaws",
        "images": [
            {
                "name": "TS2081006.jpg",
                "url": "/website%20products/Power%20Tools/Jigsaws/TS2081006%20-%20Total%20800W%20Jigsaw/TS2081006.jpg"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cos35568---ingco-2400w-metal-cut-off-saw",
        "name": "COS35568 - ingco 2400w Metal Cut-off Saw",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:2400WNo-load speed:3900rpmBlade size:355mmx25.4mmx3mmMax.cutting capacity:100mm in round pipe100mmx100mm in square steel120mmx100mm in rectangleMax.cutting steel bar:50mmWith 1pcs 355mm cutting discPacked by color box",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "COS35568.jpg",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/COS35568%20-%20ingco%202400w%20Metal%20Cut-off%20Saw/COS35568.jpg"
            }
        ],
        "price": "27750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gco-220---bosch-2200w-metal-cut-off-saw",
        "name": "GCO 220 - Bosch 2200w Metal Cut-off Saw",
        "description": "Additional data\n\nRated input power: 2,200 W\nCutting disc diameter: 355 mm\nCutting disc bore: 25.4 mm\nNo-load speed: 3,800 rpm\nCutting capacity at rectangle 0º: 100 x 196 mm\nCutting capacity at square 0º: 119 x 119 mm\nCutting capacity at L-profile 0º: 130 x 130 mm\nWeight: 15 kg\nCutting capacity at rectangle 45º mitre: 107 x 115 mm\nCutting capacity at square 45º mitre: 110 x 110 mm\nCutting capacity at L-profile 45º mitre: 115 x 115 mm\nTool dimensions (width x length x height): 256 x 520 x 400 mm\nTotal vibration values (Cutting metal)\nVibration emission value ah: 2.5 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 100.5 dB(A)\nSound power level: 113 dB(A)\nUncertainty K: 3 dB\nCutting metal",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "o288412v54_274242-gco_200_dyn_01.webp",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/GCO%20220%20-%20Bosch%202200w%20Metal%20Cut-off%20Saw/o288412v54_274242-gco_200_dyn_01.webp"
            }
        ],
        "price": "31000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gco-240---bosch-2400w-metal-cut-off-saw",
        "name": "GCO 240 - Bosch 2400w Metal Cut-off Saw",
        "description": "Specifications:\n\nRated input power: 2,400 W\nCutting disc diameter: 355 mm\nCutting disc bore: 25.4 mm\nNo-load speed: 3,800 rpm\nCutting capacity at rectangle 0º: 100 x 196 mm\nCutting capacity at square 0º: 119 x 119 mm\nCutting capacity at L-profile 0º: 130 x 130 mm\nWeight: 17 kg\nCutting capacity at rectangle 45º mitre: 107 x 115 mm\nCutting capacity at square 45º mitre: 110 x 110 mm\nCutting capacity at L-profile 45º mitre: 115 x 115 mm",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "o275849v54_lv-98432-12-GCO_2400_dyn_highres.webp",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/GCO%20240%20-%20Bosch%202400w%20Metal%20Cut-off%20Saw/o275849v54_lv-98432-12-GCO_2400_dyn_highres.webp"
            }
        ],
        "price": "37000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts9243558---total-2400w-metak-cut-off-saw",
        "name": "TS9243558 - Total 2400W Metak Cut-Off Saw",
        "description": "Voltage:220-240V~50/60Hz\nInput power:2400W\nNo-load speed:3900rpm\nBlade size:355mmx25.4mm\nMax.cutting capacity:\n100mm in round pipe\n100mmx100mm in square steel\n120mmx100mm in rectangle\nMax.cutting steel bar:50mm\nWith 1pcs 355mm cutting disc\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Metal Cut-off Saw",
        "images": [
            {
                "name": "TS9243558.jpg",
                "url": "/website%20products/Power%20Tools/Metal%20Cut-off%20Saw/TS9243558%20-%20Total%202400W%20Metak%20Cut-Off%20Saw/TS9243558.jpg"
            }
        ],
        "price": "22000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bosch-dremel-3000",
        "name": "Bosch Dremel 3000",
        "description": "DREMEL 3000-15 Multi-Tool (130 Watt), 15 Accessories\nFor all of your precision DIY projects: carve, engrave, rout, cut, sand, grind, sharpen, polish and clean\nWork on your projects for extended periods of time\nTackle your precision DIY projects straight away with the 15 included accessories\nEZ Twist: Switch between applications within 1 or more projects easily",
        "category": "Power Tools",
        "subcategory": "Mini Grinder - Dremel Tool",
        "images": [
            {
                "name": "F0133000JB-DREMEL-3000-en-KE-dremelmdb01-o16229v113-dremel-3000-15.png",
                "url": "/website%20products/Power%20Tools/Mini%20Grinder%20-%20Dremel%20Tool/Bosch%20Dremel%203000/F0133000JB-DREMEL-3000-en-KE-dremelmdb01-o16229v113-dremel-3000-15.png"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tg513326---total-mini-grinder-dremel-set",
        "name": "TG513326 - Total Mini Grinder Dremel Set",
        "description": "SPECIFICATIONS\n\nVoltage:220-240V~50/60Hz\nInput power:130W\nNo-load speed:10000-35000rpm\nCollet size:3.2mm/2.3mm\nVariable speed control\nWith 1pcs flexible shaft\nWith 109pcs accessories\nWith 1set extra carbon brushes\nPacked by BMC",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bm2s24001---ingco-2400w-mitre-saw",
        "name": "BM2S24001 - Ingco 2400w Mitre Saw",
        "description": "Specification:\n\nVoltage:220-240V~50/60HzInput power:2400WNo-load speed:5000rpmBlade size:305mmx30mmMax.cutting capacity:109mmx315mmMitre cuts 0-45°left and rightBevel cuts up to 45°to the leftWith 1set extra carbon brushesWith 2pcs extension barsWith 1pcs TCT bladeWith 1pcs dust bagPacked by color box",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "BM2S24001.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/BM2S24001%20-%20Ingco%202400w%20Mitre%20Saw/BM2S24001.jpg"
            }
        ],
        "price": "53000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bms14007---ingco-1400w-mitre-saw",
        "name": "BMS14007 - Ingco 1400w Mitre Saw",
        "description": "Specifications:\n\nVoltage: 220-240V~50/60HzInput power: 1400WNo-load speed: 5000rpmBlade size: 210mmx25.4mmMax.cutting capacity: 60mmx120mmCutting capacity: Mitre/Bevel:HeightxWidth0°×0°:H60mm×W120mm45°×0°:H60mm×W85mm0°×45°:H34mm×W120mm45°×45°:H34mm×W85mmMitre cuts 0-45° left and rightBevel cuts up to 45° to the leftInclude:1 Set extra carbon brushes2 Pcs extension bars1 Pcs TCT blade1 Pcs dust bagPacked by color box",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "BMS14007.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/BMS14007%20-%20Ingco%201400w%20Mitre%20Saw/BMS14007.jpg"
            }
        ],
        "price": "16250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcm-216---bosch-1100w-mitre-saw",
        "name": "GCM 216 - Bosch 1100w Mitre Saw",
        "description": "Specifications:\n\nRated input power: 1,300 W\nSaw blade diameter: 216 mm\nMitre setting: 47 ° L / 47 ° R\nBevel setting: 45 ° L / 0 ° R\nSaw blade bore diameter: 30 mm\nCutting capacity, 0°: 60 x 123 mm\nCutting capacity, 45° mitre: 60 x 80 mm\nCutting capacity, 45° bevel: 43 x 123 mm\nTool dimensions (width x length x height): 500 x455 x325 mm\nNo-load speed: 4,800 rpm\nWeight: 10.1 kg",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "o357457v54_GCM_216_dyn.webp",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/GCM%20216%20-%20Bosch%201100w%20Mitre%20Saw/o357457v54_GCM_216_dyn.webp"
            }
        ],
        "price": "32000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gcm-254---bosch-1750w-mitre-saw",
        "name": "GCM 254 - Bosch 1750w Mitre Saw",
        "description": "Specifications:\n\nRated input power: 1,750 W\nSaw blade diameter: 254 mm\nMitre setting: 47 ° L / 52 ° R\nBevel setting: 45 ° L / 0 ° R\nSaw blade bore diameter: 25.4 mm\nCutting capacity, 0°: 90 x 130 mm\nCutting capacity, 45° mitre: 90 x 91 mm\nCutting capacity, 45° bevel: 60 x 130 mm\nTool dimensions (width x length x height): 477 x559 x567 mm\nNo-load speed: 5,000 – 5,000 rpm\nWeight: 11.1 kg",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "o404641v54_GCM_254_dyn_REE.webp",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/GCM%20254%20-%20Bosch%201750w%20Mitre%20Saw/o404641v54_GCM_254_dyn_REE.webp"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ts42142107---total-1400-mitre-saw",
        "name": "TS42142107 - Total 1400 Mitre Saw",
        "description": "SPECIFICATIONS\n\nVoltage:220-240V~50/60Hz\nInput power:1400W\nNo-load speed:5000rpm\nBlade size:210mmx25.4mm\nMax.cutting capacity:55mmx120mm\nMitre cuts 0-45°left and right\nBevel cuts up to 45°to the left\nWith 1set extra carbon brushes\nWith 2pcs extension bars\nWith 1pcs TCT blade\nWith 1pcs dust bag\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Mitre Saw",
        "images": [
            {
                "name": "TS42142107.jpg",
                "url": "/website%20products/Power%20Tools/Mitre%20Saw/TS42142107%20-%20Total%201400%20Mitre%20Saw/TS42142107.jpg"
            }
        ],
        "price": "17000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cbnli2016---ingco-cordless-brad-nailer",
        "name": "CBNLI2016 - Ingco Cordless Brad Nailer",
        "description": "Specifications:\nVoltage:20V\nWith 1pcs 20V 2.0AH battery (FBLI2001)and 1pcs charge (FCLI2001E)\nNail type:F15~F50\nSuitable for:ANA18201,ANA18251,ANA18301,ANA18351,ANA18401,ANA18501\nDrive rate:2.5nails/s\nMagazine capacity:100pcs\nRamp up time:80ms\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "CBNLI2016.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/CBNLI2016%20-%20Ingco%20Cordless%20Brad%20Nailer/CBNLI2016.jpg"
            }
        ],
        "price": "29000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cbnli3508---ingco-cordless-brad-nailer",
        "name": "CBNLI3508 - Ingco Cordless Brad Nailer",
        "description": "Voltage20V\nNail type F15~F35\nDrive rate 3 nailss\nMagazine capacity 105pcs\nNet weight 1.7kg\nInclude\n1000 Pcs brad nails (35mm)\n1pcs air nozzle\n1pcs pin\n1 Pcs 20V 2.0AH battery(FBLI2001)\n1 Pcs charger(FCLI2001E)\nCharge volts 220-240V~5060Hz\nPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "CBNLI3508.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/CBNLI3508%20-%20Ingco%20Cordless%20Brad%20Nailer/CBNLI3508.jpg"
            }
        ],
        "price": "24000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcbnli3508---total-cordless-brad-nailer-35mm",
        "name": "TCBNLI3508 - Total Cordless Brad Nailer (35mm)",
        "description": "Voltage:20V\nNail type: F15~F35\nDrive rate: 3 nails/s\nMagazine capacity: 105pcs\nNet weight: 1.7kg\nInclude:\n1000 Pcs brad nails (35mm)\n1pcs air nozzle\n1pcs pin\n1 Pcs 20V 2.0AH battery(TFBLI2001)\n1 Pcs charger(TFCLI2001E)\nCharge volts: 220-240V~50/60Hz\nPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "TCBNLI3508.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/TCBNLI3508%20-%20Total%20Cordless%20Brad%20Nailer%20(35mm)/TCBNLI3508.jpg"
            }
        ],
        "price": "21000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tcbnli5005---total-cordless-brad-nailer-50mm",
        "name": "TCBNLI5005 - Total Cordless Brad Nailer (50mm)",
        "description": "Voltage:20V\nNail type: F15~F50\nDrive rate: 3 nails/s\nMagazine capacity: 105pcs\nBrushless motor\nBattery and charger sold separately\nInclude:\n1000 Pcs brad nails (50mm)\n1pcs air nozzle\n1pcs pin\nPacked by plastic box",
        "category": "Power Tools",
        "subcategory": "Nail Guns",
        "images": [
            {
                "name": "TCBNLI5005.jpg",
                "url": "/website%20products/Power%20Tools/Nail%20Guns/TCBNLI5005%20-%20Total%20Cordless%20Brad%20Nailer%20(50mm)/TCBNLI5005.jpg"
            }
        ],
        "price": "24000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tt328151---total-1400w-plastic-pipe-welding-tool-ppr-welding-machine",
        "name": "TT328151 - Total 1400w Plastic Pipe Welding Tool (PPR Welding Machine)",
        "description": "SPECIFICATIONS\n\nVOLTAGE\n230V - 50Hz\nPOWER\n800 / 1.500W\nSPEEDS\n2\nTEMPERATURE\n0 - 300o C\nHEATING SOCKETS\n20 - 25 - 32 - 40 - 50 - 63mm\nWEIGHT\n4.9 Kg",
        "category": "Power Tools",
        "subcategory": "Pipe Welding (PPR) Tools",
        "images": [
            {
                "name": "TT328151.jpg",
                "url": "/website%20products/Power%20Tools/Pipe%20Welding%20(PPR)%20Tools/TT328151%20-%20Total%201400w%20Plastic%20Pipe%20Welding%20Tool%20(PPR%20Welding%20Machine)/TT328151.jpg"
            }
        ],
        "price": "8000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbh-12-52-dv-professional---bosch-1700w-rotary-hammer",
        "name": "GBH 12-52 DV Professional - Bosch 1700w Rotary Hammer",
        "description": "Performance data\n\nImpact rate at rated speed: 1,025 – 2,100 bpm\nRated speed: 105 – 215 rpm\nAdditional data\nRated input power: 1700 W\nImpact energy: 19 J\nTool holder: SDS max\nVoltage, electrical: 230 V\nWeight: 11.9 kg\nDrilling range\nDrilling dia. concrete, hammer drill bits: 12 – 52 mm\nOpt. appl. range concrete, hammer drill bits: 30 – 50 mm\nDrilling dia. concrete, breakthrough drill bits: 80 – 80 mm\nDrilling diameter in concrete with core cutters: 50 – 150 mm\nTotal vibration values (Hammer drilling in concrete)\nVibration emission value ah: 10.8 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 10.6 m/s²\nHammer drilling in concrete\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o375983v54_GBH_12-52_DV_sos_F4_0611266000_30_40_60_B0.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%2012-52%20DV%20Professional%20-%20Bosch%201700w%20Rotary%20Hammer/o375983v54_GBH_12-52_DV_sos_F4_0611266000_30_40_60_B0.webp"
            }
        ],
        "price": "163000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbh-2-24-dre-professional---bosch-800w-rotary-hammer",
        "name": "GBH 2-24 DRE Professional - Bosch 800w Rotary Hammer",
        "description": "Performance data\n\nImpact rate at rated speed: 0 – 4,200 bpm\nRated speed: 0 – 930 rpm\nAdditional data\nRated input power: 790 W\nImpact energy: 2.7 J\nTool holder: SDS plus\nWeight: 2.8 kg",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o246408v54_lv-105498-12-GBH2-24DRE_dyn_02.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%202-24%20DRE%20Professional%20-%20Bosch%20800w%20Rotary%20Hammer/o246408v54_lv-105498-12-GBH2-24DRE_dyn_02.webp"
            }
        ],
        "price": "26600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbh-2-26-f-professional---bosch-830w-rotary-hammer",
        "name": "GBH 2-26 F Professional - Bosch 830w Rotary Hammer",
        "description": "Performance data\n\nImpact rate at rated speed: 0 – 4,000 bpm\nRated speed: 0 – 900 rpm\nAdditional data\nRated input power: 830 W\nImpact energy: 2.7 J\nTool holder: SDS plus\nVoltage, electrical: 230 V\nWeight: 3 kg\nDrilling range\nDrilling dia. concrete, hammer drill bits: 4 – 26 mm\nOpt. appl. range concrete, hammer drill bits: 8 – 16 mm\nDrilling diameter in concrete with core cutters: 68 mm\nTotal vibration values (Hammer drilling in concrete)\nVibration emission value ah: 15.3 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 11.5 m/s²\nHammer drilling in concrete\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o376079v54_GBH_2-26_F_sos_F4_06112A4070_00_30_60.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%202-26%20F%20Professional%20-%20Bosch%20830w%20Rotary%20Hammer/o376079v54_GBH_2-26_F_sos_F4_06112A4070_00_30_60.webp"
            }
        ],
        "price": "34700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gbh-8-45-d-professional---bosch-1500w-rotary-hammer",
        "name": "GBH 8-45 D Professional - Bosch 1500w Rotary Hammer",
        "description": "Performance data\n\nImpact rate at rated speed: 1,475 – 2,700 bpm\nRated speed: 165 – 300 rpm\nAdditional data\nRated input power: 1500 W\nImpact energy: 12.5 J\nTool holder: SDS max\nVoltage, electrical: 230 V\nWeight: 8.2 kg\nDrilling range\nDrilling dia. concrete, hammer drill bits: 12 – 45 mm\nOpt. appl. range concrete, hammer drill bits: 20 – 40 mm\nDrilling dia. concrete, breakthrough drill bits: 80 – 80 mm\nDrilling diameter in concrete with core cutters: 125 mm\nTotal vibration values (Hammer drilling in concrete)\nVibration emission value ah: 24.3 m/s²\nUncertainty K: 1.5 m/s²\nTotal vibration values (Chiselling in concrete)\nVibration emission value ah: 14.8 m/s²\nHammer drilling in concrete\nChiselling in concrete",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "o375979v54_GBH_8-45_D_sos_F4_0611265100_30_40_60.webp",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/GBH%208-45%20D%20Professional%20-%20Bosch%201500w%20Rotary%20Hammer/o375979v54_GBH_8-45_D_sos_F4_0611265100_30_40_60.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "rgh9028---ingco-800w-rotary-hammer-1-chuck",
        "name": "RGH9028 - Ingco 800w Rotary Hammer (1 Chuck)",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:800WNo-load speed:0-1100rpmImpact rate:0-4000bpmImpact energy:2.5JMax.drilling capacity:Concrete:26mmSteel:13mmWood:30mmSDS plus chuck systemWith 3 drills and 2 chiselsWith 1set extra carbon brushesPacked by BMC",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "RGH9028.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/RGH9028%20-%20Ingco%20800w%20Rotary%20Hammer%20(1%20Chuck)/RGH9028.jpg"
            }
        ],
        "price": "10",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "rgh9028-2---ingco-800w-rotary-hammer-2-chuck",
        "name": "RGH9028-2 - Ingco 800w Rotary Hammer (2 Chuck)",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:800WNo-load speed:0-1100rpmImpact rate:0-4000bpmImpact energy:2.5JMax.drilling capacity:Concrete:26mmSteel:13mmWood:30mmSDS plus chuck systemWith 3 drills and 2 chiselsWith 1set extra carbon brushesWith 1pcs keyless quick-change chuckPacked by BMC",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "RGH9028-2.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/RGH9028-2%20-%20Ingco%20800w%20Rotary%20Hammer%20(2%20Chuck)/RGH9028-2.jpg"
            }
        ],
        "price": "13000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "th110266---total-1050w-rotary-hammer",
        "name": "TH110266 - Total 1050w Rotary Hammer",
        "description": "SPECIFICATIONS:\n\nVoltage:220-240V~50/60Hz\nInput power:1050W\nNo-load speed:1100rpm\nImpact rate:3800bpm\nImpact energy:4.5J\nMax.drilling capacity:\nConcrete:26mm\nSteel:13mm\nWood:40mm\nSDS plus chuck system\nWith 3 drills and 2 chisels\nPacked by BMC",
        "category": "Power Tools",
        "subcategory": "Rotary Hammers",
        "images": [
            {
                "name": "TH110266.jpg",
                "url": "/website%20products/Power%20Tools/Rotary%20Hammers/TH110266%20-%20Total%201050w%20Rotary%20Hammer/TH110266.jpg"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "th308268-2---total-800w-rotary-hammer-2-chucks",
        "name": "TH308268-2 - Total 800w Rotary Hammer (2 Chucks)",
        "description": "SPECIFICATIONS:\n\nVOLTAGE\n230V - 50Hz\nPOWER\n800W\nIMPACT POWER\n2.5 J\nNO LOAD SPEED\n0 - 1.250 rpm / min\nIMPACT RATE\n0 - 5.300 rpm / min\nDRILLING CAPACITY\n26mm (CONCRETE) / 13mm (STEEL) / 30mm (WOOD)\nWEIGHT\n3.85 Kg",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gkf-550---bosch-550w-palm-router",
        "name": "GKF 550 - Bosch 550w Palm Router",
        "description": "Additional data\n\nRated input power: 550 W\nNo-load speed: 33,000 rpm\nCompatible collet diameters: 6mm\nWeight: 1.4 kg",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "o316066v54_gkf_550_dyn_1.webp",
                "url": "/website%20products/Power%20Tools/Routers/GKF%20550%20-%20Bosch%20550w%20Palm%20Router/o316066v54_gkf_550_dyn_1.webp"
            }
        ],
        "price": "11500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gof-130---bosch-1300w-router",
        "name": "GOF 130 - Bosch 1300w Router",
        "description": "Additional data\n\nRated input power: 1300 W\nNo-load speed: 11,000 – 28,000 rpm\nBit holder: 6 – 8.0 mm\nRouter bit diameter: 40 mm\nMaximum router cage stroke: 55 mm\nWeight: 3.5 kg\nTotal vibration values (Sanding solid wood)\nVibration emission value ah: 4 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 86 dB(A)\nSound power level: 97 dB(A)\nUncertainty K: 3 dB\nSanding solid wood",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "o345597v54_433.webp",
                "url": "/website%20products/Power%20Tools/Routers/GOF%20130%20-%20Bosch%201300w%20Router/o345597v54_433.webp"
            }
        ],
        "price": "18560",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "plm6001---ingco-laminate-trimmer-palm-router",
        "name": "PLM6001 - Ingco Laminate Trimmer (Palm Router)",
        "description": "Voltage: 220-240V ~ 50/60Hz\nInput Power: 600W\nNo-load Speed: 34,500 rpm\nCollet Size: 6mm and 1/4\"\nIncludes:\n1 pcs Template guide\n1 set Trimmer guide\n1 set Straight guide\n1 set Extra carbon brushes\nPacked by: Color box",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "PLM6001.jpg",
                "url": "/website%20products/Power%20Tools/Routers/PLM6001%20-%20Ingco%20Laminate%20Trimmer%20(Palm%20Router)/PLM6001.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "rt22008---ingco-2200w-router",
        "name": "RT22008 - Ingco 2200w Router",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:2200WNo-load speed:14000-20000rpmCollet size:6mm,8mm,12mm,1/4\",1/2\"Plunge capacity:0-60mmVariable speed controlWith 1pcs guide holderWith 1pcs template guideWith 1pcs trimmer guideWith 1pcs straight guideWith 1set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "RT22008.jpg",
                "url": "/website%20products/Power%20Tools/Routers/RT22008%20-%20Ingco%202200w%20Router/RT22008.jpg"
            }
        ],
        "price": "18500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tlt6001---total-laminate-trimmer-palm-router",
        "name": "TLT6001 - Total Laminate Trimmer (Palm Router)",
        "description": "Voltage:220-240V~50/60Hz\nInput power:600W\nNo-load speed: 34500rpm\nCollet size: 6mm and 1/4\"\nInclude:\n2Pcs wrenches\n1Pcs template guide\n1Pcs horizontal guide rail\n1Pcs linear guide\n1Set roller components\n1Set extra carbon brushes\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Routers",
        "images": [
            {
                "name": "TLT6001.jpg",
                "url": "/website%20products/Power%20Tools/Routers/TLT6001%20-%20Total%20Laminate%20Trimmer%20(Palm%20Router)/TLT6001.jpg"
            }
        ],
        "price": "8500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tr111226---total-2200w-router",
        "name": "TR111226 - Total 2200w Router",
        "description": "SPECIFICATIONS:\n\nVOLTAGE\n230V - 50Hz\nPOWER\n2.200W\nNO LOAD SPEED\n9.000 - 23.000 rpm / min\nCOLLECT SIZE\n6 / 8 / 12mm\nPLUNGE DEPTH\n0 - 60mm\nWEIGHT\n4.7 Kg",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fs3208---ingco-350w-finishing-sander",
        "name": "FS3208 - Ingco 350w Finishing Sander",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:320WNo-load speed:14000rpmBottom base:90mmx180mmAluminum durable baseWith 5pcs sand papers(AKFS240101-1)With 1set extra carbon brushesPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gex-125---bosch-280w-random-orbital-sander",
        "name": "GEX 125 - Bosch 280w Random Orbital Sander",
        "description": "Specifications:\n\nRated input power: 280 W\nSanding pad diameter: 125 mm\nOrbit diameter: 2.6 mm\nWeight: 1.4 kg\nNo-load speed: 7,500 – 12,000 rpm\nOrbital stroke rate: 15,000 – 24,000 opm\nEccentricity: 1.3 mm\nTotal vibration values (Sanding solid wood)\nVibration emission value ah: 3.8 m/s²\nUncertainty K: 1.5 m/s²\nSanding solid wood",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o407281v54_gex_125_BeautyShot.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%20125%20-%20Bosch%20280w%20Random%20Orbital%20Sander/o407281v54_gex_125_BeautyShot.webp"
            }
        ],
        "price": "12700",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gex-125-1-ae---bosch-250w-random-orbital-sander",
        "name": "GEX 125-1 AE - Bosch 250w Random Orbital Sander",
        "description": "Specifications:\n\nRated input power: 250 W\nSanding pad diameter: 125 mm\nOrbit diameter: 2.5 mm\nVoltage, electrical: 240 V\nWeight: 1.3 kg\nNo-load speed: 7,500 – 12,000 rpm\nOrbital stroke rate: 15,000 – 24,000 opm\nEccentricity: 1.25 mm\nSanding sheet / disc attachment: hook-and-loop fastening\nTotal vibration values (Sanding solid wood)\nVibration emission value ah: 5 m/s²\nUncertainty K: 1.5 m/s²\nSanding solid wood",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o361136v54_GEX_125-1_AE_sos_0601387503.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%20125-1%20AE%20-%20Bosch%20250w%20Random%20Orbital%20Sander/o361136v54_GEX_125-1_AE_sos_0601387503.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gex-40-150---bosch-400w-random-orbital-sander",
        "name": "GEX 40-150 - Bosch 400w Random Orbital Sander",
        "description": "Specifications:\n\nAdditional data\nRated input power:400 W\nSanding pad diameter: 150 mm\nOrbit diameter: 4 mm\nVoltage, electrical: 230 V\nWeight: 2.4 kg\nNo-load speed: 5,500 – 12,000 rpm\nOrbital stroke rate: 11,000 – 24,000 opm\nEccentricity: 2 mm\nSanding sheet / disc attachment: hook-and-loop fastening\nTotal vibration values (Sanding solid wood)\nVibration emission value ah: 2.5 m/s²\nUncertainty K: 1.5 m/s²\nSanding solid wood\nVibration emission value ah:2.5 m/s²\nUncertainty K: s1.5 m/s²",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o379329v54_GEX_40-150_sos_F4_060137B250_02.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GEX%2040-150%20-%20Bosch%20400w%20Random%20Orbital%20Sander/o379329v54_GEX_40-150_sos_F4_060137B250_02.webp"
            }
        ],
        "price": "37030",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gss-140---bosch-220w-finishing-sander",
        "name": "GSS 140 - Bosch 220w Finishing Sander",
        "description": "Specifications:\n\nAdditional data\nRated input power: 220 W\nVoltage, electrical: 240 V\nWeight: 1.1 kg\nNo-load speed: 14,000 – 14,000 rpm\nNo-load orbital stroke rate: 28,000 – 28,000 rpm\nOrbit diameter: 1.5 mm\nSanding surface\nSanding plate, width: 101 mm\nSanding plate, length: 112 mm\nTotal vibration values (Sanding panel materials)\nVibration emission value ah: 2.5 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 93 dB(A)\nSound power level: 85 dB(A)\nUncertainty K: 3 dB\nSanding panel materials",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o428054v54_428054.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GSS%20140%20-%20Bosch%20220w%20Finishing%20Sander/o428054v54_428054.webp"
            }
        ],
        "price": "5490",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gss-20-18---bosch-200w-finishing-sander",
        "name": "GSS 20-18 - Bosch 200w Finishing Sander",
        "description": "Specifications:\n\nRated input power: 200 W\nWeight: 1.5 kg\nNo-load speed: 12,000 – 12,000 rpm\nNo-load orbital stroke rate: 24,000 – 24,000 opm\nOrbit diameter: 2 mm\nSanding surface\nSanding plate, width: 90 mm\nSanding plate, length: 183 mm\nTotal vibration values (Sanding panel materials)\nVibration emission value ah: 2.8 m/s²\nUncertainty K: 1.5 m/s²\nNoise/vibration information\nSound pressure level: 73 dB(A)\nSound power level: 81 dB(A)\nUncertainty K: 3 dB\nSanding panel materials",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "o476965v54_GSS_20-18_Dyn.webp",
                "url": "/website%20products/Power%20Tools/Sanders/GSS%2020-18%20-%20Bosch%20200w%20Finishing%20Sander/o476965v54_GSS_20-18_Dyn.webp"
            }
        ],
        "price": "8990",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pbs12001---ingco-belt-sander",
        "name": "PBS12001 - Ingco Belt Sander",
        "description": "Specifications:\n\nVoltage:220-240V~50/60HzInput power:1200WNo-load speed:500rpmSanding belt size: 610x100mmQuick release belt change systemDust suction facilityAluminum housing baseWith 1pcs sanding beltWith 1set extra carbon brushesPacked by color box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "rs4516---ingco-450w-rotary-sander",
        "name": "RS4516 - Ingco 450w Rotary Sander",
        "description": "Specifications:\n\n Voltage: 220-240V~50/60HzInput power: 450WNo-load speed: 6000-12000rpmDia of sanding pad:150mmVelcrops baseVariable speed controlWith 5pcs sand papersWith 1set extra carbon brushesPacked by color box",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "[RS4516] RS4516 ROTARY SANDER 450W.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/RS4516%20-%20Ingco%20450w%20Rotary%20Sander/%5BRS4516%5D%20RS4516%20ROTARY%20SANDER%20450W.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tf2061506---total-rotary-sander-450w",
        "name": "TF2061506 - Total Rotary Sander (450W)",
        "description": "Voltage:220-240V~50/60Hz\nInput power:450W\nNo-load speed:6000-12000rpm\nDia of sanding pad:150mm\nVelcrops base\nVariable speed control\nWith 5pcs sand papers\nWith 1set extra carbon brushes\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "TF2061506.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/TF2061506%20-%20Total%20Rotary%20Sander%20(450W)/TF2061506.jpg"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tf2131256---total-350w-rotary-sander",
        "name": "TF2131256 - Total 350w Rotary Sander",
        "description": "Specifications:\n\nModel no.\nTF2031256\nVoltage\n220-240V ~ 50/60Hz\nInput power\n320W\nNo-load speed\n12000/min\nDiameter of sanding pad\n125mm\nSuitable with\nSanding Base Pad, Sanding Sheets",
        "category": "Power Tools",
        "subcategory": "Sanders",
        "images": [
            {
                "name": "TF2031256-1.jpg",
                "url": "/website%20products/Power%20Tools/Sanders/TF2131256%20-%20Total%20350w%20Rotary%20Sander/TF2031256-1.jpg"
            }
        ],
        "price": "7500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "si01606---ingco-70w-soldering-iron-variable-temp",
        "name": "SI01606 - Ingco 70W Soldering Iron (Variable Temp)",
        "description": "Voltage:110-120V~50/60Hz\nInput power: 70W\nPreheat: time: 120s\nMax. temperature: 500℃\nCeramic heating element\nStraight, tip head\nAdjustable temperature\nFast and stable heating, easy to replace\nWith a piece of holder\nLong life replaceable tip\nPacked by double blister",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "614392904_1964640621114962_3363497205725538829_n (1).jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01606%20-%20Ingco%2070W%20Soldering%20Iron%20(Variable%20Temp)/614392904_1964640621114962_3363497205725538829_n%20(1).jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "si01608---ingco-90w-soldering-iron-variable-temp",
        "name": "SI01608 - Ingco 90W Soldering Iron (Variable Temp)",
        "description": "Voltage:220-240V~50/60Hz\nInput power: 90W\nPreheat: time: 90s\nMax. temperature: 500℃\nCeramic heating element\nStraight, tip head\nAdjustable temperature\nFast and stable heating, easy to replace\nWith a piece of holder\nLong life replaceable tip\nPacked by double blister",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "611665266_1433256218815284_6687341826696230321_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01608%20-%20Ingco%2090W%20Soldering%20Iron%20(Variable%20Temp)/611665266_1433256218815284_6687341826696230321_n.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "si01610---ingco-120w-soldering-iron-variable-temp",
        "name": "SI01610 - Ingco 120W Soldering Iron (Variable Temp)",
        "description": "Voltage:220-240V~50/60Hz\nInput power: 120W\nPreheat.time:70s\nMax. temperature: 500℃\nCeramic heating element\nStraight, tip head\nSingle chip for stable temperature control\nDigital display temperature adjustment\nFast and stable heating, easy to replace\nWith a piece of holder\nLong life replaceable tip\nPacked by double blister",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "613239581_757788213464455_2855882867687363714_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/SI01610%20-%20Ingco%20120W%20Soldering%20Iron%20(Variable%20Temp)/613239581_757788213464455_2855882867687363714_n.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tet1606---total-60w-electric-soldering-iron",
        "name": "TET1606 - Total 60W Electric Soldering Iron",
        "description": "Voltage:220-240V~50/60Hz\nInput power:60W\nPreheat.time:3~5minutes\nStraight,tip head\nWith a piece of support\nLong life replaceble tip\nPacked by sliding card",
        "category": "Power Tools",
        "subcategory": "Soldering Irons",
        "images": [
            {
                "name": "616660266_869643895926808_8679140178579609251_n.jpg",
                "url": "/website%20products/Power%20Tools/Soldering%20Irons/TET1606%20-%20Total%2060W%20Electric%20Soldering%20Iron/616660266_869643895926808_8679140178579609251_n.jpg"
            }
        ],
        "price": "1250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ing-mma1302---ingco-130a-welding-machine",
        "name": "ING-MMA1302 - Ingco 130A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage(V):1~220-240Frequency(Hz):50/60Output current(A):15-130Duty cycle(%):130A@45%LCD displayNo-load voltage(V):75Max.output current(A):130Diameter of electrode(mm):1.6-3.2Anti-stick/Hot start/Arc-forceWith 1pcs electrode holder with cableWith 1pcs earth clamp with cableWith 1pcs wire brush and 1pcs helmetPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA1302.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA1302%20-%20Ingco%20130A%20Welding%20Machine/ING-MMA1302.jpg"
            }
        ],
        "price": "15000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ing-mma1606---ingco-160a-welding-machine",
        "name": "ING-MMA1606 - Ingco 160A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage(V):1~220-240Frequency(Hz):50/60Output current(A):10-160Duty cycle(%):160A@60%LCD displayLCD displayNo-load voltage(V):65Max.output current(A):160Diameter of electrode(mm):1.6-4.0Anti-stick/Hot start/Arc-forceWith 1pcs electrode holder with cableWith 1pcs earth clamp with cableWith 1pcs wire brush and 1pcs helmetPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA1606.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA1606%20-%20Ingco%20160A%20Welding%20Machine/ING-MMA1606.jpg"
            }
        ],
        "price": "18000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ing-mma18059---ingco-180a-welding-machine",
        "name": "ING-MMA18059 - Ingco 180A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage: 1~220-240VFrequency: 50/60HzOutput current: 15-180ADuty cycle:180A@45%LED displayNo-load voltage: 77VMax.output current: 180ADiameter of electrode: 1.6-4.0mmAnti-stick/Hot start/Arc-force1 Pcs electrode holder with cable1 Pcs earth clamp with cable1 Pcs wire brush1 Pcs helmetPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA18059.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA18059%20-%20Ingco%20180A%20Welding%20Machine/ING-MMA18059.jpg"
            }
        ],
        "price": "19750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ing-mma20069---ingco-200a-welding-machine",
        "name": "ING-MMA20069 - Ingco 200A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage: 1~220-240VFrequency: 50/60HzOutput current: 15-200ADuty cycle: 200A@60%LED displayNo-load voltage: 79VMax.output current: 200ADiameter of electrode: 1.6-4.0mmAnti-stick/Hot start/Arc-force1 Pcs electrode holder with cable1 Pcs earth clamp with cable1 Pcs wire brush1 Pcs helmetPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "ING-MMA20069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA20069%20-%20Ingco%20200A%20Welding%20Machine/ING-MMA20069.jpg"
            }
        ],
        "price": "20790",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ing-mma2508---ingco-250a-welding-machine",
        "name": "ING-MMA2508 - Ingco 250A Welding Machine",
        "description": "Specifications:\n\nIGBT Inverter technologyInput voltage(V):1~220-240Phase:SingleFrequency（HZ）:50/60Output current(A):15-250Duty cycle(%):250A@60%No-load voltage(V):77Max.output current(A):250Diameter of electrode(mm):1.6-5.0With 1pcs electrode holder with cableWith 1pcs earth clamp with cableWith 1pcs wire brush and 1pcs helmetPacked by carton box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "[ING-MMA2506] ING-MMA2506 INVERTER WELDING MACHINE 250A.png",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/ING-MMA2508%20-%20Ingco%20250A%20Welding%20Machine/%5BING-MMA2506%5D%20ING-MMA2506%20INVERTER%20WELDING%20MACHINE%20250A.png"
            }
        ],
        "price": "50000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "prescott-mig-mma-tig-lift-200-multi-process-welder",
        "name": "Prescott MIG MMA TIG LIFT-200 Multi-Process Welder",
        "description": "Rated Input Voltage(V): 1Hp,230V,+ -15%\nFrenquency(Hz): 50/60 Hz\nRated Input Power(Kva):5.7 Kva\nNo-Load Voltage: 65V\nRated Output Voltage: 26 A\nOutput Current Range: 20A-200A\nDuty Cycle(%): 60%\nEfficiency: 85%\nFor Welding Mild Steel,Stainless Steel, Aluminum, Or Other Alloys\nElectrode Diameter (mm): 1.6-3.25 WIRE\nDIAMETER(mm):0.6-1.0 Insulation\nInsulation class:F\nProtection class:IP21S\nMaterial : 100% Copper\nBody:STEEL\nAccessoriess :\n1 pc Welding Mask / 1 pc mmA cable /1 pc Ground cable /1 pc Mig cable / 1 pc TIG LIFT Cable & 1pcs Brush\nNet Weight : 8.75 KG",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "{B8E8E730-BB56-4E5A-9612-7E7CFEB508E2}.png",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/Prescott%20MIG%20MMA%20TIG%20LIFT-200%20Multi-Process%20Welder/%7BB8E8E730-BB56-4E5A-9612-7E7CFEB508E2%7D.png"
            }
        ],
        "price": "63500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tw21306---total-130a-welding-machine",
        "name": "TW21306 - Total 130A Welding Machine",
        "description": "Specifications:\n\nVOLTAGE\n230V - 50Hz\nAMPERE\n10 - 130A\nDUTY CYCLE 40%\n130A\nNO LOAD VOLTAGE\n85V\nELECTRODE SIZE\n1.6 - 3.25mm\nWEIGHT\n2.5 Kg",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW21306.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW21306%20-%20Total%20130A%20Welding%20Machine/TW21306.jpg"
            }
        ],
        "price": "12000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tw218016---total-180a-welding-machine",
        "name": "TW218016 - Total 180A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technology\nInput voltage: 1~220-240V\nFrequency: 50/60Hz\nOutput current: 15-180A\nDuty cycle:180A@40%\nLED display\nNo-load voltage: 85V\nMax.output current: 180A\nDiameter of electrode: 1.6-4.0mm\nAnti-stick/Hot start/Arc-force\n1 Pcs electrode holder with cable\n1 Pcs earth clamp with cable\n1 Pcs wire brush\n1 Pcs helmet\n1 Pcs portable strap\nPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW218016.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW218016%20-%20Total%20180A%20Welding%20Machine/TW218016.jpg"
            }
        ],
        "price": "17500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tw220069---total-200a-welding-machine",
        "name": "TW220069 - Total 200A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage: 1~220-240VFrequency: 50/60HzOutput current: 15-200ADuty cycle: 200A@60%LED displayNo-load voltage: 79VMax.output current: 200ADiameter of electrode: 1.6-4.0mmAnti-stick/Hot start/Arc-force1 Pcs electrode holder with cable1 Pcs earth clamp with cable1 Pcs wire brush1 Pcs helmetPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW220069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW220069%20-%20Total%20200A%20Welding%20Machine/TW220069.jpg"
            }
        ],
        "price": "19500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tw225069---total-250a-welding-machine",
        "name": "TW225069 - Total 250A Welding Machine",
        "description": "Specifications:\n\nIGBT inverter technologyInput voltage: 1~220-240VFrequency: 50/60HzOutput current: 15-250ADuty cycle: 250A@60%LED displayNo-load voltage: 80VMax.output current: 250ADiameter of electrode: 1.6-5.0mmAnti-stick/Hot start/Arc-force1 Pcs electrode holder with cable1 Pcs earth clamp with cable1 Pcs wire brush1 Pcs helmetPacked by color box",
        "category": "Power Tools",
        "subcategory": "Welding Machines",
        "images": [
            {
                "name": "TW225069.jpg",
                "url": "/website%20products/Power%20Tools/Welding%20Machines/TW225069%20-%20Total%20250A%20Welding%20Machine/TW225069.jpg"
            }
        ],
        "price": "29000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl521021xl---deli-knitted-gloves-and-pvc-dots-xl",
        "name": "DL521021XL - Deli Knitted Gloves and PVC Dots (XL)",
        "description": "Material: Polyester fiber with PVC dots\nSize: XL\nAnti-skid PVC palm beads for improved grip\nPackaging: Poly Bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "1_-_2024-05-09t014131.080.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/DL521021XL%20-%20Deli%20Knitted%20Gloves%20and%20PVC%20Dots%20(XL)/1_-_2024-05-09t014131.080.webp"
            }
        ],
        "price": "120",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl521032---deli-polyester-pu-safety-gloves",
        "name": "DL521032 - Deli Polyester (PU) Safety Gloves",
        "description": "Material: Breathable polyester knit with PU palm coating for dependable grip\n\nKnitting: 13-needle construction provides softness and flexibility\nElastic Cuffs: Ensure secure fit and easy on/off\nSize: Large (L) to fit most adult hands comfortably\nGrip & Durability: PU-coated palms resist abrasion and improve handling\nApplications: Suited for warehouse, repair, transport, and general labor tasks",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "Screenshot 2026-04-14 101205.png",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/DL521032%20-%20Deli%20Polyester%20(PU)%20Safety%20Gloves/Screenshot%202026-04-14%20101205.png"
            }
        ],
        "price": "150",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hgvw01---ingco-14-inch-welding-leather-gloves",
        "name": "HGVW01 - Ingco 14 Inch Welding Leather Gloves",
        "description": "Size:14\"\nUse for welding worker etc.\nDescription:cow split leather welder gloves, one piece back, full lining\nPacked by poly bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "[HGVW01] HGVW01 WELDING LEATHER GLOVES 14_.jfif",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/HGVW01%20-%20Ingco%2014%20Inch%20Welding%20Leather%20Gloves/%5BHGVW01%5D%20HGVW01%20WELDING%20LEATHER%20GLOVES%2014_.jfif"
            }
        ],
        "price": "1400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hgvw02---ingco-16-inch-welding-leather-gloves",
        "name": "HGVW02 - Ingco 16 Inch Welding Leather Gloves",
        "description": "Length:16\"\nUse for professional welding worker etc.\nCow split leather welder gloves, one piece back, full lining\nfull palm with double palm\nPacked by poly bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "[HGVW02] HGVW02 WELDING LEATHER GLOVES.png",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/HGVW02%20-%20Ingco%2016%20Inch%20Welding%20Leather%20Gloves/%5BHGVW02%5D%20HGVW02%20WELDING%20LEATHER%20GLOVES.png"
            }
        ],
        "price": "1890",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp1702-xl---total-cut-resistant-gloves",
        "name": "TSP1702-XL - Total Cut Resistant Gloves",
        "description": "HAND PROTECTION:Use for glass processing\nSize:XL\nLiner Material:HPPE shell,Level C cut-resistant glove core\nCoating material/Finish: PU\nGauge:13\nProtection level:4X43C\nPU coated palm,flexible and good feeling.\nHPPE shell,cut-resistance and abrasion.\n1pair/paper\nPacked by paper card",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "TSP1702-XL.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/TSP1702-XL%20-%20Total%20Cut%20Resistant%20Gloves/TSP1702-XL.jpg"
            }
        ],
        "price": "600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp1806-xl---total-mechanic-gloves",
        "name": "TSP1806-XL - Total Mechanic Gloves",
        "description": "Protection rating\tEN388 2131X\nMaterial\tMicrofibre, Polyurethane (PU) Leather\nSize\tXL",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Gloves",
        "images": [
            {
                "name": "TSP1806-XL.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Gloves/TSP1806-XL%20-%20Total%20Mechanic%20Gloves/TSP1806-XL.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-velcro-reflector",
        "name": "Generic Velcro Reflector",
        "description": "Professional Reflectors from the Safety Equipment (PPEs) collection. High-quality engineering for reliable performance.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Reflectors",
        "images": [
            {
                "name": "2-stripes-Reflector-Jacket.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Reflectors/Generic%20Velcro%20Reflector/2-stripes-Reflector-Jacket.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "generic-zip-reflector-with-pockets",
        "name": "Generic Zip Reflector with Pockets",
        "description": "Professional Reflectors from the Safety Equipment (PPEs) collection. High-quality engineering for reliable performance.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Reflectors",
        "images": [
            {
                "name": "Pocket-reflector-vest-2.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Reflectors/Generic%20Zip%20Reflector%20with%20Pockets/Pocket-reflector-vest-2.jpg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ahm111---ingco-auto-darkening-glasses",
        "name": "AHM111 - Ingco Auto Darkening Glasses",
        "description": "Viewing Area:95x31mm\nCartridge Size:108x 50.8x 5mm\nSensors:2\nLight State:3\nDark State:11\nUV/ lR Protection :Up to DlN 16\nON / OFF: Automatic Switch\nTime(light to dark):<0.5ms\nTlG amps rated:= 30 amps\nOperating Temperature:-5,~ +55\nStoring Temperature:-20?~ +70\nPower Supply: Solar Panel & Lithium Battery 2xCR1220",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "[AHM111] AHM111 AUTO-DARKENING WELDING GLASSES.jfif",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/AHM111%20-%20Ingco%20Auto%20Darkening%20Glasses/%5BAHM111%5D%20AHM111%20AUTO-DARKENING%20WELDING%20GLASSES.jfif"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dl522002---deli-medical-grade-safety-goggles",
        "name": "DL522002 - Deli Medical Grade Safety Goggles",
        "description": "Medical grade material\nPVC lens is wear- resistant\nand impact- resistant\nSwitchable ventilation hole\nDetachable lens\nPacked by PE Bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "uDgMDQwROD2_jrlowXgsrQ.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/DL522002%20-%20Deli%20Medical%20Grade%20Safety%20Goggles/uDgMDQwROD2_jrlowXgsrQ.jpg"
            }
        ],
        "price": "450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fpsg01---fixtec-pvc-safety-goggles",
        "name": "FPSG01 - Fixtec PVC Safety Goggles",
        "description": "Safety Goggles with CE approval\nFrame: PVC\nLens:PC,1.0mm thickness\nImpact resistant\nSoft and light weight PVC frame with air holes\nHigh-impact polycarbonate lenses have high transparency comfortable for wearing.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "humujing-FPSG01-800-800.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/FPSG01%20-%20Fixtec%20PVC%20Safety%20Goggles/humujing-FPSG01-800-800.webp"
            }
        ],
        "price": "300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "fpsg03---fixtec-safety-goggles",
        "name": "FPSG03 - Fixtec Safety Goggles",
        "description": "Safety Goggles with CE approval\nFrame:Nylon\nLens:PC\nExpert quality made from impact resistant polycarbonate\nGives clear distortion free viewing\nAdjustable leg of frame for comfortable use and fit",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "heisefanghujing-FPSG04-800-800.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/FPSG03%20-%20Fixtec%20Safety%20Goggles/heisefanghujing-FPSG04-800-800.webp"
            }
        ],
        "price": "200",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hsg06---ingco-safety-goggles-dark",
        "name": "HSG06 - Ingco Safety Goggles (Dark)",
        "description": "Material:PC\nDIN4\nDark shade:8\nEconomical wrap around style\nLight weight,comfortable to wear,wide visual field\nIndoor and outdoor lenses\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "HSG06.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/HSG06%20-%20Ingco%20Safety%20Goggles%20(Dark)/HSG06.jpg"
            }
        ],
        "price": "280",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp9403---total-auto-darking-welding-goggles",
        "name": "TSP9403 - Total Auto-Darking Welding Goggles",
        "description": "Viewing area: 90x35mm\nCartridge size: 108x 51x 5mm\nSensors: 2\nLight state: 4\nDark state: 11\nUV/IR protection: up to DIN 11\nON / OFF: automatic\nSwitch time(Light to dark): <1ms\nTIG amps rated: ≥ 30 amps\nOperating temperature: -5℃~ +55℃\nStoring temperature: -20℃~ +70℃\nPower supply: solar panel & lithium battery CR1025\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Goggles",
        "images": [
            {
                "name": "TSP9403.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Goggles/TSP9403%20-%20Total%20Auto-Darking%20Welding%20Goggles/TSP9403.jpg"
            }
        ],
        "price": "1750",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ace-safety-shoes-duma",
        "name": "ACE Safety Shoes (Duma)",
        "description": "Description\nAce® Duma Safety shoe is a professional footwear which offers an attractive style, great comfort and best protection. These shoes are composed of a steel toe cap, an anti-puncture steel midsole, which also provides the wearer shock absorption qualities and a genuine water resistant leather for your outdoor performance. Ace® Duma Safety shoe is an ideal safety shoe for anybody working in maintenance, transport, forestry, construction and mining industries.\n\nWork Comfortably in Any Environment with Stylish Ace Duma Safety Shoes Grey.\nTough, Comfortable, and Durable Safety Shoes for Your Workplace\nWorking in normal shoes can tire your feet or make them prone to injuries. With the increase in workplace accidents, you need to protect your feet from pain, swelling, paralysis, or more. The right safety shoes should protect your feet and still make you look dapper.\nAnd this is why you should consider getting a pair of Ace Duma Safety Shoes Grey. These shoes have a stylish look and can protect your feet from a range of workplace accidents. Our safety shoes are best for any maintenance, transport, forestry, mining industries and construction workers.\nMade of Genuine Leather\nCrafted from genuine leather, the Ace® Duma Safety Shoes provide superior protection and comfort. Each pair is built to last, ensuring reliable safety and performance. A great choice for any industrial or outdoor task.\nSteel Toe Cap\nThe Ace® Duma Safety Shoes are a reliable and comfortable choice for your work needs. With a steel toe cap providing 200J impact resistance, your feet are kept safe from potential hazards. A solid design ensures your safety and comfort, no matter where the job takes you.\nAnti-Slip\nThese boots also have a threaded outsole, offering a good grip on any terrain. Whether you work on surfaces exposed to oil or water, you’re safe from slips and fall accidents.\nAnti-Static\nThe footbed and sole of Ace Duma Shoes have superior shock absorption technologies that prevent your feet from suffering uncomfortable static and electrical shocks. This ensures extreme safety and comfort at work.\nBreathable Padding\nThe insoles of Ace Duma Shoes let air in and out, protecting your feet from sweating and foul odor. The added cushioning to your shoes also provides lasting comfort when using them on hard surfaces.\nProtect Your Feet in Style with Ace Duma Safety Shoes\nWant to look good on the job while still protecting your feet?\nAce Duma Safety Shoes is the shoe for you. It combines elegant style, premium protection, and maximum comfort at an affordable price.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Shoes",
        "images": [
            {
                "name": "ace-duma-safety-shoes-greywith-grey-strip-855465.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/ACE%20Safety%20Shoes%20(Duma)/ace-duma-safety-shoes-greywith-grey-strip-855465.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ace-safety-shoes-mamba",
        "name": "ACE Safety Shoes (Mamba)",
        "description": "Description\nAce® Mamba Safety shoe is a professional high ankle safety footwear which offers an attractive style, great comfort and best protection. These full ankle protection shoes are composed of a steel toe cap, that ensure your feet are protected from accidents at work. Ace Mamba High Ankle Safety Shoes also provide the wearer shock absorption qualities and have a genuine water resistant leather for your outdoor performance. Ace Mamba Safety shoe is an ideal safety shoe for anybody working in maintenance, transport, forestry, construction and mining industries.\n\nStylish and Durable Work Boots - Every Pair of Ace Mamba Safety Shoes Blue is a Powerhouse\nWork Comfortably and Safely with the Ace Mamba Safety Shoes\nWhen at your worksite, you’re exposed to a lot of dangers including pointed protrusions, electrical hazards, falling objects, as well as uneven greasy surfaces. In addition to other protective gear, you need the right safety work boots.\nAnd this is where the Ace Mamba Safety Shoes Blue comes in. These high-ankle protective shoes have an attractive style and offer unmatched protection to take on all types of work environments.\nPremium Shock Absorption\nThanks to its thick rubber sole, the Ace Mamba work boots offer superior shock absorption. This eliminates the impact on your feet and knees, and prevent a range of conditions such as flat feet.\nWater-Resistant\nThe Ace Mamba boasts of a hardy, high-quality leather sole that is water-resistant for the ultimate outdoor performance. With this water-resistance, you’re guaranteed a pair of work boots that can serve you for years.\nAnti-Slip\nThe sufficiently threaded outsole of the Ace Mamba boots offers a good grip on any terrain especially when the surface is exposed to water and oil. This protects you from slips and fall accidents.\nSteel Toe Cap\nThe metal plate incorporated around the toe section of the boot is sturdy enough to protect your feet from possible compression, falling debris, and sharp objects.\nHigh Ankle\nThe Ace Mamba Safety Shoes have cuffs that rise a few inches above the ankle bone to help keep the shoes snug nicely on your feet when laced up. The high ankle also gives your feet adequate support when using rough terrains.\nProtect Your Feet with the Right Safety Work Boots\nLooking for comfortable and safe boots for your demanding job Look no further than the Ace Mamba Safety Shoes. They’re suitable for all working environments including transport, construction, forestry, mining, electrical, and more.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Shoes",
        "images": [
            {
                "name": "ace-mamba-safety-shoes-blue-403703.webp",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/ACE%20Safety%20Shoes%20(Mamba)/ace-mamba-safety-shoes-blue-403703.webp"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cp-safety-shoes",
        "name": "C&P Safety Shoes",
        "description": "Professional Safety Shoes from the Safety Equipment (PPEs) collection. High-quality engineering for reliable performance.",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Safety Shoes",
        "images": [
            {
                "name": "WhatsApp Image 2026-04-14 at 10.58.25 (1).jpeg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/C%26P%20Safety%20Shoes/WhatsApp%20Image%202026-04-14%20at%2010.58.25%20(1).jpeg"
            },
            {
                "name": "WhatsApp Image 2026-04-14 at 10.58.25.jpeg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/C%26P%20Safety%20Shoes/WhatsApp%20Image%202026-04-14%20at%2010.58.25.jpeg"
            },
            {
                "name": "WhatsApp Image 2026-04-14 at 10.58.26 (1).jpeg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/C%26P%20Safety%20Shoes/WhatsApp%20Image%202026-04-14%20at%2010.58.26%20(1).jpeg"
            },
            {
                "name": "WhatsApp Image 2026-04-14 at 10.58.26 (2).jpeg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/C%26P%20Safety%20Shoes/WhatsApp%20Image%202026-04-14%20at%2010.58.26%20(2).jpeg"
            },
            {
                "name": "WhatsApp Image 2026-04-14 at 10.58.26.jpeg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Safety%20Shoes/C%26P%20Safety%20Shoes/WhatsApp%20Image%202026-04-14%20at%2010.58.26.jpeg"
            }
        ],
        "price": "",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ahm006---ingco-auto-darkening-welding-helmet",
        "name": "AHM006 - Ingco Auto-Darkening Welding Helmet",
        "description": "Optical rating:1/1/1/1\nThe biggest view area:100 x 67 mm\nSensors:4\nLight state:DIN 3\nDark state: DIN 5-9 / 9-13\nUV/lR protection:up to DlN 16\nSwitch time (Light to dark): <0.04ms\nShade control:inside & stepless\nSensitivity control:inside & stepless\nDelay control (Dark to light):inside & stepless, 0.15-0.80s\nTlG amps rated:≥2 amps\nGrind mode:yes, inside\nMaterial of helmet: nylon\nWeight:560g±5%\nOperating temperature: -5℃ (23°F)- +55℃ (131°F)\nStoring temperature: -20℃ (-4°F)- +70℃ (158°F)\nPower supply: solar panel & replaceable lithium batteries 2pcs*CR2032\nPacked by color box",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM006.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM006%20-%20Ingco%20Auto-Darkening%20Welding%20Helmet/AHM006.jpg"
            }
        ],
        "price": "7450",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ahm111---ingco-auto-darkening-welding-glasses",
        "name": "AHM111 - Ingco Auto-Darkening Welding Glasses",
        "description": "Auto-darkening welding glasses\nViewing area:95x31mm\nCartridge size:108x 50.8x 5mm\nSensors:2\nLight state:3\nDark state:11\nUV/IR protection: up to DIN 16\nON / OFF: automatic\nSwitch time(Light to dark): <0.5ms\nTIG amps rated: ≥ 30 amps\nOperating temperature: -5℃~ +55℃\nStoring temperature: -20℃~ +70℃\nPower supply: solar panel & lithium battery 2xCR1220\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM111.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM111%20-%20Ingco%20Auto-Darkening%20Welding%20Glasses/AHM111.jpg"
            }
        ],
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ahm112---ingco-auto-darkening-welding-goggles",
        "name": "AHM112 - Ingco Auto-Darkening Welding Goggles",
        "description": "Auto-darkening welding goggle\nViewing area:95x31mm\nCartridge size:108x 50.8x 5mm\nSensors:2\nLight state:3\nDark state:11\nUV/IR protection: up to DIN 16\nON / OFF: automatic\nSwitch time(Light to dark):<0.5ms\nTIG amps rated: ≥ 30 amps\nOperating temperature:-5℃~ +55℃\nStoring temperature:-20℃~ +70℃\nPower supply: solar panel & lithium battery 2xCR1220\nPacked by double blister",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "AHM112.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/AHM112%20-%20Ingco%20Auto-Darkening%20Welding%20Goggles/AHM112.jpg"
            }
        ],
        "price": "2100",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp303---total-welding-goggles",
        "name": "TSP303 - Total Welding Goggles",
        "description": "Flexible PVC body, indirect ventilation design.\nDark shade:8\nFlip design with open-close locking positioning, easy to use.\nInner lenses are clear, outer lenses adopt colored inorganic glass.\nPacked by poly bag",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "TSP303.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/TSP303%20-%20Total%20Welding%20Goggles/TSP303.jpg"
            }
        ],
        "price": "250",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp9309---total-auto-darkening-welding-helmet",
        "name": "TSP9309 - Total Auto-Darkening Welding Helmet",
        "description": "Viewing area:90×35mm\nCartridge size:110×90×10mm\nArc sensor:2\nLight state:DIN 4\nDark state:fixed shade 11\nShade control: unadjustable\nPower ON/OFF:fully automatic\nSensitivity control: unadjustable,auto\nUV/IR protection: DIN 16\nPower supply: solar cells+1*CR2032 lithium battery\nSwitching time:1/5000s,from light to dark\nDark to light:0.15-0.45s auto\nLow amperage TIG:≥20amps(DC), ≥20amps(AC)\nOperating temperature:-5℃~+55℃\nStoring temperature:-20℃~+70℃\nPacked by color box",
        "category": "Safety Equipment (PPEs)",
        "subcategory": "Welding Headgear",
        "images": [
            {
                "name": "TSP9309.jpg",
                "url": "/website%20products/Safety%20Equipment%20(PPEs)/Welding%20Headgear/TSP9309%20-%20Total%20Auto-Darkening%20Welding%20Helmet/TSP9309.jpg"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tsp9403---total-auto-darking-welding-goggles",
        "name": "TSP9403 - Total Auto-Darking Welding Goggles",
        "description": "Viewing area: 90x35mm\nCartridge size: 108x 51x 5mm\nSensors: 2\nLight state: 4\nDark state: 11\nUV/IR protection: up to DIN 11\nON / OFF: automatic\nSwitch time(Light to dark): <1ms\nTIG amps rated: ≥ 30 amps\nOperating temperature: -5℃~ +55℃\nStoring temperature: -20℃~ +70℃\nPower supply: solar panel & lithium battery CR1025\nPacked by double blister",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "bosch-professional-tool-bag---freedom-concept-professional",
        "name": "Bosch Professional Tool Bag - Freedom Concept Professional",
        "description": "Highly robust, medium sized tool bag: durable polyester construction and industrial zippers Universal, all-round tool bag for busy tradespeople: you can store and transport multiple power tools and accessories Very spacious: roomy tool bag measuring 480 mm x 280 mm x 300 mm and wide opening for easy access",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "o279466v54_lv-137994-12-P_A_Tool_Bag_dyn_V1.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/Bosch%20Professional%20Tool%20Bag%20-%20Freedom%20Concept%20Professional/o279466v54_lv-137994-12-P_A_Tool_Bag_dyn_V1.webp"
            }
        ],
        "price": "2050",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cosli241298---ingco-20v-4ah-cordless-drill-grinder-combo-set",
        "name": "COSLI241298 - Ingco 20v 4AH Cordless Drill Grinder Combo Set",
        "description": "Voltage:20VWith 1pcs brushless cordless impact drill(CIDLI209681)With 1pcs cordless angle grinder(CAGLI27153)Brushless cordless impact drill(CIDLI209681):Brushless motorVoltage: 20VNo-load speed: 0-500/0-2000rpmMax impact rate: 30000bpmMax torque: 96NmMetal chuckChuck capacity: 13mmTorque settings: 22+1+1Mechanical 2-speed gearSpindle lock functionIntegrated LED work lightLED battery power indicatorCordless angle grinder(CAGLI27153):Brushless motorVoltage: 20VMax input power: 1000WNo-load speed: 3000/6000/9000rpmDisc diameter: 115mmSpindle thread: M14Include:3 Pcs wood flat drill bits(16.19.22mm)3 Pcs masonry drill bits(5.6.8mm)3 Pcs HSS drill bits(4.5.6mm)2 Pcs 65mm impact screwdriver bits(PH2+PH2,PH2+SL6)1 Set abrasive metal cutting disc(10 Pcs)2 Pcs 4.0Ah battery pack(FBLI20021)1 Pcs charger(FCLI2001)Charge volts: 220-240V~50/60HzPacked by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[COSLI241298] COSLI241298 20V LI-ION CORDLESS 2 PCS COMBO KIT.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/COSLI241298%20-%20Ingco%2020v%204AH%20Cordless%20Drill%20Grinder%20Combo%20Set/%5BCOSLI241298%5D%20COSLI241298%2020V%20LI-ION%20CORDLESS%202%20PCS%20COMBO%20KIT.jpg"
            }
        ],
        "price": "20000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "edl432717---deli-stainless-steel-tool-box-17-inches",
        "name": "EDL432717 - Deli Stainless Steel Tool Box (17 Inches)",
        "description": "17\"\nProduct material: stainless steel + PP material\nMaximum load: 18kg\nTwo layer design\nPacking Type: OPP Bag+Paper Card",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "edl432717-stainless-steel-tool-box.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/EDL432717%20-%20Deli%20Stainless%20Steel%20Tool%20Box%20(17%20Inches)/edl432717-stainless-steel-tool-box.webp"
            }
        ],
        "price": "3000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkthp11651---ingco-20v-cordless-impact-drill-tool-set",
        "name": "HKTHP11651 - Ingco 20V Cordless Impact Drill Tool Set",
        "description": "1 Pcs 20V cordless impact drill(CIDLI20668)1 Pcs 2.0Ah battery pack(FBLI20011 )1 Pcs charger(FCLI2001 )Charge volts: 220V-240V~50/60HzMax impact rate: 22500bpm1 Pcs 8oz claw hammer1 Pcs SL5.5x100 screwdriver1 Pcs PH1x100 screwdriver1 Pcs 7\" combination pliers1 Pcs 6\" long nose pliers1 Pcs 8\" adjustable wrench1 Pcs test pencil1 Pcs 3m steel measuring tape1 Pcs snap-off blade knife1 Pcs 1/4\" 100mm magnetic shank1 Pcs 4mm precision screwdriver handle10 Pcs precision screwdriver bits:SL1.5,SL2,SL3,PH000,PH00,PH0,T6,T8,H1.5,H2.51 Pcs 5.5\" electrician's scissors1 Pcs mini hacksaw frame8 Pcs Hex key:1.5,2,2.5,3,4,5,5.5,6mm5 Pcs masonry drill bits 4,5,6,8,10mm5 Pcs twist drill bits 2,3,4,5,6mm4 Pcs wood drill bits 4,5,6,8mm20 Pcs screwdriver bits SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H610Pcs 2\" screwdriver bits:SL4,SL5,SL6,PH1,PH2,PH3,T10,T15,T20,T307 Pcs power sleeve (Cr-V): 5,6,7,8,9,10,11mm1 Pcs magnetic bits holder40 Pcs screws(22pcs*ST3.5,10pcs*ST4, 8pcs*ST5)40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)Packed by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HKTHP11651] HKTHP11651 165 PCS TOOLS SET - 20V.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTHP11651%20-%20Ingco%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/%5BHKTHP11651%5D%20HKTHP11651%20165%20PCS%20TOOLS%20SET%20-%2020V.jpg"
            }
        ],
        "price": "16000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkthp21681---ingco-168-pcs-hand-tools-set",
        "name": "HKTHP21681 - Ingco 168 Pcs Hand Tools Set",
        "description": "168 Pcs handtools Set\nInclude:\n1 Pcs 8Oz Claw hammer\n1 Pcs 7\" Combination Pliers\n1 Pcs 6\" Long nose pliers\n1 Pcs 10\" Pump Plier\n1 Pcs 8.5\" Wire stripper\n1 Pcs SL5.5*100 Screwdriver\n1 Pcs PH1*100 Screwdriver\n2 Pcs Stubby screwdriver: PH2*38 SL6.5*38\n4 Pcs precision screwdriver (SL2.0*50mm,SL2.5*50mm,PH000*50mm,PH00*50mm)\n1 Pcs Test Pencil(test volte :100-500V AC)\n1 Pcs 8\" Adjustable Wrench\n1 Pcs 3M Steel measuring tape\n1 Pcs Mini Hacksaw frame\n8 Pcs hex key: 1.5/2/2.5/3/4/5/5.5/6mm\n1 Pcs 1/4\" 100mm magnetic shank\n40 Pcs screwdriver bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4-SL3-SL3-SL4-SL4-SL5-SL5.5-SL6-SL6.5-SL7-SL7-H2-H3-H3-H4-H4-H5-H5-H6-H7-H7\n1 Pcs 18mm Snap-off blade knife\n10 Pcs knife blades\n9 Pcs 1/4\" Hexagonal Socket 4mm 5mm 6mm 7mm 8mm 9mm 10mm 11mm 12mm\n1 Pcs 4-6mm(25mm) socket adaptor\n1 Pcs 225mm spirit level\n40 Pcs screws(22pcs*ST3.5,10pcs*ST4,8pcs*ST5)\n40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)\nPacked by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HKTHP21681] HKTHP21681 168 PCS HANDTOOLS SET.png",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTHP21681%20-%20Ingco%20168%20Pcs%20Hand%20Tools%20Set/%5BHKTHP21681%5D%20HKTHP21681%20168%20PCS%20HANDTOOLS%20SET.png"
            }
        ],
        "price": "9000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hkthp22161--ingco-216-pcs-combination-set",
        "name": "HKTHP22161- Ingco 216 Pcs Combination Set",
        "description": "216 Pcs Combination Tools Set\nInclude:\n3Pcs ratchet wrench: 1/4\" &amp; 3/8\" &amp; 1/2\"\n13Pcs 1/4\" hexagonal socket:4-4.5-5-5.5-6-7-8-9-10-11-12-13-14mm\n10Pcs 3/8\" hexagonal socket:10-11-12-13-14-15-16-17-18-19mm\n14Pcs 1/2\" hexagonal socket:10-11-12-13-14-15-17-19-21-22-24-27-30-32mm\n5Pcs 1/4\" star socket:E4-E5-E6-E7-E8\n6Pcs 3/8\" star socket:E10-E11-E12-E14-E16-E18\n3Pcs 1/2\" star socket:E20-E22-E24\n7Pcs 1/4\" deep hexagonal socket: 4-5-6-7-8-9-10mm\n6Pcs 3/8\" deep hexagonal socket: 10-11-12-13-14-15mm\n5Pcs 1/2\" deep hexagonal socket: 16-17-18-19-22mm\n1Pcs 1/2\" spark plug socket:21mm\n2Pcs 3/8\" spark plug socket:16mm&amp;18mm\n1Pcs 1/4\" sliding \"T\" bar\n2Pcs 1/4\" extension bar:50mm(2\")&amp;100mm(4\")\n1Pcs 1/4\" three way adaptor:3/8\"(F)*1/4\"(M)\n1Pcs 3/8\" extension bar:150mm(6\")\n1Pcs 3/8\" three way adaptor:3/8\"(F)x3/8(M)\n2Pcs 1/2\" extension bar:125mm(5\")&amp;250mm(10\")\n1Pcs 1/2\" three way adaptor:3/8\"(F)x1/2(M)\n3Pcs Dr. Universal joint: 1/4\"&amp;3/8\"&amp;1/2\"\n1Pcs spinner handle 1/4\"*150mm\n1Pcs magnetic shank:6.35mm*100mm\n3Pcs bit holder:1/4\"*6.35mm &amp; 3/8\"*8mm &amp; 1/2\"*8mm\n40Pcs 6.35*25mm(L) bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4\n-SL3-SL3-SL4-SL4-SL5-SL5.5-SL6-SL6.5-SL7-SL7-H2-H3-H3-H4-H4-H5-H5-H6-H7-H7\n32Pcs 8x30mm(L) bits:PH3-PH4-PZ3-PZ4-H7-H8-H10-H12-H14-SL5-SL6-SL6.5-SL8-T20-T25-T27-T30-T35-T40-T45-T50-T55-T27H-T30H-T35H-T40H--T45H-T50H-M5-M6-M8-M10\n30Pcs 1/4\"x32mm(L) bits socket:PH1-PH2-PH3-PZ1-PZ2-PZ3-H3-H4-H5-H6-SL4-SL5.5-SL6.5-SL8-T8-T9-T10-T15-T20-T25-T27-T30-T8H-T9H-T10H-T15H-T20H-T25H-T27H-T30H\n2Pcs 1/2\"x58mm(L) bits socket:T55-T60\n12Pcs combination spanner:8-10-11-12-13-14-15-16-17-18-19-22mm\n8Pcs hex key wrench set:1.5-2-2.5-3-4-5-5.5-6mm",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HKTHP22161] HKTHP22161 216 PCS COMBINATION SET.jfif",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTHP22161-%20Ingco%20216%20Pcs%20Combination%20Set/%5BHKTHP22161%5D%20HKTHP22161%20216%20PCS%20COMBINATION%20SET.jfif"
            }
        ],
        "price": "28000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktts0131---ingco-13-pcs-electronic-telecom-tool-set",
        "name": "HKTTS0131 - Ingco 13 Pcs Electronic (Telecom) Tool Set",
        "description": "Specifications:\n\nPliers:\n1pc Mini Long Nose Pliers\n1pc Mini Diagonal Cutting Pliers (4.5\")\nScrewdrivers:\n4pcs: SL3 x 40mm, SL5 x 75mm, PH0 x 40mm, PH1 x 75mm\nScissors: 1pc (5.5\")\nSoldering Equipment:\n1pc Soldering Iron (40 Watts)\n1pc Soldering Iron Stand\n1pc Soldering Wire\n1pc Vacuum Soldering Pump\nTweezers: 1pc (125mm)\nIndicator Screwdriver: 1pc (100-500 VAC)\nFeatures:\nComprehensive tool set for electronics and small repairs.\nDurable and high-quality materials for long-lasting use.\nCompact and portable design for convenience.",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "HKTTS0131.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTTS0131%20-%20Ingco%2013%20Pcs%20Electronic%20(Telecom)%20Tool%20Set/HKTTS0131.webp"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktts0511---ingco-51-pcs-electronic-telecom-tool-set",
        "name": "HKTTS0511 - Ingco 51 Pcs Electronic (Telecom) Tool Set",
        "description": "51 Pcs Telecom Tools set\n220-240V~50/60Hz\nInclude：\n1 Pcs Digital Multimeter(Alkaline battery included)\n1 Pcs 8\" Adjustable wrench\n1 Pcs 6\" Long nose plier\n1 Pcs 6\" Diagonal cutting pliers\n1 Pcs 7\" Combination plier\n1 Pcs 6\" Wire stripper\n8 Pcs Hex key set（2-2.5-3-4-5-6-7-8）\n3 Pcs Slotted screwdriver SL3x75mm, SL5.5x 100mm, SL6.5x 150mm\n3 Pcs Phillips screwdriver PH0X75mm, PH1x 100mm, PH2x 150mm\n1 Pcs Snap-off blade knife\n1 Pcs Vacuum desoldering pump\n1 Pcs Mini Claw hammer\n1 Pcs 3M Steel measuring tape\n1 Pcs 40W Electric soldering iron\n1 Pcs Electric soldering iron support\n1 Pcs Test pencil 140mm\n1 Pcs Flashlight\n1 Pcs Soldering wire 10g\n1 Pcs Mini Hacksaw Frame\n1 Pcs PVC Insulating tape\n6 Pcs 1/4\" Hexagonal Socket 5mm 6mm 8mm 9mm 10mm 11mm\n1 Pcs 4-6mm(25mm) Socket adaptor\n1 pcs 100mm Magnetic shank\n1 Pcs Half round steel file 3*140mm\n1 pcs Tweezers 125mm\n6 Pcs Precision screwdriver (SL2.0*50mm，SL2.5*50mm，SL3.0*50mm，PH000*50mm，PH00*50mm，PH0*50mm )\n1 Pcs Electrician's Scissors\n10 Pcs Screwdriver bits PH1-PH2-PZ1-PZ2-SL4-SL6-Hex4-Hex5-T20-T25\nPacked by canvas bag",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HKTTS0511] HKTTS0511 51 PCS TELECOM TOOLS SET.png",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTTS0511%20-%20Ingco%2051%20Pcs%20Electronic%20(Telecom)%20Tool%20Set/%5BHKTTS0511%5D%20HKTTS0511%2051%20PCS%20TELECOM%20TOOLS%20SET.png"
            }
        ],
        "price": "18000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktv01p051---ingco-5-pcs-insulated-hand-tools-set",
        "name": "HKTV01P051 - Ingco 5 Pcs Insulated Hand Tools Set",
        "description": "5 pcs insulated hand tools set\ninclude:\n1 pcs 7\" insulated combination pliers\n1 pcs 6\" insulated diagonal cutting pliers\n1 pcs 6” insulated long nose pliers\n1 pcs 6\" insulated wire stripping pliers\n1 pcs test pencil(test voltage:100-500vac)\npacked by stackable plastic box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HKTV01P051] HKTV01P051  5 PCS INSULATED HAND TOOLS SET.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTV01P051%20-%20Ingco%205%20Pcs%20Insulated%20Hand%20Tools%20Set/%5BHKTV01P051%5D%20HKTV01P051%20%205%20PCS%20INSULATED%20HAND%20TOOLS%20SET.jpg"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "hktv01s101---ingco-10-pcs-insulated-hand-tools-set",
        "name": "HKTV01S101 - Ingco 10 Pcs Insulated Hand Tools Set",
        "description": "Key Features:\n\n1 Pc SL3.0x75mm Screwdriver\n1 Pc SL4.0x100mm Screwdriver\n1 Pc SL5.5x125mm Screwdriver\n1 Pc SL6.5x150mm Screwdriver\n1 Pc PH0x60mm Screwdriver\n1 Pc PH1x80mm Screwdriver\n1 Pc PH2x100mm Screwdriver\n1 Pc PZ1x80mm Screwdriver\n1 Pc PZ2x100mm Screwdriver\n1 Pc Test Pencil: Test Voltage 100-500VAC\nFeatures:\nHigh-quality insulation for electrical safety\nErgonomic design for comfortable use\nDurable and reliable for various tasks\nPackaging:\nPacked in a durable box for organized storage and easy transport",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "HKTV01S101-i1_500x.webp",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HKTV01S101%20-%20Ingco%2010%20Pcs%20Insulated%20Hand%20Tools%20Set/HKTV01S101-i1_500x.webp"
            }
        ],
        "price": "4000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "htcs15591---ingco-59-pcs-tools-chest",
        "name": "HTCS15591 - Ingco 59 Pcs Tools Chest",
        "description": "59 Pcs Tool Chest Set\nInclude：\n12Pcs Combination spanner:8-10-11-12-13-14-15-16-17-18-19-22MM\n8Pcs Screwdriver :SL3X75MM,4x100MM,5x125MM,6x100MM,8x200MM;PH1X80MM,PH2X100MM,PH3X200MM\n18Pcs 1/2\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32MM\n1Pcs 1/2\" ratchet wrench,45T\n2Pcs 1/2\" Extension bar:125mm(5\"),250mm(10\")\n2Pcs Spark plug socket 1/2\"Dr.16MM&21MM\n1Pcs 1/2\" Dr. Universal joint\n1Pcs 1/2\"Dr.Flex handle，375MM\n1Pcs 8\"Combination pliers\n1Pcs 6\"Long nose pliers\n1Pcs 7\"Diagonal cutting pliers\n1Pcs 10\"Adjustable wrench\n1Pcs 10\"Curved jaw lock wrench\n9Pcs Hex key 1.5-2-2.5-3-4-5-6-8-10MM\nPacked by metal box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "HTCS15591.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS15591%20-%20Ingco%2059%20Pcs%20Tools%20Chest/HTCS15591.jpg"
            }
        ],
        "price": "30800",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "htcs220971---ingco-tool-chest",
        "name": "HTCS220971 - Ingco Tool Chest",
        "description": "97 Pcs Tool Chest Set\nChest part:\nOverall size:520*218*243mm\nThickness of Cabinet:0.8mm\nThickness of drawer:0.6mm\nWith 1pcs 506*215*63mm Top Tracy Area\nWith 2pcs 449*196*54mm drawer\nTools part:\nTop Tray Area\nIncluded:\n1Pcs Ratchet wrench: 1/2\"\n18Pcs 1/2\"DR Socket:10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\n1Pcs 1/2\"Universal joint\n1Pcs Extension bar:1/2\"Dr x 125mm\n1Pcs 1/2\"*250mm Sliding T bar\n2Pcs Spark plug socket: 1/2\"Dr 16mm&amp;21mm\n1Pcs Ratchet wrench: 1/4\"\n13Pcs 1/4\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n1Pcs 1/4\"Universal joint\n1Pcs Extension bar:1/4\"Dr x 100mm\n1Pcs Spinner handle:1/4\"x150mm\n1Pcs Screwdriver Bits holder\n20Pcs bits:Hex:3-4-5-6mm Star:T10-T15-T20-T30 SL:3-4-5-6mm,PH0-PH1-PH2-PH3,PZ0-PZ1-PZ2-PZ3.\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\n\nDrawer 1\n7Pcs screwdriver:SL3*75,SL5.5*100,SL6.5*100,SL8*150, PH0*75,PH1*100,PH2*150\n11Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-17\nDrawer 2\n1Pcs 10\" Water pump pliers\n1Pcs 6\" Combination Pliers\n1Pcs 6\" Long nose pliers\n1Pcs 6\" Diagonal cutting pliers\n1Pcs Utility knife\n1Pcs 10\"Adjustable wrench\n1Pcs 3Mx16mm Steel measuring tape\nPacked in Blister + carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HTCS220971] HTCS220971 TOOL CHEST SET.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS220971%20-%20Ingco%20Tool%20Chest/%5BHTCS220971%5D%20HTCS220971%20TOOL%20CHEST%20SET.jpg"
            }
        ],
        "price": "33880",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "htcs271621---ingco-162-pcs-tool-chest",
        "name": "HTCS271621 - Ingco 162 Pcs Tool Chest",
        "description": "162 Pcs Tool Chest Set\nChest part:\nWith 7pcs drawers\nOverall size：765x465x812mm\nOverall with casters size：765x465x976mm\nCasters size：5\"*2\"\nThickness of Cabinet:0.8-1.0mm\nThickness of drawer:0.7mm\nWith 5pcs 536x410x74.5mm drawer\nWith 2pcs 536x410x153.5mm drawer\nTools part：\nDrawer 1\nIncluded:\n1Pcs Ratchet wrench: 1/4\"\n13Pcs 1/4\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n17Pcs 1/4\" x 32(L) bits Socket:Hex:3-4-5-6mm Star: T8-T10-T15-T20-T25-T30 SL:4-5.5-7mm,PH1,PH2,PZ1,PZ2\n8Pcs 1/4\"DR 50mm(L) Deep socket:6-7-8-9-10-11-12-13mm\n2Pcs Extension bar:1/4\"Dr. x 50mm,1/4\"Dr. x 100mm\n1Pcs Spinner handle:1/4\"x150mm\n1Pcs Extension flexible bar :1/4\" x 150mm\n1Pcs 1/4\"Universal joint\n1Pcs Sliding \"T\" Bar:1/4\"x 114mm\n1PCS Ratchet wrench: 1/2\"\n1Pcs 1/2\"Universal joint\n19Pcs 1/2\"DR Socket:8-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\n4Pcs 1/2\"DR 77mm(L) Deep socket: 14-15-17-19mm\n5Pcs 1/2\" Star Socket:E10 12 14 16 20\n2Pcs Spark plug socket: 1/2\"Dr.16mm -21mm\n1Pcs 1/2\"*250mm Sliding T bar\n2Pcs Extension bar:1/2\"Dr. x 125mm,1/2\"Dr. x 250mm\n\nDrawer 2\n14Pcs screwdriver：SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL6.5*150,SL8*200, PH0*75，PH1*75,PH1*100,PH2*38,PH2*125,PH2*150,PH3*200\n4Pcs T-handle hex wrench:3x100mm,4x100mm,5x150mm,6x150mm\n1Pcs Flashlight\nDrawer 3\n17Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\n5Pcs Flare nut Spanner：8*10，10*12,11*13,12*14,17*19\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\n9Pcs Trox Key Wrench:T10-T15-T20-T25-T27-T30-T40-T45-T50\nDrawer 4\n1Pcs 10\"Curved jaw lock wrench\n1Pcs 40mm Rubber and plastic hammer\n1Pcs 10\" Water pump pliers\n1Pcs 8\" Combination Pliers\n1Pcs 6\" Long nose pliers\n1Pcs 7\" Diagonal cutting pliers\n1Pcs Utility knife\n4Pcs circlip pliers\n1Pcs 300g Machinist Hammer\n1Pcs 10\"Adjustable wrench\n1Pcs 5x19mm Steel measuring tape\nDrawer 5\n1Pcs Spirit level (With powerful magnets) 1Pcs Hacksaw frame\n1Pcs Mechanic gloves\n5Pcs iron hooks（for hanger tools）\nDrawer 6(Empty)\nDrawer 7(Empty)\nPacked in EVA foam + carton box + Pallet",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "[HTCS271621] HTCS271621 162 PCS TOOL CHEST.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/HTCS271621%20-%20Ingco%20162%20Pcs%20Tool%20Chest/%5BHTCS271621%5D%20HTCS271621%20162%20PCS%20TOOL%20CHEST.jpg"
            }
        ],
        "price": "130900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tckli20273---total-cordless-combination-kit-drill-and-grinder",
        "name": "TCKLI20273 - Total Cordless Combination Kit (Drill and Grinder)",
        "description": "Voltage: 20V\n1 Pcs cordless angle grinder(TAGLI27153)\n1 Pcs compact Brushless Cordless Impact Drill(TIDLI206681)\nCordless angle grinder(TAGLI27153):\nBrushless motor\nMax input power: 1000W\nNo-load speed: 3000/6000/9000rpm\nDisc diameter:115mm\nSpindle thread:M14\nCompact Brushless Cordless Impact Drill(TIDLI206681):\nNo-load speed: 0-500/0-2000rpm\nMax impact rate: 30000bpm\nMax torque: 66Nm\nMetal chuck\nChuck capacity: 13mm\nTorque settings: 22+1+1\nMechanical 2-speed gear\nSpindle lock function\nIntegrated LED work light\nInclude:\n1 Set 115mm abrasive metal cutting disc(10 Pcs)\n47 Pcs accessories\n2 Pcs 4.0Ah battery pack(TFBLI20021)\n1 Pcs P20S Lithium-Ion battery charger(TFCLI2001)\nCharge volts: 220-240V~50/60Hz\nPacked by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "TCKLI20273.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TCKLI20273%20-%20Total%20Cordless%20Combination%20Kit%20(Drill%20and%20Grinder)/TCKLI20273.jpg"
            }
        ],
        "price": "18500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp11652---total-20v-cordless-impact-drill-tool-set",
        "name": "THKTHP11652 - Total 20V Cordless Impact Drill Tool Set",
        "description": "1 Pcs 20V cordless impact drill(TIDLI20668)1 Pcs 2.0Ah battery pack(TFBLI20011)1 Pcs charger(TFCLI2001 )Charge volts: 220V-240V~50/60HzMax impact rate: 30000bpm1 Pcs 8oz claw hammer1 Pcs SL5.5x100 screwdriver1 Pcs PH1x100 screwdriver1 Pcs 7\" combination pliers1 Pcs 6\" long nose pliers1 Pcs 8\" adjustable wrench1 Pcs test pencil1 Pcs 3m steel measuring tape1 Pcs snap-off blade knife1 Pcs 1/4\" 100mm magnetic shank1 Pcs 4mm precision screwdriver handle10 Pcs precision screwdriver bits:SL1.5,SL2,SL3,PH000,PH00,PH0,T6,T8,H1.5,H2.51 Pcs 5.5\" electrician's scissors1 Pcs mini hacksaw frame8 Pcs Hex key:1.5,2,2.5,3,4,5,5.5,6mm5 Pcs masonry drill bits 4,5,6,8,10mm5 Pcs twist drill bits 2,3,4,5,6mm4 Pcs wood drill bits 4,5,6,8mm20 Pcs screwdriver bits SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H610 Pcs 2\" screwdriver bits:SL4,SL5,SL6,PH1,PH2,PH3,T10,T15,T20,T307 Pcs power sleeve (Cr-V): 5,6,7,8,9,10,11mm1 Pcs magnetic bits holder40 Pcs screws(22pcs*ST3.5,10pcs*ST4, 8pcs*ST5)40 Pcs plastic plugs(22pcs*5mm,10pcs*6mm,8pcs*8mm)Packed by carrying case",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THKTHP11652.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP11652%20-%20Total%2020V%20Cordless%20Impact%20Drill%20Tool%20Set/THKTHP11652.jpg"
            }
        ],
        "price": "13000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp21006---total-100-pcs-toolkit",
        "name": "THKTHP21006 - Total 100 Pcs Toolkit",
        "description": "100 Pcs Tools Set\nInclude：\n1 Pcs 1/2\"\" ratchet wrench,45T\n18Pcs 1/2\"\" Hexagonal Socket: 10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32MM\n2 Pcs 1/2\"\" Extension bar:125mm （5\"\"） / 250mm(10\"\")\n1 Pcs 1/2\"\" Dr. Universal joint\n2 Pcs Spark plug socket 1/2\"\"Dr.16MM&21MM\n1 Pcs 1/2\"\"*3/8\"\" three way adaptor\n1 Pcs 1/4\"\" ratchet wrench,45T\n13Pcs 1/4\"\" Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n2 Pcs 1/4\"\" Extension bar:50mm (2\"\") / 100mm(4\"\")\n1 Pcs 1/4\"\" sliding \"\"T\"\" bar\n1 Pcs 1/4\"\" Dr. Universal joint\n8 Pcs Combination spanner:6-8-10-12-14-15-17-19MM\n1 Pcs 6\"\" Diagonal Cutting Pliers\n1 Pcs 6\"\" Long nose pliers\n1 Pcs SL6.5*100 Screwdriver\n1 Pcs PH2*100 Screwdriver\n14Pcs Bit socket:T10-T15-T20-T25-T27-T30-T35-SL4-SL5.5-SL6.5-PH1-PH2-PZ1-PZ2\n9 Pcs Hex key 1.5-2-2.5-3-4-5-6-8-10MM\n20 Pcs 1/4\"\" Screwdriver bits SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H6 25mm\n1Pcs Screwdriver Bits holder\n1Pcs 1/4\"\"*150mm Spinner handle\nPacked by BMC",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THKTHP21006.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP21006%20-%20Total%20100%20Pcs%20Toolkit/THKTHP21006.jpg"
            }
        ],
        "price": "19000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp21426---total-142-pcs-combination-tool-set",
        "name": "THKTHP21426 - Total 142 Pcs Combination Tool Set",
        "description": "142 Pcs Combination Tools Set\nInclude：\n1/2\"\"DR.Part：\n19Pcs 1/2\"\" Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM\n5Pcs 1/2\"\" Star Socket:E10 12 14 16 20\n1Pcs 1/2\"\"Dr.Flex handle，375MM\n1Pcs 1/2\"\" ratchet wrench,45T\n2Pcs 1/2\"\" Extension bar:75mm(3\"\") 250mm(10\"\")\n1Pcs 1/2\"\" Dr. Universal joint\n1Pcs 1/2\"\"(F)*3/8\"\"(M) three way adaptor\n2Pcs Spark plug socket 1/2\"\"Dr.16MM&21MM\n1Pcs 1/2\"\"*10\"\" L handle\n3/8\"\"DR.Part：\n15Pcs 3/8\"\" 12pt.socket:6-7-8-9-10-11-12-13-14-15-17-18-19-21-22\n1Pcs 3/8\"\" ratchet wrench,45T\n2Pcs 3/8\"\" Extension bar:75mm(3\"\") 150mm(6\"\")\n1Pcs 3/8\"\" Dr. Universal joint\n1/4\"\"DR.Part:\n26Pcs 1/4\"\"*25MM Screwdriver bits:\nPH0-PH1-PH1-PH2-PH2-PH3-PZ0-PZ1-PZ2-PZ3-SL4-SL5-SL6-SL7-H2-H3-H4-H5-H6-T10H-T15H-T20H-T25H-T27H-T30H-T40H\n1Pcs Bit holder\n9Pcs 1/4\"\" Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10\n5Pcs 1/4\"\" Star Socket:E4 5 6 7 8\n1Pcs 1/4\"\" ratchet wrench,45T\n3Pcs 1/4\"\" Extension bar:50mm(2\"\") 100mm(4\"\") 150mm(6\"\")\n1Pcs 1/4\"\" Dr. Universal joint\n1Pcs 3/8\"\"(F)*1/4\"\"(M)three way adaptor\n1Pcs 1/4\"\"*150mm Spinner handle\n1Pcs 1/4\"\"*150mm Flexible extension bar\n17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\n5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19\n10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM\n1 Pcs 300g Machinist hammer\n1 Pcs 7\"\" Combination Pliers\n1Pcs 10\"\"Curved jaw lock wrench\n2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150\n2Pcs S2 Phillips screwdriver:PH2*100 PH2*150\n2Pcs Stubby screwdriver:PH2*38 SL6.5*38\nPacked by BMC",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THKTHP21426.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP21426%20-%20Total%20142%20Pcs%20Combination%20Tool%20Set/THKTHP21426.jpg"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp2186---total-168-pcs-hand-tools-set",
        "name": "THKTHP2186 - Total 168 Pcs Hand Tools Set",
        "description": "Package comes with,\n\n1 pc Claw hammer, 8oz\n1 pc Combination pliers, 7″\n1 pc Long nose pliers, 6″\n1 pc Pump pliers, 10″\n1 pc Wire stripper, 8.5″\n1 pc Slotted screwdriver, SL5.5 * 100mm\n1 pc Phillips screwdriver, PH1 * 100mm\n2 pcs Stubby screwdriver, PH2 * 38mm & SL6.5 * 38mm\n4 pcs Precision screwdrivers: SL2.0 * 50mm, SL2.5 * 50mm, PH000 * 50mm, PH00 * 50mm\n1 pc Test Pencil, 100-500V AC\n1 pc Adjustable Wrench, 8″\n1 pc Steel measuring tape, 3m\n1 pc Mini Hacksaw frame\n8 pcs Hex key: 1.5mm, 2mm, 2.5mm, 3mm, 4mm, 5mm, 5.5mm, 6mm\n1 pc 1/4″ Magnetic shank, 100mm\n40 pcs Screwdriver bits: T5, T6, T7, T8, T9, T10, T15, T20, T25, T30, PH1, PH2, PH2, PH3, PH4, PZ1, PZ2, PZ2, PZ3, PZ4, SL3, SL3, SL4, SL4, SL5, SL5.5, SL6, SL6.5, SL7, SL7, H2, H3, H3, H4, H4, H5, H5,H6, H7, H7\n1 pc Snap-off blade knife, 18mm\n10 pcs Knife blades (replacement)\n9 pcs 1/4″ Hexagonal sockets: 4mm, 5mm, 6mm, 7mm, 8mm, 9mm, 10mm, 11mm, 12mm\n1 pc Socket adaptor (25mm), 4mm – 6mm\n1 pc Spirit level, 225mm\n40 pcs Screws (22 pcs * ST3.5, 10 pcs * ST4, 8 pcs ST5)\n40 pcs Plastic Plugs (22 pcs * 5mm, 10 pcs * 6mm, 8 pcs * 8mm)\nAll items packed in a carrying case.",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THKTHP21686.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP2186%20-%20Total%20168%20Pcs%20Hand%20Tools%20Set/THKTHP21686.jpg"
            }
        ],
        "price": "8000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thkthp22166---total-216-pcs-combination-toolkit",
        "name": "THKTHP22166 - Total 216 Pcs Combination Toolkit",
        "description": "216 Pcs Combination Tools Set\nInclude:\n3Pcs ratchet wrench: 1/4\"\" & 3/8\"\" & 1/2\"\"\n13Pcs 1/4\"\" hexagonal socket:4-4.5-5-5.5-6-7-8-9-10-11-12-13-14mm\n10Pcs 3/8\"\" hexagonal socket:10-11-12-13-14-15-16-17-18-19mm\n14Pcs 1/2\"\" hexagonal socket:10-11-12-13-14-15-17-19-21-22-24-27-30-32mm\n5Pcs 1/4\"\" star socket:E4-E5-E6-E7-E8\n6Pcs 3/8\"\" star socket:E10-E11-E12-E14-E16-E18\n3Pcs 1/2\"\" star socket:E20-E22-E24\n7Pcs 1/4\"\" deep hexagonal socket: 4-5-6-7-8-9-10mm\n6Pcs 3/8\"\" deep hexagonal socket: 10-11-12-13-14-15mm\n5Pcs 1/2\"\" deep hexagonal socket: 16-17-18-19-22mm\n1Pcs 1/2\"\" spark plug socket:21mm\n2Pcs 3/8\"\" spark plug socket:16mm&18mm\n1Pcs 1/4\"\" sliding \"\"T\"\" bar\n2Pcs 1/4\"\" extension bar:50mm(2\"\")&100mm(4\"\")\n1Pcs 1/4\"\" three way adaptor:3/8\"\"(F)*1/4\"\"(M)\n1Pcs 3/8\"\" extension bar:150mm(6\"\")\n1Pcs 3/8\"\" three way adaptor:1/4\"\"(F)x3/8(M)\n2Pcs 1/2\"\" extension bar:125mm(5\"\")&250mm(10\"\")\n1Pcs 1/2\"\" three way adaptor:3/8\"\"(F)x1/2(M)\n3Pcs Dr. Universal joint: 1/4\"\"&3/8\"\"&1/2\"\"\n1Pcs spinner handle 1/4\"\"*150mm\n1Pcs magnetic shank:6.35mm*100mm\n3Pcs bit holder:1/4\"\"*6.35mm & 3/8\"\"*8mm & 1/2\"\"*8mm\n40Pcs 6.35*25mm(L) bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4-SL3-SL3-SL4-SL4-SL5-| SL5.5-SL6-SL6.5-SL7-SL7-H2-H3-H3-H4-H4-H5-H5-H6-H7-H7\n32Pcs 8x30mm(L) bits:PH3-PH4-PZ3-PZ4-H7-H8-H10-H12-H14-SL5-SL6-SL6.5-SL8-T20-T25-T27-T30-T35-T40-T45-T50-T55-T27H-T30H-T35H-T40H--T45H-T50H-M5-M6-M8-M10\n30Pcs 1/4\"\"x32mm(L) bits socket:PH1-PH2-PH3-PZ1-PZ2-PZ3-H3-H4-H5-H6-SL4-SL5.5-SL6.5-SL8-T8-T9-T10-T15-T20-T25-T27-T30-T8H-T9H-T10H-T15H-T20H-T25H-T27H-T30H\n2Pcs 1/2\"\"x58mm(L) bits socket:T55-T60\n12Pcs combination spanner:8-10-11-12-13-14-15-16-17-18-19-22mm\n8Pcs hex key wrench set:1.5-2-2.5-3-4-5-5.5-6mm\"",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THKTHP22166.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THKTHP22166%20-%20Total%20216%20Pcs%20Combination%20Toolkit/THKTHP22166.jpg"
            }
        ],
        "price": "26000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thptcs71321---total-132-pcs-tool-chest",
        "name": "THPTCS71321 - Total 132 Pcs Tool Chest",
        "description": "132 Pcs Tool Chest Set\nChest part:\nOverall size:520*218*320mm\nThickness of Cabinet:0.8mm\nThickness of drawer:0.6mm\nWith 1pcs 510*210*60mm Top Tracy Area\nWith 3pcs 449*196*54mm drawer\nTools part:\n1Pcs Ratchet wrench: 1/4\"\"\n13Pcs 1/4\"\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n24Pcs 1/4\"\" x 32(L) bits Socket:Hex:3-4-5-6-7-8-10mm Star: T8-T10-T15-T20-T25-T30-T40 SL:4-5.5-6.5-8mm,PH1,PH2,PH3,PZ1,PZ2,PZ3\n3Pcs 1/4\"\"DR 50mm(L) Deep socket: 8-10-12mm\n2Pcs Extension bar:1/4\"\"Dr. x 50mm,1/4\"\"Dr. x 100mm\n1Pcs Spinner handle:1/4\"\"x150mm\n1Pcs 1/4\"\"Universal joint\n1Pcs Sliding \"\"T\"\" Bar:1/4\"\"x 114mm\n1Pcs 1/2\"\"Universal joint\n18Pcs 1/2\"\"DR Socket:10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\n3Pcs 1/2\"\"DR 77mm(L) Deep socket: 13-17-19mm\n2Pcs Spark plug socket: 1/2\"\"Dr.16mm -21mm\n2Pcs Extension bar:1/2\"\"Dr. x 125mm,1/2\"\"Dr. x 250mm\n1Pcs 1/2\"\" three way adaptor:3/8\"\"(F)x1/2(M)\n10Pcs screwdriver:SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL8*150,PH0*75,PH1*100,PH2*38,,PH2*150,\n14Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\n9Pcs Trox Key Wrench:T10-T15-T20-T25-T27-T30-T40-T45-T50\n1Pcs 10\"\"Curved jaw lock wrench\n1Pcs 10\"\" Water pump pliers\n1Pcs 6\"\" high leverage long nose pliers\n1Pcs 7\"\" high leverage combination pliers\n1Pcs 6\"\" high leverage diagonal cutting pliers\n2Pcs circlip pliers\n1Pcs 300g Machinist Hammer\n1Pcs 10\"\"Adjustable wrench\n6 pcs pin punch: 1.5x152mm 3x152mm 4x152mm 5x152 6x152mm 8x152mm\nPacked in Blister + carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THPTCS71321.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THPTCS71321%20-%20Total%20132%20Pcs%20Tool%20Chest/THPTCS71321.jpg"
            }
        ],
        "price": "30000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thptcs73281---total-328-pcs-tool-chest-set",
        "name": "THPTCS73281 - Total 328 Pcs Tool Chest Set",
        "description": "SPECIFICATIONS:\n\n328 Pcs Tool Chest Set\nChest part:\nWith 7pcs drawers\nOverall size:65x465x812mm\nOverall with casters size:765x465x976mm\nCasters size:5\"\"*2\"\"\nThickness of Cabinet:0.8-1.0mm\nThickness of drawer:0.7mm\nWith 5pcs 536x410x74.5mm drawer\nWith 2pcs 536x410x153.5mm drawer\n5Pcs iron hooks(for hanger tools)\nPacked in EVA foam + carton box + Pallet\nTools part:\n1Pcs Ratchet wrench: 1/4\"\"\n13Pcs 1/4\"\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n24Pcs 1/4\"\" x 32(L) bits Socket:Hex:3-4-5-6-7-8-10mm Star: T8-T10-T15-T20-T25-T27-T30-T40 SL:4-5.5-7mm,PH1,PH2,PH3,PZ1,PZ2,PZ.\n8Pcs 1/4\"\"DR 50mm(L) Deep socket:6-7-8-9-10-11-12-13mm\n6Pcs 1/4\"\" star socket:E4-E5-E6-E7-E8-E10\n2Pcs Extension bar:1/4\"\"Dr. x 50mm,1/4\"\"Dr. x 100mm\n1Pcs Spinner handle:1/4\"\"x150mm\n1Pcs Extension flexible bar :1/4\"\" x 150mm\n1Pcs 1/4\"\"Universal joint\n1Pcs Sliding \"\"T\"\" Bar:1/4\"\"x 114mm\n1Pcs 1/4\"\" three way adaptor:3/8\"\"(F)*1/4\"\"(M)\n1Pcs bit holder:1/4\"\"*6.35mm\n40Pcs 6.35*25mm(L) bits:T5-T6-T7-T8-T9-T10-T15-T20-T25-T30-PH1-PH2-PH2-PH3-PH4-PZ1-PZ2-PZ2-PZ3-PZ4\n1Pcs magnetic shank:6.35mm*100mm\n1Pcs Ratchet wrench: 1/2\"\"\n1Pcs 1/2\"\"Universal joint\n19Pcs 1/2\"\"DR Socket:8-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\n4Pcs 1/2\"\"DR 77mm(L) Deep socket: 14-15-17-19mm\n8Pcs 1/2\"\" Star Socket:E10 12 14 16 18 20 22 24\n2Pcs Spark plug socket: 1/2\"\"Dr.16mm -21mm\n1Pcs 1/2\"\"*250mm Sliding T bar\n2Pcs Extension bar:1/2\"\"Dr. x 100mm,1/2\"\"Dr. x 250mm\n3Pcs 1/2\"\"x58mm(L) bits socket:T55-T60-T70\n1Pcs 1/2\"\" three way adaptor:3/8\"\"(F)x1/2(M)\n32Pcs 8x30mm(L) bits:PH3-PH4-PZ3-PZ4-H7-H8-H10-H12-H14-SL5-SL6-SL6.5-SL8-T20-T25-T27-T30-T35-T40-T45-T50-T55-T27H-T30H-T35H-T40H--T45H-T50H-M5-M6-M8-M10\n1Pcs bit holder: 1/2\"\"*8mm\n13Pcs 3/8\"\" hexagonal socket:10-11-12-13-14-15-16-17-18-19-21-22-24mm\n9Pcs 3/8\"\" deep hexagonal socket: 10-11-12-13-14-15-16-17-19mm\n7Pcs 3/8\"\" star socket:E10-E11-E12-E14-E16-E18-E20\n1Pcs ratchet wrench: 3/8\"\"\n2Pcs 3/8\"\" extension bar:75mm(3\"\"),150mm(6\"\")\n1Pcs Dr. Universal joint:3/8\"\"\n1Pcs 3/8\"\" three way adaptor:3/8\"\"(F)x3/8(M)\n14Pcs screwdriver:SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL6.5*150,SL8*200, PH0*75,PH1*75,PH1*100,PH2*38,PH2*125,PH2*150,PH3*200\n8Pcs T-handle hexwrench:2*75mm,2.5*75mm,3x100mm,4x100mm,5x150mm,6x150mm,8*200mm,10*200mm\n8Pcs T-handle Torx wrench:T10X75mm,T15X75mm,T20X100mm,T25X100mm,T30X150mm,T40X150mm,T45X200mm,T50X200mm\n17Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24\n5Pcs Flare nut Spanner:8*10,10*12,11*13,12*14,17*19\n5Pcs Double flexible socket wrench:8*10,10*12,12*13,14*17,17*19\n12Pcs Offset ring spanner: 6*7,8*9,10*11,12*13,14*15,16*17,18*19,20*22,21*23,24*27,25*28,30*32.\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10\n9Pcs Trox Key Wrench:T10-T15-T20-T25-T27-T30-T40-T45-T50\n1Pcs 10\"\"Curved jaw lock wrench\n1Pcs 40mm Rubber and plastic hammer\n1Pcs 10\"\" Water pump pliers\n1Pcs 8\"\" high leverage long nose pliers\n1Pcs 8\"\" high leverage bent nose pliers\n1Pcs 8\"\" high leverage combination pliers\n1Pcs 7\"\" high leverage diagonal cutting pliers\n4Pcs circlip pliers\n1Pcs 300g Machinist Hammer\n1Pcs 10\"\"Adjustable wrench | 1Pcs Hacksaw frame\n3 pcs cold chisel: 10x142mm 13x152mm 16x172mm\n6 pcs pin punch: 1.5x152mm 3x152mm 4x152mm 5x152 6x152mm 8x152mm\n1 pcs taper punch: 2x140mm(3/32\"\"x5-1/2\"\")\n2 pcs centre punch: 6x102mm(1/14\"\"x4\"\") 8x115mm(5/16\"\"x4-1/2\"\")\n5 Pcs steel file set:\nFlat steel file 1pcs\nHalf round steel file 1pcs\nRound steel file 1pcs\nTriangle steel file 1pcs\nSquare steel file 1pcs\"",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THPTCS73281.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THPTCS73281%20-%20Total%20328%20Pcs%20Tool%20Chest%20Set/THPTCS73281.jpg"
            }
        ],
        "price": "130000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thtcs121081---total-108-pcs-toolchest",
        "name": "THTCS121081 - Total 108 Pcs Toolchest",
        "description": "108 Pcs Tool Chest Set\nInclude:\n1Pcs Ratchet wrench: 1/4\"\n13Pcs 1/4\" socket 4-4.5-5-5.5-6-7-8-9-10-11-12-13-14\n2Pcs Extension bar:1/4\"Dr. x 50mm,1/4\"Dr. x 100mm\n1Pcs Spinner handle:1/4\"x150mm\n1Pcs bit holder:1/4\"*6.35mm\n20 Pcs screwdriver bits: SL3,SL4,SL5,SL6,PH0,PH1,PH2,PH3,PZ0,PZ1,PZ2,PZ3,T10,T15,T20,T30,H3,H4,H5,H6\n1Pcs Ratchet wrench: 1/2\"\n1Pcs 1/2\"Universal joint\n18Pcs 1/2\"DR Socket: 10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32mm\n2Pcs Spark plug socket: 1/2\"Dr.16mm -21mm\n2Pcs Extension bar:1/2\"Dr. x 125mm,1/2\"Dr. x 250mm\n1Pcs 1/2\"Dr.Flex handle,375MM\n1Pcs 1/2\" three way adaptor:3/8\"(F)x1/2(M)\n10Pcs screwdriver:SL3*75,SL4*100,SL5.5*100,SL6.5*38,SL6.5*125,SL8*150,PH1*75,PH2*125,PH2*38,,PH3*200,\n12Pcs Combination spanner: 8-10-11-12-13-14-15-16-17-18-19-22\n9Pcs Hex Key Wrench:1.5-2-2.5-3-4-5-6-8-10 1Pcs 10\"Curved jaw lock plier\n1Pcs 10\" Water pump pliers\n1Pcs 6\" high leverage long nose pliers\n1Pcs 8\" high leverage combination pliers\n1Pcs 7\" high leverage diagonal cutting pliers\n1Pcs 300g Machinist Hammer\n1Pcs 10\"Adjustable wrench\n6 pcs pin punch: 1.5x152mm 3x152mm 4x152mm 5x152 6x152mm 8x152mm\nPacked in Blister + carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THTCS121081.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THTCS121081%20-%20Total%20108%20Pcs%20Toolchest/THTCS121081.jpg"
            }
        ],
        "price": "26000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "thtcs12591---total-59-pcs-tool-chest",
        "name": "THTCS12591 - Total 59 Pcs Tool Chest",
        "description": "59 Pcs Tool Chest Set\nInclude：\n12Pcs Combination spanner:8-10-11-12-13-14-15-16-17-18-19-22MM\n8Pcs Screwdriver:SL3X75MM,4x100MM,5x125MM,6x100MM,8x200MM;\nPH1X80MM,PH2X100MM,PH3X200MM\n18Pcs 1/2″ Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-27-30-32MM\n1Pcs 1/2″ ratchet wrench,45T\n2Pcs 1/2″ Extensionbar:125mm(5″),250mm(10″)\n2Pcs Spark plug socket\n1/2″Dr.16MM&21MM\n1Pcs 1/2″ Dr. Universal joint\n1Pcs 1/2″Dr.Flex handle，375MM\n1Pcs 8″Combination pliers",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "THTCS12591.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/THTCS12591%20-%20Total%2059%20Pcs%20Tool%20Chest/THTCS12591.jpg"
            }
        ],
        "price": "28000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0141---total-plastic-tool-box-14-inches",
        "name": "TPBX0141 - Total Plastic Tool Box (14 Inches)",
        "description": "14\" Plastic Tool Box\nSize : 356mm(14\"\")*168mm（6.6\"\"）*160mm(6.3\"\")\nMaterial ：PP\nWeight : 720g\nPP plastic buckle\nMax Load : 10KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by label",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "TPBX0141.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0141%20-%20Total%20Plastic%20Tool%20Box%20(14%20Inches)/TPBX0141.jpg"
            }
        ],
        "price": "1500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0171---total-plastic-tool-box-17-inches",
        "name": "TPBX0171 - Total Plastic Tool Box (17 Inches)",
        "description": "SPECIFICATIONS\nSize : 436mm(17\"\")*220mm（8.7\"\"）*205mm(8\"\")\nMaterial： PP\nweight：1390g\nPP plastic buckle\nMax Load : 15KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by carton box",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "TPBX0171.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0171%20-%20Total%20Plastic%20Tool%20Box%20(17%20Inches)/TPBX0171.jpg"
            }
        ],
        "price": "2500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tpbx0201---total-plastic-tool-box-20-inches",
        "name": "TPBX0201 - Total Plastic Tool Box (20 Inches)",
        "description": "20\" Plastic Tool Box\nSize : 508mm(20\"\")*296mm（11.7\"\"）*261mm(10.3\"\")\nMaterial ：PP\nWeight : 2150g\nPP plastic buckle\nMax Load : 20KG\nHigh-strength Handle\nUpper cover with three storage areas\nUpper cover with scale function\nContains 1Pcs plastic tray\nPacked by label",
        "category": "Tool Sets (Tool Boxes)",
        "subcategory": "Tool Sets (Tool Boxes)",
        "images": [
            {
                "name": "TPBX0201.jpg",
                "url": "/website%20products/Tool%20Sets%20(Tool%20Boxes)/TPBX0201%20-%20Total%20Plastic%20Tool%20Box%20(20%20Inches)/TPBX0201.jpg"
            }
        ],
        "price": "3500",
        "isOnOffer": true,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dsd-37---dayliff-037kw-1ph-cw-30m-cable--fswitch",
        "name": "DSD 37 - DAYLIFF 0.37KW 1PH CW 30M CABLE & FSWITCH",
        "description": "Dayliff DSD range of Submersible Multistage centrifugal pumps are specially designed for domestic and small scale water supply from wells and boreholes. Material of construction include plastic impellers and diffusers, cast iron delivery and suction chambers and AISI 304 stainless steel pump housing, shaft and shaft coupling. These quality materials together with the plastic impellers provide the pumps with excellent sand handling capabilities for a longer life. The pumps are also supplied complete with 30m cable.\n\nThe pump is coupled to a sealed liquid cooled 2-pole asynchronous squirrel-cage motor constructed of stainless steel. Motors are supplied complete with purpose designed control boxes that include the capacitor and electrical overload protection.\nA DAYLIFF electronic Pump Controller is recommended for comprehensive pump control including wireless low level, motor overload and irregular power supply protection.\nMotor:\nEnclosure Class: IP68\nVoltage: 1 X 240V\nInsulation: Class B\nSpeed: 2850rpm\nOperating Conditions:\nPumped Liquid: Thin, clean, chemically non-aggressive liquids with a max. sand content of 0.25%\nMaximum Fluid Temperature: +35C\nMaximum Ambient Temperature: +35C\nMaximum immersion depth: 80M\nMinimum borehole diameter: 110mm\nDimensions & Weights:\nDN(\"): 1.25\nPump Information\nIstat / I: 6.0\nModel: DSD 3/7\nPower (kW): 0.37\nMaximum Operating Current (A): 3.7\nWeight (kg): 7",
        "category": "Water Pumps",
        "subcategory": "Borehole Submersible Pumps",
        "images": [
            {
                "name": "DSD-486x461_1.webp",
                "url": "/website%20products/Water%20Pumps/Borehole%20Submersible%20Pumps/DSD%2037%20-%20DAYLIFF%200.37KW%201PH%20CW%2030M%20CABLE%20%26%20FSWITCH/DSD-486x461_1.webp"
            }
        ],
        "price": "25000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dq15f---dayliff-circulator-shower-booster-pump-cw-flowswitch",
        "name": "DQ15F - Dayliff Circulator (Shower Booster) Pump (CW Flowswitch)",
        "description": "DAYLIFF DQ 15F circulator pump is designed for domestic shower pressure boosting applications. It can also be used for pressure boosting in domestic dwellings and for circulation in solar hot water system, the pump includes a built-in flow switch which activates pump operations whenever there is supply demand. This is particularly applicable to domestic shower pressure boosting.\n\nPUMP\nDAYLIFF DQ circulator pumps are designed for hot water circulation in heating, hot water, cooling and air conditioning applications in open or\nclosed systems. They can also be used for pressure boosting in domestic dwellings and for circulation in solar hot water systems. Specifications are\noffered as follows;\nDQ15F - A single speed pump that includes a built-in flow switch which activates pump operations whenever there is supply demand. This is\nparticularly applicable to domestic shower pressure boosting.\nDQ 25/32 - Pumps are provided with 3 speed settings for selection of the ideal flow to meet system requirements. No automatic switching is\nprovided.\nPump construction is cast iron pump housing, glass fibre reinforced polypropylene impeller, stainless steel rotor and ceramic bearing support. All\npumps are supplied complete with female threaded BSP union connections.\nMOTOR\nThe integral 2-pole asynchronous squirrel-cage motor is designed to operate at three speeds (except DQ15F). All motors include an inbuilt\ncapacitor and overload protection and can be connected directly to mains supply through a 5A fuse or MCB.\nEnclosure Class: IP54                   Insulation Class: F  Voltage:1x240V S    p eed:2900rpm\nOPERATING CONDITIONS\nPumped Liquid: Thin, clean, chemically non-aggressive liquids without solids or fibres.\n00\nMax Fluid Temperature:-10C -110C.\nMax. Ambient Temperature: 10C - 50C\nMax. Operating Pressure: 6 bar\nInstallation: Pumps must be installed with rotor shaft horizontal and vertical water flow.\nNote: The liquid temperature should be higher than the ambient temperature.\nPUMP DATA\nSpeed2\nSpeed1\nSpeed3\n2\n4\n6\n89100\n1\n3\n5\n7\n0.51.0\n1.5\n2.02.5\n0\nFLOW RATE (m/hr)\nPUMP HEAD (m)\n0.5\n33.5\n02.51.52\n8\n10\nModel\nMotor\n(kW)\nCurrent\n(A)\nDimensions (mm)\nWeight\n (kg)\nW\nH\n245\n180\n1.1\nDQ 32/80\nL\n175\n150\nInlet/\nOutlet\n2”\n93\n3180\n0.45\nDQ 25/60\n125\n90\n1½”\n120\n4160\n105.5\n144\n¾”\nDQ 15F\n0.55\n9\nDQ32/80\nDQ25/60\nAll Dimensions in mm\nDQ 25/32\nDQ 15/25/32\nCirculator Pumps",
        "category": "Water Pumps",
        "subcategory": "Circulator (Shower Booster) Pumps",
        "images": [
            {
                "name": "dq15-800x600.jpg",
                "url": "/website%20products/Water%20Pumps/Circulator%20(Shower%20Booster)%20Pumps/DQ15F%20-%20Dayliff%20Circulator%20(Shower%20Booster)%20Pump%20(CW%20Flowswitch)/dq15-800x600.jpg"
            }
        ],
        "price": "10500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dayliff-float-switch",
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
        "price": "2000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ghpw2103---ingco-gasoline-pressure-washer-7hp",
        "name": "GHPW2103 - Ingco Gasoline Pressure Washer (7HP)",
        "description": "Pump Type:AxialPump\nPump head material:Brass\nPump with changing oil function\nMax Output:7.0HP\nLife time:300h\nMax. Pressure:235Bar (3450psi)\nFlow Rate:9.5L/min (2.5GPM)\nDisplacement :212cc\nStarting System :Recoil\nEngine Type :OHV 4-stroke\nEngine Speed :3600rpm\nFuel volume :3.6L\nOil Volume :0.6L\nFuel Type:Unleaded Gasoline\n1 pcs metal lance\n1 pcs metal gun\n9.1m pressure hose\nFour nozzles\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "[GHPW2103] GHPW2103 GASOLINE PRESSURE WASHER 7HP.jfif",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/GHPW2103%20-%20Ingco%20Gasoline%20Pressure%20Washer%20(7HP)/%5BGHPW2103%5D%20GHPW2103%20GASOLINE%20PRESSURE%20WASHER%207HP.jfif"
            }
        ],
        "price": "81000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp201h---ingco-gasoline-high-pressure-water-pump-2",
        "name": "GWP201H - Ingco Gasoline High Pressure Water Pump (2'')",
        "description": "Gasoline high pressure water pump with double impeller\nSuction port diameter:50mm,2\"\nDischarge port diameter:50mm,2\"/40mm,1.5\"/40mm,1.5\"\nMax.flow:300L/min\nMax.head lift:75/80/80m\nMax.suction head:7m\n7.5HP gasoline engine\nDisplacement:212cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "[GWP201H] GWP201H GASOLINE HIGH PRESSURE WATER PUMP 2_.jfif",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/GWP201H%20-%20Ingco%20Gasoline%20High%20Pressure%20Water%20Pump%20(2'')/%5BGWP201H%5D%20GWP201H%20GASOLINE%20HIGH%20PRESSURE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "43500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp202---ingco-gasoline-water-pump-2",
        "name": "GWP202 - Ingco Gasoline Water Pump (2'')",
        "description": "Suction&amp;Discharge port diameter:50mm,2\"\nMax.flow:550L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "[GWP202] GWP202 GASOLINE WATER PUMP 2_.jfif",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/GWP202%20-%20Ingco%20Gasoline%20Water%20Pump%20(2'')/%5BGWP202%5D%20GWP202%20GASOLINE%20WATER%20PUMP%202_.jfif"
            }
        ],
        "price": "25000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "gwp302---ingco-gasoline-water-pump-3",
        "name": "GWP302 - Ingco Gasoline Water Pump (3'')",
        "description": "Suction&amp;Discharge port diameter:80mm,3\"\nMax.flow:1000L/min\nMax.head lift:32m\nMax.suction head:8m\n7.0HP gasoline engine\nDisplacement:208cc\nFuel tank:3.6L\nStarting system:Recoil\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "[GWP302] GWP302 GASOLINE WATER PUMP 3_.jfif",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/GWP302%20-%20Ingco%20Gasoline%20Water%20Pump%20(3'')/%5BGWP302%5D%20GWP302%20GASOLINE%20WATER%20PUMP%203_.jfif"
            }
        ],
        "price": "27000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3202---total-gasoline-water-pump-2",
        "name": "TP3202 - Total Gasoline Water Pump (2'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :28m\nSUCTION LIFT :8m\nDELIVERY VOLUME :550 Lit / min\nDIAMETER :2\" X 2\"\nFUEL TANK :3.6 Lit\nWEIGHT :21 Kg",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "TP3202.jpg",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/TP3202%20-%20Total%20Gasoline%20Water%20Pump%20(2'')/TP3202.jpg"
            }
        ],
        "price": "28000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "tp3302---total-gasoline-water-pump-3",
        "name": "TP3302 - Total Gasoline Water Pump (3'')",
        "description": "ENGINE :4 - STROKE\nDISPLACEMENT :208cc\nPOWER :7HP\nDELIVERY HEIGHT :32m\nSUCTION LIFT :8m\nDELIVERY VOLUME :1000 Lit / min\nDIAMETER :3\" X 3\"\nFUEL TANK :3.6 Lit\nWEIGHT :25 Kg",
        "category": "Water Pumps",
        "subcategory": "Gasoline Water Pumps",
        "images": [
            {
                "name": "TP3302.jpg",
                "url": "/website%20products/Water%20Pumps/Gasoline%20Water%20Pumps/TP3302%20-%20Total%20Gasoline%20Water%20Pump%20(3'')/TP3302.jpg"
            }
        ],
        "price": "31500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "cpm158---pedrollo-1hp-peripheral-impeller-booster-pumps",
        "name": "CPM158 - Pedrollo 1hp Peripheral Impeller Booster Pumps",
        "description": "The PEDROLLO CP range are non self-priming closed impeller pumps with integral motors. They are efficient, quiet and rated for continuous duty making them suitable for water boosting and transfer in a variety of domestic, industrial and agricultural applications. They are also particularly suited to automatic pressurised supply using either a surge tank or 'Presscontrol' unit. Pump construction material is cast iron for the casing and brass alloy for impellers except Cpm130 which uses techno plastic and CPm150 which uses stainless steel.MOTORPumps are close coupled to a Pedrollo brushless TEFC induction motor designed for continuous operation. Single phase motors are provided with a thermal cutout in the windings to protect against electric and mechanical overload and can be connected directly to the mains power supply through a 10Amp fuse or MCB. Three phase motors require remote DOL starter protection according to local regulations.\n\nPUMP DATA\nModel\nVoltage (V)\nPower (kW\nCurrent (A)\nDN1\nDN2\nDimensions (mm)\nWeight (kg)\nL\nH\nH1\nW\nCPm 130\n1x240\n0.37\n2.9\n1”\n258\n205\n82\n165\n8\nCPm 150\n0.75\n5.4\n286\n240\n92\n190\n12\nCPm 158\n5.8\nCPm 158 Hydrofresh\n550\n600\n-\n225\n20\nCPm 170\n1.1\n7.2\n1¼”\n367\n260\n110\n206\n18\nCPm 190\n1.5\n10\n364\n290\n115\n242\n22\nCPm 200\n2.2\n11.7\n384\n24\nCP 200\n3x415\n5.2",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "CPM150-800x600_bd1c1614-a57d-4d67-9bb6-8776ddcadf4c.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/CPM158%20-%20Pedrollo%201hp%20Peripheral%20Impeller%20Booster%20Pumps/CPM150-800x600_bd1c1614-a57d-4d67-9bb6-8776ddcadf4c.webp"
            }
        ],
        "price": "25900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ddc-158---dayliff-1hp-booster-pump",
        "name": "DDC 158 - Dayliff 1HP Booster Pump",
        "description": "The Dayliff DDC centrifugal non self priming closed impeller pump is specially designed for all small scale domestic and commercial water supply uses and is particularly suited for water boosting and transfer applications. The pump body is cast iron and the impeller brass.\n\nDDC158 Econo is of lighter construction and is fitted with stainless steel impeller.\nMOTORS\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: IP44\nInsulation Class: F\nSpeed: 2900rpm\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "dayliff-DDC158-800x600_1.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDC%20158%20-%20Dayliff%201HP%20Booster%20Pump/dayliff-DDC158-800x600_1.webp"
            }
        ],
        "price": "13900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ddp-60---dayliff-05hp-peripheral-impeller-booster-pumps",
        "name": "DDP 60 - Dayliff 0.5hp Peripheral Impeller Booster Pumps",
        "description": "The Dayliff DDP peripheral pump is specially designed for all small scale domestic and commercial water supply uses. It is of high specification peripheral featuring copper windings, a high capacity motor and stainless steel housing inserts to ensure free impeller movement. The pump body is manufactured from cast iron and impeller from brass.\n\nMOTORS\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: IP44\nInsulation Class: F\nSpeed: 2900rpm\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "dayliff-ddp60-800x600_1.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDP%2060%20-%20Dayliff%200.5hp%20Peripheral%20Impeller%20Booster%20Pumps/dayliff-ddp60-800x600_1.webp"
            }
        ],
        "price": "6300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ddp-60e---dayliff-05hp-econo-peripheral-impeller-booster-pumps",
        "name": "DDP 60E - Dayliff 0.5hp Econo Peripheral Impeller Booster Pumps",
        "description": "The Dayliff DDP peripheral pump is specially designed for all small scale domestic and commercial water supply uses. It is of high specification peripheral featuring copper windings, a high capacity motor and stainless steel housing inserts to ensure free impeller movement. The pump body is manufactured from cast iron and impeller from brass.\n\nMOTORS\nPumps are close coupled to reliable TEFC electric motors designed for continuous operation and are provided with a thermal cutout to protect against electrical overload. They can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: IP44\nInsulation Class: F\nSpeed: 2900rpm\nVoltage:1x240V",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "ddpe-water-pumps-in-kenya-486x461.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/DDP%2060E%20-%20Dayliff%200.5hp%20Econo%20Peripheral%20Impeller%20Booster%20Pumps/ddpe-water-pumps-in-kenya-486x461.webp"
            }
        ],
        "price": "5400",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "pkm60---davis-and-shirtliff-pedrollo-05hp-peripheral-impeller-booster-pumps",
        "name": "PKM60 - Davis and Shirtliff Pedrollo 0.5hp Peripheral Impeller Booster Pumps",
        "description": "The PEDROLLO PKm is a robust, reliable and economical pump used principally for water transfer in domestic and small scale water transfer applications. The pump body is made from cast iron with a brass insert set into the front housing for improved starting performance and protection from jamming. The impeller is made from brass.\n\nThe pumps feature the following benefits;\nQuiet operation due to the anti vibration system between shaft and impeller.\nMore compact.\nMore efficient motor with low energy consumption and lower operating temperature.\nSpecial paint which gives improved resistance against environmental corrosion.\nExtended life\nPumps can be installed for manual or automatic control using either the unique ‘Presscontrol’ unit or a pressure tank and switch. Also available is the integral ‘Hydrofresh’ version (Pkm60 only) which combines a 24L horizontal diaphragm tank, pressure switch and gauge with pressure settings of 1.4 Bar for pump start and 2.8 Bar for pump stop.\nMOTOR\nPumps are close coupled to a TEFC brushless induction motor designed for continuous operation. A thermal relay is provided in the windings to protect against electrical and mechanical overload and the pump can be connected directly to the mains power supply through a 10amp fuse or MCB.\nEnclosure Class:PKm60®:IPX4, PKm65: IP44\nVoltage:1x240V\nInsulation Class:F\nSpeed:2900rpm\nPKm 60®\n\t※\n50 years of success since 1974\nProduced over 23 million units\nMade from premium materials and components\nOur most economical and versatile product\nNoise level reduced by20 %\nExclusively produced with renewable energy sources\nPERFORMANCE RANGE\n •Flow rate up to 40 l/min (2.4 m3/h)\n •Head up to 40 m\nINSTALLATION AND USE\nDesigned to transfer clean water free from abrasive parti-\ncles and liquids that will not damage the pump’s compo-\nnents.\nReliable,  easy  to  operate,  and  cost-effective.  It  is  ideal  for\ndomestic  applications,  specifically  for  gardens  and  or-\nchards, in combination with small autoclave tanks.\nELECTRIC MOTOR\nThree-phase    pumps    feature    IE3-class    electric    mo-\ntors,   while   single-phase   models   use   IE2   motors.   All\nare designed with class F insulation and IPX4 protection.\nAPPLICATION LIMITS\n •Manometric suction head up to 8 m\n •Liquid temperature between -10   ° C and +60 °C\n •Ambient temperature up to +50 °C\n •Maximum working pressure 6 bar\nPATENTS - TRADE MARKS - MODELS\n •Motor bracket: Patent No. IT1243605\n •Pump body: Patent No. 0000275946\n •Registered community model No. 018625876\n •International registered model No. DM/220613\n •PKm 60® Registered Trade mark No. 009875394\nAVAILABLE UPON REQUEST\nDifferent voltage requirements 60 Hz frequency\nClean water\nDomestic use\nPeripheral impeller pump\nThe PKm 60® a cornerstone\nsince 1974, an integral part\nof our future.\n50 Hz | PKm 60®\n0510152025303540\n0\n5\n10\n15\n20\n25\n30\n35\n40\n45\n50\n75\n100\n125\n01234567891011\n0123456789\n00.511.522.5\nPKm 60\nUS g.p.m.\nImp g.p.m.\nfeet\nl/min\nm³/h\nf\nDN2\nDN1\na\nwm\ns\ni\nt\nn2\nh3\nh2\nh1\nh\nTYPEPOWER (P2)\nQ\nm³/ h00.30.60.91. 21. 51.82 .12.4\nSingle-ph.Three-ph.kWHP1~3~l/min0510152025303540\nPKm 60PK 600.300.40\nIE2IE3\nHmetres403833.5292419. 515105\nDIMENSIONS AND WEIGHT\nTYPEPORTSDIMENSIONS mm\nkg\nSingle-ph.Three-ph.\nDN1DN2afhh1h2h3imtn2ws1~3~\nPKm 60®PK 60®1\"1\"\n382081455675131205511894-1005375.05.0\nTYPEVOLTAGE\nThree-phase\n230 V - t400 V - s\nPK 60®2.0 A1.15   A\nABSORPTION\nTYPEVO LTAG E\nSingle-phase230 V\nPKm 60®2.3 A\nFlow rate Q\n4\nHead H (metres)\nCURVES AND PERFORMANCE DATA  –  HS=0 m  50 Hz\nQ = Flow rate   H = Total manometric head   HS = Suction height Performance curves comply with EN ISO 9906 Grade 3B tolerance limits.\nPALLET CAPACITY\n240\nBrass\nPKm 60® | 50 Hz",
        "category": "Water Pumps",
        "subcategory": "Peripheral Booster (Centrifugal) Pumps",
        "images": [
            {
                "name": "Pedrollo-PKM-60-486x461_4f6cf9e0-ed86-4a7c-8eb4-638bd5f495d0.webp",
                "url": "/website%20products/Water%20Pumps/Peripheral%20Booster%20(Centrifugal)%20Pumps/PKM60%20-%20Davis%20and%20Shirtliff%20Pedrollo%200.5hp%20Peripheral%20Impeller%20Booster%20Pumps/Pedrollo-PKM-60-486x461_4f6cf9e0-ed86-4a7c-8eb4-638bd5f495d0.webp"
            }
        ],
        "price": "9000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dayliff-superpress-p-pressure-controller",
        "name": "Dayliff Superpress P Pressure Controller",
        "description": "High specification in-line electronic pump controllers for automatic operation of pressurised water supplies.\n\nFeatures include:-\nStarts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\ncontroller automatically senses the pipe pressure and regulates the starting pressure\nDry run protection provided and restart when supply returns (positive suction)\nIncorporates a spring activated hydraulic accumulator to control pump cycling\nLED power on, pump run, dry run indicators and delay timer\nSettable delay timer for tank filling (P)\nBuilt in pressure gauge for pressure monitoring (P\nMax Motor size: 2.2kW/1ph\nMax Current: 10A\nProtection: IP65\nMax Operating Pressure: 10 Bar\nConnection: 1''M Voltage: 90-260V\nDimensions (L/W/H): 192x140x90mm\nAn in-line electronic pump controller for automatic operation of pressurised pump supplies. Features include:-\nl Starts pump on pressure and stops on low flow. The start pressure is adjustable between 1.3 - 5 Bar\nl Inbuilt timer delays pump starting and controls pump cycling in low flow conditions eliminating the need\nfor a separate  pressure vessel\nl Dry run protection with automatic reset\nl LED power and run dry indicators\nl Built in pressure gauge\nMax Motor Size: 1.5kW/1ph  Max Current: 12A M  ax Operating Pressure:10 Bar\nConnection: 1” M Protection: IP65 Dimensions (L/W/H): 190/105/96mm\nA high specification in-line electronic pump controller that starts on pressure and stops on either low flow or a\nsettable pressure.  It completely replaces the traditional pressure tank/pressure switch systems whilst providing\na number of additional control features. These include:-\n• Simple start and stop pressure setting with digital pressure display.\n• Dry run protection\n• Motor over current providing protection against overload and  blocked water conditions.\n• Options of master/slave configuration in twin booster set application and auto change-over.\n• Operating/error status indicator via LED’s and display alerts.\n• Input and output terminals for remote connection.\n• Rotor anti-blocking function used to prevent seizure of mechanical  parts during prolonged periods of\npump inactivity.\nMax. Motor Size: 2.2kW/1ph   Connection: 1'' M Max. Stop Pressure: 10 Bar\nStart Pressure Range: 0.5-8 Bar Max. Rated Current: 16A   P rotection: IP65\nDimensions (L/W/H): 225/150/115mm\nMulti functional electronic controllers for operation and running of single and three phase pumps. Features\ninclude: overload protection, dry-run protection, over/under voltage protection, phase loss protection (3\nphase units) and transient surge protection.\nThe Controllers have LCD display including running status and error conditions that can hold memory fo upto\nlast five failure events.\nSCM2: 0.37 - 1.5kW, 1ph, 220-240V,    SCT7: 1.1-7.5kW, 3ph, 380-415V,\nSCT15: 7.5-15kW, 3ph, 380-415V   Enclosure Class: IP22, IP54 (SCT15)\n00\nTemperature: 25-55C                Protection: IP68\nMAXCON PUMP\nCONTROL\nSCM2\nSCT7\nSCT15\n• Starts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\n• Dry run protection provided and restart when supply returns (positive suction)\n• Incorporates a spring activated hydraulic accumulator to control pump cycling\n• LED power on, pump run, dry run indicators and delay timer\n• Settable delay timer for tank filling (P)\n• Built in pressure gauge for pressure monitoring (P)\nMax Motor size: 2.2kW/1ph  Max Current: 10A  Protection: IP65\nMax Operating Pressure:10 Bar Connection: 1''M V oltage: 90-260V\nSuperpress S\nSuperpress P\nSUPERPRESS\nCONTROLLER\nIn-line electronic pump controllers for automatic operation of pressurised water supplies. Features include:-\n•  Starts pump on pressure (fixed at 1.5Bar) stops on low flow.\n•  Dry run protection provided. Standard models require manual reset, Automatic models restart when\nsupply returns (positive suction)\n•  Incorporates a spring activated hydraulic accumulator to control pump cycling\n•  LED power on, pump run and run dry indicators\nMax Motor size: 0.75kW (Auto), 1.1kW/1ph (Manual) Max Current: 10A\nMax Operating Pressure:10 Bar   Connection: 1''M\nProtection: IP54(Auto), IP65 (Manual)    Max Delivery Height: 10m(Auto), 100m(Manual)\nDimensions (L/W/H): 227x1305x168mm(Manual), 210x110x100 (Auto)\nAuto\nManual\nPRESSCON\nCONTROLLERS\nUPD\nA\nTED\nPump\nControllers",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "DAYLIFF_SUPERPRESSCON_P.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Dayliff%20Superpress%20P%20Pressure%20Controller/DAYLIFF_SUPERPRESSCON_P.webp"
            }
        ],
        "price": "4600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dayliff-superpress-s-pressure-controller",
        "name": "Dayliff Superpress S Pressure Controller",
        "description": "High specification in-line electronic pump controllers for automatic operation of pressurised water supplies.\n\nFeatures include:-\nStarts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\ncontroller automatically senses the pipe pressure and regulates the starting pressure\nDry run protection provided and restart when supply returns (positive suction)\nIncorporates a spring activated hydraulic accumulator to control pump cycling\nLED power on, pump run, dry run indicators and delay timer\nSettable delay timer for tank filling (P)\nBuilt in pressure gauge for pressure monitoring (P\nMax Motor size: 2.2kW/1ph\nMax Current: 10A\nProtection: IP65\nMax Operating Pressure: 10 Bar\nConnection: 1''M Voltage: 90-260V\nDimensions (L/W/H): 192x140x90mm\nAn in-line electronic pump controller for automatic operation of pressurised pump supplies. Features include:-\nl Starts pump on pressure and stops on low flow. The start pressure is adjustable between 1.3 - 5 Bar\nl Inbuilt timer delays pump starting and controls pump cycling in low flow conditions eliminating the need\nfor a separate  pressure vessel\nl Dry run protection with automatic reset\nl LED power and run dry indicators\nl Built in pressure gauge\nMax Motor Size: 1.5kW/1ph  Max Current: 12A M  ax Operating Pressure:10 Bar\nConnection: 1” M Protection: IP65 Dimensions (L/W/H): 190/105/96mm\nA high specification in-line electronic pump controller that starts on pressure and stops on either low flow or a\nsettable pressure.  It completely replaces the traditional pressure tank/pressure switch systems whilst providing\na number of additional control features. These include:-\n• Simple start and stop pressure setting with digital pressure display.\n• Dry run protection\n• Motor over current providing protection against overload and  blocked water conditions.\n• Options of master/slave configuration in twin booster set application and auto change-over.\n• Operating/error status indicator via LED’s and display alerts.\n• Input and output terminals for remote connection.\n• Rotor anti-blocking function used to prevent seizure of mechanical  parts during prolonged periods of\npump inactivity.\nMax. Motor Size: 2.2kW/1ph   Connection: 1'' M Max. Stop Pressure: 10 Bar\nStart Pressure Range: 0.5-8 Bar Max. Rated Current: 16A   P rotection: IP65\nDimensions (L/W/H): 225/150/115mm\nMulti functional electronic controllers for operation and running of single and three phase pumps. Features\ninclude: overload protection, dry-run protection, over/under voltage protection, phase loss protection (3\nphase units) and transient surge protection.\nThe Controllers have LCD display including running status and error conditions that can hold memory fo upto\nlast five failure events.\nSCM2: 0.37 - 1.5kW, 1ph, 220-240V,    SCT7: 1.1-7.5kW, 3ph, 380-415V,\nSCT15: 7.5-15kW, 3ph, 380-415V   Enclosure Class: IP22, IP54 (SCT15)\n00\nTemperature: 25-55C                Protection: IP68\nMAXCON PUMP\nCONTROL\nSCM2\nSCT7\nSCT15\n• Starts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\n• Dry run protection provided and restart when supply returns (positive suction)\n• Incorporates a spring activated hydraulic accumulator to control pump cycling\n• LED power on, pump run, dry run indicators and delay timer\n• Settable delay timer for tank filling (P)\n• Built in pressure gauge for pressure monitoring (P)\nMax Motor size: 2.2kW/1ph  Max Current: 10A  Protection: IP65\nMax Operating Pressure:10 Bar Connection: 1''M V oltage: 90-260V\nSuperpress S\nSuperpress P\nSUPERPRESS\nCONTROLLER\nIn-line electronic pump controllers for automatic operation of pressurised water supplies. Features include:-\n•  Starts pump on pressure (fixed at 1.5Bar) stops on low flow.\n•  Dry run protection provided. Standard models require manual reset, Automatic models restart when\nsupply returns (positive suction)\n•  Incorporates a spring activated hydraulic accumulator to control pump cycling\n•  LED power on, pump run and run dry indicators\nMax Motor size: 0.75kW (Auto), 1.1kW/1ph (Manual) Max Current: 10A\nMax Operating Pressure:10 Bar   Connection: 1''M\nProtection: IP54(Auto), IP65 (Manual)    Max Delivery Height: 10m(Auto), 100m(Manual)\nDimensions (L/W/H): 227x1305x168mm(Manual), 210x110x100 (Auto)\nAuto\nManual\nPRESSCON\nCONTROLLERS\nUPD\nA\nTED\nPump\nControllers",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "Controller.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Dayliff%20Superpress%20S%20Pressure%20Controller/Controller.webp"
            }
        ],
        "price": "5600",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "mondial-presscontrol-11kw-1-inch",
        "name": "Mondial PRESSCONTROL 1.1KW (1 Inch)",
        "description": "Motor\n\nInsulation Class\nF\nOperating Conditions\nMaximum Fluid Temperature\n+60C\nMaximum working pressure\n8 Bar\nMaximum Flow Rate\n6\nPump Information\nModel\nPresscontrol 1.1kW\nPower (kW)\n1.1\nCut Pressure\n1.5 Bar\nMaximum Operating Current (A)\n16\nDimension(mm) A\n160\nDimension(mm) B\n200\nDimension(mm) C\nOutlet BSP\n1\"\nWeight (kg)\n1.3\nWatertech Pump Controllers area revolutionary integrated booster pump control units for the provision of automatic pressurised water supply. They incorporate a combination of hydraulic and electronic control functions, starting the pump when system pressure drops to thepre-set value and stopping the pump when demand drops below the cut-out flow rate. Particular features are:\nAutomatic pump start and stop as determined by user demand.\nMaintenance of constant output pressure.\nPump shutdown in the event of low suction supply or suction blockage.\nAttenuates the effects of water hammer .\nCompletely maintenance free; no air charging or adjustment necessary .\nLED for power on, pump on and failure (except Mondial).\nCompact and simple to install.\nThree models are available, the Mondial, Presscontrol and Mascontrol with their application dependent upon the pump motor size and system flow rate. For larger flow and motor sizeapplications, the unit can be fitted on a bypass and connected to the motor starter through a contactor on the control circuit.\nWatertech Pump Controllers unique design offers many advantages over conventional expansion tank systems and also dispenses with the necessity for separate dry run protection.Their simplicity ,reliability and effectiveness make them the ideal solution for the automatic control of all small pumped water supply installations.\nINSTALLATION\nPresscontrol is designed to screw directly on to the delivery outlet of the pump and accomodate the full deliverflow . As cut-in pressure is fixed at 1.5 Bar (15m) the system static head must be at least 0.2 Bar (2m) below thisvalue. It can be fitted to either dry booster pumps with positive or negative suctions and to submersible pumps.\nAn in-line electronic pump controller for automatic operation of pressurised pump supplies. Features include:-\nl Starts pump on pressure and stops on low flow. The start pressure is adjustable between 1.3 - 5 Bar\nl Inbuilt timer delays pump starting and controls pump cycling in low flow conditions eliminating the need\nfor a separate  pressure vessel\nl Dry run protection with automatic reset\nl LED power and run dry indicators\nl Built in pressure gauge\nMax Motor Size: 1.5kW/1ph  Max Current: 12A M  ax Operating Pressure:10 Bar\nConnection: 1” M Protection: IP65 Dimensions (L/W/H): 190/105/96mm\nA high specification in-line electronic pump controller that starts on pressure and stops on either low flow or a\nsettable pressure.  It completely replaces the traditional pressure tank/pressure switch systems whilst providing\na number of additional control features. These include:-\n• Simple start and stop pressure setting with digital pressure display.\n• Dry run protection\n• Motor over current providing protection against overload and  blocked water conditions.\n• Options of master/slave configuration in twin booster set application and auto change-over.\n• Operating/error status indicator via LED’s and display alerts.\n• Input and output terminals for remote connection.\n• Rotor anti-blocking function used to prevent seizure of mechanical  parts during prolonged periods of\npump inactivity.\nMax. Motor Size: 2.2kW/1ph   Connection: 1'' M Max. Stop Pressure: 10 Bar\nStart Pressure Range: 0.5-8 Bar Max. Rated Current: 16A   P rotection: IP65\nDimensions (L/W/H): 225/150/115mm\nMulti functional electronic controllers for operation and running of single and three phase pumps. Features\ninclude: overload protection, dry-run protection, over/under voltage protection, phase loss protection (3\nphase units) and transient surge protection.\nThe Controllers have LCD display including running status and error conditions that can hold memory fo upto\nlast five failure events.\nSCM2: 0.37 - 1.5kW, 1ph, 220-240V,    SCT7: 1.1-7.5kW, 3ph, 380-415V,\nSCT15: 7.5-15kW, 3ph, 380-415V   Enclosure Class: IP22, IP54 (SCT15)\n00\nTemperature: 25-55C                Protection: IP68\nMAXCON PUMP\nCONTROL\nSCM2\nSCT7\nSCT15\nHigh specification in-line electronic pump controllers for automatic operation of pressurised water supplies.\nFeatures include:-\n• Starts pump on pressure or through the flow sensor (minimum 1.5litres/min)and stops on low flow. The\ncontroller automatically senses the pipe pressure and regulates the starting pressure\n• Dry run protection provided and restart when supply returns (positive suction)\n• Incorporates a spring activated hydraulic accumulator to control pump cycling\n• LED power on, pump run, dry run indicators and delay timer\n• Settable delay timer for tank filling (P)\n• Built in pressure gauge for pressure monitoring (P)\nMax Motor size: 2.2kW/1ph  Max Current: 10A  Protection: IP65\nMax Operating Pressure:10 Bar Connection: 1''M V oltage: 90-260V\nDimensions (L/W/H): 192x140x90mm\nSuperpress S\nSuperpress P\nSUPERPRESS\nCONTROLLER\nIn-line electronic pump controllers for automatic operation of pressurised water supplies. Features include:-\n•  Starts pump on pressure (fixed at 1.5Bar) stops on low flow.\n•  Dry run protection provided. Standard models require manual reset, Automatic models restart when\nsupply returns (positive suction)\n•  Incorporates a spring activated hydraulic accumulator to control pump cycling\n•  LED power on, pump run and run dry indicators\nMax Motor size: 0.75kW (Auto), 1.1kW/1ph (Manual) Max Current: 10A\nMax Operating Pressure:10 Bar   Connection: 1''M\nProtection: IP54(Auto), IP65 (Manual)    Max Delivery Height: 10m(Auto), 100m(Manual)\nDimensions (L/W/H): 227x1305x168mm(Manual), 210x110x100 (Auto)\nAuto\nManual\nPRESSCON\nCONTROLLERS\nUPD\nA\nTED\nPump\nControllers",
        "category": "Water Pumps",
        "subcategory": "Pressure Controllers",
        "images": [
            {
                "name": "Press-Control-1.1kW-486x461.webp",
                "url": "/website%20products/Water%20Pumps/Pressure%20Controllers/Mondial%20PRESSCONTROL%201.1KW%20(1%20Inch)/Press-Control-1.1kW-486x461.webp"
            }
        ],
        "price": "7900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "dda1000p---dayliff-1hp-submersible-pump",
        "name": "DDA1000P - Dayliff 1hp Submersible Pump",
        "description": "DAYLIFF DDA submersible multistage centrifugal pumps are designed for pumping clean, non-aggressive water in various domestic and light duty applications. They are particularly suitable for wells and boreholes, though can also be used for water transfer from tanks, irrigation and pressure boosting applications as an alternative to a conventional dry mounted pump. A design feature is the jacketed motor arrangement which provides excellent cooling and allows the pump to work semi-submerged. The pumps also feature mechanical seals (twin on DDA600C & DDA1200C2) in an intermediate oil chamber for greater pump reliability and pump construction is Polypropylene impellers and diffusers and stainless steel pump casing.\n\nPumps can be fitted with a pressure controller for automatic operation. All pumps are supplied complete with 20m cable.\nDDA1000P, DDA600C & DDA1200C2 are fitted with a low level float switch with adjustment clamp and an inbuilt capacitor for simplified installation and are particularly suitable to well and tank applications. DDA900C is particularly suited to borehole applications and is supplied with an external control box which incorporates an isolator, run indicator light, thermal overload protection and starting capacitor which can be connected directly to mains power. The box is also provided with auxiliary terminals for control probes, pressure switch or float switch.\nMOTOR\nEnclosed and rewindable liquid cooled, non-overloading induction motor designed for continuous operations incorporating a thermal cut-out in the windings to protect against overloading. Pumps can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: X8\nInsulation Class: B\nVoltage: 1x240V\nSpeed: 2900rpm",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "DDA1000P_4db8859d-e0cd-47e6-99f2-e2a7af66c9a1.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDA1000P%20-%20Dayliff%201hp%20Submersible%20Pump/DDA1000P_4db8859d-e0cd-47e6-99f2-e2a7af66c9a1.webp"
            }
        ],
        "price": "17300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ddw-750-s---dayliff-05hp-drainage-pump-clean-water",
        "name": "DDW 750 S - Dayliff 0.5hp Drainage Pump (Clean Water)",
        "description": "The DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation, fountain, pond and water transfer applications. Two versions are available, the standard S version with open impeller for lightly turbid water and the vortex V version for water with higher silt loads. Pump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch is provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet suitable for threaded or hose connection.\n\nMOTORS\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is provided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: IPX8\nInsulation Class: F\nVoltage:1x240V\nSpeed: 2900rpm\nPUMPS\nThe DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation,\nfountain and water transfer applications. Two versions  are available, the standard S version with open impeller for lightly turbid\nwater and the vortex V version for water with higher silt loads.\nPump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch\nis provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet\nsuitable for threaded or hose connection.\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is\nprovided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply\nthrough a 10A fuse or MCB.\nEnclosure Class: IPX8             Insulation Class: F            Voltage:1x240V              Speed: 2900rpm\nOPERATING CONDITIONS\nPumped Liquid: Thin, clean, chemically non-aggressive liquid containing some particles and fibres\n0\nMax Fluid Temperature: +35C\nMax Operating Depth: 7m\nPUMP DATA\n42\n8610\n16\n14\n6\n8\n4\n2\n3\nFLOW RATE (m/hr)\nPUMP HEAD (m)\n12\n10\nDDW 1000V\nDDW 750V\nDDW 750S\nDDW 400S\n DDW400/750S DDW750/1000V\nModel\nMotor\nDimensions (mm)\nWeight\n(kg)\nkW\nOutlet\n(”)\nW\n0.41.7\n370\n5\n35\n0.753.1\n220\n14.2\n7\nH\nCurrent (A)\nMax. Particle\nSize (mm)\nMin 400\nMin 350x350\n385\nDDW\nDrainage\n Pumps",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "Dayliff-DDW750S-800x600.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDW%20750%20S%20-%20Dayliff%200.5hp%20Drainage%20Pump%20(Clean%20Water)/Dayliff-DDW750S-800x600.webp"
            }
        ],
        "price": "9900",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "ddw-750-v---dayliff-05hp-drainage-pump-dirty-water",
        "name": "DDW 750 V - Dayliff 0.5hp Drainage Pump (Dirty Water)",
        "description": "The DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation, fountain, pond and water transfer applications. Two versions are available, the standard S version with open impeller for lightly turbid water and the vortex V version for water with higher silt loads. Pump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch is provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet suitable for threaded or hose connection.\n\nMOTORS\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is provided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply through a 10A fuse or MCB.\nEnclosure Class: IPX8\nInsulation Class: F\nVoltage:1x240V\nSpeed: 2900rpm\nPUMPS\nThe DAYLIFF DDW submersible pump range are centrifugal submersible pumps designed for small scale drainage, irrigation,\nfountain and water transfer applications. Two versions  are available, the standard S version with open impeller for lightly turbid\nwater and the vortex V version for water with higher silt loads.\nPump construction is of high strength engineering plastic for the pump casing, suction base and impeller and an external float switch\nis provided for automatic pump control. All pumps are supplied with 10m of waterproof power cable and a union connected outlet\nsuitable for threaded or hose connection.\nPumps are provided with integral non-overloading induction motors designed for continuous operation. A thermal cut-out is\nprovided in the motor winding to protect against pump overload and the pump can be connected directly to the mains power supply\nthrough a 10A fuse or MCB.\nEnclosure Class: IPX8             Insulation Class: F            Voltage:1x240V              Speed: 2900rpm\nOPERATING CONDITIONS\nPumped Liquid: Thin, clean, chemically non-aggressive liquid containing some particles and fibres\n0\nMax Fluid Temperature: +35C\nMax Operating Depth: 7m\nPUMP DATA\n42\n8610\n16\n14\n6\n8\n4\n2\n3\nFLOW RATE (m/hr)\nPUMP HEAD (m)\n12\n10\nDDW 1000V\nDDW 750V\nDDW 750S\nDDW 400S\n DDW400/750S DDW750/1000V\nModel\nMotor\nDimensions (mm)\nWeight\n(kg)\nkW\nOutlet\n(”)\nW\n0.41.7\n370\n5\n35\n0.753.1\n220\n14.2\n7\nH\nCurrent (A)\nMax. Particle\nSize (mm)\nMin 400\nMin 350x350\n385\nDDW\nDrainage\n Pumps",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "Dayliff-DDW750V-800x600.webp",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/DDW%20750%20V%20-%20Dayliff%200.5hp%20Drainage%20Pump%20(Dirty%20Water)/Dayliff-DDW750V-800x600.webp"
            }
        ],
        "price": "10300",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "spc7508---ingco-1hp-submersible-pump",
        "name": "SPC7508 - Ingco 1hp Submersible Pump",
        "description": "Voltage:220-240V~50Hz\nRated power: 750W(1.0HP)\nMax.head:32m\nMax.flow:120L/min\nPipe diameter:1\"\n9m length cable\nCopper wire motor\nStainless steel base\nStainless steel screws\nStainless steel shaft\nThermal protection\nWith float switch\nFor clean water\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "SPC7508.jpg",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/SPC7508%20-%20Ingco%201hp%20Submersible%20Pump/SPC7508.jpg"
            }
        ],
        "price": "18500",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "spd7508---ingco-1hp-drainage-sewer-submersible-pump-dirty-water",
        "name": "SPD7508 - Ingco 1hp Drainage (Sewer Submersible) Pump (Dirty Water)",
        "description": "Voltage:220V-240~50Hz\nRated power:750W(1.0HP)\nMax.head:8m\nMax.flow:217L/min\nMax.depth:7m\nPipe diameter:1\"\nCopper wire motor\n9m length cable\nWith float switch\nFor dirty water\nPacked by carton box",
        "category": "Water Pumps",
        "subcategory": "Submersible Pumps",
        "images": [
            {
                "name": "SPD7508.jpg",
                "url": "/website%20products/Water%20Pumps/Submersible%20Pumps/SPD7508%20-%20Ingco%201hp%20Drainage%20(Sewer%20Submersible)%20Pump%20(Dirty%20Water)/SPD7508.jpg"
            }
        ],
        "price": "11000",
        "isOnOffer": false,
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    },
    {
        "id": "twp63706---total-05hp-submersible-pump",
        "name": "TWP63706 - Total 0.5hp Submersible Pump",
        "description": "Voltage:220-240V~50Hz\nRated power: 370W(0.5HP)\nMax.head:17m\nMax.flow:100L/min\nPipe diameter:1\"\n9m length cable\nCopper wire motor\nStainless steel base\nStainless steel screws\nStainless steel shaft\nThermal protection\nWith float switch\nFor clean water\nPacked by carton box",
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
        "isBestseller": false,
        "originalPrice": 0,
        "offerPrice": 0
    }
];
