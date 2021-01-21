import React from 'react';
import { useSelector } from 'react-redux';

const PokemonEmptyCard = () => {
	const cardHidden = useSelector((state) => state.cardHidden);
	const { hidden } = cardHidden;

	return (
		<div className={`pokemon-card empty ${hidden ? 'hidden' : 'open'}`}>
			<svg viewBox="0 0 769 989" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="Pokeball">
					<g id="Pokeball_svg">
						<circle
							id="Ellipse 3"
							cx="378.5"
							cy="610.5"
							r="366"
							fill="#EC1A23"
							stroke="black"
							strokeWidth="25"
						/>
						<g id="Subtract">
							<mask id="path-2-inside-1" fill="white">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0.0003232 610C0.000107755 610.167 0 610.333 0 610.5C0 819.54 169.46 989 378.5 989C587.54 989 757 819.54 757 610.5C757 610.333 757 610.167 757 610H0.0003232Z"
								/>
							</mask>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.0003232 610C0.000107755 610.167 0 610.333 0 610.5C0 819.54 169.46 989 378.5 989C587.54 989 757 819.54 757 610.5C757 610.333 757 610.167 757 610H0.0003232Z"
								fill="white"
							/>
							<path
								d="M0.0003232 610V585H-24.9674L-24.9997 609.968L0.0003232 610ZM757 610L782 609.963L781.963 585H757V610ZM25 610.5C25 610.344 25.0001 610.188 25.0003 610.032L-24.9997 609.968C-24.9999 610.145 -25 610.323 -25 610.5H25ZM378.5 964C183.267 964 25 805.733 25 610.5H-25C-25 833.347 155.653 1014 378.5 1014V964ZM732 610.5C732 805.733 573.733 964 378.5 964V1014C601.347 1014 782 833.347 782 610.5H732ZM732 610.037C732 610.186 732 610.339 732 610.5H782C782 610.328 782 610.148 782 609.963L732 610.037ZM757 585H0.0003232V635H757V585Z"
								fill="black"
								mask="url(#path-2-inside-1)"
							/>
						</g>
						<circle
							id="Ellipse 5"
							cx="379"
							cy="610"
							r="113.5"
							fill="white"
							stroke="black"
							strokeWidth="25"
						/>
						<circle id="Ellipse 6" cx="379" cy="610" r="45.5" stroke="black" strokeWidth="25" />
					</g>
					<path
						id="Vector 2"
						d="M675.202 254.782L692.5 297L709.505 254.782L757 232.5L709.505 210.511L692.5 168L675.202 210.511L628 232.5L675.202 254.782Z"
						fill="#FFE605"
						stroke="black"
						strokeWidth="10"
					/>
					<path
						id="Vector 4"
						d="M408.273 169.818L419 196L429.545 169.818L459 156L429.545 142.364L419 116L408.273 142.364L379 156L408.273 169.818Z"
						fill="#FFE605"
						stroke="black"
						strokeWidth="10"
					/>
					<path
						id="Vector 3"
						d="M560.011 151.909L587.5 219L614.523 151.909L690 116.5L614.523 81.5568L587.5 14L560.011 81.5568L485 116.5L560.011 151.909Z"
						fill="#FFE605"
						stroke="black"
						strokeWidth="10"
					/>
					<path
						id="Vector 1"
						d="M212.5 326.5C124.1 368.5 78 471.667 66 518C54 585.6 95.5 572 115 538.5C126.933 518 144.275 471.151 173.5 434.5C194.762 407.835 228.856 387.66 249.5 362.5C297.5 304 241.167 312.667 212.5 326.5Z"
						fill="#FF6168"
					/>
				</g>
			</svg>

			<p className="card-title">Hello There!</p>
		</div>
	);
};

export default PokemonEmptyCard;
