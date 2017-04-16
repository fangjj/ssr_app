import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Posts.find().count() === 0) {
  	Posts.insert({
	    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
	  });
	  Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
	  Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
  }
});