import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import HomeScreen from '../HomeScreen'
import WeatherCurrent from '../../components/WeatherCurrent'
import WeatherCoordinates from '../../components/WeatherCoordinates'

// Test d'un composant sans tester le comportement de composant enfants (Shallow rendering)
// Simuler un composant
jest.mock('../../components/WeatherCoordinates.tsx', () =>
  jest.fn().mockReturnValue(null),
)

jest.mock('../../components/WeatherCurrent.tsx', () =>
  jest.fn().mockReturnValue(null),
)

describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<HomeScreen />)
    wrapper.getByTestId('home-screen')
  })

  describe('Name of the group', () => {
    beforeEach(() => {
      jest.useFakeTimers()
      jest.setSystemTime(946684800000)
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByText('Jan 01, 2000')
    })

    test('Should contain current day', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByText('Saturday')
    })

    test('Should contain a section to get current weather', () => {
      ;(WeatherCurrent as jest.Mock).mockReturnValue(
        <View testID="mock-weather-current" />,
      )
      const wrapper = render(<HomeScreen />)
      wrapper.getByTestId('mock-weather-current')
    })

    test('Should contain a divider', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByTestId('home-screen-divider')
    })

    test('Should contain a section to get weather at given latitude & longitude', () => {
      ;(WeatherCoordinates as jest.Mock).mockReturnValue(
        <View testID="mock-weather-coordinates" />,
      )
      const wrapper = render(<HomeScreen />)
      wrapper.getByTestId('mock-weather-coordinates')
    })
  })
})
