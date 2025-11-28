function botReply(msg) {
    msg = msg.toLowerCase();
  
    if (msg.includes("hi") || msg.includes("hello")) return "Hello! How can I assist you?";
    if (msg.includes("name")) return "I'm DevOpsBot.";
    if (msg.includes("devops")) return "DevOps means automation, CI/CD, Docker, AWS etc.";
    if (msg.includes("help")) return "Sure! Ask me anything about DevOps.";
    
    return "Sorry, I don't understand that yet.";
  }
  
  function sendMessage() {
    let input = document.getElementById("user-input");
    let msg = input.value;
    if (!msg) return;
  
    let chatBox = document.getElementById("chat-box");
  
    chatBox.innerHTML += `<div class="message user">${msg}</div>`;
    chatBox.innerHTML += `<div class="message bot">${botReply(msg)}</div>`;
    input.value = "";
  
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  