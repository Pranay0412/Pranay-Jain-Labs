# 🧮 SettleUp-Engine: Transaction Optimizer

A high-performance algorithm lab designed to solve the **Minimum Cash Flow Problem** among a group of people.

## 🧠 The Algorithm (Greedy Approach)
This engine uses a **Greedy Algorithm** to minimize the total number of transactions required to settle all debts.

### Logic Flow:
1.  **Net Balance Calculation:** For every person, we calculate `(Total Paid) - (Total Owed)`.
    * **Creditors (+ve):** People who are owed money.
    * **Debtors (-ve):** People who owe money.
2.  **Matching:** The algorithm finds the person with the maximum debt and the person with the maximum credit.
3.  **Settlement:** A transaction is created for the minimum of the two amounts. 
4.  **Recursion:** The process repeats until all balances are zero.



## 🏗️ Data Structures Used
- **Hash Map (Object):** Used to store the net balances of participants for O(1) lookup time.
- **Dynamic Arrays:** Used to separate and sort debtors and creditors.
- **Greedy Logic:** Ensures that in each step, at least one person's debt is completely settled.

## 🎨 Theme Details
- **Primary:** `#C87740` (Copper Accent)
- **Background:** `#2E1F26` (Dark Plum)
- **Style:** Modern card-based UI with responsive Flexbox layout.