# schema
require: boolean

minLength: number

maxLength:number

number:boolean

date:boolean

float:boolean

int:boolean

email:boolean

phone:boolean

regular:boolean

custom:<regular|function>

message:

rules:[{require:true,msg:'ddddddd},{minLength:10,msg:''}]

<input   rules:rules /> 
<form />


