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
   * Get all files in a folder and its subfolders recursively
   * @param {Folder} folder - The folder to search files in
   * @param {string} [path=''] - The current path (used internally for recursion)
   * @return {Array} Array of objects containing file and path information
   */
  getFilesRecursively(folder, path = "") {
    const folderName = folder.getName();
    const currentPath = path ? `${path}/${folderName}` : folderName;
    const result = [];

    // Get files in current folder
    const files = folder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      result.push({
        file: file,
        path: currentPath,
      });
    }

    // Get subfolders and recursively get their files
    const subFolders = folder.getFolders();
    while (subFolders.hasNext()) {
      const subFolder = subFolders.next();
      const subFolderFiles = this.getFilesRecursively(subFolder, currentPath);
      result.push(...subFolderFiles);
    }

    return result;
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
