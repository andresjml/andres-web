    const workExp = [
        {country:"USA", position:"Yard Specialist/Transportation Associate", company: "Amazon.com."},
        {country:"USA", position:"CAP-Process Assistant", company: "Amazon.com."},
        {country:"USA", position:"Shipping Clerck", company: "Kendall Toyota."},
        {country:"Venezuela", position:"Sales Manager", company: "AJM Suministros, C.A."},
        {country:"Venezuela", position:"Sales Supervisor", company: "Hidroferca Valencia, C.A."},
        {country:"Venezuela", position:"Routing Analyst", company: "KRAFT Foods Venezuela."},
    ];

    function createWorkLine(work) {
        const line = document.createElement("div");
        line.className = "line";
        
        line.innerHTML = `<h3> COUNTRY: ${work.country}, POSITION: ${work.position}, COMPANY: ${work.company}</h3>`;

        
        return line;
    }

  const lineContainer = document.getElementsByClassName("line-Container")[0];


  for (i = 0; i < workExp.length; i++) {

    const line = createWorkLine(workExp[i])
    lineContainer.appendChild(line)
  };

