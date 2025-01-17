export async function GET() {
    // Sık sorulan sorular verisi
    const faqs = [
      {
        id: 1,
        question: "Hangi teknolojilerde uzmansınız?",
        answer: "React, Next.js, Node.js, Tailwind CSS ve MongoDB üzerinde uzmanım."
      },
      {
        id: 2,
        question: "Freelance projeler alıyor musunuz?",
        answer: "Evet, uygun projeler için freelance çalışıyorum."
      },
      {
        id: 3,
        question: "Hangi dillerde çalışıyorsunuz?",
        answer: "Ağırlıklı olarak JavaScript, ancak Python ve Swift ile de projeler geliştirdim."
      },
      {
        id: 4,
        question: "Proje teslim süreniz nedir?",
        answer: "Projenin karmaşıklığına bağlı olarak değişmekle birlikte, genelde 2-6 hafta arasında teslim ederim."
      }
    ];
  
    // JSON formatında faqs verisini döndür
    return new Response(JSON.stringify(faqs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  