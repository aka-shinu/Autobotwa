import YouTubeSlider from "@/components/YouTubeSlider";

export default function YoutubeSection() {
  return (
    <section className="py-20 bg-white px-1 sm:px-10 md:px-20">
      <YouTubeSlider
        videos={[
          {
            id: "YSOUNdjZU80",
            title:
              "Dubrovnik Travel Vlog: Everything I ate and did in Croatia!",
          },
          {
            id: "hjDlqb30QIQ",
            title: "Sweden Travel Vlog: Everything I did in 72 hours! 🇸🇪",
          },
          {
            id: "9E99MD-YygE",
            title:
              "New Delhi, India Travel Guide: Best things to do in 48 hours!",
          },
        ]}
        autoplay={true}
        autoplayDelay={3000}
        showNavigation={true}
        showPagination={true}
      />
    </section>
  );
}
