let editImg=document.querySelector("#editImg"); 
let left_arrow = document.querySelector('#left')
let right_arrow = document.querySelector('#right')
let min_img = document.querySelectorAll('.minImg img');
let left_min = document.querySelector('#left_min');
let right_min = document.querySelector('#right_min');
let src_img = [];
let index=0;
let b=0;

for(let i =0; i<min_img.length; i++){
	src_img[i] = min_img[i].getAttribute('src');
	
	min_img[i].addEventListener('click',function(){
		editImg.setAttribute('src',src_img[i]);
		index = i;
	})
}

left_arrow.addEventListener('click',function(){
	index--;
	if(index<0){index=min_img.length-1;}
	editImg.setAttribute('src',src_img[index])
})
right_arrow.addEventListener('click',nextImg)
setInterval('nextImg()',1000);
function nextImg(){
	index++;
	if(index>=src_img.length){index=0;}
	editImg.setAttribute('src',src_img[index])
}

right_min.addEventListener('click',getNext)
left_min.addEventListener('click',prevNext)

	function getNext(){
		b-=150;
		offset.style.left=b+"px";
		if(b==-1050){b=0;}
	}
	function prevNext(){
		b+=150;
		offset.style.left=b+"px";
		if(b==0){b=-1050;}
	}
