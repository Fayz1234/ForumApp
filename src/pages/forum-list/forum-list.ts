import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListDetailsPage } from '../forum-list-details/forum-list-details';
import { TopicDetailPage } from '../topic-detail/topic-detail';
/**
 * Generated class for the ForumListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forum-list',
  templateUrl: 'forum-list.html',
})
export class ForumListPage {
	forumList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Hard code Forum List data
    //id, title, description details are bind in HTML
    this.forumList = [{

  		id : '1',
  		title: 'Announcements ',
  		shortDescp: 'General questions relating to Joomla! 3.x. Please consider the availability of third-party templates and extensions when deciding which Joomla version to use.	',
  		details: 'I have a website I am working on and am using Joomla 3.7.3 It lives in a subdirectory on my server: mydomain.com/subdirectory I have htaccess code which works great for the homepage. However - when I ADD a page to the main menu - it ignores the htaccess and adds the /mysubdirectory/ back into the public URL.So what I want to be mydomain.com/about appears as [i]mydomain.com/mysubdirectory/about[/i] AND when I click on the homepage - it then gives me mydomain.com/mysubdirectory/ instead of mydomain.com.Its a live site so I really cant experiment too much with it. But if anyone can add some clarity - it would really help.Thanks!',

  	},
  	{
  		  		id : '1',
  		title: 'General Questions/New to Joomla! 3.x ',
  		shortDescp: 'Need help installing Joomla! 3.x? For all Joomla! 3.x installation issues please use this forum. Note: Users creating new sites can use either version 2.5 or 3.x. Please consider the availability of third-party templates and extensions when deciding which Joomla version to use.	',
  		details: 'For all your questions relating to Joomla 3.X.x that do not relate to any of the other Joomla 3.X.x Board Titles. If it is not a question about Joomla 3.X.x specifically or an Extension, etc., then it does not belong here. Questions relating to the Joomla Extensions Directory (JED) for example should go in the Sites and Infrastructure child forum specifically for this topic. Reporting "bugs" can be a tricky one sometimes, to see if it is an easily (relatively speaking) problem post it here, Moderators can always move it to the Joomla 3.X.x Development Q&T forum once it has been confirmed as a bug or potential bug requiring a detailed look by Developers - who for the most part are too busy to get the chance to visit these "public" forums too often.'


  	},
  	{
  		  		id : '1',
  		title: 'Installation Joomla! 3.x ',
  		shortDescp: 'Need help with the Administration of your Joomla! 3.x site? This is the spot for you.	',
  		details: 'long details'


  	},
  	{
  		  		id : '1',
  		title: 'Administration Joomla! 3.x ',
  		shortDescp: 'Need help upgrading your Joomla! website or converting to Joomla! 3.x? Please consider the availability of third-party templates and extensions when deciding which Joomla version to use',
  		details: 'he symptom checklist is as follows:Did you turn off New User Registration in the Options of User Manager? Since J3.4.0The User Registration option is switched OFF by default for new Joomla installations  If you have upgraded from an older version then you may need to change it yourself: On all joomla installations, unless the module code is deleted, the registration form is still available even when you dont have a menu item pointing to it. Spam bots are preprogammed with the non sef link to the module (likewise for drupal and wordpress targetting bots)'


  	},
  	{
  		  		id : '1',
  		title: 'Security in Joomla! 3.x ',
  		shortDescp: 'Discussion regarding Joomla! 3.x security issues.	',
  		details: '- It doesnt take into consideration the images folder and the media folder. These folders may contain malicious PHP files that may be copied back and that may not be caught by a PC scan.- Some websites have custom extensions that need a lot of work to re-install on the target website. Additionally, these custom extensions may contain some malicious files.- It assumes that the user has all of the installed extensions as packages.- It doesnt take into consideration that the hack might be outside the public_html directory (this is especially the case on shared hosts).- It doesnt take into consideration that the hack might be caused by a cron job (which is the hardest hack to find).- It doesnt take into consideration the .htaccess file - which is typically copied as is from the infected website to the clean website and hacks there are typically not caught by any scanner.- It is not as easy as it seems - in fact - large websites must avoid implementing this method. Making this method look as a very straightforward is misleading and may cause a lot of frustration for website owners/administrators.- It doesnt take into consideration the future of the website - applying the above without further protection will probably get the website hacked the next day.'


  	},
  	{
  		  		id : '1',
  		title: 'Templates for Joomla! 3.x ',
  		shortDescp: 'This forum is for general questions about extensions for Joomla! 3.x.	',
  		details: 'I have modules: latest articles and related articles in a top section of my template. I would like the related articles module to show when I am on an article page, and latest articles to be displayed on category pages/blog pages and the home page. The issue is that I cannot select down to the article level of the menu when choosing where to display the module in the module display options. I can only tell it not to display on certain categories.I am happy to do this any way but I would like some advice on the best/right way to do this in Joomla 3. I see that I could make my own module that changes content depending on route. Or I could Edit each of the modules so that they only display in the place I want them to (but I dont think this is a very elegant way of doing it).'


  	},
  	{
  		  		id : '1',
  		title: 'Search Engine Optimization (Joomla! SEO) in Joomla! 3.x ',
  		shortDescp: 'iscuss Search Engine Optimization in relation to Joomla! 3.x. This forum will also have discussions on SEF/SEO Joomla! 3.x extensions.	',
  		details: 'lHi - I am new to Joomla. I have tried several other CMS and think Joomla is my choice, however I can not download a joomla template from joomla unless I have a subdomain.joomla.com website! What are my choices? Do I need to hack into one of the 2 that came with my install folder? I am developing on localhost.'


  	},
  	]
  }

  //Life cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumListPage');
  }

  //Custom Method to Push Page with Parameters
  func(x){
  	console.log(x);
  	this.navCtrl.push(TopicDetailPage,{"selected_Item": x});
  }

}
