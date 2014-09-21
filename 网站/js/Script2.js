function _show()
	  {
	       document.all.mima.style.display="block";
	  }
function show1(id)
	  {    
		 var val=document.getElementById('name').value;
		if(val=="")  
		    document.getElementById(id).style.display="block";	
		else
		     document.getElementById(id).style.display="none";	
	  }       
function show2(id)
	  {   
		  var val=document.getElementById('pass').value;
		  if(val=="")
	         document.getElementById(id).style.display="block";
		  else
		     document.getElementById(id).style.display="none";	
	  }
//注册显示隐藏

function subtraction()
	   {
		 var value= document.all.TextBox1.value; 
		  if(value!=0)
	       document.all.TextBox1.value--; 
           }
	   
function add()
	   {
	       document.all.TextBox1.value++; 
	   }
  //数量增加

 function show3(id)
	  {
	     
		  if(id=="conten1")
		   {
			 document.getElementById(id).style.display="block";
             document.all.conten2.style.display="none";
			 document.all.conten3.style.display="none";
			 document.all.conten4.style.display="none";
	       }
		   if(id=="conten2")
		   {
			 document.getElementById(id).style.display="block";
             document.all.conten1.style.display="none";
			 document.all.conten3.style.display="none";
			 document.all.conten4.style.display="none";
	       }
		   if(id=="conten3")
		   {
			 document.getElementById(id).style.display="block";
             document.all.conten1.style.display="none";
			 document.all.conten2.style.display="none";
			 document.all.conten4.style.display="none";
	       }
		   if(id=="conten4")
		   {
			 document.getElementById(id).style.display="block";
             document.all.conten1.style.display="none";
			 document.all.conten2.style.display="none";
			 document.all.conten3.style.display="none";
	       }
	  
	  }
//页面切换



 function show4(id) {
			document.getElementById(id).style.display = "block";
            
			if (id == "s1") {
                
                document.all.show_comments.style.display = "none";
            }

            if (id == "show_comments") {
                
                document.all.s1.style.display = "none";
                
            }

        }
	