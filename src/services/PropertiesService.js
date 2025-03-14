/**
 * Service class for Google Apps Script Properties Service
 */
class PropertyService {
	/**
	 * Get all script properties
	 * @return {Object} All script properties as an object
	 */
	getAllScriptProperties() {
		const properties = PropertiesService.getScriptProperties();
		return properties.getProperties();
	}

	/**
	 * Get a specific script property
	 * @param {string} key - The property key to retrieve
	 * @return {string} The property value
	 */
	getScriptProperty(key) {
		const properties = PropertiesService.getScriptProperties();
		return properties.getProperty(key);
	}

	/**
	 * Set a script property
	 * @param {string} key - The property key to set
	 * @param {string} value - The property value to set
	 */
	setScriptProperty(key, value) {
		const properties = PropertiesService.getScriptProperties();
		properties.setProperty(key, value);
	}

	/**
	 * Delete a script property
	 * @param {string} key - The property key to delete
	 */
	deleteScriptProperty(key) {
		const properties = PropertiesService.getScriptProperties();
		properties.deleteProperty(key);
	}

	/**
	 * Get all user properties
	 * @return {Object} All user properties as an object
	 */
	getAllUserProperties() {
		const properties = PropertiesService.getUserProperties();
		return properties.getProperties();
	}

	/**
	 * Get a specific user property
	 * @param {string} key - The property key to retrieve
	 * @return {string} The property value
	 */
	getUserProperty(key) {
		const properties = PropertiesService.getUserProperties();
		return properties.getProperty(key);
	}

	/**
	 * Set a user property
	 * @param {string} key - The property key to set
	 * @param {string} value - The property value to set
	 */
	setUserProperty(key, value) {
		const properties = PropertiesService.getUserProperties();
		properties.setProperty(key, value);
	}

	/**
	 * Get settings combining script properties and other sources
	 * @return {Object} Combined settings
	 */
	getSettings() {
		const properties = PropertiesService.getScriptProperties();
		const settings = properties.getProperties();

		// Placeholder for additional settings sources
		const additionalSettings = {};

		// Merge all settings
		return { ...settings, ...additionalSettings };
	}
}

// Export as singleton
const propertyService = new PropertyService();
export default propertyService;
