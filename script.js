functiasync function generateFormula() {
    const userInput = document.getElementById('userInput').value;
    const response = await fetch('https://your-vercel-app.vercel.app/api/generateFormula', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ querhttps://ai-excel-formula-assistant-nzrdl8gv-ankit-chandolas-projects.vercel.app/api/generateFormula
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Generated Formula: ${data.formula}`;
}

function sendFeedback(success) {
    // Placeholder function to handle user feedback
    console.log(`Feedback received: ${success ? 'Yes' : 'No'}`);
}
