export function fetchData() {
	const response = UrlFetchApp.fetch("https://api.example.com/data");
	const data = JSON.parse(response.getContentText());
	if (!data) {
		throw new Error("Failed to fetch data");
	}
	return data;
}
