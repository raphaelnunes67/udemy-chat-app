import React from "react";

export default function App() {
  const title = 'Hello World';
  const enhancedTitle = title + ' - React App!';

  const sendNotifcation = () =>{
    electron
      .notificationApi
      .sendNotification('This is my custom message!');
  }

  return (
    <>
    <h1>{enhancedTitle}</h1>
    <button onClick={sendNotifcation}>Send Notification</button>
    </>
  )
}