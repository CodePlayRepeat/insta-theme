alert('I got the idea of creation from an Instagram video\n\nTap on the Insta icon for help\nAnd make sure your internet connection is good 📶')
window.onload=function(){
    let a=document.getElementById('otln');
    let b=document.getElementById('inln');
    let c=document.getElementById('dot');
    let d=document.getElementById('cam');
    let e=document.getElementById('stng');

    let f=document.getElementById('icon');
    let g=document.getElementById('hrd');

    a.style.width=(window.innerWidth/5)+'px';
    a.style.height=(window.innerWidth/5)+'px';
    a.style.borderRadius=(window.innerWidth/15)+'px';

    b.style.width=(window.innerWidth/7)+'px';
    b.style.height=(window.innerWidth/7)+'px';
    b.style.marginTop=((window.innerWidth/20)/2)+'px';
    b.style.borderRadius=(window.innerWidth/23)+'px';

    c.style.marginTop=(window.innerWidth/70)+'px';
    c.style.marginRight=(window.innerWidth/70)+'px';
    c.style.borderWidth=(window.innerWidth/170)+'px';

    d.style.width=(window.innerWidth/15)+'px';
    d.style.height=(window.innerWidth/15)+'px';
    d.style.marginTop=(window.innerWidth/30)+'px';
    d.style.marginLeft=(window.innerWidth/28)+'px';
    d.style.borderRadius=(window.innerWidth)+'em';

    e.style.width=(window.innerWidth)+'px';
    e.style.paddingTop=((window.innerWidth/3)-50)+'px';


    f.style.width=(window.innerWidth)+'px';
    
    g.style.width=(window.innerWidth)+'px';

};
function pls(){
    let z=document.getElementById('grd').value;
    if(z.toLowerCase()=='solid'){
        document.getElementById('onc2').disabled=true;
        document.getElementById('onc3').disabled=true;
        document.getElementById('onc4').disabled=true;
        document.getElementById('deg').disabled=true;
        
        document.getElementById('onc').style.animationName='sd';
        document.getElementById('onc2').style.animationName='';
        document.getElementById('onc3').style.animationName='';
        document.getElementById('onc4').style.animationName='';
    }
    else if(z.toLowerCase()=='textured'){
        document.getElementById('onc2').disabled=false;
        document.getElementById('onc3').disabled=false;
        document.getElementById('onc4').disabled=false;
        document.getElementById('deg').disabled=false;
        
        document.getElementById('onc').style.animationName='sd';
        document.getElementById('onc2').style.animationName='sd';
        document.getElementById('onc3').style.animationName='sd';
        document.getElementById('onc4').style.animationName='sd';
    }else{
        document.getElementById('onc').style.animationName='';
        document.getElementById('onc2').style.animationName='';
        document.getElementById('onc3').style.animationName='';
        document.getElementById('onc4').style.animationName='';
    }
}
function chng(){
    let dew=document.getElementById('grd').value;
    if(dew.toLowerCase()=='solid'){
         let b=document.getElementById('onc').value;
         document.getElementById('otln').style.background=b;
    }
    else if(dew.toLowerCase()=='textured'){
        let b=document.getElementById('onc').value;
        let c=document.getElementById('onc2').value;
        let d=document.getElementById('onc3').value;
        let e=document.getElementById('onc4').value;
        let f=document.getElementById('deg').value;
        f.value=(f===null||f===undefined||isNaN(f))?0:f;
        document.getElementById('otln').style.background="linear-gradient("+f+"deg,"+b+","+c+","+d+","+e+")";
   }else{
       alert('Did u enter the design type and the degree?')
   }
}
var x;
var a=['linear-gradient(150deg,purple,deeppink,orange,yellow)','linear-gradient(180deg,rgb(9, 165, 4),rgb(38, 95, 16),rgb(5, 77, 2),rgb(0, 65, 4))',
       'linear-gradient(120deg,red,yellow,green,blue)','linear-gradient(260deg,rgb(255, 0, 119),rgb(255, 0, 34),rgb(140, 0, 255),rgb(45, 0, 128))',
       'linear-gradient(300deg,rgb(255, 8, 0),rgb(206, 55, 9),orange,yellow)','linear-gradient(170deg,deeppink,blue,red,yellow)',
       'linear-gradient(330deg,rgb(253, 88, 190),rgb(233, 18, 161),rgb(153, 13, 123),rgb(112, 10, 90))',
       'linear-gradient(60deg,blue,rgb(3, 3, 116),rgb(1, 1, 77),rgb(0, 0, 34))',
       'linear-gradient(230deg,rgb(0, 255, 242),rgb(1, 111, 145),rgb(0, 77, 128),rgb(0, 68, 255))'];
function p1(){
    x=0;
    document.getElementById('otln').style.background=a[x];
}
function p2(){
    x=1;
    document.getElementById('otln').style.background=a[x];
}
function p3(){
    x=2;
    document.getElementById('otln').style.background=a[x];
}
function p4(){
    x=3;
    document.getElementById('otln').style.background=a[x];
}
function p5(){
    x=4;
    document.getElementById('otln').style.background=a[x];
}
function p6(){
    x=5;
    document.getElementById('otln').style.background=a[x];
}
function p7(){
    x=6;
    document.getElementById('otln').style.background=a[x];
}
function p8(){
    x=7;
    document.getElementById('otln').style.background=a[x];
}
function p9(){
    x=8;
    document.getElementById('otln').style.background=a[x];
}
var y;
var b=['red','green','crimson','deeppink','orange','blue','rgb(255, 208, 0)','purple','violet'];
function q1(){
    y=0;
    document.getElementById('otln').style.background=b[y];
}
function q2(){
    y=1;
    document.getElementById('otln').style.background=b[y];
}
function q3(){
    y=2;
    document.getElementById('otln').style.background=b[y];
}
function q4(){
    y=3;
    document.getElementById('otln').style.background=b[y];
}
function q5(){
    y=4;
    document.getElementById('otln').style.background=b[y];
}
function q6(){
    y=5;
    document.getElementById('otln').style.background=b[y];
}
function q7(){
    y=6;
    document.getElementById('otln').style.background=b[y];
}
function q8(){
    y=7;
    document.getElementById('otln').style.background=b[y];
}
function q9(){
    y=8;
    document.getElementById('otln').style.background=b[y];
}
function rest(){
    document.getElementById('otln').style.background=a[0];
}