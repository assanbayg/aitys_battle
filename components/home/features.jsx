/* eslint-disable react/no-unescaped-entities */

const Features = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h3 className="text-4xl text-center mb-8">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-brown text-beige rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 17l5-5-5-5" />
                <path d="M20 12H4" />
              </svg>
            </div>
            <h4 className="text-2xl mb-4">Historical Figures</h4>
            <p>Choose from a variety of iconic figures from Kazakh history to duel against.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-brown text-beige rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h4 className="text-2xl mb-4">Verbal Dueling</h4>
            <p>Engage in verbal jousts with AI-generated text and showcase your skills.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-brown text-beige rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-2xl mb-4">Game Format</h4>
            
<p className="text-center">
            Keep track of your and the AI's HP as you duel. <br/> Be strategic and win the battle! 
</p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
