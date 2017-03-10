var React = require('react');
var LogInForm = require('./log_in_form.jsx');
var SignUpForm = require('./sign_up_form.jsx');
var GuestForm = require('./guest_form.jsx');

var Welcome = React.createClass({

  render: function(){
    return <div id="welcome" className="group">
            <div className="group">
              <h1>Writer's Block</h1>
              <section className="welcome-buttons group">
                <LogInForm />
                <GuestForm />
                <SignUpForm />
              </section>
            </div>
          </div>
  }

});

module.exports = Welcome;
