class Report {
  constructor(results){
    this.results = results;

  }

  build(){
    //Split array 
    const resultArray = this.results.split(",")
    const report = {Green: 0, Amber: 0, Red: 0};
    
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] == report[resultArray[i]]){
       report[resultArray[i]] += 1; 
      }

    }
    //put results into a hash
    //return string containing number of each result
    
    
    return report
  }

}


module.exports = Report