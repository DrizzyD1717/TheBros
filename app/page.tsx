import Hero from "./Components/Hero";
import ServicesPreview from "./Components/ServicesPreview";
import About from "./Components/About";

export default function Home() {
  return (
    <div className="bg-background text-textPrimary">
      <Hero></Hero>
      <ServicesPreview></ServicesPreview>
      <About></About>
    </div>
  );
}
