export class Exam {
  constructor(
              public examCd: number, /** 시험코드 */
              public examNm: string, /** 시험명 */
              public sbjCd: number, /** 과목코드 */
              public sbjNm: string, /** 과목명 */
              public itemNo: number, /** 문제번호 */
              public passAns: string, /** 문제정답 */
              public userId: string, /** 사용자아이디 */
              public userNm: string, /** 사용자명 */
              public regDt: string, /** 등록일시 */
              public regId: string, /** 등록자ID */
              public sbjPoint: number, /** 과목취득점수 */
              public ans: string, /** 제출답안 */
              public YN: string, /** 정답여부 */
              public isUse: string, /** 사용 여부 */
              public sbjCnt: number, /** 과목수 */
              public itemCnt: number, /** 문제수 */
             ) {
  }
}
