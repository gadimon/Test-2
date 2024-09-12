
const soldiers = JSON.parse(localStorage.getItem("soldiers")) || [];
const table = document.querySelector("#table");
const storageKey = "soldierList";
const inputName = document.getElementById("inputName")
const inputRank = document.getElementById("inputRunk")
const inputPosition = document.getElementById("inputPosition")
const inputPlatoon = document.getElementById("inputPlatoon")
const inputMissionTime = document.getElementById("inputMissionTime")
const select = document.getElementById("select")
const inputSubmit = document.getElementById("inputSubmit")

const tbody = document.getElementById("tbody");

function saveSoldiers() {
    const stringSoldiers = JSON.stringify(soldiers)
    localStorage.setItem("soldiers", stringSoldiers)
}

function renderSoldier(filtereSoldiers = soldiers) {
    tbody.textContent = "";
    filtereSoldiers.forEach(soldier => {
        const tr = document.createElement("tr");
        //מייצר תא שם מלא
        const fullNameTd = document.createElement("td");
        fullNameTd.textContent = inputName.value;
        tr.append(fullNameTd)

        // מייצר תא לדרגה
        const rankTd = document.createElement("td");
        rankTd.textContent = inputRank.value;
        tr.append(rankTd)

        //מייצר תא לעמדה
        const positionTd = document.createElement("td");
        positionTd.textContent = inputPosition.value;
        tr.append(positionTd)

        //מייצר תא למחלקה
        const platoonTd = document.createElement("td");
        platoonTd.textContent = inputPlatoon.value;
        tr.append(platoonTd)

        //מייצר תא לזמן
        const missionTimeTd = document.createElement("td");
        missionTimeTd.textContent = inputMissionTime.value;
       // missionTimeTd = () => timer()
        tr.append(missionTimeTd)

        //מייצר תא לסטטוס
        const selectTd = document.createElement("td");
        selectTd.textContent = select.value;
        tr.append(selectTd)

        //מייצר את תא הפעולות
        const actionsTd = document.createElement("td");
        //למחוק חייל
        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", "removeButton");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => deleteSoldier(soldier.id)
        actionsTd.append(removeButton)
        //אופצייה להפעלת משימה
        const missionButton = document.createElement("button");
        missionButton.setAttribute("id", "missionButton");
        missionButton.textContent = "Remove";
        missionButton.onclick = () => mission(soldier.id)
        actionsTd.append(missionButton)
        //עדכון חייל
        const editButton = document.createElement("button");
        editButton.setAttribute("id", "edit")
        editButton.textContent = "Edit"
        editButton.onclick = () => editSoldier(soldier.id)
        actionsTd.append(editButton);

        tr.append(actionsTd);
        tbody.append(tr);  
    })
}
function generateId() {
    return Math.random().toString(3, 6).substring(2, 9)
}

inputSubmit.addEventListener("click", addSoldier)
function addSoldier(e) {
    e.preventDefault();
    const soldier = {id: generateId()};
    soldiers.push(soldier);
    saveSoldiers()
    renderSoldier()   
}

const remove = document.getElementById("missionButton")
remove.addEventListener("click", deleteSoldier)

function deleteSoldier()
{
    items.splice(id, 1)
    saveSoldiers()
    renderSoldier()
}

renderSoldier()
