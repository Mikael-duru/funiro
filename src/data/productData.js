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

const ProductData = [
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
    }
]
export default ProductData;