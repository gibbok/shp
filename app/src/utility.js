export const createActiveCssClass = (className, isActive) => {
  return `${className}${isActive ? '--active' : ''}`
}
