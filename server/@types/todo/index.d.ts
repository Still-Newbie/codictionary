declare module 'todo' {
    
    export namespace todoTypes{

        type Schedule = {
            USERID : string
            TODOKEY : string,
            TODOTYPE : string,
            STARTDT : string,
            STARTTM : string,
            ENDDT : string,
            ENDTM : string,
            ALLDAYYN : string,
            LOOPYN : string,
            LOOPTERM? : number,
            LOOPTYPE? : string,
            TODOPOINT? : number,
            TODOTITLE : string,
            TODODETAIL? : string,
            RSTAMP? : string,
            RIP? : string,
            MSTAMP? : string,
            MIP? : string
        }

        type Stamp = {
            USERID : string
            STAMPKEY : string,
            STAMPTYPE : string,
            STAMPNAME : string,
            STAMPSHAPE : string,
            STAMPPOINT : number,
            RSTAMP : string,
            RIP : string,
            MSTAMP : string,
            MIP : string
        }

        type DateBetween = {
            SDATE : string
            EDATE : string
        }
    }

}
