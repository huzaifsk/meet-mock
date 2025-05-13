// Google Meet UI Mockup — Updated with Latest UI Styling

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
  SmileIcon, // For Emoji Reactions
  LayoutGridIcon, // For Activities
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
  const baseControlButtonClass = "p-3 text-white transition-all";
  const onStateButtonClass = `bg-[#3c4043] hover:bg-[#4a4d50] ${baseControlButtonClass}`;
  const offStateButtonClass = `bg-[#5f6368] hover:bg-[#6f7378] ${baseControlButtonClass}`; // Darker grey for off state
  const endCallButtonClass = `bg-[#ea4335] hover:bg-[#d93025] ${baseControlButtonClass}`;
  const utilityButtonClass = `bg-[#3c4043] hover:bg-[#4a4d50] p-2.5 text-white transition-all`;

  return (
    <div className="h-screen bg-[#202124] text-white flex flex-col items-center font-sans select-none">
      {/* Main content area: Video feed and participant grid */}
      <div className="w-full max-w-screen-2xl flex-grow grid grid-cols-1 md:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-3 p-3 overflow-hidden">
        {/* Main user video or placeholder */}
        <div className="bg-[#292a2d] rounded-xl overflow-hidden relative flex items-center justify-center">
          {cameraError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20 bg-black bg-opacity-75">
              <AlertTriangleIcon className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Camera Error</h3>
              <p className="text-gray-300 text-sm">{cameraError}</p>
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
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <UserCircle2Icon className="w-28 h-28 sm:w-32 sm:h-32 text-gray-500" />
              <div className="mt-3 text-lg text-gray-300">{userName}</div>
              {!cameraError && (
                <div className="text-sm text-gray-400 mt-1">Camera is off</div>
              )}
            </div>
          )}
          {cameraOn && !cameraError && (
            <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-sm px-2.5 py-1.5 rounded-md">
              {userName} (You)
            </div>
          )}
        </div>

        {/* Participants grid */}
        <div className="bg-[#292a2d] rounded-xl p-2 flex flex-col overflow-hidden">
          <h3 className="text-sm text-gray-300 mb-2 px-1">
            Participants ({participants.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto flex-grow pr-1">
            {participants.map((name, index) => {
              const gender = index % 2 === 0 ? "women" : "men";
              const imageId = (index % 50) + 1;
              return (
                <div
                  key={index}
                  className="relative h-28 rounded-lg overflow-hidden flex items-center justify-center bg-[#313235] shadow-md" // Simplified background
                >
                  <img
                    src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
                    alt={name}
                    className="absolute w-full h-full object-cover filter blur-md scale-105"
                  />
                  <img
                    src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
                    alt={name}
                    className="w-12 h-12 rounded-full z-10 border-2 border-gray-400 shadow-sm"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/48x48/7F7F7F/FFFFFF?text=${name
                        .substring(0, 1)
                        .toUpperCase()}`;
                    }}
                  />
                  {/* Fallback for image error (covered by onError in img now) */}
                  {/* <div className="absolute w-full h-full object-cover bg-gray-700 flex items-center justify-center">
                     <UserCircle2Icon className="w-10 h-10 text-gray-500 opacity-50"/>
                  </div> */}
                  <div className="absolute bottom-1.5 left-1.5 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom controls bar */}
      <div className="w-full bg-[#202124] py-2.5 px-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          {/* Left: Time and Meeting Code */}
          <div className="text-sm text-gray-300 hidden md:block min-w-[150px]">
            10:34 AM | zfw-fayf-eeo
          </div>

          {/* Center: Main Controls */}
          <div className="flex items-center justify-center flex-grow gap-2 sm:gap-3">
            <Button
              onClick={() => setMicOn((prev) => !prev)}
              className={micOn ? onStateButtonClass : offStateButtonClass}
              aria-label={micOn ? "Mute microphone" : "Unmute microphone"}
            >
              {micOn ? (
                <MicIcon size={22} />
              ) : (
                <MicOffIcon size={22} className="text-red-400" />
              )}
            </Button>
            <Button
              onClick={() => setCameraOn((prev) => !prev)}
              className={cameraOn ? onStateButtonClass : offStateButtonClass}
              aria-label={cameraOn ? "Turn off camera" : "Turn on camera"}
            >
              {cameraOn ? (
                <VideoIcon size={22} />
              ) : (
                <VideoOffIcon size={22} className="text-red-400" />
              )}
            </Button>
            <Button
              className={onStateButtonClass}
              aria-label="Turn on captions"
            >
              <span className="text-sm font-semibold tracking-wider px-1">
                CC
              </span>
            </Button>
            <Button className={onStateButtonClass} aria-label="Raise hand">
              <HandMetalIcon size={20} />
            </Button>
            <Button className={onStateButtonClass} aria-label="Present now">
              <ScreenShareIcon size={22} style={{ transform: "scaleX(-1)" }} />
            </Button>
            <Button className={onStateButtonClass} aria-label="Emoji reactions">
              <SmileIcon size={22} />
            </Button>
            <Button className={onStateButtonClass} aria-label="More options">
              <MoreVerticalIcon size={22} />
            </Button>
            <div className="w-px h-6 bg-gray-600 mx-1 sm:mx-2 hidden sm:block"></div>{" "}
            {/* Separator */}
            <Button className={endCallButtonClass} aria-label="Leave call">
              <PhoneOffIcon size={22} />
            </Button>
          </div>

          {/* Right: Utility Controls */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-[150px] justify-end">
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
          </div>
        </div>
      </div>
    </div>
  );
}
