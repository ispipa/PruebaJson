/*const data = {name: 'Ronn', age: 27};              //sample json
const a = document.createElement('a');
const blob = new Blob([JSON.stringify(data)]);
a.href = URL.createObjectURL(blob);
a.download = './sample-profile.json';                     //filename to download
a.click();*/
fetch("./pelicula.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
var fileHandle;
async function save()
{
    let fichero = await fileHandle.createWritable();
    await fichero.write(textarea.innerText);
    await fichero.close;
}