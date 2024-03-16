import React from "react";

const AuditProcess = () => {
  const steps = [
    {
      title: "Information Gathering:",
      details: [
        {
          detail:
            "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
        },
        {
          detail:
            "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
        },
        {
          detail:
            "Discussed client concerns and specific areas of focus for the audit.",
        },
      ],
    },

    {
      title: "Manual Code Review:",
      details: [
        {
          detail:
            "Conducted a line-by-line review of the smart contract code, focusing on:",
          subDetails: [
            "Vulnerability identification: Searching for", "known vulnerabilities like reentrancy", " front-running, integer overflows, and access control issues etc."
          ],
        },
      ],
    },
    {
      title: "Functional Testing:",
      details: [
        {
          detail:
            "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
        },
        {
          detail:
            "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
        },
        {
          detail:
            "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
        },
        {
          detail:
            "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.",
        },
      ],
    },
    {
      title: "Automated Testing:",
      details: [
        {
          detail:
            "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
        },
        {
          detail:
            "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
        },
        {
          detail:
            "Integrated unit tests are written by the CDP team to verify specific contract functions and their behavior.",
        },
      ],
    },
    {
      title: "Reporting & Remediation:",
      details: [
        {
          detail:
            "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
        },
        {
          detail:
            "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices",
        },
        {
          detail:
            "Collaborated with the CDP team to prioritize and address the identified issues.",
        },
        {
          detail:
            "Conducted additional verification testing after vulnerability fixes were implemented.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mt-8 mb-10">
          CarpeDiem Pension's Journey Through our Audit Process
        </h1>

        <ol className="list-decimal list-inside mb-8">
          {steps.map((step, index) => (
            <li key={index} className=" font-bold text-2xl">
              <span className="font-bold mb-2 text-2xl">{step.title}</span>
              <ul className="list-disc list-inside mb-4 font-normal mt-4 space-y-4 text-base">
                {step.details &&
                  step.details.map(({ detail, subDetails }, idx) => (
                    <li key={idx} className="">
                      {" "}
                      <h3 className="font-normal -mt-6 mb-4  ml-6 ">
                        {detail}
                      </h3>
                      {subDetails && subDetails.map(()=>(
                        <li className="  ml-10 ">{subDetails}</li>
                      )) }
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AuditProcess;
