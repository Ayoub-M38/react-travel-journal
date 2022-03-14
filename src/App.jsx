import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
	const travelData = data.map((item) => {

		
		return (
			<Card
				title={item.title}
				location={item.location.toUpperCase()}
				googleMapsUrl={item.googleMapsUrl}
				startDate={item.startDate}
				endDate={item.endDate}
				description={item.description}
				imageUrl={item.imageUrl}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			{travelData}
		</div>
	);
}

export default App;
