(function(global){
	global.File=function(path){
		this.path=path;
		this.file=new java.io.File(this.path);
	};
	File.prototype={
		create:function(){
			if(!this.file.getParent().exists())
				this.file.getParent().mkdirs();
			new java.io.File(this.path).createNewFile();
		},
		delete:function(){
			new java.io.File(this.path).delete();
		},
		exist:function(){
			return new java.io.File(this.path).exists();
		},
		read:function(){
			return android.os.FileUtils.readTextFile(this.file,0,null);
		},
		wirte:function(data){
			android.os.FileUtils.stringToFile(this.path,data);
		}
	};
})(this);
