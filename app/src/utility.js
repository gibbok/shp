/**
 * Create an active CSS class based on BEM methodology.
 * @param {string} className
 * @param {boolean } isActive
 */
export const createActiveCssClass = (className, isActive) => {
  return `${className}${isActive ? '--active' : ''}`
}

/**
 * Create a random GUID.
 */
export const createGuid = () => Math.random().toString(36).substring(2) +
(new Date()).getTime().toString(36)
