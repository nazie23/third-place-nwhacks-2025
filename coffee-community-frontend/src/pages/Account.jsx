import React, { useEffect, useState } from "react";
import AccountDetails from "../components/AccountDetails";
import { parse } from "papaparse"; // Assuming papaparse is used for CSV parsing

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/userdata.csv") // Update with the correct path to your CSV file
      .then((response) => response.text())
      .then((data) => {
        parse(data, {
          header: true,
          complete: (results) => {
            setUserData(results.data[0]); // Assuming the first row contains the user data
          },
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="account-page">
      {userData ? <AccountDetails userData={userData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Account;