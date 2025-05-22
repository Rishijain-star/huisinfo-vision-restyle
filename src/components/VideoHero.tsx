import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoHeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onBookDemo?: () => void;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  title = "See Huisinfo In Action",
  subtitle = "Experience our platform's powerful features through an interactive demonstration",
  buttonText = "Book A Demo",
  onBookDemo = () => console.log("Book demo clicked")
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Add small delay to avoid rapid play/pause calls
    hoverTimeoutRef.current = setTimeout(async () => {
      if (videoRef.current && isLoaded && !hasError) {
        try {
          // Wait for any existing play promise to resolve
          if (playPromiseRef.current) {
            await playPromiseRef.current;
          }
          
          videoRef.current.currentTime = 0;
          playPromiseRef.current = videoRef.current.play();
          await playPromiseRef.current;
          setIsPlaying(true);
        } catch (error) {
          if (error.name !== 'AbortError') {
            console.log("Video play failed:", error);
            setHasError(true);
          }
        } finally {
          playPromiseRef.current = null;
        }
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    // Clear any pending play timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Add small delay to avoid interrupting play promises
    setTimeout(async () => {
      if (videoRef.current && !hasError) {
        try {
          // Wait for any existing play promise to resolve before pausing
          if (playPromiseRef.current) {
            await playPromiseRef.current;
          }
          
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
        } catch (error) {
          if (error.name !== 'AbortError') {
            console.log("Video pause failed:", error);
          }
        } finally {
          playPromiseRef.current = null;
        }
      }
    }, 50);
  };

  const togglePlay = async () => {
    if (videoRef.current && isLoaded && !hasError) {
      try {
        // Wait for any existing play promise to resolve
        if (playPromiseRef.current) {
          await playPromiseRef.current;
        }

        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          playPromiseRef.current = videoRef.current.play();
          await playPromiseRef.current;
          setIsPlaying(true);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log("Video toggle failed:", error);
          setHasError(true);
        }
      } finally {
        playPromiseRef.current = null;
      }
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 lg:space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base md:text-lg text-blue-50 max-w-md">
                  {subtitle}
                </p>
              )}
            </div>
            
            <button
              onClick={onBookDemo}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div 
              className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900 aspect-video cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={togglePlay}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
                onError={handleVideoError}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                crossOrigin="anonymous"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Loading/Error State */}
              {(!isLoaded || hasError) && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  {hasError ? (
                    <div className="text-white text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-sm">Video Preview</p>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm">Loading video...</p>
                    </div>
                  )}
                </div>
              )}

              {/* Play/Pause Overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${isHovered && isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-1" />
                  ) : (
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-1" />
                  )}
                </div>
              </div>

              {/* Gradient Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-400 bg-opacity-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-16 left-16 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-32 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
};

export default VideoHero;