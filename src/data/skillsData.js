// Import react-icon components
import { DiRuby } from 'react-icons/di';
import { FaJava, FaNode, FaReact } from 'react-icons/fa';
import { GiUnicorn } from 'react-icons/gi';
import { MdDataObject } from 'react-icons/md';
import { SiApachetomcat, SiBabel, SiDotnet, SiEclipseide, SiExpress, SiFlask, SiMaterialdesign, SiMui, SiPostgresql, SiPostman, SiRubyonrails, SiScrumalliance, SiWebpack } from 'react-icons/si';
import { TbApi, TbBrandBootstrap, TbBrandCSharp, TbBrandCss3, TbBrandDjango, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandPython, TbBrandTypescript, TbBrandVscode, TbDatabase, TbRelationOneToMany, TbSql } from 'react-icons/tb';

const iconSize = 40;

export const skillsHeading = 'Some of my skills';

export const skillsData = [
	{
		title: 'React',
		imgs: [<FaReact size={iconSize}/>],
	},
	{
		title: 'NodeJS, ExpressJS',
		imgs: [<FaNode size={iconSize}/>, <SiExpress size={iconSize}/>],
	},
	{
		title: 'JavaScript, TypeScript',
		imgs: [<TbBrandJavascript size={iconSize}/>, <TbBrandTypescript size={iconSize}/>],
	},
	{
		title: 'HTML, CSS',
		imgs: [<TbBrandHtml5 size={iconSize}/>, <TbBrandCss3 size={iconSize}/>],
	},
	{
		title: 'Babel, Webpack',
		imgs: [<SiBabel size={iconSize}/>, <SiWebpack size={iconSize}/>],
	},
	
	{
		title: 'API Architecture, Postman',
		imgs: [<TbApi size={iconSize}/>, <SiPostman size={iconSize}/>],
	},
	{
		title: 'DB Architecture, ORMs',
		imgs: [<TbDatabase size={iconSize}/>, <TbRelationOneToMany size={iconSize}/>],
	},
	{
		title: 'NoSQL, MongoDB',
		imgs: [<MdDataObject size={iconSize}/>, <TbBrandMongodb size={iconSize}/>],
	},
	{
		title: 'SQL, PostgreSQL',
		imgs: [<TbSql size={iconSize}/>, <SiPostgresql size={iconSize}/>],
	},
	{
		title: 'Java, Tomcat',
		imgs: [<FaJava size={iconSize}/>, <SiApachetomcat size={iconSize}/>],
	},
	{
		title: 'C#, .NET, MVC, MVVM',
		imgs: [<TbBrandCSharp size={iconSize}/>, <SiDotnet size={iconSize}/>],
	},
	{
		title: 'VSCode, Eclipse, etc',
		imgs: [<TbBrandVscode size={iconSize}/>, <SiEclipseide size={iconSize}/>],
	},
	{
		title: 'Bootstrap, React Bootstrap',
		imgs: [<TbBrandBootstrap size={iconSize}/>],
	},
	{
		title: 'Material Design, MUI',
		imgs: [<SiMaterialdesign size={iconSize}/>, <SiMui size={iconSize}/>],
	},
	{
		title: 'UI & UX Design',
		imgs: [<GiUnicorn size={iconSize}/>],
	},
	{
		title: 'Agile, Scrum',
		imgs: [<SiScrumalliance size={iconSize}/>],
	},
	{
		title: 'Python, Flask, Django',
		imgs: [<TbBrandPython size={iconSize}/>, <SiFlask size={iconSize}/>, <TbBrandDjango size={iconSize}/>],
	},
	{
		title: 'Ruby, Rails',
		imgs: [<DiRuby size={iconSize}/>, <SiRubyonrails size={iconSize}/>],
	}
];

// hardSkillsData
// softSkillsData
// otherSkillsData
// hobbiesData
// educationData