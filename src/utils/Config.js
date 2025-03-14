/**
 * Configuration utilities for storing and retrieving settings.
 */

/**
 * Get all settings from script properties.
 *
 * @return {Object} The current settings
 */
function getSettings() {
	const properties = PropertiesService.getScriptProperties();
	const settings = properties.getProperties();

	// Default settings if not already set
	const defaultSettings = {
		apiKey: "",
		refreshInterval: "15",
		notificationEmail: "",
	};

	// Merge default with saved settings
	return { ...defaultSettings, ...settings };
}

/**
 * Save settings to script properties.
 *
 * @param {Object} settings - The settings to save
 */
function saveSettings(settings) {
	if (!settings) return;

	const properties = PropertiesService.getScriptProperties();

	// Save each setting
	for (const key of Object.keys(settings)) {
		properties.setProperty(key, settings[key]);
	}
}

/**
 * Get a specific setting value.
 *
 * @param {string} key - The setting key
 * @param {string} [defaultValue=''] - Default value if setting is not found
 * @return {string} The setting value
 */
function getSetting(key, defaultValue = "") {
	if (!key) return defaultValue;

	const properties = PropertiesService.getScriptProperties();
	const value = properties.getProperty(key);

	return value || defaultValue;
}

export { getSettings, saveSettings, getSetting };
