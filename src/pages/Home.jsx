import React from 'react';
import RoleIMG from '../assets/images/moderator.png';
import StatsIMG from '../assets/images/stats.png';
import EmojiIMG from '../assets/images/all.png';
import GreetIMG from '../assets/images/greet.png';
import '../assets/styles/pages/home.scss';
import BottomCTA from '../components/BottomCTA';

export default function Home () {

	return (
		<div id="home">
    		<div id="home-hero">
				<div id="home-hero-text">
					<h1 id="home-hero-text-title">Hi i'm L U C Y</h1><br/>
					<p id="home-hero-text-slogan"><span className="text-highlight">LUCY</span> comes with various features for you and your server</p>
				</div><br/>
				<div id="home-hero-cta">
					<a id="home-hero-cta-invite" href="https://invite-lucy.netlify.app/" rel="noreferrer noopener">Invite now</a>
				</div>
					<div id="home-hero-circles">
						<svg height="500" width="1020">
							<circle cx="140" cy="360" r="140" fill="#242424"/>
							<circle cx="300" cy="40" r="40" fill="#242424"/>
							<circle cx="700" cy="130" r="15" fill="#242424"/>
							<circle cx="900" cy="120" r="100" fill="#242424"/>
							<circle cx="950" cy="400" r="70" fill="#242424"/>
							<circle cx="560" cy="450" r="25" fill="#242424"/>
						</svg>
					</div>
				<div id="nitropay-home-top" class="nitropay" />
    		</div>
    		<section>
      			<div className="text-area">
        			<h3 className="section-title"><span className="text-highlight">Amazing</span> Greet<br/> Messages</h3>
        			<p className="section-body short">Say welcome (or goodbye) to your members with an rendered image (or just a simple message).</p>
        		</div>
				<img height="15rem!important;" alt="Booster Bot provides vast verity and options to set custom greet messages" src={GreetIMG}/>
    		</section>
    		<section className="reverse">
				<div className="text-area">
					<h3 className="section-title"><span className="text-highlight">Moderator</span><br/> Commands</h3>
					<p className="section-body">Moderation tools to help you and your moderators with kick, ban and mute commands, as well as extensive logging options</p>
        		</div>
				<img alt="Booster Bot's features for server boosters - custom/personal role" src={RoleIMG}/>
    		</section>
			<div id="nitropay-home-middle" class="nitropay" />
			<section>
				<div className="text-area">
					<h3 className="section-title"><span className="text-highlight">Maintain</span> Server<br/> Booster stats</h3>
					<p className="section-body">Want so see who boosted your server and when? Or want to arrange boosters on basis of number of boosts and old to new booster?<br/>Booster Bot got you for tracking and maintaining booster stats for your server.</p>
				</div>
				<img height="15rem!important;" alt="Booster Bot stores and maintains booster's data and stats for you." src={StatsIMG}/>
			</section>
			<section className="reverse">
				<div className="text-area">
					<h3 className="section-title"><span className="text-highlight">multipurpose</span> discord bot<br/> check out what it can do!</h3>
					<p className="section-body">Customizable, ᴡᴇʟᴄᴏᴍᴇ ɪᴍᴀɢᴇꜱ, ᴀɴɪᴍᴇ, ᴍᴜꜱɪᴄ, ᴠᴏɪᴄᴇ/ᴛᴇxᴛ ʟᴇᴠᴇʟꜱ, ʀᴇᴀᴄᴛɪᴏɴ ʀᴏʟᴇꜱ, ʟᴏɢꜱ,  ᴍᴏᴅᴇʀᴀᴛɪᴏɴ, ᴀɴᴅ ᴍᴀɴʏ ᴍᴀɴʏ ᴍᴏʀᴇ!</p>
				</div>
				<img id="homepage-snowflake-image" alt="We have two GIANT community servers for Dank Memer. One is for bot support, the other is for hanging out with other users and giveaways!" src={EmojiIMG}/>
			</section>
			<div id="nitropay-home-bottom" class="nitropay" />
			<br/>
			<BottomCTA/>
			<span data-ccpa-link="1"></span>
  		</div>
	);
}