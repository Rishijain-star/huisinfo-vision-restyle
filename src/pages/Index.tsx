
import React from 'react';
import { ArrowRight, Home, Search, FileCheck, Gauge } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-lightBlue font-semibold uppercase tracking-wider">Onze Diensten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
              Alles wat u nodig heeft voor uw woning
            </h2>
            <p className="text-gray-600">
              Bij HuisInfo bieden we een uitgebreid pakket aan diensten om u te helpen bij alle aspecten van uw woning, 
              van inspectie tot verkoop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Woningwaardering" 
              description="Krijg een nauwkeurige inschatting van de waarde van uw woning gebaseerd op actuele marktdata."
              icon={<Home size={24} />}
              color="blue"
            />
            <ServiceCard 
              title="Huisinspectie" 
              description="Laat uw (toekomstige) woning grondig inspecteren door onze ervaren professionals."
              icon={<Search size={24} />}
              color="lightBlue"
            />
            <ServiceCard 
              title="Bouwtechnische keuring" 
              description="Een diepgaande analyse van de technische staat van het gebouw en mogelijke gebreken."
              icon={<FileCheck size={24} />}
              color="blue"
            />
            <ServiceCard 
              title="Energieadvies" 
              description="Krijg inzicht in de energieprestatie van uw woning en advies over verbeteringen."
              icon={<Gauge size={24} />}
              color="lightBlue"
            />
          </div>
          
          <div className="mt-12 text-center">
            <button className="custom-button">
              Alle Diensten Bekijken
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <InfoSection 
        title="Uw betrouwbare partner in huisinformatie"
        subtitle="Over ons"
        description="HuisInfo is opgericht in 2015 met als doel consumenten te voorzien van betrouwbare en complete informatie over woningen. Onze experts hebben jarenlange ervaring in de vastgoedsector en bouwtechniek, waardoor we u kunnen voorzien van professioneel en betrouwbaar advies."
        features={[
          "Meer dan 10.000 tevreden klanten",
          "Landelijke dekking in heel Nederland",
          "Gecertificeerde inspecteurs",
          "Transparante werkwijze en prijzen"
        ]}
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        action={
          <button className="custom-button">
            Meer Over Ons
            <ArrowRight size={16} />
          </button>
        }
      />
      
      {/* Working Method */}
      <InfoSection 
        title="Hoe wij werken"
        subtitle="Onze werkwijze"
        description="Onze werkwijze is ontworpen om u zo goed mogelijk te ondersteunen bij het verkrijgen van informatie over uw huidige of toekomstige woning. We zorgen voor een soepel en transparant proces van begin tot eind."
        features={[
          "Vrijblijvende intake en offerte",
          "Grondige inspectie of analyse",
          "Uitgebreid rapport met bevindingen",
          "Persoonlijke nabespreking"
        ]}
        image="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        reversed={true}
        bgClass="bg-brand-gray"
        action={
          <div className="flex flex-wrap gap-4">
            <button className="custom-button">
              Werkwijze Bekijken
              <ArrowRight size={16} />
            </button>
            <button className="custom-button-outline">
              Contact Opnemen
            </button>
          </div>
        }
      />
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-lightBlue font-semibold uppercase tracking-wider">Wat klanten zeggen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
              Ervaringen van onze klanten
            </h2>
            <p className="text-gray-600">
              Ontdek wat onze klanten te zeggen hebben over onze dienstverlening en hoe we hen hebben geholpen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD700" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "HuisInfo heeft mij enorm geholpen bij het maken van een keuze voor onze nieuwe woning. De inspectie was grondig en het rapport zeer duidelijk. Dankzij hun advies hebben we een flinke korting op de aankoopprijs kunnen bedingen."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-semibold text-lg">
                    {item === 1 ? "JV" : item === 2 ? "MB" : "KD"}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">
                      {item === 1 ? "Jan Visser" : item === 2 ? "Monique Bakker" : "Kees de Vries"}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item === 1 ? "Amsterdam" : item === 2 ? "Rotterdam" : "Utrecht"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-lightBlue/20 rounded-full filter blur-3xl"></div>
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om meer te weten te komen over uw woning?
            </h2>
            <p className="text-brand-lightBlue/80 mb-8 text-lg">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om meer informatie te ontvangen over onze diensten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brand-blue font-medium px-8 py-3 rounded-md hover:bg-brand-lightBlue transition-colors flex items-center gap-2">
                Offerte Aanvragen
                <ArrowRight size={16} />
              </button>
              <button className="border-2 border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
                Contact Opnemen
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
