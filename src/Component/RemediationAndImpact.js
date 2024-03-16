import React from 'react';

const RemediationAndImpact = () => {
  const improvements = [
    'Implementation of reentrancy protection mechanisms.',
    'Accurate handling of decimal values using established libraries or best practices.',
    'Revised calculations with proper scaling factors.',
    'Fixing logic errors to ensure deposits and waiting periods are enforced.',
    'Addressing referral system vulnerabilities to prevent abuse.'
  ];

  return (
    <div className="mt-10 space-y-6 mr-2">
      <h1 className="text-3xl font-bold">Remediation & Impact:</h1>

      <p>All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture.</p>
      <ul className="list-disc mt-4 ml-6">
       
      
        <ul className="list-disc ml-6">
          {improvements.map((improvement, index) => (
            <li key={index} className=' my-2 md:w-9/12'>{improvement}</li>
          ))}
        </ul>
      </ul>



      <div className=" hidden md:block">
       <span className=' font-bold '>Embed this tweet :-</span>

       <span>          
        <a href="https://twitter.com/CarpeDiemCDP/status/1742906560794296402?s=20"  target='blank' className='text-[#204ECF] text-wrap'> https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</a>
       </span>

     
      </div>

      <p className="mt-4">CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</p>
    
    </div>
  );
};

export default RemediationAndImpact;
