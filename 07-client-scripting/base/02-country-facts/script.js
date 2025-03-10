document.addEventListener("DOMContentLoaded", async function () {
    let data = [];
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (res.ok) {
      data = await res.json();
    }
    console.log(data);
  });

  const hierarchy = {};
  data.forEach((obj)=> {
    if(!("subregion" in obj)){
        obj.subregion = "-";
    }
    if(!(obj.region in hierarchy)){
        hierarchy[obj.region] = {};
    }
    if(!(obj.subregion in hierarchy[obj.region])){
        hierarchy[obj.region][obj.subregion] = {};
    }

    hierarchy[obj.region][obj.subregion][obj.name.common] = obj;
  });

//   console.log(hierarchy);
  
const region = document.querySelector("#regions");
const subregion = document.querySelector("#subregions");
const country = document.querySelector("#countries");
const facts = document.querySelector("facts");

const table = `<h2>Facts about Qatar</h2>
        <tr>
        <th scope="row">Official Name</th>
        <td>State of Qatar (دولة قطر)</td>
        </tr>
        <tr>
        <th scope="row">Capital City</th>
        <td>Doha</td>
        </tr>
        <tr>
        <th scope="row">Population</th>
        <td>2,881,060</td>
        </tr>
        <tr>
        <th scope="row">Languages</th>
        <td>Arabic</td>
        </tr>
        <tr>
        <th scope="row">Currencies</th>
        <td>Qatari riyal (ر.ق)</td>
        </tr>
        <tr>
        <th scope="row">TLD</th>
        <td>.qa</td>
        </tr>
    </tbody>
    </table>` ;

regions.innerHTML = Object.keys(hierarchy)
  .sort()
  .map((region)=> `<option value="${region}"></option>`)
  .join();

  subregions.innerHTML = Object.keys(hierarchy[region.value])
  .sort()
  .map((subregion)=> `<option value="${subregion}">${subregion}</option}`)
  .join();

regions.addEventListener("change",updateSub);