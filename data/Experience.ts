import { StaticImageData } from "next/image";
import Pic1 from "@/public/law-hero.webp";
import DetailPic1 from "@/public/law-hero.webp";

export interface ListItem {
  title?: string;
  description: string;
}

export interface ExperienceSection {
  id: number;
  heading: string;
  paragraphs?: string[];
  listItems?: ListItem[];
}

export interface ExperienceItem {
  experienceId: number;
  title_th: string;
  title_en: string;
  subtitle_th: string;
  subtitle_en: string;
  description_th: string;
  description_en: string;
  sections_th?: ExperienceSection[];
  sections_en?: ExperienceSection[];
  conclusion_th?: string[];
  conclusion_en?: string[];
  listImage: string | StaticImageData;
  detailImage: string | StaticImageData;
  [key: string]: any;
}

export const experienceData = [
  {
    experienceId: 1,
    title_th: "คดียาเสพติดระหว่างประเทศ (สหรัฐอเมริกา - อังกฤษ)",
    title_en: "International Drug Case (USA - UK)",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "Test",
    description_th: "คดีนี้เป็นคดีความข้ามชาติที่มีความละเอียดอ่อนและซับซ้อนทางกฎหมายสูง โดยลูกความชาวต่างชาติ (สัญชาติอเมริกัน) ถูกเจ้าหน้าที่เข้าจับกุมและตั้งข้อหาในคดีที่เกี่ยวข้องกับยาเสพติด ซึ่งเป็นคดีที่มีอัตราโทษค่อนข้างสูง และมีผู้ประสานงาน/ผู้เกี่ยวข้องเชื่อมโยงกับทางประเทศอังกฤษ",
    description_en: "This case is a highly sensitive and legally complex international case involving a foreign client (American national) who was arrested and charged in a drug-related case. The case carries a high potential sentence and involves connections to the UK.",
    listImage: Pic1,
    detailImage: DetailPic1,
    sections_th: [
      {
        id: 1,
        heading: "การดำเนินการของทีมทนายความ",
        paragraphs: [
        ],
        listItems: [
          {
            title: "การเข้าช่วยเหลืออย่างทันท่วงที",
            description: "ทันทีที่ได้รับการติดต่อ ทีมทนายความของเราได้ลงพื้นที่เข้าเยี่ยมลูกความถึงในเรือนจำอย่างเร่งด่วน เพื่อตรวจสอบสภาพความเป็นอยู่ ให้คำปรึกษาเบื้องต้นเพื่อลดความวิตกกังวล และรวบรวมข้อเท็จจริงทั้งหมดจากลูกความโดยตรง"
          },
          {
            title: "การวางรูปคดีและยื่นขอประกันตัว",
            description: "คดียาเสพติดที่เกี่ยวข้องกับชาวต่างชาติมักมีเงื่อนไขที่เข้มงวดและศาลมักจะพิจารณาอย่างรัดกุมในการให้ประกันตัว ทีมงานของเราได้ทำการวิเคราะห์ข้อกฎหมายอย่างละเอียด รวบรวมหลักฐานที่จำเป็น และจัดเตรียมเอกสารคำร้องที่รัดกุม เพื่อแสดงให้ศาลเห็นถึงเหตุผลอันสมควรและหลักประกันที่น่าเชื่อถือ"
          },
          {
            title: "ความสำเร็จในชั้นการฝากขัง",
            description: "ด้วยความเชี่ยวชาญและการนำเสนอข้อกฎหมายที่ชัดเจนต่อศาล ทีมทนายความสามารถยื่นขอความเมตตาและโน้มน้าวศาลจนเป็นผลสำเร็จ ทำให้ศาลมีคำสั่งอนุญาตให้ปล่อยตัวชั่วคราว (ประกันตัว) ลูกความออกมาได้"
          },
        ]
      },
    ],
    conclusion_th: [
      "ปัจจุบันลูกความได้รับการปล่อยตัวออกจากเรือนจำเรียบร้อยแล้ว และกำลังอยู่ระหว่างการทำงานร่วมกับทีมทนายความของเราอย่างใกล้ชิด เพื่อรวบรวมพยานหลักฐานเพิ่มเติม วางแผนกลยุทธ์ และเตรียมความพร้อมสำหรับการต่อสู้คดีเพื่อพิสูจน์ความจริงในชั้นศาลต่อไป",
    ],
    sections_en: [
      {
        id: 1,
        heading: "The Legal Process and Strategy of the Defense Team",
        paragraphs: [
        ],
        listItems: [
          {
            title: "Timely Intervention",
            description: "Immediately upon being contacted, our legal team promptly visited the client in prison to assess their living conditions, provide initial counseling to alleviate anxiety, and gather all relevant facts directly from the client."
          },
          {
            title: "Case Strategy and Bail Application",
            description: "Drug cases involving foreign nationals often have stringent conditions, and courts tend to be cautious in granting bail. Our team conducted a thorough legal analysis, gathered necessary evidence, and prepared a comprehensive bail application to demonstrate to the court the reasonable grounds and credible assurances for release."
          },
          {
            title: "Success in Detention Hearing",
            description: "With expertise and a clear legal presentation to the court, our team successfully petitioned for mercy and influenced the court's decision, resulting in a favorable ruling that allowed the client to be temporarily released (bail)."
          },
        ]
      },
    ],
    conclusion_en: [
      "Currently, the client has been successfully released from prison and is working closely with our legal team to gather additional evidence, strategize, and prepare for the upcoming court proceedings to prove the truth in court."
    ],
  },
  {
    experienceId: 2,
    title_th: "การไกล่เกลี่ยและการต่อสู้ในชั้นศาลอย่างเต็มกำลัง",
    title_en: "Full-Force Mediation and Court Fight",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "หลังจากที่ทีมทนายความของเราประสบความสำเร็จในการยื่นขอประกันตัวลูกความชาวอเมริกันออกมาจากเรือนจำได้แล้ว กระบวนการต่อไปคือการปกป้องสิทธิและพิสูจน์ความบริสุทธิ์ของลูกความอย่างถึงที่สุด โดยแบ่งกลยุทธ์การทำงานออกเป็น 2 ส่วนสำคัญ",
    description_en: "After successfully securing bail for our American client, the next crucial step is to vigorously defend their rights and prove their innocence. The strategy is divided into two key components.",
    listImage: Pic1,
    detailImage: DetailPic1,
    sections_th: [
      {
        id: 1,
        heading: "การเจรจาไกล่เกลี่ยและหาแนวทางบรรเทาโทษ",
        paragraphs: [
          "แม้คดียาเสพติดจะเป็นคดีอาญาแผ่นดินที่มีข้อจำกัดในการยอมความ แต่ทีมทนายความของเราไม่ได้มองข้ามทุกโอกาสที่จะเป็นประโยชน์ต่อลูกความ",
        ],
        listItems: [
          {
            title: "การวิเคราะห์ช่องโหว่ของหลักฐาน",
            description: "เราได้ทำการตรวจสอบสำนวนและพยานหลักฐานของฝ่ายโจทก์อย่างละเอียดถี่ถ้วน เพื่อหาข้อบกพร่องหรือจุดอ่อนในกระบวนการสืบสวน"
          },
          {
            title: "การเจรจาต่อรองข้อกล่าวหา",
            description: "ทีมทนายได้เข้าพูดคุยและนำเสนอข้อเท็จจริงอีกด้านต่อพนักงานอัยการและศาล เพื่อชี้ให้เห็นถึงเจตนาที่แท้จริง บริบทแวดล้อม และข้อจำกัดทางภาษาของชาวต่างชาติ ซึ่งนำไปสู่การเจรจาเพื่อขอลดหย่อนความหนักเบาของข้อกล่าวหา หรือหาแนวทางบรรเทาผลร้ายที่ยุติธรรมที่สุดสำหรับลูกความ"
          },
        ]
      },
      {
        id: 2,
        heading: "การต่อสู้คดีในชั้นศาล (Trial & Cross-Examination)",
        paragraphs: [
          "เมื่อคดีเข้าสู่กระบวนการพิจารณาในชั้นศาล ทีมทนายความได้เตรียมความพร้อมสำหรับการสืบพยานอย่างรัดกุม:",
        ],
        listItems: [
          {
            title: "การซักค้านพยานโจทก์อย่างเฉียบขาด",
            description: "เราตั้งประเด็นซักค้านเจ้าหน้าที่ชุดจับกุมและพนักงานสอบสวน เพื่อตรวจสอบความชอบด้วยกฎหมายในขั้นตอนการจับกุม การค้น และการยึดของกลาง ว่าเป็นไปตามหลักสิทธิมนุษยชนและกฎหมายวิธีพิจารณาความอาญาหรือไม่"
          },
          {
            title: "การนำเสนอหลักฐานหักล้าง",
            description: "ทีมงานได้รวบรวมพยานหลักฐานทางนิติวิทยาศาสตร์ พยานเอกสารที่เชื่อมโยงกับทางประเทศอังกฤษ และพยานบุคคลฝ่ายจำเลยที่มีน้ำหนัก เพื่อหักล้างข้อสันนิษฐานของฝ่ายโจทก์ และพิสูจน์ให้ศาลเห็นถึงข้อสงสัยตามสมควร (Reasonable Doubt) เพื่อให้ศาลยกประโยชน์แห่งความสงสัยนั้นให้แก่จำเลย"
          },
        ]
      },
    ],
    conclusion_th: [
      "ด้วยประสบการณ์อันยาวนานในการว่าความคดีระหว่างประเทศ ทีมทนายความของเรายืนหยัดที่จะต่อสู้เคียงข้างลูกความในทุกขั้นตอนของศาล เพื่อให้มั่นใจว่าลูกความชาวต่างชาติจะได้รับสิทธิในการต่อสู้คดีอย่างเต็มที่ และได้รับความยุติธรรมสูงสุดภายใต้กฎหมายไทย",
    ],
    sections_en: [
      {
        id: 1,
        heading: "Mediation and Seeking Mitigation",
        paragraphs: [
          "While drug cases are typically non-compoundable offenses, our legal team does not overlook any opportunity that could benefit the client.",
        ],
        listItems: [
          {
            title: "Analyzing Evidence Weaknesses",
            description: "We thoroughly reviewed the prosecution's case files and evidence to identify any flaws or weaknesses in the investigation process."
          },
          {
            title: "Negotiating Charge Reductions",
            description: "Our attorneys engaged in discussions with prosecutors and the court to present alternative perspectives, highlighting the client's true intentions, surrounding circumstances, and language barriers as a foreign national. This led to negotiations aimed at reducing the severity of charges or finding the most just mitigation for the client."
          },
        ]
      },
      {
        id: 2,
        heading: "Trial & Cross-Examination",
        paragraphs: [
          "When the case proceeds to trial, our legal team prepares thoroughly for witness questioning:",
        ],
        listItems: [
          {
            title: "Aggressive Cross-Examination of Prosecution Witnesses",
            description: "We set up cross-examination points for arresting officers and investigators to scrutinize the legality of the arrest, search, and seizure processes, ensuring they comply with human rights standards and criminal procedure laws."
          },
          {
            title: "Presenting Rebuttal Evidence",
            description: "Our team gathered forensic evidence, documentary evidence linked to the UK, and credible defense witnesses to counter the prosecution's assumptions and establish reasonable doubt in the court's mind, aiming for a favorable outcome for the defendant."
          },
        ]
      },
    ],
    conclusion_en: [
      "With extensive experience in international litigation, our legal team is committed to standing by our client throughout every stage of the court process to ensure that the foreign national receives a full defense and the highest level of justice under Thai law.",
    ],
  },
  {
    experienceId: 3,
    title_th: "การเจรจาต่อรองและการร้องขอความเป็นธรรม",
    title_en: "Strategic Negotiation & Petitioning",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "ม้คดียาเสพติดจะเป็นคดีอาญาแผ่นดินที่ไม่สามารถใช้วิธีการไกล่เกลี่ยยอมความได้เหมือนคดีทั่วไป แต่ด้วยประสบการณ์ในการจัดการคดีที่มีความอ่อนไหวสูง ทีมทนายความของเราได้นำ \"ทักษะการเจรจาต่อรองทางกฎหมาย\" มาใช้เพื่อพลิกวิกฤตและหาทางออกที่ดีที่สุดให้กับลูกความชาวต่างชาติ โดยดำเนินการดังนี้",
    description_en: "While drug cases are non-compoundable offenses, our experienced legal team has employed strategic negotiation skills to navigate the complexities of this sensitive case and seek the best possible outcome for our foreign client. The approach includes:",
    listImage: Pic1,
    detailImage: DetailPic1,
    sections_th: [
      {
        id: 1,
        heading: "",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "การยื่นหนังสือร้องขอความเป็นธรรมต่อพนักงานอัยการ",
            description: "ก่อนที่สำนวนจะถูกส่งฟ้อง ทีมทนายได้วิเคราะห์ข้อบกพร่องในชุดจับกุมและพยานหลักฐาน รวบรวมข้อเท็จจริงอีกด้านที่เจ้าหน้าที่อาจมองข้าม และยื่นหนังสือร้องขอความเป็นธรรม เพื่อโน้มน้าวให้อัยการพิจารณาสั่งไม่ฟ้อง หรือปรับลดข้อกล่าวหาให้เบาลงและตรงกับความเป็นจริงมากที่สุด"
          },
          {
            title: "การเจรจาเพื่อบรรเทาผลร้ายตามประมวลกฎหมายยาเสพติด",
            description: "ทีมทนายความได้ใช้ความเชี่ยวชาญในข้อกฎหมายใหม่ เจรจาหาแนวทางที่ลูกความจะได้รับประโยชน์สูงสุด เช่น การนำเสนอเหตุบรรเทาโทษ การพิสูจน์ให้เห็นถึงการขาดเจตนาที่แท้จริง หรือการให้ข้อมูลที่เป็นประโยชน์ต่อทางราชการ เพื่อใช้เป็นข้อต่อรองสำคัญในการขอลดหย่อนโทษจากศาล"
          },
          {
            title: "การจัดการผลกระทบข้ามชาติ",
            description: "เนื่องจากคดีนี้มีความเชื่อมโยงกับบุคคลในประเทศอังกฤษ ทีมงานจึงทำหน้าที่เป็นตัวกลางในการชี้แจงข้อเท็จจริง จัดการเอกสารข้ามพรมแดน และนำเสนอข้อจำกัดทางภาษาและวัฒนธรรมของชาวอเมริกัน เพื่อให้ศาลและหน่วยงานที่เกี่ยวข้องมองเห็นภาพรวมของเหตุการณ์อย่างเป็นธรรมที่สุด"
          },
        ]
      },
    ],
    conclusion_th: [
      "ด้วยความรอบคอบในการเจรจาบนพื้นฐานของข้อกฎหมายที่แม่นยำ ทำให้ทีมทนายความสามารถสร้างข้อได้เปรียบและลดความเสี่ยงที่จะเกิดผลกระทบขั้นรุนแรงต่อลูกความได้อย่างมีประสิทธิภาพ",
    ],
    sections_en: [
      {
        id: 1,
        heading: "",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "Petitioning for Justice to the Prosecutor",
            description: "Before the case is formally charged, our team analyzed the flaws in the arrest and evidence, gathered overlooked facts, and submitted a petition for justice to persuade the prosecutor to consider not filing charges or to reduce the severity of the charges to better reflect the reality of the situation."
          },
          {
            title: "Negotiating Mitigation under the Narcotics Act",
            description: "Our legal team leveraged expertise in the new legal provisions to negotiate for the best possible outcome for the client, such as presenting mitigating circumstances, demonstrating a lack of true intent, or providing information beneficial to the authorities as key points in seeking leniency from the court."
          },
          {
            title: "Managing International Impacts",
            description: "Given the international nature of this case, our team acted as a mediator to clarify facts, manage cross-border documentation, and present cultural and linguistic limitations of the foreign national to ensure the court and relevant authorities have a comprehensive understanding of the situation."
          },
        ]
      },
    ],
    conclusion_en: [
      "Through careful negotiation based on precise legal grounds, our legal team was able to create advantages and effectively mitigate the risks of severe consequences for our client.",
    ],
  },
  {
    experienceId: 4,
    title_th: "การต่อสู้คดีข้อหาค้ามนุษย์ (กรณีเกี่ยวข้องกับเด็กและเยาวชน)",
    title_en: "Fighting Human Trafficking Charges (Involving Children and Minors)",
    subtitle_th: "กลยุทธ์และการดำเนินการของทีมทนายความ",
    subtitle_en: "กลยุทธ์และการดำเนินการของทีมทนายความ",
    description_th: "คดีความผิดฐานค้ามนุษย์ที่เกี่ยวข้องกับเยาวชน ถือเป็นหนึ่งในคดีอาญาที่มีอัตราโทษสูงสุดและมีความละเอียดอ่อนทางสังคมเป็นอย่างมาก ในคดีนี้ ลูกความของเราถูกตั้งข้อหาและตกเป็น \"จำเลย\" โดยถูกกล่าวหาว่ามีส่วนร่วมในกระบวนการแสวงหาประโยชน์จากเด็ก ซึ่งการต่อสู้คดีประเภทนี้ต้องอาศัยความเชี่ยวชาญทางกฎหมายขั้นสูง ความละเอียดรอบคอบ และความเข้าใจในกระบวนการพิจารณาคดีที่มีข้อบังคับพิเศษ",
    description_en: "Cases involving human trafficking charges, especially those involving minors, are among the most severe and socially sensitive criminal cases. In this case, our client was charged and became a \"defendant\" accused of involvement in the exploitation of children. Fighting such cases requires advanced legal expertise, meticulous attention to detail, and a deep understanding of the special procedures involved in these trials.",
    listImage: Pic1,
    detailImage: DetailPic1,
    sections_th: [
      {
        id: 1,
        heading: "การตรวจสอบพยานหลักฐานเชิงลึกและกระบวนการสืบสวน",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "การแกะรอยพยานหลักฐานทางดิจิทัล",
            description: "ทีมทนายความได้ทำการตรวจสอบข้อมูลแชท การสนทนาผ่านโซเชียลมีเดีย เส้นทางการเงิน และภาพวงจรปิดอย่างละเอียด เพื่อค้นหาข้อเท็จจริงที่ขาดหายไป และพิสูจน์ให้เห็นถึงความบริสุทธิ์ หรือชี้ให้เห็นว่าลูกความไม่มีส่วนรู้เห็นในกระบวนการค้ามนุษย์"
          },
          {
            title: "การตรวจสอบกระบวนการจับกุม",
            description: "เราได้เข้าตรวจสอบความชอบด้วยกฎหมายของการปฏิบัติการของเจ้าหน้าที่ชุดจับกุม รวมถึงการล่อซื้อ (ถ้ามี) ว่าเป็นการกระทำที่เข้าข่ายการ \"ล่อให้กระทำความผิด\" (Entrapment) ซึ่งขัดต่อหลักกฎหมายหรือไม่"
          },
        ]
      },
      {
        id: 2,
        heading: "การรับมือกับพยานแวดล้อมและบันทึกของทีมสหวิชาชีพ",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "",
            description: "ในคดีที่ผู้เสียหายเป็นเด็ก กฎหมายไทยกำหนดให้ต้องมีการสอบปากคำร่วมกับ \"ทีมสหวิชาชีพ\" (นักจิตวิทยา นักสังคมสงเคราะห์ พนักงานอัยการ) ทีมทนายความของเราได้ทำการศึกษาและวิเคราะห์บันทึกการสอบปากคำเหล่านั้นอย่างรัดกุม เพื่อหาข้อพิรุธ ความขัดแย้งของคำให้การ หรือการถูกชักจูงในการให้ปากคำของผู้เสียหาย ซึ่งเป็นจุดชี้ขาดสำคัญในคดี"
          },
        ]
      },
      {
        id: 3,
        heading: "การต่อสู้ในชั้นศาล: การหักล้างองค์ประกอบความผิด",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "การซักค้านอย่างมีศิลปะ",
            description: "การซักค้านพยานโจทก์และผู้เสียหายที่เป็นเด็กต้องทำด้วยความระมัดระวังขั้นสูงสุดภายใต้ข้อบังคับของศาล ทีมทนายได้ใช้ทักษะการตั้งคำถามที่เฉียบคมแต่ไม่ก้าวร้าว เพื่อแสดงให้ศาลเห็นถึงข้อสงสัยตามสมควร (Reasonable Doubt)"
          },
          {
            title: "การพิสูจน์เรื่อง \"เจตนา\" และ \"ความรู้เห็น\"",
            description: "หัวใจสำคัญของการต่อสู้คดีนี้คือ การพิสูจน์ให้ศาลเห็นว่าจำเลย \"ขาดเจตนา\" ในการแสวงหาประโยชน์โดยมิชอบ หรือไม่มีส่วนรู้เห็นถึงอายุที่แท้จริงของผู้เสียหาย เพื่อให้ศาลพิจารณายกฟ้องข้อหาค้ามนุษย์ที่มีบทลงโทษร้ายแรง"
          },
        ]
      },
    ],
    conclusion_th: [
      "ทีมทนายความของเรายึดมั่นในหลักการที่ว่าจำเลยทุกคนมีสิทธิได้รับการพิจารณาคดีอย่างเป็นธรรม (Fair Trial) เราทุ่มเทสรรพกำลังในการค้นหาความจริง เพื่อปกป้องอิสรภาพและสิทธิของลูกความจากการถูกดำเนินคดีอย่างไม่เป็นธรรม หรือการถูกตั้งข้อหาที่เกินกว่าความเป็นจริง",
    ],
    sections_en: [
      {
        id: 1,
        heading: "In-Depth Evidence Review and Investigation Process",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "Tracing Digital Evidence",
            description: "Our legal team conducted a thorough examination of chat data, social media interactions, financial transactions, and CCTV footage to uncover missing facts and demonstrate the client's innocence or show that they had no knowledge of the human trafficking process."
          },
          {
            title: "Scrutinizing the Arrest Process",
            description: "We reviewed the legality of the arrest operation, including any potential entrapment tactics used by law enforcement, to determine if there were any violations of legal principles."
          },
        ]
      },
      {
        id: 2,
        heading: "Handling Witnesses and Multidisciplinary Team Records",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "",
            description: "In cases involving child victims, Thai law requires joint testimony with a multidisciplinary team (psychologists, social workers, prosecutors). Our legal team meticulously studied and analyzed these testimonies to identify any inconsistencies, contradictions, or signs of coaching in the victim's statements, which are crucial points in the case."
          },
        ]
      },
      {
        id: 3,
        heading: "Fighting in Court: Refuting the Elements of the Crime",
        paragraphs: [
          "",
        ],
        listItems: [
          {
            title: "Artful Cross-Examination",
            description: "Cross-examining prosecution witnesses and child victims must be done with the utmost care under court regulations. Our team used sharp but non-aggressive questioning techniques to demonstrate reasonable doubt to the court."
          },
          {
            title: "Proving \"Intent\" and \"Knowledge\"",
            description: "The key to fighting this case is proving that the defendant lacked the intent to exploit or had no knowledge of the victim's true age, which could lead the court to consider acquitting the human trafficking charges that carry severe penalties."
          },
        ]
      },
    ],
    conclusion_en: [
      "Our legal team adheres to the principle that every defendant has the right to a fair trial. We are dedicated to uncovering the truth to protect our client's freedom and rights from being unjustly prosecuted or charged beyond the reality of the situation.",
    ],
  },
];
