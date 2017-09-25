(function(global){
	global.File=function(path){
		this.path=path;
		this.file=new java.io.File(this.path);
	};
	File.prototype={
		create:function(){
			if(!this.file.getParent().exists())
				this.file.getParent().mkdirs();
			this.file.createNewFile();
		},
		delete:function(){
			this.file.delete();
		},
		exist:function(){
			return this.file.exists();
		},
		read:function(){
			return android.os.FileUtils.readTextFile(this.file,0,null);
		},
		wirte:function(data){
			android.os.FileUtils.stringToFile(this.path,data);
		}
	};
})(this);
