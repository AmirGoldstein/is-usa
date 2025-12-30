import StarOfDavid from "@/components/StarOfDavid";

const Four = () => {
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <div className="min-h-screen bg-[#e8e4dc] md:py-5 py-0 bg-[#1a2e4a] md:bg-[#e8e4dc]" style={{ fontFamily: "'Source Serif 4', 'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap');
        
        @media print {
          body {
            background-color: white;
          }
          .page-container {
            margin: 0;
            box-shadow: none;
            width: 100%;
            height: auto;
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact;
          }
        }
      `}</style>

      <div className="page-container w-full md:w-[210mm] h-auto md:h-[297mm] mx-auto bg-[#f5f3ef] md:shadow-2xl overflow-hidden relative md:border border-[#d0c9bc]">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-br from-[#1a2e4a] to-[#2d4a6f] text-white py-4 md:py-6 px-4 md:px-10 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744] via-[#1a2744]/90 to-transparent z-[1]"></div>
          
          {/* NYC Skyline as background */}
          <img 
            src={`${basePath}nyc-skyline.png`}
            alt="NYC Skyline"
            className="absolute bottom-0 right-0 h-full w-auto opacity-60 pointer-events-none"
            style={{ mixBlendMode: 'multiply' }}
          />
          
          <h1 className="relative z-10 m-0 text-[20pt] md:text-[32pt] uppercase font-bold leading-tight tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '2px' }}>
            CONFRONTING ANTISEMITISM
          </h1>
          <h2 className="relative z-10 mt-1.5 mb-0 text-[12pt] md:text-[15pt] font-light tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            On Campus and in New York City
          </h2>
        </header>

        {/* Introduction Section */}
        <section className="py-3 md:py-4 px-4 md:px-10 bg-white text-[#2c3e50] border-t-[3px] border-[#d4a855]">
          <p className="m-0 text-[11pt] md:text-[12pt] leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Across US campuses and throughout New York City, antisemitism has risen sharply. Many Jewish students feel isolated, misrepresented, or pressured into silence. As I begin my MBA at NYU, I am stepping into this moment to bring an authentic Israeli voice that supports Jewish life, builds understanding, and counters misinformation with dignity and clarity.
          </p>
        </section>

        {/* Main Content Section */}
        <div className="relative">
          {/* Star of David background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <StarOfDavid size={200} className="text-[#d4a855]" />
          </div>
          
          <div className="relative z-10 bg-white px-4 md:px-10 py-4 md:py-5 border-t-[3px] border-[#d4a855]">
            {/* Who I Am - with picture on left */}
            <div className="mb-4 md:mb-5 flex flex-col md:flex-row gap-4">
              {/* Headshot */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-[3px] border-[#d4a855] shadow-md rounded-full overflow-hidden">
                  <img 
                    src={`${basePath}headshot.png`}
                    alt="Professional Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Paragraph */}
              <div className="flex-1">
                <p className="m-0 text-[11pt] md:text-[12pt] leading-relaxed text-[#2c3e50]" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  I serve as a Company Commander in the IDF special forces reserves, with over 400 days of active reserve duty since October 7. I have led sensitive operations with care and responsibility, and was personally recognized by senior commanders for my leadership. I hold a B.Sc. in Computer Science (Sigma Cum Laude) and co-founded a veterans association supporting soldiers returning to civilian life.
                </p>
              </div>
            </div>
            
            {/* Caption below paragraph */}
            <p className="text-[8pt] md:text-[9pt] text-[#6b7280] italic mb-4 md:mb-5" style={{ fontFamily: "'Source Serif 4', serif" }}>
              For personal security reasons, my name is not shown in this campaign. For questions, please contact me at <a href="mailto:app.ctrlshift@gmail.com" className="text-[#d4a855] hover:underline">app.ctrlshift@gmail.com</a>.
            </p>

            {/* My Mission and Why Support - side by side */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* My Mission */}
              <div className="flex-1">
                <h3 className="text-[#1a2e4a] text-[12pt] md:text-[14pt] mt-0 mb-2 md:mb-2.5 uppercase font-semibold tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '1.5px' }}>
                  MY MISSION ON CAMPUS
                </h3>
                <div className="space-y-2 md:space-y-2.5 text-[11pt] md:text-[12pt] leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  <p className="m-0 text-[#2c3e50]">
                    I want to stand with the Jewish community and students of New York City as they confront rising antisemitism and growing hostility.
                  </p>
                  <p className="m-0 font-semibold text-[#1a2e4a] relative pl-6">
                    <span className="absolute left-0 top-0 text-[#d4a855] text-[12pt]">★</span>
                    My aim is not to argue, but to open dialogue.
                  </p>
                  <p className="m-0 font-semibold text-[#1a2e4a] relative pl-6">
                    <span className="absolute left-0 top-0 text-[#d4a855] text-[12pt]">★</span>
                    Not to escalate, but to create safety, trust, and connection.
                  </p>
                  <p className="m-0 font-semibold text-[#1a2e4a] relative pl-6">
                    <span className="absolute left-0 top-0 text-[#d4a855] text-[12pt]">★</span>
                    I aim to represent Israel and the Jewish people with responsibility, humanity, and respect.
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-[2px] bg-[#d4a855]"></div>
              {/* Horizontal Divider for mobile */}
              <div className="block md:hidden h-[2px] bg-[#d4a855] my-2"></div>

              {/* Why Support */}
              <div className="flex-1">
                <h3 className="text-[#1a2e4a] text-[12pt] md:text-[14pt] mt-0 mb-2 md:mb-2.5 uppercase font-semibold tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '1.5px' }}>
                  WHY YOUR SUPPORT MATTERS
                </h3>
                <p className="m-0 mb-2 md:mb-2.5 text-[11pt] md:text-[12pt] leading-relaxed text-[#2c3e50]" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Studying in New York City while continuing reserve duty presents a significant academic challenge. I am seeking tuition-directed scholarship support to enable me to focus fully on my MBA studies.
                </p>
                <p className="m-0 mb-2 md:mb-2.5 text-[11pt] md:text-[12pt] leading-relaxed text-[#2c3e50]" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  This support allows me to bring an authentic Israeli voice into conversations where understanding and clarity are urgently needed.
                </p>
                <p className="m-0 text-[11pt] md:text-[12pt] leading-relaxed font-semibold text-[#2c3e50]" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  This is a partnership grounded in shared values and shared responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note Section */}
        <section className="py-3 md:py-4 px-4 md:px-10 bg-[#f8f6f2] text-[#2c3e50] border-t-[3px] border-[#d4a855]">
          <p className="m-0 text-[9pt] md:text-[10pt] leading-relaxed italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
            <strong>Important note:</strong> Funds raised through this campaign are not personal income and will be used solely for tuition payments made directly to the university. No funds will be used for housing, stipends, or personal expenses.
          </p>
        </section>

        {/* Closing Section */}
        <footer className="bg-[#1a2e4a] text-white py-4 md:py-6 px-4 md:px-10 relative overflow-hidden border-t-[3px] border-[#d4a855]">
          {/* Decorative Stars - scattered randomly */}
          <div className="absolute left-[8%] top-[15%] text-sm opacity-50 text-[#d4a855]">✦</div>
          <div className="absolute right-[15%] top-[25%] text-xl opacity-65 text-[#d4a855]">✦</div>
          <div className="absolute left-[25%] top-[45%] text-xs opacity-55 text-[#d4a855]">✦</div>
          <div className="absolute right-[8%] top-[60%] text-base opacity-70 text-[#d4a855]">✦</div>
          <div className="absolute left-[45%] top-[20%] text-lg opacity-60 text-[#d4a855]">✦</div>
          <div className="absolute right-[30%] top-[80%] text-sm opacity-75 text-[#d4a855]">✦</div>
          <div className="absolute left-[70%] top-[35%] text-base opacity-50 text-[#d4a855]">✦</div>
          <div className="absolute left-[15%] top-[75%] text-xl opacity-65 text-[#d4a855]">✦</div>
          <div className="absolute right-[45%] top-[50%] text-xs opacity-80 text-[#d4a855]">✦</div>
          <div className="absolute left-[60%] top-[70%] text-base opacity-60 text-[#d4a855]">✦</div>
          <div className="absolute right-[20%] top-[40%] text-sm opacity-70 text-[#d4a855]">✦</div>
          <div className="absolute left-[35%] top-[85%] text-lg opacity-55 text-[#d4a855]">✦</div>
          
          <div className="relative z-10">
            <p className="italic text-[11pt] md:text-[12pt] mb-3 md:mb-4 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              "Look toward the heavens and count the stars, if you are able to count them… so shall your descendants be." &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[9pt] md:text-[10pt] opacity-90" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Genesis 15:5 · בראשית ט״ו, ה׳</span>
            </p>
            
            <p className="text-[11pt] md:text-[12pt] leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              The stars are always there. In daylight, they cannot be seen. In darkness, they shine clearly.
              <br />
              So it is with the Jewish people. We endure, we stand together, and we shine when it matters most.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Four;

