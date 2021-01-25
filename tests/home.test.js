import Home from '../src/routes/home';
import { render } from '@testing-library/preact';
import { h } from 'preact';
import db from "../src/lib/db";
import {getParams} from '../src/lib/browser'

describe('home', () => {
  it('has authenticate link', async () => {
    const {getByText} = await render(<Home />)

    expect(getByText('Authenticate')).toBeInTheDocument()
  })

  it('links authenticate link', async () => {
    const {getByText} = await render(<Home />)
    const link = getByText('Authenticate')

    expect(link.href).toContain('https://www.beeminder.com/apps/authorize')
  })

  describe('with mocked env', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules()
      process.env = { ...OLD_ENV };
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });

    it('includes client id', async () => {
      process.env.BM_CLIENT_ID = 'the_client_id'

      const {getByText} = await render(<Home />)
      const link = getByText('Authenticate')

      expect(link.href).toContain('the_client_id')
    })

    it('includes encoded redirect url', async () => {
      process.env.APP_URL = 'https://the_app_url'

      const {getByText} = await render(<Home />)
      const link = getByText('Authenticate')
      const search = encodeURIComponent('https://the_app_url')

      expect(link.href).toContain(search)
    })
  })

  it('creates database object', async () => {
    getParams.mockReturnValue(new URLSearchParams('?access_token=abc123&username=alice'))

    await render(<Home />)

    expect(db.set).toBeCalledWith("user_alice", "abc123")
  })

  it('does not add row to db if no params', async () => {
    await render(<Home />)

    expect(db.set).not.toBeCalled()
  })
})