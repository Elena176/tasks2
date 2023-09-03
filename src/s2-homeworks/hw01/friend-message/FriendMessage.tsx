import React from 'react'
import s from './FriendMessage.module.css'
import s2 from '../../../s1-main/App.module.css'
import {MessageType} from '../HW1';

export type FriendMessagePropsType = {
  message: MessageType;
}

const FriendMessage = (props: FriendMessagePropsType) => {
  return (
    <div
      id={'hw1-friend-message-' + props.message.id}
      className={s2.commonMessage}
    >
      <div className={s2.commonImageAndText}>
        <img
          id={'hw1-friend-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={'avatar'}
        />
        <div className={`${s2.commonText} + ${s.friendText}`}>
          <div
            id={'hw1-friend-name-' + props.message.id}
            className={`${s2.commonTextStyle} + ${s.friendName}`}
          >
            {props.message.user.name}
          </div>
          <pre
            id={'hw1-friend-text-' + props.message.id}
            className={`${s2.commonTextStyle} + ${s.friendMessageText}`}
          >
            {props.message.message.text}
          </pre>
        </div>
      </div>
      <div
        id={'hw1-friend-time-' + props.message.id}
        className={`${s2.commonTextStyle} + ${s.friendTime}`}
      >
        {props.message.message.time}
      </div>
    </div>
  )
}

export default FriendMessage
