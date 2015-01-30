//grobal variable
	var g_x = 600;
	var g_y = 200;
	var i=100;
	var j=10;
	var f=1;
	var bor = 90;
	var bw = 100;
	var count=0;



function button_1(){
	canvas = document.getElementById('myCanvas1');
	if (canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.beginPath();
	x_pos = 70;		y_pos = 70;		radius = 25;
	startAngle = 0;		endAngle = Math.PI*2;
	anticlockwise = true;
	ctx1.arc(x_pos,y_pos,radius,startAngle,endAngle,anticlockwise);
	ctx1.fillStyle = "red";
	ctx1.fill();
}


function spring(){
	canvas = document.getElementById('myCanvas');
	if (canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.clearRect(0,0,g_x,g_y);
	ctx1.fillStyle = "rgb(255,0,0)";
	
	if(f == 0)	count++;
	count++;
	
	if(f){
	//expansion
		i = bw - (bw-bor)/30 * count;
	}else{
	//contraction
		i = (bw-(bw-bor)) + (bw-bor)/30 * count;
	}
	
	if(count == 30){
		if(f == 1){
			f=0;
		}else if(f == 0){
			f=1;
		}
		count = 0;
	}
	
	ctx1.fillRect(20, 20, i, j);
	console.log("count:"+count+"  f:"+f+"  i:"+i);
}

//*************************************************//

function test_gradient(){
	canvas = document.getElementById('myCanvas');
	if(canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.clearRect(0,0,g_x,g_y);

	// level3  --------------------
	var gradient = ctx1.createLinearGradient(10,10,20,20);
	/*
	gradient.addColorStop(0, "#777777");
	gradient.addColorStop(0.1, "#888888");
	gradient.addColorStop(0.2, "#999999");
	gradient.addColorStop(0.3, "#AAAAAA");
	gradient.addColorStop(0.4, "#BBBBBB");
	gradient.addColorStop(0.5, "#CCCCCC");
	gradient.addColorStop(0.6, "#BBBBBB");
	gradient.addColorStop(0.7, "#AAAAAA");
	gradient.addColorStop(0.8, "#999999");
	gradient.addColorStop(0.9, "#888888");
	gradient.addColorStop(1, "#777777");
	*/　
	var l1x_s = 10;
	var l1y_s = 10;
	var l1w = 10;
	ctx1.fillStyle = "#444444";
	ctx1.fillRect(l1x_s,l1y_s,l1w,l1w);
	gradient.addColorStop(0, "#CCCCCC");
	gradient.addColorStop(0.1, "#BBBBBB");
	gradient.addColorStop(0.2, "#AAAAAA");
	gradient.addColorStop(0.3, "#999999");
	gradient.addColorStop(0.4, "#888888");
	gradient.addColorStop(0.5, "#777777");
	gradient.addColorStop(0.6, "#888888");
	gradient.addColorStop(0.7, "#999999");
	gradient.addColorStop(0.8, "#AAAAAA");
	gradient.addColorStop(0.9, "#BBBBBB");
	gradient.addColorStop(1, "#CCCCCC");
	ctx1.fillStyle = gradient;
	ctx1.fillRect(l1x_s+1,l1y_s+1,l1w-2,l1w-2);
	//ctx1.fillStyle = "#000000";
	//ctx1.strokeRect(l1x_s,l1y_s,l1w,l1w);
	
	//Level2  --------------------
	var l2x_s = 30;
	var l2y_s = 10;
	var l2w = 10;
	ctx1.fillStyle = "#A0522D";
	ctx1.fillRect(l2x_s,l2y_s,l2w,l2w);

	//line style
	ctx1.fillStyle = "#000000";
	ctx1.lineWidth = l2w/10;		var i,j;
	// yoko line
	for(i=0;i<2;i++){
		ctx1.beginPath();
		ctx1.moveTo(l2x_s,l2y_s+(i+1)*(l2w/3));
		ctx1.lineTo(l2x_s+l2w,l2y_s+(i+1)*(l2w/3));
		ctx1.stroke();
		ctx1.closePath();
	}
	// tate line
	var b2_x = [2,8,1,6,4,9];
	for(i=0;i<3;i++){
		for(j=0;j<2;j++){
			ctx1.beginPath();
			ctx1.moveTo(l2x_s+(l2w/10 * b2_x[i*2+j]),10+i*(l2w/3));
			ctx1.lineTo(l2x_s+(l2w/10 * b2_x[i*2+j]),10+(i+1)*(l2w/3));
			ctx1.stroke();
			ctx1.closePath();
		}
	}
	
	//Level1  --------------------
	var l3x_s = 50;
	var l3y_s = 10;
	var l3w = 10;
	ctx1.fillStyle = "#996633";
	ctx1.fillRect(l3x_s,l3y_s,l3w,l3w);
	
	//line style
	ctx1.fillStyle = "#000000";
	ctx1.lineWidth = l3w/10;		var i,j;
	
	//0~3→ひび1	4~8→ひび2　9~11→ひび3
	var b3_x = [1,4,4,8,0,2,5,7,10,2,7,9];
	var b3_y = [0,3,6,9,6,5,5,2,4,9,7,7];
	for(i=0;i<12;i){
		ctx1.beginPath();
		ctx1.moveTo(l3x_s+(l3w/10 * b3_x[i]),l3y_s+(l3w/10 * b3_y[i]));
		i++;
		ctx1.lineTo(l3x_s+(l3w/10 * b3_x[i]),l3y_s+(l3w/10 * b3_y[i]));
		ctx1.stroke();
		ctx1.closePath();
		if((i==3)||(i==8))	i++;
	}
}

//*************************************************//

function new_block () {
		canvas = document.getElementById('myCanvas');
	if(canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.clearRect(0,0,g_x,g_y);

	// level3  --------------------
	var l1x_s = 10;
	var l1y_s = 10;
	var l1w = 10;
	var gradient = ctx1.createLinearGradient(l1x_s,l1y_s,l1x_s+l1w,l1y_s+l1w);
	ctx1.fillStyle = "#8B0000";
	ctx1.fillRect(l1x_s,l1y_s,l1w,l1w);
	gradient.addColorStop(0, "#804000");
	gradient.addColorStop(0.2, "#aa5500");
	gradient.addColorStop(0.45, "#d56a00");
	gradient.addColorStop(0.5, "#ff952b");
	gradient.addColorStop(0.55, "#d56a00");
	gradient.addColorStop(0.8, "#aa5500");
	gradient.addColorStop(1, "#804000");
	ctx1.fillStyle = gradient;
	ctx1.fillRect(l1x_s+1,l1y_s+1,l1w-2,l1w-2);
	//ctx1.fillStyle = "#000000";
	//ctx1.strokeRect(l1x_s,l1y_s,l1w,l1w);
	
	//Level2  --------------------
	var l2x_s = 30;
	var l2y_s = 10;
	var l2w = 10;
	ctx1.fillStyle = "#d56a00";
	ctx1.fillRect(l2x_s,l2y_s,l2w,l2w);
	
	//line style
	ctx1.fillStyle = "#000000";
	ctx1.lineWidth = l2w/10;
	var fa;
	//0~1→ひび1	2~3→ひび2 4~5→ひび3
	var b2_x = [1,3,8,10,2,4];
	var b2_y = [0,3,6,9,7,5];
	for(fa=0;fa<6;fa){
		ctx1.beginPath();
		ctx1.moveTo(l2x_s+(l2w/10 * b2_x[fa]),l2y_s+(l2w/10 * b2_y[fa]));
		fa++;
		ctx1.lineTo(l2x_s+(l2w/10 * b2_x[fa]),l2y_s+(l2w/10 * b2_y[fa]));
		ctx1.stroke();
		ctx1.closePath();
		if((fa==1)||(fa==3))	fa++;
	}
	
	//Level1  --------------------
	var l3x_s = 50;
	var l3y_s = 10;
	var l3w = 10;
	ctx1.fillStyle = "#ff952b";
	ctx1.fillRect(l3x_s,l3y_s,l3w,l3w);
	
	//line style
	ctx1.fillStyle = "#000000";
	ctx1.lineWidth = l3w/10;		var i,j;
	
	//0~3→ひび1	4~8→ひび2　9~11→ひび3
	var b3_x = [1,4,4,8,0,2,5,7,10,2,7,9];
	var b3_y = [0,3,6,9,6,5,5,2,4,9,7,7];
	for(i=0;i<12;i){
		ctx1.beginPath();
		ctx1.moveTo(l3x_s+(l3w/10 * b3_x[i]),l3y_s+(l3w/10 * b3_y[i]));
		i++;
		ctx1.lineTo(l3x_s+(l3w/10 * b3_x[i]),l3y_s+(l3w/10 * b3_y[i]));
		ctx1.stroke();
		ctx1.closePath();
		if((i==3)||(i==8))	i++;
	}
}

//*************************************************//

function test_bar(){
	canvas = document.getElementById('myCanvas');
	if (canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.clearRect(0,0,g_x,g_y);

	var ichi = [10,160,320];

	
	// 従来
	var bar_x = 10;
	var bar_y = 80;
	var Bar_width = 100;
	var Bar_height = 10;
	ctx1.fillStyle = "rgb(0,255,255)";
	ctx1.fillRect(bar_x,bar_y,Bar_width,Bar_height);
	ctx1.fillStyle = "rgb(0,139,139)";
	ctx1.fillRect(bar_x,bar_y+30,Bar_width,Bar_height);
	ctx1.fillStyle = "rgb(0,0,139)";
	ctx1.fillRect(bar_x,bar_y+60,Bar_width,Bar_height);

	// new
	var bar_x = 160;
	var bar_y = 80;
	Bar_width = 75;
	Bar_height = 15;
	ctx1.fillStyle = "#FFCC66";
	ctx1.fillRect(bar_x,bar_y,Bar_width,Bar_height);
	ctx1.fillStyle = "#99CC33";
	ctx1.fillRect(bar_x,bar_y+30,Bar_width,Bar_height);
	ctx1.fillStyle = "#6699FF";
	ctx1.fillRect(bar_x,bar_y+60,Bar_width,Bar_height);	

	// http://www.netyasun.com/home/color.html　色はこのサイト
}

//*************************************************//

function test_ball(){
	canvas = document.getElementById('myCanvas');
	if (canvas.getContext){
		ctx1 = canvas.getContext('2d');
	}
	ctx1.clearRect(0,0,g_x,g_y);
	
	ctx1.beginPath();
	var r=40;
	ctx1.fillStyle = "#CCCCCC";
//	ctx1.arc(10+r, 10+r, r, 0, 2*Math.PI, true);
	ctx1.fill();

	ball_x = 100;
	ball_y = 100;
	Ball_size = 15;
	ctx1.fillStyle = "rgb(255,0,0)";
	ctx1.beginPath();
//	ctx1.arc(ball_x+Ball_size/2, ball_y+Ball_size/2, Ball_size/2, 0, 360 * Math.PI/180, false);
	ctx1.arc( 5.5, 5.5, 5.5, 0, 360 * Math.PI/180, false);
	ctx1.fill();
	console.log(360 * Math.PI/180);
}



/*
// メタリックなどを使用したブロックの描画 
			case '0':
				// block not exist
				// ctx1.fillStyle = "rgba(0,0,0,0)";
				// ctx1.fillRect(block_x,block_y,Block_size,Block_size);
				break;
			case '1':
				// block level 1
				ctx1.fillStyle = "#996633";
				ctx1.fillRect(block_x,block_y,Block_size,Block_size);
				//line style
				ctx1.fillStyle = "#000000";
				ctx1.lineWidth = Block_size/10;
				//0~3→ひび1	4~8→ひび2　9~11→ひび3
				var b3_x = [1,4,4,8,0,2,5,7,10,2,7,9];
				var b3_y = [0,3,6,9,6,5,5,2,4,9,7,7];
				for(fa=0;fa<12;fa){
					ctx1.beginPath();
					ctx1.moveTo(block_x+(Block_size/10 * b3_x[fa]),block_y+(Block_size/10 * b3_y[fa]));
					fa++;
					ctx1.lineTo(block_x+(Block_size/10 * b3_x[fa]),block_y+(Block_size/10 * b3_y[fa]));
					ctx1.stroke();
					ctx1.closePath();
					if((fa==3)||(fa==8))	fa++;
				}
				break;
			case '2':
				// block level 2
				ctx1.fillStyle = "#A0522D";
				ctx1.fillRect(block_x,block_y,Block_size,Block_size);

				//line style
				ctx1.fillStyle = "#000000";
				ctx1.lineWidth = Block_size/10;
				// yoko line
				for(fa=0;fa<2;fa++){
					ctx1.beginPath();
					ctx1.moveTo(block_x,block_y+(fa+1)*(Block_size/3));
					ctx1.lineTo(block_x+Block_size,block_y+(fa+1)*(Block_size/3));
					ctx1.stroke();
					ctx1.closePath();
				}
				// tate line
				var b2_x = [2,8,1,6,4,9];
				for(fa=0;fa<3;fa++){
					for(ka=0;ka<2;ka++){
						ctx2.beginPath();
						ctx2.moveTo(block_x+(Block_size/10 * b2_x[fa*2+ka]),block_y+fa*(Block_size/3));
						ctx2.lineTo(block_x+(Block_size/10 * b2_x[fa*2+ka]),block_y+(fa+1)*(Block_size/3));
						ctx2.stroke();
						ctx2.closePath();
					}
				}
				break;
			case '3':
				// block level 3
				ctx1.fillStyle = "#444444";
				ctx1.fillRect(block_x,block_y,Block_size,Block_size);
				var gradient = ctx1.createLinearGradient(block_x+1,block_y+1,block_x+Block_size-2,block_y+Block_size-2);
				gradient.addColorStop(0, "#CCCCCC");
				gradient.addColorStop(0.1, "#BBBBBB");
				gradient.addColorStop(0.2, "#AAAAAA");
				gradient.addColorStop(0.3, "#999999");
				gradient.addColorStop(0.4, "#888888");
				gradient.addColorStop(0.5, "#777777");
				gradient.addColorStop(0.6, "#888888");
				gradient.addColorStop(0.7, "#999999");
				gradient.addColorStop(0.8, "#AAAAAA");
				gradient.addColorStop(0.9, "#BBBBBB");
				gradient.addColorStop(1, "#CCCCCC");
				ctx1.fillStyle = gradient;
				ctx1.fillRect(block_x+1,block_y+1,Block_size-2,Block_size-2);
				break;
*/

