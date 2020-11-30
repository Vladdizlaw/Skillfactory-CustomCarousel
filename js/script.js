const arrayPict=['1.jpg','2.jpg','3.jpg','4.jpg']
/*Картинки должны быть в папке asset, arrayPict- массив с названиями картинок*/
const targetDiv=document.getElementById('target')
const prevButton=document.getElementById('prevButton')
const nextButton=document.getElementById('nextButton')
const previewDiv=document.getElementById('previewdiv')
const countMax=Number(arrayPict.length)-1
let count=0

function fillPreview(arr,element,count){
	/*Функция заполняет div с ид previewDiv уменьшенной картинкой предыдущего и следующего элемента массива картинок*/
	let prevcount=count
	let nextcount=count
	if (count==0){
		 prevcount=countMax
		}else {prevcount--}
	if (count==countMax){
		 nextcount=0 	
	}else nextcount++
	let imageprev=document.createElement('img')
	imageprev.setAttribute('src',`./asset/${arr[prevcount]}`)
	imageprev.setAttribute('id','prevcurrent')
	imageprev.style=`width:8%;height:7%;`
	let oldImageprev = document.getElementById('prevcurrent')
	if (oldImageprev){
		oldImageprev.remove()
	}
	element.append(imageprev)
	let imagenext=document.createElement('img')
	imagenext.setAttribute('src',`./asset/${arr[nextcount]}`)
	imagenext.setAttribute('id','nextcurrent')
	imagenext.style=`width:8%;height:7%;`
	let oldImagenext = document.getElementById('nextcurrent')
	if (oldImagenext){
		oldImagenext.remove()
	}
	element.append(imagenext)
	}


function throwPicture(arr,element,count,width,height){
	/*Функция размещает картинку в основной области и убирает текущую */
	console.log(count)
	let image=document.createElement('img')
	image.setAttribute('src',`./asset/${arr[count]}`)
	image.setAttribute('id','current')
	image.style=`width:${width}%;height:${height}%;`
	let oldImage = document.getElementById('current')
	if (oldImage){	
	oldImage.remove()
	}
	
	element.append(image)
}
prevButton.addEventListener('click',function(){
	if (count==0){
		count=countMax
	}else{
		count--
	}

	throwPicture(arrayPict,targetDiv,count,100,100)
	fillPreview(arrayPict,previewDiv,count)
	})

nextButton.addEventListener('click',function(){
	if (count==countMax){
		count=0
	}else{
		count++
	}
	console.log(count)

	throwPicture(arrayPict,targetDiv,count,100,100)
	fillPreview(arrayPict,previewDiv,count)
})	

throwPicture(arrayPict,targetDiv,count,100,100)
fillPreview(arrayPict,previewDiv,count)
