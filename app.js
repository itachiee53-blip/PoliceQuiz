const sounds = {
    click: new Audio('sounds/click.mp3'),
    correct: new Audio('sounds/correct.mp3'),
    wrong: new Audio('sounds/wrong.mp3'),
};
function playSound(type) { if(sounds[type]) { sounds[type].currentTime = 0; sounds[type].play().catch(e=>{}); } }

const SET_SIZE = 25;

// โหลดประวัติ
let userHistory = JSON.parse(localStorage.getItem('policeQuizHistory')) || {
    thai: { correct: 0, total: 0 },
    computer: { correct: 0, total: 0 },
    law: { correct: 0, total: 0 },
    society: { correct: 0, total: 0 },
    math: { correct: 0, total: 0 },
    english: { correct: 0, total: 0 }
};

let treeData = JSON.parse(localStorage.getItem('policeTreeData')) || { exp: 0 };

// --- ข้อมูลเลเวลต้นไม้ & คำอวยพร ---
const TREE_LEVELS = [
    { exp: 0, name: "เมล็ดพันธุ์", icon: "🌱", title: "ผู้เริ่มต้น", 
      buff: "Effect: ความตั้งใจ +10%",
      msg: "จุดเริ่มต้นที่ยิ่งใหญ่ เริ่มจากการลงมือทำ จงอดทนดั่งเมล็ดพันธุ์ที่รอวันเติบโต" },
    
    { exp: 100, name: "ต้นกล้าอ่อน", icon: "🌿", title: "นักเรียนเตรียมสอบ", 
      buff: "Effect: ความจำ +20%",
      msg: "ยอดเยี่ยม! คุณเริ่มก้าวออกมาแล้ว อย่าหยุดรดน้ำพรวนดินด้วยความรู้นะครับ" },
    
    { exp: 300, name: "ต้นไม้เล็ก", icon: "🪴", title: "สิบตำรวจตรีฝึกหัด", 
      buff: "Effect: ความมั่นใจ +30%",
      msg: "รากฐานเริ่มมั่นคง! ความพยายามของคุณกำลังผลิดอกออกผล สู้ต่อไป!" },
    
    { exp: 600, name: "ต้นไม้กำลังโต", icon: "🌲", title: "จ่าเฉยผู้รอบรู้", 
      buff: "Effect: โอกาสเดาถูก +15%",
      msg: "คุณมาไกลมาก! อุปสรรคคือยาชูกำลัง ขอให้มีสติและปัญญาที่เฉียบแหลม" },
    
    { exp: 1000, name: "ต้นไม้ใหญ่", icon: "🌳", title: "ผู้หมวดป้ายแดง", 
      buff: "Effect: ออร่าจับ +50%",
      msg: "แข็งแกร่งดั่งภูผา! ความรู้ของคุณแน่นปึ้ก พร้อมรับมือทุกสนามสอบ" },
    
    { exp: 1500, name: "ต้นไม้ออกดอก", icon: "🌸", title: "สารวัตรมือปราบ", 
      buff: "Effect: คะแนนพุ่งกระฉูด",
      msg: "ความสำเร็จอยู่แค่เอื้อม! จงเบ่งบานและแสดงศักยภาพให้โลกเห็น" },
    
    { exp: 2500, name: "ต้นไม้ออกผล", icon: "🍎", title: "ผู้กำกับจอมขมังเวทย์", 
      buff: "Effect: สอบติดแน่นอน 99%",
      msg: "ผลแห่งความเพียรหอมหวานเสมอ ขอให้คุณเก็บเกี่ยวความสำเร็จนี้ไว้อย่างภาคภูมิ" },
    
    { exp: 5000, name: "ต้นไม้แห่งปัญญา", icon: "🌳✨", title: "ตำนานแห่งกรมตำรวจ", 
      buff: "Effect: เป็นอมตะในทำเนียบรุ่น",
      msg: "สุดยอดแห่งความเพียร! คุณคือตัวจริง ขอให้ประสบความสำเร็จในทุกเส้นทางครับ!" }
];

function updateTreeDisplay() {
    let currentExp = treeData.exp;
    let levelObj = TREE_LEVELS[0];
    let nextLevelExp = TREE_LEVELS[1].exp;

    for (let i = 0; i < TREE_LEVELS.length; i++) {
        if (currentExp >= TREE_LEVELS[i].exp) {
            levelObj = TREE_LEVELS[i];
            nextLevelExp = (TREE_LEVELS[i+1]) ? TREE_LEVELS[i+1].exp : currentExp * 1.5;
        }
    }

    let prevLevelExp = (TREE_LEVELS.indexOf(levelObj) > 0) ? TREE_LEVELS[TREE_LEVELS.indexOf(levelObj)-1].exp : 0;
    let progress = 0;
    if(nextLevelExp > currentExp) {
        progress = ((currentExp - prevLevelExp) / (nextLevelExp - prevLevelExp)) * 100;
    } else {
        progress = 100;
    }

    if(document.getElementById('tree-lvl-name')) {
        document.getElementById('tree-lvl-name').innerText = levelObj.name;
        document.getElementById('tree-img').innerText = levelObj.icon;
        document.getElementById('current-exp').innerText = currentExp;
        document.getElementById('next-level-exp').innerText = nextLevelExp;
        document.getElementById('tree-exp-bar').style.width = progress + "%";
    }
}

// --- ฟังก์ชัน Modal และวิเคราะห์จุดอ่อนจุดแข็ง ---
function openTreeModal() {
    playSound('click');
    const modal = document.getElementById('tree-modal');
    modal.style.display = 'flex';

    // หาเลเวลปัจจุบัน
    let levelObj = TREE_LEVELS[0];
    for (let i = 0; i < TREE_LEVELS.length; i++) {
        if (treeData.exp >= TREE_LEVELS[i].exp) levelObj = TREE_LEVELS[i];
    }

    // วิเคราะห์วิชา
    const subjectNames = {
        'thai': 'ภาษาไทย', 'computer': 'คอมพิวเตอร์', 'law': 'กฎหมาย',
        'society': 'สังคม', 'math': 'คณิตศาสตร์', 'english': 'อังกฤษ'
    };
    
    let bestSub = "ยังไม่มีข้อมูล";
    let worstSub = "ยังไม่มีข้อมูล";
    let maxPercent = -1;
    let minPercent = 101;

    for (const [key, data] of Object.entries(userHistory)) {
        if (data.total > 0) {
            let p = (data.correct / data.total) * 100;
            if (p > maxPercent) { maxPercent = p; bestSub = `${subjectNames[key]} (${Math.round(p)}%)`; }
            if (p < minPercent) { minPercent = p; worstSub = `${subjectNames[key]} (${Math.round(p)}%)`; }
        }
    }

    if (maxPercent === -1) { // ยังไม่เคยเล่นเลย
        bestSub = "-"; worstSub = "-";
    } else if (maxPercent === minPercent) { // คะแนนเท่ากันหมด
        bestSub = "ทุกวิชาเท่ากัน"; worstSub = "ไม่มี";
    }

    // ใส่ข้อมูลลง Modal
    document.getElementById('modal-rank-title').innerText = `${levelObj.icon} ${levelObj.title}`;
    document.getElementById('modal-best-subject').innerText = bestSub;
    document.getElementById('modal-worst-subject').innerText = worstSub;
    document.getElementById('modal-blessing-text').innerText = `"${levelObj.msg}"`;
    document.getElementById('modal-buff-text').innerText = levelObj.buff;
}

function closeTreeModal() {
    playSound('click');
    document.getElementById('tree-modal').style.display = 'none';
}

updateTreeDisplay();

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let wrongAnswersLog = []; 
let currentSubjectName = '';

function getSubjectData(subject) {
    if(subject === 'thai') return window.thaiQuestions;
    if(subject === 'computer') return window.computerQuestions;
    if(subject === 'law') return window.lawQuestions;
    if(subject === 'society') return window.societyQuestions;
    if(subject === 'math') return window.mathQuestions;
    if(subject === 'english') return window.engQuestions;
    return [];
}

function detectTopic(questionText) {
    const txt = questionText.toLowerCase();
    if(txt.includes('ราชาศัพท์') || txt.includes('พระ')) return 'คำราชาศัพท์';
    if(txt.includes('สุภาพ')) return 'คำสุภาพ';
    if(txt.includes('สะกด') || txt.includes('เขียน')) return 'การสะกดคำ';
    if(txt.includes('สำนวน')) return 'สำนวนไทย';
    if(txt.includes('ram') || txt.includes('rom') || txt.includes('cpu')) return 'Hardware';
    if(txt.includes('net') || txt.includes('mail')) return 'Internet';
    if(txt.includes('อาญา')) return 'กฎหมายอาญา';
    if(txt.includes('แพ่ง')) return 'กฎหมายแพ่ง';
    if(txt.includes('อนุกรม')) return 'อนุกรม';
    return 'ทั่วไป';
}

function selectSubject(subject) {
    playSound('click');
    currentSubjectName = subject;
    const sourceData = getSubjectData(subject);
    if(!sourceData || sourceData.length === 0) { alert("ไม่พบข้อมูลข้อสอบ!"); return; }
    const totalQ = sourceData.length;
    const totalSets = Math.ceil(totalQ / SET_SIZE);
    showSetSelectionUI(subject, totalQ, totalSets);
}

function showSetSelectionUI(subject, totalQ, totalSets) {
    document.getElementById('menu-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('set-selection-area').style.display = 'block';

    const titles = { 'thai': 'ภาษาไทย', 'computer': 'คอมพิวเตอร์', 'law': 'กฎหมาย', 'society': 'สังคม+อาเซียน', 'math': 'คณิตศาสตร์', 'english': 'ภาษาอังกฤษ' };
    document.getElementById('set-selection-title').innerText = "เลือกชุดข้อสอบ: " + titles[subject];
    document.getElementById('total-questions-count').innerText = totalQ;

    const container = document.getElementById('set-buttons-container');
    container.innerHTML = '';

    for(let i = 1; i <= totalSets; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn-set';
        const startNum = (i - 1) * SET_SIZE + 1;
        const endNum = Math.min(i * SET_SIZE, totalQ);
        btn.innerHTML = `ชุดที่ ${i}<br><span style="font-size:0.8rem; font-weight:normal;">(ข้อ ${startNum}-${endNum})</span>`;
        btn.onclick = () => startQuizSet(subject, i);
        container.appendChild(btn);
    }
}

function showSetSelection(subject) { selectSubject(subject); }

function startQuizSet(subject, setNumber) {
    playSound('click');
    const sourceData = getSubjectData(subject);
    const startIndex = (setNumber - 1) * SET_SIZE;
    const endIndex = startIndex + SET_SIZE;
    activeQuestions = sourceData.slice(startIndex, endIndex);

    currentIndex = 0; score = 0; wrongAnswersLog = [];

    document.getElementById('set-selection-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    
    const titles = { 'thai': 'ภาษาไทย', 'computer': 'คอมพิวเตอร์', 'law': 'กฎหมาย', 'society': 'สังคม+อาเซียน', 'math': 'คณิตศาสตร์', 'english': 'ภาษาอังกฤษ' };
    document.getElementById('subject-title').innerText = titles[subject] + " (ชุดที่ " + setNumber + ")";
    document.getElementById('total-q').innerText = activeQuestions.length;

    loadQuestion();
}

function loadQuestion() {
    document.getElementById('explanation-area').style.display = 'none';
    document.getElementById('btn-next-q').style.display = 'none';
    
    const q = activeQuestions[currentIndex];
    document.getElementById('current-q').innerText = currentIndex + 1;
    document.getElementById('question-text').innerText = q.question;
    
    const percent = ((currentIndex) / activeQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = percent + '%';

    const optsDiv = document.getElementById('options-container');
    optsDiv.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, q, btn);
        optsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, questionObj, btnElement) {
    const allBtns = document.querySelectorAll('.btn-option');
    allBtns.forEach(b => b.disabled = true);

    const correctIndex = questionObj.answer;

    if(selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
        playSound('correct');
    } else {
        btnElement.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
        playSound('wrong');
        wrongAnswersLog.push(questionObj);
    }

    document.getElementById('explanation-text').innerText = questionObj.explanation || "ไม่มีคำอธิบายเพิ่มเติม";
    document.getElementById('explanation-area').style.display = 'block';

    const nextBtn = document.getElementById('btn-next-q');
    nextBtn.style.display = 'inline-block';
    nextBtn.innerText = (currentIndex === activeQuestions.length - 1) ? "ดูผลคะแนน 📊" : "ข้อถัดไป ➜";
}

function nextQuestion() {
    playSound('click');
    currentIndex++;
    if(currentIndex < activeQuestions.length) { loadQuestion(); } 
    else { processAndShowScore(); }
}

function processAndShowScore() {
    playSound('correct');
    
    if(!userHistory[currentSubjectName]) userHistory[currentSubjectName] = { correct: 0, total: 0 };
    userHistory[currentSubjectName].correct += score;
    userHistory[currentSubjectName].total += activeQuestions.length;
    localStorage.setItem('policeQuizHistory', JSON.stringify(userHistory));

    let earnedExp = score * 10;
    if(score === activeQuestions.length) earnedExp += 50; 

    treeData.exp += earnedExp;
    localStorage.setItem('policeTreeData', JSON.stringify(treeData));
    updateTreeDisplay(); 

    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'block';
    document.getElementById('final-score').innerText = score + "/" + activeQuestions.length;
    document.getElementById('gained-xp').innerText = earnedExp; 

    const weaknessDiv = document.getElementById('weakness-tags');
    weaknessDiv.innerHTML = "";
    const reviewDiv = document.getElementById('review-list');
    reviewDiv.innerHTML = "";

    if(wrongAnswersLog.length > 0) {
        let topicCounts = {};
        wrongAnswersLog.forEach(q => {
            let topic = detectTopic(q.question);
            topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            let item = document.createElement('div');
            item.className = 'review-item';
            item.innerHTML = `<div class="review-q">❌ ${q.question}</div><div class="review-ans">✅ ตอบ: ${q.options[q.answer]} <br> <small>(${q.explanation || '-'})</small></div>`;
            reviewDiv.appendChild(item);
        });

        let sortedTopics = Object.keys(topicCounts).sort((a,b) => topicCounts[b] - topicCounts[a]);
        sortedTopics.forEach(topic => {
            let span = document.createElement('span');
            span.className = 'tag-pill';
            span.innerText = `${topic} (${topicCounts[topic]})`;
            weaknessDiv.appendChild(span);
        });
    } else {
        weaknessDiv.innerHTML = "<span style='color:green; font-weight:bold;'>สุดยอด! ถูกทุกข้อ 🎉</span>";
        reviewDiv.innerHTML = "<p>ไม่มีข้อที่ต้องทบทวน</p>";
    }
}

function showOverallDashboard() {
    playSound('click');
    document.getElementById('menu-area').style.display = 'none';
    document.getElementById('dashboard-area').style.display = 'block';

    const container = document.getElementById('stats-container');
    container.innerHTML = '';
    
    let totalCorrectAll = 0;
    let totalQuestionsAll = 0;
    
    const titles = { 'thai': 'ภาษาไทย', 'computer': 'คอมพิวเตอร์', 'law': 'กฎหมาย', 'society': 'สังคม', 'math': 'คณิตศาสตร์', 'english': 'ภาษาอังกฤษ' };

    for (const key of Object.keys(titles)) {
        const data = userHistory[key] || { correct: 0, total: 0 };
        let percent = 0;
        let barColor = '#dfe6e9';
        let label = 'ยังไม่เคยสอบ';
        let advice = '';

        if (data.total > 0) {
            percent = Math.round((data.correct / data.total) * 100);
            totalCorrectAll += data.correct;
            totalQuestionsAll += data.total;
            label = `${percent}% (${data.correct}/${data.total} ข้อ)`;
            
            if(percent >= 80) { barColor = '#00b894'; advice = '✅ แม่นยำ'; }
            else if(percent >= 60) { barColor = '#fdcb6e'; advice = '⚠️ พอใช้'; }
            else { barColor = '#ff7675'; advice = '❌ ต้องเรียนเพิ่ม'; }
        }

        container.innerHTML += `
            <div class="stat-row">
                <span>${titles[key]}</span>
                <span>${label} <span style="font-size:0.8rem; color:${barColor}; font-weight:bold;">${advice}</span></span>
            </div>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" style="width: ${percent}%; background: ${barColor};"></div>
            </div>
        `;
    }

    let overallPercent = 0;
    if(totalQuestionsAll > 0) overallPercent = Math.round((totalCorrectAll / totalQuestionsAll) * 100);
    
    document.getElementById('total-percent').innerText = `${overallPercent}%`;
    
    const adviceBox = document.getElementById('overall-advice');
    if(totalQuestionsAll === 0) {
        adviceBox.innerText = "เริ่มทำข้อสอบสัก 1 วิชา เพื่อให้ระบบเริ่มวิเคราะห์ข้อมูลครับ";
    } else if(overallPercent >= 80) {
        adviceBox.innerText = "ยอดเยี่ยม! คุณมีความพร้อมสูงมาก รักษามาตรฐานนี้ไว้";
        adviceBox.style.background = "#d4edda"; adviceBox.style.color = "#155724";
    } else if(overallPercent >= 60) {
        adviceBox.innerText = "อยู่ในเกณฑ์สอบผ่าน! แต่ห้ามประมาท ให้เน้นวิชาที่ยังได้สีแดง";
        adviceBox.style.background = "#fff3cd"; adviceBox.style.color = "#856404";
    } else {
        adviceBox.innerText = "ยังต้องพยายามเพิ่ม! วิชาไหนได้สีแดง คือจุดที่ต้องรีบอ่านทบทวนด่วนครับ";
        adviceBox.style.background = "#f8d7da"; adviceBox.style.color = "#721c24";
    }
}

function resetHistory() {
    if(confirm('คุณต้องการลบประวัติคะแนนสะสมและต้นไม้ทั้งหมดใช่หรือไม่?')) {
        localStorage.removeItem('policeQuizHistory');
        localStorage.removeItem('policeTreeData');
        location.reload();
    }
}

function goHome() {
    document.getElementById('menu-area').style.display = 'block';
    document.getElementById('set-selection-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('dashboard-area').style.display = 'none';
    updateTreeDisplay();
}
