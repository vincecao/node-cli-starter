import React, { FC } from 'react';

const Button: FC = (props) => {
  return (
    <a
      className="text-red-400 uppercase p-2 rounded-lg hover:bg-gray-100 transition duration-200"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
};

export default Button;
