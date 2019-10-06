/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus = 'family', knowsProgramming = true, config = {family: 4}) {
      let hours;
      if (knowsProgramming == true) {   
        hours = 800; // if student has coding skill he needs time to learn only master js stage (800 hours)
        } else { hours = 1300}; // otherwise student has to learn full course: basic and master stages (500 + 800 hours)

      let weeks = Math.ceil(hours / config[focus]);

      return weeks;
      
  };
  
  
  