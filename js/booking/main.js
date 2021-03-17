// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCz-UUvJQjbR1IwkL9R_V1_aoRbhhktoBM",
  authDomain: "uber-c32ae.firebaseapp.com",
  databaseURL: "https://uber-c32ae.firebaseio.com",
  projectId: "uber-c32ae",
  storageBucket: "uber-c32ae.appspot.com",
  messagingSenderId: "668557580726",
  appId: "1:668557580726:web:60576a51a2d07af284c917"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref(' bookings');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

 // Get values
 var name = getInputVal('name');
 var company = getInputVal('company_name');
 var mobile = getInputVal('mobile_no');
 var pickup = getInputVal('pickup_search_term');
 var drop = getInputVal('dropoff_search_term') ;
 var pickupDate = getInputVal('pickup_date');
 var truck_type = document.getElementsByName("cars");
   if(truck_type[0].checked)
     {
        var val = truck_type[0].value;
     }
                   
   else if(truck_type[1].checked)
      {
        var val = truck_type[1].value;
      }

      if(val== "open") 
      {

      
                   

var truck_capacity = document.getElementsByName("creditcard");
   if(truck_capacity[0].checked)
     {
        var capacity = truck_capacity[0].value;
     }
                   
   else if(truck_capacity[1].checked)
      {
        var capacity = truck_capacity[1].value;
      }
                   
    else if(truck_capacity[2].checked)
       {
         var capacity = truck_capacity[2].value;
       }

       else if(truck_capacity[3].checked)
      {
        var capacity = truck_capacity[3].value;
      }

      else if(truck_capacity[4].checked)
      {
        var capacity = truck_capacity[4].value;
      }

      else if(truck_capacity[5].checked)
      {
        var capacity = truck_capacity[5].value;
      }

      else if(truck_capacity[6].checked)
      {
        var capacity = truck_capacity[6].value;
      }

      else if(truck_capacity[7].checked)
      {
        var capacity = truck_capacity[7].value;
      }

      else if(truck_capacity[8].checked)
      {
        var capacity = truck_capacity[8].value;
      }

      else if(truck_capacity[9].checked)
      {
        var capacity = truck_capacity[9].value;
      }

      else if(truck_capacity[10].checked)
      {
        var capacity = truck_capacity[10].value;
      }

      else if(truck_capacity[11].checked)
      {
        var capacity = truck_capacity[11].value;
      }

      else if(truck_capacity[12].checked)
      {
        var capacity = truck_capacity[12].value;
      }

    }
    else{

    


      var truck_capacity_container = document.getElementsByName("containertruck");
      if(truck_capacity_container[0].checked)
        {
           var capacityContainer = truck_capacity_container[0].value;
        }
                      
      else if(truck_capacity_container[1].checked)
         {
           var capacityContainer = truck_capacity_container[1].value;
         }
  
         else if(truck_capacity_container[2].checked)
         {
           var capacityContainer = truck_capacity_container[2].value;
         }
  
         else if(truck_capacity_container[3].checked)
         {
           var capacityContainer = truck_capacity_container[3].value;
         }
  
         else if(truck_capacity_container[4].checked)
         {
           var capacityContainer = truck_capacity_container[4].value;
         }
  
         else if(truck_capacity_container[5].checked)
         {
           var capacityContainer = truck_capacity_container[5].value;
         }
  
         else if(truck_capacity_container[6].checked)
         {
           var capacityContainer = truck_capacity_container[6].value;
         }

        }

         console.log(name, company, mobile,pickup,drop,pickupDate,val,capacity,capacityContainer);

 // Save message
 saveMessage(name, company, mobile,pickup,drop,pickupDate,val,capacity,capacityContainer);

 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
 return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, mobile,pickup,drop,pickupDate,val,capacity,capacityContainer){
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
   name: name,
   company:company,
   mobile:mobile,
   pickup:pickup,
   drop:drop,
   pickupDate:pickupDate,
   truck_type:val,
   truck_capacity:capacity,
   truck_capacity_container:capacityContainer,
 });
}


