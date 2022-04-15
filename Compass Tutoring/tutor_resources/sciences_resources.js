// List of recipes on the front page
async function buidSciencesResources(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("sciences_resource_section");
    
    for (const info of sciences_resources) {
        if (id == null || info.id == id) {
            let link = document.createElement('a'); link.href = info.link; link.classList.add('resource_box')
            let box = document.createElement('div'); 
                let title = document.createElement('h2'); title.innerText = info.title; title.style.textAlign = 'center';
                box.appendChild(title);
                let dscr = document.createElement('p'); dscr.innerText = info.dscr; dscr.style.fontSize = '16px';
                box.appendChild(dscr);
                let category = document.createElement('div'); category.classList.add('row2');
                    let ctg_1 = document.createElement('button'); ctg_1.classList.add('ctg-buttons'); ctg_1.classList.add('grade'); ctg_1.innerHTML = "Grade ".concat(info.grade);
                    category.appendChild(ctg_1);
                    let ctg_2 = document.createElement('button'); ctg_2.classList.add('ctg-buttons');
                    if (info.category == 'Book') {
                        ctg_2.innerHTML = 'Book 📗';
                        ctg_2.style.backgroundColor = '#a1ffa1';
                        category.appendChild(ctg_2);
                    }
                    if (info.category == 'File') {
                        ctg_2.innerHTML = 'File 📄';
                        ctg_2.style.backgroundColor = '#a1ffa1';
                        category.appendChild(ctg_2);
                    }
                    if (info.category == 'Website') {
                        ctg_2.innerHTML = 'Website 💻';
                        ctg_2.style.backgroundColor = '#a1ffa1';
                        category.appendChild(ctg_2);
                    }  
                box.appendChild(category);
                link.appendChild(box)
            section.appendChild(link);
        }
    }
}