import React from 'react'
import s from './Message.module.css'
import s2 from '../../../s1-main/App.module.css'
import {MessageType} from '../HW1';

export type MessagePropsType = {
  message: MessageType;
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <div id={'hw1-message-' + props.message.id} className={`${s2.commonMessage} + ${s.message}`}>
      <div className={s2.commonImageAndText}>
        <img
          id={'hw1-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={'avatar'}
        />
        <div className={`${s2.commonText} + ${s.text}`}>
          <div id={'hw1-name-' + props.message.id} className={`${s2.commonTextStyle} + ${s.name}`}>
            {props.message.user.name}
          </div>
          <pre id={'hw1-text-' + props.message.id} className={ `${s2.commonTextStyle} + ${s.messageText}`}>
            {props.message.message.text}
          </pre>
        </div>
      </div>
      <div id={'hw1-time-' + props.message.id} className={ `${s2.commonTextStyle} + ${s.time}`}>
        {props.message.message.time}
      </div>
    </div>
  )
}

export default Message
