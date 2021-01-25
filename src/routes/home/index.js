import { h } from 'preact';
import style from './style.css';
import db from '../../lib/db';
import {getParams} from '../../lib/browser'

const Home = () => {
  const authenticateUrl = `https://www.beeminder.com/apps/authorize&client_id=${process.env.BM_CLIENT_ID}&redirect_url=${encodeURIComponent(process.env.APP_URL)}&response_type=token`;

  const params = getParams();
  const username = params && params.get('username');
  const accessToken = params && params.get('access_token');

  if(username && accessToken) {
    db.set(`user_${username}`, accessToken);
  }

  return (<div class={style.home}>
		<p>
    Click the button below to authenticate with Beeminder. Then configure your goals by adding <code>#autodial_max=10</code> to your fineprint.
    </p>
    <a href={authenticateUrl}>Authenticate</a>
	</div>)
};

export default Home;
