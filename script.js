function generate(){

let t = document.getElementById("title").value || "Untitled Story";
let g = document.getElementById("genre").value || "General";
let c = document.getElementById("concept").value || "No concept";

let hook = `⚡ STOP SCROLLING...`;
let emotionalHook = `This is something you were never told about ${c}...`;

let script = `

🎬 TITLE: ${t}

📚 GENRE: ${g}

🔥 VIRAL HOOK:

${hook}

🧠 EMOTIONAL OPENING:

${emotionalHook}

✍️ STORY SCRIPT:

Long ago, everything was normal...

But then ${c} changed everything forever...

Nobody expected what happened next...

History took a shocking turn...

🎬 SCENE FLOW:

1. Shock Hook (0-3 sec)

2. Mystery Question

3. Rising Conflict

4. Big Twist

5. Emotional Ending

📈 VIRAL TITLE IDEAS:

- You Won’t Believe the Truth of ${t}

- The Dark Secret Behind ${c}

- This Changed Everything Forever

🔥 HASHTAGS:

#viral #story #history #ai #youtube #shorts

`;

document.getElementById("out").innerText = script;

}
