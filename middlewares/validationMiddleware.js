
import {check, validationResult} from "express-validator"


export let usersValidation = [

    check("firstName").escape().trim().isLength({min:3}).withMessage("minimum character required is 3"),

    check("lastName").escape().trim().isLength({max:20}).withMessage("maximum characters allowed are 20"),

    check("email").isEmail().normalizeEmail().withMessage("please provide us with valid email"), 

  /*   check("password").exists().isLength({min:5, max:20}).withMessage("your password is too short or too long") */
  check("password").exists().isLength({min:3}).withMessage("password is too shorts...").isLength({max:20}).withMessage("password is too long ..."),

  (req,res,next)=>{
    const result = validationResult(req)
    if(result.isEmpty()){
      next()
    }else{

      const error = result.errors.reduce((acc,currentItem)=>{
        acc [ currentItem.param ]  = currentItem.msg
        return acc
      } , {} )

      next({message:error})
    }
  }


]
