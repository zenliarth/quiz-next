import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Container } from './styles';

interface TimerProps {
  duration: number;
  timeout: () => void;
}

function Timer({ duration, timeout }: TimerProps): JSX.Element {
  return (
    <Container>
      <CountdownCircleTimer
        duration={duration}
        size={100}
        isPlaying
        onComplete={timeout}
        colors={['#BCE596', '#F7B801', '#ED827A']}
        initialRemainingTime={duration}
        colorsTime={[10, 7, 4]}
        trailColor='#ccc'
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Container>
  );
}

export default Timer;
