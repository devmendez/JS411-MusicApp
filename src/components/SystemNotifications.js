import React from 'react';

const SystemNotifications = props => {
  const notifications = props.notifications;
  const notificationItems = notifications.map(notification => (
    <p style={{ fontSize: "25px", color: "blue", textAlign: "center" }}>
      {notifications}
    </p>
  ));
  return (
    <div>
      <h2 style={{ textAlign: "left", fontSize: "25px", paddingLeft: "40px" }}>
        System Notifications:
      </h2>
      {notificationItems}
    </div>
  );
};

export default SystemNotifications;