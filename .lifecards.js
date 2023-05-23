
let css = {
content:
`
<style>
body {
	font-family: 'Poppins', sans-serif;
	xfont-size:  2vw;
	line-height: 2em;
	margin: 0px;
	padding: 0px;
}
h1 {
	font-family: 'Poppins', sans-serif;
	font-weight:  400;
	line-height:  1.25em;
	font-size: 3.0em;
}
h2 {
	font-family: 'Poppins', sans-serif;
	font-weight:  300;
	line-height:  1.25em;
}

centerer {
	display: block;
	margin: auto;
	width: 70vw;
}

callout {
	display: flex;
	align-items: center;
	flex-direction: row;
	font-family: 'Poppins', sans-serif;
	gap: 5%;
}

.forceabove {

}

callout div {
	flex: 1 1 0;
}

callout img {
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url(/assets/15flipped.png);
	object-fit: contain;
	max-width: 50vw;
	width:50%;
}

button {
	font-family: 'Poppins', sans-serif;
	font-size: 0.95em;
	border-radius: 5px;
	padding: 10px 30px 10px 30px;
	margin: 10px 10px 0 0;
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
	callout {
		flex-direction: column;
	}
	.forceabove {
		flex-direction: column-reverse;
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
`
}

let one = {
content:
`
<centerer>

<br/>
<div style="display:flex;justify-content:space-between">
<a href="/" style="font-size:1.4em">⚪ Orbital Foundation</a>
<span style="flex-basis: auto"></span>
<span style="flex-basis: auto"></span>
<span style="flex-basis: auto"></span>
<a href="https://docs.orbital.foundation">Docs</a>
<a href="https://github.com/orbitalfoundation"><img src="/assets/github.png" style="width:32px;background:white;border-radius:32px"/></a>
</div>
<br/>

<callout class="forceabove">
	<div>
		<h1>Orbital is an open source platform for intelligent agents</h1>
		<p>Create interactive digital twins, simulations, games, AR experiences, and open metaverses.</p>
		<button>Get<br/>Started</button>
		<button>Learn<br/>More</button>
	</div>
	<img src="/assets/25.png"/>
</callout>
</centerer>
<br/>
<br/>
`
}

let two = {
stylize:{backgroundColor:"rgba(0,0,0,0.1)"},
content:
`
<centerer>
<br/>
<h1>Examples</h1>
<div style="border:2px solid grey; width: 100%"></div>
<br/>
<br/>

<!--
<callout>
	<img src="/assets/35flipped.png"/>
	<div style="">
		<h2>Modeling Urban Life</h2>
		<p>People in a community need to find ways to work together to solve local issues. Can we make these tools accessible to all stakeholders? Here we explore a simple car simulation to help understand traffic patterns and possible road-blocks.</p>
		<button>Visit Car World</button>
	</div>
</callout>
<br/>
<br/>

<callout>
	<img src="/assets/51.png"/>
	<div>
		<h2>Deep Learning Modules</h2>
		<p>Can non technical people take advantage of AI and newer emerging techologies? This example explores scripting a lightweight app that uses computer vision.</p>
		<button>Run CV Demo</button>
	</div>
</callout>
<br/>
<br/>

<callout>
	<img src="/assets/51.png"/>
	<div>
		<h2>Deep Learning Modules</h2>
		<p>Can non technical people take advantage of AI and newer emerging techologies? This example explores scripting a lightweight app that uses computer vision.</p>
		<button>Enter Virtual Venice</button>
	</div>
</callout>
<br/>
<br/>
-->

<callout>
	<img src="/assets/36.png"/>
	<div>
		<h2>Augmented Ecosystems</h2>
		<p>Can we use a combination of human and machine reasoning to understand problems that cross many boundaries?
			In this example we explore a coral reef to examine human and natural impacts.</p>
		<button>Visit Cloud Reef</button>
	</div>
</callout>

</centerer>
<br/>
<br/>
`	
}

let three = {
content:
`
<centerer>
<h1>Orbital – A blue-sky reinterpretation of personal computing</h1>
<div style="border:2px solid grey; width: 100%"></div>
<br/>
<h2>Personal Agency</h2>
We see a future of “human scale” software where everybody can create and share lightweight interactive apps as easily as we share static images, text and video today. Orbital will make it easy for a farmer to describe a new deep learning leaf recognition algorithm to their farmbot. To allow a child to create and share a pet recognizer. A fitness trainer to create an interactive workout. An artist to create a vignette of the experience of walking beneath cherry blossoms in the spring.
<h2>Sense Making</h2>
Today millions of us rely on software agents to help us navigate and understand our increasingly complex world. Emerging technologies such as deep learning algorithms, computer vision, augmented reality glasses and many other new innovations are useful, but only they can meet our subjective needs. Orbital will make new technologies dynamically loadable such that professional developers and novices can define services on demand.
<h2>Digital Agents</h2>
We envision software apps, services, libraries, databases and agents as being defined by standardized portable components, able to interoperate, able to be wired together easily and able to run on consumer devices or migrate over the cloud as needed. Apps will be composed of shared services and run persistently in the background or in a distributed computational soup.
<h2>New Horizons</h2>
Humanity faces many grand challenges from global warming to unrestricted AI. We are communities as much if not more so than individuals. A synthesis of human and machine reasoning can help us 'see' better; to model near term collective outcomes and to navigate these issues together. We see Orbital as a platform that allows us to leverage our tools, build on each others capabilities and to face the future.
</centerer>
<br/>
`
}

let four = {
stylize:{backgroundColor:"rgba(0,0,0,0.1)"},
content:
`
<centerer>
<hr/>
<div style="display:flex;justify-content:space-between">

	<div>
		<h2>Links</h2>
		<a href="https://blog.orbital.foundation">Blog</a><br/>
		<a href="https://docs.orbital.foundation">Docs</a><br/>
		<a href="https://ecosystem.orbital.foundation">Ecosystem</a><br/>
		<a href="https://github.com/orbitalfoundation">Github</a><br/>
	</div>

	<div>
		<h2>Other Resources</h2>
		<a href="https://wiki.orbital.foundation">Development Wiki</a><br/>
		<a href="https://twitter.com/orbitalfdn">@orbitalfdn on Twitter</a><br/>
		<!--
		<a href="https://orbital.foundation/apache-license">Apache Open Source License</a><br/>
		<a href="https://orbital.foundation/code-of-conduct">Code of Conduct</a><br/>
		-->
	</div>

</div>	
<br/>
`
}

let site = {
	uuid: '/',
	children: [ css, one, two, three, four ]
}

let data = [
	site,
]

export default data;
