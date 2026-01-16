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
    }
];