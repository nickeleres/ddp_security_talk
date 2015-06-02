if (Meteor.isClient) {

  Router.route('home', {
    path: '/',
    template: 'usersTemplate',
    waitOn: function(){
      console.log('waitOn has run');
      return Meteor.subscribe('users');
      this.next();
    }
  })

  Template.usersTemplate.helpers({
    users: function(){
      return Meteor.users.find();
    }
  });
}

if (Meteor.isServer) {
    Meteor.publish('users', function(){
      if(this.userId === '4wnRxRXZSBz6ivvAY'){
        console.log(this.userId);
        return Meteor.users.find();
      }
    })
}
