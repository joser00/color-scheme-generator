function getColorScheme() {
  const form = document.getElementById("form-color");
  form.addEventListener('submit',(e)=> {
   
    e.preventDefault()
    
    const formData = new FormData(form);
    let valueColor = formData.get('color-selector')
    let valueScheme = formData.get('scheme')
    let colorsRender = ''
    fetch(`https://www.thecolorapi.com/scheme?hex=${valueColor.slice(1,valueColor.length)}&mode=${valueScheme}`)
    .then((response) => response.json())
    
    .then((data) => {
        console.log(data.colors[0].hex.value)
    return data.colors.map(color => {
            colorsRender += `
            <div class = 'colors'>
            <div style = "background-color:${color.hex.value}"></div>
            <p>${color.hex.value}</p>
            </div>
            ` 
            document.getElementById('color-container').innerHTML = colorsRender
            
        })
      
    });///End of the .then
  }) ///End of the event
  
}
getColorScheme();
