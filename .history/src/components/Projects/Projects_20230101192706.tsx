import React from 'react'
import "../Projects/Projects.css"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const mock = require("../../images/mockup1.jpg");
const mock2 = require("../../images/mockup2.jpg");

const { Meta } = Card;

export const Projects = () => {
  return ( 
    <div className='ProjectsContainer'>
      <div className='Projects_header'>
        My Work :
      </div>
      <div className='Project_card'>
      <Card
    style={{ width: 300 , margin:10}}
    cover={
      <img
        alt="example"
        src={mock}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </div>
      <div className='Project_card'>
      <Card
    style={{ width: 300 , margin: 10}}
    cover={
      <img
        alt="example"
        src={mock2}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </div>
    </div>
   );
}
 
