export default {
  toggleTheme(state) {
    const theme = state.theme === 'dark' ? 'light' : 'dark';
    state.theme = theme;
  },
};
