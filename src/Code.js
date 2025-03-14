function hello() {
	const token = ScriptApp.getOAuthToken();
	Logger.log(token);
}

function testSecretAccess() {
	// const projectId = "your-project-id";
	// const secretId = "your-secret-id";
	// const versionId = "latest";

	// const endpoint = `https://secretmanager.googleapis.com/v1/projects/${projectId}/secrets/${secretId}/versions/${versionId}:access`;
	const endpoint =
		"https://secretmanager.googleapis.com/v1/projects/1044989938675/secrets/GOOGLE_GEMINI_API_KEY";
	const token = ScriptApp.getOAuthToken();
	const options = {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	};
	const response = UrlFetchApp.fetch(endpoint, options);
	Logger.log(response.getContentText());
}

// src/utils/helpers.js
function generateUniqueId() {
	return Utilities.getUuid();
}

// src/Code.js
const title = "Example WebApp";
function doGet(e) {
	return HtmlService.createTemplateFromFile("template")
		.evaluate()
		.setTitle(title);
}

function doPost(e) {
	const { name, message } = e.parameter;
	saveData(name, message);
	return HtmlService.createTemplateFromFile("template")
		.evaluate()
		.setTitle(title);
}

function saveData(name, message) {
	const { spreadSheetId, sheetName } = getSettings();
	const sheet =
		SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
	if (sheet.getLastRow() === 0) {
		sheet.appendRow(["ID", "Name", "Message", "Timestamp"]);
	}
	const id = generateUniqueId();
	const timestamp = new Date();
	sheet.appendRow([id, name, message, timestamp]);
}

function getSettings() {
	const properties = PropertiesService.getScriptProperties();
	const settings = properties.getProperties();
	return {
		spreadSheetId: settings.spreadSheetId,
		sheetName: settings.sheetName,
	};
}

function getData() {
	const { spreadSheetId, sheetName } = getSettings();
	const sheet =
		SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
	const data = sheet.getDataRange().getValues();
	return data.slice(1);
}
