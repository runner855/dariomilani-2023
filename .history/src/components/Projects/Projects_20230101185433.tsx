import React from 'react'
import "../Projects/Projects.css"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const mock = require("../../images/mockup1.jpg");

const { Meta } = Card;

export const Projects = () => {
  return ( 
    <div className='ProjectsContainer'>
      <div className='Projects_header'>
        My Work :
      </div>
      <div className='Projct_header'>
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
 
