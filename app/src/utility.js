export const createActiveCssClass = (className, isActive) => {
  return `${className}${isActive ? '--active' : ''}`
}

export const removeFileExtension = fileName => {
  return fileName.split('.')[0]
}

export const createGuid = () => Math.random().toString(36).substring(2) +
(new Date()).getTime().toString(36)
