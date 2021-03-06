import React from 'react';
import { storiesOf } from '@storybook/react';
import Watermark from '../components/watermark';
import ShowCode from './util/ShowCode';

storiesOf('水印 Watermark', module)
  .add('浏览样式', () => (
    <ShowCode title='默认' sub='图片必须允许跨域'>
      <Watermark 
        width={480} 
        height={300}
        src='https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwdmIes72AAPezQ2Ar48AALGewLqnwEAA97l805.jpg'
      />
    </ShowCode>
  ), {
    info: {
      text: `**印泥**未开出馋水，**印泥**一开香扑鼻`,
      inline: true,
      source: false
    }
  })