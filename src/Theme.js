import { useImmer } from 'use-immer'

function changeTheme(clr) {
  const [themeColor, updateThemeColor] = useImmer({
    color: clr
  });
}
