let appData = {
  name: "Gmail",
  emailAddress: "user@gmail.com",
  mailboxes: [
    {
      name: "inbox",
      emails: [
        {
          subject: "Checking In",
          from: "Jason",
          message: "Just reaching out to see how you are doing."
        },
        {
          subject: "Basketball?",
          from: "James",
          message: "Are we playing basketball today?"
        },
        {
          subject: "Plans this Weekend",
          from: "Nick",
          message: "Let me know what the plan is."
        },
        {
          subject: "Class Attendance",
          from: "Xavier",
          message: "I wont be in class today."
        },
      ]
    },
    {
      name: "sent",
      emails: [],
    },
    {
      name: "drafts",
      emails: [
        {
          subject: "Checking In",
          to: "Jason",
          message: "I am doing well. Thanks for checking in."
        },
        {
          subject: "Basketball?",
          to: "James",
          message: "Yes, I planned on playing basketball today."
        },
      ],
    },
    {
      name: "spam",
      emails: [],
    },
    {
      name: "trash",
      emails: [],
    }
  ],
  contacts: [
    { name: "James", lastMessage: "Are we playing basketball today?" },
    { name: "Nick", lastMessage: "Let me know what the plan is." },
    { name: "Xavier", lastMessage: "I wont be in class today." },
    { name: "Jason", lastMessage: "Today, we are going to rock it!" }
  ],
}


let mailboxNames = [];
let emailsList = [];

// Inbox index in mailboxes array. Used to get emails in the inbox.
let inboxIndex = appData.mailboxes.findIndex(mailbox => mailbox.name === 'inbox');

// Drafts index in mailboxes array. Used to get emails in drafts.
let draftsIndex = appData.mailboxes.findIndex(mailbox => mailbox.name === 'drafts');

// Sent mailbox index in mailboxes array.
let sentIndex = appData.mailboxes.findIndex(mailbox => mailbox.name === 'sent');


// Mailbox names. Loop through mailbox array and add only thr names of the mailbox to the array.
appData.mailboxes.forEach((mailbox) => {
  mailboxNames.push(mailbox.name);
})

// Set emailsList equal to the array of emails in inbox using inbox index.
emailsList = appData.mailboxes[inboxIndex].emails;

// Removes the first draft in the drafts mailbox and adds it to the sent emails array. This is to simulate sending an email
appData.mailboxes[sentIndex].emails.push(appData.mailboxes[draftsIndex].emails.shift());

// Add a draft to the drafts mailbox
appData.mailboxes[draftsIndex].emails.push(
  {
    subject: "Basketball?",
    to: "James",
    message: "I actually don't think I can play basketball today. Something came up."
  },
);


// Mailbox names
console.log(mailboxNames);

// Emails in inbox
console.log(emailsList);

// Text of the second email in the list of emails in the inbox
console.log(emailsList[1].message);

// Updated sent mailbox with draft that I sent.
console.log(appData.mailboxes[sentIndex].emails);

// Updated drafts mailbox after adding a new draft
console.log(appData.mailboxes[draftsIndex].emails);