import cordlessDrill from "../assets/images/CordlessDrill.jpg";
import circularSaw from "../assets/images/CircularSaw.jpg";
import socketWrenchSet from "../assets/images/SocketWrenchSet.jpg";
import adjustableWrench from "../assets/images/AdjustableWrench.jpg";



const products = [
  { 
    id: 1, 
    name: "Cordless Drill", 
    price: 120, 
    description: "A powerful 18V cordless drill with a rechargeable battery.", 
    image: cordlessDrill,
  },
  { 
    id: 2, 
    name: "Circular Saw", 
    price: 150, 
    description: "High-precision circular saw, ideal for wood and metal cutting.", 
    image: circularSaw, 
  },
  { 
    id: 3, 
    name: "Socket Wrench Set", 
    price: 60, 
    description: "A 40-piece socket wrench set made of durable chrome vanadium steel.", 
    image: socketWrenchSet, 
  },
  { 
    id: 4, 
    name: "Adjustable Wrench", 
    price: 25, 
    description: "10-inch adjustable wrench with anti-slip handle for easy grip.", 
    image: adjustableWrench, 
  },
 
];

export default products;
