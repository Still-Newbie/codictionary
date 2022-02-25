type schedule = {
        "USERID" : string
        "TODOKEY" : string,
        "TODOTYPE" : string,
        "STARTDT" : string,
        "STARTTM" : string,
        "ENDDT" : string,
        "ENDTM" : string,
        "ALLDAYYN" : string,
        "LOOPYN" : string,
        "LOOPTERM" : number,
        "LOOPTYPE" : string,
        "TODOPOINT" : number,
        "TODOTITLE" : string,
        "TODODETAIL" : string,
        "RSTAMP" : string,
        "RIP" : string,
        "MSTAMP" : string,
        "MIP" : string
    }

type stamp = {
        "USERID" : string
        "STAMPKEY" : string,
        "STAMPTYPE" : string,
        "STAMPNAME" : string,
        "STAMPSHAPE" : string,
        "STAMPPOINT" : number,
        "RSTAMP" : string,
        "RIP" : string,
        "MSTAMP" : string,
        "MIP" : string

}

const types = {
}

export {types, schedule, stamp}