/**
 * Service class for Google Drive operations
 */
class DriveService {
	/**
	 * Get a folder by its ID
	 * @param {string} folderId - The ID of the folder
	 * @return {Folder} The folder object
	 */
	getFolderById(folderId) {
		return DriveApp.getFolderById(folderId);
	}

	/**
	 * Get files in a folder by name
	 * @param {Folder} folder - The folder to search in
	 * @param {string} fileName - The name of the file to find
	 * @return {FileIterator} Iterator of matching files
	 */
	getFilesByName(folder, fileName) {
		return folder.getFilesByName(fileName);
	}

	/**
	 * Get all files in a folder
	 * @param {Folder} folder - The folder to get files from
	 * @return {FileIterator} Iterator of files
	 */
	getFiles(folder) {
		return folder.getFiles();
	}

	/**
	 * Get all subfolders in a folder
	 * @param {Folder} folder - The folder to get subfolders from
	 * @return {FolderIterator} Iterator of folders
	 */
	getFolders(folder) {
		return folder.getFolders();
	}

	/**
	 * Move a file to a specified folder
	 * @param {File} file - The file to move
	 * @param {Folder} folder - The destination folder
	 * @return {File} The moved file
	 */
	moveFileToFolder(file, folder) {
		return file.moveTo(folder);
	}

	/**
	 * Get a file by its ID
	 * @param {string} fileId - The ID of the file
	 * @return {File} The file object
	 */
	getFileById(fileId) {
		return DriveApp.getFileById(fileId);
	}
}

// Export as singleton
const driveService = new DriveService();
export default driveService;
