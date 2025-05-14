import React, { useState, useRef, useEffect } from "react";

// For this standalone example, let's define a basic Button component
const Button = ({ onClick, className, children, "aria-label": ariaLabel }) => {
  // Basic styling to mimic button appearance for the mockup
  // Tailwind classes will be applied directly where the Button is used for specific styling
  const baseStyle =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202124] focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

import {
  VideoIcon,
  VideoOffIcon,
  MicIcon,
  MicOffIcon,
  ScreenShareIcon,
  PhoneOffIcon,
  InfoIcon,
  UsersIcon,
  MessageSquareIcon,
  HandMetalIcon,
  MoreVerticalIcon,
  UserCircle2Icon,
  AlertTriangleIcon,
  SmileIcon,
  LayoutGridIcon,
  GithubIcon,
} from "lucide-react";

export default function GoogleMeetMockup() {
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const videoRef = useRef(null);

  const userName = "User"; // Main user's name

  useEffect(() => {
    setCameraError(null);
    if (cameraOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setCameraError(
            "Camera not available. Please check permissions or ensure it's not in use by another app.",
          );
          setCameraOn(false);
        });
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [cameraOn]);

  const participants = [
    "Jenelia",
    "Joe Carlson",
    "Lucy Sera",
    "Michael Smith",
    "Jennifer David",
    "Robert Johnson",
    "Rachel Green",
    "Daniel Williams",
    "Carol Mark",
    "Chris Harris",
    "Phoebe Buffay",
    "Andrew Brown",
    "Ross Geller",
    "Chandler Bing",
  ];

  // Button styling classes
  const baseControlButtonClass = "p-3 text-white transition-all cursor-pointer";
  const onStateButtonClass = `bg-[#3c4043] hover:bg-[#4a4d50] ${baseControlButtonClass}`;
  const offStateButtonClass = `bg-[#5f6368] hover:bg-[#6f7378] ${baseControlButtonClass}`; // Darker grey for off state
  const endCallButtonClass = `bg-[#ea4335] hover:bg-[#d93025] ${baseControlButtonClass}`;
  const utilityButtonClass = `bg-[#3c4043] hover:bg-[#4a4d50] p-2.5 text-white transition-all cursor-pointer`;

  return (
    <div className="h-screen bg-[#202124] text-white flex flex-col items-center font-sans select-none">
      {/* Main content area: Video feed and participant grid */}
      {/* Mobile: single column, Desktop: two columns */}
      <div className="w-full max-w-screen-2xl flex-grow grid grid-cols-1 md:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-3 p-2 md:p-3 overflow-hidden">
        {/* Main user video or placeholder */}
        {/* On mobile, ensure this takes up more vertical space potentially */}
        <div className="bg-[#292a2d] rounded-xl overflow-hidden relative flex items-center justify-center h-60 md:h-auto">
          {cameraError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20 bg-black bg-opacity-75">
              <AlertTriangleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Camera Error
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">{cameraError}</p>
            </div>
          )}
          {cameraOn && !cameraError ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4">
              <UserCircle2Icon className="w-20 h-20 sm:w-28 sm:h-28 text-gray-500" />
              <div className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-300 text-center">
                {userName}
              </div>
              {!cameraError && (
                <div className="text-xs sm:text-sm text-gray-400 mt-1 text-center">
                  Camera is off
                </div>
              )}
            </div>
          )}
          {cameraOn && !cameraError && (
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black bg-opacity-60 text-white text-xs sm:text-sm px-2 py-1 rounded-md">
              {userName} (You)
            </div>
          )}
        </div>

        {/* Participants grid */}
        {/* On mobile, this will appear below the main video */}
        <div className="bg-[#292a2d] rounded-xl p-2 flex flex-col overflow-hidden">
          <h3 className="text-sm text-gray-300 mb-2 px-1">
            Participants ({participants.length})
          </h3>
          {/* Inner grid for participants */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-y-auto flex-grow pr-1">
            {participants.map((name, index) => {
              const gender = index % 2 === 0 ? "women" : "men";
              const imageId = (index % 50) + 2;
              return (
                <div
                  key={index}
                  className="relative h-24 sm:h-28 rounded-lg overflow-hidden flex items-center justify-center bg-[#313235] shadow-md" // Simplified background
                >
                  <img
                    src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
                    alt={name}
                    className="absolute w-full h-full object-cover filter blur-md scale-105"
                  />
                  <img
                    src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
                    alt={name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full z-10 border-2 border-gray-400 shadow-sm"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/48x48/7F7F7F/FFFFFF?text=${name
                        .substring(0, 1)
                        .toUpperCase()}`;
                    }}
                  />
                  <div className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom controls bar */}
      <div className="w-full bg-[#202124] py-2 px-2 sm:px-4 border-t border-gray-700">
        {/* Mobile: Just main controls centered, Desktop: split left/center/right */}
        <div className="flex flex-wrap justify-center items-center md:justify-between">
          {/* Left: Time and Meeting Code - Hidden on mobile */}
          <div className="text-sm text-gray-300 hidden md:block min-w-[150px]">
            10:34 AM | zfw-fayf-eeo
          </div>

          {/* Center: Main Controls */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <Button
              onClick={() => setMicOn((prev) => !prev)}
              className={micOn ? onStateButtonClass : offStateButtonClass}
              aria-label={micOn ? "Mute microphone" : "Unmute microphone"}
            >
              {micOn ? (
                <MicIcon size={20} sm:size={22} />
              ) : (
                <MicOffIcon size={20} sm:size={22} className="text-red-400" />
              )}
            </Button>
            <Button
              onClick={() => setCameraOn((prev) => !prev)}
              className={cameraOn ? onStateButtonClass : offStateButtonClass}
              aria-label={cameraOn ? "Turn off camera" : "Turn on camera"}
            >
              {cameraOn ? (
                <VideoIcon size={20} sm:size={22} />
              ) : (
                <VideoOffIcon size={20} sm:size={22} className="text-red-400" />
              )}
            </Button>
            <Button
              className={`${onStateButtonClass} px-3`} // Added px-3 for text CC button
              aria-label="Turn on captions"
            >
              <span className="text-sm font-semibold tracking-wider">CC</span>
            </Button>
            <Button className={onStateButtonClass} aria-label="Raise hand">
              <HandMetalIcon size={20} />
            </Button>
            {/* Present and More options are often grouped or in a more menu on mobile */}
            <Button className={onStateButtonClass} aria-label="Present now">
              <ScreenShareIcon size={20} style={{ transform: "scaleX(-1)" }} />
            </Button>
            <Button className={onStateButtonClass} aria-label="Emoji reactions">
              <SmileIcon size={20} />
            </Button>
            {/* More options button - always visible in center group */}
            <Button className={onStateButtonClass} aria-label="More options">
              <MoreVerticalIcon size={20} />
            </Button>

            {/* Separator - Hidden on mobile */}
            <div className="w-px h-6 bg-gray-600 mx-1 sm:mx-2 hidden md:block"></div>

            <Button className={endCallButtonClass} aria-label="Leave call">
              <PhoneOffIcon size={20} sm:size={22} />
            </Button>
          </div>

          {/* Right: Utility Controls - Hidden on mobile */}
          <div className="items-center gap-1 sm:gap-2 min-w-[150px] justify-end hidden md:flex">
            <Button className={utilityButtonClass} aria-label="Meeting details">
              <InfoIcon size={20} />
            </Button>
            <Button className={utilityButtonClass} aria-label="Show everyone">
              <UsersIcon size={20} />
            </Button>
            <Button className={utilityButtonClass} aria-label="Open chat">
              <MessageSquareIcon size={20} />
            </Button>
            <Button className={utilityButtonClass} aria-label="Activities">
              <LayoutGridIcon size={20} />
            </Button>
            <a
              href="https://github.com/huzaifsk/meet-mock"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              <Button className={utilityButtonClass}>
                <GithubIcon size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
