let res
const getData=async ()=>{
  try {
    res=await fetch('https://data.covid19india.org/v4/min/data.min.json')
    res = await res.json()

    console.log(res)
  } catch (error) {
    console.log("FAILED TO FETCH DATA!!!")
    
  }
}
getData();
const stateNodes=document.querySelectorAll('path')
const stateName=document.querySelector('#state-details header')
const confirmedCases=document.querySelector('.confirmed-cases span')
const deceasedCases=document.querySelector('.deceased-cases span')
const recoveredCases=document.querySelector('.recovered-cases span')
const testedCases=document.querySelector('.tested-cases span')
const vaccinatedCases=document.querySelector('.vacc-cases span')
const updateDate=document.querySelector('.update-date span')

for(let i of stateNodes){
  i.classList.add('forced-hover')
  i.addEventListener('click', ()=>{
    let stateCode=i.getAttribute('id')
    const stateObj=res[stateCode].total;
    deceasedCases.innerText=`${stateObj.deceased}`
    recoveredCases.innerText=`${stateObj.recovered}`
    confirmedCases.innerText=`${stateObj.confirmed}`
    testedCases.innerText=`${stateObj.tested}`
    vaccinatedCases.innerText=`${stateObj.vaccinated2}`
    updateDate.innerText=`${res[stateCode].meta.date}`
    console.log(stateCode)
    stateName.innerText=`${i.getAttribute('title')}`
  })
}

// 