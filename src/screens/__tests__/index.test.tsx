import React from 'react'
import { View } from 'react-native'
import AppNavigator from '..'
import HomeScreen from '../HomeScreen'

// Simuler homescreen (Pas besoins de le passer a null car il s'affiche que dans le test dans lequel on va le modifier)
jest.mock('../HomeScreen', () => jest.fn())

describe('AppNavigator', () => {
  // On verifie que la page d'accueil s'affiche
  test('Should render HomeScreen by default', async () => {
    ;(HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home_screen" />,
    )
    const wrapper = render(<AppNavigator />)
  })
})
