export const GAME_TITLE = "Motle"

export const WIN_MESSAGES = ['Très Bien!', 'Magnifique', 'Bon Travail!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'pas assez de lettres'
export const WORD_NOT_FOUND_MESSAGE = 'Mot Introuvable'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Tous les indices révélés doivent être utilisés dans les suppositions ultérieures'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Pour une meilleure vision des couleurs'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Le mot était ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Doit utiliser ${guess} en position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Supposition doit contenir ${letter}`
export const ENTER_TEXT = 'Entrer'
export const DELETE_TEXT = 'Éliminer'
export const STATISTICS_TITLE = 'Statistiques'
export const GUESS_DISTRIBUTION_TEXT = 'Répartition devinée'
export const NEW_WORD_TEXT = 'Nouveau mot dans'
export const SHARE_TEXT = 'Partager'
export const TOTAL_TRIES_TEXT = 'Nombre total d\'essais'
export const SUCCESS_RATE_TEXT = 'Taux de réussite'
export const CURRENT_STREAK_TEXT = 'Série actuelle'
export const BEST_STREAK_TEXT = 'Meilleure séquence'
