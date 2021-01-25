import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({
	adapter: new Adapter()
});

jest.mock("../../src/lib/db")
jest.mock('../../src/lib/browser')