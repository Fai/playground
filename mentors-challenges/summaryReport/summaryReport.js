/*  
 *  Calculates the average age of a group of people by department.
 *  Calculates the total salary of all employees in a company.
 *  Finds the highest-paid employee on each department
 *  Grouping by age distribution (Categorize by your decision)
 */

const jsonData = require('./test.json');

const fs = require('fs');
const importCSV = fs.readFileSync('./test.csv', 'utf8');
console.log(importCSV);

const convertCSV = (csv, splitter) => {
  const [keys, ...rest] = csv
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));
  const csvData = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return csvData;
}
console.log(convertCSV(importCSV, ','))

const jsonDataByDepartment = jsonData.reduce((group, data) => {
  const { department } = data;
  group[department] = group[department] ?? [];
  group[department].push(data);
  return group;
},{})

const findAverageByDepartment = (dataByDepartment, observation) => {
  const averageByDepartment = {};
  for(let department in dataByDepartment) {
    averageByDepartment[department] = 0;
    for(let person in dataByDepartment[department]) {
      averageByDepartment[department] += dataByDepartment[department][person][observation];
    }
    averageByDepartment[department] /= dataByDepartment[department].length; 
  }
  return averageByDepartment;
}

const findTotal = (companyData, observation) => {
  const companyTotal = 0;
  for(let person in companyData) {
    companyTotal += companyData[person][observation];
  }
  return companyTotal;
}

const findTotalByDepartment = (dataByDepartment, observation) => {
  const totalByDepartment = {};
  for(let department in dataByDepartment) {
    totalByDepartment[department] = 0;
    for(let person in dataByDepartment[department]) {
      totalByDepartment[department] += dataByDepartment[department][person][observation];
    }
  }
  return totalByDepartment;
}

const findHighestByDepartment = (dataByDepartment, observation) => {
  const highestByDespartment = {};
  for(let department in dataByDepartment) {
    let max = 0;
    for(let person in dataByDepartment[department]) {
      if(max < dataByDepartment[department][person][observation]) {
        max = dataByDepartment[department][person][observation];
        highestByDespartment[department] = dataByDepartment[department][person].name;
      }
    }
  }
  return highestByDespartment;
}

const groupByAge = (data) => {
  const ageDistribution = {
    junior : [],
    mid : [],
    senior : [],
  }
  for(let person in data) {
    if(data[person].age<30) {
        ageDistribution.junior.push(data[person]);
    }
    if(data[person].age<40) {
        ageDistribution.mid.push(data[person]);
    }
    if(data[person].age>=40) {
        ageDistribution.senior.push(data[person]);
    }
  };
  return ageDistribution;
}