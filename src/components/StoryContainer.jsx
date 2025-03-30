import Story from "./Story";

const StoryContainer = () => {
  const stories = [
    {
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      profileUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      username: "Marie Durant",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      profileUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      username: "Thomas Martin",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      profileUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      username: "Julie Petit",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      profileUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      username: "Pierre Dubois",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        <Story
          imageUrl="https://images.unsplash.com/photo-1504297050568-910d24c426d3"
          profileUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          username="Créer une story"
          isCreateStory={true}
        />
        {stories.map((story, index) => (
          <Story
            key={index}
            imageUrl={story.imageUrl}
            profileUrl={story.profileUrl}
            username={story.username}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryContainer;
