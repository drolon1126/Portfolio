import React from 'react';
import ReactContactForm from 'react-mail-form';

const Contact = props => {
  return (
    <div id="contact">
      <h3 class="title">Contact Me</h3>
      <div className='cform'>
      <form action="/action_page.php">
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit" />
      </form>
      </div>

    </div>
  );
}

export default Contact;
