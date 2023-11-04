import { useEffect, useRef } from 'react';
import soundtrack from "../assets/lauaviin.mp3"

const AudioPlayer = (props: {loadMusic: boolean}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // State to manage loading error

  
    useEffect(() => {
      if (!audioRef.current) {
        audioRef.current = new Audio(soundtrack);
        audioRef.current.loop = true;
      }
  
      // Event listener to start playing when audio is loaded sufficiently
      const handleCanPlay = () => {
        audioRef.current!.play().catch((error: Error) => {
          console.error('Error playing audio:', error.message);
        });
      };
  
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
  
      // Clean up when component unmounts
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplaythrough', handleCanPlay);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }, [props.loadMusic]);
  
    const handleUserInitiatedPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error: Error) => {
          console.error('Error playing audio:', error.message);
        });
      }
    };
    useEffect(() => {
        if (props.loadMusic) handleUserInitiatedPlay
    }, [props.loadMusic]);
  
    return (
        <></>
    )
  };
  
  export default AudioPlayer;
