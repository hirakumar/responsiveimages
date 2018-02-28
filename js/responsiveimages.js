
let ResponsiveImages=function(){
	this.images=document.images;
	console.log(this.images.length);
	this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	this.init=function(){
		// If we have images
		this.imgResize();
		window.addEventListener("resize",this.windowResize.bind(this),false);
	}
	this.imgResize=function(){
		if(this.images.length>0){
				for(let i=0; i<this.images.length; i++){
					//console.log(typeof this.images[i].dataset.images);
					try{
						if(this.images[i].dataset.images){
							//console.log("I found dataset");
							let imgJson =JSON.parse(this.images[i].dataset.images);
							console.log("This width :"+this.w);
							if(imgJson){
								if(this.w>=320 && this.w<=576 && imgJson.xs){
									this.images[i].src=imgJson.xs;
								}else if(this.w>576 && this.w<=768 && imgJson.sm){
									 this.images[i].src=imgJson.sm;
								}else if(this.w>768 && this.w<=992 && imgJson.md){
									 this.images[i].src=imgJson.md;
								}else if(this.w>=992 && this.w<=1200 && imgJson.lg){
									 this.images[i].src=imgJson.lg;
								}else if(this.w>1200 && imgJson.xl){
									console.log("XL of "+imgJson.xl);
									 this.images[i].src=imgJson.xl;
								}
							}
							
							
						}
					}catch(err){
						return err;
					}
				}
				
			}
	}
	this.windowResize=function(e){
		
			let w=e.target.innerWidth;
			images=document.images;
			
			if(images.length>0){
				for(let i=0; i<images.length; i++){
					try{
						if(images[i].dataset.images){
							 imgJson =JSON.parse(images[i].dataset.images);
							if(imgJson){
								if(w>=320 && w<=576 && imgJson.xs){
									images[i].src=imgJson.xs;
									
								}else if(w>576 && w<=768 && imgJson.sm){
									images[i].src=imgJson.sm;
								}else if(this.w>768 && w<=992 && imgJson.md){
									images[i].src=imgJson.md;
								}else if(w>=992 && w<=1200 && imgJson.lg){
									images[i].src=imgJson.lg;
								}else if(w>=1200 && imgJson.xl){
									images[i].src=imgJson.xl;
								}
							}else{
								return false;
							}
						}
					}catch(err){
						return err;
					}
				
				
				}
			}
			
		
	}
	
}
