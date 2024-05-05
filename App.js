import React from "react";
import './App.css'
import { CInput ,Button ,Cards, } from "./components";
import { CardImage1,phone,phone1,faceboksec,email, CardImage2,CardImage3, CardImage4, downarrow, images, searchicon, sell, arrow , long,short,first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleven,twelve,thirteen,fourteen,rightarrow, same, pixel, ultra, a24, moto, heart, city, fortuner, Corolla, lifan, honda, suzuki, cg,house1,house2,house3,house4, lcd1, lcd2, lcd3, lcd4,tablets1,tablets2,tablets3,tablets4, jobs1, jobs2, jobs3, jobs4,foot,dual,store,gallery,google, twitter, facebok, play, insta,googlesec} from "./components/Assets";
import Modal from 'react-modal';
import Input from "./components/input";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '250px',
      bottom: '-230px',
      transform: 'translate(-50%, -50%)',
    outerHeight:"100%"
    },
  };

function App (){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
   
    return(
        <div>
         <div className="fixed">
        <img className="logo" src={CardImage1} />
        <img className="logo1" src={CardImage2} />
        <img className="logo1" src={CardImage3} />
        <div className="header">
        <img className="logo4" src={CardImage4} />
        <CInput image={searchicon} placeholder="Pakistan" img={downarrow} />
        <div className="maindiv">
            <CInput   placeholder='  Finds Cars, Mobiles Phones and more..'  />
        </div>
        <img className="search" src={images}/>
        {/* <a className="ancor" href="#" >Login</a> */}
        <button className="modal" onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="welcome" ref={(_subtitle) => (subtitle = _subtitle)}>OLX</h1>
        <h2 className="centre">Welcome to OLX</h2>
        <p className="paragraph">The trusted community of buyer
        </p>
        <p className="second">and sellers</p>
        <div className="inputmodal">
        <Input className="inpiy"
        image={googlesec}
        placeholder="Continue with google"
        />
        <Input className="walla"
        image={faceboksec}
        placeholder="Continue with facebok"
        />
        
        <Input className="wallla"
        image={email}
        placeholder="Continue with email"
        />
        <Input className="wallllla"
        image={phone1}
        placeholder="Continue with phone"
        />
        </div>
        {/* <button onClick={closeModal}>close</button> */}
        {/* <div>I am a modal</div> */}
        <form>
          {/* <input /> */}
          {/* <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button> */}
        </form>
      </Modal>
        <img  className="abc" src={sell}/>
        </div>
        </div>
        <div className="mainarr">
            <h4 className="cate">All categories</h4>
            <img className="arr" src={arrow}/>
            <p className="para">Mobile Phones</p>
            <p className="para">Cars</p>
            <p className="para">Motorcycles</p>
            <p className="para">Houses</p>
            <p className="para">Tv-Video-Audio</p>
            <p className="para">Tablets</p>
            <p className="para"></p>
        </div>
        <img className="xyz" src={long}/>
        <div className="shortdiv">
            <img className="dfg" src={short}/>
        </div>
        <h2 className="all">All Categories</h2>
        <div className="mainpicture">
        <div className="mainimg">
            <img src={first}/>
            <p className="firstpic">Mobile</p>
        </div>
        <div className="secondpic">
            <img className="img" src={second}/>
            <p className="word">Vehicles</p>
        </div>
        <div>
            <img className="thirdpic" src={third}/>
            <p className="wording">Propery For<br className="secondword"/>Sale</p>
        </div>
        <div>
            <img className="fourthpic" src={fourth}/>
            <p className="fourthword">Property For<br/>Rent</p>
        </div>
        <div>
            <img className="fifthpic" src={fifth}/>
            <p className="fifthword">Electronics &<br/>Home<br/>Appliances</p>
        </div>
        <div>
            <img className="sixthpic" src={sixth}/>
            <p className="sixthword">Bikes</p>
        </div>
        <div>
            <img className="seventhpic" src={seventh}/>
            <p className="seventhword">Business<br/>Industrial &<br/>Agriculture</p>
        </div>
        <div>
            <img className="eighthpic" src={eighth}/>
            <p className="eighthword">Services</p>
        </div>
        <div>
            <img className="ninthpic" src={ninth}/>
            <p className="ninthword">Jobs</p>
        </div>
        </div>
        <div className="secondmaindiv">
         <div>
            <img className="tenthpic" src={tenth}/>
            <p className="tenthword">Animals</p>
         </div>
         <div>
            <img className="elevenpic" src={eleven}/>
            <p className="elevenword">Furniture & <br/> Home Decor</p>
         </div>
         <div>
            <img className="twelvepic" src={twelve}/>
            <p className="twelveword">Fashion & <br/> Beauty</p>
         </div>
         <div>
            <img className="thirteenpic" src={thirteen}/>
            <p className="thirteenword">Books,Sports <br/> & Hobbies</p>
         </div>
         <div>
            <img className="fourteenpic" src={fourteen}/>
            <p className="fourteenword">Kids</p>
         </div>
        </div>
        <div className="head">
        <h2 className="h2">More In Hobbies</h2>
        <div className="maindiver">
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        
        
        <Button />
        <div className="cards">
        <Cards src={same} prize="Rs 1,00000" srcs={heart} cap="Samsung S23 Ultra Non Pta" cap1="Education City,Jamshoro" cap2="2 Weeks ago"/>
        <Cards src={pixel} prize=" Rs 55,000" srcs={heart}cap="Google pixel pta approved" cap1="North karachi,karachi" cap2="5 Days ago" />
        <Cards src={a24} prize="Rs 40,000" srcs={heart}cap="Samsung A24 Pta approves" cap1="Other, Manshera" cap2=" 10 Days ago"/>
        <Cards src={moto} prize="Rs 30,000" srcs={heart}cap="Motrolla 4 64 pta approves" cap1="Township Lahore" cap2="15 Days ago"/>
        </div >
        <div className="view">
        <h1>Cars</h1>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
        <Cards src={city} prize="Rs 45,00000" srcs={heart} cap="Honda City 2023 Model" cap1="Mughlapura,Lahore" cap2="2 Days ago"/>
        <Cards src={fortuner} prize=" Rs 1,0000000" srcs={heart}cap="Toyota Fortuner 2020 Model" cap1="Gurumandir,Karachi" cap2="1 Month ago" />
        <Cards src={city} prize="Rs 50,00000" srcs={heart}cap="Honda City 2021 Model" cap1="Johar town, Lahore" cap2=" 4 Days ago"/>
        <Cards src={Corolla} prize="Rs 30,000" srcs={heart}cap="Corolla XLI 2018 Model" cap1="Garden East Karachi" cap2="9 Days ago"/>
        </div>
        <div className="view">
        <h2>Bikes & Motorcycles</h2>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
            <Cards src={lifan} prize="Rs 8,00000" srcs={heart} cap="Lifan new 2023 Model" cap1="Lahore,Pakistan" cap2="5 Days ago"/>
            <Cards src={honda} prize=" Rs 9,00000" srcs={heart}cap="Crown model 2018" cap1="Gujrat,Pakistan" cap2="1 weel ago" />
            <Cards src={suzuki} prize="Rs 4,00000" srcs={heart}cap="Suzuki 110 2015 Model" cap1="Islamabad Pakistan" cap2="6 Days ago"/>
            <Cards src={cg} prize="Rs 2,00000" srcs={heart}cap="Honda Cg 125 2018 Model" cap1="Gulshan-e-Iqbal Karachi" cap2="9 Days ago"/>
            </div>
            <div className="view">
        <h2>Houses</h2>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
            <Cards src={house1} prize="Rs 85,00000" srcs={heart} cap="3 Marla house sale in New Karachi" cap1="Karachi,Pakistan" house="120 sqt ft" cap2="10 Days ago"/>
            <Cards src={house2} prize=" Rs 1,0000000" srcs={heart}cap="2 Marla flats in Gujrat" cap1="Gujrat,Pakistan" house="200 sqt ft" cap2="2 week ago" />
            <Cards src={house3} prize="Rs 90,00000" srcs={heart}cap="Suzuki 110 2015 Model" cap1="Islamabad Pakistan" house="300 sqt ft" cap2="6 Days ago"/>
            <Cards src={house4} prize="Rs 2,0000000" srcs={heart}cap="Honda Cg 125 2018 Model" cap1="Gulshan-e-Iqbal Karachi" house="240 sqt ft" cap2="9 Days ago"/>
            </div>
            <div className="view">
        <h2>Tv-Video-Audio</h2>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
            <Cards src={lcd1} prize="Rs 1,49000" srcs={heart} cap="Big Offer 65' inch samrt Led" cap1="F-7 Markaz Islamabad" cap2="2 Days ago"/>
            <Cards src={lcd2} prize=" Rs 80,000" srcs={heart}cap="55 ich Smart UHD led Tv" cap1="Dha phase 6 Lahore" cap2="2 week ago" />
            <Cards src={lcd3} prize="Rs 50,000" srcs={heart}cap="Hot Sale offer 75 ich led tv smart" cap1="Gulistan e johr karachi" cap2="3 Days ago"/>
            <Cards src={lcd4} prize="Rs 95,000" srcs={heart}cap="Android smart Led Tv " cap1="North Nazimabad Karachi" cap2="9 Days ago"/>
            </div>
            <div className="view">
        <h2>Tv-Video-Audio</h2>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
            <Cards src={tablets1} prize="Rs 8,999" srcs={heart} cap="Tabs best stock for kids and others" cap1="DHA Phase4 Islamabad" cap2="1 Days ago"/>
            <Cards src={tablets2} prize=" Rs 15,000" srcs={heart}cap="Tab used for Office Work" cap1="Allama Iqbal Town,Lahore" cap2="2 week ago" />
            <Cards src={tablets3} prize="Rs 75,000" srcs={heart}cap="Ipad mini 256gb cellular" cap1="Clifton karachi" cap2="5 Days ago"/>
            <Cards src={tablets4} prize="Rs 30,000" srcs={heart}cap="Samsung Galaxy Tab A 8.0 " cap1="Blue Area Islamabad" cap2="3 weeks ago"/>
            </div>
            <div className="view">
        <h2>Jobs</h2>
        <div className="arr"> 
        <h3 className="h2">View more</h3>
        <img className="arrow" src={rightarrow}/>
        </div>
        </div>
        <div className="cards1">
            
            <Cards src={jobs1} srcs={heart} cap="Part time/ Full time jobs for student" cap1="Galla Mandi,Rawalpindi" cap2="5 Days ago"/>
            <Cards src={jobs2}  srcs={heart}cap="Jobs Full time/ Permit Male/Female" cap1="Jamshed Town, karachi" cap2="2 Days ago" />
            <Cards src={jobs3}  srcs={heart}cap="Best Typing Work from Home" cap1="G-8 Islamabad" cap2="5 Days ago"/>
            <Cards src={jobs4} p srcs={heart}cap="Part time/ Full time form based job " cap1="Galaxay Town Multan" cap2="3 weeks ago"/>
            </div>
            <img className="foot" src={foot}/>
            <div className="main12">
                <img className="dual" src={dual}/>
                
                <div className="graph">
                <h1 className="h12">TRY THE OLX APP</h1>
                <p className="mini">Buy, sell and find just about anything<br/> using the app on your mobile.</p>
                </div>
                <div className="border1">
               <p className="get">Get Your App Today</p>
               <img className="store" src={store}/>
               <img className="store" src={google}/>
               <img className="store" src={gallery}/>
                </div>
            </div>
            <div className="c">
            <div className="footer">
                <h4>POPULAR CATEGORIES</h4>
                <p className="font">Cars</p>
                <p className="font">Flats for rent</p>
               <p className="font">Mobile Phones</p> 
                <p className="font">Jobs</p>
                </div>
                <div>
                <h4>TRENDING SEARCHES</h4>
                <p className="font">Bikes</p>
                <p className="font">Watches</p>
               <p className="font">Books</p> 
                <p className="font">Dogs</p>
                </div>
                <div>
                <h4>ABOUT US</h4>
                <p className="font">About Dubizzle Group</p>
                <p className="font">Olx Blog</p>
               <p className="font">Contact Us</p> 
                <p className="font">Olx for Business</p>
                </div>
                <div>
                <h4>OLX</h4>
                <p className="font">Help</p>
                <p className="font">Sitemap</p>
               <p className="font">Term of use</p> 
                <p className="font">Privacy Policy</p>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <img className="short" src={twitter}/>
                    <img className="short" src={facebok}/>
                    <img className="short" src={play}/>
                    <img className="short" src={insta}/>
                    <div>
                    <img className="logoss" src={store}/>
                    <img className="logoss" src={google}/>
                    <img className="logoss" src={gallery}/>
                    </div>
                </div>
                </div >
                <div className="cccc">
                  <p className="color">Free Classified in Pakistan  . c 2006-2003 OLX</p>
               </div>
                </div>
           
             
     
    )
} 
export default App;