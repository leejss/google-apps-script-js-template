import { getSetting } from "./utils/Config";

const title = getSetting("title", "My Web App");
const entryTemplateName = getSetting("entryPageTemplate", "Template");

function doGet(e) {
	return HtmlService.createTemplateFromFile(entryTemplateName)
		.evaluate()
		.setTitle(title);
}

function doPost(e) {
	const { name, message } = e.parameter;
	saveData(name, message);
	return HtmlService.createTemplateFromFile(entryTemplateName)
		.evaluate()
		.setTitle(title);
}

// function saveData(name, message) {
// 	const { spreadSheetId, sheetName } = getSettings();
// 	const sheet =
// 		SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
// 	if (sheet.getLastRow() === 0) {
// 		sheet.appendRow(["ID", "Name", "Message", "Timestamp"]);
// 	}

// 	const id = generateUniqueId();
// 	const timestamp = new Date();
// 	sheet.appendRow([id, name, message, timestamp]);
// }

// function getSettings() {
// 	const properties = PropertiesService.getScriptProperties();
// 	const settings = properties.getProperties();
// 	return {
// 		spreadSheetId: settings.spreadSheetId,
// 		sheetName: settings.sheetName,
// 	};
// }

// function getData() {
// 	const { spreadSheetId, sheetName } = getSettings();
// 	const sheet =
// 		SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
// 	const data = sheet.getDataRange().getValues();
// 	return data.slice(1);
// }
