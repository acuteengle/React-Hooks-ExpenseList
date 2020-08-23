import React from "react";

const Notification = ({ text }) => {
  const styles = {
    error: {
      color: "#f5f5f5",
      margin: 10,
    },
  };
  return <p style={styles.error}>{text}</p>;
};

export default Notification;
