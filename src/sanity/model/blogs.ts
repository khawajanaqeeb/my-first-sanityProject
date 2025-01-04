// import { defineField, validation } from "sanity"

export const Blogs = {
    name:"blogs",
    title:"Blogs",
    type:"document",
    fields:[
        {
            name:"heading",
            title:"Heading",
            type:"string",
            validation:(rule:any)=> rule.required()
        },

        {
            name:"description",
            title:"Description",
            type:"string"
        },

        {
            name:"image",
            title:"Blog Image",
            type:"image"
        },

        {
            name:"category",
            title:"Category",
            type:"reference",
            to:[{type:"category"}]
        }
 
    ]
    
}
