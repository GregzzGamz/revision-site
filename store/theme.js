export const state = () => ({
  darkmode: undefined
})

export const mutations = {
  SET_DARKMODE (state, bool) {
    state.darkmode = bool
  }
}

export const actions = {
  fetchDarkmode (context) {
    const theme = localStorage.getItem('theme')
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      context.commit('SET_DARKMODE', true)
      document.documentElement.classList.add('dark')
    } else {
      context.commit('SET_DARKMODE', false)
      document.documentElement.classList.remove('dark')
    }
  },
  changeDarkmodeClasses (context) {
    localStorage.setItem('theme', context.state.darkmode ? 'dark' : 'light')
    const classList = document.documentElement.classList
    context.state.darkmode ? classList.add('dark') : classList.remove('dark')
  },
  setDarkmodeTrue (context) {
    context.commit('SET_DARKMODE', true)
    context.dispatch('changeDarkmodeClasses')
  },
  setDarkmodeFalse (context) {
    context.commit('SET_DARKMODE', false)
    context.dispatch('changeDarkmodeClasses')
  }
}
