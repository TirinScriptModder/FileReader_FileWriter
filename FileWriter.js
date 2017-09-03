function write(path,data){
 var writer=new BufferedWriter(new OutputStreamWriter(new FileOutputStream(new File(path),false),'UTF-8'));
 writer.write(data);
 writer.close();
}
