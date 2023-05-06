import React, { useEffect, useState } from 'react';
import { Delta, Line, Loading, Wrapper } from './Chat.style';
import { useCustomEvent } from 'igrid';

export type ChatProps = {};

export function Chat(_props: ChatProps) {
  const [chat, setChat] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [delta, setDelta] = useState<number>(0);

  useCustomEvent('chat', (data) => {
    const { prompt } = data;

    const now = Date.now();

    setLoading(true);
    setDelta(0);

    fetch('http://localhost:3002/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDelta(Date.now() - now);
        setChat(data);
      });
  });

  function renderInner() {
    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return chat.split('\n').map((line: string, index: number) => {
      return <Line key={index}>{line}</Line>;
    });
  }

  function renderDelta() {
    if (!delta) {
      return null;
    }

    return <Delta>{delta.toLocaleString()} millis</Delta>;
  }

  return (
    <Wrapper className='Chat-wrapper' data-testid='Chat-wrapper'>
      {renderInner()}
      {renderDelta()}
    </Wrapper>
  );
}

export default Chat;
