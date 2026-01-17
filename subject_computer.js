window.computerQuestions = [
    // --- ส่วนที่ 1: ความรู้เบื้องต้น Hardware/Software & Units ---
    {
        question: "1. 1 Byte มีค่าเท่ากับกี่ Bit?",
        options: ["ก. 4 Bits", "ข. 8 Bits", "ค. 16 Bits", "ง. 32 Bits"],
        answer: 1,
        explanation: "1 Byte (ไบต์) = 8 Bits (บิต) เป็นหน่วยพื้นฐานที่สุดในการเก็บข้อมูล"
    },
    {
        question: "2. ข้อใดเป็นหน่วยความจำถาวร (Non-Volatile)?",
        options: ["ก. RAM", "ข. ROM", "ค. Cache", "ง. Register"],
        answer: 1,
        explanation: "ROM (Read-Only Memory) เก็บข้อมูลถาวร ไฟดับข้อมูลไม่หาย ส่วน RAM ไฟดับข้อมูลหาย"
    },
    {
        question: "3. หน่วยความจำใดที่มีความจุมากที่สุดในตัวเลือก?",
        options: ["ก. 1 KB", "ข. 1 MB", "ค. 1 GB", "ง. 1 TB"],
        answer: 3,
        explanation: "เรียงจากน้อยไปมาก: Bit < Byte < KB < MB < GB < TB (Terabyte)"
    },
    {
        question: "4. ข้อใดจัดเป็นอุปกรณ์นำเข้าข้อมูล (Input Device) ทั้งหมด?",
        options: ["ก. เมาส์, คีย์บอร์ด, สแกนเนอร์", "ข. จอภาพ, เครื่องพิมพ์, ลำโพง", "ค. เมาส์, จอภาพ, ไมโครโฟน", "ง. คีย์บอร์ด, เครื่องพิมพ์, กล้อง"],
        answer: 0,
        explanation: "ข้อ ข. เป็น Output ล้วน, ข้อ ค. และ ง. มี Output ปน (จอภาพ, เครื่องพิมพ์)"
    },
    {
        question: "5. CPU (Central Processing Unit) เปรียบเสมือนส่วนใดของมนุษย์?",
        options: ["ก. หัวใจ", "ข. สมอง", "ค. แขนขา", "ง. ดวงตา"],
        answer: 1,
        explanation: "CPU คือสมองของคอมพิวเตอร์ ทำหน้าที่ประมวลผลคำสั่งต่างๆ"
    },
    {
        question: "6. ข้อใดคือระบบปฏิบัติการ (Operating System)?",
        options: ["ก. Microsoft Word", "ข. Google Chrome", "ค. Windows 10", "ง. Photoshop"],
        answer: 2,
        explanation: "Windows, macOS, Linux, Android, iOS เป็นระบบปฏิบัติการ ส่วนข้ออื่นเป็นโปรแกรมประยุกต์ (Application)"
    },
    {
        question: "7. อุปกรณ์ใดทำหน้าที่สำรองไฟเมื่อไฟดับ?",
        options: ["ก. GPS", "ข. UPS", "ค. USB", "ง. CPU"],
        answer: 1,
        explanation: "UPS (Uninterruptible Power Supply) คือเครื่องสำรองไฟ"
    },

    // --- ส่วนที่ 2: Microsoft Word & Shortcuts (ออกเยอะมาก!) ---
    {
        question: "8. หากต้องการ 'คัดลอก' (Copy) ข้อมูล ต้องใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + V", "ข. Ctrl + C", "ค. Ctrl + X", "ง. Ctrl + Z"],
        answer: 1,
        explanation: "Ctrl + C = Copy, Ctrl + V = Paste, Ctrl + X = Cut"
    },
    {
        question: "9. หากต้องการ 'วาง' (Paste) ข้อมูล ต้องใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + P", "ข. Ctrl + S", "ค. Ctrl + V", "ง. Ctrl + A"],
        answer: 2,
        explanation: "Ctrl + V = Paste"
    },
    {
        question: "10. หากทำผิดพลาดและต้องการ 'ยกเลิกการกระทำ' (Undo) ต้องกดปุ่มใด?",
        options: ["ก. Ctrl + Y", "ข. Ctrl + U", "ค. Ctrl + Z", "ง. Ctrl + D"],
        answer: 2,
        explanation: "Ctrl + Z คือ Undo (ย้อนกลับ) ส่วน Ctrl + Y คือ Redo (ทำซ้ำ)"
    },
    {
        question: "11. นามสกุลไฟล์มาตรฐานของ Microsoft Word ปัจจุบันคืออะไร?",
        options: ["ก. .txt", "ข. .doc", "ค. .docx", "ง. .pdf"],
        answer: 2,
        explanation: "เวอร์ชันใหม่ๆ (2007 ขึ้นไป) ใช้ .docx ส่วน .doc เป็นเวอร์ชันเก่า"
    },
    {
        question: "12. ปุ่มใดใช้สำหรับ 'บันทึก' (Save) งาน?",
        options: ["ก. Ctrl + S", "ข. Ctrl + N", "ค. Ctrl + O", "ง. Ctrl + P"],
        answer: 0,
        explanation: "Ctrl + S = Save"
    },
    {
        question: "13. หากต้องการเลือกข้อความ 'ทั้งหมด' (Select All) ในเอกสาร?",
        options: ["ก. Ctrl + A", "ข. Ctrl + S", "ค. Shift + A", "ง. Alt + A"],
        answer: 0,
        explanation: "Ctrl + A (All) คือเลือกทั้งหมด"
    },
    {
        question: "14. การจัดวางข้อความกึ่งกลางหน้ากระดาษ (Center) ใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + L", "ข. Ctrl + R", "ค. Ctrl + E", "ง. Ctrl + J"],
        answer: 2,
        explanation: "Ctrl + E = Center, L = Left, R = Right, J = Justify (กระจายเต็มบรรทัด)"
    },
    {
        question: "15. ปุ่ม F12 ใน Microsoft Word ทำหน้าที่อะไร?",
        options: ["ก. บันทึก (Save)", "ข. บันทึกเป็น (Save As)", "ค. ตรวจคำผิด", "ง. เปิดไฟล์"],
        answer: 1,
        explanation: "F12 คือคีย์ลัดสำหรับ Save As (บันทึกเป็นชื่อใหม่)"
    },
    {
        question: "16. กระดาษขนาดมาตรฐานที่ใช้ในราชการคือขนาดใด?",
        options: ["ก. A3", "ข. A4", "ค. B4", "ง. Letter"],
        answer: 1,
        explanation: "A4 เป็นขนาดมาตรฐานทั่วไป"
    },
    {
        question: "17. Ctrl + P ใช้สำหรับทำอะไร?",
        options: ["ก. Paste (วาง)", "ข. Print (พิมพ์)", "ค. Picture (แทรูป)", "ง. Page Setup"],
        answer: 1,
        explanation: "Ctrl + P = Print (สั่งพิมพ์)"
    },

    // --- ส่วนที่ 3: Microsoft Excel (สูตรและการใช้งาน) ---
    {
        question: "18. นามสกุลไฟล์มาตรฐานของ Microsoft Excel คือ?",
        options: ["ก. .xlsx", "ข. .pptx", "ค. .accdb", "ง. .xlmn"],
        answer: 0,
        explanation: ".xlsx คือไฟล์ Excel (ถ้า .pptx คือ PowerPoint)"
    },
    {
        question: "19. สัญลักษณ์ใดต้องใส่เป็นอันดับแรกเสมอเมื่อจะเขียนสูตรใน Excel?",
        options: ["ก. +", "ข. =", "ค. #", "ง. /"],
        answer: 1,
        explanation: "ทุกสูตรใน Excel ต้องขึ้นต้นด้วยเครื่องหมายเท่ากับ (=) เสมอ เช่น =SUM(A1:A10)"
    },
    {
        question: "20. สูตรหา 'ค่าเฉลี่ย' คือข้อใด?",
        options: ["ก. SUM", "ข. MAX", "ค. AVERAGE", "ง. COUNT"],
        answer: 2,
        explanation: "AVERAGE = ค่าเฉลี่ย, SUM = ผลรวม, MAX = มากสุด, MIN = น้อยสุด"
    },
    {
        question: "21. ถ้าต้องการหาผลรวมของเซลล์ A1 ถึง A10 ต้องเขียนสูตรอย่างไร?",
        options: ["ก. =SUM(A1-A10)", "ข. =ADD(A1:A10)", "ค. =SUM(A1:A10)", "ง. =TOTAL(A1:A10)"],
        answer: 2,
        explanation: "ใช้เครื่องหมาย : (Colon) เพื่อระบุช่วงข้อมูล เช่น A1:A10"
    },
    {
        question: "22. ใน Excel แถว (Row) ระบุด้วยอะไร และคอลัมน์ (Column) ระบุด้วยอะไร?",
        options: ["ก. แถว=ตัวเลข, คอลัมน์=ตัวอักษร", "ข. แถว=ตัวอักษร, คอลัมน์=ตัวเลข", "ค. เป็นตัวเลขทั้งคู่", "ง. เป็นตัวอักษรทั้งคู่"],
        answer: 0,
        explanation: "แถว (แนวนอน) เป็นตัวเลข (1, 2, 3...) ส่วนคอลัมน์ (แนวตั้ง) เป็นตัวอักษร (A, B, C...)"
    },
    {
        question: "23. การผสานเซลล์หลายๆ เซลล์รวมกัน เรียกว่าอะไร?",
        options: ["ก. Wrap Text", "ข. Merge & Center", "ค. Shrink to fit", "ง. Combine"],
        answer: 1,
        explanation: "Merge & Center (ผสานและจัดกึ่งกลาง)"
    },

    // --- ส่วนที่ 4: Microsoft PowerPoint & Presentation ---
    {
        question: "24. ปุ่มใดใช้เริ่มการนำเสนอ (Slide Show) ตั้งแต่หน้าแรก?",
        options: ["ก. F1", "ข. F2", "ค. F5", "ง. F10"],
        answer: 2,
        explanation: "F5 คือเริ่มนำเสนอ (Slide Show)"
    },
    {
        question: "25. หากต้องการออกจากหน้า Slide Show ต้องกดปุ่มใด?",
        options: ["ก. Enter", "ข. Spacebar", "ค. Esc", "ง. Delete"],
        answer: 2,
        explanation: "Esc (Escape) ใช้สำหรับยกเลิกหรือออกจากโปรแกรม/หน้าจอเต็ม"
    },
    {
        question: "26. ข้อใดไม่ใช่โปรแกรมในชุด Microsoft Office?",
        options: ["ก. Excel", "ข. Access", "ค. Photoshop", "ง. Outlook"],
        answer: 2,
        explanation: "Photoshop เป็นของค่าย Adobe ไม่ใช่ Microsoft Office"
    },

    // --- ส่วนที่ 5: Internet, Network & Security (สำคัญมาก) ---
    {
        question: "27. WWW ย่อมาจากอะไร?",
        options: ["ก. World Wide Web", "ข. World Web Wide", "ค. Web World Wide", "ง. Wide World Web"],
        answer: 0,
        explanation: "WWW = World Wide Web"
    },
    {
        question: "28. ข้อใดคือ Web Browser (โปรแกรมท่องเว็บ)?",
        options: ["ก. Google", "ข. Google Chrome", "ค. Windows", "ง. Facebook"],
        answer: 1,
        explanation: "Google เป็น Search Engine ส่วน Google Chrome เป็น Web Browser (โปรแกรมที่ใช้เปิดเว็บ)"
    },
    {
        question: "29. ในการส่ง Email ช่อง BCC (Blind Carbon Copy) มีประโยชน์อย่างไร?",
        options: ["ก. ส่งให้คนสำคัญที่สุด", "ข. ส่งสำเนาโดยที่ผู้รับคนอื่น 'ไม่เห็น' ว่าส่งให้ใครบ้าง", "ค. ส่งแบบด่วนที่สุด", "ง. ส่งไฟล์ขนาดใหญ่"],
        answer: 1,
        explanation: "BCC คือการส่งสำเนาลับ ผู้รับคนอื่นจะไม่เห็นรายชื่อคนที่อยู่ในช่อง BCC"
    },
    {
        question: "30. IP Address เปรียบเสมือนอะไร?",
        options: ["ก. ชื่อเครื่องคอมพิวเตอร์", "ข. บ้านเลขที่ของเครื่องคอมพิวเตอร์ในเครือข่าย", "ค. รหัสผ่านเข้าเครื่อง", "ง. ยี่ห้อของคอมพิวเตอร์"],
        answer: 1,
        explanation: "IP Address คือหมายเลขระบุตัวตนของเครื่องในเครือข่ายอินเทอร์เน็ต เหมือนบ้านเลขที่"
    },
    {
        question: "31. การกด Ctrl + Alt + Delete มักใช้เพื่ออะไร?",
        options: ["ก. ปิดเครื่องทันที", "ข. เปิด Task Manager เพื่อปิดโปรแกรมที่ค้าง", "ค. ล้างไวรัส", "ง. เพิ่มความเร็วเครื่อง"],
        answer: 1,
        explanation: "ใช้เปิด Task Manager เพื่อ End Task โปรแกรมที่มีปัญหา (Not Responding)"
    },
    {
        question: "32. ไวรัสคอมพิวเตอร์ชนิดใด ที่มักเรียกค่าไถ่ข้อมูล (ล็อคไฟล์)?",
        options: ["ก. Trojan", "ข. Worm", "ค. Ransomware", "ง. Spyware"],
        answer: 2,
        explanation: "Ransomware (มัลแวร์เรียกค่าไถ่) จะเข้ารหัสไฟล์เราและเรียกเงินเพื่อปลดล็อก"
    },
    {
        question: "33. Phishing (ฟิชชิ่ง) คืออะไร?",
        options: ["ก. การตกปลาออนไลน์", "ข. เว็บไซต์ปลอมที่หลอกให้กรอกข้อมูลส่วนตัว/รหัสผ่าน", "ค. โปรแกรมสแกนไวรัส", "ง. การแชร์ข่าวปลอม"],
        answer: 1,
        explanation: "Phishing คือการสร้างหน้าเว็บปลอม (เช่น ปลอมเป็นธนาคาร) เพื่อหลอกเอา User/Password ของเหยื่อ"
    },
    {
        question: "34. โดเมนเนม .go.th หมายถึงหน่วยงานประเภทใด?",
        options: ["ก. สถานศึกษา", "ข. องค์กรเอกชน", "ค. หน่วยงานรัฐบาลไทย", "ง. องค์กรทหาร"],
        answer: 2,
        explanation: ".go.th = Government (รัฐบาล), .ac.th = Academic (สถานศึกษา), .co.th = Commercial (เอกชน), .mi.th = Military (ทหาร)"
    },
    {
        question: "35. ปุ่ม F5 ใน Web Browser ทำหน้าที่อะไร?",
        options: ["ก. ค้นหา", "ข. รีเฟรช (Refresh/Reload) หน้าเว็บ", "ค. ปิดหน้าเว็บ", "ง. เปิดหน้าต่างใหม่"],
        answer: 1,
        explanation: "F5 = Refresh หน้าจอ"
    },
    {
        question: "36. Recycle Bin มีไว้ทำอะไร?",
        options: ["ก. เก็บไฟล์ขยะระบบ", "ข. พักไฟล์ที่ถูกลบชั่วคราว สามารถกู้คืนได้", "ค. ลบไวรัส", "ง. เก็บโปรแกรมที่ไม่ใช้"],
        answer: 1,
        explanation: "เป็นถังขยะพักไฟล์ที่ลบ หากลบในนี้อีกทีไฟล์จะหายถาวร"
    },
    {
        question: "37. ข้อใดคือ 'Social Media' ทั้งหมด?",
        options: ["ก. Facebook, Line, Twitter (X)", "ข. Google, Yahoo, Bing", "ค. Word, Excel, PowerPoint", "ง. Windows, iOS, Android"],
        answer: 0,
        explanation: "ข. คือ Search Engine, ค. คือ Office, ง. คือ OS"
    },
    {
        question: "38. การกดปุ่ม Alt + Tab มีผลอย่างไร?",
        options: ["ก. ปิดโปรแกรม", "ข. สลับหน้าต่างโปรแกรมที่เปิดอยู่", "ค. ย่อหน้าต่างทั้งหมด", "ง. ล็อคหน้าจอ"],
        answer: 1,
        explanation: "Alt + Tab ใช้สลับโปรแกรม (Switch Windows) อย่างรวดเร็ว"
    },
    {
        question: "39. WiFi จัดเป็นการเชื่อมต่อประเภทใด?",
        options: ["ก. มีสาย (Wired)", "ข. ไร้สาย (Wireless)", "ค. ดาวเทียม", "ง. แสงเลเซอร์"],
        answer: 1,
        explanation: "Wireless Fidelity (ไร้สาย)"
    },
    {
        question: "40. พ.ร.บ. คอมพิวเตอร์ฯ การกด Like & Share ข้อมูลเท็จ มีความผิดหรือไม่?",
        options: ["ก. ไม่ผิด เพราะเราไม่ได้เป็นคนโพสต์", "ข. ผิด ถ้าข้อมูลนั้นส่งผลกระทบต่อความมั่นคงหรือสร้างความตื่นตระหนก", "ค. ผิดทุกกรณี", "ง. ไม่ผิดถ้าแชร์ในกลุ่มปิด"],
        answer: 1,
        explanation: "การส่งต่อ (Share) ข้อมูลเท็จโดยรู้อยู่แล้วว่าเป็นเท็จ ถือว่ามีความผิดตาม พ.ร.บ.คอมฯ"
    },
    {
        question: "41. อุปกรณ์ใดทำหน้าที่กระจายสัญญาณอินเทอร์เน็ตไร้สายในบ้าน?",
        options: ["ก. Modem", "ข. Router/Access Point", "ค. Switch", "ง. Hub"],
        answer: 1,
        explanation: "Router (ที่มีเสา WiFi) หรือ Access Point ทำหน้าที่กระจายสัญญาณ Wireless"
    },
    {
        question: "42. ไฟล์นามสกุล .jpg, .png, .gif คือไฟล์ประเภทใด?",
        options: ["ก. เอกสาร", "ข. วิดีโอ", "ค. รูปภาพ", "ง. เสียง"],
        answer: 2,
        explanation: "เป็นไฟล์รูปภาพ (.mp3=เสียง, .mp4=วิดีโอ)"
    },
    {
        question: "43. การกดปุ่ม Print Screen (PrtSc) คืออะไร?",
        options: ["ก. สั่งพิมพ์งานออกเครื่องพิมพ์", "ข. แคปหน้าจอ (Capture Screenshot)", "ค. ปรับแสงหน้าจอ", "ง. ปิดหน้าจอ"],
        answer: 1,
        explanation: "เป็นการจับภาพหน้าจอเก็บไว้ใน Clipboard เพื่อนำไปวาง (Paste)"
    },
    {
        question: "44. สัญลักษณ์รูป 'แม่กุญแจ' บนช่อง URL ของ Browser หมายถึง?",
        options: ["ก. เว็บไซต์นี้ถูกบล็อก", "ข. เว็บไซต์นี้มีการเข้ารหัสความปลอดภัย (HTTPS)", "ค. เว็บไซต์นี้ห้ามเข้า", "ง. เว็บไซต์นี้ต้องใส่รหัสผ่าน"],
        answer: 1,
        explanation: "หมายถึงเว็บนั้นใช้ HTTPS (Secure) ข้อมูลที่ส่งจะถูกเข้ารหัส ปลอดภัยระดับหนึ่ง"
    },
    {
        question: "45. Cloud Storage คืออะไร?",
        options: ["ก. ฮาร์ดดิสก์แบบพกพา", "ข. พื้นที่เก็บข้อมูลบนอินเทอร์เน็ต", "ค. หน่วยความจำในเครื่อง", "ง. แผ่นซีดี"],
        answer: 1,
        explanation: "เช่น Google Drive, OneDrive, iCloud"
    },
    {
        question: "46. ข้อใดคือ Search Engine ที่นิยมที่สุด?",
        options: ["ก. YouTube", "ข. Google", "ค. Facebook", "ง. Pantip"],
        answer: 1,
        explanation: "Google เป็น Search Engine (เครื่องมือค้นหาข้อมูล)"
    },
    {
        question: "47. หากแป้นพิมพ์พิมพ์ตัวเลขไม่ได้ (กดแล้วเป็นลูกศร) ต้องกดปุ่มใดแก้?",
        options: ["ก. Caps Lock", "ข. Num Lock", "ค. Scroll Lock", "ง. Shift"],
        answer: 1,
        explanation: "Num Lock ใช้เปิด/ปิด แป้นตัวเลขฝั่งขวา"
    },
    {
        question: "48. ปุ่ม Caps Lock มีไว้ทำอะไร?",
        options: ["ก. ล็อคหน้าจอ", "ข. พิมพ์อักษรภาษาอังกฤษตัวพิมพ์ใหญ่ค้างไว้", "ค. เปลี่ยนภาษา", "ง. ปิดเสียง"],
        answer: 1,
        explanation: "ใช้พิมพ์ตัวใหญ่ (Upper Case) ค้างไว้"
    },
    {
        question: "49. ใน Microsoft Word การกด Ctrl + B ทำอะไร?",
        options: ["ก. ทำตัวหนา (Bold)", "ข. ทำตัวเอียง", "ค. ขีดเส้นใต้", "ง. เปลี่ยนสีตัวอักษร"],
        answer: 0,
        explanation: "B = Bold (หนา), I = Italic (เอียง), U = Underline (ขีดเส้นใต้)"
    },
    {
        question: "50. ข้อใดคือซอฟต์แวร์ตารางคำนวณ?",
        options: ["ก. Microsoft Word", "ข. Microsoft Excel", "ค. Microsoft PowerPoint", "ง. Microsoft Access"],
        answer: 1,
        explanation: "Excel คือโปรแกรมตารางคำนวณ (Spreadsheet)"
    },
    {
        question: "51. หากต้องการค้นหาคำในเอกสาร (Find) ใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + H", "ข. Ctrl + F", "ค. Ctrl + S", "ง. Ctrl + N"],
        answer: 1,
        explanation: "Ctrl + F = Find (ค้นหา), Ctrl + H = Replace (แทนที่)"
    },
    {
        question: "52. 1 MB (Megabyte) เท่ากับกี่ KB (Kilobyte)?",
        options: ["ก. 100 KB", "ข. 1000 KB", "ค. 1024 KB", "ง. 1,000,000 KB"],
        answer: 2,
        explanation: "ในทางคอมพิวเตอร์ 1024 หน่วยย่อย = 1 หน่วยใหญ่ (2 ยกกำลัง 10)"
    },
    {
        question: "53. LAN ย่อมาจาก?",
        options: ["ก. Large Area Network", "ข. Local Area Network", "ค. Long Area Network", "ง. Line Area Network"],
        answer: 1,
        explanation: "Local Area Network คือเครือข่ายระยะใกล้ (เช่น ในบ้าน, ในออฟฟิศ)"
    },
    {
        question: "54. สายที่ใช้เชื่อมต่อคอมพิวเตอร์กับจอภาพ (Monitor) คือ?",
        options: ["ก. สาย LAN", "ข. สาย HDMI / VGA", "ค. สาย USB", "ง. สาย Audio"],
        answer: 1,
        explanation: "HDMI หรือ VGA หรือ DVI ใช้ส่งภาพเข้าจอ"
    },
    {
        question: "55. การ 'Zip' ไฟล์ หมายถึง?",
        options: ["ก. ลบไฟล์", "ข. ซ่อนไฟล์", "ค. บีบอัดไฟล์ให้มีขนาดเล็กลง", "ง. ล็อกรหัสผ่านไฟล์"],
        answer: 2,
        explanation: "Zip/Rar คือการบีบอัดข้อมูล (Compression)"
    },
    {
        question: "56. ข้อใดไม่ใช่ระบบปฏิบัติการบนมือถือ?",
        options: ["ก. iOS", "ข. Android", "ค. Windows 10", "ง. Symbian (รุ่นเก่า)"],
        answer: 2,
        explanation: "Windows 10 เป็น PC OS (แม้จะมี Windows Mobile แต่เลิกพัฒนาไปแล้ว และ Windows 10 หลักๆ คือ PC)"
    },
    {
        question: "57. PDF ย่อมาจาก Portable Document Format ข้อดีคือ?",
        options: ["ก. แก้ไขง่ายที่สุด", "ข. รูปแบบเอกสารไม่เพี้ยนเมื่อนำไปเปิดเครื่องอื่น", "ค. มีขนาดใหญ่", "ง. ต้องใช้อินเทอร์เน็ตเปิดเท่านั้น"],
        answer: 1,
        explanation: "เอกสาร PDF จะรักษารูปแบบ (Format) ไว้เหมือนต้นฉบับ ไม่ว่าจะเปิดเครื่องไหน"
    },
    {
        question: "58. หน่วยความถี่ของ CPU (ความเร็ว) มีหน่วยเป็น?",
        options: ["ก. Byte", "ข. Hertz (Hz)", "ค. Pixel", "ง. Inch"],
        answer: 1,
        explanation: "ปัจจุบันเป็น GHz (Gigahertz)"
    },
    {
        question: "59. การกดปุ่ม Windows + D มีผลอย่างไร?",
        options: ["ก. ลบไฟล์", "ข. พับหน้าจอทั้งหมดลงเพื่อโชว์ Desktop", "ค. เปิด My Computer", "ง. เปิดการตั้งค่า"],
        answer: 1,
        explanation: "Windows + D = Show Desktop"
    },
    {
        question: "60. Google Drive ให้พื้นที่ฟรี (Free Storage) กี่ GB (โดยประมาณ)?",
        options: ["ก. 2 GB", "ข. 5 GB", "ค. 15 GB", "ง. 100 GB"],
        answer: 2,
        explanation: "บัญชี Gmail ทั่วไปจะได้ฟรี 15 GB"
    },
    {
        question: "61. หน่วยงานใดดูแลเรื่องอาชญากรรมทางเทคโนโลยีในประเทศไทย?",
        options: ["ก. DSI", "ข. ปอท. (TCSD)", "ค. กสทช.", "ง. ICT"],
        answer: 1,
        explanation: "ปอท. คือ กองบังคับการปราบปรามการกระทำความผิดเกี่ยวกับอาชญากรรมทางเทคโนโลยี (Technology Crime Suppression Division)"
    },
    {
        question: "62. 'Primary Key' ในฐานข้อมูลหมายถึงอะไร?",
        options: ["ก. กุญแจสำรอง", "ข. คีย์หลักที่ไม่ซ้ำกัน ใช้ระบุแถวข้อมูล", "ค. รหัสผ่านเข้าฐานข้อมูล", "ง. ชื่อตาราง"],
        answer: 1,
        explanation: "Primary Key (คีย์หลัก) คือฟิลด์ที่มีข้อมูลไม่ซ้ำกันเลยในตารางนั้นๆ (เช่น เลขบัตรประชาชน, รหัสนักศึกษา) ใช้ระบุตัวตนของข้อมูล"
    },
    {
        question: "63. ข้อใดคือโปรแกรมเว็บบราวเซอร์ (Web Browser) ทั้งหมด?",
        options: ["ก. Chrome, Firefox, Edge", "ข. Chrome, Windows, Linux", "ค. Word, Excel, Access", "ง. Facebook, Line, IG"],
        answer: 0,
        explanation: "Chrome, Firefox, Safari, Edge, Opera ล้วนเป็นโปรแกรมสำหรับเปิดเว็บไซต์"
    },
    {
        question: "64. การกด Ctrl + Alt + Delete เพื่อเรียก Task Manager มีวัตถุประสงค์หลักเพื่ออะไร?",
        options: ["ก. ลบไฟล์ขยะ", "ข. ปิดโปรแกรมที่ค้าง (End Task)", "ค. สแกนไวรัส", "ง. ฟอร์แมตเครื่อง"],
        answer: 1,
        explanation: "ใช้เมื่อโปรแกรมเกิดอาการ Not Responding (ค้าง) เพื่อสั่งปิดโปรแกรมน้นๆ ทันที"
    },
    {
        question: "65. ข้อใดคือความหมายของ 'IoT' (Internet of Things)?",
        options: ["ก. อินเทอร์เน็ตความเร็วสูง", "ข. อุปกรณ์ต่างๆ ที่เชื่อมต่อและสั่งการผ่านอินเทอร์เน็ตได้", "ค. การขายของออนไลน์", "ง. สังคมไร้เงินสด"],
        answer: 1,
        explanation: "Internet of Things คือ การที่อุปกรณ์อิเล็กทรอนิกส์ต่างๆ (เช่น หลอดไฟ, แอร์, ตู้เย็น) เชื่อมต่ออินเทอร์เน็ตได้"
    },
    {
        question: "66. โดเมน '.ac.th' หมายถึงหน่วยงานใด?",
        options: ["ก. หน่วยงานรัฐบาล", "ข. สถาบันการศึกษาในไทย", "ค. องค์กรเอกชน", "ง. องค์กรทหาร"],
        answer: 1,
        explanation: "ac = academic (การศึกษา), th = Thailand (ไทย)"
    },
    {
        question: "67. RAM ย่อมาจาก Random Access Memory เป็นหน่วยความจำแบบใด?",
        options: ["ก. หน่วยความจำถาวร", "ข. หน่วยความจำสำรอง", "ค. หน่วยความจำหลัก (ชั่วคราว)", "ง. หน่วยความจำเสมือน"],
        answer: 2,
        explanation: "RAM เป็นหน่วยความจำหลัก (Main Memory) แบบชั่วคราว ข้อมูลจะหายเมื่อไฟดับ"
    },
    {
        question: "68. 1 GB (Gigabyte) มีค่าเท่ากับกี่ MB (Megabyte)?",
        options: ["ก. 1000 MB", "ข. 1024 MB", "ค. 100 MB", "ง. 1042 MB"],
        answer: 1,
        explanation: "ในทางคอมพิวเตอร์ใช้ระบบเลขฐานสอง 1 GB = 1024 MB"
    },
    {
        question: "69. ข้อใดไม่ใช่ระบบปฏิบัติการ (OS)?",
        options: ["ก. Android", "ข. iOS", "ค. Windows", "ง. Microsoft Office"],
        answer: 3,
        explanation: "Microsoft Office เป็นซอฟต์แวร์ประยุกต์ (Application Software) ไม่ใช่ OS"
    },
    {
        question: "70. ปุ่ม F1 ในโปรแกรมส่วนใหญ่ มักใช้ทำอะไร?",
        options: ["ก. ปิดโปรแกรม", "ข. เปิดคู่มือช่วยเหลือ (Help)", "ค. บันทึกงาน", "ง. ค้นหา"],
        answer: 1,
        explanation: "F1 เป็นปุ่มมาตรฐานสำหรับเรียกเมนู Help"
    },
    {
        question: "71. การกระทำใดผิด พรบ.คอมพิวเตอร์ มาตรา 14(1) นำเข้าข้อมูลเท็จ?",
        options: ["ก. โพสต์ด่าเพื่อน", "ข. แชร์ข่าวปลอมที่สร้างความตื่นตระหนก", "ค. ตัดต่อภาพล้อเลียนเพื่อน", "ง. โหลดเพลงเถื่อน"],
        answer: 1,
        explanation: "การนำเข้าข้อมูลอันเป็นเท็จ (Fake News) ที่น่าจะเกิดความเสียหายแก่ประชาชน"
    },
    {
        question: "72. HTML คือภาษาที่ใช้สำหรับทำอะไร?",
        options: ["ก. เขียนโปรแกรมคำนวณ", "ข. สร้างหน้าเว็บไซต์ (Webpage)", "ค. ตัดต่อวิดีโอ", "ง. จัดการฐานข้อมูล"],
        answer: 1,
        explanation: "HTML (Hypertext Markup Language) เป็นภาษาพื้นฐานในการสร้างหน้าเว็บ"
    },
    {
        question: "73. อุปกรณ์ใดทำหน้าที่ 'แปลงสัญญาณ' ระหว่างโทรศัพท์กับคอมพิวเตอร์ (ในยุค ADSL)?",
        options: ["ก. Router", "ข. Modem", "ค. Switch", "ง. Hub"],
        answer: 1,
        explanation: "Modem (Modulator-Demodulator) แปลงสัญญาณอนาล็อกเป็นดิจิทัล และกลับกัน"
    },
    {
        question: "74. ข้อใดคือ 'Search Engine'?",
        options: ["ก. Google, Yahoo, Bing", "ข. Facebook, Twitter, IG", "ค. Shopee, Lazada", "ง. Chrome, Firefox"],
        answer: 0,
        explanation: "Search Engine คือเครื่องมือค้นหาข้อมูลบนอินเทอร์เน็ต"
    },
    {
        question: "75. ไฟล์นามสกุล .exe คือไฟล์ประเภทใด?",
        options: ["ก. ไฟล์รูปภาพ", "ข. ไฟล์เอกสาร", "ค. ไฟล์โปรแกรมที่รันได้ (Executable)", "ง. ไฟล์บีบอัด"],
        answer: 2,
        explanation: ".exe (Executable) คือไฟล์โปรแกรมใน Windows ที่สามารถกดเปิดใช้งานได้ทันที (ระวังไวรัสมักมาทางนี้)"
    },
    {
        question: "76. การ 'Phishing' คือกลโกงแบบใด?",
        options: ["ก. การแฮกด้วยการเดารหัสผ่าน", "ข. สร้างเว็บปลอม/อีเมลปลอม เพื่อหลอกเอาข้อมูลส่วนตัว", "ค. การปล่อยไวรัสเรียกค่าไถ่", "ง. การดักฟังข้อมูล"],
        answer: 1,
        explanation: "Phishing (พ้องเสียงกับ Fishing-ตกปลา) คือการสร้างเหยื่อล่อ เช่น เว็บธนาคารปลอม ให้คนหลงเชื่อกรอกรหัส"
    },
    {
        question: "77. ข้อใดคือหน่วยความจำที่เล็กที่สุด?",
        options: ["ก. Bit", "ข. Byte", "ค. KB", "ง. MB"],
        answer: 0,
        explanation: "Bit (เลข 0 หรือ 1) คือหน่วยที่เล็กที่สุด (8 Bits = 1 Byte)"
    },
    {
        question: "78. โปรแกรมใดเหมาะสำหรับการนำเสนองาน (Presentation)?",
        options: ["ก. Excel", "ข. Word", "ค. PowerPoint", "ง. Access"],
        answer: 2,
        explanation: "Microsoft PowerPoint ออกแบบมาเพื่อทำ Slide นำเสนอ"
    },
    {
        question: "79. Ctrl + Z คือคีย์ลัดสำหรับทำอะไร?",
        options: ["ก. ทำซ้ำ (Redo)", "ข. ยกเลิกการกระทำล่าสุด (Undo)", "ค. ตัด (Cut)", "ง. วาง (Paste)"],
        answer: 1,
        explanation: "Undo คือการย้อนกลับไปก่อนหน้านี้"
    },
    {
        question: "80. ข้อใดเป็นอุปกรณ์ Output (แสดงผล) ทั้งหมด?",
        options: ["ก. จอภาพ, เครื่องพิมพ์, ลำโพง", "ข. เมาส์, คีย์บอร์ด, จอภาพ", "ค. เครื่องสแกน, เครื่องพิมพ์, ไมโครโฟน", "ง. กล้อง, ลำโพง, หูฟัง"],
        answer: 0,
        explanation: "Output คืออุปกรณ์ที่ส่งข้อมูลออกจากคอมพิวเตอร์ให้คนรับรู้ (ภาพ, เสียง, เอกสาร)"
    },
    {
        question: "81. WiFi ย่อมาจากอะไร?",
        options: ["ก. Wireless Finder", "ข. Wireless Fidelity", "ค. Wide Fire", "ง. Wire Free"],
        answer: 1,
        explanation: "WiFi ย่อมาจาก Wireless Fidelity"
    },
    {
        question: "82. HTTP กับ HTTPS ต่างกันอย่างไร?",
        options: ["ก. ความเร็ว", "ข. ความปลอดภัย (S = Secure)", "ค. ค่าใช้จ่าย", "ง. ผู้ให้บริการ"],
        answer: 1,
        explanation: "HTTPS มีการเข้ารหัสข้อมูล (Encryption) ปลอดภัยกว่า HTTP ธรรมดา"
    },
    {
        question: "83. ข้อใดคือประโยชน์ของ 'Cloud Storage' (เช่น Google Drive)?",
        options: ["ก. ประมวลผลเร็วขึ้น", "ข. เข้าถึงไฟล์ได้จากทุกที่ที่มีอินเทอร์เน็ต", "ค. ป้องกันไวรัสได้ 100%", "ง. ไม่ต้องใช้อินเทอร์เน็ต"],
        answer: 1,
        explanation: "ข้อดีหลักคือ Anywhere Anytime Access (เข้าถึงได้ทุกที่)"
    },
    {
        question: "84. การกดปุ่ม Print Screen (PrtSc) คือการทำอะไร?",
        options: ["ก. สั่งพิมพ์", "ข. จับภาพหน้าจอ (Capture)", "ค. ปิดหน้าจอ", "ง. ปรับความสว่าง"],
        answer: 1,
        explanation: "เป็นการ Copy ภาพหน้าจอขณะนั้นเก็บไว้ใน Clipboard"
    },
    {
        question: "85. 'Spam' ในทางคอมพิวเตอร์หมายถึง?",
        options: ["ก. ไวรัสชนิดหนึ่ง", "ข. ข้อความ/อีเมลขยะที่ส่งมาก่อกวน", "ค. โปรแกรมแชท", "ง. อาหารกระป๋อง"],
        answer: 1,
        explanation: "Spam Mail หรือ Spam Message คือข้อความก่อกวน โฆษณา ที่ส่งมาจำนวนมากโดยเราไม่ต้องการ"
    },
    {
        question: "86. IP Address ประกอบด้วยตัวเลขกี่ชุด (IPv4)?",
        options: ["ก. 2 ชุด", "ข. 3 ชุด", "ค. 4 ชุด", "ง. 5 ชุด"],
        answer: 2,
        explanation: "IPv4 มี 4 ชุด คั่นด้วยจุด (เช่น 192.168.1.1)"
    },
    {
        question: "87. Ctrl + C และ Ctrl + V ใช้ทำอะไรตามลำดับ?",
        options: ["ก. วาง แล้ว คัดลอก", "ข. คัดลอก แล้ว วาง", "ค. ตัด แล้ว วาง", "ง. บันทึก แล้ว ปิด"],
        answer: 1,
        explanation: "Copy (C) -> Paste (V)"
    },
    {
        question: "88. ข้อใดคือ 'Hardware'?",
        options: ["ก. Windows", "ข. Microsoft Word", "ค. Hard Disk", "ง. Google Chrome"],
        answer: 2,
        explanation: "Hardware คืออุปกรณ์ที่จับต้องได้ (Hard Disk) ส่วนข้ออื่นเป็น Software"
    },
    {
        question: "89. ไวรัสคอมพิวเตอร์ชนิดใดที่มักมากับการเสียบ Handy Drive/Flash Drive?",
        options: ["ก. Trojan", "ข. Autorun / Worm", "ค. Spyware", "ง. Adware"],
        answer: 1,
        explanation: "Worm (หนอน) หรือพวก Autorun มักแพร่กระจายผ่านอุปกรณ์เก็บข้อมูลพกพา"
    },
    {
        question: "90. ข้อใดคือความหมายของ 'Upload'?",
        options: ["ก. ดึงข้อมูลจากเซิร์ฟเวอร์ลงเครื่อง", "ข. ส่งข้อมูลจากเครื่องขึ้นสู่เซิร์ฟเวอร์", "ค. ลบข้อมูล", "ง. ย้ายข้อมูล"],
        answer: 1,
        explanation: "Up = ขึ้น (ส่งขึ้นไป), Down = ลง (โหลดลงมา)"
    },
    {
        question: "91. นามสกุลไฟล์ .pptx เป็นของโปรแกรมใด?",
        options: ["ก. Word", "ข. Excel", "ค. PowerPoint", "ง. Photoshop"],
        answer: 2,
        explanation: ".pptx คือ PowerPoint (.docx=Word, .xlsx=Excel)"
    },
    {
        question: "92. การกดปุ่ม Windows + D มีผลอย่างไร?",
        options: ["ก. ปิดเครื่อง", "ข. ลบไฟล์", "ค. ย่อหน้าต่างทั้งหมดเพื่อโชว์ Desktop", "ง. เปิด My Computer"],
        answer: 2,
        explanation: "Show Desktop (ซ่อนหน้าต่างทำงานทั้งหมด)"
    },
    {
        question: "93. 'E-Commerce' หมายถึง?",
        options: ["ก. การเรียนออนไลน์", "ข. การพาณิชย์อิเล็กทรอนิกส์ (ซื้อขายออนไลน์)", "ค. รัฐบาลอิเล็กทรอนิกส์", "ง. ไปรษณีย์อิเล็กทรอนิกส์"],
        answer: 1,
        explanation: "Electronic Commerce = การซื้อขายสินค้าผ่านระบบออนไลน์"
    },
    {
        question: "94. ข้อใดคือ Social Network?",
        options: ["ก. WWW", "ข. Facebook", "ค. HTML", "ง. LAN"],
        answer: 1,
        explanation: "Facebook เป็นเครือข่ายสังคมออนไลน์"
    },
    {
        question: "95. หากต้องการค้นหาคำ (Find) ในเอกสาร ใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + F", "ข. Ctrl + H", "ค. Ctrl + N", "ง. Ctrl + S"],
        answer: 0,
        explanation: "F = Find"
    },
    {
        question: "96. LAN ย่อมาจาก?",
        options: ["ก. Local Area Network", "ข. Long Area Network", "ค. Line Area Network", "ง. Large Area Network"],
        answer: 0,
        explanation: "เครือข่ายระยะใกล้ (Local)"
    },
    {
        question: "97. การ 'Zip' ไฟล์มีประโยชน์อย่างไร?",
        options: ["ก. ทำให้ไฟล์สวยขึ้น", "ข. ลดขนาดไฟล์ให้เล็กลง", "ค. ขยายไฟล์ให้ใหญ่ขึ้น", "ง. แปลงไฟล์เป็นรูปภาพ"],
        answer: 1,
        explanation: "การบีบอัดไฟล์ (Compression) ช่วยลดขนาดเพื่อประหยัดพื้นที่หรือส่งต่อง่ายขึ้น"
    },
    {
        question: "98. ข้อใดคือ OS บนมือถือ?",
        options: ["ก. Windows 10", "ข. Android", "ค. macOS", "ง. Linux"],
        answer: 1,
        explanation: "Android และ iOS คือ OS หลักของมือถือ"
    },
    {
        question: "99. 'Big Data' หมายถึง?",
        options: ["ก. คอมพิวเตอร์เครื่องใหญ่", "ข. ข้อมูลที่มีปริมาณมหาศาลและซับซ้อน", "ค. ฮาร์ดดิสก์ลูกใหญ่", "ง. อินเทอร์เน็ตความเร็วสูง"],
        answer: 1,
        explanation: "ข้อมูลขนาดใหญ่ (Big Data) ที่ต้องใช้เทคโนโลยีเฉพาะในการวิเคราะห์"
    },
    {
        question: "100. QR Code พัฒนามาจากอะไร?",
        options: ["ก. Barcode (บาร์โค้ด)", "ข. RFID", "ค. NFC", "ง. Bluetooth"],
        answer: 0,
        explanation: "พัฒนาต่อยอดมาจาก Barcode (1 มิติ) เป็น QR Code (2 มิติ) เพื่อเก็บข้อมูลได้มากขึ้น"
    },
    {
        question: "101. ใน Excel หากต้องการตัดเกรด โดยมีเงื่อนไขว่า 'ถ้าคะแนนมากกว่า 50 ให้ผ่าน ถ้าไม่ใช่ให้ตก' ต้องใช้สูตรใด?",
        options: ["ก. =SUM(A1>50, 'ผ่าน', 'ตก')", "ข. =IF(A1>50, 'ผ่าน', 'ตก')", "ค. =COUNT(A1>50, 'ผ่าน', 'ตก')", "ง. =MAX(A1>50)"],
        answer: 1,
        explanation: "สูตร IF มีโครงสร้างคือ =IF(เงื่อนไข, ถ้าจริงทำอะไร, ถ้าเท็จทำอะไร)"
    },
    {
        question: "102. เทคโนโลยี 'Blockchain' เกี่ยวข้องกับเรื่องใดมากที่สุด?",
        options: ["ก. การปลูกพืช", "ข. สกุลเงินดิจิทัล (Cryptocurrency) และความปลอดภัยของข้อมูล", "ค. การตัดต่อวิดีโอ", "ง. หุ่นยนต์ทำความสะอาด"],
        answer: 1,
        explanation: "Blockchain คือเทคโนโลยีการเก็บข้อมูลแบบกระจายศูนย์ มีความปลอดภัยสูง เป็นพื้นฐานของ Bitcoin"
    },
    {
        question: "103. การยืนยันตัวตนแบบ 2 ขั้นตอน (2FA) คืออะไร?",
        options: ["ก. ใส่รหัสผ่าน 2 ครั้ง", "ข. ใช้รหัสผ่านคู่กับรหัส OTP หรือแอปยืนยันตัวตน", "ค. สแกนนิ้ว 2 นิ้ว", "ง. ใช้บัตรประชาชน 2 ใบ"],
        answer: 1,
        explanation: "Two-Factor Authentication คือการใช้สิ่งที่เรารู้ (Password) คู่กับสิ่งที่เรามี (มือถือ/OTP) เพื่อความปลอดภัยสูงสุด"
    },
    {
        question: "104. SSD (Solid State Drive) ดีกว่า HDD (Hard Disk Drive) อย่างไร?",
        options: ["ก. ราคาถูกกว่ามาก", "ข. อ่านเขียนข้อมูลเร็วกว่า ทนกระแทกได้ดีกว่า", "ค. ความจุน้อยกว่าเสมอ", "ง. ต้องใช้ไฟเลี้ยงมากกว่า"],
        answer: 1,
        explanation: "SSD ใช้ชิปเก็บข้อมูล ทำงานเร็วกว่า HDD ที่เป็นจานหมุนมาก และไม่มีชิ้นส่วนเคลื่อนไหว"
    },
    {
        question: "105. คีย์ลัด Windows + L มีไว้ทำอะไร?",
        options: ["ก. ปิดเครื่อง", "ข. ล็อกหน้าจอ (Lock Screen)", "ค. เปิดไฟคีย์บอร์ด", "ง. ออกจากระบบ"],
        answer: 1,
        explanation: "ใช้ล็อกหน้าจอทันทีเมื่อต้องลุกจากโต๊ะทำงาน เพื่อความปลอดภัย"
    },
    {
        question: "106. ใน PowerPoint หากต้องการแก้ไขรูปแบบสไลด์ทุกหน้าพร้อมกันทีเดียว ต้องไปที่เมนูใด?",
        options: ["ก. Slide Show", "ข. Slide Master (ต้นแบบสไลด์)", "ค. Animation", "ง. Transition"],
        answer: 1,
        explanation: "Slide Master ใช้กำหนดฟอนต์ สี โลโก้ ที่จะให้ปรากฏเหมือนกันทุกหน้า"
    },
    {
        question: "107. ข้อใดคือประโยชน์หลักของ 5G ที่เหนือกว่า 4G?",
        options: ["ก. ประหยัดแบตเตอรี่", "ข. ความเร็วสูงและความหน่วงต่ำ (Low Latency)", "ค. ค่าบริการถูกลง", "ง. โทรติดง่ายขึ้น"],
        answer: 1,
        explanation: "5G เน้นความเร็วรับส่งข้อมูลระดับ Gigabit และความหน่วง (Ping) ที่ต่ำมาก เหมาะกับรถยนต์ไร้คนขับ/ผ่าตัดทางไกล"
    },
    {
        question: "108. PDPA คือกฎหมายเกี่ยวกับอะไร?",
        options: ["ก. การกระทำผิดทางคอมพิวเตอร์", "ข. การคุ้มครองข้อมูลส่วนบุคคล", "ค. ลิขสิทธิ์ซอฟต์แวร์", "ง. ภาษีออนไลน์"],
        answer: 1,
        explanation: "Personal Data Protection Act (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล)"
    },
    {
        question: "109. โปรแกรมใดเป็น 'Open Source' (ใช้งานฟรีและแก้ไขโค้ดได้)?",
        options: ["ก. Microsoft Office", "ข. Photoshop", "ค. Linux / VLC Player", "ง. Windows 11"],
        answer: 2,
        explanation: "Linux, VLC, Firefox เป็นซอฟต์แวร์โอเพนซอร์ส (ฟรีและเปิดเผยโค้ด)"
    },
    {
        question: "110. หากต้องการ 'แคปหน้าจอ' แค่บางส่วน (Snipping) ใน Windows 10/11 ใช้คีย์ลัดใด?",
        options: ["ก. Print Screen", "ข. Windows + Shift + S", "ค. Alt + F4", "ง. Ctrl + P"],
        answer: 1,
        explanation: "Windows + Shift + S เป็นคีย์ลัดเรียกเครื่องมือ Snipping Tool รุ่นใหม่"
    },
    {
        question: "111. AI (Artificial Intelligence) คืออะไร?",
        options: ["ก. โปรแกรมวาดรูป", "ข. ปัญญาประดิษฐ์ (ระบบคอมพิวเตอร์ที่คิด/เรียนรู้ได้คล้ายมนุษย์)", "ค. หุ่นยนต์โรงงาน", "ง. อินเทอร์เน็ตความเร็วสูง"],
        answer: 1,
        explanation: "AI คือปัญญาประดิษฐ์ เช่น ระบบจดจำใบหน้า, ChatGPT, Google Assistant"
    },
    {
        question: "112. นามสกุลไฟล์ .zip และ .rar จัดอยู่ในประเภทใด?",
        options: ["ก. ไฟล์ระบบ", "ข. ไฟล์บีบอัด (Compressed)", "ค. ไฟล์เอกสาร", "ง. ไฟล์วิดีโอ"],
        answer: 1,
        explanation: "ใช้สำหรับลดขนาดไฟล์หรือรวมหลายไฟล์เป็นก้อนเดียว"
    },
    {
        question: "113. ข้อใดคือ 'Digital Footprint'?",
        options: ["ก. รอยนิ้วมือดิจิทัล", "ข. ร่องรอยการกระทำบนโลกออนไลน์ที่สืบค้นย้อนหลังได้", "ค. การเดินสายแลน", "ง. รองเท้าอัจฉริยะ"],
        answer: 1,
        explanation: "ทุกสิ่งที่เราโพสต์ แชร์ หรือค้นหา จะถูกบันทึกไว้เป็นร่องรอยดิจิทัล (Digital Footprint)"
    },
    {
        question: "114. ใน Excel เครื่องหมาย '$' (เช่น $A$1) มีไว้ทำอะไร?",
        options: ["ก. ใส่สกุลเงินดอลลาร์", "ข. ล็อกเซลล์ไม่ให้เลื่อนเมื่อก๊อปปี้สูตร (Absolute Reference)", "ค. ตกแต่งตาราง", "ง. คูณเลข"],
        answer: 1,
        explanation: "เรียกว่าการอ้างอิงแบบตรึงตำแหน่ง (Absolute) ไม่ให้เปลี่ยนเมื่อลากสูตร"
    },
    {
        question: "115. IPv6 ถูกคิดค้นขึ้นมาเพราะสาเหตุใด?",
        options: ["ก. อินเทอร์เน็ตช้าลง", "ข. หมายเลข IPv4 ไม่พอใช้งาน", "ค. เพื่อความสวยงาม", "ง. เพื่อรองรับ 5G"],
        answer: 1,
        explanation: "IPv4 มีจำนวนจำกัด (ประมาณ 4 พันล้านเลข) ซึ่งหมดแล้ว จึงต้องใช้ IPv6 ที่มีจำนวนมหาศาลแทน"
    },
    {
        question: "116. การโจมตีแบบ DDoS คืออะไร?",
        options: ["ก. ขโมยรหัสผ่าน", "ข. ระดมส่งข้อมูลถล่มเซิร์ฟเวอร์จนล่ม", "ค. ปล่อยไวรัสเข้าเครื่อง", "ง. แฮกกล้องวงจรปิด"],
        answer: 1,
        explanation: "Distributed Denial of Service คือการใช้คอมพิวเตอร์จำนวนมากรุมยิง Traffic ใส่เว็บจนใช้งานไม่ได้"
    },
    {
        question: "117. ข้อใดไม่ใช่บริการ Cloud Computing?",
        options: ["ก. Google Drive", "ข. Dropbox", "ค. OneDrive", "ง. Flash Drive"],
        answer: 3,
        explanation: "Flash Drive เป็นอุปกรณ์เก็บข้อมูลแบบพกพา (Hardware) ไม่ใช่ Cloud"
    },
    {
        question: "118. ความละเอียดภาพ (Resolution) บนหน้าจอมักมีหน่วยเป็นอะไร?",
        options: ["ก. Inch (นิ้ว)", "ข. DPI / Pixel", "ค. Hertz", "ง. Watt"],
        answer: 1,
        explanation: "Pixel (จุดภาพ) หรือ DPI (Dots Per Inch) ใช้บอกความละเอียด"
    },
    {
        question: "119. ใน Word หากต้องการขึ้นหน้าใหม่ทันที (Page Break) กดปุ่มใด?",
        options: ["ก. Enter รัวๆ", "ข. Ctrl + Enter", "ค. Shift + Enter", "ง. Alt + Enter"],
        answer: 1,
        explanation: "วิธีที่ถูกต้องในการขึ้นหน้าใหม่คือ Ctrl + Enter (ไม่ควรกด Enter รัวๆ)"
    },
    {
        question: "120. หากคอมพิวเตอร์ทำงานช้าลงมาก ผิดปกติ สาเหตุที่เป็นไปได้น้อยที่สุดคือ?",
        options: ["ก. ติดไวรัส", "ข. เปิดโปรแกรมเยอะเกินไป", "ค. ฮาร์ดดิสก์ใกล้เต็ม", "ง. เมาส์ถ่านหมด"],
        answer: 3,
        explanation: "เมาส์ถ่านหมดทำให้ขยับไม่ได้ แต่ไม่เกี่ยวกับความเร็วประมวลผลของเครื่อง"
    },
    {
        question: "121. 'Cookie' ในทางอินเทอร์เน็ตคืออะไร?",
        options: ["ก. ขนม", "ข. ไฟล์ขนาดเล็กที่เว็บฝังไว้ในเครื่องเราเพื่อจำค่าการใช้งาน", "ค. ไวรัสชนิดหนึ่ง", "ง. โปรแกรมแชท"],
        answer: 1,
        explanation: "Cookie ช่วยให้เว็บจำได้ว่าเราคือใคร เคยเข้าชมอะไร (เช่น จำสินค้าในตะกร้า)"
    },
    {
        question: "122. โปรแกรมใดใช้จัดการฐานข้อมูล (Database) ในชุด Microsoft Office?",
        options: ["ก. Excel", "ข. Access", "ค. Publisher", "ง. OneNote"],
        answer: 1,
        explanation: "Microsoft Access เป็นโปรแกรมจัดการฐานข้อมูล (DBMS)"
    },
    {
        question: "123. หากต้องการปิดโปรแกรมปัจจุบันทันที (Close Window) ใช้คีย์ลัดใด?",
        options: ["ก. Alt + F4", "ข. Ctrl + W", "ค. Esc", "ง. ถูกทั้ง ก. และ ข."],
        answer: 3,
        explanation: "Alt + F4 ปิดโปรแกรม, Ctrl + W ปิดหน้าต่าง/แท็บงาน ปัจจุบัน (ใช้ได้ทั้งคู่)"
    },
    {
        question: "124. ข้อใดคือ 'Freeware'?",
        options: ["ก. ซอฟต์แวร์ที่ต้องจ่ายเงินซื้อ", "ข. ซอฟต์แวร์ที่ให้ใช้ฟรี แต่ไม่ให้แก้ไขโค้ด", "ค. ซอฟต์แวร์ทดลองใช้ 30 วัน", "ง. ซอฟต์แวร์เถื่อน"],
        answer: 1,
        explanation: "Freeware คือใช้ฟรี (เช่น Chrome, Line) ต่างกับ Open Source ตรงที่ Freeware มักไม่แจกโค้ด"
    },
    {
        question: "125. ใน Excel หากต้องการหาค่าที่ 'มากที่สุด' ในช่วงข้อมูล ใช้สูตรใด?",
        options: ["ก. =MOST()", "ข. =HIGH()", "ค. =MAX()", "ง. =UPPER()"],
        answer: 2,
        explanation: "MAX = Maximum (ค่าสูงสุด), MIN = Minimum (ค่าต่ำสุด)"
    },
    {
        question: "101. ใน Excel หากต้องการตัดเกรด โดยมีเงื่อนไขว่า 'ถ้าคะแนนมากกว่า 50 ให้ผ่าน ถ้าไม่ใช่ให้ตก' ต้องใช้สูตรใด?",
        options: ["ก. =SUM(A1>50, 'ผ่าน', 'ตก')", "ข. =IF(A1>50, 'ผ่าน', 'ตก')", "ค. =COUNT(A1>50, 'ผ่าน', 'ตก')", "ง. =MAX(A1>50)"],
        answer: 1,
        explanation: "สูตร IF มีโครงสร้างคือ =IF(เงื่อนไข, ถ้าจริงทำอะไร, ถ้าเท็จทำอะไร)"
    },
    {
        question: "102. เทคโนโลยี 'Blockchain' เกี่ยวข้องกับเรื่องใดมากที่สุด?",
        options: ["ก. การปลูกพืช", "ข. สกุลเงินดิจิทัล (Cryptocurrency) และความปลอดภัยของข้อมูล", "ค. การตัดต่อวิดีโอ", "ง. หุ่นยนต์ทำความสะอาด"],
        answer: 1,
        explanation: "Blockchain คือเทคโนโลยีการเก็บข้อมูลแบบกระจายศูนย์ มีความปลอดภัยสูง เป็นพื้นฐานของ Bitcoin"
    },
    {
        question: "103. การยืนยันตัวตนแบบ 2 ขั้นตอน (2FA) คืออะไร?",
        options: ["ก. ใส่รหัสผ่าน 2 ครั้ง", "ข. ใช้รหัสผ่านคู่กับรหัส OTP หรือแอปยืนยันตัวตน", "ค. สแกนนิ้ว 2 นิ้ว", "ง. ใช้บัตรประชาชน 2 ใบ"],
        answer: 1,
        explanation: "Two-Factor Authentication คือการใช้สิ่งที่เรารู้ (Password) คู่กับสิ่งที่เรามี (มือถือ/OTP) เพื่อความปลอดภัยสูงสุด"
    },
    {
        question: "104. SSD (Solid State Drive) ดีกว่า HDD (Hard Disk Drive) อย่างไร?",
        options: ["ก. ราคาถูกกว่ามาก", "ข. อ่านเขียนข้อมูลเร็วกว่า ทนกระแทกได้ดีกว่า", "ค. ความจุน้อยกว่าเสมอ", "ง. ต้องใช้ไฟเลี้ยงมากกว่า"],
        answer: 1,
        explanation: "SSD ใช้ชิปเก็บข้อมูล ทำงานเร็วกว่า HDD ที่เป็นจานหมุนมาก และไม่มีชิ้นส่วนเคลื่อนไหว"
    },
    {
        question: "105. คีย์ลัด Windows + L มีไว้ทำอะไร?",
        options: ["ก. ปิดเครื่อง", "ข. ล็อกหน้าจอ (Lock Screen)", "ค. เปิดไฟคีย์บอร์ด", "ง. ออกจากระบบ"],
        answer: 1,
        explanation: "ใช้ล็อกหน้าจอทันทีเมื่อต้องลุกจากโต๊ะทำงาน เพื่อความปลอดภัย"
    },
    {
        question: "106. ใน PowerPoint หากต้องการแก้ไขรูปแบบสไลด์ทุกหน้าพร้อมกันทีเดียว ต้องไปที่เมนูใด?",
        options: ["ก. Slide Show", "ข. Slide Master (ต้นแบบสไลด์)", "ค. Animation", "ง. Transition"],
        answer: 1,
        explanation: "Slide Master ใช้กำหนดฟอนต์ สี โลโก้ ที่จะให้ปรากฏเหมือนกันทุกหน้า"
    },
    {
        question: "107. ข้อใดคือประโยชน์หลักของ 5G ที่เหนือกว่า 4G?",
        options: ["ก. ประหยัดแบตเตอรี่", "ข. ความเร็วสูงและความหน่วงต่ำ (Low Latency)", "ค. ค่าบริการถูกลง", "ง. โทรติดง่ายขึ้น"],
        answer: 1,
        explanation: "5G เน้นความเร็วรับส่งข้อมูลระดับ Gigabit และความหน่วง (Ping) ที่ต่ำมาก เหมาะกับรถยนต์ไร้คนขับ/ผ่าตัดทางไกล"
    },
    {
        question: "108. PDPA คือกฎหมายเกี่ยวกับอะไร?",
        options: ["ก. การกระทำผิดทางคอมพิวเตอร์", "ข. การคุ้มครองข้อมูลส่วนบุคคล", "ค. ลิขสิทธิ์ซอฟต์แวร์", "ง. ภาษีออนไลน์"],
        answer: 1,
        explanation: "Personal Data Protection Act (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล)"
    },
    {
        question: "109. โปรแกรมใดเป็น 'Open Source' (ใช้งานฟรีและแก้ไขโค้ดได้)?",
        options: ["ก. Microsoft Office", "ข. Photoshop", "ค. Linux / VLC Player", "ง. Windows 11"],
        answer: 2,
        explanation: "Linux, VLC, Firefox เป็นซอฟต์แวร์โอเพนซอร์ส (ฟรีและเปิดเผยโค้ด)"
    },
    {
        question: "110. หากต้องการ 'แคปหน้าจอ' แค่บางส่วน (Snipping) ใน Windows 10/11 ใช้คีย์ลัดใด?",
        options: ["ก. Print Screen", "ข. Windows + Shift + S", "ค. Alt + F4", "ง. Ctrl + P"],
        answer: 1,
        explanation: "Windows + Shift + S เป็นคีย์ลัดเรียกเครื่องมือ Snipping Tool รุ่นใหม่"
    },
    {
        question: "111. AI (Artificial Intelligence) คืออะไร?",
        options: ["ก. โปรแกรมวาดรูป", "ข. ปัญญาประดิษฐ์ (ระบบคอมพิวเตอร์ที่คิด/เรียนรู้ได้คล้ายมนุษย์)", "ค. หุ่นยนต์โรงงาน", "ง. อินเทอร์เน็ตความเร็วสูง"],
        answer: 1,
        explanation: "AI คือปัญญาประดิษฐ์ เช่น ระบบจดจำใบหน้า, ChatGPT, Google Assistant"
    },
    {
        question: "112. นามสกุลไฟล์ .zip และ .rar จัดอยู่ในประเภทใด?",
        options: ["ก. ไฟล์ระบบ", "ข. ไฟล์บีบอัด (Compressed)", "ค. ไฟล์เอกสาร", "ง. ไฟล์วิดีโอ"],
        answer: 1,
        explanation: "ใช้สำหรับลดขนาดไฟล์หรือรวมหลายไฟล์เป็นก้อนเดียว"
    },
    {
        question: "113. ข้อใดคือ 'Digital Footprint'?",
        options: ["ก. รอยนิ้วมือดิจิทัล", "ข. ร่องรอยการกระทำบนโลกออนไลน์ที่สืบค้นย้อนหลังได้", "ค. การเดินสายแลน", "ง. รองเท้าอัจฉริยะ"],
        answer: 1,
        explanation: "ทุกสิ่งที่เราโพสต์ แชร์ หรือค้นหา จะถูกบันทึกไว้เป็นร่องรอยดิจิทัล (Digital Footprint)"
    },
    {
        question: "114. ใน Excel เครื่องหมาย '$' (เช่น $A$1) มีไว้ทำอะไร?",
        options: ["ก. ใส่สกุลเงินดอลลาร์", "ข. ล็อกเซลล์ไม่ให้เลื่อนเมื่อก๊อปปี้สูตร (Absolute Reference)", "ค. ตกแต่งตาราง", "ง. คูณเลข"],
        answer: 1,
        explanation: "เรียกว่าการอ้างอิงแบบตรึงตำแหน่ง (Absolute) ไม่ให้เปลี่ยนเมื่อลากสูตร"
    },
    {
        question: "115. IPv6 ถูกคิดค้นขึ้นมาเพราะสาเหตุใด?",
        options: ["ก. อินเทอร์เน็ตช้าลง", "ข. หมายเลข IPv4 ไม่พอใช้งาน", "ค. เพื่อความสวยงาม", "ง. เพื่อรองรับ 5G"],
        answer: 1,
        explanation: "IPv4 มีจำนวนจำกัด (ประมาณ 4 พันล้านเลข) ซึ่งหมดแล้ว จึงต้องใช้ IPv6 ที่มีจำนวนมหาศาลแทน"
    },
    {
        question: "116. การโจมตีแบบ DDoS คืออะไร?",
        options: ["ก. ขโมยรหัสผ่าน", "ข. ระดมส่งข้อมูลถล่มเซิร์ฟเวอร์จนล่ม", "ค. ปล่อยไวรัสเข้าเครื่อง", "ง. แฮกกล้องวงจรปิด"],
        answer: 1,
        explanation: "Distributed Denial of Service คือการใช้คอมพิวเตอร์จำนวนมากรุมยิง Traffic ใส่เว็บจนใช้งานไม่ได้"
    },
    {
        question: "117. ข้อใดไม่ใช่บริการ Cloud Computing?",
        options: ["ก. Google Drive", "ข. Dropbox", "ค. OneDrive", "ง. Flash Drive"],
        answer: 3,
        explanation: "Flash Drive เป็นอุปกรณ์เก็บข้อมูลแบบพกพา (Hardware) ไม่ใช่ Cloud"
    },
    {
        question: "118. ความละเอียดภาพ (Resolution) บนหน้าจอมักมีหน่วยเป็นอะไร?",
        options: ["ก. Inch (นิ้ว)", "ข. DPI / Pixel", "ค. Hertz", "ง. Watt"],
        answer: 1,
        explanation: "Pixel (จุดภาพ) หรือ DPI (Dots Per Inch) ใช้บอกความละเอียด"
    },
    {
        question: "119. ใน Word หากต้องการขึ้นหน้าใหม่ทันที (Page Break) กดปุ่มใด?",
        options: ["ก. Enter รัวๆ", "ข. Ctrl + Enter", "ค. Shift + Enter", "ง. Alt + Enter"],
        answer: 1,
        explanation: "วิธีที่ถูกต้องในการขึ้นหน้าใหม่คือ Ctrl + Enter (ไม่ควรกด Enter รัวๆ)"
    },
    {
        question: "120. หากคอมพิวเตอร์ทำงานช้าลงมาก ผิดปกติ สาเหตุที่เป็นไปได้น้อยที่สุดคือ?",
        options: ["ก. ติดไวรัส", "ข. เปิดโปรแกรมเยอะเกินไป", "ค. ฮาร์ดดิสก์ใกล้เต็ม", "ง. เมาส์ถ่านหมด"],
        answer: 3,
        explanation: "เมาส์ถ่านหมดทำให้ขยับไม่ได้ แต่ไม่เกี่ยวกับความเร็วประมวลผลของเครื่อง"
    },
    {
        question: "121. 'Cookie' ในทางอินเทอร์เน็ตคืออะไร?",
        options: ["ก. ขนม", "ข. ไฟล์ขนาดเล็กที่เว็บฝังไว้ในเครื่องเราเพื่อจำค่าการใช้งาน", "ค. ไวรัสชนิดหนึ่ง", "ง. โปรแกรมแชท"],
        answer: 1,
        explanation: "Cookie ช่วยให้เว็บจำได้ว่าเราคือใคร เคยเข้าชมอะไร (เช่น จำสินค้าในตะกร้า)"
    },
    {
        question: "122. โปรแกรมใดใช้จัดการฐานข้อมูล (Database) ในชุด Microsoft Office?",
        options: ["ก. Excel", "ข. Access", "ค. Publisher", "ง. OneNote"],
        answer: 1,
        explanation: "Microsoft Access เป็นโปรแกรมจัดการฐานข้อมูล (DBMS)"
    },
    {
        question: "123. หากต้องการปิดโปรแกรมปัจจุบันทันที (Close Window) ใช้คีย์ลัดใด?",
        options: ["ก. Alt + F4", "ข. Ctrl + W", "ค. Esc", "ง. ถูกทั้ง ก. และ ข."],
        answer: 3,
        explanation: "Alt + F4 ปิดโปรแกรม, Ctrl + W ปิดหน้าต่าง/แท็บงาน ปัจจุบัน (ใช้ได้ทั้งคู่)"
    },
    {
        question: "124. ข้อใดคือ 'Freeware'?",
        options: ["ก. ซอฟต์แวร์ที่ต้องจ่ายเงินซื้อ", "ข. ซอฟต์แวร์ที่ให้ใช้ฟรี แต่ไม่ให้แก้ไขโค้ด", "ค. ซอฟต์แวร์ทดลองใช้ 30 วัน", "ง. ซอฟต์แวร์เถื่อน"],
        answer: 1,
        explanation: "Freeware คือใช้ฟรี (เช่น Chrome, Line) ต่างกับ Open Source ตรงที่ Freeware มักไม่แจกโค้ด"
    },
    {
        question: "125. ใน Excel หากต้องการหาค่าที่ 'มากที่สุด' ในช่วงข้อมูล ใช้สูตรใด?",
        options: ["ก. =MOST()", "ข. =HIGH()", "ค. =MAX()", "ง. =UPPER()"],
        answer: 2,
        explanation: "MAX = Maximum (ค่าสูงสุด), MIN = Minimum (ค่าต่ำสุด)"
    },
    // --- ชุดที่ 3: คอมพิวเตอร์แนวลึก/ประยุกต์ (ข้อ 126-225) ---
    {
        question: "126. ข้อใดคือความแตกต่างหลักระหว่าง HTTP และ HTTPS?",
        options: ["ก. ความเร็วในการโหลด", "ข. การเข้ารหัสข้อมูล (Encryption)", "ค. ค่าใช้จ่ายในการจดโดเมน", "ง. จำนวนผู้เข้าชม"],
        answer: 1,
        explanation: "HTTPS มีการเข้ารหัสข้อมูล (S = Secure) ปลอดภัยกว่า HTTP ธรรมดา"
    },
    {
        question: "127. การโจมตีแบบ 'Social Engineering' คืออะไร?",
        options: ["ก. การแฮกด้วยโปรแกรม", "ข. การหลอกลวงเหยื่อให้เปิดเผยข้อมูลโดยใช้หลักจิตวิทยา", "ค. การปล่อยไวรัสทางสังคมออนไลน์", "ง. การขโมยเครื่องคอมพิวเตอร์"],
        answer: 1,
        explanation: "ใช้จิตวิทยาหลอกคน (เช่น โทรมาหลอกว่าเป็นเจ้าหน้าที่) ไม่ได้ใช้เทคนิคแฮกโปรแกรมโดยตรง"
    },
    {
        question: "128. ใน Excel สูตร =VLOOKUP ใช้ทำอะไร?",
        options: ["ก. หาค่าเฉลี่ย", "ข. ค้นหาข้อมูลในตารางตามเงื่อนไขที่กำหนด", "ค. เรียงลำดับข้อมูล", "ง. สร้างกราฟ"],
        answer: 1,
        explanation: "VLOOKUP (Vertical Lookup) ใช้ค้นหาข้อมูลในแนวตั้งจากตารางอื่น"
    },
    {
        question: "129. หน่วยความจำแบบ 'Cache' มีหน้าที่อะไร?",
        options: ["ก. เก็บข้อมูลถาวร", "ข. พักข้อมูลระหว่าง CPU กับ RAM เพื่อเพิ่มความเร็ว", "ค. สำรองไฟ", "ง. ระบายความร้อน"],
        answer: 1,
        explanation: "Cache Memory เป็นหน่วยความจำความเร็วสูงมาก ใช้พักข้อมูลที่ CPU เรียกใช้บ่อยๆ"
    },
    {
        question: "130. พ.ร.บ. คอมพิวเตอร์ฯ: การ 'ตัดต่อภาพผู้อื่น' แล้วนำเข้าสู่ระบบคอมพิวเตอร์ ทำให้เขาเสียหาย มีโทษสูงสุดเท่าใด?",
        options: ["ก. จำคุก 1 ปี ปรับ 2 หมื่น", "ข. จำคุก 3 ปี ปรับ 2 แสน", "ค. จำคุก 5 ปี ปรับ 1 แสน", "ง. ปรับอย่างเดียว"],
        answer: 1,
        explanation: "ตัดต่อภาพ (ม.16) จำคุกไม่เกิน 3 ปี ปรับไม่เกิน 2 แสนบาท"
    },
    {
        question: "131. ไฟล์นามสกุล .csv นิยมใช้ทำอะไร?",
        options: ["ก. เก็บรูปภาพ", "ข. เก็บฐานข้อมูลแบบตารางข้อความ (Comma Separated Values)", "ค. เก็บวิดีโอ", "ง. เก็บเพลง"],
        answer: 1,
        explanation: "CSV ใช้เก็บข้อมูลตารางโดยคั่นด้วยเครื่องหมายจุลภาค (,) นิยมใช้แลกเปลี่ยนข้อมูลระหว่างโปรแกรมฐานข้อมูล/Excel"
    },
    {
        question: "132. การกดปุ่ม Windows + L มีผลอย่างไร?",
        options: ["ก. ออกจากระบบ (Log off)", "ข. ล็อกหน้าจอ (Lock Screen)", "ค. ปิดเครื่อง", "ง. เปิด My Computer"],
        answer: 1,
        explanation: "Lock Screen ทันที (ป้องกันคนอื่นมาใช้เครื่องตอนเราลุกไปทำธุระ)"
    },
    {
        question: "133. โปรแกรมใดเป็น 'Malware'?",
        options: ["ก. Microsoft Word", "ข. Trojan Horse", "ค. Norton Antivirus", "ง. Linux"],
        answer: 1,
        explanation: "Trojan Horse เป็นมัลแวร์ที่ปลอมตัวมาในรูปโปรแกรมปกติเพื่อหลอกให้ผู้ใช้ติดตั้ง"
    },
    {
        question: "134. IP Address '192.168.1.1' จัดเป็น IP ประเภทใด?",
        options: ["ก. Public IP", "ข. Private IP (ใช้ภายในวง LAN)", "ค. Static IP", "ง. Dynamic IP"],
        answer: 1,
        explanation: "ชุด 192.168.x.x เป็น Private IP มาตรฐานสำหรับใช้ภายในเครือข่ายองค์กรหรือบ้าน (ออกเน็ตไม่ได้โดยตรง)"
    },
    {
        question: "135. ข้อใดคือ 'Algorithm'?",
        options: ["ก. จังหวะดนตรี", "ข. ขั้นตอนวิธีในการแก้ปัญหาอย่างเป็นลำดับ", "ค. โปรแกรมวาดรูป", "ง. ชื่อรุ่นคอมพิวเตอร์"],
        answer: 1,
        explanation: "อัลกอริทึม คือลำดับขั้นตอนการทำงานที่ชัดเจน (Step-by-step)"
    },
    {
        question: "136. การ 'Defrag' (Defragmentation) ฮาร์ดดิสก์ มีประโยชน์อย่างไร?",
        options: ["ก. ลบไวรัส", "ข. จัดเรียงข้อมูลที่กระจัดกระจายให้เป็นระเบียบ เพื่อให้อ่านเร็วขึ้น", "ค. เพิ่มพื้นที่ว่าง", "ง. ซ่อมแซมไฟล์เสีย"],
        answer: 1,
        explanation: "จัดเรียงข้อมูล (เฉพาะ HDD จานหมุน) ให้หัวอ่านทำงานน้อยลง เครื่องเร็วขึ้น"
    },
    {
        question: "137. ปุ่มใดใช้สำหรับ 'Rename' (เปลี่ยนชื่อไฟล์)?",
        options: ["ก. F1", "ข. F2", "ค. F5", "ง. F12"],
        answer: 1,
        explanation: "F2 = Rename"
    },
    {
        question: "138. เทคโนโลยี 'Biometrics' คืออะไร?",
        options: ["ก. การปลูกพืชชีวภาพ", "ข. การยืนยันตัวตนด้วยลักษณะทางกายภาพ (เช่น ลายนิ้วมือ, ม่านตา)", "ค. หุ่นยนต์", "ง. ยารักษาโรค"],
        answer: 1,
        explanation: "การพิสูจน์อัตลักษณ์บุคคลด้วยข้อมูลชีวภาพ (ลายนิ้วมือ, ใบหน้า, เสียง)"
    },
    {
        question: "139. ใน PowerPoint มุมมองใดเหมาะสำหรับการจัดลำดับสไลด์จำนวนมาก?",
        options: ["ก. Normal View", "ข. Slide Sorter View", "ค. Reading View", "ง. Slide Show"],
        answer: 1,
        explanation: "Slide Sorter (ตัวเรียงลำดับสไลด์) จะเห็นสไลด์ทั้งหมดเป็นรูปเล็กๆ ย้ายไปมาง่าย"
    },
    {
        question: "140. ข้อใดคือหน้าที่ของ 'DNS Server'?",
        options: ["ก. เก็บข้อมูลเว็บไซต์", "ข. แปลงชื่อโดเมน (เช่น google.com) เป็น IP Address", "ค. ป้องกันไวรัส", "ง. แจก IP Address"],
        answer: 1,
        explanation: "Domain Name System แปลงชื่อเว็บที่คนจำง่าย เป็นเลข IP ที่คอมพิวเตอร์เข้าใจ"
    },
    {
        question: "141. 'Open Data' หมายถึง?",
        options: ["ก. ข้อมูลความลับ", "ข. ข้อมูลเปิดที่ทุกคนสามารถนำไปใช้ได้โดยอิสระ", "ค. ข้อมูลที่ต้องซื้อ", "ง. ข้อมูลส่วนบุคคล"],
        answer: 1,
        explanation: "ข้อมูลสาธารณะที่เปิดให้ทุกคนเข้าถึงและใช้ประโยชน์ได้ (เช่น ข้อมูลสถิติภาครัฐ)"
    },
    {
        question: "142. หากต้องการส่งไฟล์ขนาดใหญ่มาก (เกิน 25MB) ทางอีเมล ควรทำอย่างไร?",
        options: ["ก. บีบอัดไฟล์ (Zip) หรือฝากไฟล์ไว้บน Cloud แล้วส่งลิงก์", "ข. พยายามส่งหลายๆ ครั้ง", "ค. เปลี่ยนนามสกุลไฟล์", "ง. ปริ้นท์แล้วส่งไปรษณีย์"],
        answer: 0,
        explanation: "อีเมลส่วนใหญ่จำกัดไฟล์แนบ 25MB ถ้าเกินต้องฝาก Google Drive/OneDrive แล้วส่งลิงก์"
    },
    {
        question: "143. สัญลักษณ์ 'CC' ในสัญญาลิขสิทธิ์ (Creative Commons) หมายถึง?",
        options: ["ก. ห้ามทำซ้ำ", "ข. สัญญาอนุญาตให้ใช้สิทธิ์บางประการได้ (เช่น ให้เผยแพร่ได้แต่ต้องให้เครดิต)", "ค. ลิขสิทธิ์สงวนทุกประการ", "ง. ไม่คุ้มครอง"],
        answer: 1,
        explanation: "Creative Commons เป็นสัญญาอนุญาตแบบเปิด (ยืดหยุ่นกว่า Copyright ปกติ)"
    },
    {
        question: "144. 'Dark Web' คืออะไร?",
        options: ["ก. เว็บไซต์ที่มีพื้นหลังสีดำ", "ข. เว็บไซต์ที่ไม่สามารถเข้าถึงได้ด้วย Search Engine ปกติ และมักใช้ในทางผิดกฎหมาย", "ค. เว็บไซต์ตอนกลางคืน", "ง. เว็บไซต์ที่ปิดปรับปรุง"],
        answer: 1,
        explanation: "ส่วนของอินเทอร์เน็ตที่ถูกซ่อนไว้ ต้องใช้โปรแกรมเฉพาะ (เช่น Tor) เข้าถึง"
    },
    {
        question: "145. ข้อใดเป็นอุปกรณ์ 'Network Device'?",
        options: ["ก. Monitor", "ข. Switch / Router", "ค. Printer", "ง. Scanner"],
        answer: 1,
        explanation: "Switch และ Router เป็นอุปกรณ์เชื่อมต่อเครือข่าย"
    },
    {
        question: "146. 'VPN' ย่อมาจากอะไรและมีประโยชน์อย่างไร?",
        options: ["ก. Virtual Private Network (สร้างท่อเชื่อมต่อส่วนตัว/ปลอดภัยบนเน็ตสาธารณะ)", "ข. Virus Protection Network", "ค. Video Player Network", "ง. Voice Phone Number"],
        answer: 0,
        explanation: "Virtual Private Network ช่วยเข้ารหัสข้อมูลและอำพรางตัวตนขณะใช้อินเทอร์เน็ต"
    },
    {
        question: "147. ใน Word หากต้องการแทรก 'เลขหน้า' (Page Number) ต้องไปที่เมนูใด?",
        options: ["ก. Home (หน้าแรก)", "ข. Insert (แทรก)", "ค. Design (ออกแบบ)", "ง. View (มุมมอง)"],
        answer: 1,
        explanation: "เมนู Insert (แทรก) -> Page Number"
    },
    {
        question: "148. การกด Ctrl + Shift + Esc ใช้ทำอะไร?",
        options: ["ก. ปิดเครื่อง", "ข. เปิด Task Manager โดยตรง", "ค. สลับภาษา", "ง. แคปหน้าจอ"],
        answer: 1,
        explanation: "เปิด Task Manager ทันที (เร็วกว่า Ctrl+Alt+Del)"
    },
    {
        question: "149. ข้อใดคือ 'Freemium' Software?",
        options: ["ก. ใช้ฟรีตลอดชีพ", "ข. ใช้ฟรีในระดับพื้นฐาน แต่ต้องจ่ายเงินเพื่อฟีเจอร์พิเศษ", "ค. ต้องจ่ายเงินก่อนใช้", "ง. ซอฟต์แวร์เถื่อน"],
        answer: 1,
        explanation: "Free + Premium (โหลดฟรี เล่นฟรี แต่ถ้าอยากเก่งเร็ว/ปิดโฆษณา ต้องเติมเงิน)"
    },
    {
        question: "150. 'Digital Divide' หมายถึง?",
        options: ["ก. การหารเลขดิจิทัล", "ข. ความเหลื่อมล้ำในการเข้าถึงเทคโนโลยีสารสนเทศ", "ค. การแบ่งปันข้อมูล", "ง. การแยกชิ้นส่วนคอมพิวเตอร์"],
        answer: 1,
        explanation: "ช่องว่างทางดิจิทัล (ความไม่เท่าเทียมในการเข้าถึงเน็ต/คอมพิวเตอร์ ระหว่างคนรวย-จน หรือ เมือง-ชนบท)"
    },
    {
        question: "151. นามสกุลไฟล์ .apk คืออะไร?",
        options: ["ก. ไฟล์ติดตั้งแอพพลิเคชันบน Android", "ข. ไฟล์ติดตั้งบน iOS", "ค. ไฟล์เอกสาร", "ง. ไฟล์เพลง"],
        answer: 0,
        explanation: "Android Package Kit"
    },
    {
        question: "152. 'Bandwidth' เปรียบเสมือนอะไร?",
        options: ["ก. ความกว้างของถนน (ปริมาณข้อมูลที่ส่งได้ต่อวินาที)", "ข. ความเร็วรถ", "ค. ระยะทาง", "ง. น้ำหนักรถ"],
        answer: 0,
        explanation: "ความกว้างของช่องสัญญาณ ยิ่งมากยิ่งส่งข้อมูลได้เยอะในเวลาเท่ากัน"
    },
    {
        question: "153. ข้อใดคือ 'Output Device' ที่แสดงผลเป็น 'สัมผัส' (Tactile)?",
        options: ["ก. จอภาพ", "ข. เครื่องพิมพ์อักษรเบรลล์ (Braille Printer)", "ค. ลำโพง", "ง. เมาส์"],
        answer: 1,
        explanation: "เครื่องพิมพ์เบรลล์สำหรับคนตาบอด"
    },
    {
        question: "154. ใน Excel หากต้องการตรึงแถวแรกไม่ให้เลื่อนหายไปเมื่อเลื่อนหน้าจอ ต้องใช้คำสั่งใด?",
        options: ["ก. Split", "ข. Freeze Panes (ตรึงแนว)", "ค. Hide", "ง. Lock"],
        answer: 1,
        explanation: "Freeze Top Row (ตรึงแถวบนสุด)"
    },
    {
        question: "155. การโจมตีแบบ 'Zero-day Exploit' คือ?",
        options: ["ก. โจมตีในวันอาทิตย์", "ข. โจมตีช่องโหว่ใหม่ที่ผู้พัฒนายังไม่รู้ตัว/ยังไม่มีแพตช์แก้", "ค. โจมตีแบบไม่มีวันหยุด", "ง. โจมตีเครื่องที่เพิ่งซื้อใหม่"],
        answer: 1,
        explanation: "โจมตีจุดอ่อนที่เพิ่งค้นพบ (มีเวลาเตรียมตัวแก้ไข 0 วัน)"
    },
    {
        question: "156. ข้อใด **ไม่ใช่** ระบบปฏิบัติการแบบ Open Source?",
        options: ["ก. Linux", "ข. Ubuntu", "ค. Android", "ง. Windows"],
        answer: 3,
        explanation: "Windows เป็น Proprietary Software (ปิดซอร์สโค้ด ต้องซื้อลิขสิทธิ์)"
    },
    {
        question: "157. 'Augmented Reality (AR)' คืออะไร?",
        options: ["ก. โลกเสมือนจริงที่ต้องใส่แว่น VR (ปิดกั้นโลกจริง)", "ข. การซ้อนภาพกราฟิกจำลองลงบนภาพโลกจริง (เช่น เกม Pokémon GO)", "ค. การดูหนัง 3 มิติ", "ง. การพิมพ์ภาพ 3 มิติ"],
        answer: 1,
        explanation: "AR ผสานโลกจริงกับโลกเสมือน (มองผ่านกล้องมือถือ) ต่างจาก VR ที่ตัดขาดโลกจริง"
    },
    {
        question: "158. หากต้องการเชื่อมต่อคอมพิวเตอร์ 2 เครื่องให้คุยกันโดยตรง (ไม่ต้องผ่าน Hub) ต้องใช้สายแลนแบบใด?",
        options: ["ก. สายตรง (Straight-through)", "ข. สายไขว้ (Crossover)", "ค. สายโทรศัพท์", "ง. สายไฟเบอร์"],
        answer: 1,
        explanation: "เครื่องชนิดเดียวกันต่อกัน (PC-PC) ใช้สาย Crossover (แต่ปัจจุบันการ์ดแลนรุ่นใหม่ใช้สายตรงก็ได้ เพราะมีระบบ Auto MDI-X)"
    },
    {
        question: "159. หน่วยวัดความละเอียดของ Printer คือ?",
        options: ["ก. PPM (Pages Per Minute)", "ข. DPI (Dots Per Inch)", "ค. GHz", "ง. GB"],
        answer: 1,
        explanation: "DPI ยิ่งเยอะภาพยิ่งละเอียด (PPM คือความเร็ว)"
    },
    {
        question: "160. 'Cookie' ที่หมดอายุทันทีเมื่อปิด Browser เรียกว่า?",
        options: ["ก. Persistent Cookie", "ข. Session Cookie", "ค. Third-party Cookie", "ง. Malware"],
        answer: 1,
        explanation: "Session Cookie อยู่แค่ชั่วคราวขณะใช้งาน"
    },
    {
        question: "161. การสำรองข้อมูลแบบ 'Mirroring' (RAID 1) คือ?",
        options: ["ก. แบ่งข้อมูลเขียนลง 2 ลูกพร้อมกันเพื่อความเร็ว", "ข. เขียนข้อมูลเหมือนกันเป๊ะลงฮาร์ดดิสก์ 2 ลูกพร้อมกัน (เพื่อป้องกันข้อมูลหาย)", "ค. เขียนข้อมูลลูกหนึ่งเต็มแล้วค่อยเขียนอีกลูก", "ง. บีบอัดข้อมูล"],
        answer: 1,
        explanation: "RAID 1 (Mirror) คือการทำสำเนาเหมือนกระจกเงา ถ้าลูกนึงพัง ข้อมูลยังอยู่อีกลูก"
    },
    {
        question: "162. พ.ร.บ.คอมพิวเตอร์ฯ ม.14(2) เอาผิดเรื่องใด?",
        options: ["ก. ลามกอนาจาร", "ข. ข้อมูลเท็จที่น่าจะเกิดความเสียหายต่อความมั่นคง/ตื่นตระหนก", "ค. ตัดต่อภาพ", "ง. แฮกข้อมูล"],
        answer: 1,
        explanation: "นำเข้าข้อมูลเท็จที่กระทบความมั่นคง/เศรษฐกิจ/ตื่นตระหนก"
    },
    {
        question: "163. เทคโนโลยี 'NFC' บนมือถือ มักใช้ทำอะไร?",
        options: ["ก. ถ่ายรูป", "ข. จ่ายเงินแบบแตะ (Contactless Payment) / ส่งไฟล์ระยะใกล้มาก", "ค. ดูทีวี", "ง. โทรทางไกล"],
        answer: 1,
        explanation: "Near Field Communication (แตะบัตร/มือถือ)"
    },
    {
        question: "164. ข้อใดคือ 'Firmware'?",
        options: ["ก. ซอฟต์แวร์ที่ฝังตัวอยู่ในฮาร์ดแวร์ (เช่น BIOS, โปรแกรมคุมเครื่องซักผ้า)", "ข. โปรแกรมป้องกันไวรัส", "ค. อุปกรณ์คอมพิวเตอร์ที่แข็งแรง", "ง. ระบบปฏิบัติการ Windows"],
        answer: 0,
        explanation: "ซอฟต์แวร์ระดับต่ำที่ควบคุมฮาร์ดแวร์โดยตรง"
    },
    {
        question: "165. ใน PowerPoint การกดปุ่ม 'B' ขณะนำเสนอ (Slide Show) จะเกิดอะไรขึ้น?",
        options: ["ก. จบการนำเสนอ", "ข. หน้าจอมืดเป็นสีดำ (Black Screen)", "ค. หน้าจอเป็นสีขาว", "ง. ย้อนกลับไปหน้าแรก"],
        answer: 1,
        explanation: "B = Black screen (พักหน้าจอ), W = White screen"
    },
    {
        question: "166. 'Big Data' มีลักษณะ 3V ได้แก่?",
        options: ["ก. Volume, Velocity, Variety", "ข. View, Video, Voice", "ค. Virus, Vaccine, Value", "ง. Very, Vast, Value"],
        answer: 0,
        explanation: "ปริมาณมาก (Volume), เปลี่ยนแปลงเร็ว (Velocity), หลากหลายรูปแบบ (Variety)"
    },
    {
        question: "167. การโจมตีแบบ 'Man-in-the-Middle' คือ?",
        options: ["ก. แฮกเกอร์แอบดักฟัง/แก้ไขข้อมูลระหว่างผู้ส่งและผู้รับ", "ข. แฮกเกอร์นั่งตรงกลางวง", "ค. การขโมยเครื่องเซิร์ฟเวอร์", "ง. การส่งอีเมลขยะ"],
        answer: 0,
        explanation: "ดักจับข้อมูลกลางทาง"
    },
    {
        question: "168. ข้อใดคือ 'Search Engine' ของจีน?",
        options: ["ก. Google", "ข. Baidu", "ค. Yahoo", "ง. Bing"],
        answer: 1,
        explanation: "Baidu (ไป่ตู้)"
    },
    {
        question: "169. ไฟล์ .gif แตกต่างจาก .jpg อย่างไร?",
        options: ["ก. .gif แสดงภาพเคลื่อนไหวได้", "ข. .gif ชัดกว่า", "ค. .jpg แสดงภาพเคลื่อนไหวได้", "ง. .gif มีขนาดใหญ่กว่าเสมอ"],
        answer: 0,
        explanation: "GIF รองรับ Animation (ภาพดุ๊กดิ๊ก)"
    },
    {
        question: "170. 'SaaS' (Software as a Service) คือ?",
        options: ["ก. การซื้อแผ่นโปรแกรมมาลง", "ข. การเช่าใช้ซอฟต์แวร์ผ่านอินเทอร์เน็ต (เช่น Google Docs, Office 365)", "ค. การเขียนโปรแกรมขาย", "ง. การซ่อมคอมพิวเตอร์"],
        answer: 1,
        explanation: "บริการซอฟต์แวร์ผ่าน Cloud (ไม่ต้องติดตั้ง ลงชื่อเข้าใช้ก็ทำงานได้)"
    },
    {
        question: "171. 'Ping' คือคำสั่งสำหรับทำอะไร?",
        options: ["ก. ส่งเสียงเตือน", "ข. ตรวจสอบการเชื่อมต่อระหว่างเครื่อง (ว่าเจอหรือไม่/ช้าแค่ไหน)", "ค. ค้นหาไฟล์", "ง. ลบไฟล์ขยะ"],
        answer: 1,
        explanation: "ทดสอบการเชื่อมต่อเครือข่าย (Latency)"
    },
    {
        question: "172. ใน Word หากต้องการทำ 'จดหมายเวียน' (Mail Merge) ต้องใช้เมนูใด?",
        options: ["ก. References", "ข. Mailings", "ค. Review", "ง. View"],
        answer: 1,
        explanation: "Mailings (การส่งจดหมาย)"
    },
    {
        question: "173. 1 Petabyte (PB) เท่ากับกี่ Terabyte (TB)?",
        options: ["ก. 100 TB", "ข. 1000 TB", "ค. 1024 TB", "ง. 1,000,000 TB"],
        answer: 2,
        explanation: "1024 TB = 1 PB"
    },
    {
        question: "174. ข้อใดคือ 'Input Device' ที่ใช้เล่นเกม?",
        options: ["ก. Joystick / Gamepad", "ข. Plotter", "ค. Speaker", "ง. Projector"],
        answer: 0,
        explanation: "จอยสติ๊ก เป็นอุปกรณ์นำเข้าข้อมูล"
    },
    {
        question: "175. 'QR Code' ย่อมาจาก?",
        options: ["ก. Quality Response", "ข. Quick Response", "ค. Question & Result", "ง. Quick Reader"],
        answer: 1,
        explanation: "Quick Response (ตอบสนองรวดเร็ว)"
    },
    {
        question: "176. 'Safe Mode' ใน Windows คืออะไร?",
        options: ["ก. โหมดประหยัดพลังงาน", "ข. โหมดสำหรับเล่นเกม", "ค. โหมดวินิจฉัยปัญหา (รันเฉพาะไดรเวอร์พื้นฐาน)", "ง. โหมดป้องกันไวรัส"],
        answer: 2,
        explanation: "ใช้แก้ปัญหาคอมฯ โดยโหลดเฉพาะสิ่งที่จำเป็นที่สุด"
    },
    {
        question: "177. การกด 'Ctrl + Z' ใน Windows Explorer (หน้าจัดการไฟล์) จะเกิดผลอะไร?",
        options: ["ก. ลบไฟล์", "ข. กู้คืนไฟล์ที่เพิ่งลบ/ย้าย/เปลี่ยนชื่อ (Undo)", "ค. สร้างโฟลเดอร์ใหม่", "ง. ปิดหน้าต่าง"],
        answer: 1,
        explanation: "Undo การกระทำกับไฟล์ล่าสุด (เช่น เผลอลบ ก็กด Ctrl+Z เรียกคืนได้ทันที)"
    },
    {
        question: "178. 'Deepfake' คือ?",
        options: ["ก. เว็บไซต์ปลอม", "ข. การใช้ AI สลับใบหน้า/เสียงคนในวิดีโอให้เหมือนจริงมาก", "ค. ข่าวปลอม", "ง. โปรแกรมแต่งรูป"],
        answer: 1,
        explanation: "เทคโนโลยี AI ที่สร้างวิดีโอปลอมได้แนบเนียน"
    },
    {
        question: "179. โปรแกรม 'Excel' หากต้องการให้ข้อความขึ้นบรรทัดใหม่ในเซลล์เดิม (Wrap Text) ต้องกดปุ่มใด?",
        options: ["ก. Enter", "ข. Alt + Enter", "ค. Ctrl + Enter", "ง. Shift + Enter"],
        answer: 1,
        explanation: "Alt + Enter (ถ้ากด Enter เฉยๆ จะเลื่อนไปเซลล์ล่าง)"
    },
    {
        question: "180. ข้อใดคือ 'Web Server' Software?",
        options: ["ก. Apache / Nginx", "ข. Photoshop", "ค. Premiere Pro", "ง. Android"],
        answer: 0,
        explanation: "โปรแกรมจำลองเครื่องให้เป็นเซิร์ฟเวอร์เว็บไซต์"
    },
    {
        question: "181. มาตรฐาน 'Wi-Fi 6' มีชื่อทางเทคนิคว่า?",
        options: ["ก. 802.11n", "ข. 802.11ac", "ค. 802.11ax", "ง. 802.11b"],
        answer: 2,
        explanation: "802.11ax (เร็วและรองรับอุปกรณ์ได้หนาแน่นกว่า)"
    },
    {
        question: "182. 'Blockchain' มีลักษณะเด่นคือ?",
        options: ["ก. รวมศูนย์อยู่ที่เดียว (Centralized)", "ข. กระจายศูนย์ (Decentralized) และแก้ไขข้อมูลย้อนหลังได้ยากมาก", "ค. เก็บข้อมูลเป็นความลับสุดยอด", "ง. ทำงานช้า"],
        answer: 1,
        explanation: "กระจายศูนย์ โปร่งใส และแก้ไขยาก (Immutable)"
    },
    {
        question: "183. ข้อใดคือ 'Optical Disc'?",
        options: ["ก. Hard Disk", "ข. CD / DVD / Blu-ray", "ค. Flash Drive", "ง. SSD"],
        answer: 1,
        explanation: "จานแสง (ใช้เลเซอร์อ่าน/เขียน)"
    },
    {
        question: "184. หากต้องการแคปหน้าจอวิดีโอใน Windows 10/11 (Game Bar) ใช้คีย์ลัดใด?",
        options: ["ก. Win + G", "ข. Win + P", "ค. Win + S", "ง. Win + R"],
        answer: 0,
        explanation: "Win + G เรียก Xbox Game Bar เพื่ออัดวิดีโอหน้าจอ"
    },
    {
        question: "185. 'Metaverse' หมายถึง?",
        options: ["ก. จักรวาลนฤมิต (โลกเสมือนที่ผู้คนเข้าไปมีปฏิสัมพันธ์กันได้)", "ข. โซเชียลมีเดีย", "ค. เกมออนไลน์", "ง. แว่นตา"],
        answer: 0,
        explanation: "โลกเสมือนจริงที่เชื่อมต่อกัน"
    },
    {
        question: "186. ข้อใดคือ 'Motherboard'?",
        options: ["ก. แผงวงจรหลักที่เชื่อมต่ออุปกรณ์ทุกอย่างในคอมพิวเตอร์", "ข. จอภาพ", "ค. แหล่งจ่ายไฟ", "ง. เคสคอมพิวเตอร์"],
        answer: 0,
        explanation: "เมนบอร์ด (แผงวงจรแม่)"
    },
    {
        question: "187. 'GPU' ย่อมาจาก?",
        options: ["ก. General Processing Unit", "ข. Graphics Processing Unit (หน่วยประมวลผลกราฟิก/การ์ดจอ)", "ค. Grand Power Unit", "ง. Game Play Unit"],
        answer: 1,
        explanation: "ชิปประมวลผลภาพ"
    },
    {
        question: "188. 'Boot' ในคอมพิวเตอร์หมายถึง?",
        options: ["ก. รองเท้า", "ข. การเตะ", "ค. การเริ่มต้นระบบปฏิบัติการ", "ง. การปิดเครื่อง"],
        answer: 2,
        explanation: "Booting คือกระบวนการเริ่มทำงานของระบบ"
    },
    {
        question: "189. 'Upskill / Reskill' เกี่ยวข้องกับยุคดิจิทัลอย่างไร?",
        options: ["ก. การซื้อคอมใหม่", "ข. การพัฒนาทักษะเดิมและเรียนรู้ทักษะใหม่เพื่อทันต่อเทคโนโลยี", "ค. การเล่นเกมเก่งขึ้น", "ง. การเปลี่ยนงาน"],
        answer: 1,
        explanation: "การปรับตัวของคนทำงานในยุค AI/Digital"
    },
    {
        question: "190. ข้อใดคือ 'Platform'?",
        options: ["ก. Facebook, YouTube, TikTok", "ข. จอภาพ", "ค. สายแลน", "ง. ไฟฟ้า"],
        answer: 0,
        explanation: "แพลตฟอร์มคือพื้นที่กลางที่ให้บริการ (เช่น โซเชียล, อีคอมเมิร์ซ)"
    },
    {
        question: "191. 'Cyberbullying' คือ?",
        options: ["ก. การเล่นเกม", "ข. การกลั่นแกล้ง/รังแกผ่านโลกออนไลน์", "ค. การจีบกันออนไลน์", "ง. การขายของ"],
        answer: 1,
        explanation: "การระรานทางไซเบอร์"
    },
    {
        question: "192. ไฟล์ .mp4 กับ .mp3 ต่างกันอย่างไร?",
        options: ["ก. mp4 เป็นวิดีโอ (ภาพ+เสียง), mp3 เป็นเสียงอย่างเดียว", "ข. mp4 เป็นเสียง, mp3 เป็นวิดีโอ", "ค. เหมือนกัน", "ง. mp4 เก่ากว่า"],
        answer: 0,
        explanation: "MP4 = Video, MP3 = Audio"
    },
    {
        question: "193. 'HDMI' ใช้ส่งสัญญาณอะไร?",
        options: ["ก. ภาพอย่างเดียว", "ข. เสียงอย่างเดียว", "ค. ภาพและเสียงดิจิทัลพร้อมกัน", "ง. อินเทอร์เน็ต"],
        answer: 2,
        explanation: "High-Definition Multimedia Interface ส่งทั้งภาพและเสียงคุณภาพสูง"
    },
    {
        question: "194. ข้อใดคือ 'Peripheral Device'?",
        options: ["ก. CPU", "ข. อุปกรณ์ต่อพ่วง (เช่น เมาส์, คีย์บอร์ด, ปริ้นเตอร์)", "ค. Mainboard", "ง. RAM"],
        answer: 1,
        explanation: "อุปกรณ์รอบข้างที่มาต่อพ่วงกับคอมพิวเตอร์"
    },
    {
        question: "195. การ 'Format' ไดรฟ์ จะเกิดผลอย่างไร?",
        options: ["ก. จัดระเบียบข้อมูล", "ข. ลบข้อมูลทั้งหมดในไดรฟ์นั้นและเตรียมพื้นที่ใหม่", "ค. สแกนไวรัส", "ง. กู้ข้อมูล"],
        answer: 1,
        explanation: "ล้างข้อมูลทั้งหมดเกลี้ยง"
    },
    {
        question: "196. 'Bitkub' เป็นธุรกิจเกี่ยวกับ?",
        options: ["ก. ขายคอมพิวเตอร์", "ข. แพลตฟอร์มซื้อขายสินทรัพย์ดิจิทัล (Cryptocurrency)", "ค. เกมออนไลน์", "ง. บริการขนส่ง"],
        answer: 1,
        explanation: "Exchange ซื้อขายเหรียญคริปโตสัญชาติไทย"
    },
    {
        question: "197. 'PromptPay' ใช้ผูกกับข้อมูลใดได้บ้าง?",
        options: ["ก. เลขบัตรประชาชน หรือ เบอร์โทรศัพท์มือถือ", "ข. ทะเบียนบ้าน", "ค. อีเมล", "ง. เลขใบขับขี่"],
        answer: 0,
        explanation: "บัตรประชาชน หรือ เบอร์มือถือ (บางระบบผูก E-Wallet ได้ด้วย)"
    },
    {
        question: "198. ใน Word ถ้าต้องการทำตัวอักษร 'ยก' (Superscript) เช่น X² กดปุ่มใด?",
        options: ["ก. Ctrl + =", "ข. Ctrl + Shift + +", "ค. Ctrl + B", "ง. Ctrl + U"],
        answer: 1,
        explanation: "Ctrl + Shift + + (เครื่องหมายบวก) สำหรับตัวยก, Ctrl + = สำหรับตัวห้อย"
    },
    {
        question: "199. ข้อใดคือโปรแกรม 'Database Management System'?",
        options: ["ก. MS Access, SQL Server, Oracle", "ข. MS Word, Notepad", "ค. Chrome, Edge", "ง. Photoshop, Illustrator"],
        answer: 0,
        explanation: "ระบบจัดการฐานข้อมูล"
    },
    {
        question: "200. 'PDPA' บังคับใช้เต็มรูปแบบเมื่อปีใด?",
        options: ["ก. 2562", "ข. 2563", "ค. 2564", "ง. 2565 (1 มิ.ย.)"],
        answer: 3,
        explanation: "เริ่มบังคับใช้เต็มรูปแบบ 1 มิ.ย. 2565"
    },
    {
        question: "201. 'API' ย่อมาจาก?",
        options: ["ก. Application Programming Interface", "ข. Apple Program Inc", "ค. Auto Play Interface", "ง. All People Internet"],
        answer: 0,
        explanation: "ช่องทางเชื่อมต่อระหว่างโปรแกรมให้คุยกันได้"
    },
    {
        question: "202. 'Cache' อ่านว่า?",
        options: ["ก. แคช", "ข. คาเช่", "ค. แคชเชียร์", "ง. ชาเช่"],
        answer: 0,
        explanation: "อ่านว่า 'แคช'"
    },
    {
        question: "203. 'Incognito Mode' ใน Chrome คือ?",
        options: ["ก. โหมดประหยัดเน็ต", "ข. โหมดไม่ระบุตัวตน (ไม่บันทึกประวัติการเข้าชม/คุกกี้)", "ค. โหมดกลางคืน", "ง. โหมดสำหรับเด็ก"],
        answer: 1,
        explanation: "โหมดลับ (ไม่เก็บ History)"
    },
    {
        question: "204. ข้อใดคือ 'Soft Copy'?",
        options: ["ก. เอกสารที่พิมพ์ลงกระดาษ", "ข. ข้อมูลที่แสดงบนจอภาพ หรือไฟล์ดิจิทัล", "ค. สำเนาบัตรประชาชน", "ง. แผ่นซีดี"],
        answer: 1,
        explanation: "Soft copy = ไฟล์/จอภาพ, Hard copy = กระดาษ"
    },
    {
        question: "205. หน่วยงานใดดูแลเรื่อง 'ความมั่นคงปลอดภัยไซเบอร์' ของไทย?",
        options: ["ก. สกมช. (NCSA)", "ข. กสทช.", "ค. ปอท.", "ง. ดีอีเอส"],
        answer: 0,
        explanation: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)"
    },
    {
        question: "206. ไฟล์ .mp3 เป็นไฟล์ประเภทใด?",
        options: ["ก. วิดีโอ", "ข. เสียง (Audio)", "ค. รูปภาพ", "ง. ข้อความ"],
        answer: 1,
        explanation: "ไฟล์เสียงยอดนิยม"
    },
    {
        question: "207. 'Ctrl + Y' คือคำสั่ง?",
        options: ["ก. Undo", "ข. Redo (ทำซ้ำ)", "ค. Copy", "ง. Paste"],
        answer: 1,
        explanation: "Redo (ทำซ้ำสิ่งที่เพิ่ง Undo ไป)"
    },
    {
        question: "208. 'Spam' คือ?",
        options: ["ก. ไวรัส", "ข. ขยะอิเล็กทรอนิกส์ (อีเมล/ข้อความก่อกวน)", "ค. โปรแกรมแชท", "ง. เว็บพนัน"],
        answer: 1,
        explanation: "ข้อความ/อีเมลขยะ"
    },
    {
        question: "209. 'Drag and Drop' หมายถึง?",
        options: ["ก. การคลิกขวา", "ข. การลากแล้ววาง", "ค. การดับเบิ้ลคลิก", "ง. การลบไฟล์"],
        answer: 1,
        explanation: "ลากแล้ววาง"
    },
    {
        question: "210. 'URL' ย่อมาจาก?",
        options: ["ก. Uniform Resource Locator", "ข. Universal Resource Link", "ค. United Research Lab", "ง. User Right Law"],
        answer: 0,
        explanation: "ที่อยู่ของเว็บไซต์"
    },
    {
        question: "211. 'Icon' บนหน้าจอคอมพิวเตอร์คือ?",
        options: ["ก. เมาส์", "ข. สัญลักษณ์รูปภาพแทนโปรแกรมหรือไฟล์", "ค. แถบงาน", "ง. พื้นหลัง"],
        answer: 1,
        explanation: "รูปเล็กๆ ที่ใช้แทนโปรแกรม"
    },
    {
        question: "212. ข้อใดคือ 'Protocol' ในการรับส่งอีเมล?",
        options: ["ก. SMTP / POP3 / IMAP", "ข. HTTP / FTP", "ค. TCP / IP", "ง. USB / HDMI"],
        answer: 0,
        explanation: "SMTP (ส่ง), POP3/IMAP (รับ)"
    },
    {
        question: "213. 'Cursor' คือ?",
        options: ["ก. ตัวชี้ตำแหน่งบนจอภาพ (มักเป็นลูกศรหรือขีดกะพริบ)", "ข. แป้นพิมพ์", "ค. ลำโพง", "ง. ปุ่มเปิดเครื่อง"],
        answer: 0,
        explanation: "ตัวชี้ตำแหน่ง"
    },
    {
        question: "214. ข้อใดคือ 'Search Engine'?",
        options: ["ก. Windows", "ข. Google", "ค. Word", "ง. Excel"],
        answer: 1,
        explanation: "เครื่องมือค้นหา"
    },
    {
        question: "215. 'Download' คือ?",
        options: ["ก. ส่งข้อมูลออก", "ข. รับข้อมูลจากเครือข่ายมาเก็บไว้ในเครื่อง", "ค. ลบข้อมูล", "ง. ปิดเครื่อง"],
        answer: 1,
        explanation: "นำข้อมูลลงมาเก็บ"
    },
    {
        question: "216. 'Homepage' คือ?",
        options: ["ก. บ้าน", "ข. หน้าแรกของเว็บไซต์", "ค. หน้าสุดท้าย", "ง. หน้าติดต่อเรา"],
        answer: 1,
        explanation: "หน้าแรก"
    },
    {
        question: "217. 'Login' หมายถึง?",
        options: ["ก. ลงทะเบียน", "ข. เข้าสู่ระบบ", "ค. ออกจากระบบ", "ง. ลืมรหัสผ่าน"],
        answer: 1,
        explanation: "เข้าสู่ระบบ"
    },
    {
        question: "218. 'Password' ที่ดีควรเป็นอย่างไร?",
        options: ["ก. 123456", "ข. วันเกิดตัวเอง", "ค. ผสมตัวอักษรใหญ่-เล็ก ตัวเลข และสัญลักษณ์ คาดเดายาก", "ง. ชื่อแฟน"],
        answer: 2,
        explanation: "Strong Password"
    },
    {
        question: "219. 'Backup' คือ?",
        options: ["ก. การสำรองข้อมูลเผื่อฉุกเฉิน", "ข. การกู้คืน", "ค. การลบ", "ง. การย้อนกลับ"],
        answer: 0,
        explanation: "สำรองข้อมูล"
    },
    {
        question: "220. 'Folder' มีไว้ทำอะไร?",
        options: ["ก. พิมพ์งาน", "ข. เก็บและจัดหมวดหมู่ไฟล์", "ค. วาดรูป", "ง. ฟังเพลง"],
        answer: 1,
        explanation: "เก็บไฟล์ (เหมือนแฟ้มเอกสาร)"
    },
    {
        question: "221. 'Shortcut' คือ?",
        options: ["ก. ทางลัดเข้าถึงโปรแกรม/ไฟล์", "ข. ไวรัส", "ค. การตัดต่อ", "ง. การลบถาวร"],
        answer: 0,
        explanation: "ทางลัด"
    },
    {
        question: "222. 'Desktop' คือ?",
        options: ["ก. โต๊ะทำงาน", "ข. หน้าจอหลักของ Windows ที่แสดงไอคอนและพื้นหลัง", "ค. แป้นพิมพ์", "ง. เมาส์"],
        answer: 1,
        explanation: "หน้าจอหลัก"
    },
    {
        question: "223. 'Taskbar' มักอยู่ตรงไหนของจอ?",
        options: ["ก. ด้านบน", "ข. ด้านล่าง (โดยค่าเริ่มต้น)", "ค. ตรงกลาง", "ง. ซ่อนอยู่"],
        answer: 1,
        explanation: "แถบงานด้านล่าง"
    },
    {
        question: "224. 'Reboot / Restart' คือ?",
        options: ["ก. ปิดเครื่องถาวร", "ข. เริ่มต้นระบบใหม่ (ปิดแล้วเปิดเอง)", "ค. ซื้อเครื่องใหม่", "ง. ลงวินโดวส์ใหม่"],
        answer: 1,
        explanation: "เริ่มระบบใหม่"
    },
    {
        question: "225. 'User Interface (UI)' คือ?",
        options: ["ก. ส่วนที่ผู้ใช้มองเห็นและโต้ตอบด้วย (หน้าตาโปรแกรม)", "ข. ไส้ในเครื่อง", "ค. สายไฟ", "ง. ผู้ดูแลระบบ"],
        answer: 0,
        explanation: "ส่วนติดต่อผู้ใช้"
    },
        // --- ชุดที่ 4: เก็บตกเนื้อหาตามตำรา & เทคโนโลยีเจาะลึก (ข้อ 226-300) ---
    {
        question: "226. คอมพิวเตอร์ยุคที่ 1 (1st Generation) ใช้อุปกรณ์ใดเป็นหลัก?",
        options: ["ก. ทรานซิสเตอร์", "ข. หลอดสุญญากาศ (Vacuum Tube)", "ค. แผงวงจรรวม (IC)", "ง. ไมโครโปรเซสเซอร์"],
        answer: 1,
        explanation: "ยุคที่ 1 ใช้หลอดสุญญากาศ มีขนาดใหญ่ ร้อนจัด และกินไฟมาก (ตามเอกสารหน้า 1)"
    },
    {
        question: "227. การเปลี่ยนจากหลอดสุญญากาศมาใช้ 'ทรานซิสเตอร์' (Transistor) เกิดขึ้นในคอมพิวเตอร์ยุคใด?",
        options: ["ก. ยุคที่ 1", "ข. ยุคที่ 2", "ค. ยุคที่ 3", "ง. ยุคที่ 4"],
        answer: 1,
        explanation: "ยุคที่ 2 ใช้ทรานซิสเตอร์ ทำให้เครื่องเล็กลงและร้อนน้อยลง"
    },
    {
        question: "228. วงจรรวม (Integrated Circuit: IC) เริ่มใช้ในคอมพิวเตอร์ยุคใด?",
        options: ["ก. ยุคที่ 2", "ข. ยุคที่ 3", "ค. ยุคที่ 4", "ง. ยุคที่ 5"],
        answer: 1,
        explanation: "ยุคที่ 3 ใช้วงจร IC (ชิป) ทำให้การทำงานรวดเร็วขึ้นมาก"
    },
    {
        question: "229. คอมพิวเตอร์ในปัจจุบันที่ใช้ Microprocessor (VLSI) จัดอยู่ในยุคใด?",
        options: ["ก. ยุคที่ 3", "ข. ยุคที่ 4", "ค. ยุคที่ 5", "ง. ยุคที่ 6"],
        answer: 1,
        explanation: "ยุคที่ 4 ใช้ไมโครโปรเซสเซอร์ (CPU) ซึ่งเป็นการรวมวงจรจำนวนมหาศาลไว้ในชิปเดียว"
    },
    {
        question: "230. เป้าหมายของคอมพิวเตอร์ 'ยุคที่ 5' คือเน้นพัฒนาด้านใด?",
        options: ["ก. ความทนทาน", "ข. ปัญญาประดิษฐ์ (AI) และการเลียนแบบมนุษย์", "ค. ราคาถูก", "ง. ขนาดเล็กที่สุด"],
        answer: 1,
        explanation: "ยุคที่ 5 เน้นพัฒนา AI (Artificial Intelligence) ให้คอมพิวเตอร์คิดและตัดสินใจได้เหมือนมนุษย์"
    },
    {
        question: "231. คอมพิวเตอร์ประเภทใดมีประสิทธิภาพสูงสุด เหมาะสำหรับงานคำนวณซับซ้อน เช่น พยากรณ์อากาศ?",
        options: ["ก. Mainframe Computer", "ข. Supercomputer", "ค. Workstation", "ง. Microcomputer"],
        answer: 1,
        explanation: "Supercomputer คือเครื่องที่เร็วและแรงที่สุด ใช้ในงานวิจัยระดับสูง"
    },
    {
        question: "232. คอมพิวเตอร์ที่ใช้ในองค์กรขนาดใหญ่ เช่น ธนาคาร สายการบิน เพื่อรองรับผู้ใช้จำนวนมากพร้อมกัน คือ?",
        options: ["ก. Supercomputer", "ข. Mainframe Computer", "ค. Mini Computer", "ง. Personal Computer"],
        answer: 1,
        explanation: "Mainframe Computer ออกแบบมาเพื่อรองรับ Transaction จำนวนมหาศาลและความเสถียรสูง"
    },
    {
        question: "233. ระบบ 'Embedded System' (สมองกลฝังตัว) มักพบในอุปกรณ์ใด?",
        options: ["ก. เครื่องซักผ้าอัตโนมัติ / ตู้เย็นอัจฉริยะ", "ข. Server", "ค. Notebook", "ง. Flash Drive"],
        answer: 0,
        explanation: "Embedded System คือคอมพิวเตอร์ขนาดเล็กที่ฝังอยู่ในอุปกรณ์เครื่องใช้เพื่อควบคุมการทำงานเฉพาะด้าน"
    },
    {
        question: "234. เลขฐานสอง (Binary) ประกอบด้วยตัวเลขใดบ้าง?",
        options: ["ก. 1 และ 2", "ข. 0 และ 1", "ค. 0 ถึง 9", "ง. 0 ถึง F"],
        answer: 1,
        explanation: "เลขฐานสองมีแค่ 0 และ 1 ซึ่งเป็นภาษาพื้นฐานของคอมพิวเตอร์"
    },
    {
        question: "235. ในระบบเลขฐานสิบหก (Hexadecimal) ตัวอักษร 'A' มีค่าเท่ากับเท่าไรในฐานสิบ?",
        options: ["ก. 10", "ข. 11", "ค. 12", "ง. 15"],
        answer: 0,
        explanation: "0-9 มีค่าตามตัวเลข, A=10, B=11, C=12, D=13, E=14, F=15"
    },
    {
        question: "236. รหัส 'ASCII' ใช้พื้นที่เก็บข้อมูลกี่บิตต่อ 1 ตัวอักษร (มาตรฐานเดิม)?",
        options: ["ก. 8 บิต (1 ไบต์)", "ข. 16 บิต", "ค. 32 บิต", "ง. 4 บิต"],
        answer: 0,
        explanation: "ASCII ใช้ 8 บิต (แทนค่าได้ 256 ตัวอักษร)"
    },
    {
        question: "237. 'Unicode' ถูกพัฒนาขึ้นเพื่อแก้ปัญหาใดของ ASCII?",
        options: ["ก. ความเร็ว", "ข. การรองรับภาษาต่างๆ ทั่วโลก (เช่น ภาษาไทย, จีน)", "ค. ขนาดไฟล์", "ง. การประหยัดไฟ"],
        answer: 1,
        explanation: "Unicode ใช้บิตเยอะกว่า (16/32 บิต) เพื่อให้รองรับตัวอักษรได้ทุกภาษาในโลก"
    },
    {
        question: "238. ในผังงาน (Flowchart) สัญลักษณ์ 'สี่เหลี่ยมขนมเปียกปูน' (Diamond) หมายถึงอะไร?",
        options: ["ก. จุดเริ่มต้น/สิ้นสุด", "ข. การประมวลผล (Process)", "ค. การตัดสินใจ/ตรวจสอบเงื่อนไข (Decision)", "ง. การรับค่า/แสดงผล"],
        answer: 2,
        explanation: "สี่เหลี่ยมขนมเปียกปูน = การตัดสินใจ (ทางเลือก Yes/No)"
    },
    {
        question: "239. สัญลักษณ์ 'สี่เหลี่ยมผืนผ้า' ใน Flowchart หมายถึง?",
        options: ["ก. การปฏิบัติงาน / การประมวลผล (Process)", "ข. รับข้อมูล", "ค. แสดงผล", "ง. ทิศทาง"],
        answer: 0,
        explanation: "สี่เหลี่ยมผืนผ้า = Process (การคำนวณ หรือ กำหนดค่า)"
    },
    {
        question: "240. ลำดับหน่วยข้อมูลจากเล็กไปใหญ่ ข้อใดถูกต้อง?",
        options: ["ก. Bit > Byte > Field > Record > File > Database", "ข. Byte > Bit > Record > Field > File", "ค. File > Database > Bit > Byte", "ง. Record > File > Database > Bit"],
        answer: 0,
        explanation: "บิต(เล็กสุด) -> ไบต์(ตัวอักษร) -> เขตข้อมูล(คำ) -> ระเบียน(บรรทัด) -> แฟ้ม -> ฐานข้อมูล"
    },
    {
        question: "241. 'Blockchain' มีลักษณะเด่นคืออะไร?",
        options: ["ก. มีคนกลางคอยตรวจสอบ", "ข. ข้อมูลถูกเก็บแบบกระจายศูนย์ (Decentralized) และแก้ไขยาก", "ค. ข้อมูลเป็นความลับไม่มีใครเห็น", "ง. ใช้กับธนาคารเท่านั้น"],
        answer: 1,
        explanation: "Blockchain ไม่ต้องอาศัยคนกลาง ข้อมูลแชร์ให้ทุกคนในเครือข่ายถือสำเนา (Distributed Ledger) ทำให้แก้ไขยากและน่าเชื่อถือ (ตามเอกสารหน้า 6)"
    },
    {
        question: "242. 'Smart Contract' คืออะไร?",
        options: ["ก. สัญญาจ้างงาน", "ข. สัญญาอัจฉริยะที่ทำงานอัตโนมัติตามเงื่อนไขที่เขียนโค้ดไว้ (บน Blockchain)", "ค. สัญญาซื้อขายรถ", "ง. กฎหมายดิจิทัล"],
        answer: 1,
        explanation: "โปรแกรมที่รันบน Blockchain เพื่อทำตามข้อตกลงอัตโนมัติเมื่อเงื่อนไขครบถ้วน"
    },
    {
        question: "243. ข้อใดคือตัวอย่างของ 'AI ที่กระทำอย่างมีเหตุผล' (Systems that act rationally)?",
        options: ["ก. เครื่องคิดเลข", "ข. หุ่นยนต์/Chatbot ที่ทำงานโต้ตอบและตัดสินใจเองได้เพื่อให้บรรลุเป้าหมาย", "ค. โปรแกรม Word", "ง. ฮาร์ดดิสก์"],
        answer: 1,
        explanation: "ระบบที่แสดงพฤติกรรมหรือกระทำอย่างมีเหตุผลเพื่อให้บรรลุเป้าหมาย (Agent) เช่น Chatbot, Siri (ตามเอกสารหน้า 6)"
    },
    {
        question: "244. 'Chatbot' จัดเป็นเทคโนโลยีด้านใด?",
        options: ["ก. Hardware", "ข. Network", "ค. AI (การประมวลผลภาษาธรรมชาติ)", "ง. Graphic"],
        answer: 2,
        explanation: "Chatbot ใช้ AI เพื่อเข้าใจและโต้ตอบภาษามนุษย์"
    },
    {
        question: "245. การเชื่อมต่อเครือข่ายแบบใด ที่คอมพิวเตอร์ทุกเครื่องเชื่อมต่อกับ 'สายสื่อสารหลักเพียงเส้นเดียว'?",
        options: ["ก. แบบดาว (Star)", "ข. แบบบัส (Bus)", "ค. แบบวงแหวน (Ring)", "ง. แบบผสม (Hybrid)"],
        answer: 1,
        explanation: "Bus Topology ใช้สายแกนหลักเส้นเดียว (Backbone) ถ้าสายขาดระบบล่มหมด"
    },
    {
        question: "246. การเชื่อมต่อแบบใด ที่ต้องมีอุปกรณ์ตรงกลาง (Hub/Switch)?",
        options: ["ก. แบบดาว (Star)", "ข. แบบบัส (Bus)", "ค. แบบวงแหวน (Ring)", "ง. แบบเมช (Mesh)"],
        answer: 0,
        explanation: "Star Topology ทุกเครื่องต้องต่อเข้าหาจุดศูนย์กลาง (Hub/Switch) นิยมใช้มากที่สุดในปัจจุบัน"
    },
    {
        question: "247. สาย UTP (สายแลน) หัวต่อมาตรฐานเรียกว่าอะไร?",
        options: ["ก. RJ-11", "ข. RJ-45", "ค. USB", "ง. HDMI"],
        answer: 1,
        explanation: "RJ-45 (ส่วน RJ-11 คือหัวสายโทรศัพท์)"
    },
    {
        question: "248. ข้อใดคือ 'โดเมนเนม' ของหน่วยงานราชการไทย?",
        options: ["ก. .co.th", "ข. .ac.th", "ค. .go.th", "ง. .or.th"],
        answer: 2,
        explanation: ".go.th = Government (รัฐบาล) / .co.th = บริษัท / .ac.th = สถานศึกษา / .or.th = องค์กรไม่แสวงกำไร"
    },
    {
        question: "249. ข้อใดคือ 'IP Address' ที่ถูกต้อง?",
        options: ["ก. 192.168.1", "ข. 192.168.1.1", "ค. 192.168.1.1.1", "ง. 999.999.999.999"],
        answer: 1,
        explanation: "IPv4 มีตัวเลข 4 ชุด คั่นด้วยจุด แต่ละชุดค่าไม่เกิน 255"
    },
    {
        question: "250. 'DNS' (Domain Name System) ทำหน้าที่เปรียบเสมือนอะไร?",
        options: ["ก. ตำรวจจราจร", "ข. สมุดโทรศัพท์ (แปลงชื่อเว็บเป็นเบอร์ IP)", "ค. บุรุษไปรษณีย์", "ง. ยามเฝ้าประตู"],
        answer: 1,
        explanation: "DNS แปลงชื่อโดเมน (เช่น google.com) เป็น IP Address เพื่อให้คอมพิวเตอร์ติดต่อกันได้"
    },
    {
        question: "251. ซอฟต์แวร์ประเภท 'Shareware' คืออะไร?",
        options: ["ก. ใช้ฟรีตลอดไป", "ข. ให้ทดลองใช้ฟรีระยะหนึ่ง ถ้าพอใจต้องเสียเงินซื้อ", "ค. แจกโค้ดให้ไปแก้ได้", "ง. ซอฟต์แวร์ผิดกฎหมาย"],
        answer: 1,
        explanation: "Shareware = ทดลองใช้ (Trial) ก่อนซื้อจริง"
    },
    {
        question: "252. ข้อใดเป็น 'Open Source Software' (โอเพนซอร์ส)?",
        options: ["ก. Microsoft Office", "ข. Adobe Photoshop", "ค. Linux / VLC Player", "ง. iOS"],
        answer: 2,
        explanation: "Open Source เปิดเผยโค้ดให้คนนำไปพัฒนาต่อได้และมักจะฟรี (เช่น Linux, Android, VLC)"
    },
    {
        question: "253. 'Defragmenter' เป็นโปรแกรมประเภทใด?",
        options: ["ก. Application Software", "ข. Utility Program (โปรแกรมอรรถประโยชน์)", "ค. Translation Program", "ง. OS"],
        answer: 1,
        explanation: "Utility Program ช่วยดูแลรักษาเครื่อง (เช่น จัดเรียงข้อมูล, สแกนดิสก์)"
    },
    {
        question: "254. นามสกุลไฟล์ '.pptx' คือไฟล์ของโปรแกรมใด?",
        options: ["ก. Word", "ข. Excel", "ค. PowerPoint", "ง. Photoshop"],
        answer: 2,
        explanation: "PowerPoint (เวอร์ชันใหม่)"
    },
    {
        question: "255. นามสกุลไฟล์ '.xlsx' คือไฟล์ของโปรแกรมใด?",
        options: ["ก. Word", "ข. Excel", "ค. Access", "ง. Notepad"],
        answer: 1,
        explanation: "Excel Worksheet"
    },
    {
        question: "256. ปุ่มคีย์ลัด 'Ctrl + A' ใช้ทำอะไร?",
        options: ["ก. บันทึก", "ข. เลือกทั้งหมด (Select All)", "ค. ค้นหา", "ง. พิมพ์"],
        answer: 1,
        explanation: "Select All (เลือกทุกอย่างในหน้า)"
    },
    {
        question: "257. ปุ่มคีย์ลัด 'Ctrl + P' ใช้ทำอะไร?",
        options: ["ก. วาง (Paste)", "ข. สั่งพิมพ์ (Print)", "ค. เล่นเพลง (Play)", "ง. รูปภาพ (Picture)"],
        answer: 1,
        explanation: "Print (สั่งปริ้นท์งาน)"
    },
    {
        question: "258. หากต้องการ 'ตัด' (Cut) ข้อความ ต้องกดปุ่มใด?",
        options: ["ก. Ctrl + C", "ข. Ctrl + X", "ค. Ctrl + V", "ง. Ctrl + Z"],
        answer: 1,
        explanation: "Ctrl + X = ตัด (กรรไกร), Ctrl + C = ก๊อปปี้"
    },
    {
        question: "259. ข้อใดคือภัยคุกคามแบบ 'Phishing'?",
        options: ["ก. ไวรัสทำลายเครื่อง", "ข. การสร้างหน้าเว็บหรืออีเมลปลอมเพื่อหลอกให้กรอกข้อมูลส่วนตัว", "ค. การดักฟังข้อมูล", "ง. การยิงถล่มเซิร์ฟเวอร์"],
        answer: 1,
        explanation: "Phishing (ตกปลา) คือการหลอกล่อให้เหยื่อติดเบ็ดและให้ข้อมูลสำคัญไปเอง"
    },
    {
        question: "260. 'Ransomware' คืออะไร?",
        options: ["ก. โปรแกรมกู้ข้อมูล", "ข. มัลแวร์เรียกค่าไถ่ (ล็อกไฟล์แล้วเรียกเงิน)", "ค. โปรแกรมแชท", "ง. ฮาร์ดดิสก์พกพา"],
        answer: 1,
        explanation: "Ransomware ทำการเข้ารหัสไฟล์ในเครื่องเรา แล้วเรียกเงินค่าไถ่เพื่อปลดล็อก"
    },
    {
        question: "261. พ.ร.บ. คอมพิวเตอร์ฯ: การ 'กด Like / Share' ข้อมูลเท็จ มีความผิดหรือไม่?",
        options: ["ก. ไม่ผิดเลย", "ข. ผิด ถ้าการแชร์นั้นส่งผลกระทบต่อผู้อื่นหรือความมั่นคง", "ค. ผิดเฉพาะคนโพสต์", "ง. เป็นสิทธิส่วนบุคคล"],
        answer: 1,
        explanation: "การเผยแพร่หรือส่งต่อ (Share) ข้อมูลที่รู้อยู่แล้วว่าเป็นเท็จ/ผิดกฎหมาย ถือเป็นความผิดด้วย"
    },
    {
        question: "262. ข้อใดคือหน่วยความจำที่ 'ทำงานเร็วที่สุด' ในระบบคอมพิวเตอร์?",
        options: ["ก. Hard Disk", "ข. RAM", "ค. Cache", "ง. Register (ใน CPU)"],
        answer: 3,
        explanation: "Register (รีจิสเตอร์) อยู่ใน CPU เร็วที่สุด รองลงมาคือ Cache, RAM, และ Storage"
    },
    {
        question: "263. ระบบเลขฐานแปด (Octal) มีตัวเลขกี่ตัว?",
        options: ["ก. 0-7 (8 ตัว)", "ข. 0-8 (9 ตัว)", "ค. 1-8 (8 ตัว)", "ง. 0-9"],
        answer: 0,
        explanation: "ฐานแปด มีเลขโดด 0, 1, 2, 3, 4, 5, 6, 7"
    },
    {
        question: "264. (101) ฐาน 2 มีค่าเท่ากับเท่าไรในฐาน 10?",
        options: ["ก. 3", "ข. 4", "ค. 5", "ง. 6"],
        answer: 2,
        explanation: "(1x4) + (0x2) + (1x1) = 4 + 0 + 1 = 5"
    },
    {
        question: "265. ข้อใดคือ 'Search Engine' ทั้งหมด?",
        options: ["ก. Google, Bing, Yahoo", "ข. Facebook, Twitter, Instagram", "ค. Chrome, Edge, Safari", "ง. Windows, MacOS, Linux"],
        answer: 0,
        explanation: "ก. คือเว็บค้นหาข้อมูล (ค. คือ Web Browser, ข. คือ Social Media)"
    },
    {
        question: "266. 'Cloud Computing' ประเภท SaaS ยกตัวอย่างเช่น?",
        options: ["ก. Google Drive, Gmail", "ข. การเช่าเซิร์ฟเวอร์", "ค. การเขียนโปรแกรม", "ง. การซ่อมคอม"],
        answer: 0,
        explanation: "SaaS (Software as a Service) คือการใช้โปรแกรมผ่านเน็ต เช่น Gmail, Google Docs"
    },
    {
        question: "267. การกดปุ่ม 'Print Screen' บนคีย์บอร์ด คือการทำอะไร?",
        options: ["ก. สั่งพิมพ์ออกกระดาษ", "ข. บันทึกภาพหน้าจอเก็บไว้ในคลิปบอร์ด (Capture)", "ค. ปิดหน้าจอ", "ง. ปรับแสงหน้าจอ"],
        answer: 1,
        explanation: "Capture หน้าจอ (ต้องไปกด Paste ในโปรแกรมอื่นถึงจะเห็นภาพ)"
    },
    {
        question: "268. ไฟล์นามสกุล '.zip' หรือ '.rar' คือไฟล์ประเภทใด?",
        options: ["ก. ไฟล์รูปภาพ", "ข. ไฟล์บีบอัดข้อมูล (Compressed)", "ค. ไฟล์เพลง", "ง. ไวรัส"],
        answer: 1,
        explanation: "ไฟล์บีบอัด เพื่อลดขนาดและรวมหลายไฟล์เป็นไฟล์เดียว"
    },
    {
        question: "269. 'Recycle Bin' มีหน้าที่อะไร?",
        options: ["ก. เก็บไฟล์ที่ถูกลบชั่วคราว (กู้คืนได้)", "ข. เก็บขยะไวรัส", "ค. ลบไฟล์ถาวรทันที", "ง. เก็บไฟล์ระบบ"],
        answer: 0,
        explanation: "ถังขยะ พักไฟล์ที่ลบไว้ ถ้ายังไม่ Empty ก็กู้คืนได้"
    },
    {
        question: "270. ข้อใดคือความหมายของ 'IoT' (Internet of Things)?",
        options: ["ก. อินเทอร์เน็ตความเร็วสูง", "ข. การทำให้อุปกรณ์ต่างๆ เชื่อมต่อและสื่อสารกันได้ผ่านอินเทอร์เน็ต", "ค. เว็บไซต์ขายของ", "ง. โลกเสมือนจริง"],
        answer: 1,
        explanation: "Internet of Things = สรรพสิ่งเชื่อมอินเทอร์เน็ต (เช่น ตู้เย็นสั่งของเองได้, หลอดไฟสั่งผ่านมือถือ)"
    },
    {
        question: "271. ข้อใดเป็น 'Web Browser'?",
        options: ["ก. Google Chrome", "ข. Google.com", "ค. Windows", "ง. HTML"],
        answer: 0,
        explanation: "Browser คือโปรแกรมเปิดเว็บ (Chrome, Edge, Firefox)"
    },
    {
        question: "272. 'HTML' คืออะไร?",
        options: ["ก. ภาษาที่ใช้สร้างหน้าเว็บ (HyperText Markup Language)", "ข. โปรแกรมแชท", "ค. ชื่อรุ่นคอมพิวเตอร์", "ง. ระบบปฏิบัติการ"],
        answer: 0,
        explanation: "ภาษาพื้นฐานในการเขียนหน้าเว็บไซต์"
    },
    {
        question: "273. หน่วยความจำ 'RAM' ย่อมาจาก?",
        options: ["ก. Read Access Memory", "ข. Random Access Memory", "ค. Run All Memory", "ง. Read And Memorize"],
        answer: 1,
        explanation: "Random Access Memory (หน่วยความจำเข้าถึงโดยสุ่ม)"
    },
    {
        question: "274. 'ROM' ย่อมาจาก?",
        options: ["ก. Read Only Memory", "ข. Run On Memory", "ค. Random Only Memory", "ง. Real Only Memory"],
        answer: 0,
        explanation: "Read Only Memory (อ่านได้อย่างเดียว แก้ไขไม่ได้ง่ายๆ)"
    },
    {
        question: "275. อุปกรณ์ใดทำหน้าที่ 'สำรองไฟ' เมื่อไฟดับ?",
        options: ["ก. PSU (Power Supply)", "ข. UPS (Uninterruptible Power Supply)", "ค. CPU", "ง. USB"],
        answer: 1,
        explanation: "UPS (เครื่องสำรองไฟ)"
    },
    {
        question: "276. ข้อใดคือ 'Impact Printer' (เครื่องพิมพ์แบบกระแทก)?",
        options: ["ก. Laser Printer", "ข. Inkjet Printer", "ค. Dot Matrix Printer", "ง. Thermal Printer"],
        answer: 2,
        explanation: "Dot Matrix (หัวเข็ม) ใช้เข็มกระแทกผ้าหมึก (เสียงดัง, พิมพ์สำเนาได้)"
    },
    {
        question: "277. การเชื่อมต่อเมาส์/คีย์บอร์ดไร้สาย นิยมใช้สัญญาณใด?",
        options: ["ก. Bluetooth หรือ คลื่นวิทยุ (2.4 GHz)", "ข. Infrared", "ค. Microwave", "ง. Satellite"],
        answer: 0,
        explanation: "Bluetooth หรือ Wireless 2.4 GHz"
    },
    {
        question: "278. ข้อใดคือ 'OS' ของเครื่อง Mac?",
        options: ["ก. Windows", "ข. macOS", "ค. Android", "ง. Linux"],
        answer: 1,
        explanation: "macOS"
    },
    {
        question: "279. แป้นคีย์บอร์ด F1-F12 เรียกว่าอะไร?",
        options: ["ก. Arrow Keys", "ข. Function Keys", "ค. Numeric Keys", "ง. Special Keys"],
        answer: 1,
        explanation: "Function Keys (ปุ่มฟังก์ชัน)"
    },
    {
        question: "280. หากต้องการ 'บันทึกงาน' (Save) ใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + S", "ข. Ctrl + O", "ค. Ctrl + N", "ง. Ctrl + P"],
        answer: 0,
        explanation: "Ctrl + S (Save)"
    },
    {
        question: "281. 'Undo' (ยกเลิกคำสั่งล่าสุด) ใช้คีย์ลัดใด?",
        options: ["ก. Ctrl + Z", "ข. Ctrl + Y", "ค. Ctrl + U", "ง. Ctrl + D"],
        answer: 0,
        explanation: "Ctrl + Z"
    },
    {
        question: "282. 'ISP' ย่อมาจากอะไร?",
        options: ["ก. Internet Service Provider (ผู้ให้บริการอินเทอร์เน็ต)", "ข. Internet Speed Protocol", "ค. International Server Provider", "ง. Internal System Program"],
        answer: 0,
        explanation: "ผู้ให้บริการเน็ต เช่น True, AIS, 3BB"
    },
    {
        question: "283. ข้อใดคือ 'Social Media'?",
        options: ["ก. Wikipedia", "ข. Facebook", "ค. Lazada", "ง. Netflix"],
        answer: 1,
        explanation: "Facebook, Twitter, IG"
    },
    {
        question: "284. 'E-Commerce' หมายถึง?",
        options: ["ก. การเรียนออนไลน์", "ข. การพาณิชย์อิเล็กทรอนิกส์ (ซื้อขายของออนไลน์)", "ค. จดหมายอิเล็กทรอนิกส์", "ง. รัฐบาลอิเล็กทรอนิกส์"],
        answer: 1,
        explanation: "Electronic Commerce"
    },
    {
        question: "285. การทำธุรกรรมการเงินผ่านมือถือ เรียกว่า?",
        options: ["ก. Mobile Banking", "ข. E-Learning", "ค. E-Book", "ง. Telemedicine"],
        answer: 0,
        explanation: "Mobile Banking"
    },
    {
        question: "286. ข้อใดคือ 'Cybercrime'?",
        options: ["ก. การซ่อมคอม", "ข. อาชญากรรมทางคอมพิวเตอร์", "ค. การเล่นเกม", "ง. การเรียนเขียนโปรแกรม"],
        answer: 1,
        explanation: "อาชญากรรมไซเบอร์"
    },
    {
        question: "287. พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล เรียกว่า?",
        options: ["ก. PDPA", "ข. GDPR (ของยุโรป)", "ค. FDA", "ง. ISO"],
        answer: 0,
        explanation: "PDPA (Personal Data Protection Act)"
    },
    {
        question: "288. ข้อมูลส่วนบุคคล (Personal Data) ตาม PDPA ได้แก่อะไรบ้าง?",
        options: ["ก. ชื่อ-นามสกุล", "ข. เบอร์โทรศัพท์", "ค. รูปถ่ายที่เห็นหน้าชัดเจน", "ง. ถูกทุกข้อ"],
        answer: 3,
        explanation: "ข้อมูลที่ระบุตัวตนได้ ทั้งทางตรงและทางอ้อม"
    },
    {
        question: "289. 'Firewall' มีหน้าที่อะไร?",
        options: ["ก. ดับไฟในคอม", "ข. ป้องกันการบุกรุกจากเครือข่ายภายนอก (กรองข้อมูลเข้า-ออก)", "ค. ฆ่าไวรัส", "ง. เพิ่มความเร็วเน็ต"],
        answer: 1,
        explanation: "กำแพงป้องกันเครือข่าย (Network Security)"
    },
    {
        question: "290. 'Antivirus' คืออะไร?",
        options: ["ก. โปรแกรมสร้างไวรัส", "ข. โปรแกรมป้องกันและกำจัดไวรัส", "ค. อุปกรณ์ฮาร์ดแวร์", "ง. ระบบปฏิบัติการ"],
        answer: 1,
        explanation: "โปรแกรมสแกนไวรัส"
    },
    {
        question: "291. การ 'Backup' ข้อมูลที่ดีควรทำอย่างไร?",
        options: ["ก. เก็บไว้ในเครื่องเดิมไดรฟ์ C", "ข. เก็บไว้หลายที่ (เช่น Cloud + External Drive) (หลักการ 3-2-1)", "ค. ไม่ต้องเก็บ", "ง. ปริ้นท์ออกมาให้หมด"],
        answer: 1,
        explanation: "ควรเก็บสำรองไว้คนละที่กับต้นฉบับ"
    },
    {
        question: "292. อาการ 'Blue Screen of Death' (จอฟ้า) เกิดจากอะไร?",
        options: ["ก. จอเสีย", "ข. ระบบปฏิบัติการ Windows เกิดข้อผิดพลาดร้ายแรง", "ค. ไวรัสเรียกค่าไถ่", "ง. เน็ตหลุด"],
        answer: 1,
        explanation: "System Crash ของ Windows"
    },
    {
        question: "293. หากเมาส์ค้าง โปรแกรมค้าง ควรทำอย่างไรเบื้องต้น?",
        options: ["ก. ดึงปลั๊กออกทันที", "ข. กด Ctrl + Alt + Delete เพื่อเรียก Task Manager มาปิดโปรแกรม", "ค. ทุบเครื่อง", "ง. รอไปเรื่อยๆ"],
        answer: 1,
        explanation: "End Task ใน Task Manager"
    },
    {
        question: "294. หน่วยวัดความเร็วของ CPU คือ?",
        options: ["ก. GB (Gigabyte)", "ข. Hz (Hertz) / GHz", "ค. bps", "ง. dpi"],
        answer: 1,
        explanation: "Hertz (รอบต่อวินาที) ปัจจุบันเป็น GHz"
    },
    {
        question: "295. 'Motherboard' เรียกอีกชื่อว่า?",
        options: ["ก. Mainboard", "ข. Keyboard", "ค. Blackboard", "ง. Cardboard"],
        answer: 0,
        explanation: "เมนบอร์ด"
    },
    {
        question: "296. พอร์ตใดใช้เสียบ Flash Drive?",
        options: ["ก. VGA", "ข. USB", "ค. LAN", "ง. Audio"],
        answer: 1,
        explanation: "USB (Universal Serial Bus)"
    },
    {
        question: "297. 'Resolution' ของหน้าจอ หมายถึง?",
        options: ["ก. ความสว่าง", "ข. ความละเอียด (จำนวนพิกเซล เช่น 1920x1080)", "ค. ขนาดนิ้ว", "ง. ยี่ห้อ"],
        answer: 1,
        explanation: "ความละเอียดจอภาพ"
    },
    {
        question: "298. 'Pixel' คืออะไร?",
        options: ["ก. จุดภาพเล็กๆ ที่เรียงตัวกันเป็นภาพ", "ข. โปรแกรมแต่งรูป", "ค. กล้องถ่ายรูป", "ง. หน่วยความจำ"],
        answer: 0,
        explanation: "Picture Element (จุดภาพ)"
    },
    {
        question: "299. เทคโนโลยี 5G ดีกว่า 4G อย่างไร?",
        options: ["ก. เร็วกว่า, ความหน่วงต่ำ (Low Latency), รองรับอุปกรณ์ได้มากกว่า", "ข. ช้ากว่า", "ค. เหมือนกัน", "ง. กินไฟน้อยกว่า"],
        answer: 0,
        explanation: "Speed, Latency, Capacity ดีขึ้นมาก"
    },
    {
        question: "300. 'Digital Footprint' คือ?",
        options: ["ก. รอยเท้าดิจิทัล (ร่องรอยการใช้งานบนอินเทอร์เน็ตที่ทิ้งไว้)", "ข. การสแกนเท้าเข้างาน", "ค. รองเท้าอัจฉริยะ", "ง. การเดินป่า"],
        answer: 0,
        explanation: "ร่องรอยที่เราทิ้งไว้บนโลกออนไลน์ (ประวัติการค้นหา, โพสต์, คอมเมนต์)"
    },
        // --- ชุดที่ 5 (แก้ไขเลขข้อ): เจาะลึก Flowchart/Network/Printer/Domain (ข้อ 325-425) ---
    
    // --- หมวด 1: ผังงานและขั้นตอนวิธี (Flowchart & Algorithm) ---
    {
        question: "325. สัญลักษณ์ 'สี่เหลี่ยมผืนผ้า' (Rectangle) ในผังงาน หมายถึงอะไร?",
        options: ["ก. การตัดสินใจ", "ข. การประมวลผล (Process) หรือการคำนวณ", "ค. การรับข้อมูล", "ง. จุดเริ่มต้น"],
        answer: 1,
        explanation: "สี่เหลี่ยมผืนผ้า = การปฏิบัติงาน, การประมวลผล, หรือการกำหนดค่า (Assignment)"
    },
    {
        question: "326. สัญลักษณ์ 'รูปสี่เหลี่ยมขนมเปียกปูน' (Diamond) ใช้เมื่อใด?",
        options: ["ก. เมื่อต้องการจบการทำงาน", "ข. เมื่อมีการตัดสินใจ (Decision) เพื่อเลือกทำตามเงื่อนไข", "ค. เมื่อต้องการแสดงผลออกทางหน้าจอ", "ง. เมื่อต้องการเชื่อมต่อจุด"],
        answer: 1,
        explanation: "ใช้ตรวจสอบเงื่อนไข (Decision) ซึ่งจะมีทางออก 2 ทางเสมอ (เช่น จริง/เท็จ)"
    },
    {
        question: "327. สัญลักษณ์ใดใช้แสดง 'จุดเริ่มต้น' และ 'จุดสิ้นสุด' (Start/End) ของผังงาน?",
        options: ["ก. วงกลม", "ข. สี่เหลี่ยมผืนผ้า", "ค. สี่เหลี่ยมด้านขนาน", "ง. รูปแคปซูล (Terminal/Oval)"],
        answer: 3,
        explanation: "รูปแคปซูลมนๆ (Terminal) ใช้ระบุจุดเริ่มต้นและสิ้นสุดของผังงาน"
    },
    {
        question: "328. สัญลักษณ์ 'สี่เหลี่ยมด้านขนาน' (Parallelogram) หมายถึงอะไร?",
        options: ["ก. การรับข้อมูลหรือแสดงผลข้อมูล (Input/Output)", "ข. การเก็บข้อมูล", "ค. การคำนวณ", "ง. ทิศทาง"],
        answer: 0,
        explanation: "General Input/Output (รับค่าหรือแสดงผลโดยไม่ระบุอุปกรณ์)"
    },
    {
        question: "329. สัญลักษณ์ 'วงกลม' (Circle) ในผังงานใช้ทำอะไร?",
        options: ["ก. เริ่มต้น", "ข. จุดเชื่อมต่อ (Connector) ภายในหน้าเดียวกัน", "ค. รับข้อมูลทางแป้นพิมพ์", "ง. แสดงผลทางเครื่องพิมพ์"],
        answer: 1,
        explanation: "Connector ใช้เชื่อมจุดต่างๆ ในหน้ากระดาษเดียวกันเพื่อให้ดูง่ายขึ้น"
    },
    {
        question: "330. สัญลักษณ์ 'รูปสี่เหลี่ยมด้านไม่เท่า' (คล้ายรูปเอกสารฉีก) หมายถึงอะไร?",
        options: ["ก. แสดงผลทางจอภาพ", "ข. แสดงผลทางเครื่องพิมพ์ (Document)", "ค. รับข้อมูลด้วยมือ", "ง. เก็บข้อมูลลงดิสก์"],
        answer: 1,
        explanation: "Document = การแสดงผลออกทางเครื่องพิมพ์"
    },
    {
        question: "331. สัญลักษณ์ 'สี่เหลี่ยมคางหมู' (Manual Input) หมายถึง?",
        options: ["ก. การนำเข้าข้อมูลด้วยการป้อนค่าทางแป้นพิมพ์", "ข. การประมวลผล", "ค. การแสดงผล", "ง. การตัดสินใจ"],
        answer: 0,
        explanation: "Manual Input = รับข้อมูลทางคีย์บอร์ด"
    },
    {
        question: "332. 'Algorithm' (อัลกอริทึม) คืออะไร?",
        options: ["ก. โปรแกรมไวรัส", "ข. กระบวนการแก้ปัญหาที่มีลำดับขั้นตอนชัดเจนแน่นอน", "ค. ภาษาคอมพิวเตอร์", "ง. อุปกรณ์ฮาร์ดแวร์"],
        answer: 1,
        explanation: "ลำดับขั้นตอนการทำงานที่ชัดเจน (Step-by-step) เพื่อแก้ปัญหา"
    },
    {
        question: "333. การเขียนอัลกอริทึมแบบ 'Pseudocode' คืออะไร?",
        options: ["ก. การเขียนด้วยภาษาเครื่อง", "ข. รหัสเทียม (เขียนจำลองคำสั่งด้วยภาษาที่อ่านเข้าใจง่าย)", "ค. การวาดรูป", "ง. การคอมไพล์โปรแกรม"],
        answer: 1,
        explanation: "รหัสเทียม (ซูโดโค้ด) ใช้เขียนโครงสร้างโปรแกรมด้วยภาษามนุษย์กึ่งภาษาโปรแกรม"
    },
    {
        question: "334. โครงสร้างการทำงานแบบ 'Sequential' คือแบบใด?",
        options: ["ก. ทำซ้ำวนลูป", "ข. ทำตามลำดับจากบนลงล่าง", "ค. เลือกทำอย่างใดอย่างหนึ่ง", "ง. ข้ามขั้นตอน"],
        answer: 1,
        explanation: "Sequential = แบบลำดับ (ทำทีละบรรทัดจากบนลงล่าง)"
    },
    {
        question: "335. โครงสร้างแบบ 'Selection' หรือ 'Condition' ตรงกับคำสั่งใดในภาษาโปรแกรม?",
        options: ["ก. If...Else", "ข. For", "ค. While", "ง. Print"],
        answer: 0,
        explanation: "Selection = การเลือกทำตามเงื่อนไข (If/Else, Switch)"
    },
    {
        question: "336. โครงสร้างแบบ 'Iteration' หรือ 'Loop' คือ?",
        options: ["ก. การทำงานแบบวนซ้ำ", "ข. การทำงานครั้งเดียวจบ", "ค. การทำงานแบบสุ่ม", "ง. การหยุดทำงาน"],
        answer: 0,
        explanation: "Iteration = การทำซ้ำ (Looping) เช่น For, While"
    },
    {
        question: "337. สัญลักษณ์ลูกศร (Flow Line) บอกอะไร?",
        options: ["ก. ความเร็ว", "ข. ทิศทางการไหลของข้อมูลหรือลำดับการทำงาน", "ค. ชนิดข้อมูล", "ง. ปริมาณข้อมูล"],
        answer: 1,
        explanation: "บอกทิศทาง (Direction of flow) ของขั้นตอน"
    },
    {
        question: "338. สัญลักษณ์ 'สี่เหลี่ยมมีเส้นคู่ขนานด้านข้าง' (Predefined Process) คือ?",
        options: ["ก. โปรแกรมย่อย (Subroutine)", "ข. การคำนวณ", "ค. จุดจบ", "ง. การแสดงผล"],
        answer: 0,
        explanation: "โปรแกรมย่อยหรือฟังก์ชันที่กำหนดไว้แล้ว"
    },
    {
        question: "339. ข้อใด **ไม่ใช่** ประโยชน์ของผังงาน?",
        options: ["ก. ช่วยลำดับความคิด", "ข. ช่วยให้คอมพิวเตอร์ทำงานเร็วขึ้นโดยตรง", "ค. ช่วยสื่อสารกับผู้อื่นให้เข้าใจตรงกัน", "ง. ตรวจสอบข้อผิดพลาดของตรรกะได้ง่าย"],
        answer: 1,
        explanation: "ผังงานเป็นเพียงแบบแปลน ไม่ได้ทำให้เครื่องประมวลผลเร็วขึ้น"
    },
    {
        question: "340. สัญลักษณ์ 'รูป 5 เหลี่ยม' (Off-page Connector) ใช้เมื่อใด?",
        options: ["ก. เชื่อมต่อในหน้าเดียวกัน", "ข. เชื่อมต่อผังงานที่อยู่คนละหน้ากระดาษ", "ค. เริ่มต้น", "ง. ตัดสินใจ"],
        answer: 1,
        explanation: "ใช้เชื่อมจุดเมื่อผังงานยาวจนต้องขึ้นหน้าใหม่"
    },
    {
        question: "341. การเขียนผังงานที่ดีควรเป็นอย่างไร?",
        options: ["ก. เขียนให้ซับซ้อนที่สุด", "ข. ใช้สัญลักษณ์มาตรฐาน และมีทิศทางที่ชัดเจน (บนลงล่าง/ซ้ายไปขวา)", "ค. โยงเส้นตัดกันไปมาให้สวยงาม", "ง. ใช้ข้อความยาวๆ ในสัญลักษณ์"],
        answer: 1,
        explanation: "ต้องใช้สัญลักษณ์สากล และทิศทางไม่สับสน (ไม่ควรโยงเส้นตัดกัน)"
    },
    {
        question: "342. ในการเขียนโปรแกรม ข้อผิดพลาดทางตรรกะเรียกว่า?",
        options: ["ก. Syntax Error", "ข. Logic Error", "ค. Runtime Error", "ง. Hardware Error"],
        answer: 1,
        explanation: "Logic Error (โปรแกรมรันได้ แต่ผลลัพธ์ผิด เพราะอัลกอริทึมผิด)"
    },
    {
        question: "343. 'Input -> Process -> Output' เป็นหลักการพื้นฐานของอะไร?",
        options: ["ก. การทำงานของคอมพิวเตอร์", "ข. การกินข้าว", "ค. การนอนหลับ", "ง. การเดินทาง"],
        answer: 0,
        explanation: "วัฏจักรการทำงานของคอมพิวเตอร์ (รับเข้า-ประมวลผล-แสดงผล)"
    },
    {
        question: "344. หากต้องการเขียนโปรแกรมตัดเกรด (A, B, C, D) ต้องใช้โครงสร้างควบคุมแบบใด?",
        options: ["ก. แบบลำดับ", "ข. แบบทางเลือก (Selection)", "ค. แบบวนซ้ำ", "ง. แบบสุ่ม"],
        answer: 1,
        explanation: "ต้องมีการเช็กเงื่อนไขคะแนน (If score > 80...) จึงเป็นแบบทางเลือก"
    },
    {
        question: "345. หากต้องการเขียนโปรแกรมสูตรคูณแม่ 2 ต้องใช้โครงสร้างควบคุมแบบใด?",
        options: ["ก. แบบวนซ้ำ (Loop)", "ข. แบบทางเลือก", "ค. แบบลำดับอย่างเดียว", "ง. แบบสุ่ม"],
        answer: 0,
        explanation: "ต้องวนลูปคูณไปเรื่อยๆ (2x1, 2x2, ... 2x12)"
    },
    {
        question: "346. คำสั่ง Start และ Stop ในผังงาน จะมีได้อย่างละกี่จุด?",
        options: ["ก. Start มี 1, Stop มีได้หลายจุด", "ข. Start มี 1, Stop มี 1 เท่านั้น", "ค. มีกี่จุดก็ได้", "ง. ไม่ต้องมีก็ได้"],
        answer: 1,
        explanation: "ตามหลักการเขียนผังงานที่ดี (Structured Programming) ควรมีจุดเริ่ม 1 และจุดจบ 1 จุด"
    },
    {
        question: "347. 'Variable' ในการเขียนโปรแกรมคือ?",
        options: ["ก. ค่าคงที่", "ข. ตัวแปร (พื้นที่สำหรับเก็บค่าข้อมูลที่เปลี่ยนแปลงได้)", "ค. ชื่อโปรแกรม", "ง. ผลลัพธ์"],
        answer: 1,
        explanation: "ตัวแปร (Variable) คือชื่อที่ตั้งขึ้นเพื่อแทนค่าข้อมูลในหน่วยความจำ"
    },
    {
        question: "348. การเขียนผังงานเพื่อหาพื้นที่สี่เหลี่ยม ต้องมี Input อะไร?",
        options: ["ก. พื้นที่", "ข. ความกว้าง และ ความยาว", "ค. เส้นรอบวง", "ง. สีของสี่เหลี่ยม"],
        answer: 1,
        explanation: "ต้องรับค่า กว้างและยาว เข้ามาก่อน จึงจะคำนวณพื้นที่ได้"
    },
    {
        question: "349. สัญลักษณ์ Display ในผังงาน รูปร่างคล้ายอะไร?",
        options: ["ก. ดินสอ", "ข. ลูกศร", "ค. ลูกกระสุนปืนแนวนอน (หัวมนท้ายแหลม)", "ง. สี่เหลี่ยม"],
        answer: 2,
        explanation: "Display (แสดงผลทางจอภาพ) รูปร่างคล้ายลูกกระสุนปืน"
    },
    {
        question: "350. หากเงื่อนไขในสัญลักษณ์ Decision เป็นจริง (True) และเท็จ (False) เส้นลูกศรจะแยกออกเป็นกี่ทาง?",
        options: ["ก. 1 ทาง", "ข. 2 ทาง", "ค. 3 ทาง", "ง. ไม่แยก"],
        answer: 1,
        explanation: "แยกเป็น 2 ทาง คือ ทางที่เงื่อนไขเป็นจริง และ ทางที่เงื่อนไขเป็นเท็จ"
    },

    // --- หมวด 2: โครงสร้างเครือข่าย (Network Topology) ---
    {
        question: "351. โครงสร้างเครือข่ายแบบใด ที่คอมพิวเตอร์ทุกเครื่องเชื่อมต่อกับ 'สายสื่อสารหลักเพียงเส้นเดียว'?",
        options: ["ก. แบบดาว (Star)", "ข. แบบบัส (Bus)", "ค. แบบวงแหวน (Ring)", "ง. แบบเมช (Mesh)"],
        answer: 1,
        explanation: "Bus Topology ใช้สายแกนหลัก (Backbone) เส้นเดียว"
    },
    {
        question: "352. ข้อเสียหลักของเครือข่ายแบบ 'Bus' คือ?",
        options: ["ก. เปลืองสาย", "ข. ถ้าสายหลักขาด ระบบจะล่มทั้งหมด", "ค. ต้องใช้อุปกรณ์แพง", "ง. ติดตั้งยาก"],
        answer: 1,
        explanation: "จุดอ่อนคือสาย Backbone ถ้าขาดคือจบทั้งระบบ"
    },
    {
        question: "353. โครงสร้างเครือข่ายแบบใด ที่ต้องมีอุปกรณ์ศูนย์กลาง (Hub/Switch)?",
        options: ["ก. แบบดาว (Star)", "ข. แบบบัส (Bus)", "ค. แบบวงแหวน (Ring)", "ง. แบบเมช (Mesh)"],
        answer: 0,
        explanation: "Star Topology ทุกเครื่องต้องต่อเข้า Hub/Switch ตรงกลาง"
    },
    {
        question: "354. ข้อดีของเครือข่ายแบบ 'Star' คือ?",
        options: ["ก. ประหยัดสายที่สุด", "ข. ถ้าคอมพิวเตอร์เครื่องหนึ่งเสีย ระบบอื่นยังทำงานได้ปกติ", "ค. ไม่ต้องมีอุปกรณ์กลาง", "ง. ส่งข้อมูลช้า"],
        answer: 1,
        explanation: "เครื่องลูกข่ายเสีย 1 เครื่อง ไม่กระทบเครื่องอื่น (เพราะต่อแยกกันที่ Hub)"
    },
    {
        question: "355. โครงสร้างเครือข่ายแบบใด ที่เชื่อมต่อเป็นวงกลม ไม่มีจุดปลาย?",
        options: ["ก. Star", "ข. Bus", "ค. Ring (วงแหวน)", "ง. Mesh"],
        answer: 2,
        explanation: "Ring Topology ข้อมูลวิ่งวนเป็นวงกลม"
    },
    {
        question: "356. ข้อเสียของเครือข่ายแบบ 'Ring' คือ?",
        options: ["ก. ถ้าสายขาดจุดใดจุดหนึ่ง ระบบจะล่มทั้งหมด (ในแบบทิศทางเดียว)", "ข. เปลืองสายมาก", "ค. ติดตั้งยากที่สุด", "ง. ต้องใช้ Hub"],
        answer: 0,
        explanation: "ข้อมูลวิ่งเป็นวงกลม ถ้าสายขาดวงจะแตก ระบบหยุดทำงาน"
    },
    {
        question: "357. โครงสร้างเครือข่ายแบบใด ที่คอมพิวเตอร์ทุกเครื่องเชื่อมต่อถึงกันหมดทุกคู่?",
        options: ["ก. Star", "ข. Bus", "ค. Mesh (ตาข่าย)", "ง. Ring"],
        answer: 2,
        explanation: "Mesh Topology (Full Mesh) เชื่อมโยงกันหมดเหมือนใยแมงมุม"
    },
    {
        question: "358. ข้อดีที่สุดของเครือข่ายแบบ 'Mesh' คือ?",
        options: ["ก. ราคาถูก", "ข. มีความเสถียรสูงสุด (สายขาดเส้นหนึ่ง ก็ไปเส้นอื่นได้)", "ค. ติดตั้งง่าย", "ง. ใช้สายเชื่อน้อย"],
        answer: 1,
        explanation: "ทนทานที่สุด (Redundancy) เพราะมีเส้นทางสำรองมากมาย"
    },
    {
        question: "359. โครงสร้างแบบ 'Hybrid' คือ?",
        options: ["ก. การใช้โครงสร้างแบบเดียว", "ข. การนำโครงสร้างหลายแบบมาผสมกัน", "ค. การไม่ใช้สาย", "ง. การใช้อินเทอร์เน็ต"],
        answer: 1,
        explanation: "Hybrid = ผสม (เช่น เครือข่ายองค์กรใหญ่ๆ มักมีทั้ง Star, Bus, Ring ผสมกัน)"
    },
    {
        question: "360. ระบบเครือข่ายที่ครอบคลุมพื้นที่ 'ในห้องหรือในตึกเดียวกัน' เรียกว่า?",
        options: ["ก. LAN", "ข. MAN", "ค. WAN", "ง. PAN"],
        answer: 0,
        explanation: "LAN (Local Area Network)"
    },
    {
        question: "361. ระบบเครือข่ายที่ครอบคลุม 'ระดับเมือง หรือจังหวัด' เรียกว่า?",
        options: ["ก. LAN", "ข. MAN", "ค. WAN", "ง. SAN"],
        answer: 1,
        explanation: "MAN (Metropolitan Area Network)"
    },
    {
        question: "362. ระบบเครือข่ายที่ครอบคลุม 'ระดับประเทศ หรือทั่วโลก' เรียกว่า?",
        options: ["ก. LAN", "ข. MAN", "ค. WAN", "ง. VPN"],
        answer: 2,
        explanation: "WAN (Wide Area Network)"
    },
    {
        question: "363. 'PAN' ย่อมาจาก?",
        options: ["ก. Personal Area Network (เครือข่ายส่วนบุคคล)", "ข. Public Area Network", "ค. Private Area Network", "ง. People Area Network"],
        answer: 0,
        explanation: "เครือข่ายระยะใกล้รอบตัวบุคคล เช่น Bluetooth"
    },
    {
        question: "364. เครือข่ายแบบ 'Client/Server' คือ?",
        options: ["ก. ทุกเครื่องเท่าเทียมกัน", "ข. มีเครื่องแม่ข่าย (Server) ให้บริการ และเครื่องลูกข่าย (Client) ร้องขอ", "ค. เครือข่ายไร้สาย", "ง. เครือข่ายส่วนตัว"],
        answer: 1,
        explanation: "ระบบที่มีแม่ข่ายคอยให้บริการทรัพยากรแก่ลูกข่าย"
    },
    {
        question: "365. เครือข่ายแบบ 'P2P' (Peer-to-Peer) คือ?",
        options: ["ก. ต้องมี Server ใหญ่", "ข. คอมพิวเตอร์ทุกเครื่องเท่าเทียมกัน เป็นได้ทั้งผู้ให้และผู้รับ", "ค. ใช้ดาวเทียม", "ง. ใช้ในองค์กรใหญ่เท่านั้น"],
        answer: 1,
        explanation: "เครื่องต่อเครื่อง แชร์ข้อมูลกันเองโดยไม่ต้องผ่าน Server กลาง"
    },
    {
        question: "366. 'Token Passing' เป็นวิธีการส่งข้อมูลใน Topology แบบใด?",
        options: ["ก. Star", "ข. Bus", "ค. Ring", "ง. Mesh"],
        answer: 2,
        explanation: "Ring ใช้ Token (เหรียญ/ตั๋ว) วิ่งวนเพื่ออนุญาตให้สิทธิ์ส่งข้อมูล"
    },
    {
        question: "367. 'Hub' แตกต่างจาก 'Switch' อย่างไร?",
        options: ["ก. เหมือนกัน", "ข. Hub ฉลาดกว่า", "ค. Switch ฉลาดกว่า (ส่งข้อมูลเฉพาะเครื่องปลายทาง) แต่ Hub ส่งกระจายไปทุกเครื่อง", "ง. Hub ใช้กับ WAN"],
        answer: 2,
        explanation: "Switch ฉลาดกว่า จัดการจราจรข้อมูลได้ดีกว่า Hub (Broadcast)"
    },
    {
        question: "368. สาย UTP (สายแลน) จัดเป็นสื่อนำสัญญาณประเภทใด?",
        options: ["ก. ไร้สาย", "ข. มีสาย (Wired) - สายทองแดงเกลียวคู่", "ค. แสง", "ง. คลื่นวิทยุ"],
        answer: 1,
        explanation: "Twisted Pair (สายคู่บิดเกลียว)"
    },
    {
        question: "369. สาย 'Fiber Optic' ส่งข้อมูลด้วยอะไร?",
        options: ["ก. ไฟฟ้า", "ข. แสง", "ค. เสียง", "ง. คลื่นแม่เหล็ก"],
        answer: 1,
        explanation: "ใยแก้วนำแสง ส่งข้อมูลด้วยสัญญาณแสง (เร็วและไกล)"
    },
    {
        question: "370. มาตรฐาน WiFi คือ?",
        options: ["ก. IEEE 802.3", "ข. IEEE 802.11", "ค. IEEE 802.15", "ง. IEEE 1394"],
        answer: 1,
        explanation: "802.11 คือมาตรฐาน Wireless LAN"
    },
    {
        question: "371. อุปกรณ์ที่ทำหน้าที่เชื่อมต่อเครือข่ายต่างชนิดกัน (และหาเส้นทางที่ดีที่สุด) คือ?",
        options: ["ก. Hub", "ข. Switch", "ค. Router", "ง. Repeater"],
        answer: 2,
        explanation: "Router (เราเตอร์) หาเส้นทาง (Routing) ระหว่างเครือข่าย"
    },
    {
        question: "372. ข้อใดคือ 'WLAN'?",
        options: ["ก. เครือข่ายแลนไร้สาย (Wireless LAN)", "ข. เครือข่ายระดับโลก", "ค. สายแลน", "ง. เว็บไซต์"],
        answer: 0,
        explanation: "Wireless LAN (ระบบแลนไร้สาย)"
    },
    {
        question: "373. 'Intranet' ต่างจาก 'Internet' อย่างไร?",
        options: ["ก. เหมือนกัน", "ข. Intranet คือเครือข่ายภายในองค์กร (คนนอกเข้าไม่ได้) / Internet คือเครือข่ายสาธารณะทั่วโลก", "ค. Intranet ใหญ่กว่า", "ง. Intranet ใช้ดาวเทียม"],
        answer: 1,
        explanation: "Intra = ภายใน (ส่วนตัว), Inter = ระหว่าง (สาธารณะ)"
    },
    {
        question: "374. 'Extranet' คือ?",
        options: ["ก. อินเทอร์เน็ตความเร็วสูง", "ข. เครือข่ายภายในที่อนุญาตให้คนนอกบางกลุ่ม (เช่น คู่ค้า) เข้ามาใช้ข้อมูลบางส่วนได้", "ค. เครือข่ายไร้สาย", "ง. เครือข่ายทหาร"],
        answer: 1,
        explanation: "ส่วนขยายของ Intranet ให้คนนอกที่มีสิทธิ์เข้าถึงได้"
    },
    {
        question: "375. โปรโตคอลหลักที่ใช้ในอินเทอร์เน็ตคือ?",
        options: ["ก. NetBEUI", "ข. IPX/SPX", "ค. TCP/IP", "ง. AppleTalk"],
        answer: 2,
        explanation: "TCP/IP เป็นภาษากลางของอินเทอร์เน็ต"
    },

    // --- หมวด 3: เครื่องพิมพ์ (Printer) ---
    {
        question: "376. เครื่องพิมพ์ประเภทใดใช้ 'หัวเข็ม' กระแทกผ้าหมึก?",
        options: ["ก. Inkjet", "ข. Laser", "ค. Dot Matrix", "ง. Thermal"],
        answer: 2,
        explanation: "Dot Matrix (ดอตเมทริกซ์) เป็นแบบ Impact Printer (กระแทก)"
    },
    {
        question: "377. ข้อดีของเครื่องพิมพ์ 'Dot Matrix' คือ?",
        options: ["ก. พิมพ์รูปสวย", "ข. พิมพ์เงียบ", "ค. พิมพ์สำเนา (Copy) ได้ในครั้งเดียว (ใช้กระดาษก๊อบปี้)", "ง. พิมพ์เร็วมาก"],
        answer: 2,
        explanation: "เพราะใช้แรงกระแทก จึงทำสำเนา (Carbon copy) ได้ เหมาะกับใบเสร็จ/บิล"
    },
    {
        question: "378. เครื่องพิมพ์ประเภทใดใช้ 'การพ่นหมึกน้ำ'?",
        options: ["ก. Inkjet", "ข. Laser", "ค. Dot Matrix", "ง. Thermal"],
        answer: 0,
        explanation: "Inkjet (อิงค์เจ็ต) ใช้ตลับหมึกน้ำพ่นลงกระดาษ"
    },
    {
        question: "379. เครื่องพิมพ์ประเภทใดใช้ 'ผงหมึก' (Toner) และความร้อน?",
        options: ["ก. Inkjet", "ข. Laser", "ค. Dot Matrix", "ง. Plotter"],
        answer: 1,
        explanation: "Laser Printer ใช้ผงหมึกและไฟฟ้าสถิต+ความร้อน"
    },
    {
        question: "380. เครื่องพิมพ์ชนิดใดพิมพ์งานเอกสารขาว-ดำ ได้คมชัดและเร็วที่สุด?",
        options: ["ก. Inkjet", "ข. Laser", "ค. Dot Matrix", "ง. Thermal"],
        answer: 1,
        explanation: "Laser Printer เหมาะกับงานเอกสารปริมาณมาก"
    },
    {
        question: "381. เครื่องพิมพ์ใบเสร็จร้านสะดวกซื้อ (7-11) ส่วนใหญ่เป็นแบบใด?",
        options: ["ก. Inkjet", "ข. Laser", "ค. Thermal Printer (ความร้อน)", "ง. Plotter"],
        answer: 2,
        explanation: "Thermal Printer ใช้ความร้อนจี้กระดาษเคมี (ไม่ต้องเติมหมึก)"
    },
    {
        question: "382. หน่วยวัดความละเอียดของเครื่องพิมพ์คือ?",
        options: ["ก. PPM", "ข. DPI (Dots Per Inch)", "ค. CPM", "ง. Hz"],
        answer: 1,
        explanation: "DPI (จุดต่อนิ้ว) ยิ่งมาก ภาพยิ่งละเอียด"
    },
    {
        question: "383. หน่วยวัดความเร็วของเครื่องพิมพ์คือ?",
        options: ["ก. PPM (Pages Per Minute)", "ข. DPI", "ค. RPM", "ง. GB"],
        answer: 0,
        explanation: "PPM (หน้าต่อนาที)"
    },
    {
        question: "384. เครื่องพิมพ์ขนาดใหญ่สำหรับพิมพ์แบบแปลนบ้านหรือป้ายโฆษณา คือ?",
        options: ["ก. Laser", "ข. Plotter", "ค. Scanner", "ง. Dot Matrix"],
        answer: 1,
        explanation: "Plotter เป็นเครื่องพิมพ์หน้ากว้าง ความละเอียดสูง"
    },
    {
        question: "385. สีแม่แบบที่ใช้ในเครื่องพิมพ์ (CMYK) คือ?",
        options: ["ก. แดง เขียว น้ำเงิน", "ข. ฟ้า (Cyan), ม่วงแดง (Magenta), เหลือง (Yellow), ดำ (Key/Black)", "ค. ขาว ดำ เทา", "ง. ส้ม เขียว ม่วง"],
        answer: 1,
        explanation: "ระบบสีงานพิมพ์คือ CMYK"
    },
    {
        question: "386. 'Cartridge' คือส่วนประกอบใดของเครื่องพิมพ์?",
        options: ["ก. สายไฟ", "ข. ตลับหมึก", "ค. ถาดกระดาษ", "ง. หัวพิมพ์"],
        answer: 1,
        explanation: "ตลับหมึก (Ink/Toner Cartridge)"
    },
    {
        question: "387. เครื่องพิมพ์ 'All-in-One' (Multifunction) ทำอะไรได้บ้าง?",
        options: ["ก. พิมพ์อย่างเดียว", "ข. พิมพ์, สแกน, ถ่ายเอกสาร, (บางรุ่นแฟกซ์ได้)", "ค. พิมพ์และเล่นเพลง", "ง. พิมพ์และปล่อยไวไฟ"],
        answer: 1,
        explanation: "Multifunction (ทำได้หลายอย่าง)"
    },
    {
        question: "388. กระดาษต่อเนื่อง (Continuous Paper) ใช้กับเครื่องพิมพ์ใด?",
        options: ["ก. Laser", "ข. Dot Matrix", "ค. Inkjet", "ง. Thermal"],
        answer: 1,
        explanation: "Dot Matrix มีเฟืองหนามเตยสำหรับดึงกระดาษต่อเนื่อง"
    },
    {
        question: "389. ข้อดีของ Inkjet เมื่อเทียบกับ Laser คือ?",
        options: ["ก. พิมพ์เร็วกว่า", "ข. พิมพ์ภาพถ่าย/สี ได้สวยงามสมจริงกว่าและเครื่องราคาถูกกว่า", "ค. ตัวหนังสือคมกว่า", "ง. หมึกกันน้ำ"],
        answer: 1,
        explanation: "Inkjet พิมพ์รูปสวยกว่า (แต่ Laser พิมพ์ตัวหนังสือคมกว่า)"
    },
    {
        question: "390. หมึกของเครื่องพิมพ์ Thermal (ใบเสร็จ) อยู่ที่ไหน?",
        options: ["ก. ในตลับ", "ข. ในกระดาษ (กระดาษเคมี)", "ค. ในริบบิ้น", "ง. ไม่มีหมึก"],
        answer: 1,
        explanation: "เคมีอยู่ในกระดาษแล้ว (โดนความร้อนจะดำ)"
    },
    {
        question: "391. การเชื่อมต่อเครื่องพิมพ์ในปัจจุบันนิยมใช้พอร์ตใด?",
        options: ["ก. Parallel (พอร์ตขนาน)", "ข. USB และ Wi-Fi", "ค. Serial", "ง. PS/2"],
        answer: 1,
        explanation: "USB หรือไร้สายผ่าน Wi-Fi"
    },
    {
        question: "392. ไดรเวอร์ (Driver) ของเครื่องพิมพ์ มีหน้าที่อะไร?",
        options: ["ก. เป็นคนขับรถส่งของ", "ข. โปรแกรมสื่อสารระหว่างคอมพิวเตอร์กับเครื่องพิมพ์", "ค. โปรแกรมแต่งรูป", "ง. สายไฟ"],
        answer: 1,
        explanation: "โปรแกรมที่ทำให้คอมฯ รู้จักและสั่งงานอุปกรณ์ได้"
    },
    {
        question: "393. อาการ 'หัวพิมพ์ตัน' มักเกิดกับเครื่องพิมพ์ชนิดใด?",
        options: ["ก. Laser", "ข. Inkjet", "ค. Dot Matrix", "ง. Thermal"],
        answer: 1,
        explanation: "Inkjet ใช้หมึกน้ำ ถ้าไม่ได้ใช้นานๆ หมึกจะแห้งตันหัวพิมพ์"
    },
    {
        question: "394. '3D Printer' ใช้ทำอะไร?",
        options: ["ก. พิมพ์รูป 3 มิติบนกระดาษ", "ข. ขึ้นรูปชิ้นงานวัสดุจริง (เช่น พลาสติก) เป็นทรง 3 มิติ", "ค. พิมพ์เงิน", "ง. สแกนวัตถุ"],
        answer: 1,
        explanation: "สร้างวัตถุจับต้องได้ (Additive Manufacturing)"
    },
    {
        question: "395. เครื่องพิมพ์แบบ 'Impact' ต่างจาก 'Non-Impact' อย่างไร?",
        options: ["ก. Impact สัมผัสกระดาษ (กระแทก), Non-Impact ไม่สัมผัส (พ่น/เลเซอร์)", "ข. Impact แพงกว่า", "ค. Non-Impact เสียงดังกว่า", "ง. เหมือนกัน"],
        answer: 0,
        explanation: "Impact = กระแทก (Dot Matrix), Non-Impact = ไม่กระแทก (Inkjet/Laser)"
    },
    {
        question: "396. หากต้องการพิมพ์ป้ายไวนิลขนาดใหญ่ ควรใช้เครื่องใด?",
        options: ["ก. Laser A3", "ข. Large Format Printer (Plotter)", "ค. Inkjet A4", "ง. Offset"],
        answer: 1,
        explanation: "เครื่องพิมพ์หน้ากว้าง (Inkjet Plotter)"
    },
    {
        question: "397. กระดาษ 'A4' มีขนาดเท่าไร?",
        options: ["ก. 210 x 297 มม.", "ข. 297 x 420 มม.", "ค. 148 x 210 มม.", "ง. 8.5 x 11 นิ้ว"],
        answer: 0,
        explanation: "ขนาดมาตรฐาน 210 x 297 มม."
    },
    {
        question: "398. ข้อเสียของ Laser Printer คือ?",
        options: ["ก. พิมพ์ช้า", "ข. เครื่องและหมึก (Toner) มีราคาสูง, ใช้ไฟเยอะ", "ค. เสียงดัง", "ง. ภาพไม่คม"],
        answer: 1,
        explanation: "ต้นทุนเครื่องและหมึกแพงกว่า Inkjet"
    },
    {
        question: "399. ในการเลือกซื้อเครื่องพิมพ์ ถ้าเน้นประหยัดหมึกระยะยาว ควรเลือกแบบใด?",
        options: ["ก. Ink Tank (แทงค์แท้โรงงาน)", "ข. ตลับหมึกธรรมดา", "ค. Laser", "ง. Dot Matrix"],
        answer: 0,
        explanation: "Ink Tank เติมหมึกขวดได้ ราคาต่อแผ่นถูกที่สุด"
    },
    {
        question: "400. Spooling ในระบบพิมพ์ คืออะไร?",
        options: ["ก. การพักข้อมูลในหน่วยความจำก่อนส่งไปพิมพ์ (เพื่อให้คอมฯ ทำงานอื่นต่อได้ทันที)", "ข. การล้างหัวพิมพ์", "ค. การใส่กระดาษ", "ง. การหมุนของลูกกลิ้ง"],
        answer: 0,
        explanation: "Print Spooler พักงานพิมพ์ไว้ เพื่อไม่ให้ CPU ต้องรอนาน"
    },

    // --- หมวด 4: โดเมนเนม (Domain Name) ---
    {
        question: "401. โดเมนเนม '.com' ย่อมาจากอะไร?",
        options: ["ก. Computer", "ข. Commercial (องค์กรธุรกิจ/การค้า)", "ค. Common", "ง. Communication"],
        answer: 1,
        explanation: ".com = Commercial (ธุรกิจ)"
    },
    {
        question: "402. โดเมนเนม '.edu' หรือ '.ac' ใช้สำหรับ?",
        options: ["ก. รัฐบาล", "ข. สถานศึกษา (Education / Academic)", "ค. ทหาร", "ง. องค์กรไม่แสวงกำไร"],
        answer: 1,
        explanation: ".edu (Education), .ac (Academic)"
    },
    {
        question: "403. โดเมนเนม '.gov' หรือ '.go' ใช้สำหรับ?",
        options: ["ก. หน่วยงานรัฐบาล (Government)", "ข. บริษัทเอกชน", "ค. โรงเรียน", "ง. ร้านค้า"],
        answer: 0,
        explanation: ".gov (Government), .go.th (รัฐบาลไทย)"
    },
    {
        question: "404. โดเมนเนม '.org' หรือ '.or' หมายถึง?",
        options: ["ก. บริษัท", "ข. องค์กรที่ไม่แสวงหากำไร (Organization)", "ค. เว็บส่วนตัว", "ง. ผู้ให้บริการเน็ต"],
        answer: 1,
        explanation: "Organization (องค์กร/มูลนิธิ)"
    },
    {
        question: "405. โดเมนเนม '.co.th' หมายถึง?",
        options: ["ก. หน่วยงานรัฐในไทย", "ข. บริษัท/ห้างหุ้นส่วน ที่จดทะเบียนพาณิชย์ในประเทศไทย", "ค. มหาวิทยาลัยในไทย", "ง. บุคคลทั่วไปในไทย"],
        answer: 1,
        explanation: ".co (Company) + .th (Thailand)"
    },
    {
        question: "406. โดเมนเนม '.net' ย่อมาจาก?",
        options: ["ก. Internet", "ข. Network (ผู้ให้บริการเครือข่าย)", "ค. Netflix", "ง. New Technology"],
        answer: 1,
        explanation: "Network"
    },
    {
        question: "407. โดเมนเนม '.mil' หรือ '.mi' ใช้สำหรับ?",
        options: ["ก. โรงงานนม", "ข. หน่วยงานทางทหาร (Military)", "ค. มหาเศรษฐี", "ง. การแพทย์"],
        answer: 1,
        explanation: "Military (กองทัพ)"
    },
    {
        question: "408. โดเมนเนม '.in.th' เหมาะสำหรับ?",
        options: ["ก. บริษัท", "ข. หน่วยงานรัฐ", "ค. บุคคลทั่วไป หรือ องค์กรทุกประเภทในไทย (Individual/Incorporated)", "ง. โรงเรียน"],
        answer: 2,
        explanation: ".in.th เป็นโดเมนเอนกประสงค์สำหรับคนไทย/องค์กรในไทย"
    },
    {
        question: "409. รหัสโดเมนประเทศ (Country Code TLD) ของ 'ประเทศไทย' คือ?",
        options: ["ก. .th", "ข. .tl", "ค. .ti", "ง. .td"],
        answer: 0,
        explanation: ".th (Thailand)"
    },
    {
        question: "410. รหัสโดเมนประเทศ '.jp' คือประเทศอะไร?",
        options: ["ก. จาไมก้า", "ข. ญี่ปุ่น (Japan)", "ค. จอร์แดน", "ง. เยอรมนี"],
        answer: 1,
        explanation: "Japan"
    },
    {
        question: "411. รหัสโดเมนประเทศ '.cn' คือประเทศอะไร?",
        options: ["ก. แคนาดา", "ข. จีน (China)", "ค. ชิลี", "ง. กัมพูชา"],
        answer: 1,
        explanation: "China"
    },
    {
        question: "412. รหัสโดเมนประเทศ '.uk' คือประเทศอะไร?",
        options: ["ก. ยูเครน", "ข. สหราชอาณาจักร (United Kingdom)", "ค. สหรัฐอเมริกา", "ง. อุรุกวัย"],
        answer: 1,
        explanation: "United Kingdom"
    },
    {
        question: "413. หน่วยงานใดดูแลการจดโดเมนเนม .th ในประเทศไทย?",
        options: ["ก. กระทรวงดิจิทัล", "ข. THNIC (ทีเอชนิค)", "ค. TOT", "ง. CAT"],
        answer: 1,
        explanation: "THNIC (Thailand Network Information Center)"
    },
    {
        question: "414. โดเมนเนมภาษาไทย (IDN) คืออะไร?",
        options: ["ก. ชื่อเว็บที่เป็นภาษาไทย (เช่น คนละครึ่ง.com)", "ข. เว็บที่มีเนื้อหาภาษาไทย", "ค. โปรแกรมแปลภาษา", "ง. แป้นพิมพ์ไทย"],
        answer: 0,
        explanation: "Internationalized Domain Name"
    },
    {
        question: "415. ส่วนใดของ URL 'https://www.google.com' คือโดเมนเนม?",
        options: ["ก. https://", "ข. www", "ค. google.com", "ง. ทั้งหมด"],
        answer: 2,
        explanation: "google.com"
    },
    {
        question: "416. 'Subdomain' คือส่วนไหนของ 'mail.google.com'?",
        options: ["ก. mail", "ข. google", "ค. com", "ง. ไม่มี"],
        answer: 0,
        explanation: "mail (ส่วนย่อยหน้าโดเมนหลัก)"
    },
    {
        question: "417. โดเมน '.biz' ใช้สำหรับ?",
        options: ["ก. การศึกษา", "ข. ธุรกิจ (Business)", "ค. บันเทิง", "ง. รัฐบาล"],
        answer: 1,
        explanation: "Business"
    },
    {
        question: "418. โดเมน '.info' ย่อมาจาก?",
        options: ["ก. Information (ข้อมูลสารสนเทศ)", "ข. Infinity", "ค. Informal", "ง. Infrastructure"],
        answer: 0,
        explanation: "Information"
    },
    {
        question: "419. ข้อใดคือโดเมนระดับบนสุด (Top-Level Domain: TLD)?",
        options: ["ก. google", "ข. .com", "ค. www", "ง. http"],
        answer: 1,
        explanation: "ส่วนท้ายสุดของชื่อโดเมน (เช่น .com, .net, .th)"
    },
    {
        question: "420. การจดโดเมนเนมมีอายุกี่ปี?",
        options: ["ก. ตลอดชีพ", "ข. ต้องต่ออายุรายปี (1-10 ปี)", "ค. 100 ปี", "ง. ฟรีตลอดไป"],
        answer: 1,
        explanation: "ต้องเช่า/ต่ออายุ (Renew) รายปี"
    },
    {
        question: "421. ใครเป็นเจ้าของโดเมนเนม?",
        options: ["ก. ผู้ที่จดทะเบียนคนแรก", "ข. รัฐบาล", "ค. Google", "ง. ใครก็ได้"],
        answer: 0,
        explanation: "ใช้หลักการ First come, first served"
    },
    {
        question: "422. โดเมนเนมซ้ำกันได้หรือไม่?",
        options: ["ก. ได้", "ข. ไม่ได้ (ทั่วโลกต้องมีชื่อเดียว)", "ค. ได้ถ้าอยู่คนละประเทศ", "ง. ได้ถ้าคนละบริษัท"],
        answer: 1,
        explanation: "ชื่อโดเมนต้อง Unique (ไม่ซ้ำ) ในระบบ DNS ทั่วโลก"
    },
    {
        question: "423. เว็บไซต์มหาวิทยาลัยธรรมศาสตร์ ควรใช้โดเมนใด?",
        options: ["ก. tu.co.th", "ข. tu.ac.th", "ค. tu.go.th", "ง. tu.com"],
        answer: 1,
        explanation: ".ac.th"
    },
    {
        question: "424. เว็บไซต์สำนักงานตำรวจแห่งชาติ คือ?",
        options: ["ก. royalthaipolice.com", "ข. royalthaipolice.go.th", "ค. royalthaipolice.ac.th", "ง. royalthaipolice.or.th"],
        answer: 1,
        explanation: "หน่วยงานรัฐใช้ .go.th"
    },
    {
        question: "425. 'DNS Server' ทำหน้าที่แปลง ______ เป็น ______?",
        options: ["ก. IP Address เป็น Domain Name", "ข. Domain Name เป็น IP Address", "ค. ไฟล์ เป็น โฟลเดอร์", "ง. สัญญาณดิจิทัล เป็น อนาล็อก"],
        answer: 1,
        explanation: "แปลงชื่อโดเมน (ที่คนจำง่าย) -> IP Address (ที่คอมฯ เข้าใจ)"
    } 
];
