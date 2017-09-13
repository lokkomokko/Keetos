  var Detector = {
canvas: !! window.CanvasRenderingContext2D,
webgl: ( function () { try { var canvas = document.createElement( 'canvas' ); return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ); } catch( e ) { return false; } } )(),
workers: !! window.Worker,
fileapi: window.File && window.FileReader && window.FileList && window.Blob,
};



CapitolTriangles = function(){
this.shouldLoop = false;

//Mouse variables
this.mX = 0;
this.mY = 0;

//Particles variables
this.particles = [];
this.particleProps = [];
this.numParticlesW = 12;
this.numParticlesH = 12;
this.vertices = [];

//Triangles variables
this.triangles = [];

//Circle variables
this.circles = [];
this.circleOffset = Math.random()*3*60;
this.circleCount = 0;

//Lines variables
this.lines = [];
this.lineOffset = Math.random()*60;
this.lineCount = 0;

//Parameters
if ($(window).width() > 800) {
this.speedX = 40;
this.speedY = 40;
this.speedZ = 100;
}
else {
	this.speedX = 120;
	this.speedY = 120;
	this.speedZ = 300;
}



this.movementX = 15;
this.movementY = 15;
this.movementZ = 30;

this.lineWidth = 1;
this.circleLineWidth = 1;
this.dotRadius = 1.2;
this.lineOpacity = 0.25;
this.dotOpacity = 0.8;

this.randomness = 150;

this.ambiantColor = "#78AEFE";
this.lightColor = "#1e1e1c";

this.resizeRatio = 3752/1446;

this.animPerc = 0;

this.init();
};

CapitolTriangles.prototype = {
init:function(){
	var that = this;

	//Init wrapper div
	this.el = document.createElement('div');
	this.el.style.position = 'absolute';
	this.el.style.top = '0px';
	this.el.style.left = '0px';
	this.el.style.overflow = 'hidden';
	this.el.style.backgroundColor = '#b2b2b2';

	//Init 3d
	this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
	this.camera.position.set( 0, 0, 500 );

	this.scene = new THREE.Scene();

	this.renderer = new THREE.CanvasRenderer();

	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.el.appendChild( this.renderer.domElement );
	this.renderer.domElement.style.opacity = '0';

	this.initMesh();

	//Init lights
	this.ambiantLight = new THREE.AmbientLight( new THREE.Color(this.ambiantColor) );
	this.scene.add( this.ambiantLight );

			this.light = new THREE.PointLight(new THREE.Color(this.lightColor),1,2000);
			this.light.position.set(0,0,100);
			this.scene.add(this.light);

	//Init noise
	this.noise = new ImprovedNoise();

	//Get context from the three.js canvas renderer
	this.ctx = this.renderer.domElement.getContext('2d');

	//Init background
	this.bg = new Image();
	// this.bg.src = App.baseURL + 'img/bg-concerns-2.jpg';
	this.bg.style.position = 'absolute';
	this.bg.style.left = '0px';
	this.bg.style.top = '0px';
	this.el.appendChild(this.bg);
},

show:function(){
	this.resize();
	this.loop();
},

initMesh:function(){
	var that = this;

	if(this.mesh){
		this.scene.remove(this.mesh);
	}

	//Reset Particles array
	this.particles = [];
	this.particleProps = [];
	this.vertices = [];

	//Reset Triangles array
	this.triangles = [];

	//Reset lines and circles array
	this.lines = [];
	this.circles = [];

	var offsetW = 1600/(this.numParticlesW-1);
	var offsetH = 1600/(this.numParticlesH-1);

	//Init particles
	for(var i=0;i<this.numParticlesW;i++){
		for(var j=0;j<this.numParticlesH;j++){
			var offset = offsetW/4;
			if(j%2 == 0){
				offset = -offsetW/4;
			}
			that.createParticle({
				orX:i*offsetW+offset+(Math.random()-0.5)*that.randomness,
				orY:j*offsetH+(Math.random()-0.5)*that.randomness,
				noiseAmp:Math.random()*20+30
			});
		}
	}

	//Init delaunay triangulation
	this.triangles = Delaunay.triangulate(this.particles);

	//Init geometry
	this.geometry = new THREE.Geometry();
	this.geometry.dynamic = true;
	this.geometry.vertices = this.vertices;

	for( i = 0; i < this.triangles.length; i+=3 ){
			that.geometry.faces.push( new THREE.Face3( that.triangles[i], that.triangles[i+1],that.triangles[i+2]));
	}

	this.geometry.computeFaceNormals();
	this.geometry.computeBoundingSphere();

	//Init material
	this.material = new THREE.MeshLambertMaterial({color:0xffffff,shading:THREE.FlatShading,overdraw: 0.8});
	this.material.side = THREE.BackSide;
	this.material.dynamic = true;

	//Init mesh
	this.mesh = new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = -1600/2;
	this.mesh.position.y = -1600/2;

	this.scene.add(this.mesh);

},

onMouseMove:function(e){
	this.mX = (e.clientX-window.innerWidth/2)*0.6;
	this.mY = -(e.clientY-window.innerHeight/2)*0.6;
},

particleDistance:function( p1, p2 ){
	var xs = 0;
	var ys = 0;

	xs = p2.x - p1.x;
	xs = xs * xs;

	ys = p2.y - p1.y;
	ys = ys * ys;

	return Math.sqrt( xs + ys );
},

createParticle:function(props){
	props.noiseOffX = Math.random();
	props.noiseOffY = Math.random();
	props.noiseOffZ = Math.random();
	if(Math.random()>0.5){
		props.speedX = Math.random()*0.03+0.05;
		props.speedY = Math.random()*0.03+0.05;
		props.speedZ = Math.random()*0.03+0.05;
	}
	else{
		props.speedX = -Math.random()*0.03+0.05;
		props.speedY = -Math.random()*0.03+0.05;
		props.speedZ = -Math.random()*0.03+0.05;
	}
	props.orZ = 0;
	this.particles.push([props.orX,props.orY]);
	this.particleProps.push(props);
	this.vertices.push(new THREE.Vector3(props.orX,props.orY,props.orZ));
},

createCircle:function(){
	var that = this;

	var randPoint = Math.floor(Math.random()*that.particles.length);
	while(that.particleProps[randPoint].noiseAmp == 0){
		randPoint = Math.floor(Math.random()*that.particles.length);
	}

	that.circles.push({
		pointID:randPoint,
		radius:0,
		alpha:1
	});
},

createLine:function(){
	var that = this;

	var randTriangle = Math.floor(Math.random()*that.triangles.length/3);
	while(randTriangle%3 != 0){
		randTriangle = Math.floor(Math.random()*that.triangles.length/3);
	}

	var p1 = {};
	var p2 = {};
	if(Math.random()>0.33){
		p1 = that.triangles[randTriangle*3];
		p2 = that.triangles[randTriangle*3+1];
	}
	else if(Math.random()>0.66){
		p1 = that.triangles[randTriangle*3+1];
		p2 = that.triangles[randTriangle*3+2];
	}
	else{
		p1 = that.triangles[randTriangle*3+2];
		p2 = that.triangles[randTriangle*3];
	}


	that.lines.push({
		p1:p1,
		p2:p2,
		isUp:true,
		perc:0
	});
},

start:function(){
	//Init mouse move event
	$(window).bind('mousemove',$.proxy(this.onMouseMove,this));

	this.renderer.domElement.style.opacity = '1';
	this.shouldLoop = true;
	this.loop();
},

destroy:function(){
	$(window).unbind('mousemove');

	//reset variables
	this.animPerc = 0;
	this.light.intensity = 0;
	this.shouldLoop = false;

	//Circle variables
	this.circles = [];
	this.circleOffset = Math.random()*3*60;
	this.circleCount = 0;

	//Lines variables
	this.lines = [];
	this.lineOffset = Math.random()*60;
	this.lineCount = 0;

	this.el.removeChild(this.renderer.domElement);
	this.el.removeChild(this.bg);
	// this.renderer = false;

	// this.bg.style.opacity = '1';
	// this.bg.style.display = 'block';

},

pause:function(){
	$(window).unbind('mousemove');

	this.shouldLoop = false;
},

loop:function(){
	var that = this;

	//Update animation variable
	this.animPerc += (1-this.animPerc)*0.02;

	if(this.bg.style.display != 'none'){
		this.bg.style.opacity = (1-this.animPerc)+'';
		if(this.animPerc > 0.95){
			this.bg.style.display = 'none';
		}
	}

	that.ctx.globalAlpha = 1;

	//Update vertices
	for(var i=0;i<this.geometry.vertices.length;i++){
		var vertice = this.geometry.vertices[i];
		var particleProp = that.particleProps[i];

		var tempX = particleProp.orX;
		var tempY = particleProp.orY;
		var tempZ = particleProp.orZ;

		//Add noise
		tempX += Math.sin(particleProp.noiseOffX)*particleProp.noiseAmp*this.movementX*0.01;
		tempY += Math.sin(particleProp.noiseOffY)*particleProp.noiseAmp*this.movementY*0.01;
		tempZ += Math.sin(particleProp.noiseOffZ)*particleProp.noiseAmp*this.movementZ*0.01;
		particleProp.noiseOffX += particleProp.speedX * this.speedX*0.01;
		particleProp.noiseOffY += particleProp.speedY * this.speedY*0.01;
		particleProp.noiseOffZ += particleProp.speedZ * this.speedZ*0.01;

		vertice.x = tempX;
		vertice.y = tempY;
		vertice.z = tempZ*that.animPerc;

		var pos2d = that.toScreenXY(new THREE.Vector3(vertice.x-800,vertice.y-800,vertice.z),that.camera,$(this.renderer.domElement));
		particleProp.pos2d = pos2d;

	}

	//Update geometry
	this.geometry.computeFaceNormals();
	this.geometry.vertices.needsUpdate = true;

	//Update light
	this.light.position.x += (this.mX-this.light.position.x)*0.5;
	this.light.position.y += (this.mY-this.light.position.y)*0.5;

	//reset renderer size to restore proper canvas transform matrix for three.js
	this.renderer.setSize(this.cWidth,this.cHeight);

	//render three.js scene
	this.renderer.render( this.scene, this.camera );

	//Reset canvas transform after three.js render
	this.ctx.setTransform(1,0,0,1,0,0);

	that.ctx.save();
	that.ctx.globalAlpha = this.dotOpacity;
	if ($(window).width() > 800) {
		that.ctx.fillStyle = '#ffffff';
	}
	else that.ctx.fillStyle = 'transparent';

	for(var i=0;i<this.particleProps.length;i++){
		var pos2d = that.particleProps[i].pos2d;
		//Draw particle point
		that.ctx.beginPath();
		that.ctx.arc(pos2d.x,pos2d.y,that.dotRadius,0,Math.PI*2);
		that.ctx.closePath();
		that.ctx.fill();
	}
	if ($(window).width() > 800) {
		that.ctx.strokeStyle = '#fff';
	}
	else that.ctx.strokeStyle = 'transparent';

	that.ctx.lineWidth = that.circleLineWidth;

	//Update circles
	for(i=0;i<that.circles.length;i++){
		var circle = that.circles[i];
		that.ctx.globalAlpha = circle.alpha;
		that.ctx.beginPath();
		that.ctx.arc(that.particleProps[circle.pointID].pos2d.x,that.particleProps[circle.pointID].pos2d.y,circle.radius,0,Math.PI*2);
		that.ctx.closePath();
		that.ctx.stroke();

		circle.radius += 0.5;
		circle.alpha -= 0.01;

		if(circle.alpha <= 0){
			that.circles.splice(i,1);
			i--;
		}
	}

	that.circleCount++;
	if(that.circleCount >= that.circleOffset){
		that.createCircle();
		that.circleOffset = Math.random()*1*60;
		that.circleCount = 0;
	}

	that.ctx.globalAlpha = this.lineOpacity;

	
	if ($(window).width() > 800) {
		that.ctx.strokeStyle = '#fff';
	}
	else that.ctx.strokeStyle = 'transparent';
	that.ctx.lineWidth = that.lineWidth;

	//Update Lines
	for(i=0;i<that.lines.length;i++){
		var line = that.lines[i];
		that.ctx.beginPath();
		if(line.isUp){
			that.ctx.moveTo(that.particleProps[line.p1].pos2d.x,that.particleProps[line.p1].pos2d.y);
			that.ctx.lineTo((that.particleProps[line.p1].pos2d.x+(that.particleProps[line.p2].pos2d.x-that.particleProps[line.p1].pos2d.x)*line.perc),(that.particleProps[line.p1].pos2d.y+(that.particleProps[line.p2].pos2d.y-that.particleProps[line.p1].pos2d.y)*line.perc));
			line.perc += 0.02;
			if(line.perc >= 1){
				line.isUp = false;
				line.perc = 0;
			}
		}
		else{
			that.ctx.moveTo((that.particleProps[line.p1].pos2d.x+(that.particleProps[line.p2].pos2d.x-that.particleProps[line.p1].pos2d.x)*line.perc),(that.particleProps[line.p1].pos2d.y+(that.particleProps[line.p2].pos2d.y-that.particleProps[line.p1].pos2d.y)*line.perc));
			that.ctx.lineTo(that.particleProps[line.p2].pos2d.x,that.particleProps[line.p2].pos2d.y);
			line.perc += 0.02;
			if(line.perc >= 1){
				that.lines.splice(i,1);
				i--;
			}
		}
		that.ctx.stroke();

	}

	that.ctx.restore();

	that.lineCount++;
	if(that.lineCount >= that.lineOffset){
		that.createLine();
		that.lineOffset = Math.random()*5;
		that.lineCount = 0;
	}

	if(this.shouldLoop){
		requestAnimationFrame($.proxy(this.loop,this));
	}
},

toScreenXY: function ( position, camera, jqdiv ) {

		var pos = position.clone();
		projScreenMat = new THREE.Matrix4();
		projScreenMat.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
		pos.applyProjection( projScreenMat );

		return { x: ( pos.x + 1 ) * jqdiv.width() / 2 + jqdiv.offset().left,
				 y: ( - pos.y + 1) * jqdiv.height() / 2 + jqdiv.offset().top };

},

resize:function(){
	//resize wrapper div
	this.el.style.width = window.innerWidth+'px';
	this.el.style.height = window.innerHeight+'px';

	if(window.innerWidth/window.innerHeight > this.resizeRatio){
		this.cWidth = window.innerWidth;
		this.cHeight = this.cWidth/this.resizeRatio;
	}
	else{
		this.cWidth = window.innerWidth;
		this.cHeight = window.innerHeight;
	}

	this.camera.aspect = this.cWidth / this.cHeight;
	this.camera.updateProjectionMatrix();

	this.renderer.setSize( this.cWidth, this.cHeight );

	//resize bg
	var cRatio = this.cWidth/this.cHeight;
	var imageRatio = 1920/1152;
	var imgHeight,imgWidth;
	if(imageRatio>cRatio){
		imgHeight = this.cHeight;
		imgWidth = imgHeight*imageRatio;
	}
	else{
		imgWidth = this.cWidth;
		imgHeight = imgWidth/imageRatio;
	}
	this.bg.style.width = imgWidth+'px';
	this.bg.style.height = imgHeight+'px';
	this.bg.style.left = ((this.cWidth-imgWidth)/2)+'px';
	this.bg.style.top = ((this.cHeight-imgHeight)/2)+'px';

	//If the bg is posed, render the scene on resize
	if(!this.shouldLoop){
		this.loop();
	}
}
};

// this.triangles = new CapitolTriangles();

// $('.bgCanvas').html(this.triangles.el);

// this.triangles2 = new CapitolTriangles();

// $('.contact-us__background').html(this.triangles2.el);

// this.triangles2.start()
//  this.triangles2.resize();

// this.triangles.start()
//  this.triangles.resize();

