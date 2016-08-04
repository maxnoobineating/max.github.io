var x=0;
while(1){
	setTimeout( function(){
	    x==0?document.open('<p style="font-family: impact; color:orange">HEY!</p>'):document.open('<p style="font-family: impact; color:red">YOU!</p>');
        },5000);
	x!=x;
}