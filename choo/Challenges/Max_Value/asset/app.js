input1=prompt('This page will determine maximum value out of 3 input value... \n\nPlease insert first value');
input2=prompt('This page will determine maximum value out of 3 input value... \n\nPlease insert second value');
input3=prompt('This page will determine maximum value out of 3 input value... \n\nPlease insert third value');

max=input1;

if(input2>max){
	max=input2;
}

if(input3>max){
	max=input3;
}
alert('The maximum value is '+ max);