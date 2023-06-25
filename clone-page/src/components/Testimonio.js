import React from 'react';
import '../styles-sheets/Testimonio.css';

function Testimonio(props) {
	return (
		<div className='contenedor-testimonio'>
			<img
				className='imagen-testimonio'
				src={require(`../images/testimonio-${props.person.image}.png`)}
				alt='Foto de emma'
			/>
			<div className='testimonio-text-testimonio'>
				<p className='nombre-testimonio'>
					{props.person.name} en {props.person.country}
				</p>
				<p className='cargo-testimonio'>
					{props.person.charge} en {props.person.company}
				</p>
				<p className='texto-testimonio'>"{props.person.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimonio;
