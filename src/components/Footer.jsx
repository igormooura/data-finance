import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const SocialIcons = () => (
  <div className='flex justify-between md:w-[75%] my-6'>
    <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaTwitterSquare size={30} />
    <FaGithubSquare size={30} />
    <FaDribbbleSquare size={30} />
  </div>
);

const LinkList = ({ title, items }) => (
  <div>
    <h6 className='font-medium text-gray-400'>{title}</h6>
    <ul>
      {items.map((item, index) => (
        <li key={index} className='py-2 text-sm'>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const solutionsItems = ['Analytics', 'Marketing', 'Commerce', 'Insights'];
  const supportItems = ['Pricing', 'Documentation', 'Guides', 'API Status'];
  const companyItems = ['About', 'Blog', 'Jobs', 'Press', 'Careers'];
  const legalItems = ['Claim', 'Policy', 'Terms'];

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
        </p>
        <SocialIcons />
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <LinkList title="Solutions" items={solutionsItems} />
        <LinkList title="Support" items={supportItems} />
        <LinkList title="Company" items={companyItems} />
        <LinkList title="Legal" items={legalItems} />
      </div>
    </div>
  );
};

export default Footer;