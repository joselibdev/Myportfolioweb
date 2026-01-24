import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { CloudOverview } from "@/app/components/CloudOverview";
import { InfrastructureExperience } from "@/app/components/InfrastructureExperience";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { TechStack } from "@/app/components/TechStack";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="profile">
          <CloudOverview />
        </div>
        
        <InfrastructureExperience />
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="education">
          <Education />
        </div>
        
        <div id="skills">
          <TechStack />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}