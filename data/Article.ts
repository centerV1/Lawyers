import { StaticImageData } from "next/image";
import Pic1 from "@/public/law-hero.webp";

export interface ListItem {
  title?: string;
  description: string;
}

export interface ArticleSection {
  id: number;
  heading: string;
  paragraphs?: string[];
  listItems?: ListItem[];
}

export interface ArticleItem {
  articleId: number;
  title_th: string;
  title_en: string;
  subtitle_th: string;
  subtitle_en: string;
  excerpt_th: string;
  excerpt_en: string;
  description_th?: string; 
  description_en?: string;
  sections_th?: ArticleSection[]; 
  sections_en?: ArticleSection[]; 
  conclusion_th?: string[]; 
  conclusion_en?: string[];
  listImage: string | StaticImageData;
  detailImage: string | StaticImageData;
  [key: string]: any; 
}

export const articleData: ArticleItem[] = [
  {
    articleId: 1,
    title_th: "กฎหมายกับชีวิต: ทำไม \"กฎหมาย\" จึงไม่ใช่เรื่องไกลตัว และความท้าทายในยุคดิจิทัล",
    title_en: "Law and Life: Why the \"Law\" Isn't a Distant Concept and Its Challenges in the Digital Age",
    subtitle_th: "เมื่อพูดถึงคำว่า \"กฎหมาย\" ภาพแรกที่หลายคนนึกถึงมักจะเป็นเรื่องของศาล ทนายความ ตำรวจ หรืออาชญากรรม ทำให้เกิดความรู้สึกว่ากฎหมายเป็นเรื่องไกลตัว เข้าใจยาก และเป็นเรื่องที่ควรหลีกเลี่ยงหากไม่จำเป็น",
    subtitle_en: "When we hear the word \"law,\" the first images that often come to mind are courts, lawyers, police, or crime. This can make the law feel like a distant, overly complex concept—something best avoided unless absolutely necessary.",
    excerpt_th: "บทความนี้จะพาไปทำความเข้าใจว่าทำไมกฎหมายจึงเป็นรากฐานสำคัญของสังคมมนุษย์ บทบาทของกฎหมายในชีวิตประจำวัน และความท้าทายใหม่ๆ ที่กระบวนการยุติธรรมต้องเผชิญในยุคที่เทคโนโลยีพัฒนาอย่างก้าวกระโดด",
    excerpt_en: "This article will explore why the law is the fundamental foundation of human society, its role in our daily lives, and the new challenges the justice system faces in an era of rapid technological advancement.",
    
    sections_th: [
      {
        id: 1,
        heading: "1. จุดเริ่มต้นของกฎหมาย: สัญญาประชาคมเพื่อการอยู่ร่วมกัน",
        paragraphs: [
          "มนุษย์เป็นสัตว์สังคมที่ไม่สามารถอยู่โดดเดี่ยวได้ เมื่อคนจำนวนมากมาอยู่รวมกัน ย่อมมีความคิดเห็น ความต้องการ และผลประโยชน์ที่แตกต่างกัน กฎหมายจึงเกิดขึ้นมาในฐานะ \"กติกาของสังคม\" เพื่อจัดระเบียบและกำหนดขอบเขตสิทธิเสรีภาพของแต่ละบุคคล ไม่ให้ละเมิดซึ่งกันและกัน",
          "หากไม่มีกฎหมาย สังคมจะตกอยู่ในสภาวะอนาธิปไตยที่ผู้แข็งแกร่งกว่ากดขี่ผู้อ่อนแอ กฎหมายจึงทำหน้าที่คุ้มครองผู้คน สร้างความยุติธรรม และรักษาความสงบเรียบร้อย เพื่อให้ทุกคนสามารถดำเนินชีวิตได้อย่างปลอดภัย"
        ]
      },
      {
        id: 2,
        heading: "2. วงจรชีวิตกับกฎหมาย: กติกาที่โอบอุ้มเราตั้งแต่เกิดจนตาย",
        paragraphs: [
          "กฎหมายไม่ใช่แค่วิชาในตำรา แต่คือข้อกำหนดที่ผูกพันกับเราในทุกย่างก้าว ลองพิจารณาวงจรชีวิตของเราดู จะพบว่ากฎหมายเข้ามามีบทบาทเสมอ:"
        ],
        listItems: [
          {
            title: "วัยแรกเกิด",
            description: "เมื่อเราเกิด กฎหมายกำหนดให้ต้องมีการ \"แจ้งเกิด\" เพื่อออกสูติบัตร เป็นการรับรองสถานะบุคคล สิทธิในการเป็นพลเมือง และสิทธิพื้นฐานต่างๆ"
          },
          {
            title: "วัยเยาว์และวัยรุ่น",
            description: "กฎหมายคุ้มครองเด็กและเยาวชนจากการถูกทารุณกรรมหรือการใช้แรงงานผิดกฎหมาย เมื่ออายุถึงเกณฑ์ก็ต้องทำ \"บัตรประจำตัวประชาชน\" เพื่อเป็นหลักฐานยืนยันตัวตน และเมื่อบรรลุนิติภาวะก็จะมีสิทธิในการทำนิติกรรมต่างๆ ได้ด้วยตนเองอย่างสมบูรณ์"
          },
          {
            title: "วัยทำงานและการสร้างครอบครัว",
            description: "การเข้าทำงานต้องอาศัยกฎหมายแรงงานที่คุ้มครองเรื่องค่าจ้าง เมื่อซื้อบ้านหรือรถ ก็ต้องเกี่ยวข้องกับกฎหมายแพ่งและพาณิชย์ และเมื่อตกลงปลงใจสร้างครอบครัว การ \"จดทะเบียนสมรส\" ก็เป็นกระบวนการทางกฎหมาย"
          },
          {
            title: "วาระสุดท้ายของชีวิต",
            description: "แม้กระทั่งเมื่อเสียชีวิต กฎหมายก็ยังเข้ามาจัดการผ่านการ \"แจ้งตาย\" และการจัดการ \"มรดก\" เพื่อส่งต่อทรัพย์สินหรือหนี้สินไปยังทายาท"
          }
        ]
      },
      {
        id: 3,
        heading: "3. ความแตกต่างระหว่าง \"คดีอาญา\" และ \"คดีแพ่ง\"",
        paragraphs: [
          "เพื่อความเข้าใจพื้นฐาน กฎหมายที่ใกล้ตัวเรามักแบ่งออกเป็น 2 ประเภทใหญ่ๆ ซึ่งมีวัตถุประสงค์ต่างกันอย่างชัดเจน:"
        ],
        listItems: [
          {
            title: "กฎหมายอาญา",
            description: "เป็นกฎหมายที่ว่าด้วยความผิดและบทลงโทษ มุ่งเน้นการรักษาความสงบของสังคมส่วนรวม รัฐจะเป็นผู้เข้ามาจัดการและมีบทลงโทษที่รุนแรง เช่น จำคุก หรือปรับ"
          },
          {
            title: "กฎหมายแพ่ง",
            description: "เป็นกฎหมายที่ว่าด้วยความสัมพันธ์ระหว่างเอกชนด้วยกันเอง มุ่งเน้นการชดเชยเยียวยาความเสียหาย บทลงโทษมักจะเป็นการชดใช้ค่าสินไหมทดแทน"
          }
        ]
      },
      {
        id: 4,
        heading: "4. ความท้าทายของกฎหมายในยุคดิจิทัล (Digital Age)",
        paragraphs: [
          "ปัจจุบัน โลกกำลังหมุนไปด้วยเทคโนโลยีและอินเทอร์เน็ต ทำให้เกิดอาณาเขตใหม่ที่เรียกว่า \"โลกไซเบอร์\" ซึ่งมาพร้อมกับความท้าทายใหม่ๆ ที่กฎหมายยุคเก่าอาจครอบคลุมไม่ถึง:"
        ],
        listItems: [
          {
            title: "อาชญากรรมทางไซเบอร์ (Cybercrime)",
            description: "การหลอกลวงออนไลน์ การแฮ็กข้อมูล หรือมัลแวร์เรียกค่าไถ่ ท้าทายกระบวนการยุติธรรมอย่างมาก เพราะผู้กระทำผิดอาจอยู่คนละประเทศ"
          },
          {
            title: "การคุ้มครองข้อมูลส่วนบุคคล (Data Privacy)",
            description: "กฎหมายอย่าง PDPA กลายเป็นสิ่งจำเป็นอย่างยิ่ง เพื่อป้องกันไม่ให้องค์กรนำข้อมูลส่วนตัวของเราไปใช้แสวงหาผลประโยชน์โดยไม่ได้รับอนุญาต"
          },
          {
            title: "ปัญญาประดิษฐ์ (AI) กับลิขสิทธิ์",
            description: "เมื่อ AI สามารถสร้างสรรค์ผลงานได้ คำถามที่ตามมาคือ \"ใครคือเจ้าของลิขสิทธิ์?\" นี่คือประเด็นใหม่ที่กำลังหาข้อสรุป"
          }
        ]
      }
    ],
    conclusion_th: [
      "\"กฎหมาย\" ไม่ใช่กรงขังที่จำกัดอิสรภาพ แต่เป็น \"เกราะป้องกัน\" ที่ช่วยคุ้มครองสิทธิ เสรีภาพ และทรัพย์สินของเรา การมีความรู้ความเข้าใจในกฎหมายพื้นฐาน จึงเปรียบเสมือนการมีภูมิคุ้มกันในการใช้ชีวิต",
      "ในโลกที่เปลี่ยนแปลงไปอย่างรวดเร็ว กฎหมายเองก็ต้องปรับตัวให้ทันกับยุคสมัย และพลเมืองอย่างเราก็ควรหมั่นอัปเดตความรู้ทางกฎหมายไว้เสมอ"
    ],
    sections_en: [
      {
        id: 1,
        heading: "1. The Origins of Law: A Social Contract for Coexistence",
        paragraphs: [
          "Humans are social creatures who cannot live in isolation. When a large number of people live together, there will inevitably be different opinions, desires, and interests. The law was created as the 'rules of society' to maintain order and define the boundaries of individual rights and freedoms, ensuring we do not violate one another.",
          "Without law, society would fall into a state of anarchy where the strong oppress the weak. Therefore, the law serves to protect people, establish justice, and maintain peace so that everyone can live safely."
        ]
      },
      {
        id: 2,
        heading: "2. The Life Cycle and the Law: Rules that Embrace Us from Birth to Death",
        paragraphs: [
          "The law isn't just a subject in a textbook; it’s a set of rules that binds our every step. If we look at our life cycle, we will find that the law always plays a role:"
        ],
        listItems: [
          {
            title: "Infancy",
            description: "When we are born, the law requires a 'birth registration' to issue a birth certificate. This officially recognizes a person's legal status, citizenship rights, and basic rights."
          },
          {
            title: "Childhood and Adolescence",
            description: "Child protection laws shield minors from abuse. Upon reaching a certain age, we must get a 'National ID Card' and when we reach the legal age of majority, we gain full legal capacity."
          },
          {
            title: "Adulthood and Family Building",
            description: "Entering the workforce involves Labor Laws. Buying a house involves the Civil and Commercial Code. 'Marriage registration' is a legal process that establishes rights between spouses."
          },
          {
            title: "The End of Life",
            description: "Even when we pass away, the law steps in to manage the process through 'death registration' and 'inheritance' management."
          }
        ]
      },
      {
        id: 3,
        heading: "3. The Difference Between 'Criminal' and 'Civil' Cases",
        paragraphs: [
          "To understand the basics, the laws closest to us are usually divided into two main categories, which have distinctly different objectives:"
        ],
        listItems: [
          {
            title: "Criminal Law",
            description: "This law deals with offenses and punishments, focusing on maintaining public peace and order. The penalties are severe, such as imprisonment or fines."
          },
          {
            title: "Civil Law",
            description: "This law deals with relationships between private individuals or entities, focusing on compensation and remedies for damages."
          }
        ]
      },
      {
        id: 4,
        heading: "4. The Challenges of Law in the Digital Age",
        paragraphs: [
          "Today, the world revolves around technology and the internet, creating a new territory called 'Cyberspace.' This brings new challenges:"
        ],
        listItems: [
          {
            title: "Cybercrime",
            description: "Online scams, data hacking, or ransomware challenge the justice system because perpetrators might be in a different country."
          },
          {
            title: "Data Privacy",
            description: "Laws like the PDPA have become essential to prevent organizations from using our personal data for profit without explicit consent."
          },
          {
            title: "Artificial Intelligence (AI) and Copyrights",
            description: "When AI can generate works, the legal question is: 'Who owns the copyright?' This is a new frontier for legal experts."
          }
        ]
      }
    ],
    conclusion_en: [
      "The 'law' is not a cage that limits our freedom; it is a 'shield' that helps protect our rights, liberties, and property. Having a basic understanding of the law is like having a strong immune system for life.",
      "In a rapidly changing world, the law itself must adapt to the times. As citizens, we should continuously update our legal knowledge, because ignorance of the law can never be used as an excuse for breaking it."
    ],
    
    listImage: Pic1,
    detailImage: Pic1,
  },
  // --------------------------------------------------------------------------
  {
    articleId: 2,
    title_th: "กฎหมาย AI: กติกาใหม่ในยุคที่ปัญญาประดิษฐ์คิดแทนมนุษย์",
    title_en: "AI Law: The New Rules in an Era Where Artificial Intelligence Thinks for Humans",
    subtitle_th: "เมื่อ AI ฉลาดขึ้นเรื่อยๆ ใครจะเป็นผู้รับผิดชอบเมื่อเกิดความผิดพลาด?",
    subtitle_en: "As AI gets smarter, who is responsible when things go wrong?",
    excerpt_th: "สำรวจความท้าทายทางกฎหมายที่เกิดจากการใช้ AI ทั้งเรื่องลิขสิทธิ์ ความเป็นส่วนตัว และความรับผิดชอบ",
    excerpt_en: "Explore the legal challenges posed by AI, including copyrights, privacy, and liability.",
    
    sections_th: [
      {
        id: 1,
        heading: "1. ลิขสิทธิ์ของผลงานที่สร้างโดย AI",
        paragraphs: [
          "หนึ่งในคำถามที่ถกเถียงกันมากที่สุดคือ ภาพวาด บทความ เพลง หรือโค้ดที่ AI สร้างขึ้นมานั้น 'ใครคือเจ้าของลิขสิทธิ์?'",
          "ปัจจุบันหลายประเทศ (รวมถึงไทย) มีแนวโน้มการตีความว่า ผลงานที่สร้างโดย AI ล้วนๆ จะไม่ได้รับความคุ้มครองทางลิขสิทธิ์ เพราะขาด 'ความคิดสร้างสรรค์โดยมนุษย์' แต่หากมนุษย์มีการนำผลงานนั้นมาปรับแต่งหรือต่อยอดอย่างมีนัยสำคัญ ก็อาจจดลิขสิทธิ์ในส่วนที่มนุษย์ทำเพิ่มเติมได้"
        ]
      },
      {
        id: 2,
        heading: "2. ความเป็นส่วนตัว (Data Privacy) และการละเมิดข้อมูล",
        paragraphs: [
          "AI ต้องใช้ข้อมูลจำนวนมหาศาล (Big Data) ในการฝึกฝนโมเดล (Train) ซึ่งในกองข้อมูลนั้นมักมี 'ข้อมูลส่วนบุคคล' ของพวกเราปะปนอยู่ด้วย",
          "กฎหมายคุ้มครองข้อมูลส่วนบุคคลอย่าง PDPA ในไทย หรือ GDPR ในยุโรป จึงเข้ามามีบทบาทสำคัญมากในการตีกรอบว่า บริษัทเทคโนโลยีสามารถดูดข้อมูลอะไรไปสอน AI ได้บ้าง และต้องขอความยินยอมจากเจ้าของข้อมูลอย่างไร เพื่อไม่ให้ละเมิดสิทธิส่วนบุคคล"
        ]
      },
      {
        id: 3,
        heading: "3. ใครต้องรับผิดชอบเมื่อ AI ทำพลาด? (Liability)",
        paragraphs: [
          "ลองจินตนาการถึง 'รถยนต์ไร้คนขับ' ที่ขับเคลื่อนด้วย AI หากเกิดระบบรวนแล้วไปชนคนเดินถนน ใครจะต้องจ่ายค่าเสียหาย? เจ้าของรถที่นั่งอยู่เฉยๆ? บริษัทผู้ผลิตรถยนต์? หรือโปรแกรมเมอร์ที่เขียนโค้ด AI?",
          "นี่ยังเป็นพื้นที่สีเทาทางกฎหมายที่ทั่วโลกกำลังพยายามหาข้อสรุป ปัจจุบันแนวทางกฎหมายกำลังพยายามสร้างความชัดเจนในเรื่อง 'ความรับผิด' โดยอาจต้องดูเป็นกรณีไปว่าความผิดพลาดเกิดจากฮาร์ดแวร์ ซอฟต์แวร์ หรือการใช้งานที่ผิดประเภทของผู้ใช้"
        ]
      }
    ],
    conclusion_th: [
      "กฎหมาย AI ยังคงเป็นเรื่องใหม่และกำลังพัฒนาแบบวันต่อวัน เทคโนโลยีวิ่งไปข้างหน้าอย่างรวดเร็ว กฎหมายจึงต้องเร่งสปีดตามให้ทัน",
      "การก้าวให้ทันเทคโนโลยีในยุคนี้จึงไม่ใช่แค่เรื่องของความสะดวกสบายหรือการเพิ่มประสิทธิภาพในการทำงาน แต่รวมถึงการ 'รู้เท่าทัน' ข้อจำกัดและกรอบทางกฎหมาย เพื่อป้องกันไม่ให้เราเผลอทำผิดกฎหมายโดยไม่รู้ตัว"
    ],

    sections_en: [
      {
        id: 1,
        heading: "1. Copyright of AI-Generated Works",
        paragraphs: [
          "One of the most heavily debated questions today is: 'Who owns the copyright' to images, articles, music, or code generated entirely by an AI?",
          "Currently, many jurisdictions lean towards the interpretation that purely AI-generated works are not eligible for copyright protection because they lack 'human authorship.' However, if a human significantly modifies or builds upon the AI's output, that human contribution might be copyrightable."
        ]
      },
      {
        id: 2,
        heading: "2. Data Privacy and Infringement",
        paragraphs: [
          "AI models require massive amounts of data (Big Data) for training. Often, this data includes our 'personal information.'",
          "Data protection laws like the PDPA in Thailand or the GDPR in Europe play a crucial role in establishing boundaries. They dictate what data tech companies can scrape to train their AI and how they must obtain consent, ensuring individual privacy rights are not violated."
        ]
      },
      {
        id: 3,
        heading: "3. Who is Responsible When AI Makes a Mistake? (Liability)",
        paragraphs: [
          "Imagine an AI-powered 'self-driving car.' If the system malfunctions and hits a pedestrian, who pays the damages? The passenger who owns the car? The manufacturer? Or the programmer who wrote the AI code?",
          "This remains a legal gray area worldwide. Current legal frameworks are striving to clarify 'liability,' often requiring a case-by-case analysis to determine whether the fault lies in the hardware, the software, or user misuse."
        ]
      }
    ],
    conclusion_en: [
      "AI law is still in its infancy and evolves daily. Technology is sprinting forward, and legislation must work hard to keep up the pace.",
      "In this era, keeping up with technology isn't just about maximizing efficiency; it's also about 'staying informed' of legal boundaries to ensure we don't inadvertently break the law."
    ],
    listImage: Pic1,
    detailImage: Pic1,
  },
  // --------------------------------------------------------------------------
  {
    articleId: 3,
    title_th: "กฎหมายครอบครัว: ข้อควรรู้เมื่อชีวิตคู่ต้องเดินมาถึงจุด 'หย่าร้าง'",
    title_en: "Family Law: What You Need to Know When a Marriage Reaches 'Divorce'",
    subtitle_th: "เตรียมความพร้อมทางกฎหมาย เพื่อการเริ่มต้นใหม่ที่ยุติธรรม",
    subtitle_en: "Legal preparation for a fair and just new beginning.",
    excerpt_th: "ทำความเข้าใจประเภทของการหย่า การแบ่งสินสมรส และสิทธิในการดูแลบุตร เพื่อปกป้องสิทธิของคุณและครอบครัว",
    excerpt_en: "Understand the types of divorce, division of marital property, and child custody rights to protect yourself and your family.",
    
    sections_th: [
      {
        id: 1,
        heading: "1. รูปแบบของการหย่าตามกฎหมาย",
        paragraphs: [
          "การยุติความสัมพันธ์ทางกฎหมายหรือการหย่าร้างในประเทศไทย แบ่งออกเป็น 2 รูปแบบหลัก ซึ่งมีความยากง่ายและขั้นตอนที่ต่างกันอย่างชัดเจน:"
        ],
        listItems: [
          {
            title: "การหย่าโดยความยินยอม",
            description: "เป็นวิธีที่ง่ายที่สุด เมื่อทั้งสองฝ่ายตกลงกันได้ ก็สามารถจูงมือกันไปจดทะเบียนหย่าที่ที่ว่าการอำเภอหรือเขตได้เลย โดยต้องมีพยาน 2 คน"
          },
          {
            title: "การหย่าโดยคำพิพากษาของศาล (ฟ้องหย่า)",
            description: "เกิดขึ้นเมื่อฝ่ายใดฝ่ายหนึ่งไม่ยอมหย่า หรือตกลงเรื่องทรัพย์สินและลูกไม่ได้ จึงต้องนำเรื่องขึ้นศาลเพื่อให้ศาลเป็นผู้ตัดสิน"
          }
        ]
      },
      {
        id: 2,
        heading: "2. เหตุฟ้องหย่าที่พบบ่อย",
        paragraphs: [
          "หากต้องฟ้องหย่า กฎหมายกำหนดว่าต้องมี 'เหตุฟ้องหย่า' ตามที่ระบุไว้ชัดเจน ไม่สามารถฟ้องหย่าเพียงเพราะหมดรักได้ เหตุฟ้องหย่าที่พบบ่อย ได้แก่:"
        ],
        listItems: [
          {
            title: "การคบชู้",
            description: "สามีหรือภรรยาอุปการะเลี้ยงดู หรือยกย่องผู้อื่นฉันภรรยาหรือสามี หรือมีความสัมพันธ์ลึกซึ้งกับผู้อื่นเป็นประจำ"
          },
          {
            title: "การทำร้ายร่างกายหรือจิตใจ",
            description: "การทำร้าย ทรมานร่างกาย หรือหมิ่นประมาทเหยียดหยามอีกฝ่ายอย่างร้ายแรง"
          },
          {
            title: "การทิ้งร้าง",
            description: "จงใจทิ้งร้างอีกฝ่ายไปเกิน 1 ปี หรือแยกกันอยู่เพราะเหตุที่ไม่อาจอยู่ร่วมกันได้อย่างสันติเกิน 3 ปี"
          }
        ]
      },
      {
        id: 3,
        heading: "3. การแบ่งทรัพย์สินและหนี้สิน",
        paragraphs: [
          "เรื่องเงินๆ ทองๆ เป็นสาเหตุหลักของข้อพิพาทหลังแต่งงาน หลักการแบ่งทรัพย์สินเบื้องต้นมีดังนี้:"
        ],
        listItems: [
          {
            title: "สินส่วนตัว",
            description: "ทรัพย์สินที่มีมาก่อนจดทะเบียนสมรส หรือได้มาจากการรับมรดก/การให้โดยเสน่หา 'ไม่ต้องแบ่ง' ให้ตกเป็นของฝ่ายนั้นตามเดิม"
          },
          {
            title: "สินสมรส",
            description: "ทรัพย์สินที่หาได้ร่วมกันหลังจดทะเบียนสมรส (รวมถึงดอกผลของสินส่วนตัว) ตามกฎหมายแล้วต้อง 'แบ่งคนละครึ่ง' เท่าๆ กัน"
          },
          {
            title: "หนี้สินสมรส",
            description: "หนี้ที่สร้างร่วมกัน หรือหนี้ที่นำมาใช้จ่ายในครอบครัว ทั้งคู่ต้องรับผิดชอบชดใช้ร่วมกัน"
          }
        ]
      },
      {
        id: 4,
        heading: "4. สิทธิในการปกครองบุตร (อำนาจปกครอง)",
        paragraphs: [
          "เรื่องที่ละเอียดอ่อนที่สุดคือการตกลงเรื่องลูก หากหย่าโดยความยินยอม ทั้งคู่สามารถตกลงกันเองได้ว่าใครจะเป็นผู้ใช้อำนาจปกครอง หรือจะใช้ร่วมกัน",
          "แต่หากเป็นการฟ้องหย่า ศาลจะเป็นผู้กำหนดโดยพิจารณาจาก 'ความผาสุกและประโยชน์สูงสุดของเด็ก' เป็นสำคัญ ไม่ได้แปลว่าแม่หรือพ่อจะได้สิทธิเสมอไป แต่ดูที่ความพร้อมในการดูแลและสภาพแวดล้อม"
        ]
      }
    ],
    conclusion_th: [
      "การหย่าร้างไม่ใช่เรื่องที่ใครอยากให้เกิด แต่เมื่อชีวิตคู่เดินทางมาถึงจุดที่ต้องแยกย้าย การทำความเข้าใจข้อกฎหมายจะช่วยลดความขัดแย้งที่รุนแรงลงได้",
      "การตกลงกันด้วยความประนีประนอม โดยเห็นแก่ประโยชน์ของบุตรเป็นที่ตั้ง คือทางออกที่ดีที่สุด เพื่อให้ทั้งสองฝ่ายสามารถเริ่มต้นชีวิตใหม่ได้อย่างเป็นธรรมและสงบสุข"
    ],

    sections_en: [
      {
        id: 1,
        heading: "1. Types of Legal Divorce",
        paragraphs: [
          "Terminating a legal relationship or divorcing in Thailand is divided into two main types, which differ significantly in complexity and procedure:"
        ],
        listItems: [
          {
            title: "Uncontested Divorce (Mutual Consent)",
            description: "The easiest method. If both parties agree, they can register the divorce at the district office in the presence of two witnesses."
          },
          {
            title: "Contested Divorce (By Court Judgment)",
            description: "Occurs when one party refuses to divorce or when agreements on assets and children cannot be reached, requiring court intervention."
          }
        ]
      },
      {
        id: 2,
        heading: "2. Common Grounds for Contested Divorce",
        paragraphs: [
          "To file for a contested divorce, the law requires specific 'grounds for divorce.' Falling out of love is not legally sufficient. Common grounds include:"
        ],
        listItems: [
          {
            title: "Adultery",
            description: "A spouse openly maintains or treats another person as a husband/wife, or has regular intimate relationships with someone else."
          },
          {
            title: "Physical or Mental Abuse",
            description: "Inflicting severe physical harm, torture, or serious insults and defamation against the other spouse."
          },
          {
            title: "Desertion",
            description: "Intentionally abandoning the other party for more than 1 year, or living separately due to an inability to cohabit peacefully for over 3 years."
          }
        ]
      },
      {
        id: 3,
        heading: "3. Division of Assets and Debts",
        paragraphs: [
          "Financial matters are a primary source of post-marital disputes. The basic principles for dividing assets are:"
        ],
        listItems: [
          {
            title: "Personal Property (Sin Suan Tua)",
            description: "Assets acquired before marriage or received as an inheritance or gift. These 'do not need to be divided' and remain with the original owner."
          },
          {
            title: "Marital Property (Sin Somros)",
            description: "Assets acquired together after marriage (including fruits of personal property). By law, these must be 'divided equally' in half."
          },
          {
            title: "Marital Debts",
            description: "Debts incurred jointly or for household expenses must be repaid jointly by both parties."
          }
        ]
      },
      {
        id: 4,
        heading: "4. Child Custody Rights",
        paragraphs: [
          "The most sensitive issue is agreeing on the children. In a mutual consent divorce, the couple can agree on who gets custody or choose joint custody.",
          "In a contested divorce, the court will decide based on the 'child's ultimate happiness and best interests.' This doesn't automatically favor the mother or father, but rather the parent most capable of providing a stable environment."
        ]
      }
    ],
    conclusion_en: [
      "Divorce is not an outcome anyone desires. However, when a marriage reaches the point of separation, understanding the law helps mitigate intense conflicts.",
      "Reaching a compromise, with the child's best interests at heart, is the most constructive solution. It allows both parties to embark on a new chapter of their lives fairly and peacefully."
    ],
    
    listImage: Pic1,
    detailImage: Pic1,
  },
];