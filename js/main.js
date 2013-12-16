

var mw=1040,m=40,tg=12,r_margin,string="";
         var result=new Array(); 
         
         function calculate()
         {  
            if(document.getElementById("responsiveradio").checked==true){
            r_margin=Math.round(((m/mw)*100)*100000000000)/100000000000;
            string="";
            string+=".row { &#13;&#10;    clear:both; &#13;&#10;    max-width:"+mw+"px; &#13;&#10;    margin:0 auto; &#13;&#10;}&#13;&#13;&#10;[class^=&#34;col-&#34;] {&#13;&#10;    float: left;&#13;&#10;    margin: 0 "+r_margin+"% 0 0;&#13;&#10;    list-style: none;&#13;&#10;    position: relative;&#13;&#10;}&#13;&#13;&#10;[class^=&#34;col-&#34;]:last-child {&#13;&#10;    margin: 0;&#13;&#10;}&#13;&#13;&#10;"
            


            }
            else{
              r_margin=m;
              string="";
            string+=".row { &#13;&#10;    clear:both; &#13;&#10;    width:"+mw+"px; &#13;&#10;    margin:0 auto; &#13;&#10;}&#13;&#13;&#10;[class^=&#34;col-&#34;] {&#13;&#10;    float: left;&#13;&#10;    margin: 0 "+r_margin+"px 0 0;&#13;&#10;    list-style: none;&#13;&#10;    position: relative;&#13;&#10;}&#13;&#13;&#10;[class^=&#34;col-&#34;]:last-child {&#13;&#10;    margin: 0;&#13;&#10;}&#13;&#13;&#10;"

            }
            
            

            if(document.getElementById("responsiveradio").checked==true){
            for(var i=1;i<=tg;i++)
            {
              result[i-1]=Math.round(([(i/tg)-((m/mw)*(1-(i/tg)))]*100)*10000000000)/10000000000;

              if(i==tg){string+=".col-"+i+" { width: "+result[i-1]+"%; margin: 0 }&#13;&#10;";}
                else{string+=".col-"+i+" { width: "+result[i-1]+"% }&#13;&#10;";}
         
            } }
            else
            {
              for(var i=1;i<=tg;i++)
            {
              result[i-1]=[(i/tg)-((m/mw)*(1-(i/tg)))]*mw;

              if(i==tg){string+=".col-"+i+" { width: "+result[i-1]+"px; margin: 0 }&#13;&#10;";}
                else{string+=".col-"+i+" { width: "+result[i-1]+"px }&#13;&#10;";}
         
            }

            }        
          
         }



         


         function reload()
         {
            mw=document.getElementById("mw").value;
            tg=document.getElementById("tg").value;
            m=document.getElementById("m").value;
            calculate();
            document.getElementById("output").innerHTML=string;
         }


       window.onload=function(){          
        document.getElementById("mw").value=1040;
        document.getElementById("m").value=40;
        document.getElementById("tg").value=12;
        reload();}