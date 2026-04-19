let expenses = [];

document.getElementById('add-expense-btn').addEventListener('click', () => {
    const payer = document.getElementById('payer').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const peopleStr = document.getElementById('participants').value;

    if (!payer || isNaN(amount) || !peopleStr) {
        alert("Please fill all fields");
        return;
    }

    const participants = peopleStr.split(',').map(p => p.trim());
    expenses.push({ payer, amount, participants });

    // Updated with proper class for styling
    const li = document.createElement('li');
    li.className = "expense-entry";
    li.innerHTML = `<strong>${payer}</strong> paid ₹${amount} for [${participants.join(', ')}]`;
    document.getElementById('display-list').appendChild(li);

    // Clear inputs
    document.getElementById('payer').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('participants').value = '';
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const balances = {};

    // 1. Calculate Net Balance for everyone
    expenses.forEach(exp => {
        const share = exp.amount / exp.participants.length;
        
        // Payer gets credit
        balances[exp.payer] = (balances[exp.payer] || 0) + exp.amount;
        
        // Participants get debt
        exp.participants.forEach(p => {
            balances[p] = (balances[p] || 0) - share;
        });
    });

    // 2. Separate into Creditors and Debtors
    let creditors = [];
    let debtors = [];

    for (let person in balances) {
        if (balances[person] > 0.01) creditors.push({ name: person, amount: balances[person] });
        else if (balances[person] < -0.01) debtors.push({ name: person, amount: Math.abs(balances[person]) });
    }

    // 3. Greedy Settlement Algorithm
    const resultsContainer = document.getElementById('settlement-results');
    resultsContainer.innerHTML = '';
    
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
        let payment = Math.min(debtors[i].amount, creditors[j].amount);
        
        const resDiv = document.createElement('div');
        resDiv.className = 'result-item';
        resDiv.innerHTML = `<strong>${debtors[i].name}</strong> pays <strong>₹${payment.toFixed(2)}</strong> to <strong>${creditors[j].name}</strong>`;
        resultsContainer.appendChild(resDiv);

        debtors[i].amount -= payment;
        creditors[j].amount -= payment;

        if (debtors[i].amount < 0.01) i++;
        if (creditors[j].amount < 0.01) j++;
    }

    if (resultsContainer.innerHTML === '') {
        resultsContainer.innerHTML = '<p>No settlements needed!</p>';
    }
});