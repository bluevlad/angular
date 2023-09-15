<%
/**
 * @Class Name : ExamList.java
 * @Modification Information
 * @
 * @  수정일     수정자         수정내용
 * @ ---------     --------    ---------------------------
 *  2020.04.00	rainend		시험리스트
 *  @author rainend
 *  @version 1.0
 *  @see
 */
%>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="validator" uri="http://www.springmodules.org/tags/commons-validator" %>
<c:set var="pageTitle"><spring:message code="exam.subjectManage.title"/></c:set>
<!DOCTYPE html>
<html>
<head>
<title>${pageTitle} <spring:message code="title.create" /></title><!-- 과목관리 등록 -->
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/com/com.css' />">
<validator:javascript formName="subjectManage" staticJavascript="false" xhtml="true" cdata="false"/>
<script type="text/javaScript">

function fnList() {
    var varFrom = document.getElementById("subjectManage");
    varFrom.action = "<c:url value='/academy/exam/SbjList.do'/>";
    varFrom.submit();
}

function fnUpdate() {
    var varFrom = document.getElementById("subjectManage");
    varFrom.action = "<c:url value='/academy/exam/SbjUpdate.do'/>";

    if(confirm("<spring:message code="common.save.msg" />")){
		varFrom.submit();
    }
}
</script>
</head>

<body>

<form:form commandName="subjectManage" method="post" action="${pageContext.request.contextPath}/academy/exam/SbjUpdate.do' />" onSubmit="fnUpdate(); return false;">
<div class="wTableFrm">
	<!-- 타이틀 -->
	<h2>${pageTitle} <spring:message code="title.create" /></h2>

	<!-- 등록폼 -->
	<table class="wTable" summary="<spring:message code="common.summary.list" arguments="${pageTitle}" />">
	<caption>${pageTitle} <spring:message code="title.create" /></caption>
	<colgroup>
		<col style="width: 16%;"><col style="width: ;">
	</colgroup>
	<tbody>
		<!-- 입력 -->
		<c:set var="inputTxt"><spring:message code="input.input" /></c:set>
		<!-- 과목코드 -->
				<form:hidden path="sbjCd" title="${title} ${inputTxt}" size="40" maxlength="50" />
		<!-- 과목명 -->
		<c:set var="title"><spring:message code="exam.SubjectNm" /></c:set>
		<tr>
			<th><label for="sbjNm">${title}</label> <span class="pilsu">*</span></th>
			<td class="left">
				<form:input path="sbjNm" title="${title} ${inputTxt}" size="40" maxlength="200" />
				<div><form:errors path="sbjNm" cssClass="error" /></div> 
			</td>
		</tr>
	</tbody>
	</table>

	<!-- 하단 버튼 -->
	<div class="btn">
		<span class="btn_s"><a href="<c:url value='/academy/exam/SbjList.do'/>"  title="<spring:message code="button.list" />  <spring:message code="input.button" />"><spring:message code="button.list" /></a></span><!-- 목록 -->
		<input type="submit" class="s_submit" value="<spring:message code="button.save" />" title="<spring:message code="button.save" /> <spring:message code="input.button" />" /><!-- 저장 -->
	</div><div style="clear:both;"></div>
	
</div>

<!-- 검색조건 유지 -->
<input type="hidden" name="searchCondition" value="<c:out value='${ExamVO.searchCondition}'/>" >
<input type="hidden" name="searchKeyword" value="<c:out value='${ExamVO.searchKeyword}'/>" >
<input type="hidden" name="pageIndex" value="<c:out value='${ExamVO.pageIndex}'/>" >
</form:form>

</body>
</html>
