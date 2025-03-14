/**
 * Utility functions for the Neodesk Apps Script application.
 */

/**
 * Format a date into a readable string.
 *
 * @param {Date} date - The date to format
 * @return {string} The formatted date string
 */
export function formatDate(date) {
	if (!date) return "";

	return Utilities.formatDate(
		date,
		Session.getScriptTimeZone(),
		"yyyy-MM-dd HH:mm:ss",
	);
}

/**
 * Validate input data to ensure it matches expected format.
 *
 * @param {any} input - The input to validate
 * @param {string} type - The expected type
 * @return {boolean} True if valid, false otherwise
 */
export function validateInput(input, type) {
	switch (type) {
		case "string":
			return typeof input === "string";
		case "number":
			return typeof input === "number" && !Number.isNaN(input);
		case "date":
			return input instanceof Date && !Number.isNaN(input);
		case "array":
			return Array.isArray(input);
		case "object":
			return (
				typeof input === "object" && input !== null && !Array.isArray(input)
			);
		default:
			return false;
	}
}

/**
 * Generate a unique ID for tracking purposes.
 *
 * @return {string} A unique identifier
 */
export function generateUniqueId() {
	return Utilities.getUuid();
}

/**
 * Log message with timestamp.
 *
 * @param {string} message - The message to log
 * @param {string} [level='INFO'] - The log level
 */
export function log(message, level = "INFO") {
	const timestamp = formatDate(new Date());
	Logger.log(`[${level}] ${timestamp} - ${message}`);
}

/**
 * Returns the web application URL for the current script.
 * This URL can be used to access the web app externally.
 *
 * @return {string} The URL of the deployed web app
 */
export function getWebAppUrl() {
	const service = ScriptApp.getService();
	const url = service.getUrl();
	return url;
}

/**
 * Gets the OAuth token for the current script execution.
 * @returns {string} The OAuth token.
 */
export function getOAuthToken() {
	const token = ScriptApp.getOAuthToken();
	return token;
}
