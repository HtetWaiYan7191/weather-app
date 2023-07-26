import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../redux/store'

test('Details component renders correctly', () => {
  const mockDetailInfo = {
    name: 'City Name',
    main: {
      temp: 20,
      temp_max: 25,
      temp_min: 15,
      humidity: 50,
      sea_level: 1013,
      grnd_level: 1009,
    },
    weather: [{
      main: 'Cloudy',
      description: 'Partly cloudy',
    }],
    coord: {
      lat: 40.7128,
      lon: -74.0060,
    },
    wind: {
      speed: 10,
      deg: 180,
      gust: 15,
    },
    visibility: 5000,
    clouds: {
      all: 20,
    },
  };

  const tree = renderer.create(
    <Provider store={store}>
    <MemoryRouter>
      <Details />
    </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
