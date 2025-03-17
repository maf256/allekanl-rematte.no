// // Ture is dark mode

export default function theme(isDark) {
  return {
    Text_Title: isDark ? '#CCCCCC' : '#595959',
    Text_Logo: isDark ? '#FFFFFF' : '#000000',
    Text_Menu: isDark ? '#DDDDDD' : '#333333',
    Text_Paragraph: isDark ? '#D0D0D0' : '#505050',
    Icon_Color: isDark ? '#FFFFFF' : '#000000',
    Icon_bkColor: isDark ? '#606680' : '#F0F1F4',
    BC_Home: isDark ? '#494B50' : '#F8F8F8',
    BC_Home2: isDark ? '#606680' : '#FFFFFF',
    BC_Menu: isDark ? '#494b50' : 'white',
    Text_Title: isDark ? '#CCCCCC' : '#595959',
    Text_Logo: isDark ? '#FFFFFF' : '#000000',
    Text_Menu: isDark ? '#E0E0E0' : '#606060',
    primary: isDark ? '#606680' : '#2f3d66',
    secondary: isDark ? '#4A4F65' : '#161f3b',
  }
}

// export default function theme(isDark) {
//   return {
//     Text_Title: isDark ? '#bbbbb8' : '#787878',
//     Text_Logo: isDark ? '#fff' : '#000',
//     Text_Menu: isDark ? '#bbbbb4' : '#333',
//     Text_Paragraph: isDark ? '#D0D0D0' : '#505050',

//     Icon_Color: isDark ? '#ffffff' : '#000000',
//     Icon_bkColor: isDark ? '#606680' : '#F0F1F4',

//     primary: isDark ? '#606680' : '#F0F1F4',
//     secondary: isDark ? '#4A4F65' : '#E1E2E5',

//     // Recommended clearly for improved visibility in social share buttons
//     Social_Icon_Background: isDark ? '#606680' : '#E0E0E0',
//     Social_Icon_Color: isDark ? '#FFFFFF' : '#333333',

//     // Ensuring icons have enough contrast for readability
//     Icon_Color: isDark ? '#FFFFFF' : '#000000',
//     Icon_bkColor: isDark ? '#606680' : '#F0F1F4',
//   }
// }
