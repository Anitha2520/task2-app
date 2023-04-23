import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';



function App() {

  //storing data
  const data = [
    {
      name:"Fancy Product",
      price:"$40.00 - $80.00",
      disprice:'',
      star_status:0,
      sale_status:0,
      cart_status:0    
    },
    {
      name:"Special Item",
      price:"$18.00",
      disprice:"$20.00",
      star_status:1,
      sale_status:1,
      cart_status:1
    },
    {
      name:"Sale Item",
      price:"$25.00",
      disprice:"$50.00",
      star_status:0,
      sale_status:1,
      cart_status:1
    },
    {
      name:"Popular Item",
      price:"$40.00",
      star_status:1,
      sale_status:0,
      cart_status:1
    },
    {
      name:"Sale Item",
      price:"$25.00",
      disprice:"$50.00",
      star_status:0,
      sale_status:1,
      cart_status:1
    },
    {
      name:"Fancy Product",
      price:"$120.00 - $280.00",
      disprice:"",
      star_status:0,
      sale_status:0,
      cart_status:0
    },
    {
      name:"Special Item",
      price:"$18.00",
      disprice:"$20.00",
      star_status:1,
      sale_status:1,
      cart_status:1
    },
    {
      name:"Popular Item",
      price:"$40.00",
      disprice:"",
      star_status:1,
      sale_status:0,
      cart_status:1
    }
  ];
  
  //initializing the const
  const [showBasic, setShowBasic] = useState(false);
  const [count,setCount] = useState(0);
  return (
    
    <div className="App">
       <header>
        <div className='p-5 text-center bg-image' style={{ backgroundColor: "#212529", height: '350px',width:"100%" }}>
            <div className='mask'>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                  <h1 className='mb-3 fw-bolder bigfont'>Shop in style</h1>
                  <h4 className='mb-3 smallfont'>With this shop hompeage template</h4>              
                </div>
              </div>
            </div>
          </div> 
         </header> 
   
      <MDBContainer breakpoint="lg p-5">
      <MDBNavbar fixed='top' expand='lg' light bgColor='light'>
      <MDBContainer fluid style={{paddingLeft:"140px",paddingBottom:"0px"}}>
        <MDBNavbarBrand href='#'>Start Bootstrap</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}>

          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Shop
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>All Products</MDBDropdownItem>
                  <MDBDropdownItem link>Popular Items</MDBDropdownItem>
                  <MDBDropdownItem link>New Arrivals</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>   

            <MDBNavbarItem className="px-2 newpad " style={{marginLeft:"60%"}} >            
              <button className="btn btn-outline-dark" style={{height:'43px',borderRadius:'10px'}}  type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  <MDBIcon fas icon='shopping-cart' className="p-2" /> 
                    Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
              </button>           
            </MDBNavbarItem>  

          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <MDBRow className='row-cols-1 row-cols-md-4 g-4 p-3'>
    {/* traversing or maping the datas */}
    {data.map((product, index) => (
        <Product
          key={index}
          prod={product} 
          count={count}
          setCount={setCount}
        />
      ))}
      </MDBRow>   
      </MDBContainer>
    </div> 
  );
}

export default App;

// create a Product component
function Product({prod,count,setCount}) { 
  const [shownew,setShow] = useState(true);
  //function adding cart items
  function addtoCart(){
    setCount(count+1);
    setShow(!shownew)
  }
  
  //function remove cart items
  function removefromcart(){
    setCount(count-1);
    setShow(!shownew);
  }
  //display the items
  return (
            
      <MDBCol>
        <MDBCard className='h-100 mb-3'>
        <MDBCardHeader className='greyfont' style={{ backgroundColor: "#DEE1E6",height:'200px' }} >450x300</MDBCardHeader>
          <MDBCardBody >
          {prod.sale_status ? <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:''}
          
            <MDBCardTitle className="fw-bolder">{prod.name}</MDBCardTitle>
            {/* react bootstrap star rating is pro version so used direct image for star rating */}
            {prod.star_status ? <MDBCardImage
            src="download.png"
            alt='...'
            width='40%'          
          />:<p style={{height:'10%'}}>&nbsp;</p>}       
            
            <MDBCardText>{prod.sale_status ?
          <span className="text-decoration-line-through p-2" style={{color:"#6C757D"}}>
            {prod.disprice}
            </span>  
            :''}
            {prod.price}
            </MDBCardText>
            {shownew ?
            <MDBBtn color='dark' onClick={addtoCart}>Add to cart</MDBBtn>            
            :
            <MDBBtn outline className='mx-2' color='dark' onClick={removefromcart}>Remove cart</MDBBtn>            
            }
          </MDBCardBody>
        </MDBCard>
      </MDBCol>      
  );
}

