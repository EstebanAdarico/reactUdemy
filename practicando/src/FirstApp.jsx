import PropTypes from "prop-types";
export const FirstApp = ({ title, subTitle, name }) => {
   return (
      <>
         <h1>{title}</h1>
         <p>{subTitle}</p>
         <p>{name}</p>
      </>
   );
};
//####  proptipes para confirmar que lo ingresado sea del mismo tipo de dato que se esta pidiendo
FirstApp.propTypes = {
   title: PropTypes.string.isRequired,
   subTitle: PropTypes.string,
};
//  para saber que los vaslores por defectos sean estos

FirstApp.defaultProps = {
   name: "Esteban Puma",
   subTitle: "No hay subtitulo",
   title: "No hay titulo",
};
