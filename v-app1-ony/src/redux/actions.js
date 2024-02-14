export const TOGGLE = 'TOGGLE'
export const HANDLE_OPEN_NAV = 'HANDLE_OPEN_NAV'
export const HANDLE_OPEN_USER = 'HANDLE_OPEN_USER'
export const PAGE_NAME = "PAGE_NAME"

export const toggle = (toggled) => ({
  type: TOGGLE, 
  payload: {
    toggled: toggled
  }
})

export const handleopennav = (opennav) => ({
  type: HANDLE_OPEN_NAV, 
  payload: {
    handleopennav: opennav
  }
})

export const handleopenuser = (openuser) => ({
  type: HANDLE_OPEN_USER, 
  payload: {
    handleopenuser: openuser
  }
})

export const pagename = (pagename) => ({
  type: PAGE_NAME, 
  payload: {
    pagename: pagename
  }
})


