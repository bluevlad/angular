export class ExamStat {
    constructor(
       public examCd: number,
       public examNm: string,
       public sbjCd: number,
       public sbjNm: string,
       public sbjPoint: number,
       public avgPoint: number,
       public sumPoint: number,
    ) {
    }
  }
