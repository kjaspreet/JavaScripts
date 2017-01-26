//Made By: Jaspreet Kaur
//Meal Cost
let m_Cost = Number(process.argv[2])
//Tip Percentage
const tip_Percent = Number(process.argv[3])
//Total Tip Amount
let tip_Amount = ( tip_Percent / 100 ) * m_Cost
let total = tip_Amount + m_Cost
//Log the total Amount
console.log(`your meal cost was $${m_Cost} and a ${tip_Percent}% tip = ${total}`)