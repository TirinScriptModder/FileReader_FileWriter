function read(path){
 var reader=new BufferedReader(
  new InputStreamReader(
   new FileInputStream(
    new File(path)
   ),
   'UTF-8'
  )
 );
 var resource='';
 for(var source=reader.readLine();
     source!=null;
     source=reader.readLine())
  resource+=source+'\n';
 return resource.slice(0,-1);
 reader.close();
}
