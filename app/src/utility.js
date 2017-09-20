export const createActiveCssClass = (className, isActive) => {
  return `${className}${isActive ? '--active' : ''}`
}

export const removeFileExtension = (fileName) => {
  return fileName.split('.')[0]
}
