// import React,{useState} from "react";
import React from "react";


export default function About(props) {

    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    //ye isliye comnt kr rhe bcz nav bar se krenge ye sb
    // const [myStyle ,setMyStyle] = useState({
    //         color : "black",
    //         backgroundColor : "white"
    //     }
    // )

    // const [btnText ,setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color : "white",
    //             backgroundColor : "black",
    //             border: "1px solid white"
    //         }) 
    //         setBtnText("Enable Light Mode"); 
    //     } else {
    //         setMyStyle({
    //             color : "black",
    //             backgroundColor : "white"
    //         })
    //         setBtnText("Enable Dark Mode"); 

    //     }
    // }

    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
  }

  return (
    <div className="Container" >
    

      <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            {/* <button className="accordion-button"type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Accordion Item #1</button> */}
            <button className="accordion-button"type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Analyze Your Text</strong></button>

          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
            

               It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button" 
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            

              It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button" style={myStyle}
              
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            

               It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}
