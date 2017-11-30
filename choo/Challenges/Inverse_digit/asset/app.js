input=prompt('This page will inverse any 5 digit number.\n\nPlease insert 5 digit value');

if(input>99999||input<10000){
	alert('The input is not a 5 digit number!')
}
else{
	output=input%10*10000+(input%100-input%10)*100+(input%1000-input%100)+(input%10000-input%1000)/100+(input-input%10000)/10000;
	alert(output);
}