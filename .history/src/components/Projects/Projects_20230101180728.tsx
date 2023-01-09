import React from 'react'
import "../Projects/Projects.css"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

export const Projects = () => {
  return ( 
    <div className='ProjectsContainer'>
      <div className='Projects_header'>
        My Work :
      </div>
      <div className='Projct_header'>
        App 1
      </div>
    </div>
   );
}
 
