import React from "react";
import styles from "../components/faq/asset/faq.module.css";
import Add from "../components/faq/asset/add.svg";
import Remove from "../components/faq/asset/remove.svg";
import Questions from "../components/faq/Questions";
import { useState } from "react";
import { Navbar, Footer } from "components/general/";

const data = [
  {
    id: 1,
    text: "What is Axe VIP Customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 2,
    text: "How secure are your payment",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 3,
    text: "How to integrate Axe VIP customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 4,
    text: "Axe VIP customer API pricing",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 5,
    text: "What is VIP Customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 6,
    text: "Security and Privacy",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  }
];

const FAQ = () => {
  const icon = {
    opened: Remove,
    closed: Add
  };

  const [question_list, setQuestion_list] = useState(data);

  function filter_(input) {
    const query = input.target.value;
    let _newList = data;
    const newList = _newList.filter((item) => {
      if (item.text.toLowerCase().includes(query)) {
        return item;
      }
    });

    setQuestion_list(newList);
  }

  return (
    <>
      <Navbar />
      <div className={styles.faq}>
        <div className={styles.top}>
          <h1>Frequently Asked Question</h1> <h1>FAQ</h1>
          <input type="text" placeholder="Search results" onChange={filter_} />
        </div>
        <div className={styles.main}>
          {question_list.map((item) => (
            <Questions
              key={item.id}
              styles={styles}
              text={item.text}
              icon={icon}
              p={item.p}
              alt={"icon"}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
