import React, { useState } from "react";

import NavBar from "./components/navbar";
import Upload from "./components/upload";
import Almost from "./components/almost";
import VipResult from "./components/vip-result";

import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);

  return (
    <main className={styles.main}>
      <NavBar />

      {/* Switch statement to render components based on upload progress */}
      <div className={styles.container}>
        {(() => {
          switch (step) {
            case 0:
              return <Upload onNext={onNext} />;

            case 1:
              return <Almost onNext={onNext} step={step} />;

            case 2:
              return <Almost onNext={onNext} step={step} />;

            case 3:
              return <VipResult />;
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}
