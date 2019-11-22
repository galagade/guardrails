const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { Printer } = require('../models');

global.isEmpty = (str) => {
  if (str) {
    return str.replace(/^\s+/g, '').length;
  }
  return 0

}
global.isObject = (str)=>{
   try{
     JSON.parse(str)
   }catch(e){
     return false
   }
   return true
}
global.isTimestamp = (timestamp)=>{
   if(timestamp != null && isNaN(timestamp) == false && timestamp.length == 13)
      return true

   return false
}
global.validate_add =[
	 check('repositoryName')
    .exists().withMessage('Repository name field is required')
    .custom(value => {
      if (isEmpty(value) == 0) {
        throw new Error('Repository name field is required');
        return false
      } else {
        return true
      }
    }),
    check('findings')
     .exists().withMessage('Findings field is required')
     .custom(value => {
       if (isObject(value) == false) {
         throw new Error('Findings field needs to be a valid JSON');
         return false
       } else {
         return true
       }
     }),
     check('queuedAt')
      .exists().withMessage('QueuedAt field is required')
      .custom(value => {
        if (isTimestamp(value) == false) {
          throw new Error('QueuedAt field needs to be a valid timestamp');
          return false
        } else {
          return true
        }
      }),
      check('scanningAt')
       .exists().withMessage('ScanningAt field is required')
       .custom(value => {

         if (isTimestamp(value) == false) {
           throw new Error('ScanningAt field needs to be a valid timestamp');
           return false
         } else {
           return true
         }
       }),

       check('finishedAt')
        .exists().withMessage('FinishedAt field is required')
        .custom(value => {
          if (isTimestamp(value) == false) {
            throw new Error('FinishedAt field needs to be a valid timestamp');
            return false
          } else {
            return true
          }
        }),
    check('status')
    .exists().withMessage('Status field is required')
    .custom(value => {
      if (isEmpty(value) == 0) {
        throw new Error('Status name field is required');
        return false
      } else {
        return true
      }
    }),

]
