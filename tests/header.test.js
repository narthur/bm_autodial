import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';
import { render } from '@testing-library/preact';

describe('Initial Test of the Header', () => {
	it('renders 0 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('Beeminder Autodialer');
		expect(context.find('Link').length).toBe(0);
	});

  it('has header', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Beeminder Autodialer')).toBeInTheDocument()
  })
});
