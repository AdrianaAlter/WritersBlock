var SessionActions = require('../actions/session_actions.js');
var UserActions = require('../actions/user_actions.js');
var ProjectActions = require('../actions/project_actions.js');
var PrizeActions = require('../actions/prize_actions.js');
var PurchaseActions = require('../actions/purchase_actions.js');
var TrophyActions = require('../actions/trophy_actions.js');

ApiUtil = {

  fetchSingleUser: function (id) {
    $.ajax({
      url: "/api/users/" + id,
      type: "GET",
      dataType: "json",
      success: function (user) {
        UserActions.singleUserReceived(user);
      },
      error: function () {
        console.log('Error in AJAX request to fetch single user via ApiUtil');
      }
    });
  },

  adjustPoints: function(id, points){
    $.ajax({
      type: "PATCH",
      url: "/api/users/" + id,
      data: {points: points},
      dataType: "json",
      success: function(user){
        UserActions.singleUserReceived(user);
      },
      error: function(){
        console.log('Error in ApiUtil adjustPoints');
      }
    });
  },

  acquirePrize: function(id, prize){
    $.ajax({
      type: "PATCH",
      url: "/api/users/" + id,
      data: {prize: prize},
      dataType: "json",
      success: function(user){
        UserActions.singleUserReceived(user);
        PurchaseActions.allPurchasesReceived(user.prizes);
      },
      error: function(){
        console.log('Error in ApiUtil acquirePrize');
      }
    });
  },

  saveSetting: function(id, setting){
    $.ajax({
      type: "PATCH",
      url: "/api/users/" + id,
      data: {setting: setting},
      dataType: "json",
      success: function(user){
        UserActions.singleUserReceived(user);
        SessionActions.currentUserReceived(user);
      },
      error: function(){
        console.log('Error in ApiUtil saveSetting');
      }
    });
  },

  winTrophy: function(id, trophy){
    $.ajax({
      type: "PATCH",
      url: "/api/users/" + id,
      data: {trophy: trophy},
      dataType: "json",
      success: function(user){
        UserActions.singleUserReceived(user);
        SessionActions.currentUserReceived(user);
      },
      error: function(){
        console.log('Error in ApiUtil winTrophy');
      }
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
        type: "GET",
        url: "/api/session",
        dataType: "json",
        success: function (currentUser) {
          debugger
          SessionActions.currentUserReceived(currentUser);
          UserActions.singleUserReceived(currentUser);
          PurchaseActions.allPurchasesReceived(currentUser.prizes);
        },
        error: function () {
          console.log('Error fetching current user');
        },
        complete: function () {
          completion && completion();
        }
      });
  },

  logIn: function(userInfo, callback){
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
      }
    });
  },

  signUp: function (userInfo, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
        console.log('Error in ApiUtil sign up');
      }
    });
  },

  logOut: function(){
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function () {
          SessionActions.logOut();
      },
      error: function(){
        console.log('Error in ApiUtil logout');
      }
    });
  },

  fetchAllProjects: function(){
    $.ajax({
      type: "GET",
      url: "/api/projects",
      dataType: "json",
      success: function(projects){
        ProjectActions.allProjectsReceived(projects);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllProjects');
      }
    });
  },

  fetchSingleProject: function(id){
    $.ajax({
      type: "GET",
      url: "/api/projects/" + id,
      dataType: "json",
      success: function(project){
        ProjectActions.singleProjectReceived(project);
      },
      error: function(){
        console.log('Error in ApiUtil fetchSingleProject');
      }
    })
  },

  createProject: function(title){
    $.ajax({
      type: "POST",
      url: "/api/projects",
      dataType: "json",
      data: {title: title},
      success: function(projects){
        ProjectActions.allProjectsReceived(projects);
      },
      error: function(){
        console.log('Error in ApiUtil createProject');
      }
    });
  },

  editProject: function(id, body, count){
    $.ajax({
      type: "PATCH",
      url: "/api/projects/" + id,
      data: {body: body, count: count},
      dataType: "json",
      success: function(project){
        ProjectActions.singleProjectReceived(project);
      },
      error: function(){
        console.log('Error in ApiUtil editProject');
      }
    })
  },

  deleteProject: function(id){
    $.ajax({
      type: "DELETE",
      url: "/api/projects/" + id,
      dataType: "json",
      success: function(projects){
        ProjectActions.allProjectsReceived(projects);
        window.location.href = "/";
      },
      error: function(){
        console.log('Error in ApiUtil deleteProject');
      }
    });
  },

  fetchAllPrizes: function(){
    $.ajax({
      type: "GET",
      url: "/api/prizes",
      dataType: "json",
      success: function(prizes){
        PrizeActions.allPrizesReceived(prizes);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllPrizes');
      }
    });
  },

  fetchAllTrophies: function(){
    $.ajax({
      type: "GET",
      url: "/api/trophies",
      dataType: "json",
      success: function(trophies){
        TrophyActions.allTrophiesReceived(trophies);
      },
      error: function(trophies){
        console.log('Error in ApiUtil fetchAllTrophies');
      }
    });
  }

};

module.exports = ApiUtil;
