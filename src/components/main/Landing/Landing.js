import BannerButtons from "./BannerButtons/BannerButtons";

export default function Landing() {
    return (
        <div className="main">
			<div className="container-fluid">
				<div className="row">
					<div className="entry-banner text-center">
						<h1 id = "hello">Hello, I'm</h1>
						<h1 id = "name">XXXX</h1>
						<h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
					</div>
				</div>
				<BannerButtons />
			</div>
		</div>
    )
}