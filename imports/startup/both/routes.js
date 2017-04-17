import React from 'react';
import {mount} from 'react-mounter';

import BlogLayout from '../../ui/layouts/blog.jsx';
import PostList from '../../ui/containers/post_list';
import PostPage from '../../ui/containers/post_page';

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(BlogLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    mount(BlogLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});
