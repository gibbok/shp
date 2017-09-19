export const createActiveCssClass = (className, isActive) => {
  return `${className}${isActive ? '--active' : ''}`
}

export const removeFileExtension = (fileName) => {
  return fileName.split('.')[0]
}

export const replaceCharacters = (str, source, target) => {
  return str.split(source).join(target)
}
