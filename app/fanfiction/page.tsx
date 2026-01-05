import HeroSection from "../_components/HeroSection";

const FanfictionPage = () => {
  return (
    <div>
      <HeroSection
        title="Fanfiction"
        subtitle="Explore my collection of fanfiction stories"
      />
      {/* 
        Show list of genres with three fanfic cards for each genre. 
          1. Fetch all genres.
          2. For each genre, fetch three stories.
          3. Fetch first chapter of each story.
      */}
    </div>
  );
};

export default FanfictionPage;
