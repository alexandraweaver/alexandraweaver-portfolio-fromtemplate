import { aboutData } from '../../data/aboutData';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				<p>&copy; {new Date().getFullYear()}</p>
				<p>{ aboutData.name }</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
