/**
 * Configuration utilities for storing and retrieving settings.
 */

/**
 * Get all settings from script properties.
 *
 * @return {Object} The current settings
 */
export function getSettings() {
	const properties = PropertiesService.getScriptProperties();
	const settings = properties.getProperties();
	return settings;
}

/**
 * Save settings to script properties.
 *
 * @param {Object} settings - The settings to save
 */
export function saveSettings(settings) {
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
export function getSetting(key, defaultValue = "") {
	const properties = PropertiesService.getScriptProperties();
	const value = properties.getProperty(key);
	return value || defaultValue;
}
