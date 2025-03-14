/**
 * Service class for Google Sheets operations
 */
class SheetService {
	/**
	 * Create a new spreadsheet with the given name
	 * @param {string} name - The name for the new spreadsheet
	 * @return {Spreadsheet} The created spreadsheet
	 */
	createSpreadsheet(name) {
		return SpreadsheetApp.create(name);
	}

	/**
	 * Open a spreadsheet by its ID
	 * @param {File} file - The spreadsheet file to open
	 * @return {Spreadsheet} The opened spreadsheet
	 */
	openSpreadsheet(file) {
		return SpreadsheetApp.open(file);
	}

	/**
	 * Get a sheet by name from a spreadsheet, or create it if it doesn't exist
	 * @param {Spreadsheet} spreadsheet - The spreadsheet to search in
	 * @param {string} sheetName - The name of the sheet to find or create
	 * @return {Sheet} The sheet object
	 */
	getOrCreateSheet(spreadsheet, sheetName) {
		let sheet = spreadsheet.getSheetByName(sheetName);

		if (!sheet) {
			sheet = spreadsheet.insertSheet(sheetName);
		}

		return sheet;
	}

	/**
	 * Clear the content of a sheet
	 * @param {Sheet} sheet - The sheet to clear
	 * @return {Sheet} The cleared sheet
	 */
	clearSheet(sheet) {
		return sheet.clear();
	}

	/**
	 * Append a row to a sheet
	 * @param {Sheet} sheet - The sheet to append to
	 * @param {Array} rowData - The data to append as a row
	 * @return {Sheet} The sheet with the appended row
	 */
	appendRow(sheet, rowData) {
		return sheet.appendRow(rowData);
	}
}

// Export as singleton
const sheetService = new SheetService();
export default sheetService;
