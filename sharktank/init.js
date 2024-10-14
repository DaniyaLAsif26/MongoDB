const mongoose = require("mongoose")
const Season1 = require("./models/season1.js")

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sharktank');
}

main().then(() => {
    console.log("Connected to mongodb")
})
    .catch((err) => console.log(err));

let alldata = [
    // {
    //     _id:1,
    //     pitches:[
    //         {
    //             pitchNo: 1,
    //             brand: 'BluePine Industries',
    //             idea: 'Frozen Momos',
    //             city: 'Faridabad',
    //             ask: '₹50 lakhs for 5% equity',
    //             deal: '₹75 lakhs for 16% equity',
    //             investment: [ 'Ashneer Grover', 'Vineeta Singh', 'Aman Gupta' ],
    //             link:"https://bluepinefoods.com/"
    //         },
    //         {
    //             pitchNo:2,
    //             brand:"Booz scooters",
    //             idea:"Renting e-bike for mobility in private spaces",
    //             city:"Ahmedabad",
    //             ask:"₹40 lakhs for 15% equity",
    //             deal:"₹40 lakhs for 50% equity",
    //             investment:["Ashneer Grover","Vineeta Singh"],
    //             link:"https://www.boozmobility.com/"
    //         },
    //         {
    //             pitchNo:3,
    //             brand:"Heart up my Sleeves",
    //             idea:"Detachable Sleeves",
    //             city:"New Delhi",
    //             ask:"₹25 lakhs for 10% equity",
    //             deal:"₹25 lakhs for 30% equity",
    //             investment:["Anupam Mittal","Vineeta Singh"],
    //             link:"https://heartupmysleeves.com/"
    //         }
    //     ]
    // },

    // {
    //     _id:2,
    //     pitches:[
    //         {
    //             pitchNo: 4,
    //             brand: 'Tagz Foods',
    //             idea: 'Healthy Potato Chips',
    //             city: 'Bengaluru',
    //             ask: '₹70 lakhs for 1% equity',
    //             deal: '₹70 lakhs for 2.75% equity',
    //             investment: [ 'Ashneer Grover' ],
    //             link:"https://tagzfoods.com/"
    //         },
    //         {
    //             pitchNo:5,
    //             brand:"Head and Heart",
    //             idea:"Brain Development Course",
    //             city:"Chandigarh",
    //             ask:"₹50 lakhs for 5% equity",
    //             deal:"No Deal",
    //             investment:[""],
    //             link:"https://thehnh.in/"
    //         },
    //         {
    //             pitchNo:6,
    //             brand:"Agri Tourism",
    //             idea:"Rural Tourism",
    //             city:"",
    //             ask:"₹50 lakhs for 5% equity",
    //             deal:"No Deal",
    //             investment:[],
    //             link:'https://agritourism.in/home/'
    //         }
    //     ]
    // }
{
  "_id": 3,
  "pitches": [
    {
      "pitchNo": 7,
      "brand": "qZense Labs",
      "idea": "Food Freshness Detector",
      "city": "Bengaluru",
      "ask": "₹1 crore for 0.25% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://www.qzense.com/"
    },
    {
      "pitchNo":8 ,
      "brand": "Peeschute",
      "idea": "Disposable Urine Bag",
      "city": "Jalna",
      "ask": "₹75 lakhs for 4% equity",
      "deal": "₹75 lakhs for 6% equity",
      "investment": ["Aman Gupta"],
      "link": "https://peeschute.com/"
    },
    {
      "pitchNo": 9,
      "brand": "NOCD",
      "idea": "Energy Drink",
      "city": "Bengaluru",
      "ask": "₹50 lakhs for 2% equity",
      "deal": "₹20 lakhs for 15% equity and ₹30 lakhs debt",
      "investment": ["Vineeta Singh"],
      "link": "https://www.jouleshealth.com/nocd"
    }
  ]
},

{
  "_id": 4,
  "pitches": [
    {
      "pitchNo": 10,
      "brand": "CosIQ",
      "idea": "Intelligent Skincare",
      "city": "Delhi",
      "ask": "₹50 lakhs for 7% equity",
      "deal": "₹50 lakhs for 25% equity",
      "investment": ["Anupam Mittal","Vineeta Singh"],
      "link": "https://mycosiq.com/"
    },
    {
      "pitchNo": 11,
      "brand": "JhaJi Achaar",
      "idea": "Pickle",
      "city": "Darbhanga",
      "ask": "₹50 lakhs for 10% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://www.jhajistore.com/"
    },
    {
      "pitchNo": 12,
      "brand": "Bummer",
      "idea": "Underwear	",
      "city": "Ahmedabad",
      "ask": "₹75 lakhs for 4% equity",
      "deal": "₹75 lakhs for 7.5% equity",
      "investment": ["Namita thapar","aman Gupta"],
      "link": "https://bummer.in/"
    }
  ]
},

{
  "_id": 5,
  "pitches": [
    {
      "pitchNo": 13,
      "brand": "Revamp Moto",
      "idea": "E-Bike",
      "city": "Nashik",
      "ask": "₹1 crore for 1% equity",
      "deal": "₹1 crore for 1.5% equity",
      "investment": ["Anupam Mittal","Aman Gupta"],
      "link": "https://revampmoto.in/"
    },
    {
      "pitchNo": 14,
      "brand": "Hungry Heads",
      "idea": "Restaurant serving 80 types of Maggi",
      "city": "Mumbai",
      "ask": "₹50 lakhs for 5% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://www.thehungryheads.com/"
    },
    {
      "pitchNo": 15,
      "brand": "Shrawani Engineers",
      "idea": "Belly Button Shaper",
      "city": "Nagpur",
      "ask": "₹10 lakhs for 20% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": ""
    }
  ]
},

{
  "_id": 6,
  "pitches": [
    {
      "pitchNo": 16,
      "brand": "Skippi Pops",
      "idea": "Ice-Pops",
      "city": "Hyderabad",
      "ask": "₹45 lakhs for 5% equity",
      "deal": "₹1 crore for 15% equity",
      "investment": ["Ashneer Grover","Aman Gupta","Namita Thapar","Anupam mittal","Vineeta singh"],
      "link": "https://skippi.in/"
    },
    {
      "pitchNo": 17,
      "brand": "Menstrupedia",
      "idea": "Menstrual Awareness Comic",
      "city": "Ahmedabad",
      "ask": "₹50 lakhs for 10% equity",
      "deal": "₹50 lakhs for 20% equity",
      "investment": ["Namita Thapar"],
      "link": "https://www.menstrupedia.com/"
    },
    {
      "pitchNo": 18,
      "brand": "Hecolll",
      "idea": "Pollution Resistant Fabric",
      "city": "Hyderabad",
      "ask": "₹1 crore for 1% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://startuphyderabad.com/hecoll-maskup/#google_vignette"
    }
  ]
},

{
  "_id": 7,
  "pitches": [
    {
      "pitchNo": 19,
      "brand": "Raising Superstars",
      "idea": "Child Development App",
      "city": "Mumbai",
      "ask": "₹1 crore for 2% equity",
      "deal": "₹1 crore for 4% equity",
      "investment": ["Ashneer Grover","Aman Gupta"],
      "link": "https://www.raisingsuperstars.com/"
    },
    {
      "pitchNo": 20,
      "brand": "Torchit",
      "idea": "Products for visually impaired people",
      "city": "Ahmedabad",
      "ask": "₹75 lakhs for 1% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://mytorchit.com/product-landing-page/"
    },
    {
      "pitchNo": 21,
      "brand": "La Kheer Deli",
      "idea": "Kheer in variety of flavors",
      "city": "Pune",
      "ask": "₹50 lakhs for 7.5% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "http://ww1.lakheerdeli.com/lander"
    }
  ]
},

{
  "_id": 8,
  "pitches": [
    {
      "pitchNo": 22,
      "brand": "Beyond Snack",
      "idea": "Kerala Banana Chips",
      "city": "Mavelikara",
      "ask": "₹50 lakhs for 2.5% equity",
      "deal": "₹50 lakhs for 2.5% equity",
      "investment": ["Ashneer Grover","Aman Gupta"],
      "link": "https://www.beyondsnack.in/"
    },
    {
      "pitchNo": 23,
      "brand": "Vivalyf Innovations- Easy Life",
      "idea": "Prickless Diabetes Testing Machine",
      "city": "Hyderabad",
      "ask": "₹56 lakhs for 7.5% equity",
      "deal": "₹56 lakhs for 33.33% equity",
      "investment": ["Anupam Mittal","Peyush Bansal"],
      "link": "https://rich.telangana.gov.in/Vivalyf-Innovations.html"
    },
    {
      "pitchNo": 24,
      "brand": "Motion Breeze",
      "idea": "Smart Electric Motorcycle",
      "city": "Vadodara",
      "ask": "₹30 lakhs for 3% equity",
      "deal": "₹30 lakhs for 6% equity",
      "investment": ["Ashneer Grover"],
      "link": "https://www.motionautomotive.in/"
    }
  ]
},

{
  "_id": 9,
  "pitches": [
    {
      "pitchNo": 25,
      "brand": "Altor",
      "idea": "Smart Helmets",
      "city": "",
      "ask": "₹50 lakhs for 5% equity",
      "deal": "₹50 lakhs for 7% equity",
      "investment": ["Namita Thapar","Aman gupta"],
      "link": "https://altor.com/"
    },
    {
      "pitchNo": 26,
      "brand": "Ariro",
      "idea": "Wooden Toys",
      "city": "",
      "ask": "₹50 lakhs for 2.5% equity",
      "deal": "₹50 lakhs for 10% equity",
      "investment": ["Aman Gupta","Peyush Bansal"],
      "link": "https://arirotoys.com/"
    },
    {
      "pitchNo": 27,
      "brand": "Kabira Handmade",
      "idea": "Healthy Oils	",
      "city": "",
      "ask": "₹1 crore for 5% equity",
      "deal": "No Deal",
      "investment": [""],
      "link": "https://www.kabirafoods.com/"
    }
  ]
},

{
  "_id": 10,
  "pitches": [
    {
      "pitchNo": 28,
      "brand": "Nuutjob",
      "idea": "Male Intimate Hygiene",
      "city": "",
      "ask": "₹25 lakhs for 5% equity",
      "deal": "₹25 lakhs for 20% equity",
      "investment": ["Namita thapar","Aman gupta","Peyush Bansal"],
      "link": "https://www.nuutjob.com/"
    },
    {
      "pitchNo": 29,
      "brand": "Meatyour",
      "idea": "Eggs",
      "city": "",
      "ask": "₹30 lakhs for 5% equity",
      "deal": "₹30 lakhs for 20% equity",
      "investment": ["Anupam Mittal","Aman Gupta","Peyush Bansal"],
      "link": "www.meatyour.com"
    },
    {
      "pitchNo": 30,
      "brand": "EventBeep",
      "idea": "Student Community App",
      "city": "",
      "ask": "₹30 lakhs for 2% equity",
      "deal": "₹30 lakhs for 3% equity",
      "investment": ["Ashneer Grover","Aman Gupta","Peyush Bansal"],
      link: "https://www.eventbeep.com/"
    }
  ]
}
]

Season1.insertMany(alldata)
