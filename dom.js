//console.dir(document);
//here in visual studio unless new object is created entire code comes under the document object.
///console.log(document.domain);
//console.log(document.title);
//document.title= "this is my first page";
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//this is not the ideal method for selecting the files in the file  
//document.all[10].textContent='HELLO';
//console.log(document.forms[0]);
//when you write [] aafter the heading then this means that you are selecting the 0th index element of the array.
// the above code is used to get all the properties of the forms that are written in the document, this is similar to the links but instead of
//of forms add links. below is the example for the page we created.
//console.log(document.links);
//here since the above methds are not optimal for obtaining the required or selecting elements for dom various methods are used
//1. GETELEMENTBYID() here the id is used to bring or select element for modification;

var header= document.getElementById("header-title");
//console.log(header);
//header.textContent='i am exicted to learn dom';
//header.innerText='i am trying my best';
//console.log(header.textContent);
//console.log(header.innerText);
//here the innertext function shows after the css styling for example here we gave display of span as none but when we use console.log 
//we will get entire text without any elements hidden
//but inner text will not show or display hidden elements  
//header.innerHTML='hello world!';
//console.log(header.innerHTML);
//header.style.borderBottom='solid 5px #000'
var HeaderTitle=document.getElementById("main-header");
HeaderTitle.style.borderBottom='solid 5px #000'

//here main header is complete header including css and h1 element
var items=document.getElementsByClassName('title');

items[0].style.color='green';
items[0].style.fontWeight='bold';
