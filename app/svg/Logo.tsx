import { twMerge } from 'tailwind-merge';
import { ClassNameOptional } from '~/interfaces/interfaces';

interface LogoProps extends ClassNameOptional {}

export default function Logo({ className = '' }: LogoProps) {
	return (
		<svg
			className={twMerge(className)}
			viewBox='0 0 203.528 203.528'
		>
			<g>
				<svg>
					<g transform='translate(53.792 55.391)'>
						<svg
							viewBox='0 0 95.944 92.746'
							height='92.746'
							width='95.944'
						>
							<g>
								<svg
									viewBox='2 3 60 58'
									height='92.746'
									width='95.944'
								>
									<g>
										<path d='M57 9h-6V8a5 5 0 0 0-10 0v1H23V8a5 5 0 0 0-10 0v1H7a5.006 5.006 0 0 0-5 5v42a5.006 5.006 0 0 0 5 5h50a5.006 5.006 0 0 0 5-5V14a5.006 5.006 0 0 0-5-5M43 8a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0ZM15 8a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0Zm42 51H7a3 3 0 0 1-3-3V24h43a1 1 0 0 0 0-2H4v-8a3 3 0 0 1 3-3h6v1a5 5 0 0 0 10 0v-1h18v1a5 5 0 0 0 10 0v-1h6a3 3 0 0 1 3 3v8h-7a1 1 0 0 0 0 2h7v32a3 3 0 0 1-3 3' />
										<path d='M35 41h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M35 31h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M35 51h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M51 41h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M51 31h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M19 41h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
										<path d='M19 51h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
									</g>
								</svg>
							</g>
						</svg>
					</g>
					<g>
						<path d='m11.691 71.48-1.645-.018.13-.49c-.919-.567-1.57-1.252-1.953-2.054-.387-.811-.421-1.735-.102-2.773.08-.259.173-.483.28-.672.102-.197.206-.366.311-.506l1.935.461a4.799 4.799 0 0 0-.359.627c-.12.233-.226.498-.317.795-.273.885-.263 1.732.027 2.541.293.803.857 1.499 1.693 2.089zm-.917-.396 8.166 2.514-.605 1.963-11.788-3.629.587-1.906 3.442 1.163z' />
						<path d='M26.115 57.638c-.831 1.566-1.884 2.528-3.159 2.884-1.272.366-2.703.127-4.293-.716l-1.666-.884c-1.578-.837-2.572-1.885-2.983-3.143-.411-1.259-.202-2.668.626-4.229.828-1.56 1.876-2.52 3.146-2.88 1.272-.366 2.698-.13 4.275.706l1.666.884c1.59.843 2.59 1.894 3 3.153.42 1.256.215 2.664-.612 4.225zm-1.473-.782c.512-.964.614-1.85.308-2.656-.312-.81-1.006-1.499-2.081-2.07l-1.867-.99c-1.069-.567-2.024-.752-2.863-.553-.833.202-1.506.785-2.017 1.749-.512.964-.617 1.848-.317 2.651.303.812.989 1.502 2.058 2.07l1.867.99c1.075.57 2.037.755 2.886.554.839-.199 1.515-.78 2.026-1.745z' />
						<path d='m33.858 33.041 6.044 5.085-1.322 1.571-5.87-4.938c-.511-.43-1.009-.732-1.493-.906a2.278 2.278 0 0 0-1.419-.04c-.467.144-.928.486-1.384 1.028-.417.496-.688 1.003-.812 1.521a3.14 3.14 0 0 0 .024 1.512c.137.495.369.959.698 1.39l-1.41-.589.345-.41a4.023 4.023 0 0 1-.715-1.509 3.527 3.527 0 0 1 .032-1.75c.159-.61.5-1.226 1.024-1.849.63-.749 1.281-1.235 1.952-1.457.671-.222 1.362-.216 2.072.019.715.229 1.459.67 2.234 1.322zm-6.18 5.589 6.909 5.813-1.322 1.572-12.817-10.783 1.309-1.557 3.075 2.587 2.673 2.327z' />
						<path d='M50.457 29.749c-1.411 1.074-2.77 1.505-4.077 1.294-1.309-.201-2.508-1.018-3.597-2.45l-1.142-1.5c-1.082-1.421-1.545-2.79-1.39-4.105.155-1.315.935-2.507 2.341-3.576 1.406-1.07 2.76-1.502 4.063-1.297 1.309.201 2.504 1.013 3.586 2.434l1.141 1.501c1.09 1.432 1.557 2.805 1.402 4.12-.146 1.316-.921 2.509-2.327 3.579zm-1.009-1.327c.869-.661 1.333-1.422 1.393-2.282.056-.866-.284-1.783-1.021-2.752l-1.28-1.682c-.733-.963-1.522-1.531-2.368-1.702-.841-.166-1.696.081-2.565.742s-1.335 1.419-1.399 2.274c-.065.864.268 1.778 1.002 2.742l1.279 1.682c.737.969 1.533 1.539 2.388 1.712.845.171 1.702-.073 2.571-.734z' />
						<path d='M77.554 16.299c-1.695.521-3.119.457-4.274-.192-1.159-.641-2.002-1.821-2.531-3.54l-.553-1.803c-.525-1.707-.487-3.151.111-4.332.599-1.181 1.743-2.03 3.432-2.549 1.688-.519 3.109-.457 4.261.186 1.159.641 2 1.814 2.525 3.521l.554 1.803c.528 1.72.493 3.17-.106 4.351-.591 1.185-1.731 2.037-3.419 2.555zm-.49-1.593c1.043-.321 1.742-.874 2.095-1.661.351-.793.348-1.771-.009-2.935l-.62-2.021c-.356-1.157-.9-1.962-1.635-2.414-.732-.446-1.62-.509-2.664-.189-1.043.321-1.743.871-2.098 1.652-.36.789-.362 1.762-.006 2.919l.621 2.02c.358 1.164.908 1.974 1.65 2.431.734.453 1.623.519 2.666.198z' />
						<path d='m92.087 5.389-.625-1.523.502-.071c.164-1.067.541-1.934 1.131-2.599.596-.673 1.434-1.064 2.513-1.174.27-.028.512-.029.728-.005.221.017.417.047.588.09l.33 1.961a4.824 4.824 0 0 0-.717-.086 4.884 4.884 0 0 0-.856.017c-.921.094-1.698.433-2.331 1.016-.625.583-1.047 1.374-1.263 2.374zm.007-.999.868 8.5-2.043.209L89.666.828 91.65.625l.27 3.624z' />
						<path d='M110.717 9.311c-1.666-.156-2.913-.642-3.74-1.457-.827-.815-1.177-1.901-1.05-3.258l.03-.316c.08-.85.323-1.571.731-2.164.408-.6 1.011-1.041 1.808-1.326.797-.284 1.813-.385 3.049-.302l6.293.381-.152 1.62-3.693-.475-.018.088c.568.173 1.024.418 1.366.736.342.318.582.699.72 1.144.144.445.19.955.135 1.527l-.025.277c-.122 1.298-.643 2.249-1.564 2.853-.92.605-2.217.829-3.89.672zm-.724 6.759.297.028c.751.07 1.405.075 1.962.014.551-.061.982-.2 1.295-.416.319-.216.498-.525.535-.927l.005-.049c.044-.468-.094-.843-.413-1.125-.312-.282-.877-.498-1.693-.647l-3.448-.643.585.025a5.203 5.203 0 0 0-1.276.219c-.37.118-.665.29-.886.515-.228.231-.359.531-.393.9l-.002.02c-.04.428.076.788.347 1.079.266.284.663.507 1.193.67.524.155 1.154.268 1.892.337zm.104 1.654-.365-.034c-1.107-.104-2.053-.289-2.838-.555-.786-.266-1.376-.631-1.772-1.093-.402-.463-.569-1.053-.501-1.772l.004-.049c.047-.501.205-.908.474-1.221a2.415 2.415 0 0 1 1.042-.7 4.471 4.471 0 0 1 1.401-.267l-.004-.07c-.674-.183-1.162-.435-1.464-.755-.302-.321-.432-.712-.388-1.173l.002-.02a1.47 1.47 0 0 1 .293-.79c.173-.216.414-.376.723-.48.309-.111.696-.161 1.16-.15l.023-.247 2.286.812-.955-.119c-.568-.04-.966-.008-1.196.097a.649.649 0 0 0-.381.562l-.001.01c-.026.277.109.499.406.666.296.174.812.339 1.548.494l2.956.576c1.291.261 2.21.662 2.757 1.206.553.55.785 1.303.695 2.257l-.006.07c-.071.757-.357 1.359-.857 1.803-.5.445-1.176.74-2.026.886-.851.146-1.856.165-3.016.056zm.742-9.927c.705.066 1.297.019 1.778-.142a2.25 2.25 0 0 0 1.154-.828c.276-.393.442-.892.499-1.498l.029-.307c.055-.586-.014-1.094-.206-1.524a2.196 2.196 0 0 0-.95-1.036c-.441-.261-1.01-.424-1.708-.489l-.079-.007c-.751-.07-1.374-.013-1.87.173s-.872.476-1.128.871c-.25.395-.401.873-.453 1.432l-.027.287c-.057.606.014 1.124.213 1.555.199.431.529.774.99 1.029.454.255 1.041.417 1.758.484z' />
						<path d='m134.895 10.305-2.314 7.645-1.947-.589.953-2.842.016-.327 1.138-3.761.22-.691c.289-.956.26-1.739-.088-2.349-.35-.603-1.053-1.065-2.11-1.385a7.518 7.518 0 0 0-2.436-.343c-.776.028-1.488.12-2.137.276l.687-1.617a9.476 9.476 0 0 1 1.259-.22 8.354 8.354 0 0 1 1.591-.016 8.669 8.669 0 0 1 1.849.362c.848.257 1.539.58 2.071.969.534.383.923.822 1.167 1.317.248.504.376 1.054.382 1.65a6.493 6.493 0 0 1-.301 1.921zm-8.404 6.082c-1.171-.354-1.984-.911-2.438-1.671-.448-.758-.512-1.665-.193-2.722l.107-.352c.33-1.089.91-1.798 1.742-2.126.834-.335 2.017-.385 3.55-.15l3.903.601-.327 1.456-3.758-.567c-.944-.147-1.656-.124-2.135.069-.48.193-.812.594-.997 1.202l-.057.19c-.188.621-.142 1.156.136 1.607.287.446.813.785 1.579 1.017.677.205 1.292.263 1.844.174a3.29 3.29 0 0 0 1.466-.593c.416-.303.748-.679.995-1.13l-.099 1.422-.37-.112a4.158 4.158 0 0 1-1.071 1.241c-.444.349-.986.576-1.626.68-.64.104-1.39.025-2.251-.236z' />
						<path d='m153.255 19.582-3.805 6.922-1.8-.989 3.695-6.722c.322-.586.521-1.133.597-1.642a2.28 2.28 0 0 0-.238-1.4c-.232-.429-.658-.815-1.279-1.155-.568-.312-1.118-.479-1.65-.5a3.197 3.197 0 0 0-1.496.31 3.836 3.836 0 0 0-1.227.956l.381-1.455.382.21c.389-.42.842-.749 1.358-.986a3.512 3.512 0 0 1 1.722-.31c.629.036 1.303.252 2.022.647.858.472 1.462 1.015 1.811 1.629.349.615.478 1.293.386 2.036-.085.746-.372 1.562-.859 2.449zm-6.575-5.177-4.465 8.122-1.8-.99 5.942-10.808 1.8.989-1.503 2.548z' />
						<path d='m165.885 23.552-7.742 9.602-1.591-1.283 7.741-9.602zm.475-2.218c-.33-.266-.504-.55-.522-.854-.018-.304.093-.605.333-.904l.044-.054c.249-.309.522-.484.818-.525.297-.041.61.071.94.337.33.266.508.55.536.852.028.303-.083.609-.332.918l-.044.054c-.245.304-.52.477-.826.519-.302.037-.618-.077-.947-.343z' />
						<path d='m178.514 38.831-11.374.885 4.58 5.183-1.272 1.124-6.202-7.02 1.153-1.019 11.38-.892-4.527-5.123 1.257-1.111 6.15 6.961z' />
						<path d='M177.177 57.089c-.949-1.629-1.266-3.087-.952-4.373.315-1.286 1.21-2.359 2.685-3.218l1.904-1.109c1.498-.872 2.878-1.164 4.141-.874 1.258.293 2.315 1.174 3.171 2.644.579.995.877 1.932.891 2.811a4.062 4.062 0 0 1-.7 2.406c-.478.73-1.186 1.368-2.123 1.914l-.394.23c-.234.137-.474.264-.718.384-.248.114-.491.221-.731.322l-.949-1.629c.359-.186.697-.368 1.014-.545l.866-.504c.646-.376 1.132-.797 1.458-1.263.332-.469.495-.977.49-1.526-.005-.548-.19-1.134-.553-1.756-.533-.915-1.198-1.446-1.996-1.594-.801-.153-1.696.058-2.686.635l-1.011.589-.213.147-1.012.59c-.446.26-.808.559-1.085.896a2.557 2.557 0 0 0-.567 1.157c-.094.43-.085.899.028 1.408.122.511.357 1.067.707 1.667a7.758 7.758 0 0 0 1.39 1.774 8.586 8.586 0 0 0 1.725 1.246l-1.622.726a7.156 7.156 0 0 1-1.679-1.227 8.872 8.872 0 0 1-1.479-1.928zm8.288-.006-1.329.775-4.416-7.58 1.329-.774z' />
						<path d='m190.717 68.067 1.337-.959.185.471c1.076-.087 2.006.08 2.79.501.792.425 1.366 1.15 1.723 2.174.089.256.147.492.173.707.034.219.05.417.048.593l-1.832.773a4.83 4.83 0 0 0-.081-.717 4.865 4.865 0 0 0-.215-.829c-.304-.875-.813-1.552-1.527-2.032-.711-.474-1.578-.701-2.601-.682zm.973-.223-8.069 2.807-.675-1.94 11.65-4.052.655 1.883-3.463 1.1z' />
						<path d='m14.451 126.76 1.436-.965.177.506c1.133-.053 2.102.155 2.906.627.81.469 1.384 1.247 1.721 2.334.084.272.138.522.16.75.029.227.037.432.024.616l-1.939.746a6.41 6.41 0 0 0-.057-.751 5.285 5.285 0 0 0-.198-.873c-.288-.929-.798-1.657-1.529-2.186-.725-.53-1.626-.798-2.701-.804zm1.024-.214-8.549 2.651-.635-2.048 12.35-3.828.62 2-3.681 1.027z' />
						<path d='M14.483 147.642c-.87-1.635-1.09-3.111-.658-4.427.437-1.319 1.485-2.42 3.143-3.302l1.744-.928c1.653-.879 3.147-1.127 4.482-.744 1.332.378 2.432 1.381 3.299 3.01.87 1.635 1.09 3.111.658 4.427-.431 1.316-1.473 2.414-3.125 3.294l-1.744.927c-1.659.883-3.157 1.137-4.495.762-1.332-.378-2.434-1.384-3.304-3.019zm1.542-.82c.541 1.016 1.252 1.627 2.133 1.832.875.209 1.88.011 3.012-.591l1.954-1.04c1.121-.597 1.84-1.316 2.156-2.158.316-.843.204-1.772-.337-2.788-.535-1.004-1.241-1.614-2.12-1.829-.878-.214-1.878-.023-2.999.573l-1.954 1.04c-1.133.603-1.856 1.329-2.169 2.177-.319.852-.211 1.78.324 2.784z' />
						<path d='m36.898 163.937-6.324 5.339-1.383-1.638 6.142-5.185c.536-.452.934-.914 1.194-1.385.26-.471.36-.958.3-1.46-.065-.508-.337-1.045-.815-1.611-.44-.521-.918-.887-1.435-1.1a3.218 3.218 0 0 0-1.557-.244 4.045 4.045 0 0 0-1.561.474l.861-1.35.358.425a4.354 4.354 0 0 1 1.688-.478c.594-.034 1.195.082 1.801.35.601.271 1.177.733 1.728 1.385.661.783 1.048 1.544 1.16 2.281.112.728-.016 1.438-.384 2.129-.373.696-.964 1.386-1.773 2.068zm-4.68-7.373-7.226 6.101-1.383-1.638 13.413-11.324 1.377 1.63-3.223 2.721-2.88 2.341z' />
						<path d='M42.679 179.901c-1.477-1.118-2.297-2.364-2.458-3.739-.158-1.381.33-2.82 1.463-4.318l1.192-1.575c1.13-1.493 2.381-2.346 3.754-2.56 1.368-.218 2.787.23 4.259 1.344 1.477 1.118 2.297 2.364 2.458 3.74.162 1.375-.322 2.809-1.451 4.302l-1.192 1.575c-1.134 1.498-2.386 2.359-3.758 2.582-1.368.218-2.79-.232-4.267-1.351zm1.054-1.392c.918.695 1.82.95 2.706.766.882-.179 1.71-.78 2.484-1.804l1.336-1.764c.766-1.013 1.116-1.968 1.048-2.865-.068-.897-.56-1.693-1.478-2.388-.907-.687-1.805-.943-2.692-.768-.887.175-1.714.769-2.48 1.781l-1.336 1.765c-.774 1.023-1.125 1.986-1.052 2.887.069.907.557 1.703 1.464 2.39z' />
						<path d='M73.727 195.306c-1.771-.544-2.968-1.434-3.592-2.67-.622-1.243-.657-2.762-.105-4.558l.58-1.888c.55-1.79 1.433-3.02 2.649-3.691 1.21-.673 2.697-.739 4.462-.198 1.771.544 2.968 1.434 3.591 2.671.624 1.236.661 2.75.112 4.539l-.58 1.888c-.552 1.796-1.433 3.034-2.646 3.713-1.21.673-2.701.738-4.471.194zm.513-1.669c1.1.338 2.035.269 2.804-.208.767-.47 1.339-1.319 1.716-2.546l.65-2.115c.373-1.214.374-2.231.002-3.051-.371-.82-1.107-1.399-2.207-1.737-1.088-.334-2.018-.267-2.792.202-.774.468-1.347 1.31-1.719 2.523l-.65 2.116c-.377 1.227-.376 2.251.001 3.073.375.828 1.107 1.409 2.195 1.743z' />
						<path d='m92.372 190.698-.325-1.699.535.035c.395-1.064.966-1.873 1.714-2.428.749-.562 1.689-.785 2.821-.67.283.029.534.078.753.147.22.062.412.135.577.218l-.073 2.078a6.894 6.894 0 0 0-.713-.243 5.187 5.187 0 0 0-.882-.159c-.967-.099-1.837.085-2.609.551-.772.46-1.371 1.183-1.798 2.17zm.204-1.026-.909 8.904-2.132-.218 1.313-12.862 2.083.212-.496 3.79z' />
						<path d='M111.18 194.628c-1.745.163-3.122-.094-4.129-.77-1.013-.676-1.586-1.725-1.719-3.148l-.031-.336c-.083-.889.029-1.68.336-2.374.301-.693.836-1.261 1.605-1.704.762-.45 1.787-.755 3.074-.915l6.55-.822.158 1.69-3.885.233-.011.091c.624.068 1.141.232 1.551.493.416.26.741.605.974 1.035.227.437.368.952.423 1.545l.028.297c.127 1.363-.224 2.443-1.053 3.237-.829.802-2.119 1.284-3.871 1.448zm.573 7.102.307-.028c.79-.074 1.463-.197 2.018-.368.555-.171.976-.397 1.263-.676.286-.286.409-.639.369-1.061l-.005-.05c-.046-.494-.259-.856-.639-1.086-.386-.223-1.011-.334-1.875-.333l-3.676.015.609-.087a5.403 5.403 0 0 0-1.271.467c-.361.193-.634.428-.822.705-.187.277-.262.609-.225.998l.002.029c.042.448.23.792.565 1.034.335.248.788.401 1.359.461.577.059 1.251.053 2.021-.02zm.427 1.685-.385.036c-1.159.108-2.17.103-3.032-.016-.855-.119-1.534-.382-2.036-.786-.502-.398-.789-.973-.859-1.724l-.005-.049c-.049-.527.035-.98.252-1.359.218-.372.531-.681.94-.925a4.943 4.943 0 0 1 1.385-.538l-.017-.079c-.73-.058-1.28-.223-1.651-.493-.371-.271-.579-.647-.624-1.128l-.001-.02c-.031-.329.019-.62.147-.871.129-.251.345-.464.648-.638.297-.167.684-.293 1.161-.378l-.024-.257 2.518.393-1.01.065c-.592.062-.997.173-1.215.332a.672.672 0 0 0-.288.645v.01c.027.29.209.495.546.617.343.121.911.187 1.703.199l3.152.025c1.376.011 2.402.247 3.076.709.674.455 1.057 1.184 1.151 2.185l.006.069c.074.797-.105 1.472-.538 2.024-.426.558-1.063.993-1.911 1.304-.847.318-1.877.534-3.089.648zm-1.168-10.366c.738-.069 1.34-.235 1.807-.497a2.29 2.29 0 0 0 1.016-1.072c.209-.465.284-1.013.225-1.645l-.029-.317c-.057-.613-.228-1.125-.512-1.536-.277-.406-.67-.698-1.179-.877-.502-.179-1.118-.234-1.849-.166l-.079.007c-.79.074-1.421.256-1.892.546-.478.284-.809.654-.993 1.109-.183.462-.247.983-.193 1.563l.028.296c.059.632.234 1.154.525 1.566.29.405.696.696 1.217.873.521.171 1.157.221 1.908.15z' />
						<path d='m134.048 184.95 2.422 8.017-2.042.617-.822-3.027-.173-.3-1.191-3.942-.2-.728c-.304-1.007-.786-1.673-1.444-2-.658-.326-1.542-.322-2.649.013-.887.268-1.662.64-2.327 1.118-.658.475-1.224.968-1.699 1.478l-.338-1.806c.266-.288.591-.593.977-.917.384-.33.842-.645 1.373-.944a9.007 9.007 0 0 1 1.824-.758c.887-.268 1.673-.388 2.358-.36.688.034 1.286.195 1.794.484.509.289.938.691 1.288 1.207.351.523.634 1.139.848 1.848zm-3.795 10.186c-1.229.371-2.259.358-3.091-.04-.838-.396-1.425-1.148-1.76-2.257l-.112-.37c-.344-1.14-.247-2.099.292-2.877.533-.776 1.536-1.504 3.009-2.184l3.744-1.743.568 1.466-3.608 1.681c-.91.42-1.517.856-1.823 1.308-.308.445-.366.985-.174 1.618l.063.209c.195.646.545 1.083 1.049 1.31.511.226 1.168.217 1.972-.026.709-.214 1.28-.521 1.712-.921.432-.4.741-.853.927-1.358a3.533 3.533 0 0 0 .217-1.58l.735 1.302-.389.118a4.37 4.37 0 0 1-.209 1.711c-.181.566-.521 1.077-1.019 1.531-.503.463-1.204.83-2.103 1.102z' />
						<path d='m151.815 176.06 3.986 7.253-1.878 1.032-3.871-7.044c-.338-.615-.712-1.096-1.122-1.444a2.371 2.371 0 0 0-1.373-.582c-.511-.036-1.091.124-1.74.481-.597.328-1.051.725-1.362 1.19-.32.462-.508.958-.564 1.487a4.184 4.184 0 0 0 .148 1.629l-1.075-1.153.409-.225a4.363 4.363 0 0 1-.118-1.758c.078-.586.308-1.15.69-1.692.385-.536.957-1.013 1.716-1.43.899-.494 1.72-.723 2.465-.687.736.034 1.406.299 2.012.797.609.503 1.168 1.219 1.677 2.146zm-8.271 2.915 4.674 8.505-1.879 1.033-6.227-11.332 1.879-1.032 1.417 2.765z' />
						<path d='m157.962 165.522 8.101 10.077-1.67 1.343-8.102-10.077zm-2.16-.976c-.34.274-.67.386-.989.337-.315-.044-.601-.225-.859-.545l-.037-.046c-.261-.325-.379-.646-.354-.963.029-.312.214-.605.554-.879.345-.278.674-.397.985-.359.32.04.611.222.872.547l.037.046c.261.325.377.648.347.97-.025.317-.21.615-.556.892z' />
						<path d='m171.412 153.782 2.356 11.718 4.812-5.414 1.328 1.18-6.519 7.335-1.209-1.074-2.356-11.719-4.76 5.355-1.32-1.173 6.467-7.276z' />
						<path d='M188.454 148.664c-.998 1.7-2.163 2.738-3.497 3.114-1.339.373-2.781.105-4.327-.802l-1.985-1.165c-1.569-.921-2.544-2.03-2.925-3.328-.381-1.298-.12-2.717.784-4.257.609-1.038 1.311-1.789 2.104-2.252a4.253 4.253 0 0 1 2.553-.606c.917.071 1.867.394 2.849.969l.41.242c.245.144.483.295.713.452.235.161.46.327.673.499l-.994 1.695a85.213 85.213 0 0 0-1.923-1.175c-.673-.395-1.309-.619-1.907-.671a2.687 2.687 0 0 0-1.646.334c-.496.284-.936.751-1.317 1.402-.563.958-.708 1.84-.436 2.644.278.807.933 1.514 1.966 2.12l1.061.623.236.127 1.061.623c.462.271.922.449 1.379.533.451.081.901.053 1.348-.083.439-.134.862-.384 1.27-.751.405-.376.79-.875 1.154-1.497a8.073 8.073 0 0 0 .903-2.185 8.88 8.88 0 0 0 .256-2.22l1.5 1.11a7.724 7.724 0 0 1-.262 2.171c-.199.758-.533 1.536-1.001 2.334zm-4.269-7.568 1.395.819-4.651 7.925-1.395-.819z' />
						<path d='m187.932 130.22-1.728-.082.159-.512c-.941-.633-1.594-1.378-1.959-2.236-.371-.86-.367-1.826.011-2.899.094-.268.201-.501.319-.698a3.24 3.24 0 0 1 .347-.509l2.003.557c-.137.19-.271.402-.403.637a5.34 5.34 0 0 0-.362.819c-.323.917-.348 1.806-.076 2.667.266.858.829 1.61 1.689 2.256zm-.95-.439 8.443 2.971-.712 2.022-12.196-4.292.695-1.975 3.567 1.371z' />
						<path d='M2.394 99.453a6.467 6.467 0 1 1 12.934 0 6.467 6.467 0 0 1-12.934 0z' />
						<path d='M188.2 99.453a6.467 6.467 0 1 1 12.934 0 6.467 6.467 0 0 1-12.934 0z' />
					</g>
				</svg>
			</g>
		</svg>
	);
}
