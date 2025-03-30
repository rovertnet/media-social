import { Plus } from "lucide-react";

const Story = ({ imageUrl, profileUrl, username, isCreateStory = false }) => {
  return (
    <div className="relative w-32 h-48 rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrl}
        alt={`Story de ${username}`}
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {isCreateStory ? (
        <div className="absolute bottom-0 w-full p-4 flex flex-col items-center">
          <div className="bg-blue-500 rounded-full p-2 mb-2">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-sm font-medium">
            Créer une story
          </span>
        </div>
      ) : (
        <>
          <div className="absolute top-4 left-4 ring-4 ring-blue-500 rounded-full">
            <img
              src={profileUrl}
              alt={username}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white text-sm font-medium line-clamp-2">
              {username}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Story;
