import mongoose from "mongoose"
import RecordsCollection from "../models/recordsschema.js"
import {faker} from "@faker-js/faker"
import UsersCollection from "../models/usersschema.js"


mongoose.connect("mongodb://127.0.0.1:27017/live-coding-record-shop-fbw02",()=>{
    console.log("connected to DB ....")
})


async function addRecords (){

    const recordPromises = Array(20).fill(null).map(()=>{ 
        const record = new RecordsCollection({
            title: faker.commerce.productName() , 
            author: faker.name.fullName(), 
            year : faker.date.past().getFullYear(), 
            img: faker.image.image() ,
            price:faker.commerce.price() 
        })
        return record.save()
    })

    await Promise.all(recordPromises)
    mongoose.connection.close()
} 
/* addRecords() */

async function addUsers (){

    const userPromises = Array(20).fill(null).map(()=>{ 
        const user = new UsersCollection( {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        } )
        return user.save()
    })
    await Promise.all(userPromises)
    console.log("20 users stored in DB!")
    mongoose.connection.close()
} 

addUsers()
