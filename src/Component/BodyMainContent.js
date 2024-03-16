import React from "react";
import panelImg1 from "../Assest/image 17.png";
import panelImg2 from "../Assest/Screenshot 2024-02-16 at 7.43 1.png";
import AuditProcess from "./AuditProcess";
import AuditDiscoveries from "./AuditDiscoveries";
import RemediationAndImpact from "./RemediationAndImpact";

import certificate from "../Assest/Group 1261153172.png";
import certificate2 from '../Assest/certificate2.png'

const BodyMainContent = () => {
  return (
    <div className="  w-10/12 md:w-8/12 ">
      <div className=" md:mr-20  ">
        <p>
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users
          globally.
        </p>

        <h1 className=" font-bold text-3xl mt-10">
          CarpeDiem Pension's Flexible, Blockchain-Enabled Future
        </h1>

        <p className=" mt-4">
          CarpeDiem Pension redefines retirement planning with a unique approach
          that deviates from traditional pension funds. With no minimum age for
          retirement, it offers flexibility and freedom, ensuring all genders
          receive equal treatment. CarpeDiem Pension ensures blockchain
          transparency, anonymity, and global accessibility, safeguarding
          pensions during international relocation. Easily transfer pensions to
          loved ones; share wallet access. Re-deposit payouts for increased
          future benefits. Importantly, CarpeDiem Pension prioritizes deposit
          security by avoiding utilizing client funds for internal investments.
          To become a part of this forward-thinking pension scheme, one simply
          needs to install and configure a blockchain wallet.
        </p>
      </div>

      <div className=" mt-8">
        <img src={panelImg1} alt="panel img" />
      </div>

      <div className=" md:mr-20">
        <h1 className="font-bold text-3xl mt-10 ">
          CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy,
          Front-Running, and Infinite Minting
        </h1>
        <p className=" mt-8">
          CarpeDiem Pension confronts critical security challenges, including
          the risks of reentrancy and front-running exploits.Malicious actors
          may exploit contract vulnerabilities, withdrawing excess funds or
          manipulating transaction timing for unfair advantages. System faces
          infinite minting threats, risking economic stability with endless
          creation of CDP tokens or pension shares.  Addressing these challenges
          is paramount to safeguarding the integrity and security of CarpeDiem
          Pension.
        </p>

        <img src={panelImg2} alt="panel img" className="  mt-4 md:mt-10" />

        <AuditProcess />
      </div>

      <h1 className=" text-3xl font-bold mt-10">
        QuillAudits' Strategic Approach to CDP Security Audits
      </h1>

      <p className=" mt-8 md:pr-36">
        We prioritize threat modeling based on platform-specific risks.
        Security-first, we identify and mitigate vulnerabilities beyond
        functionality testing. Using white-box and black-box tests, we conduct
        thorough vulnerability assessments. Maintaining transparency, we
        communicate openly with the CDP team. Emphasizing clarity, we present
        actionable insights for efficient issue resolution.
      </p>

      <AuditDiscoveries />

      <RemediationAndImpact />

      <img src={certificate} alt="certificate" className=" hidden md:block mt-10 pr-8 mb-8 " />
      <img src={certificate2}  alt="certification" className="md:hidden block mt-20 pr-8 mb-8"/>
    </div>
  );
};

export default BodyMainContent;
