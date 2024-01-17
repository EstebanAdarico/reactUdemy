// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
   try {
      const apiKey = "K244fTDuHsQDc0Jd779UPPv0hTDNYAe7";
      const resp = await fetch(
         `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      //guardando el formato json en la variable data
      const { data } = await resp.json();

      const { url } = data.images.original;

      return url;
   } catch (error) {
      // manejo del error
      console.error(error);
      return "No se encontro la imagen ";
   }
};

getImagen();
