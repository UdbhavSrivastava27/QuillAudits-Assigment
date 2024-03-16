import React from 'react';

const AuditDiscoveries = () => {
  const issues = [
    {
      title: 'Unauthorized Claim/Compound:',
      description: 'Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.'
    },
    {
      title: 'Precision Loss in mintCDP():',
      description: 'Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.'
    },
    {
      title: 'Multiplication Accuracy:',
      description: 'Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.'
    },
    {
      title: 'Incorrect Share Allocation:',
      description: 'The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.'
    },
    {
      title: 'Logic Error in Referral Handling:',
      description: 'A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system.'
    },
    {
      title: 'Referral Exploitation:',
      description: 'Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mt-10">Comprehensive Audit Discoveries and Remediation Strategies</h1>
      <p className="mt-10">Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :</p>
      <ol className="list-decimal font-bold text-2xl mt-4 ml-6">
        {issues.map((issue, index) => (
          <li key={index} className=' '>
            <h3 className="font-bold mb-2 text-2xl ">{issue.title}</h3>
            <li className='list-disc list-inside'>
            <h3 className="font-normal -mt-6 mb-4  ml-6 text-base ">{issue.description}</h3>
            </li>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AuditDiscoveries;
