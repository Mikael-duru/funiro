// Import Images
// Create a variable productData
// Assign it to an Array of Objects
// In each object assign a unique id
// Store all data required in the Object

import Syltherine from "../images/syltherine.png";
import Leviosa from "../images/leviosa.png";
import Lolito from "../images/lolito.png";
import Respira from "../images/respira.png";
import Grifo from "../images/grifo.png";
import Muggo from "../images/muggo.png";
import Pingky from "../images/pingky.png";
import Potty from "../images/potty.png";


import RomCom from "../images/rom-com.jpg"
import Chand from "../images/Chand.jpg"
import Comfort from "../images/comfort.jpg"
import Couch from "../images/Couch.jpg"
import Cush from "../images/cush.jpg"
import Dinning from "../images/Dinning.jpg"
import SideCush from "../images/side cush.jpg"
import SideDinning from "../images/side dining.jpg"
import WallSet from "../images/wall set.jpg"


import BlackChair from "../images/BlackChair.jpg"
import Comfill from "../images/comfii.jpg"
import Cushion from "../images/cush.jpg"
import DinningSet from "../images/DinningSet...jpg"
import Drawer from "../images/Drawer.jpg"
import KitchenFur from "../images/KitchenFur.jpg"
import LRoomSet from "../images/L.RoomSet.jpg"
import LRoomSet1 from "../images/L.RoomSet1.jpg"
import LRoomSet2 from "../images/L.RoomSet2.jpg"
import OrangeCush from "../images/OrangeCush.jpg"
import RoomMirror from "../images/RoomMirror.jpg"
import TealDrawer from "../images/TealDrawer.jpg"
import YellowCush from "../images/Yellow Cush.jpg"
import BrownCush from "../images/BrownCush.jpg"
import WallSet1 from "../images/WallSet...jpg"

const AllProductData = [
    {
        id:1,
        image: Syltherine,
        name:"Syltherine",
        des:"Stylish cafe chair",
        currentPrice:"Rp 2.500.000",
        previousPrice:"Rp 3.500,000"

    },
    {
        id:2,
        image: Leviosa,
        name:"Leviosa",
        des:"Stylish cafe chair",
        currentPrice:"Rp 2.500.000"

    },
    {
        id:3,
        image: Lolito,
        name:"Lolito",
        des:"Luxury big sofa",
        currentPrice:"Rp 7.000.000",
        previousPrice:" Rp 14.000,000"
    },
    {
        id:4,
        image:Respira,
        name:"Respira",
        des:"Minimalist fan",
        currentPrice:"Rp 500.000"
    },
    {
        id:5,
        image:Grifo,
        name:"Grifo",
        des:"Night lamp",
        currentPrice:"Rp 1.500.000"
    },
    {
        id:6,
        image:Muggo,
        name:"Muggo",
        des:"Small mug",
        currentPrice:"Rp 150.000"

    },
    {
        id:7,
        image:Pingky,
        name:"Pingky",
        des:"Cute bed set",
        currentPrice:"Rp 7.000.000",
        previousPrice:"Rp 14.000.000"

    },
    {
        id:8,
        image:Potty,
        name:"Potty",
        des:"Minimalist flower pot",
        currentPrice:"Rp 500.000",
        previousPrice:""
    },
    {
        id:9,
        image:RomCom,
        name:"RomCom",
        des:"Romantic Chair",
        currentPrice:"Rp 500.000",
        previousPrice:""
    },
    {
        id:10,
        image:Chand,
        name:"Chandelier",
        des:"Light",
        currentPrice:"Rp 500.000",
        previousPrice:"Rp 14.000.000"
    },
    {
        id:11,
        image:Comfort,
        name:"Reading Chair",
        des:"Minimalist reading Chair",
        currentPrice:"Rp 500.000",
        previousPrice:"Rp 24.000.000"
    },
    {
        id:12,
        image:Couch,
        name:"Couch",
        des:"Sitting room chair",
        currentPrice:"Rp 900.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:13,
        image:Cush,
        name:"Cush",
        des:"Cushion",
        currentPrice:"Rp 1.000.000",
        previousPrice:"Rp 2.000.000"
    },
    {
        id:15,
        image:Dinning,
        name:"Dinning",
        des:"Dinning Set",
        currentPrice:"Rp 10.000.000",
        previousPrice:"Rp 20.000.000"
    },
    {
        id:16,
        image:SideCush,
        name:"Side-Cushion",
        des:"Relaxing Side Chair",
        currentPrice:"Rp 500.000",
        previousPrice:""
    },

    {
        id:17,
        image:SideDinning,
        name:"Side-Dinning",
        des:"Side Dinning Set",
        currentPrice:"Rp 900.000",
        previousPrice:""
    },
    {
        id:18,
        image:WallSet,
        name:"Beautiful Wall Set",
        des:"Light",
        currentPrice:"Rp 900.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:19,
        image:BlackChair,
        name:"Relaxing Chair",
        des:"Chair",
        currentPrice:"Rp 500.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:20,
        image:Comfill,
        name:"Comfortable Chair",
        des:"Chair",
        currentPrice:"Rp 12.000.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:21,
        image:Cushion,
        name:"Comfortable Cushion",
        des:"Living Room Chair",
        currentPrice:"Rp 17.000.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:22,
        image:DinningSet,
        name:"Beautiful Dinning Set",
        des:"Dinning Set",
        currentPrice:"Rp 18.000.000",
        previousPrice:"Rp 36.000.000"
    },
    {
        id:23,
        image:Drawer,
        name:"Stylish Drawer",
        des:"Drawer",
        currentPrice:"Rp 900.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:24,
        image:KitchenFur,
        name:"Beautiful Kitchen Furniture",
        des:"Kitchen Furniture",
        currentPrice:"Rp 12.000.000",
        previousPrice:"Rp 18.000.000"
    },
    {
        id:25,
        image:LRoomSet,
        name:"Beautiful LivingRoom Set",
        des:"Living room furniture",
        currentPrice:"Rp 18.000.000",
        previousPrice:"Rp 38.000.000"
    },
    {
        id:26,
        image:LRoomSet1,
        name:"Beautiful LivingRoom Set",
        des:"Living room furniture",
        currentPrice:"Rp 18.000.000",
        previousPrice:"Rp 38.000.000"
    },
    {
        id:27,
        image:LRoomSet2,
        name:"Beautiful LivingRoom Set",
        des:"Living room furniture",
        currentPrice:"Rp 18.000.000",
        previousPrice:"Rp 38.000.000"
    },
    {
        id:28,
        image:OrangeCush,
        name:"Beautiful Orange Cushion",
        des:"Comfortable Reading Chair",
        currentPrice:"Rp 8.000.000",
        previousPrice:"Rp 16.000.000"
    },
    {
        id:29,
        image:RoomMirror,
        name:"Beautiful Wall room mirror",
        des:"Wall Mirror",
        currentPrice:"Rp 500.000",
        previousPrice:"Rp 10.000.000"
    },
    {
        id:30,
        image:YellowCush,
        name:"Beautiful Yellow Cushion",
        des:"Comfortable Reading Chair",
        currentPrice:"Rp 8.000.000",
        previousPrice:"Rp 16.000.000"
    },
    {
        id:31,
        image:TealDrawer,
        name:"Beautiful Teal Drawer",
        des:"Drawer",
        currentPrice:"Rp 7.000.000",
        previousPrice:"Rp 14.000.000"
    },
    {
        id:32,
        image:BrownCush,
        name:"Beautiful Brown Cushion",
        des:"Comfortable Reading Chair",
        currentPrice:"Rp 8.000.000",
        previousPrice:"Rp 16.000.000"
    },
    {
        id:33,
        image:WallSet1,
        name:"Beautiful Wall Set",
        des:"Wall Furniture",
        currentPrice:"Rp 18.000.000",
        previousPrice:"Rp 36.000.000"
    },

]

export default AllProductData