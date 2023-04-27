// banner ⚪ Orbital Docs

let one = {
content:
`
<style>
.callout {
	display: flex;
	justify-content: center;
	margin: auto;
	flex-direction: row-reverse;
	max-width: 70%;
	font-family: 'Poppins', sans-serif;
}
.callout div {
	flex: 1 1 0;
}
.callout div:first-child {
	flex: 1 1 0;
	display: flex;
	justify-content: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url(/assets/15flipped.png);
}

button {
	font-family: 'Poppins', sans-serif;
	font-size: 0.95em;
	border-radius: 52px;
	padding: 10px 30px 10px 30px;
	margin-right: 10px;
	font-size:  20px;
	font-weight:  300;
	background: transparent;
	color: var(--lifecards-night-text);
	border: 2px solid var(--lifecards-night-text);
}

button:hover {
	color: var(--lifecards-day-text);
	background-color: var(--lifecards-night-text);
	transition: 0.3s;
}

@media only screen and (max-width: 800px) {
	.callout {
		flex-direction: column;
	}
}

@media (prefers-color-scheme: light) {
	button {
		color: var(--lifecards-day-text);
		border: 2px solid var(--lifecards-day-text);
	}
	button:hover {
		color: var(--lifecards-night-text);
		background-color: var(--lifecards-day-text);
		transition: 0.3s;
	}
}


</style>
<div class="callout">
<div>
	<img style="width:100%; object-fit: contain;" src="/assets/25.png"></img>
</div>
<div>
	<h1>Orbital is an open source platform for distributed computation</h1>
	<p>Create interactive digital twins, simulations, games, AR experiences, and open metaverses.</p>
	<button>Get<br/>Started</button>
	<button>Learn<br/>More</button>
</div>
</div>
`
}

//////////////// ignore

let two = {
	content:
`
<div style="display:flex">
	<div>
		<img style="width:200px;" src="/assets/35flipped.png"></img>
	</div>
	<div>
		<h2>Modeling Urban Life</h2>
		People in a community need to find ways to work together at a civic level to contribute to local issues. Although experts have tools like this - can we make these tools accessible to wider audiences. Here we explore a simple car simulation to help understand traffic patterns and possible road-blocks.
		<br/>
		<button>Visit Car World</button>
	</div>
</div>
`
,
}

let three = {
	content:
`
<div style="display:flex">
	<div>
		<h2>Deep Learning Modules</h2>
		How can we provide access to new machine learning tools? Can we make it easier for people to leverage tensorflow or newer emerging techologies? This example explores scripting a lightweight app that uses computer vision.
		<br/>
		<button>Visit Computer Vision</button>
	</div>
	<div>
		<img style="width:200px;" src="/assets/51.png"></img>
	</div>
<div>
`
,
}

let four = {
	content:
`
<div style="display:flex">
	<div>
		<img style="width:200px;" src="/assets/59.png"></img>
	</div>
	<div>
		<h2>Virtual Venice</h2>
		Digital Twins combine real and virtual information, populating the digital model with sensor data – ideally allowing participants in the virtual model to impact the real world. This is an example of a 'digital twin' of Venice, Italy.
		<br/>
		<button>Visit Virtual Venice</button>
	</div>
</div>
`,
}

let five = {
	content:
`
<div style="display:flex">
	<div>
		<h2>Natural Systems</h2>
			There's a possibility of civic engagement around decision-making if we can have a shared understanding. In this case, we see digital simulations running in the cloud as a way to do this. This example explores coral reef ecologies, systems that efficiently capture the energy and act as single organisms with emergent behaviors. Reefs are impacted by global warming, and it may be possible to use digital tools to predict the outcome of policy changes here.
		<br/>
		<button>Visit Cloud Reef</button>
	</div>
	<div>
		<img style="width:200px;" src="/assets/36.png"></img>
	</div>
</div>
`	
}

let six = {
content:
`
<h1>Orbital – A blue-sky reinterpretation of the personal computing</h1>
`,
children:[
	{
		content:`
		<h1>Personal Agency</h1>
		We see a future of “human scale” software where everybody can create and share lightweight interactive apps as easily as we share static images, text and video today. Orbital will make it easy for a farmer to describe a new deep learning leaf recognition algorithm to their farmbot. To allow a child to create and share a pet recognizer. A fitness trainer to create an interactive workout. An artist to create a vignette of the experience of walking beneath cherry blossoms in the spring.
		`
	},
	{
		content:`
		<h1>Sense Making</h1>
		Today millions of us rely on software agents to help us navigate and understand our increasingly complex world. Emerging technologies such as deep learning algorithms, computer vision, augmented reality glasses and many other new innovations are useful, but only they can meet our subjective needs. Orbital will make new technologies dynamically loadable such that professional developers and novices can define services on demand.

		`
	},
	{
		content:`
		<h1>Digital Agents</h1>
		We envision software apps, services, libraries, databases and agents as being defined by standardized portable components, able to interoperate, able to be wired together easily and able to run on consumer devices or migrate over the cloud as needed. Apps will be composed of shared services and run persistently in the background or in a distributed computational soup.
		`
	},
	{
		content:`
		<h1>New Horizons</h1>
		Humanity faces many grand challenges from global warming to unrestricted AI. We are communities as much if not more so than individuals. A synthesis of human and machine reasoning can help us 'see' better; to model near term collective outcomes and to navigate these issues together. We see Orbital as a platform that allows us to leverage our tools, build on each others capabilities and to face the future.
		`
	},
]

}

// https://devpractical.com/3-columns-flexbox-layout-css/
let seven = {
	content:
`
<div style="display:flex">
	<div>
		<h1>Orbital Foundation</h1>
		<span>twitter</span>
		<span>github</span>
		<span>discord</span>
	</div>
	<div>
		<h1>Links</h1>
		<h1>Docs</h1>
		<h1>Ecosystem</h1>
		<h1>Github</h1>
	</div>
	<div>
		<h1>Resources</h1>
		<h1>Development</h1>
		<h1>Code of Conduct</h1>
		<h1>Apache License</h1>
	</div>

</div>	
`
}

let site = {
	uuid: '/',
	children: [ one ] // , two, three, four, five, six,seven ]
}

let data = [
	site,
]

export default data;
